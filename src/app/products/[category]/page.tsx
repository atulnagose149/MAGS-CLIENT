"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const subcategoriesData = {
  "sliding-windows-and-doors": [
    {
      id: "economy-sliding-system",
      name: "Economy Sliding System",
      description:
        "Cost-effective sliding solutions for residential and light commercial applications",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      products: ["MSE63", "MSE22"],
    },
    {
      id: "medium-premiums-sliding-system",
      name: "Medium Premium Sliding System",
      description:
        "Enhanced sliding systems with improved performance and aesthetics",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      products: [
        "MS20",
        "MS27",
        "MS40",
        "MS40 Monorail",
        "MS27 Gulf System",
        "MS50 Vertical sliding",
      ],
    },
    {
      id: "premium-doors-sliding-system",
      name: "Premium Doors Sliding System",
      description: "High-end sliding door systems for luxury applications",
      image:
        "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1200&auto=format&fit=crop",
      products: ["MS11", "MS18", "MS22 Minimal", "MS25"],
    },
    {
      id: "hybrid-premiums-sliding-system",
      name: "Hybrid Premium Sliding System",
      description: "Advanced hybrid technology for maximum performance",
      image: "/products/hybrid-premiums-sliding-system.jpg",
      products: [
        "MS16 Minimal",
        "MS18 Panoramic sliding door",
        "MS22 Panoramic",
        "MS30 Slim Heavy-Duty lift and Slide",
      ],
    },
  ],
  "casement-windows-and-doors": [
    {
      id: "economy-casement",
      name: "Economy Casement",
      description: "Affordable casement solutions with reliable performance",
      image: "/products/economy-casement outer.jpg",
      products: [
        "MCE28 Economy Casement",
        "MCE92 (Economy 3in1 Glass, Grill & Mesh)",
      ],
    },
    {
      id: "premium-casement",
      name: "Premium Casement",
      description: "High-performance casement systems with advanced features",
      image: "/products/premium-casement outer.jpg",
      products: ["MC45", "MC105 (3in1 Glass, Grill & Mesh)", "MD45"],
    },
  ],
  "sliding-folding": [
    {
      id: "folding-systems",
      name: "Sliding Folding Systems",
      description: "Versatile folding door systems for large openings",
      image: "/products/sliding folding outer.jpg",
      products: ["MSFD50", "MSFD58 Premium Folding Door"],
    },
  ],
  "thermal-brake-system": [
    {
      id: "thermal-sliding",
      name: "Thermal Sliding Systems",
      description:
        "Energy-efficient sliding systems with thermal break technology",
      image: "/products/thermal sliding outer.jpg",
      products: [
        "MSTH75 Sliding",
        "150 Panoramic Sliding Doors",
        "MSTH35 Slim Sliding",
      ],
    },
    {
      id: "thermal-casement",
      name: "Thermal Casement Systems",
      description: "Insulated casement windows and doors with thermal break",
      image: "/products/thermal-casement outer.jpg",
      products: ["MCTH50 Casement Windows", "MDTH50 Casement Doors"],
    },
  ],
};

export default function SubCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [currentCategory, setCurrentCategory] = useState(category);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Update category when params change
  useEffect(() => {
    if (category !== currentCategory) {
      setCurrentCategory(category);
    }
  }, [category, currentCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Card entrance animations
      const cards = gsap.utils.toArray(".subcategory-card");
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
  }, [currentCategory]);

  const subcategories =
    currentCategory in subcategoriesData
      ? subcategoriesData[currentCategory as keyof typeof subcategoriesData]
      : [];

  // Add key to force re-render when category changes
  return (
    <div
      key={currentCategory}
      ref={sectionRef}
      className="min-h-screen bg-slate-900 mt-2"
    >
      {/* Breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
          style={{
            marginTop: "5.25rem", // 100px ÷ 16px = 6.25rem
          }}
        >
          <nav className="flex space-x-2 text-sm">
            <Link href="/products" className="text-white hover:text-white/80">
              Products
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300 capitalize">
              {currentCategory?.replace(/-/g, " ")}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 capitalize drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
            {currentCategory?.replace(/-/g, " ")}
          </h1>
          <p className="text-white/90">
            Choose from our range of specialized systems
          </p>
        </div>
      </div>

      {/* Subcategories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, idx) => (
              <Link
                key={`${currentCategory}-${idx}`}
                href={`/products/${currentCategory}/${subcategory.id}`}
                className="subcategory-card hover-card group relative rounded-2xl shadow-lg overflow-hidden border border-slate-600 hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
                  <div className="h-48 bg-slate-700 overflow-hidden">
                    <Image
                      src={subcategory.image}
                      alt={subcategory.name}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {subcategory.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {subcategory.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">
                        {subcategory.products.length} Products
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
