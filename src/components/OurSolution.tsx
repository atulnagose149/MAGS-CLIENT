"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function OurSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".fade-up");

      items.forEach((item: unknown, i: number) => {
        const element = item as HTMLElement;
        gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: i * 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Card hover animations
      const cards = gsap.utils.toArray(".hover-card");
      cards.forEach((card: unknown) => {
        const element = card as HTMLElement;
        const overlay = element.querySelector(".gradient-overlay");

        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-900 text-white py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="fade-up text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
            Our Solution
          </h2>

          <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
            We bridge the gap by providing{" "}
            <strong className="text-white">
              high-performance aluminum glazing systems
            </strong>{" "}
            that combine beauty, strength, and technical precision — enabling
            architects and builders to create spaces without compromise.
          </p>
        </div>

        {/* Three pillars of solution */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Strength + Elegance */}
          <div
            className="fade-up hover-card relative p-8 rounded-2xl shadow-xl border border-slate-600 flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
            style={{ backgroundColor: "#0F172B" }}
          >
            {/* Gradient Overlay */}
            <div
              className="gradient-overlay absolute inset-0 opacity-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                pointerEvents: "none",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-600">
                <Image
                  src="/Strength.jpg"
                  alt="Modern aluminum facade with ultra-slim frames"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Strength + Elegance
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed flex-grow">
                Engineered with precision-crafted aluminum profiles that offer
                exceptional structural integrity while maintaining minimalist
                aesthetics. Our systems support larger glass spans with slimmer
                frames, creating seamless visual connections between indoor and
                outdoor spaces.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• High tensile strength aluminum alloys</li>
                <li>• Slim sightlines for maximum glass area</li>
                <li>• Weather-resistant powder coating</li>
                <li>• Custom anodized finishes available</li>
              </ul>
            </div>
          </div>

          {/* Thermal Performance */}
          <div
            className="fade-up hover-card relative p-8 rounded-2xl shadow-xl border border-slate-600 flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
            style={{ backgroundColor: "#0F172B" }}
          >
            {/* Gradient Overlay */}
            <div
              className="gradient-overlay absolute inset-0 opacity-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                pointerEvents: "none",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-600">
                <Image
                  src="/Thermal.jpg"
                  alt="Energy-efficient thermal break technology"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Thermal Performance
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed flex-grow">
                Advanced thermal break technology that significantly reduces
                heat transfer, ensuring optimal energy efficiency. Our systems
                maintain consistent indoor temperatures, reduce energy costs,
                and provide superior condensation resistance in all climate
                conditions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Polyamide thermal barriers</li>
                <li>• U-values as low as 1.0 W/m²K</li>
                <li>• Enhanced weather sealing</li>
                <li>• Condensation-free performance</li>
              </ul>
            </div>
          </div>

          {/* Design Freedom */}
          <div
            className="fade-up hover-card relative p-8 rounded-2xl shadow-xl border border-slate-600 flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
            style={{ backgroundColor: "#0F172B" }}
          >
            {/* Gradient Overlay */}
            <div
              className="gradient-overlay absolute inset-0 opacity-0 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                pointerEvents: "none",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-600">
                <Image
                  src="/Design.jpg"
                  alt="Customizable architectural glazing solutions"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Design Freedom
              </h3>
              <p className="mt-4 text-white/90 leading-relaxed flex-grow">
                Unlimited design possibilities with customizable configurations,
                finishes, and hardware options. From curved facades to oversized
                sliding systems, we provide tailored solutions that bring your
                architectural vision to life without compromising performance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Custom profiles and configurations</li>
                <li>• Wide range of RAL colors</li>
                <li>• Bespoke hardware solutions</li>
                <li>• Technical design support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div
          className="fade-up hover-card relative p-10 rounded-2xl shadow-xl border border-slate-600 overflow-hidden cursor-pointer transition-all duration-300"
          style={{ backgroundColor: "#0F172B" }}
        >
          {/* Gradient Overlay */}
          <div
            className="gradient-overlay absolute inset-0 opacity-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
              pointerEvents: "none",
            }}
          ></div>

          {/* Content Grid */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Text Content Column */}
            <div>
              <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] mb-6">
                Complete System Integration
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our solutions include comprehensive technical support, detailed
                fabrication drawings, and on-site installation guidance. We
                ensure seamless integration with building structures, providing
                end-to-end support from concept to completion.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-white text-2xl font-bold">📐</div>
                  <p className="text-white/90 text-sm mt-2">CAD Drawings</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-white text-2xl font-bold">🔧</div>
                  <p className="text-white/90 text-sm mt-2">
                    Installation Support
                  </p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-white text-2xl font-bold">📋</div>
                  <p className="text-white/90 text-sm mt-2">
                    Technical Documentation
                  </p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
                  <div className="text-white text-2xl font-bold">✅</div>
                  <p className="text-white/90 text-sm mt-2">
                    Quality Certification
                  </p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-600">
              <Image
                src="/Integration.jpg"
                alt="Technical documentation and architectural drawings"
                width={500}
                height={400}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="fade-up text-center">
          <p className="text-lg text-white max-w-2xl mx-auto">
            From <strong className="text-white">concept to completion</strong>,
            we stand beside architects, builders, and developers — delivering
            systems that inspire, perform, and last. Join hundreds of
            professionals who trust MAGS for their most ambitious projects.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="hover-button relative inline-block font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "#0F172B",
                color: "white",
                border: "1px solid #475569",
              }}
            >
              {/* Button Overlay */}
              <div
                className="button-overlay absolute inset-0 opacity-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                  pointerEvents: "none",
                }}
              ></div>

              <span className="relative z-10">Explore Our Products →</span>
            </button>

            <button
              className="hover-button relative inline-block font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "#0F172B",
                color: "white",
                border: "2px solid white",
              }}
            >
              {/* Button Overlay */}
              <div
                className="button-overlay absolute inset-0 opacity-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                  pointerEvents: "none",
                }}
              ></div>

              <span className="relative z-10">Request Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
