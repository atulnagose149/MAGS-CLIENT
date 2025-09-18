"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - FASTER
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
      );

      // Projects grid animation - FASTER
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.25 + i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle card click
  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projectbanner.jpg"
            alt="Project banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Our Completed
            <span className="block text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              Projects Portfolio
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Discover how MAGS aluminum glazing systems have transformed
            residential and commercial spaces across Gujarat.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="project-card hover-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{ backgroundColor: "#0F172B" }}
                onClick={() => handleCardClick(project.slug)}
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
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full border border-white/30">
                          {project.productInstalled.split(" ")[0]}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        📍 {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Product Installed:
                      </h4>
                      <p className="text-white/80 text-sm">
                        {project.productInstalled}
                      </p>
                    </div>

                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {project.overview}
                    </p>

                    <div
                      className="hover-button relative inline-flex items-center font-semibold px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden cursor-pointer text-sm"
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
                          background:
                            "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                          pointerEvents: "none",
                        }}
                      ></div>

                      <span className="relative z-10 flex items-center">
                        Read More
                        <svg
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
