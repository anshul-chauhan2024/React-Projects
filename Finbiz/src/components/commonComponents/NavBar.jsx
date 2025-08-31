import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ import React Router
import images from "../../images/images.js";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Button from "./Button.jsx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="navBar bg-white shadow-md p-4 px-6 lg:px-10 w-full">
      <div className="flex items-center justify-between">
        {/* Left side: Logo + Desktop Links */}
        <div className="flex gap-5 xl:gap-20 items-center">
          <div className="navLogo w-28">
            <Link to="/">
              <img src={images.logo} alt="Company Logo" className="w-full" />
            </Link>
          </div>

          {/* Desktop NavLinks */}
          <div className="hidden lg:flex gap-6 font-medium text-gray-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-blue-800 transition duration-300 ${
                    isActive ? "text-blue-700 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right side: Desktop Contact */}
        <div className="hidden lg:flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <p className="text-2xl bg-gray-200 text-blue-700 rounded w-12 h-12 flex items-center justify-center">
              <FaPhoneAlt />
            </p>
            <div>
              <p className="text-sm text-gray-600">Call us anytime:</p>
              <h3 className="text-lg font-medium hover:underline hover:text-blue-700 cursor-pointer">
                +91 1234567890
              </h3>
            </div>
          </div>
          <Button val="Book a Meeting" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* Mobile Dropdown with animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="block text-gray-700 hover:text-blue-800 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <div className="border-t pt-4 mt-4">
            <div className="flex gap-2 items-center mb-4">
              <p className="text-xl bg-gray-200 text-blue-700 rounded w-10 h-10 flex items-center justify-center">
                <FaPhoneAlt />
              </p>
              <div>
                <p className="text-sm text-gray-600">Call us:</p>
                <h3 className="text-md font-medium hover:underline hover:text-blue-700 cursor-pointer">
                  +91 1234567890
                </h3>
              </div>
            </div>
            <Button val="Book a Meeting" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
