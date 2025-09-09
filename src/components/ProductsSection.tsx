"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "MS11 Sliding System",
    description:
      "Slim-profile sliding system designed for elegance and durability, ideal for large-span openings.",
    specs: "Max panel 300kg • Glass 6–32mm",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "MS65 Curtain Wall",
    description:
      "High-performance facade system engineered for commercial buildings and high-rise projects.",
    specs: "Thermally broken • Custom finishes",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "MC45 Casement",
    description:
      "Versatile casement system providing strength, airtightness, and excellent thermal insulation.",
    specs: "Uw ≥ 1.6 W/m²K • Glass 24–42mm",
    image:
      "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Folding Doors",
    description:
      "Wide-opening bi-fold systems for seamless indoor-outdoor living with smooth operation.",
    specs: "Max 7 panels • 90° corner opening",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
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
      className="relative bg-neutral-50 text-neutral-900 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Precision-engineered aluminum glazing systems designed for
            architects, builders, and developers who demand performance and
            aesthetics.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-56 bg-neutral-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-600">
                  {product.name}
                </h3>
                <p className="mt-3 text-neutral-700 text-sm">
                  {product.description}
                </p>
                <p className="mt-4 text-sm text-neutral-500 italic">
                  {product.specs}
                </p>
                <button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-neutral-900">
            Need a Custom Solution?
          </h3>
          <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom glazing
            systems tailored to your specific project requirements.
          </p>
          <button className="mt-6 bg-neutral-900 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
