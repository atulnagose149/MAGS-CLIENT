"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MarketProblem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".fade-up");

      items.forEach((item: unknown, i: number) => {
        const element = item as HTMLElement;
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
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
      className="relative bg-[#0F172B] text-white py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Who We Help */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
              Who We Help
            </h2>

            <p className="mt-4 text-lg leading-relaxed">
              We partner with{" "}
              <span className="font-semibold text-white">
                architects, visionary builders, and developers
              </span>{" "}
              to bring ambitious projects to life.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#1D4D85]/50">
            <Image
              src="/handshake.jpg"
              alt="Professional handshake representing partnership"
              width={600}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Problem */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#1D4D85]/50">
              <Image
                src="/problem.jpg"
                alt="Modern building with glass facades"
                width={600}
                height={400}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
              The Problem We Solve
            </h2>

            <p className="mt-4 text-lg leading-relaxed">
              Modern construction demands more than just windows and doors. It
              demands{" "}
              <span className="font-semibold text-white">
                stunning, high-performance barriers
              </span>{" "}
              that disappear—connecting interior spaces with the outside world
              seamlessly, beautifully, and reliably.
            </p>
          </div>
        </div>

        {/* What We Provide */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
              What We Provide
            </h2>

            <p className="mt-4 text-lg leading-relaxed">
              We are the{" "}
              <span className="font-semibold text-white">
                craftsmen behind the glass
              </span>
              . We provide the invisible engineering: the elegant, ultra-strong,
              and thermally efficient aluminum systems that form the
              breathtaking facades of commercial buildings and the stunning
              window walls of luxury homes.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#1D4D85]/50">
            <Image
              src="/Provide.jpg"
              alt="Precision aluminum glazing systems"
              width={600}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Our Promise */}
        <div className="fade-up text-center bg-[#1D4D85]/20 rounded-3xl p-10 border border-[#1D4D85]/40 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
            Our Promise
          </h2>

          <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
            From initial concept to final installation, we deliver the{" "}
            <span className="font-semibold text-white">
              quality, technical support, and peace of mind
            </span>{" "}
            that allows your creativity to flourish, ensuring the final build is
            not only beautiful but built to last.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F172B] p-6 rounded-xl border border-[#1D4D85]/40 shadow-lg">
              <div className="text-white text-4xl mb-4">✓</div>
              <h3 className="font-semibold">Quality Assurance</h3>
              <p className="mt-2 text-slate-400 text-sm">
                Precision engineering and rigorous testing
              </p>
            </div>
            <div className="bg-[#0F172B] p-6 rounded-xl border border-[#1D4D85]/40 shadow-lg">
              <div className="text-white text-4xl mb-4">🛠️</div>
              <h3 className="font-semibold">Technical Support</h3>
              <p className="mt-2 text-slate-400 text-sm">
                Expert guidance from concept to completion
              </p>
            </div>
            <div className="bg-[#0F172B] p-6 rounded-xl border border-[#1D4D85]/40 shadow-lg">
              <div className="text-white text-4xl mb-4">⭐</div>
              <h3 className="font-semibold">Peace of Mind</h3>
              <p className="mt-2 text-slate-400 text-sm">
                Reliable solutions that stand the test of time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
