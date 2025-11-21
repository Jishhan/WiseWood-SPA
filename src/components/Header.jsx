import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- IMPORTANT

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">

        {/* Logo */}
        <img
          src=""
          alt="WiseWood Logo"
          className="w-32 md:w-40"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-base font-medium">

            {/* Home */}
            <li className="group relative">
              <Link to="/" className="header-link hover:text-red-800 transition">Home</Link>
            </li>

            <li className="group relative">
              <Link to="/about" className="header-link hover:text-red-800 transition">About Us</Link>
            </li>

            <li className="group relative">
              <Link to="/service" className="header-link hover:text-red-800 transition">Our Services</Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative cursor-pointer flex items-center gap-1 header-link hover:text-red-800 transition"
              onClick={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Our Projects

              {dropdownOpen && (
                <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-lg p-3 w-40 animate-fade-down">
                  <li className="dropdown-item cursor-pointer">
                    <Link to="/residential">Residential</Link>
                  </li>
                  <li className="dropdown-item cursor-pointer">
                    <Link to="/commercial">Commercial</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="group relative">
              <Link to="/contact" className="header-link hover:text-red-800 transition">Contact</Link>
            </li>

          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 gap-4 text-lg font-medium">

          <li className="mobile-link">
            <Link to="/">Home</Link>
          </li>

          <li className="mobile-link">
            <Link to="/about">About Us</Link>
          </li>

          <li className="mobile-link">
            <Link to="/services">Our Services</Link>
          </li>

          {/* Mobile dropdown */}
          <li className="w-full">
            <select className="w-full border border-gray-400 px-2 py-2 rounded">
              <option value="">Our Projects</option>
              <option value="/projects/residential">Residential</option>
              <option value="/projects/commercial">Commercial</option>
            </select>
          </li>

          <li className="mobile-link">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;