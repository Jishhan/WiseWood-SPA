import React from "react";

const Service = () => {
  const services = [
    {
      title: "Electrical & Plumbing Layouts",
      desc: "Precisely engineered systems integrated seamlessly into your interior design.",
    },
    {
      title: "False Ceiling Design",
      desc: "Architectural ceiling concepts that enhance depth, lighting, and ambience.",
    },
    {
      title: "Modular Kitchen",
      desc: "Elegant, functional kitchens crafted with premium finishes and detailing.",
    },
    {
      title: "Custom Furniture",
      desc: "Bespoke furniture pieces designed exclusively for your space.",
    },
    {
      title: "3D Interior Visualization",
      desc: "High-end 3D renders that bring your vision to life before execution.",
    },
    {
      title: "Space Planning",
      desc: "Thoughtful layouts that balance comfort, movement, and aesthetics.",
    },
    {
      title: "Wall & Floor Finishes",
      desc: "Curated textures and materials that elevate spatial experience.",
    },
    {
      title: "Lighting Design",
      desc: "Layered lighting strategies that transform mood and functionality.",
    },
    {
      title: "Color Consultation",
      desc: "Refined palettes that define tone, warmth, and personality.",
    },
    {
      title: "Project Execution",
      desc: "Complete end-to-end execution with precision craftsmanship.",
    },
    {
      title: "Home Renovation",
      desc: "Full-scale remodeling tailored to modern luxury living.",
    },
    {
      title: "Furniture Layouts",
      desc: "Strategic placement ensuring flow, comfort, and proportion.",
    },
  ];

  return (
    <section className="bg-[#F8F6F2] text-[#1E1E1E]">

      {/* HERO */}
      <div className="relative w-full h-[70vh]">
        <img
          src="/Images/darkSecret-1.png"
          alt="Services Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
            Our Services
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
          Comprehensive Interior Design Solutions
        </h2>

        <p className="text-lg text-[#555] leading-relaxed">
          From concept development to final execution, we deliver refined
          interiors that combine luxury, precision, and timeless design.
        </p>
      </div>

      {/* SERVICES LIST — Editorial Layout */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">

          {services.map((service, index) => (
            <div key={index} className="border-b border-[#DDD] pb-8">
              
              <h3 className="text-2xl font-light mb-4 tracking-wide">
                {service.title}
              </h3>

              <p className="text-[#555] leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1E1E1E] text-white py-20 text-center">
        <h3 className="text-3xl font-light mb-6">
          Let’s Build Something Exceptional
        </h3>
        <p className="text-sm text-gray-300 mb-8">
          Connect with us to begin your design journey.
        </p>

        <a
          href="/contact"
          className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
        >
          CONTACT US
        </a>
      </div>

    </section>
  );
};

export default Service;
