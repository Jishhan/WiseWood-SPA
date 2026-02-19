import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="w-full bg-[#F5F3EF] text-[#1C1C1C] font-light">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/darkSecret-1.png')",
          }}
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-[1.1] max-w-4xl drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
            Designing spaces <br />
            that feel timeless.
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 max-w-xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]">
            A refined approach to commercial and residential interiors.
          </p>

          <Link
            to="/allproject"
            className="mt-10 text-sm tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition"
          >
            VIEW PROJECTS
          </Link>
        </div>
      </div>

      {/* FEATURE PROJECTS - EDITORIAL STYLE */}
      <div className="px-6 md:px-16 py-24 border-t border-[#E5DFD7]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden">
            <Link to="/commercial">
              <img
                src="/Images/dr.cabin-1.png"
                alt="Commercial"
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
              />
            </Link>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl mb-6">Commercial Interiors</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Thoughtfully curated workspaces blending elegance and
              functionality for modern businesses.
            </p>

            <Link
              to="/commercial"
              className="border-b border-[#A1866F] text-[#A1866F] text-sm tracking-wide hover:opacity-70 transition"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>

      {/* RESIDENTIAL - REVERSE LAYOUT */}
      <div className="px-6 md:px-16 py-24 border-t border-[#E5DFD7]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl mb-6">Residential Spaces</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              Elegant living experiences crafted with warmth, detail, and
              architectural precision.
            </p>

            <Link
              to="/residential"
              className="border-b border-[#A1866F] text-[#A1866F] text-sm tracking-wide hover:opacity-70 transition"
            >
              EXPLORE
            </Link>
          </div>

          {/* Image */}
          <div className="overflow-hidden order-1 md:order-2">
            <Link to="/residential">
              {" "}
              <img
                src="/Images/contempLiving-2.png"
                alt="Residential"
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* PROCESS - CLEAN MINIMAL LINE STYLE */}
      <div className="px-6 md:px-16 py-24 border-t border-[#E5DFD7] text-center">
        <h3 className="text-4xl mb-16">Our Process</h3>

        <div className="grid md:grid-cols-4 gap-12 text-left max-w-6xl mx-auto">
          {["Briefing", "Design", "Execution", "Handover"].map(
            (item, index) => (
              <div key={index}>
                <p className="text-[#A1866F] mb-4">0{index + 1}</p>
                <h4 className="text-xl mb-3">{item}</h4>
                <p className="text-[#6B6B6B] text-sm">
                  A refined, structured, and seamless journey from concept to
                  completion.
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      {/* STATEMENT SECTION */}
      <div className="px-6 md:px-16 py-32 border-t border-[#E5DFD7] text-center">
        <h4 className="text-5xl max-w-3xl mx-auto leading-tight">
          We create spaces that quietly speak luxury.
        </h4>
      </div>

      {/* FEATURE IMAGE SECTION */}
      <div className="px-6 md:px-16 py-24 border-t border-[#E5DFD7]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src="/Images/darkSecret-1.png" // 👈 change image if needed
              alt="Luxury Interior"
              className="w-full h-[600px] object-cover hover:scale-105 transition duration-700 ease-out"
            />
          </div>

          <p className="mt-6 text-sm tracking-widest text-[#A1866F]">
            SIGNATURE DESIGN
          </p>
        </div>
      </div>

      {/* INSTAGRAM + FOOTER */}
      <div className="px-6 md:px-16 py-12 border-t border-[#E5DFD7] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#6B6B6B]">© 2025 Visewood Studio</p>

        <Link className="flex items-center gap-2 text-[#A1866F] hover:opacity-70 transition">
          <FaInstagram />
          ViseWood.3D
        </Link>
      </div>
    </section>
  );
};

export default Home;
