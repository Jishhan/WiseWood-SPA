import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const linkStyle =
    "relative text-sm tracking-wide text-[#1C1C1C] hover:text-[#A1866F] transition";

  const activeStyle = "text-[#A1866F]";

  return (
    <header className="w-full bg-[#F5F3EF] border-b border-[#E5DFD7] relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 md:px-16">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/Images/logoViseWood.png"
            alt="logo"
            className="w-32"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12">

          <li>
            <Link
              to="/"
              className={`${linkStyle} ${
                location.pathname === "/" ? activeStyle : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about-us"
              className={`${linkStyle} ${
                location.pathname === "/about-us" ? activeStyle : ""
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/service"
              className={`${linkStyle} ${
                location.pathname === "/service" ? activeStyle : ""
              }`}
            >
              Services
            </Link>
          </li>

          {/* DESKTOP DROPDOWN */}
          <li className="relative group">
            <div
              className={`flex items-center gap-2 cursor-pointer ${linkStyle} ${
                location.pathname.includes("/residential") ||
                location.pathname.includes("/commercial")
                  ? activeStyle
                  : ""
              }`}
            >
              Projects
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
              <div className="bg-white border border-[#E5DFD7] rounded-md w-48 py-4 shadow-lg">
                <Link
                  to="/residential"
                  className="block px-6 py-2 text-sm text-[#6B6B6B] hover:text-[#A1866F] transition"
                >
                  Residential
                </Link>
                <Link
                  to="/commercial"
                  className="block px-6 py-2 text-sm text-[#6B6B6B] hover:text-[#A1866F] transition"
                >
                  Commercial
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/contact"
              className={`${linkStyle} ${
                location.pathname === "/contact" ? activeStyle : ""
              }`}
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl text-[#1C1C1C]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#F5F3EF] border-t border-[#E5DFD7] transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[600px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-8 gap-6 text-base">

          <li>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1C1C]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1C1C]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/service"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1C1C]"
            >
              Services
            </Link>
          </li>

          <li>
            <button
              onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
              className="w-full text-left text-[#1C1C1C] flex justify-between"
            >
              Projects
              <span>{mobileSubMenuOpen ? "–" : "+"}</span>
            </button>

            {mobileSubMenuOpen && (
              <ul className="pl-4 mt-3 space-y-3 text-sm text-[#6B6B6B]">
                <li>
                  <Link
                    to="/residential"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Commercial
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1C1C]"
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Header;
