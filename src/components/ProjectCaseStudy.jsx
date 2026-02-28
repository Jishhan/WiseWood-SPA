import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * ProjectCaseStudyWithComparison
 *
 * Props:
 * - title: string
 * - subtitle: string (optional)
 * - finalImages: string[] (images visible on page grid)
 * - journeySlides: array of slides:
 *    { image, title, description } OR
 *    { before, after, title, description }  // shows before/after comparison
 *
 * Usage: see examples below after the component.
 */
const ProjectCaseStudyWithComparison = ({
  title,
  subtitle,
  finalImages = [],
  journeySlides = [],
}) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // start slide when modal opens (optional)
  const modalRef = useRef(null);

  // lock scroll while modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // open modal at a specific slide index (optional)
  const openModalAt = (index = 0) => {
    setStartIndex(index);
    setOpen(true);
    // slight delay for accessibility/focus
    setTimeout(() => {
      if (modalRef.current) {
        const focusable = modalRef.current.querySelector("button, [tabindex]");
        if (focusable) focusable.focus();
      }
    }, 100);
  };

  return (
    <section className="bg-[#F8F6F2] text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">{title}</h1>
          {subtitle && <p className="mt-4 text-[#555] max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {/* Final images grid (click to open modal at corresponding slide) */}
        <div className="grid md:grid-cols-2 gap-10">
          {finalImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openModalAt(idx)}
              className="group cursor-pointer overflow-hidden rounded-md"
            >
              <img
                src={img}
                alt={`${title}-final-${idx}`}
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          // backdrop
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setOpen(false)} // click outside closes
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-5xl bg-white rounded-md shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent bubbling to backdrop
          >
            {/* Close button */}
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-[999] bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-sm hover:scale-105 transition"
            >
              ✕
            </button>

            {/* Swiper: start at startIndex */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              initialSlide={startIndex}
              className="w-full"
            >
              {journeySlides.map((slide, i) => (
                <SwiperSlide key={i}>
                  {/* Slide content */}
                  <div className="w-full">
                    {/* If slide has before+after → render comparison */}
                    {slide.before && slide.after ? (
                      <BeforeAfter
                        before={slide.before}
                        after={slide.after}
                        alt={`${title}-compare-${i}`}
                      />
                    ) : (
                      // simple image
                      <img
                        src={slide.image || slide.after || slide.before}
                        alt={`${title}-slide-${i}`}
                        className="w-full h-[520px] md:h-[600px] object-cover"
                      />
                    )}

                    {/* description area */}
                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-light mb-3">{slide.title}</h3>
                      <p className="text-[#555] leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                            BEFORE / AFTER COMPONENT                         */
/*   Simple, accessible comparison: two stacked images with a draggable      */
/*   range input controlling the reveal width. Works on mouse + touch.        */
/* -------------------------------------------------------------------------- */
const BeforeAfter = ({ before, after, alt = "before-after" }) => {
  const [pos, setPos] = useState(50); // percentage (0..100)
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  // helper to set pos from pointer event
  const updatePosFromClientX = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    let pct = (x / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPos(pct);
  };

  // pointer handlers for drag
  useEffect(() => {
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      updatePosFromClientX(e.clientX || (e.touches && e.touches[0].clientX));
    };
    const onPointerUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    // touch fallback
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] md:h-[600px] select-none" ref={containerRef}>
      {/* after image (bottom) */}
      <img src={after} alt={`${alt}-after`} className="absolute inset-0 w-full h-full object-cover" />

      {/* before image on top with clipped width */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
        aria-hidden="true"
      >
        <img src={before} alt={`${alt}-before`} className="w-full h-full object-cover" />
      </div>

      {/* vertical handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
        }}
        onPointerDown={(e) => {
          draggingRef.current = true;
          updatePosFromClientX(e.clientX);
        }}
        onTouchStart={(e) => {
          draggingRef.current = true;
          updatePosFromClientX(e.touches[0].clientX);
        }}
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-[60px] w-[2px] bg-white/80 shadow"></div>
        <div className="ml-2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-sm shadow">
          ||
        </div>
      </div>

      {/* small slider input (accessible fallback) */}
      <input
        aria-label="Before after slider"
        type="range"
        min="0"
        max="100"
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute left-4 right-4 bottom-4 opacity-0 h-0" // invisible but accessible on keyboard
      />
    </div>
  );
};

export default ProjectCaseStudyWithComparison;