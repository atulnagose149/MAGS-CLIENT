"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo - Conditional Navigation */}
        {pathname === "/" ? (
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/MAGS-LOGO.svg"
              alt="MAGS Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </button>
        ) : (
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/MAGS-LOGO.svg"
              alt="MAGS Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {/* Home - Conditional Navigation */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Home
            </button>
          ) : (
            <Link
              href="/"
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Home
            </Link>
          )}

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
              className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-lg min-w-60 border transition-all duration-300 transform ${
                isDesktopDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {pathname === "/" ? (
                <>
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
                </>
              ) : (
                <>
                  <Link
                    href="/#products"
                    className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    Sliding Windows and Doors
                  </Link>
                  <Link
                    href="/#products"
                    className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    Casement Windows and Doors
                  </Link>
                  <Link
                    href="/#products"
                    className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    Sliding Folding
                  </Link>
                  <Link
                    href="/#products"
                    className="block w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                    onClick={() => setIsDesktopDropdownOpen(false)}
                  >
                    Thermal Brake System
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Projects - Conditional Navigation */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Projects
            </button>
          ) : (
            <Link
              href="/#projects"
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Projects
            </Link>
          )}

          {/* Gallery - Always Link to Gallery Page */}
          <Link
            href="/gallery"
            className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
          >
            Gallery
          </Link>

          {/* About Us - Conditional Navigation */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              About Us
            </button>
          ) : (
            <Link
              href="/#about"
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              About Us
            </Link>
          )}

          {/* Contact - Conditional Navigation */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Contact
            </button>
          ) : (
            <Link
              href="/#contact"
              className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium"
            >
              Contact
            </Link>
          )}
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
          {/* Mobile Home */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Home
            </button>
          ) : (
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
          )}

          {/* Mobile Products Section */}
          <div className="border-l-2 border-amber-200 pl-4">
            <div className="text-sm text-gray-500 mb-2 font-medium">
              Products
            </div>
            {pathname === "/" ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  href="/#products"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                >
                  Sliding Windows and Doors
                </Link>
                <Link
                  href="/#products"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                >
                  Casement Windows and Doors
                </Link>
                <Link
                  href="/#products"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                >
                  Sliding Folding
                </Link>
                <Link
                  href="/#products"
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-2 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300"
                >
                  Thermal Brake System
                </Link>
              </>
            )}
          </div>

          {/* Mobile Projects */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Projects
            </button>
          ) : (
            <Link
              href="/#projects"
              onClick={closeMobileMenu}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
          )}

          {/* Mobile Gallery */}
          <Link
            href="/gallery"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
          >
            Gallery
          </Link>

          {/* Mobile About Us */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              About Us
            </button>
          ) : (
            <Link
              href="/#about"
              onClick={closeMobileMenu}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
          )}

          {/* Mobile Contact */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          ) : (
            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="block w-full text-left py-3 px-2 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
