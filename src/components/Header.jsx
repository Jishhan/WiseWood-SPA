import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeClass =
    "text-[#7D0928] border-b-2 border-[#7D1128] font-semibold";

  const baseClass =
    "pb-1 text-[#7D1128] hover:text-[#7D1128] hover:border-b-2 hover:border-[#7D1128]";

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        
        {/* LOGO */}
        <Link to="/">
          <img src="/Images/logoViseWood.png" alt="logo" className="w-32 md:w-40" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">

          <li>
            <Link
              to="/"
              className={`${baseClass} ${
                location.pathname === "/" ? activeClass : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about-us"
              className={`${baseClass} ${
                location.pathname === "/about-us" ? activeClass : ""
              }`}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/service"
              className={`${baseClass} ${
                location.pathname === "/service" ? activeClass : ""
              }`}
            >
              Our Services
            </Link>
          </li>

          {/* DESKTOP DROPDOWN */}
          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button
              onClick={() => navigate("/residential")}
              className={`${baseClass} ${
                location.pathname.includes("/residential") ||
                location.pathname.includes("/commercial")
                  ? activeClass
                  : ""
              }`}
            >
              Our Projects
            </button>

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

          <li>
            <Link
              to="/contact"
              className={`${baseClass} ${
                location.pathname === "/contact" ? activeClass : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl text-[#7D1128]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white shadow-xl transition-all duration-200 overflow-hidden ${
          mobileMenuOpen ? "max-h-[700px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 gap-4 text-lg font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Our Services", path: "/service" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[#7D1128] ${
                  location.pathname === item.path ? activeClass : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* MOBILE PROJECTS */}
          <li>
            <button
              onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
              className="w-full flex justify-between text-[#7D1128]"
            >
              <span
                className={
                  location.pathname.includes("/residential") ||
                  location.pathname.includes("/commercial")
                    ? activeClass
                    : ""
                }
              >
                Our Projects
              </span>
              <span>{mobileSubMenuOpen ? "▴" : "▾"}</span>
            </button>

            {mobileSubMenuOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/residential"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#7D1128]"
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#7D1128]"
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
              className={`text-[#7D1128] ${
                location.pathname === "/contact" ? activeClass : ""
              }`}
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