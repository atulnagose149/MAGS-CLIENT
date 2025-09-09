"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fileName, setFileName] = useState("No file chosen");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-field", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
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
        <h2 className="contact-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Request a <span className="text-indigo-600">Technical Proposal</span>
        </h2>
        <p className="contact-field text-gray-600 mb-12">
          For BOQs, CAD details, or compliance documentation, please attach
          relevant files (PDF only).
        </p>

        <form className="space-y-6 text-left bg-white shadow-lg rounded-xl p-8">
          <div className="contact-field">
            <label className="block font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="contact-field">
            <label className="block font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="contact-field">
            <label className="block font-medium text-gray-700 mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="contact-field">
            <label className="block font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="contact-field">
            <label className="block font-medium text-gray-700 mb-2">
              Attach File (PDF only)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
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
            className="contact-field w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
