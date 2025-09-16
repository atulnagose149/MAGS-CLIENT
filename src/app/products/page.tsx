"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const mainProducts = [
  {
    id: "sliding-windows-and-doors",
    name: "Sliding Windows and Doors",
    description: "Premium aluminum sliding systems offering smooth operation, maximum natural light, and seamless indoor-outdoor living experiences.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    subcategories: 4
  },
  {
    id: "casement-windows-and-doors",
    name: "Casement Windows and Doors",
    description: "Side-hinged windows and doors providing excellent ventilation, security, and energy efficiency with superior sealing performance.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    subcategories: 5
  },
  {
    id: "sliding-folding",
    name: "Sliding Folding",
    description: "Wide-opening bi-fold door systems that create expansive openings, perfect for connecting interior spaces with outdoor areas.",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    subcategories: 2
  },
  {
    id: "thermal-brake-system",
    name: "Thermal Brake System",
    description: "Advanced thermal break technology providing superior insulation, energy efficiency, and noise reduction for modern buildings.",
    image: "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
    subcategories: 5
  }
];

export default function ProductsPage() {
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
    <div className="min-h-screen bg-neutral-50 " >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Premium aluminum glazing systems engineered for performance, aesthetics, and durability
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainProducts.map((product, idx) => (
              <Link
                key={idx}
                href={`/products/${product.id}`}
                className="product-card bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-56 bg-neutral-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-600 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-500">
                      {product.subcategories} Categories
                    </span>
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
