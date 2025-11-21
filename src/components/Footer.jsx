import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-5 py-10">
        <div className="flex justify-around md:flex-row md:justify-between md:items-start gap-5 text-center md:text-left">

          {/* Logo + Address */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src="" alt="WiseWood logo" className="w-24 h-auto" />

            <p className="text-gray-700 max-w-xs">
              UG-40, Orbit mall, AB Road, near C21 mall, Indore. 
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="#" className="hover:scale-110 transition">
                <img src="" alt="insta-icon" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="flex justify-center md:justify-start">
            <ul className="flex flex-col flex-wrap gap-6 text-gray-700 text-base">
              <li>
                <a href="#" className="hover:text-red-600 transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Blogs</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[brown] py-4">
        <p className="text-white text-center text-sm pb-4">
          © wisewood 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;