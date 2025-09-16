"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Reset the element to visible state first
    gsap.set(heroRef.current, {
      opacity: 1,
      y: 0,
      clearProps: "all", // Clear any previous GSAP properties
    });

    // Kill any existing ScrollTriggers on this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === heroRef.current) {
        trigger.kill();
      }
    });

    // Create the animation
    const tl = gsap.timeline();

    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup function
    return () => {
      // Kill ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === heroRef.current) {
          trigger.kill();
        }
      });

      // Reset element to visible state
      if (heroRef.current) {
        gsap.set(heroRef.current, {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
      }
    };
  }, []); // Keep empty dependency array

  // Also add a separate effect to handle route changes
  useEffect(() => {
    // Refresh ScrollTrigger when component mounts/remounts
    ScrollTrigger.refresh();

    return () => {
      // Clean up on unmount
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Enhanced overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/65"></div>

        {/* Additional subtle overlay for extra contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content - Add default visible styles */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-4xl mx-auto"
        style={{ opacity: 1 }} // Ensure it's visible by default
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
          style={{
            textShadow:
              "2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7), -1px -1px 2px rgba(0,0,0,0.8)",
          }}
        >
          Innovative Aluminum{" "}
          <span
            className="text-amber-300"
            style={{
              textShadow:
                "2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7)",
            }}
          >
            Glazing
          </span>{" "}
          Solutions
        </h1>

        <p
          className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: "1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)",
          }}
        >
          Commercial windows, doors, curtain walls, and facades engineered to
          perfection with precision and style.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-amber-500 text-neutral-900 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-amber-400 overflow-hidden inline-block"
            style={{
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,158,11,0.5)",
            }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -8,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            style={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            Request Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg"
          style={{
            boxShadow:
              "0 0 15px rgba(0,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.2)",
          }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
