"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
  // Architecture & Interiors
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753052-dc5dcdc6c351?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",

  // Nature & Landscapes
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80",
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80",

  // Technology & Abstract
  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",

  // People & Details
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80",
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Project Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of our most iconic works—designed with precision, crafted
          with care, and built to inspire.
        </p>
      </div>

      {/* Masonry / Pinterest layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => {
          // Skip rendering if image failed to load
          if (failedImages.has(i)) {
            return null;
          }

          return (
            <div
              key={i}
              className="gallery-item relative overflow-hidden rounded-2xl shadow-lg cursor-pointer break-inside-avoid group"
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                width={400}
                height={600}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                onLoad={() => handleImageLoad(i)}
                onError={() => handleImageError(i)}
              />
              {/* Overlay hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold tracking-wide">
                  View Project
                </span>
              </div>

              {/* Loading skeleton */}
              {!loadedImages.has(i) && !failedImages.has(i) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fallback message if all images fail */}
      {failedImages.size === images.length && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Unable to load gallery images. Please check your internet
            connection.
          </p>
        </div>
      )}
    </section>
  );
}
