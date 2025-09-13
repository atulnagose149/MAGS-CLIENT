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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="text-amber-500 hover:text-amber-400"
          >
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
            <Link href="/" className="text-amber-500 hover:text-amber-400">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/projects"
              className="text-amber-500 hover:text-amber-400"
            >
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
              <h1 className="project-title text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>

              <div className="project-content space-y-8">
                {/* Project Overview */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-amber-400">
                    Project Overview
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-amber-400">
                    Key Features Delivered
                  </h2>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value to Client */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-amber-400">
                    Value to Client
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.valueToClient}
                  </p>
                </div>

                {/* Gallery */}
                {project.images.length > 1 && (
                  <div className="gallery-section">
                    <h2 className="text-2xl font-bold mb-6 text-amber-400">
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Information</h3>

                <div className="space-y-4">
                  <div className="project-info">
                    <h4 className="font-semibold text-amber-400">Project</h4>
                    <p className="text-gray-300">{project.title}</p>
                  </div>

                  <div className="project-info">
                    <h4 className="font-semibold text-amber-400">Location</h4>
                    <p className="text-gray-300">📍 {project.location}</p>
                  </div>

                  <div className="project-info">
                    <h4 className="font-semibold text-amber-400">
                      Product Installed
                    </h4>
                    <p className="text-gray-300">{project.productInstalled}</p>
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="font-semibold mb-4">Share:</h4>
                  <div className="flex space-x-3">
                    {[
                      { name: "Facebook", icon: "📘" },
                      { name: "Twitter", icon: "🐦" },
                      { name: "LinkedIn", icon: "💼" },
                      { name: "WhatsApp", icon: "💬" },
                    ].map((platform) => (
                      <button
                        key={platform.name}
                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors text-lg"
                        title={`Share on ${platform.name}`}
                      >
                        {platform.icon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                  Get Similar Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
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
                    <h3 className="font-bold text-lg">
                      {relatedProject.title}
                    </h3>
                    <p className="text-amber-400 text-sm">
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
