import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3EF] text-[#1C1C1C] border-t border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-16 text-center md:text-left">
          {/* Logo + Address */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="/Images/logoViseWood.png"
                alt="Visewood logo"
                className="w-28 mx-auto md:mx-0"
              />
            </Link>

            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Scheme 140, Near Agrawal School, <br />
              Indore, Madhya Pradesh.
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#A1866F] hover:opacity-70 transition mr-1.5"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#A1866F] hover:opacity-70 transition mr-1.5"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#A1866F] hover:opacity-70 transition mr-1.5"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#A1866F] hover:opacity-70 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm tracking-widest text-[#A1866F]">
              NAVIGATION
            </h4>

            <ul className="space-y-4 text-[#6B6B6B]">
              <li>
                <Link to="/" className="hover:text-[#A1866F] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#A1866F] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A1866F] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Statement */}
          <div className="space-y-6">
            <h4 className="text-sm tracking-widest text-[#A1866F]">STUDIO</h4>

            <p className="text-[#6B6B6B] leading-relaxed text-sm max-w-sm mx-auto md:mx-0">
              We design refined spaces that balance elegance, material richness,
              and architectural harmony.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-20 pt-8 border-t border-[#E5DFD7] text-center text-sm text-[#6B6B6B]">
          © 2025 Visewood Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
