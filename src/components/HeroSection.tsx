"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Enhanced overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/65"></div>

        {/* Additional subtle overlay for extra contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7), -1px -1px 2px rgba(0,0,0,0.8)'
          }}
        >
          Innovative Aluminum{" "}
          <span 
            className="text-amber-300"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7)'
            }}
          >
            Glazing
          </span>{" "}
          Solutions
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'
          }}
        >
          Commercial windows, doors, curtain walls, and facades engineered to
          perfection with precision and style.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 bg-amber-500 text-neutral-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            style={{
              boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,158,11,0.5)'
            }}
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
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
            boxShadow: '0 0 15px rgba(0,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.2)'
          }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
