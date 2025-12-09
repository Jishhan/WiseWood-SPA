import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  // ===== STATES =====
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // Desktop "Our Projects" hover menu
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false); // Mobile dropdown toggle

  // React Router helpers
  const location = useLocation();
  const navigate = useNavigate();

  // Dropdown reference (to detect outside click)
  const dropdownRef = useRef(null);

  // ===== CLOSE DROPDOWN WHEN CLICKED OUTSIDE =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicking outside dropdown → close it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active menu style class
  const activeClass =
    "text-[#6b4f3b] border-b-2 border-[#6b4f3b] font-semibold";

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">

        {/* ===== LOGO ===== */}
        <Link to="/">
        <img
          src="/Images/logoViseWood.png"
          alt="logo"
          className="w-32 md:w-40"
        /></Link>

        {/* ===== DESKTOP MENU ===== */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">

          {/* Home */}
          <li>
            <Link
              to="/"
              className={`pb-1 hover:text-[#6b4f3b] hover:border-b-2 hover:border-[#6b4f3b] ${
                location.pathname === "/" ? activeClass : ""
              }`}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/aboutUs"
              className={`pb-1 hover:text-[#6b4f3b] hover:border-b-2 hover:border-[#6b4f3b] ${
                location.pathname === "/about" ? activeClass : ""
              }`}
            >
              About Us
            </Link>
          </li>

          {/* Services */}
          <li>
            <Link
              to="/service"
              className={`pb-1 hover:text-[#6b4f3b] hover:border-b-2 hover:border-[#6b4f3b] ${
                location.pathname === "/service" ? activeClass : ""
              }`}
            >
              Our Services
            </Link>
          </li>

          {/* ===== DESKTOP DROPDOWN (Our Projects) ===== */}
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            {/* Clicking This → Goes to Residential */}
            <button
              onClick={() => navigate("/residential")}
              className={`pb-1 hover:text-[#6b4f3b] hover:border-b-2 hover:border-[#6b4f3b] ${
                location.pathname.includes("/residential") ||
                location.pathname.includes("/commercial")
                  ? activeClass
                  : ""
              }`}
            >
              Our Projects
            </button>

            {/* Dropdown menu */}
            {desktopDropdownOpen && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg w-44 py-2 z-20">
                <Link
                  to="/residential"
                  onClick={() => setDesktopDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Residential
                </Link>

                <Link
                  to="/commercial"
                  onClick={() => setDesktopDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Commercial
                </Link>
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className={`pb-1 hover:text-[#6b4f3b] hover:border-b-2 hover:border-[#6b4f3b] ${
                location.pathname === "/contact" ? activeClass : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* ===== MOBILE HAMBURGER BUTTON ===== */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-200 overflow-hidden ${
          mobileMenuOpen ? "max-h-[700px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 gap-4 text-lg font-medium">

          {/* Mobile: Home */}
          <li>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === "/" ? activeClass : ""}`}
            >
              Home
            </Link>
          </li>

          {/* Mobile: About */}
          <li>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === "/about" ? activeClass : ""}`}
            >
              About Us
            </Link>
          </li>

          {/* Mobile: Services */}
          <li>
            <Link
              to="/service"
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === "/service" ? activeClass : ""}`}
            >
              Our Services
            </Link>
          </li>

          {/* ===== MOBILE SUBMENU (Our Projects) ===== */}
          <li className="w-full">
            <button
              onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
              className="w-full flex justify-between items-center py-2"
            >
              <span
                className={`${
                  location.pathname.includes("/residential") ||
                  location.pathname.includes("/commercial")
                    ? activeClass
                    : ""
                }`}
              >
                Our Projects
              </span>

              <span>{mobileSubMenuOpen ? "▴" : "▾"}</span>
            </button>

            {/* Mobile dropdown items */}
            {mobileSubMenuOpen && (
              <ul className="pl-4 mt-1 flex flex-col gap-2">
                <li>
                  <Link
                    to="/residential"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#6b4f3b]"
                  >
                    Residential
                  </Link>
                </li>

                <li>
                  <Link
                    to="/commercial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#6b4f3b]"
                  >
                    Commercial
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Mobile: Contact */}
          <li>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`${location.pathname === "/contact" ? activeClass : ""}`}
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