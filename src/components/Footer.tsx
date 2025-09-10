"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/">
                <Image
                  src="/MAGS-LOGO.svg"
                  alt="MAGS Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              In collaboration with our partners, we are committed to developing
              energy-efficient, sustainably produced products that positively
              impact homes, buildings, and the people who use them.
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://in.pinterest.com/hellomags07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-amber-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.994-1.906.15-.36.884-3.302.884-3.302.444.842 1.741 1.582 3.117 1.582 4.104 0 6.895-3.737 6.895-8.735C21.817 3.57 18.665 1 14.018 1 8.284 1 4.867 4.582 4.867 9.237c0 2.233.866 4.215 2.72 4.949.303.12.462.067.533-.184.053-.188.18-.717.237-.931.077-.29.047-.391-.17-.644-.47-.548-.77-1.229-.77-2.212 0-2.848 2.135-5.397 5.563-5.397 3.035 0 4.709 1.85 4.709 4.32 0 3.252-1.44 5.994-3.58 5.994-1.18 0-2.063-.975-1.78-2.173.338-1.427 1.002-2.967 1.002-3.997 0-.922-.494-1.69-1.513-1.69-1.2 0-2.16 1.24-2.16 2.903 0 1.06.359 1.774.359 1.774L7.65 16.88c-.359 1.423-.054 3.164-.028 3.335C5.085 18.77 3.5 15.61 3.5 12 3.5 6.753 7.753 2.5 13 2.5S22.5 6.753 22.5 12 18.247 21.5 13 21.5H12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mags_premium_window_system/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-amber-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@MAGS_Premium_Window_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-amber-400 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h3 className="text-amber-400 font-bold text-lg mb-6 relative">
              Our Products
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-600"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Sliding Windows and Doors",
                "Casement Windows and Doors",
                "Thermal Brake System",
                "Sliding Folding",
                "Façade",
                "Aluminum Railing",
                "Hardware",
                "Mosquito Mesh",
              ].map((product, index) => (
                <li key={index}>
                  {pathname === "/" ? (
                    <button
                      onClick={() => scrollToSection("products")}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {product}
                    </button>
                  ) : (
                    <Link
                      href="/#products"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      {product}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-amber-400 font-bold text-lg mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-600"></div>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-amber-600/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      106, Earth Retails, Bhadaj circle,
                      <br />
                      Science City, Ahmedabad,
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+919974293086"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    +91 99742 93086
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:mags.brijesh@gmail.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    mags.brijesh@gmail.com
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {/* Home Link */}
                  <Link
                    href="/"
                    className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    Home
                  </Link>

                  {/* About Us - Conditional Navigation */}
                  {pathname === "/" ? (
                    <button
                      onClick={() => scrollToSection("about")}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      About Us
                    </button>
                  ) : (
                    <Link
                      href="/#about"
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      About Us
                    </Link>
                  )}

                  {/* Projects - Conditional Navigation */}
                  {pathname === "/" ? (
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      Projects
                    </button>
                  ) : (
                    <Link
                      href="/#projects"
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      Projects
                    </Link>
                  )}

                  {/* Gallery - Always Link to Gallery Page */}
                  <Link
                    href="/gallery"
                    className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    Gallery
                  </Link>

                  {/* Contact - Conditional Navigation */}
                  {pathname === "/" ? (
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      Contact
                    </button>
                  ) : (
                    <Link
                      href="/#contact"
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                    >
                      Contact
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © Copyright 2025 MAGS. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              Design & Developed by{" "}
              <a
                href="https://aipowereddev.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
              >
                aipowereddev.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
