"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Request a <span className="text-amber-600">Technical Proposal</span>
        </h2>
        <p
          className={`text-gray-600 mb-12 transform transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          For BOQs, CAD details, or compliance documentation, please attach
          relevant files (PDF only).
        </p>

        <form
          className={`space-y-6 text-left bg-white shadow-lg rounded-xl p-8 transform transition-all duration-1200 ease-out delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            ></textarea>
          </div>

          <div
            className={`transform transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <label className="block font-medium text-gray-700 mb-2">
              Attach File (PDF only)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors">
                Upload File
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <span className="text-gray-600 text-sm">{fileName}</span>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-all duration-1000 ease-out delay-1100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
