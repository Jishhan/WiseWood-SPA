import React from "react";

const Service = () => {
  const services = [
    {
      title: "Electrical & Plumbing Layouts",
      desc: "Thoughtfully planned systems integrated seamlessly into your space.",
    },
    {
      title: "False Ceiling Design",
      desc: "Modern ceiling concepts that elevate aesthetics and lighting.",
    },
    {
      title: "Modular Kitchen",
      desc: "Functional, ergonomic, and stylish kitchen solutions.",
    },
    {
      title: "Custom Furniture",
      desc: "Tailored furniture pieces crafted to match your space.",
    },
    {
      title: "3D Interior Visualization",
      desc: "Realistic 3D renders to help you imagine your dream interior.",
    },
    {
      title: "Space Planning",
      desc: "Optimized layouts designed for comfort and efficiency.",
    },
    {
      title: "Wall & Floor Finishes",
      desc: "Premium materials and textures for elegant interiors.",
    },
    {
      title: "Lighting Design",
      desc: "Smart lighting plans that transform ambiance.",
    },
    {
      title: "Color Consultation",
      desc: "Perfect color palettes that define your interior style.",
    },
    {
      title: "Project Execution",
      desc: "End-to-end execution ensuring quality craftsmanship.",
    },
    {
      title: "Home Renovation",
      desc: "Complete remodeling solutions tailored to your needs.",
    },
    {
      title: "Furniture Layouts",
      desc: "Strategic placement for maximum comfort & space utility.",
    },
  ];

  return (
    <section className=" bg-white mb-10">
      <div className="w-full h-[500px] overflow-hidden mb-10">
        <img
          src="/Images/darkSecret-1.png"
          alt="vrv"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 mb-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#7D1128]">Our Services</h2>
          <p className="text-lg text-[#7D1128] mb-2">
            We offer complete end-to-end interior design services across the
            hospitality, residential, and commercial sectors.
          </p>
          <p className="text-xl font-medium text-[#7D1128]">
            Comprehensive Interior Design Solutions – From Concept to Completion
          </p>
          <p className="mt-2 text-[#7D1128]">
            Our end-to-end design services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                border border-[#7D1128]
                rounded-2xl
                p-10
                shadow-sm
                flex
                flex-col
                justify-center
                items-center
                text-center
                h-[270px]
              "
            >
              <h3 className="text-lg text-[#7D1128] font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-[#7D1128] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
