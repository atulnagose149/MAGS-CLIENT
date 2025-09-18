"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    setIsDesktopDropdownOpen(false);
    setIsMobileMenuOpen(false);
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

  // Determine if we should use transparent styling (only on homepage)
  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        {pathname === "/" ? (
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src={isTransparent ? "/LOGO2.png" : "/LOGO.jpg"}
              alt="MAGS Logo"
              width={200}
              height={100}
              className="h-12 sm:h-16 w-auto object-contain"
              priority
            />
          </button>
        ) : (
          <Link
            href="/"
            className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/LOGO.jpg"
              alt="MAGS Logo"
              width={200}
              height={100}
              className="h-12 sm:h-16 w-auto object-contain"
              priority
            />
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {/* Home */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("hero")}
              className={`transition-colors duration-300 cursor-pointer font-medium ${
                isTransparent
                  ? "text-white hover:text-white/80"
                  : "text-gray-800 hover:text-[#2055AB]"
              }`}
              style={
                isTransparent
                  ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }
                  : {}
              }
            >
              Home
            </button>
          ) : (
            <Link
              href="/"
              className="text-gray-800 hover:text-[#2055AB] transition-colors duration-300 cursor-pointer font-medium"
            >
              Home
            </Link>
          )}

          {/* Products Dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              className={`transition-colors duration-300 cursor-pointer flex items-center font-medium ${
                isTransparent
                  ? "text-white hover:text-white/80"
                  : "text-gray-800 hover:text-[#2055AB]"
              }`}
              style={
                isTransparent
                  ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }
                  : {}
              }
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

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 bg-white/95 backdrop-blur-md shadow-lg py-2 rounded-lg min-w-60 border transition-all duration-300 transform ${
                isDesktopDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                href="/products/sliding-windows-and-doors"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300"
                onClick={() => setIsDesktopDropdownOpen(false)}
              >
                Sliding Windows and Doors
              </Link>
              <Link
                href="/products/casement-windows-and-doors"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300"
                onClick={() => setIsDesktopDropdownOpen(false)}
              >
                Casement Windows and Doors
              </Link>
              <Link
                href="/products/sliding-folding"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300"
                onClick={() => setIsDesktopDropdownOpen(false)}
              >
                Sliding Folding
              </Link>
              <Link
                href="/products/thermal-brake-system"
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300"
                onClick={() => setIsDesktopDropdownOpen(false)}
              >
                Thermal Brake System
              </Link>
            </div>
          </div>

          {/* Projects */}
          <Link
            href="/projects"
            className={`transition-colors duration-300 cursor-pointer font-medium ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-gray-800 hover:text-[#2055AB]"
            }`}
            style={
              isTransparent ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" } : {}
            }
          >
            Projects
          </Link>

          {/* Gallery */}
          <Link
            href="/gallery"
            className={`transition-colors duration-300 cursor-pointer font-medium ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-gray-800 hover:text-[#2055AB]"
            }`}
            style={
              isTransparent ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" } : {}
            }
          >
            Gallery
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            className={`transition-colors duration-300 cursor-pointer font-medium ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-gray-800 hover:text-[#2055AB]"
            }`}
            style={
              isTransparent ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" } : {}
            }
          >
            About us
          </Link>

          {/* Contact */}
          {pathname === "/" ? (
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors duration-300 cursor-pointer font-medium ${
                isTransparent
                  ? "text-white hover:text-white/80"
                  : "text-gray-800 hover:text-[#2055AB]"
              }`}
              style={
                isTransparent
                  ? { textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }
                  : {}
              }
            >
              Contact
            </button>
          ) : (
            <Link
              href="/#contact"
              className="text-gray-800 hover:text-[#2055AB] transition-colors duration-300 cursor-pointer font-medium"
            >
              Contact
            </Link>
          )}
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 p-2 ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-gray-800 hover:text-[#2055AB]"
            }`}
            style={
              isTransparent
                ? { filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.7))" }
                : {}
            }
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
        className={`md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-semibold"
          >
            Products
          </Link>
          <Link
            href="/projects"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-medium"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-medium"
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            onClick={closeMobileMenu}
            className="block w-full text-left py-3 px-2 rounded-lg text-gray-800 hover:bg-[#2055AB]/10 hover:text-[#2055AB] transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
