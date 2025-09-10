"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Sliding Windows and Doors",
    description:
      "Premium aluminum sliding systems offering smooth operation, maximum natural light, and seamless indoor-outdoor living experiences.",
    specs: "Max panel 300kg • Glass 6–32mm • Weather sealed",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Casement Windows and Doors",
    description:
      "Side-hinged windows and doors providing excellent ventilation, security, and energy efficiency with superior sealing performance.",
    specs: "Uw ≥ 1.6 W/m²K • Glass 24–42mm • Multi-point locking",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sliding Folding",
    description:
      "Wide-opening bi-fold door systems that create expansive openings, perfect for connecting interior spaces with outdoor areas.",
    specs: "Max 7 panels • 90° corner opening • Smooth rollers",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Thermal Brake System",
    description:
      "Advanced thermal break technology providing superior insulation, energy efficiency, and noise reduction for modern buildings.",
    specs: "Thermally broken • U-value ≤ 1.4 • Sound reduction 42dB",
    image:
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");

      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
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
      className="relative bg-neutral-50 text-neutral-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Our Products
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
            Precision-engineered aluminum glazing systems designed for
            architects, builders, and developers who demand performance and
            aesthetics.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 sm:h-56 bg-neutral-200 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-amber-600 mb-3">
                  {product.name}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 italic mb-6">
                  {product.specs}
                </p>
                <Link
                  href="/products"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-center inline-block"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8 border border-amber-200">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
            Need a Custom Solution?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto mb-6">
            Our engineering team can design and manufacture custom glazing
            systems tailored to your specific project requirements.
          </p>
          <button className="bg-neutral-900 hover:bg-amber-600 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
