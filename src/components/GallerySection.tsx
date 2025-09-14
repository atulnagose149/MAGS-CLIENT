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
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/service-entry-img-1.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/vision-image.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/page-header-bg.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/why-work-with-us-img-1.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/why-work-with-us-img-2.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/work-gallery-img-1.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/work-gallery-img-2.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/work-gallery-img-3.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/our-faq-img.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/post-1.jpg",
  "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/post-3.jpg",
  // "https://demo.awaikenthemes.com/hetch/wp-content/uploads/2024/11/mission-image-2.jpg",
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
