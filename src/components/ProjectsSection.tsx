"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Corporate HQ Facade",
    description:
      "Full glass curtain wall system delivering thermal efficiency and modern aesthetics for a Fortune 500 headquarters.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    location: "Mumbai, India",
  },
  {
    title: "Luxury Residential Tower",
    description:
      "Slim-frame sliding systems with panoramic views, enhancing luxury living in a 45-story tower.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    location: "Dubai, UAE",
  },
  {
    title: "University Innovation Center",
    description:
      "Casement and fixed glazing delivering natural light and performance for a world-class research hub.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    location: "Bengaluru, India",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: i * 0.2,
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
    <section
      ref={sectionRef}
      className="relative bg-neutral-900 text-neutral-100 py-24 px-6 md:px-16 lg:px-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400">
            Completed Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            From landmark skyscrapers to luxury homes, our glazing systems
            empower ambitious projects worldwide. Each project is a testament to
            our engineering, craftsmanship, and partnership with visionary
            builders.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card bg-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition border border-neutral-700"
            >
              <div className="h-56 bg-neutral-700 overflow-hidden">
                <Image
  src={project.image}
  alt={project.title}
  width={1200}
  height={800}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-amber-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-neutral-300">{project.description}</p>
                <p className="mt-4 text-sm text-neutral-400 italic">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
