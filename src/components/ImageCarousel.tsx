"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  productName: string;
}

// Helper function to check if URL is valid
const isValidUrl = (url: string) => {
  if (!url || url.trim() === "") return false;
  try {
    // If it's relative (starts with /), it's also valid
    if (url.startsWith("/")) return true;
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function ImageCarousel({
  images,
  productName,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Only keep valid image URLs
  const validImages = images.filter((img) => isValidUrl(img));

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + validImages.length) % validImages.length
    );
  };

  if (validImages.length === 0) {
    return (
      <div className="bg-neutral-100 rounded-lg h-96 flex items-center justify-center">
        <span className="text-neutral-500">No images available</span>
      </div>
    );
  }

  // Pick current image or fallback
  const currentImage =
    validImages[currentIndex] && isValidUrl(validImages[currentIndex])
      ? validImages[currentIndex]
      : "/fallback.png";

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div className="aspect-[4/3] flex items-center justify-center p-4">
          <div className="relative w-full h-full">
            <Image
              src={currentImage}
              alt={`${productName} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              style={{ imageRendering: "crisp-edges" }}
              unoptimized // optional: skip Next.js domain check
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </>
        )}

        {/* Image Counter */}
        {validImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {validImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {validImages.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {validImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-amber-600 ring-2 ring-amber-600/20"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <div className="relative w-full h-full bg-white p-1">
                <Image
                  src={isValidUrl(image) ? image : "/fallback.png"}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
