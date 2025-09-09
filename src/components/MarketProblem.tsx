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
      className="relative bg-neutral-50 text-neutral-900 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Who We Help */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-600">
              Who We Help
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We partner with{" "}
              <span className="text-neutral-900 font-semibold">
                architects, visionary builders, and developers
              </span>{" "}
              to bring ambitious projects to life.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="Architects and builders collaborating"
              width={600}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Problem */}
        <div className="fade-up grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop"
                alt="Modern building with glass facades"
                width={600}
                height={400}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-600">
              The Problem We Solve
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              Modern construction demands more than just windows and doors. It
              demands{" "}
              <span className="text-neutral-900 font-semibold">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-600">
              What We Provide
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We are the{" "}
              <span className="text-neutral-900 font-semibold">
                craftsmen behind the glass
              </span>
              . We provide the invisible engineering: the elegant, ultra-strong,
              and thermally efficient aluminum systems that form the
              breathtaking facades of commercial buildings and the stunning
              window walls of luxury homes.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop"
              alt="Precision aluminum glazing systems"
              width={600}
              height={400}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Our Promise */}
        <div className="fade-up text-center bg-white rounded-3xl p-10 border border-amber-600/30 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-amber-600">
            Our Promise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700 max-w-3xl mx-auto">
            From initial concept to final installation, we deliver the{" "}
            <span className="text-neutral-900 font-semibold">
              quality, technical support, and peace of mind
            </span>{" "}
            that allows your creativity to flourish, ensuring the final build is
            not only beautiful but built to last.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
              <div className="text-amber-600 text-4xl mb-4">✓</div>
              <h3 className="font-semibold text-neutral-900">
                Quality Assurance
              </h3>
              <p className="mt-2 text-neutral-600 text-sm">
                Precision engineering and rigorous testing
              </p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
              <div className="text-amber-600 text-4xl mb-4">🛠️</div>
              <h3 className="font-semibold text-neutral-900">
                Technical Support
              </h3>
              <p className="mt-2 text-neutral-600 text-sm">
                Expert guidance from concept to completion
              </p>
            </div>
            <div className="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
              <div className="text-amber-600 text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-neutral-900">Peace of Mind</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                Reliable solutions that stand the test of time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
