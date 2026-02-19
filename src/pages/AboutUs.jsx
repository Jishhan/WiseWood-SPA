import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#F8F6F2] text-[#1E1E1E]">

      {/* HERO */}
      <div className="w-full h-[70vh] relative">
        <img
          src="/Images/darkSecret-1.png"
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
            About ViseWood
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
          Crafting Refined Interiors Since 2019
        </h2>

        <p className="text-lg leading-relaxed text-[#555]">
          ViseWood is a luxury interior design studio specializing in high-end
          residential and commercial spaces across India. We merge timeless
          aesthetics with precision execution — delivering interiors that feel
          elegant, intentional, and enduring.
        </p>
      </div>

      {/* FOUNDER SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <img
            src="/Images/owner1.jpg"
            alt="Founder"
            className="w-full h-[520px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <h3 className="text-4xl font-light mb-4">
            Mahesh Jhadhav
          </h3>

          <p className="text-sm tracking-widest text-[#A1866F] mb-6 uppercase">
            Founder & Creative Director
          </p>

          <p className="text-[#555] leading-relaxed mb-6">
            With over 7 years of experience in premium interior execution,
            Mahesh leads the creative vision of ViseWood. His design philosophy
            blends contemporary minimalism with luxurious materiality —
            resulting in spaces that feel calm, bold, and timeless.
          </p>

          <div className="text-sm text-[#777] space-y-2">
            <p>• 50+ Premium Projects Delivered</p>
            <p>• Specialist in Bespoke Luxury Furniture</p>
          </div>
        </div>

      </div>

      {/* VISION & MISSION */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-3xl font-light mb-6">Our Vision</h3>
            <p className="text-[#555] leading-relaxed">
              To be recognized as a design studio that transforms everyday
              spaces into refined environments of elegance and depth.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-light mb-6">Our Mission</h3>
            <p className="text-[#555] leading-relaxed">
              To deliver meticulously crafted interiors that balance
              functionality and luxury — ensuring a seamless experience from
              concept to completion.
            </p>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-light mb-16">
          Why Choose ViseWood
        </h3>

        <div className="grid md:grid-cols-3 gap-12 text-left">

          <div>
            <h4 className="text-xl mb-4">Luxury Material Selection</h4>
            <p className="text-[#555] text-sm leading-relaxed">
              Carefully curated finishes, textures, and details that elevate
              every space beyond trends.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-4">Global Design Perspective</h4>
            <p className="text-[#555] text-sm leading-relaxed">
              Inspired by international aesthetics with a refined Indian
              sensibility.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-4">End-to-End Execution</h4>
            <p className="text-[#555] text-sm leading-relaxed">
              From design concept to final installation, every detail is
              handled with precision and care.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1E1E1E] text-white py-20 text-center">
        <h3 className="text-3xl font-light mb-6">
          Let’s Create Something Timeless
        </h3>

        <Link
          to="/contact"
          className="inline-block mt-4 border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
        >
          CONTACT US
        </Link>
      </div>

    </section>
  );
};

export default AboutUs;
