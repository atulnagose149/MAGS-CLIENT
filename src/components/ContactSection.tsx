"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Coordinates for your location
  const lat = 23.085512784100125;
  const lng = 72.49274872852467;

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

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
    window.open(googleMapsUrl, "_blank");
  };

  // EmailJS Send Function
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_4g72xkf", // Replace with your EmailJS service ID
        "template_mwep45j", // Replace with your EmailJS template ID
        formRef.current!,
        "mNGvX2Tme75hapanZ" // Replace with your EmailJS public key
      );

      setStatusMessage(
        "🎉 Thank you! Your message has been sent successfully!"
      );
      formRef.current?.reset();
      setFileName("No file chosen");

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatusMessage(""), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("❌ Oops! Failed to send message. Please try again.");

      // Auto-hide error message after 5 seconds
      setTimeout(() => setStatusMessage(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate the iframe src
  const getMapSrc = () => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.123!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA1JzA3LjgiTiA3MsKwMjknMzQuNCJF!5e0!3m2!1sen!2sin!4v1694615234567!5m2!1sen!2sin&z=15`;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-page Embedded Google Maps */}
      <div className="w-full h-full relative">
        <iframe
          src={getMapSrc()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Click Overlay to Open Google Maps */}
        <div
          className="absolute inset-0 cursor-pointer z-10"
          onClick={openInGoogleMaps}
          title="Click to open in Google Maps"
          style={{ background: "transparent" }}
        />

        {/* Map Control - Open in Google Maps Button - Responsive positioning */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-20">
          <button
            onClick={openInGoogleMaps}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg transition-colors text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2"
            title="Open in Google Maps"
          >
            <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="hidden xs:inline">Open</span>
            <span className="hidden sm:inline">Map</span>
          </button>
        </div>
      </div>

      {/* Responsive Contact Form Overlay */}
      <section
        ref={sectionRef}
        className={`absolute inset-x-2 top-2 sm:inset-x-4 sm:top-4 md:top-6 md:right-6 md:left-auto md:max-w-md lg:max-w-lg xl:max-w-xl z-30 transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-lg shadow-2xl rounded-2xl p-4 sm:p-5 md:p-6 border border-white/40">
          <div className="text-center">
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-3 md:mb-4 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Request a Technical Proposal
            </h2>
            <p
              className={`text-gray-700 mb-4 md:mb-6 text-xs sm:text-sm leading-relaxed transform transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              For BOQs, CAD details, or compliance documentation, please attach
              relevant files (PDF only).
            </p>

            {/* Status Message - Responsive */}
            {statusMessage && (
              <div
                className={`mb-3 md:mb-4 p-2 md:p-3 rounded-lg text-xs sm:text-sm font-medium ${
                  statusMessage.includes("successfully")
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className={`space-y-3 md:space-y-4 text-left transform transition-all duration-1200 ease-out delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div
                className={`transform transition-all duration-1000 ease-out delay-600 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <label className="block font-medium text-gray-800 mb-1 text-xs sm:text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none bg-white/95 text-xs sm:text-sm transition-all"
                />
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <label className="block font-medium text-gray-800 mb-1 text-xs sm:text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none bg-white/95 text-xs sm:text-sm transition-all"
                />
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-800 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <label className="block font-medium text-gray-800 mb-1 text-xs sm:text-sm">
                  Your Phone
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="+91 9876543210"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none bg-white/95 text-xs sm:text-sm transition-all"
                />
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-900 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <label className="block font-medium text-gray-800 mb-1 text-xs sm:text-sm">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Type your message..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none bg-white/95 text-xs sm:text-sm resize-none transition-all"
                ></textarea>
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <label className="block font-medium text-gray-800 mb-1 text-xs sm:text-sm">
                  Attach File (PDF only)
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <label className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-3 py-2 rounded-lg transition-all text-xs sm:text-sm font-medium whitespace-nowrap">
                    Upload File
                    <input
                      type="file"
                      name="attachment"
                      accept=".pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  <span className="text-gray-700 text-xs flex-1 truncate mt-1 sm:mt-0">
                    {fileName}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-600 hover:via-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-1000 ease-out delay-1100 text-xs sm:text-sm transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
