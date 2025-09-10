"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    setIsDesktopDropdownOpen(false); // Close desktop dropdown
    setIsMobileMenuOpen(false); // Close mobile menu
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src="/MAGS-LOGO.svg" // Correct path for public folder
            alt="MAGS Logo"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer flex items-center font-medium"
            >
              Products
              <svg
                className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                  isDesktopDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Desktop Dropdown */}
            <div
              className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-lg min-w-48 border transition-all duration-300 transform ${
                isDesktopDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
              >
                Sliding Windows and Doors
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
              >
                Casement Windows and Doors
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
              >
                Sliding Folding
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
              >
                Thermal Brake System
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            Projects
          </button>

          {/* Gallery Link - Updated to navigate to new page */}
          <Link
            href="/gallery"
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            Gallery
          </Link>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            About Us
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-amber-600 transition-colors duration-300 p-2"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            Home
          </button>

          {/* Mobile Products Section */}
          <div className="border-l-2 border-amber-200 pl-4">
            <div className="text-sm text-gray-500 mb-2 font-medium">
              Products
            </div>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
            >
              Sliding Windows and Doors
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
            >
              Casement Windows and Doors
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
            >
              Sliding Folding
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
            >
              Thermal Brake System
            </button>
          </div>

          <button
            onClick={() => scrollToSection("projects")}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("gallery")}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            Gallery
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            About Us
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
