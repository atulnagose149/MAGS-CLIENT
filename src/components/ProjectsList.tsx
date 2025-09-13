"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      // Projects grid animation
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: 0.5 + i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            Our Completed
            <span className="block text-amber-400">Projects Portfolio</span>
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
                className="project-card group bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
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
                      <span className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full">
                        {project.productInstalled.split(" ")[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-amber-400 text-sm">
                      📍 {project.location}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-amber-400 mb-2">
                      Product Installed:
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {project.productInstalled}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.overview}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors group"
                  >
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
