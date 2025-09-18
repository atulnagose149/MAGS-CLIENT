"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productsData = {
  "economy-sliding-system": [
    {
      id: "mse63",
      name: "MSE63",
      description:
        "Non-insulated sliding system for warm climates and indoor applications",
      image: "/products/MSE63!.jpg",
      specs: "Max weight: 100kg • Glass: 4-8mm • Economy series",
    },
    {
      id: "mse22",
      name: "MSE22",
      description:
        "Minimalistic sliding system with 2-, 3- to 4-rail solutions for aesthetic applications",
      image: "/products/MS22outer.jpg",
      specs: "Max weight: 100kg • Glass: 4-8mm • Minimalistic design",
    },
  ],
  "medium-premiums-sliding-system": [
    {
      id: "ms20",
      name: "MS20",
      description:
        "SLIM sliding system with minimalistic design offering 2-, 3- to 4-rail solutions",
      image: "/products/MS20outer.jpg",
      specs: "Max weight: 200kg • Glass: 5-24mm • Up to 4-rail solutions",
    },
    {
      id: "ms27",
      name: "MS27",
      description:
        "GULF SLIM sliding system with 2 and 3-rail solutions, optimized for Gulf climate applications",
      image: "/products/MS27outer.jpg",
      specs: "Max weight: 200kg • Glass: 5-24mm • Gulf climate optimized",
    },
    {
      id: "ms40",
      name: "MS40",
      description:
        "Robust sliding system with monorail option and enhanced interlocking for warm climates",
      image: "/products/MS40outer.jpg",
      specs: "Max weight: 200kg • Glass: 5-24mm • Monorail depth: 101mm",
    },
    {
      id: "ms40-monorail",
      name: "MS40 Monorail",
      description:
        "Specialized monorail sliding system with 101mm depth for enhanced structural performance",
      image: "/products/MS40 Monorailouter.jpg",
      specs: "Max weight: 200kg • Glass: 5-24mm • Monorail depth: 101mm",
    },
    {
      id: "ms27-gulf",
      name: "MS27 Gulf System",
      description:
        "GULF SLIM sliding system specifically designed for hot climates with enhanced durability",
      image: "/products/GULF SLIM MS27outer.jpg",
      specs: "Max weight: 200kg • Glass: 5-24mm • Gulf climate optimized",
    },
    {
      id: "ms50-vertical-sliding",
      name: "MS50 Vertical Sliding",
      description:
        "Heavy-duty vertical sliding system for large openings with superior insulation and performance",
      image: "/products/MS50 Vertical Slidingouter.jpg",
      specs: "Max weight: 600kg • Glass: 5-30mm • Large span capability",
    },
  ],
  "premium-doors-sliding-system": [
    {
      id: "ms11",
      name: "MS11",
      description:
        "LA VISTA ultra-slim sliding system with large transparent surfaces and minimal sightlines",
      image: "/products/ms11outer.jpg",
      specs: "Max weight: 300kg • Glass: 5-30mm • Ultra-slim 31mm frame",
    },
    {
      id: "ms18",
      name: "MS18",
      description:
        "PREMIUM SLIM sliding system with ultimate performance and large transparent surfaces",
      image: "/products/ms18outer.jpg",
      specs: "Max weight: 500kg • Glass: 5-30mm • Height up to 4500mm",
    },
    {
      id: "ms22-minimal",
      name: "MS22 Minimal",
      description:
        "PREMIUM MINIMAL sliding system with minimalist panoramic design and narrowest visible profile",
      image: "/products/MS22 Minimal outer.jpg",
      specs: "Max weight: 300kg • Glass: 5-34mm • 29mm visible width",
    },
    {
      id: "ms25",
      name: "MS25",
      description:
        "PREMIUM SLIM sliding system with sleek design for large transparent surfaces and enhanced interlocking",
      image: "/products/ms25outer.jpg",
      specs: "Max weight: 300kg • Glass: 5-30mm • Height up to 4000mm",
    },
  ],
  "hybrid-premiums-sliding-system": [
    {
      id: "ms16-minimal",
      name: "MS16 Minimal",
      description:
        "ULTRA SLIM insulated sliding system with concealed frame and optimal panoramic views",
      image: "/products/ms16-minimal outer.jpg",
      specs:
        "Max weight: 300kg • Glass: 5-24mm • Ultra slim 20mm visible width",
    },
    {
      id: "ms18-panoramic-sliding-door",
      name: "MS18 Panoramic Sliding Door",
      description:
        "PREMIUM SLIM panoramic sliding system with ultra-large dimensions and heavy-duty performance",
      image: "/products/ms18-panoramic-sliding-door OUTER.jpg",
      specs: "Max weight: 600kg • Glass: 5-30mm • Large span capability",
    },
    {
      id: "ms22-panoramic",
      name: "MS22 Panoramic",
      description:
        "PREMIUM MINIMAL PANORAMIC sliding system with narrowest visible profile for large transparent surfaces",
      image: "/products/ms22-panoramicOuter.jpg",
      specs: "Max weight: 300kg • Glass: 5-34mm • 29mm visible width",
    },
    {
      id: "ms30-slim-heavy-duty-lift-and-slide",
      name: "MS30 Slim Heavy-Duty Lift and Slide",
      description:
        "Heavy-duty lift and slide system with adjustable ventilation and superior sealing performance",
      image: "/products/ms30-slim-heavy-duty-lift-and-slide outer.jpg",
      specs:
        "Max weight: 300/400/600kg • Glass: 5-45mm • Lift and slide technology",
    },
  ],
  "economy-casement": [
    {
      id: "mce28",
      name: "MCE28 Economy Casement",
      description:
        "Economy casement system for basic residential applications with outward opening functionality",
      image: "/products/mce28 outer.jpg",
      specs: "Max weight: 60kg • Glass: 4-8mm • Outward opening",
    },
    {
      id: "mce92",
      name: "MCE92 (Economy 3in1 Glass, Grill & Mesh)",
      description:
        "Economy 3-in-1 casement system with integrated glass, security grill, and mosquito mesh",
      image: "/products/mce92 outer.jpg",
      specs: "Max weight: 60kg • Glass: 4-8mm • 3-in-1 system • Triple gasket",
    },
  ],
  "premium-casement": [
    {
      id: "mc45",
      name: "MC45",
      description:
        "Premium non-insulated casement system with triple gaskets for tropical climate performance",
      image: "/products/mc45 outer.jpg",
      specs: "Max weight: 150kg • Glass: 5-35mm • Triple gasket system",
    },
    {
      id: "mc105",
      name: "MC105 (3in1 Glass, Grill & Mesh)",
      description:
        "Premium 3-in-1 casement system with integrated glass, security grill, and mosquito mesh",
      image: "/products/mc105 outer.jpg",
      specs:
        "Max weight: 150kg • Glass: 5-35mm • 3-in-1 system • Deep 105mm frame",
    },
    {
      id: "md45",
      name: "MD45",
      description:
        "Premium casement door system with enhanced performance and durability",
      image: "/products/md45 outer.jpg",
      specs: "Door system • Premium performance • Enhanced durability",
    },
  ],
  "folding-systems": [
    {
      id: "msfd50",
      name: "MSFD50",
      description:
        "Sliding folding system for large openings with high insulation and comfort",
      image: "/products/msfd50 outter.jpg",
      specs: "Max weight: 120kg • Glass: 6-30mm • Multiple folding options",
    },
    {
      id: "msfd58-premium-folding-door",
      name: "MSFD58 Premium Folding Door",
      description:
        "Premium folding door system with enhanced performance and aesthetics",
      image: "/products/msfd58-premium-folding-door outer.jpg",
      specs: "Premium folding • Enhanced performance • Large openings",
    },
  ],
  "thermal-sliding": [
    {
      id: "msth75-sliding",
      name: "MSTH75 Sliding",
      description:
        "Thermal break sliding system with superior insulation properties",
      image: "/Products/MSTH75  OUTER.jpg",
      specs: "Thermal break • Superior insulation • Energy efficient",
    },
    {
      id: "150-panoramic-sliding-doors",
      name: "150 Panoramic Sliding Doors (Imported Hybrid System)",
      description:
        "High-performance panoramic sliding doors with imported hybrid technology",
      image: "/products/panoramic-sliding-door outer.jpg",
      specs: "Imported hybrid system • Panoramic view • Premium performance",
    },
    {
      id: "msth35-slim-sliding",
      name: "MSTH35 Slim Sliding",
      description:
        "Slim thermal break sliding system for energy-efficient applications",
      image: "/products/mcth50-c555asement-windows outer.jpg",
      specs: "Slim profile • Thermal break • Energy efficient",
    },
  ],
  "thermal-casement": [
    {
      id: "mcth50-casement-windows",
      name: "MCTH50 Casement Windows",
      description:
        "Thermal break casement windows with superior insulation properties",
      image: "/products/MCTH50 Casement Windows outer.jpg",
      specs: "Thermal break • Superior insulation • Window system",
    },
    {
      id: "mdth50-casement-doors",
      name: "MDTH50 Casement Doors",
      description:
        "Thermal break casement doors for inward and outward opening applications",
      image: "/products/mdth50-casement-doors  outer.jpg",
      specs: "Thermal break • Door system • Inward/outward opening",
    },
  ],
};

export default function ProductsListPage() {
  const params = useParams();
  const category = params.category as string;
  const subcategory = params.subcategory as string;
  const sectionRef = useRef<HTMLDivElement>(null);

  const products =
    subcategory in productsData
      ? productsData[subcategory as keyof typeof productsData]
      : [];

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

      // Button hover animations
      const buttons = gsap.utils.toArray(".hover-button");
      buttons.forEach((button: unknown) => {
        const element = button as HTMLElement;
        const overlay = element.querySelector(".button-overlay");

        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
          if (overlay) {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          if (overlay) {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      // Card entrance animations
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

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Products Not Found
          </h1>
          <p className="text-white/80 mb-6">
            The requested product category could not be found.
          </p>
          <Link
            href="/products"
            className="hover-button relative inline-block font-semibold px-6 py-3 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer"
            style={{
              backgroundColor: "#0F172B",
              color: "white",
              border: "1px solid #475569",
            }}
          >
            {/* Button Overlay */}
            <div
              className="button-overlay absolute inset-0 opacity-0 rounded-lg"
              style={{
                background: "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                pointerEvents: "none",
              }}
            ></div>

            <span className="relative z-10">Back to Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-900">
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
            <Link
              href={`/products/${category}`}
              className="text-white hover:text-white/80 capitalize"
            >
              {category?.replace(/-/g, " ")}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300 capitalize">
              {subcategory?.replace(/-/g, " ")}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 capitalize drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
            {subcategory?.replace(/-/g, " ")}
          </h1>
          <p className="text-white/90">
            Select a specific product for detailed information
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={idx}
                href={`/products/${category}/${subcategory}/${product.id}`}
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
                  <div className="h-48 bg-slate-700 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <p className="text-xs text-white/70 italic mb-4">
                      {product.specs}
                    </p>
                    <div className="flex justify-end">
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
