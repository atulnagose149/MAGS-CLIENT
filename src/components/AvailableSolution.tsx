"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AvailableSolution() {
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
            delay: i * 0.25,
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
      className="relative bg-neutral-50 text-neutral-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Heading */}
        <div className="fade-up text-center relative">
          <div className="absolute -top-8 sm:-top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-amber-600/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-600 relative px-4">
            Available Market Solutions
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto px-4">
            The construction industry is filled with options — from standard
            window systems to prefabricated facades. But while these solutions
            solve some needs, they rarely deliver on{" "}
            <span className="text-neutral-900 font-semibold">
              beauty, performance, and durability
            </span>{" "}
            together.
          </p>
        </div>

        {/* Existing Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="fade-up bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-600/5 rounded-bl-full"></div>
            <div className="h-40 sm:h-48 lg:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop"
                alt="Standard windows and doors"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-amber-700">
              Standard Windows & Doors
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              Affordable and easy to install, but they lack the structural
              strength, thermal efficiency, and seamless integration modern
              spaces demand.
            </p>
            <div className="mt-4 sm:mt-6 space-y-2">
              <div className="flex items-center text-xs sm:text-sm text-amber-600">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
                </div>
                Limited structural strength
              </div>
              <div className="flex items-center text-xs sm:text-sm text-amber-600">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
                </div>
                Poor thermal efficiency
              </div>
            </div>
          </div>

          <div className="fade-up bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-amber-600/5 rounded-bl-full"></div>
            <div className="h-40 sm:h-48 lg:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop"
                alt="Prefabricated facades"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-amber-700">
              Prefabricated Facades
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              Efficient at scale but often rigid in design, limiting
              architects&apos; creativity and failing to meet luxury
              expectations.
            </p>
            <div className="mt-4 sm:mt-6 space-y-2">
              <div className="flex items-center text-xs sm:text-sm text-amber-600">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
                </div>
                Rigid design limitations
              </div>
              <div className="flex items-center text-xs sm:text-sm text-amber-600">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
                </div>
                Not suitable for luxury projects
              </div>
            </div>
          </div>
        </div>

        {/* What's Missing */}
        <div className="fade-up bg-gradient-to-r from-white to-neutral-100 p-6 sm:p-8 lg:p-10 rounded-3xl border border-amber-600/30 shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-amber-600">
                What&apos;s Missing?
              </h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed">
                Current solutions force builders and designers to{" "}
                <span className="text-neutral-900 font-semibold">
                  choose between strength, aesthetics, or flexibility
                </span>
                . None deliver all three at once. This is where we step in.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="bg-amber-600/10 p-3 sm:p-4 rounded-xl border border-amber-600/20">
                  <div className="text-amber-600 text-xl sm:text-2xl font-bold">
                    💪
                  </div>
                  <div className="text-neutral-900 text-xs sm:text-sm mt-1 sm:mt-2">
                    Strength
                  </div>
                </div>
                <div className="bg-amber-600/10 p-3 sm:p-4 rounded-xl border border-amber-600/20">
                  <div className="text-amber-600 text-xl sm:text-2xl font-bold">
                    🎨
                  </div>
                  <div className="text-neutral-900 text-xs sm:text-sm mt-1 sm:mt-2">
                    Aesthetics
                  </div>
                </div>
                <div className="bg-amber-600/10 p-3 sm:p-4 rounded-xl border border-amber-600/20">
                  <div className="text-amber-600 text-xl sm:text-2xl font-bold">
                    🔧
                  </div>
                  <div className="text-neutral-900 text-xs sm:text-sm mt-1 sm:mt-2">
                    Flexibility
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop"
                alt="Modern glazing solution combining strength, aesthetics and flexibility"
                width={600}
                height={400}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
