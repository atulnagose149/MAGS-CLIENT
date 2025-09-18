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
    description:
      "Premium aluminum sliding systems offering smooth operation, maximum natural light, and seamless indoor-outdoor living experiences.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    subcategories: 4,
  },
  {
    id: "casement-windows-and-doors",
    name: "Casement Windows and Doors",
    description:
      "Side-hinged windows and doors providing excellent ventilation, security, and energy efficiency with superior sealing performance.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    subcategories: 5,
  },
  {
    id: "sliding-folding",
    name: "Sliding Folding",
    description:
      "Wide-opening bi-fold door systems that create expansive openings, perfect for connecting interior spaces with outdoor areas.",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1200&auto=format&fit=crop",
    subcategories: 2,
  },
  {
    id: "thermal-brake-system",
    name: "Thermal Brake System",
    description:
      "Advanced thermal break technology providing superior insulation, energy efficiency, and noise reduction for modern buildings.",
    image:
      "https://images.unsplash.com/photo-1628744404730-5e143358539b?q=80&w=1200&auto=format&fit=crop",
    subcategories: 5,
  },
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

      // Card hover animations
      const hoverCards = gsap.utils.toArray(".hover-card");
      hoverCards.forEach((card: unknown) => {
        const element = card as HTMLElement;
        const overlay = element.querySelector(".gradient-overlay");

        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 mt-20" >
      {/* Hero Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
            Our Products
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Premium aluminum glazing systems engineered for performance,
            aesthetics, and durability
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
                className="product-card hover-card group relative rounded-2xl shadow-lg overflow-hidden border border-slate-600 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: "#0F172B" }}
              >
                {/* Gradient Overlay */}
                <div
                  className="gradient-overlay absolute inset-0 opacity-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                    pointerEvents: "none",
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="h-56 bg-slate-700 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">
                        {product.subcategories} Categories
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
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
