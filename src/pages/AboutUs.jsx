import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us w-full">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <img
          src="/Images/darkSecret-1.png"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-light">
            About ViseWood
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-light text-[#7D1128] mb-6">
          Crafting Luxury Interiors Since 2019
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          ViseWood is an ultra-luxury interior design studio delivering premium
          commercial and residential projects across India. We blend creativity,
          precision, and global design influence to create timeless spaces that
          reflect elegance and personality.
        </p>
      </div>

      {/* Owners Section */}
      <div className="container mx-auto px-4 py-20">
        <h3 className="text-3xl md:text-4xl font-light text-[#7D1128] text-center mb-16">
          Meet The Founders
        </h3>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Owner 1 */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/Images/owner1.jpg"
              alt="Founder 1"
              className="w-64 h-80 object-cover rounded-lg shadow-lg mb-6"
            />

            <h4 className="text-2xl font-semibold mb-2">Mahesh Jhadhav</h4>
            <p className="text-[#7D1128] font-medium mb-3">
              Founder & Creative Director
            </p>

            <p className="text-gray-600 mb-4 max-w-md">
              With over 7+ years of experience in luxury interior design, Rahul
              has led high-end residential and commercial projects across India
              and internationally. His expertise lies in contemporary and
              ultra-modern design execution.
            </p>

            <div className="text-sm text-gray-500 space-y-1">
              <p>✔ 50+ Projects Completed</p>
              <p>✔ Specialist in Luxury Modular Furniture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-16 border-t-4 border-b-4 border-[#7D1128]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#7D1128] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a globally recognized interior design brand known for
              innovation, detail-oriented execution, and luxury transformation
              of spaces.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#7D1128] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-end interiors that combine functionality with
              aesthetic brilliance, ensuring every client experiences a seamless
              and premium journey from concept to completion.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-light text-[#7D1128] mb-12">
          Why Choose ViseWood?
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-[#7D1128] p-6 rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold mb-3">Luxury Design Approach</h4>
            <p className="text-gray-600 text-sm">
              We focus on premium aesthetics with curated materials, refined
              textures, and timeless elegance.
            </p>
          </div>

          <div className="border border-[#7D1128] p-6 rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold mb-3">Global Design Influence</h4>
            <p className="text-gray-600 text-sm">
              Inspired by international trends and cultural diversity, our
              projects reflect global sophistication.
            </p>
          </div>

          <div className="border border-[#7D1128] p-6 rounded-lg hover:shadow-lg transition">
            <h4 className="font-semibold mb-3">End-to-End Execution</h4>
            <p className="text-gray-600 text-sm">
              From concept to handover, we manage every detail ensuring quality
              and timely delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#7D1128] text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-3xl font-light mb-6">Meet The Founders</h3>
          <p className="leading-relaxed">
            Founded by a passionate husband-and-wife duo, ViseWood represents a
            blend of artistic vision and structured execution. Together, they
            bring international exposure and refined craftsmanship into every
            project they undertake.
          </p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Let’s Design Your Dream Space
        </h3>
        <p className="mb-6 text-gray-600">
          Ready to elevate your interiors? Get in touch with us today.
        </p>
        <Link
          to="/contact"
          className="bg-[#7D1128] text-white px-8 py-3 rounded hover:bg-[#6b0f22] transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
