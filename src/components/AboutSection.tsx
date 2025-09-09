"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // Add this import

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-text", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-img", {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="about-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-indigo-600">MAGS</span>
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p className="about-text">
              At MAGS, we are redefining the future of aluminium window, door,
              and façade systems with world-class engineering, precision design,
              and uncompromising quality. Since our inception, we have partnered
              with India&apos;s leading developers, architects, contractors, and
              interior designers, delivering solutions that combine aesthetic
              elegance with high-performance functionality.
            </p>
            <p className="about-text">
              Our systems are engineered to international standards, tested for
              thermal insulation, wind load resistance, acoustic comfort, and
              long-term durability. From luxury villas and residential towers to
              large-scale commercial and institutional projects, MAGS products
              are trusted across diverse applications for their strength,
              reliability, and design flexibility.
            </p>
            <p className="about-text">
              What sets us apart is our commitment to end-to-end excellence.
              Every MAGS system is supported with detailed technical
              documentation, CAD resources, fabrication guidance, and testing
              certifications, ensuring seamless integration into projects. Our
              fabrication partners and installation teams are trained to deliver
              precision workmanship, maintaining performance benchmarks on-site.
            </p>
            <p className="about-text">
              We continually invest in research, innovation, and advanced
              manufacturing processes, bringing the latest in minimal profile
              designs, thermal break technologies, and sustainable aluminium
              solutions to the Indian market. Our compliance with EN and ISO
              standards reflects our global approach to quality and safety.
            </p>
            <p className="about-text font-semibold text-gray-900">
              At MAGS, we don&apos;t just supply aluminium systems — we provide
              long-term value, low-maintenance solutions, and architectural
              freedom, enabling our clients to create iconic, future-ready
              spaces.
            </p>
            <p className="about-text text-indigo-600 font-bold">
              MAGS – Engineered for performance. Trusted for design. Built for
              tomorrow.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="about-img relative">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            alt="Modern architecture facade"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
