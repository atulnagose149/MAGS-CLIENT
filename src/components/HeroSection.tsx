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
            backgroundImage: "url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop')"
          }}
        ></div>
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70"></div>
        
        {/* Additional image elements for collage effect */}
        <div 
          className="absolute top-10 right-10 w-72 h-48 rounded-lg shadow-2xl border-2 border-white/20 hidden lg:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div 
          className="absolute bottom-10 left-10 w-64 h-40 rounded-lg shadow-2xl border-2 border-white/20 hidden md:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div 
          className="absolute top-1/2 left-1/4 w-56 h-36 rounded-lg shadow-2xl border-2 border-white/20 hidden xl:block"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
          Innovative Aluminum <span className="text-amber-400">Glazing</span> Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Commercial windows, doors, curtain walls, and facades engineered to perfection with precision and style.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-4 bg-amber-500 text-neutral-900 font-semibold rounded-lg hover:bg-amber-400 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1"
          >
            Request Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}