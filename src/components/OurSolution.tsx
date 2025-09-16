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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.25)]">
            Our Solution
          </h2>

          <p className="mt-6 text-lg text-white max-w-3xl mx-auto">
            We bridge the gap by providing{" "}
            <strong className="text-amber-200">
              high-performance aluminum glazing systems
            </strong>{" "}
            that combine beauty, strength, and technical precision — enabling
            architects and builders to create spaces without compromise.
          </p>
        </div>

        {/* Three pillars of solution */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Strength + Elegance */}
          <div className="fade-up bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-700">
              <Image
                src="/Strength.jpg"
                alt="Modern aluminum facade with ultra-slim frames"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-400">
              Strength + Elegance
            </h3>
            <p className="mt-4 text-white leading-relaxed flex-grow">
              Engineered with precision-crafted aluminum profiles that offer
              exceptional structural integrity while maintaining minimalist
              aesthetics. Our systems support larger glass spans with slimmer
              frames, creating seamless visual connections between indoor and
              outdoor spaces.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-amber-300">
              <li>• High tensile strength aluminum alloys</li>
              <li>• Slim sightlines for maximum glass area</li>
              <li>• Weather-resistant powder coating</li>
              <li>• Custom anodized finishes available</li>
            </ul>
          </div>

          {/* Thermal Performance */}
          <div className="fade-up bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-700">
              <Image
                src="/Thermal.jpg"
                alt="Energy-efficient thermal break technology"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-400">
              Thermal Performance
            </h3>
            <p className="mt-4 text-white leading-relaxed flex-grow">
              Advanced thermal break technology that significantly reduces heat
              transfer, ensuring optimal energy efficiency. Our systems maintain
              consistent indoor temperatures, reduce energy costs, and provide
              superior condensation resistance in all climate conditions.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-amber-300">
              <li>• Polyamide thermal barriers</li>
              <li>• U-values as low as 1.0 W/m²K</li>
              <li>• Enhanced weather sealing</li>
              <li>• Condensation-free performance</li>
            </ul>
          </div>

          {/* Design Freedom */}
          <div className="fade-up bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col">
            <div className="h-48 mb-6 rounded-xl overflow-hidden ring-1 ring-slate-700">
              <Image
                src="/Design.jpg"
                alt="Customizable architectural glazing solutions"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-400">
              Design Freedom
            </h3>
            <p className="mt-4 text-white leading-relaxed flex-grow">
              Unlimited design possibilities with customizable configurations,
              finishes, and hardware options. From curved facades to oversized
              sliding systems, we provide tailored solutions that bring your
              architectural vision to life without compromising performance.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-amber-300">
              <li>• Custom profiles and configurations</li>
              <li>• Wide range of RAL colors</li>
              <li>• Bespoke hardware solutions</li>
              <li>• Technical design support</li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700">
          <div>
            <h3 className="text-3xl font-bold text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,)] mb-6">
              Complete System Integration
            </h3>
            <p className="text-white leading-relaxed">
              Our solutions include comprehensive technical support, detailed
              fabrication drawings, and on-site installation guidance. We ensure
              seamless integration with building structures, providing
              end-to-end support from concept to completion.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <div className="text-amber-400 text-2xl font-bold">📐</div>
                <p className="text-white text-sm mt-2">CAD Drawings</p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <div className="text-amber-400 text-2xl font-bold">🔧</div>
                <p className="text-white text-sm mt-2">Installation Support</p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <div className="text-amber-400 text-2xl font-bold">📋</div>
                <p className="text-white text-sm mt-2">
                  Technical Documentation
                </p>
              </div>
              <div className="text-center p-4 bg-slate-700 rounded-lg border border-slate-600">
                <div className="text-amber-400 text-2xl font-bold">✅</div>
                <p className="text-white text-sm mt-2">Quality Certification</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-700">
            <Image
              src="/Integration.jpg"
              alt="Technical documentation and architectural drawings"
              width={500}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="fade-up text-center">
          <p className="text-lg text-white max-w-2xl mx-auto">
            From{" "}
            <strong className="text-amber-200">concept to completion</strong>,
            we stand beside architects, builders, and developers — delivering
            systems that inspire, perform, and last. Join hundreds of
            professionals who trust MAGS for their most ambitious projects.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-block bg-amber-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-600 transition">
              Explore Our Products →
            </button>
            <button className="inline-block border-2 border-amber-400 text-amber-400 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-amber-400 hover:text-slate-900 transition">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
