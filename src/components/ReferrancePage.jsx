import React from "react";

const ReferrancePage = ({ title, images }) => {
  const isGrid = images.length >= 4;

  return (
    <section className="bg-[#F8F6F2] text-[#1E1E1E]">

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            {title}
          </h1>
        </div>

        {/* IMAGES */}
        <div
          className={
            isGrid
              ? "grid grid-cols-1 md:grid-cols-2 gap-16"
              : "flex flex-col gap-24"
          }
        >
          {images.map((img, index) => (
            <div key={index} className="group overflow-hidden">

              <img
                src={img}
                alt={`${title}-${index}`}
                className="
                  w-full 
                  h-[500px] 
                  md:h-[650px]
                  object-cover 
                  transition-transform 
                  duration-700 
                  ease-out
                  group-hover:scale-[1.03]
                "
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReferrancePage;
