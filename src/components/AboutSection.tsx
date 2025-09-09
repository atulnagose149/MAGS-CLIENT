"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">MAGS</span>
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p
              className={`transform transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              At MAGS, we are redefining the future of aluminium window, door,
              and façade systems with world-class engineering, precision design,
              and uncompromising quality. Since our inception, we have partnered
              with India&apos;s leading developers, architects, contractors, and
              interior designers, delivering solutions that combine aesthetic
              elegance with high-performance functionality.
            </p>
            <p
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Our systems are engineered to international standards, tested for
              thermal insulation, wind load resistance, acoustic comfort, and
              long-term durability. From luxury villas and residential towers to
              large-scale commercial and institutional projects, MAGS products
              are trusted across diverse applications for their strength,
              reliability, and design flexibility.
            </p>
            <p
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              What sets us apart is our commitment to end-to-end excellence.
              Every MAGS system is supported with detailed technical
              documentation, CAD resources, fabrication guidance, and testing
              certifications, ensuring seamless integration into projects. Our
              fabrication partners and installation teams are trained to deliver
              precision workmanship, maintaining performance benchmarks on-site.
            </p>
            <p
              className={`transform transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We continually invest in research, innovation, and advanced
              manufacturing processes, bringing the latest in minimal profile
              designs, thermal break technologies, and sustainable aluminium
              solutions to the Indian market. Our compliance with EN and ISO
              standards reflects our global approach to quality and safety.
            </p>
            <p
              className={`font-semibold text-gray-900 transform transition-all duration-1000 ease-out delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              At MAGS, we don&apos;t just supply aluminium systems — we provide
              long-term value, low-maintenance solutions, and architectural
              freedom, enabling our clients to create iconic, future-ready
              spaces.
            </p>
            <p
              className={`text-amber-600 font-bold transform transition-all duration-1000 ease-out delay-1100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              MAGS – Engineered for performance. Trusted for design. Built for
              tomorrow.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className={`relative transform transition-all duration-1200 ease-out delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            alt="Modern architecture facade"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
