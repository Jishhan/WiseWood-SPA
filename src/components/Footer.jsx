import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-5 py-10">
        <div className="flex justify-around md:flex-row md:justify-around md:items-start gap-5 text-center md:text-left">
          {/* Logo + Address */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Update logo path here */}
            <a href="/">
              <img
              src="/Images/logoViseWood.png"
              alt="WiseWood logo"
              className="w-24 h-auto"
            />
            </a>

            <p className="text-gray-700 max-w-xs">
              UG-40, Orbit mall, AB Road, near C21 mall, Indore.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition"
              >
                {/* Update icon path here */}
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="flex justify-center md:justify-start">
            <ul className="flex flex-col gap-6 text-gray-700 text-base">
              <li>
                <Link to="/" className="hover:text-[#d30d38] text-[#7D1128] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:text-[#7D1128] text-[#7D1128] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#7D1128] text-[#7D1128] transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#7D1128] text-[#7D1128] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#7D1128] py-4">
        <p className="text-white text-center text-sm pb-1">
          © WiseWood 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
