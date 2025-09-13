"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === sectionRef.current)
          setIsVisible(entry.isIntersecting);
        if (entry.target === teamRef.current)
          setTeamVisible(entry.isIntersecting);
        if (entry.target === servicesRef.current)
          setServicesVisible(entry.isIntersecting);
        if (entry.target === valuesRef.current)
          setValuesVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    [sectionRef, teamRef, servicesRef, valuesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Engineering-led
                <span className="block text-amber-600">excellence</span>
                in every detail
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming architectural visions into reality with
                precision-engineered aluminum glazing solutions that define the
                future of building design.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                Our Projects
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
              alt="Team celebrating successful project"
              width={700}
              height={500}
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section ref={sectionRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wide mb-4">
                A Few Words
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-8">
                About Us
              </h3>
              <div className="w-16 h-1 bg-amber-600 mb-8"></div>
            </div>

            <div
              className={`space-y-6 text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p>
                Today, MAGS stands as India's premier aluminum glazing
                specialist, transforming architectural dreams into reality. We
                have evolved into a comprehensive solutions provider, leading
                innovation in commercial and residential glazing systems.
              </p>
              <p>
                Our story began with a simple belief: every building deserves
                systems that combine aesthetic excellence with uncompromising
                performance. Today, we're proud to be the trusted partner of
                India's most prestigious architects, developers, and
                construction leaders.
              </p>
              <p>
                As a result of working with hundreds of premium projects across
                India over the past years, we are now delivering solutions that
                set new benchmarks in thermal performance, structural integrity,
                and design innovation across diverse climate conditions.
              </p>

              <blockquote className="border-l-4 border-amber-600 pl-6 italic text-gray-600 mt-8">
                "What truly sets us apart is our commitment to engineering
                excellence and our ability to translate complex architectural
                visions into precision-manufactured reality."
                <footer className="text-sm text-gray-500 mt-2 font-semibold">
                  — MAGS Engineering Team
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the professionals who bring decades of expertise in aluminum
              engineering, architectural design, and project execution to every
              MAGS solution.
            </p>
          </div>

          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${
              teamVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                name: "Rajesh Sharma",
                role: "Chief Technical Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
                description:
                  "15+ years in structural glazing and facade engineering",
              },
              {
                name: "Priya Patel",
                role: "Lead Architect",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b9f5e8e6?q=80&w=2070&auto=format&fit=crop",
                description:
                  "Award-winning designer specializing in sustainable glazing",
              },
              {
                name: "Amit Kumar",
                role: "Project Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
                description: "Led 200+ commercial projects across India",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  teamVisible ? `animate-fade-in-up delay-${index * 200}` : ""
                }`}
              >
                <div className="h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive aluminum glazing solutions for every architectural
              need
            </p>
          </div>

          <div
            className={`grid md:grid-cols-3 gap-8 transform transition-all duration-1000 ${
              servicesVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                icon: "🏢",
                title: "Commercial Facades",
                description:
                  "High-performance curtain wall systems, structural glazing, and commercial window solutions engineered for large-scale projects with superior thermal and acoustic performance.",
              },
              {
                icon: "🏠",
                title: "Residential Systems",
                description:
                  "Premium sliding, casement, and folding door systems designed for luxury homes and residential towers, featuring multi-point locking and energy efficiency.",
              },
              {
                icon: "⚙️",
                title: "Custom Engineering",
                description:
                  "Bespoke aluminum profile design, thermal break integration, and specialized glazing solutions tailored to unique architectural requirements and performance specifications.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  servicesVisible
                    ? `animate-fade-in-up delay-${index * 200}`
                    : ""
                }`}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                valuesVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose MAGS
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Precision Engineering",
                    description:
                      "Every system tested to international standards with certified performance data",
                  },
                  {
                    title: "Architectural Freedom",
                    description:
                      "Minimal profiles and maximum glazing area for unrestricted design possibilities",
                  },
                  {
                    title: "Thermal Excellence",
                    description:
                      "Advanced thermal break technology for superior energy efficiency",
                  },
                  {
                    title: "Lifetime Value",
                    description:
                      "Corrosion-resistant materials with minimal maintenance requirements",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 ${
                valuesVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern building with MAGS aluminum glazing systems"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Partner with MAGS for aluminum glazing solutions that combine
            engineering excellence with architectural innovation. Let's create
            something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-500 font-semibold mb-8 uppercase tracking-wide">
            Trusted by Leading Developers
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 font-bold">CLIENT {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

