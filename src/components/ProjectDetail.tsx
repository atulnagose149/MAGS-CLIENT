"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image animation
      gsap.fromTo(
        ".project-hero-image",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // Content animations
      gsap.fromTo(
        ".project-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".project-info",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.5, stagger: 0.1 }
      );

      gsap.fromTo(
        ".project-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.7 }
      );

      // Gallery animations
      gsap.fromTo(
        ".gallery-image",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 80%",
          },
        }
      );

      // Card hover animations (only for sidebar)
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

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-white hover:text-white/80">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-900 text-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-white hover:text-white/80">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/projects" className="text-white hover:text-white/80">
              Projects
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="project-hero-image object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="project-title text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
                {project.title}
              </h1>

              <div className="project-content space-y-8">
                {/* Project Overview */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Project Overview
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Key Features Delivered
                  </h2>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value to Client */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Value to Client
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {project.valueToClient}
                  </p>
                </div>

                {/* Gallery - CORRECTED: No hover overlays that block images */}
                {project.images.length > 1 && (
                  <div className="gallery-section">
                    <h2 className="text-2xl font-bold mb-6 text-white">
                      Project Gallery
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.images.slice(1).map((image, index) => (
                        <div
                          key={index}
                          className="gallery-image relative h-64 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} ${index + 2}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - ONLY this has hover effects */}
            <div className="lg:col-span-1">
              <div
                className="hover-card relative p-6 rounded-lg sticky top-24 transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: "#0F172B" }}
              >
                {/* Gradient Overlay */}
                <div
                  className="gradient-overlay absolute inset-0 opacity-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #2055AB 0%, #2055AB 100%)",
                    pointerEvents: "none",
                  }}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Project Information
                  </h3>

                  <div className="space-y-4">
                    <div className="project-info">
                      <h4 className="font-semibold text-white">Project</h4>
                      <p className="text-white/80">{project.title}</p>
                    </div>

                    <div className="project-info">
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-white/80">📍 {project.location}</p>
                    </div>

                    <div className="project-info">
                      <h4 className="font-semibold text-white">
                        Product Installed
                      </h4>
                      <p className="text-white/80">
                        {project.productInstalled}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects - CORRECTED: No overlays blocking images */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="group relative h-64 rounded-lg overflow-hidden"
                >
                  <Image
                    src={relatedProject.images[0]}
                    alt={relatedProject.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-lg text-white">
                      {relatedProject.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      📍 {relatedProject.location}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
