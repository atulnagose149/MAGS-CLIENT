"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === sectionRef.current)
          setIsVisible(entry.isIntersecting);
        if (entry.target === teamRef.current)
          setTeamVisible(entry.isIntersecting);
        if (entry.target === servicesRef.current)
          setServicesVisible(entry.isIntersecting);
        if (entry.target === valuesRef.current)
          setValuesVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    window.addEventListener("scroll", handleScroll);

    [sectionRef, teamRef, servicesRef, valuesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // GSAP hover animations
    const ctx = gsap.context(() => {
      // Button hover animations
      const buttons = gsap.utils.toArray(".hover-button");
      buttons.forEach((button: unknown) => {
        const element = button as HTMLElement;
        const overlay = element.querySelector(".button-overlay");

        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
          if (overlay) {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          if (overlay) {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image and Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/WhyChooseMAGS.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mt-30">
              Engineering-led
              <span className="block text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                excellence
              </span>
              in every detail
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto px-4">
              Transforming architectural visions into reality with
              precision-engineered aluminum glazing solutions that define the
              future of building design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/projects"
                className="hover-button relative inline-block font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer text-sm sm:text-base"
                style={{
                  backgroundColor: "#0F172B",
                  color: "white",
                  border: "1px solid #475569",
                }}
              >
                {/* Button Overlay */}
                <div
                  className="button-overlay absolute inset-0 opacity-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                    pointerEvents: "none",
                  }}
                ></div>

                <span className="relative z-10">Our Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Story Section with Updated Background and Single Image */}
      <section
        ref={sectionRef}
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0F172B]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24 mb-8 lg:mb-0">
              <h2 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
                A Few Words
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 lg:mb-8">
                About Us
              </h3>
              <div className="w-16 h-1 bg-white mb-6 lg:mb-8"></div>

              {/* Single About Us Image */}
              <div className="mb-6">
                <div className="relative">
                  <Image
                    src="/AboutUs1.jpg"
                    alt="MAGS Engineering Excellence"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div
              className={`space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p>
                Today, MAGS stands as India's premier aluminum glazing
                specialist, transforming architectural dreams into reality. We
                have evolved into a comprehensive solutions provider, leading
                innovation in commercial and residential glazing systems.
              </p>
              <p>
                Our story began with a simple belief: every building deserves
                systems that combine aesthetic excellence with uncompromising
                performance. Today, we're proud to be the trusted partner of
                India's most prestigious architects, developers, and
                construction leaders.
              </p>
              <p>
                As a result of working with hundreds of premium projects across
                India over the past years, we are now delivering solutions that
                set new benchmarks in thermal performance, structural integrity,
                and design innovation across diverse climate conditions.
              </p>

              <blockquote className="border-l-4 border-white pl-4 sm:pl-6 italic text-gray-400 mt-6 sm:mt-8">
                "What truly sets us apart is our commitment to engineering
                excellence and our ability to translate complex architectural
                visions into precision-manufactured reality."
                <footer className="text-sm text-gray-500 mt-2 font-semibold">
                  — MAGS Engineering Team
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced Responsive with Dark Background */}
      <section
        ref={valuesRef}
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0F172B]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                valuesVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 lg:mb-8">
                Why Choose MAGS
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Precision Engineering",
                    description:
                      "Every system tested to international standards with certified performance data",
                  },
                  {
                    title: "Architectural Freedom",
                    description:
                      "Minimal profiles and maximum glazing area for unrestricted design possibilities",
                  },
                  {
                    title: "Thermal Excellence",
                    description:
                      "Advanced thermal break technology for superior energy efficiency",
                  },
                  {
                    title: "Lifetime Value",
                    description:
                      "Corrosion-resistant materials with minimal maintenance requirements",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-8 lg:mt-0 transform transition-all duration-1000 ${
                valuesVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                src="/products/Why Choose MAGS.jpg"
                alt="Modern building with MAGS aluminum glazing systems"
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
