"use client";

import { useState } from 'react';
import SectionTitle from "@/components/Common/SectionTitle";

const IndustrySolutionsSection = () => {
  const industries = [
    {
      id: 1,
      name: 'Automotive',
      icon: 'M17 9v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a3 3 0 11-6 0 3 3 0 016 0z',
      description: 'Streamline operations, manage inventory, and enhance customer experiences.',
      bgImage: 'https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'blue-400',
      gradient: 'from-blue-500 to-indigo-600'

    },
    {
      id: 2,
      name: 'Construction',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      description: 'Manage projects, track resources, and ensure compliance with ease.',
      bgImage: '/images/IndustrySolutions/Construction.jpg',
      color: 'amber-400',
      gradient: 'from-amber-500 to-orange-600'

    },
    {
      id: 3,
      name: 'Accounting',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      description: 'Simplify financial processes, reporting, and client management.',
      bgImage: '/images/IndustrySolutions/Accounting.jpg',
      color: 'emerald-400',
      gradient: 'from-emerald-500 to-teal-600'

    },
    {
      id: 4,
      name: 'Sports',
      icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M16 12a4 4 0 11-8 0 4 4 0 018 0z',
      description: 'Track performance, manage teams, and engage fans with powerful tools.',
      bgImage: '/images/IndustrySolutions/Sports.jpg',
      color: 'pink-400',
      gradient: 'from-pink-500 to-purple-600'

    },
    {
      id: 5,
      name: 'Healthcare',
      icon: 'M4.5 12.5l6 6.5M12 13l6-8M20 12h1M4 9H3m15 7h1M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
      description: 'Enhance patient care, streamline scheduling, and ensure compliance.',
      bgImage: '/images/IndustrySolutions/Healthcare.jpg',
      color: 'red-400',
      gradient: 'from-red-500 to-rose-600'

    },
    {
      id: 6,
      name: 'Education',
      icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      description: 'Facilitate learning, manage resources, and track student progress.',
      bgImage: '/images/IndustrySolutions/Education.jpg',
      color: 'blue-400',
      gradient: 'from-indigo-500 to-blue-600'

    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (

    <section className="container pt-32 dark:bg-dark">
      <SectionTitle
        subtitle="We Provide Solutions"
        title="Tailored Solutions, Proven Results"
        paragraph="Industry-specific workflows and tools designed to meet your unique business challenges."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="group relative overflow-hidden rounded-3xl transition-all duration-500 h-80 shadow-2xl cursor-pointer"
            onMouseEnter={() => setHoveredCard(industry.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Outer Glow Effect */}
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${industry.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}></div>

            {/* Card Content Container */}
            <div className="relative flex flex-col h-full rounded-3xl overflow-hidden">
              {/* Background Image with Animation */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={industry.bgImage}
                  alt={industry.name}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Dark Overlay - Stronger at bottom for text readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90"></div>

                {/* Colored Gradient Overlay from Industry Theme */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${industry.gradient} mix-blend-soft-light opacity-50 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r ${industry.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700`}></div>
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-${industry.color} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 delay-100`}></div>

              {/* Content with Better Layout */}
              <div className="relative z-10 flex flex-col h-full p-8 text-white">
                <div className="flex justify-between items-start">
                  {/* Icon with Floating Effect */}
                  <div
                    className={`relative w-16 h-16 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:translate-y-1`}>
                    {/* Icon Background with Glassmorphism */}
                    <div
                      className={`absolute inset-0 bg-${industry.color} bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white/10`}></div>

                    {/* Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={industry.icon}
                      />
                    </svg>
                  </div>

                  {/* Number Indication - Hidden until hover */}
                  <div
                    className={`text-5xl font-bold text-white opacity-20 group-hover:opacity-100 transition-opacity duration-700`}>
                    0{industry.id}
                  </div>
                </div>

                {/* Mobile Tag Line */}
                <div
                  className={`inline-block px-3 py-1 rounded-full bg-${industry.color} bg-opacity-20 backdrop-blur-sm text-xs font-medium text-${industry.color} mt-6 self-start transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 ${hoveredCard === industry.id ? '' : 'translate-y-4 opacity-0'}`}>
                  Industry Solution
                </div>

                {/* Title with Animation */}
                <h3
                  className="text-2xl font-bold mt-4 mb-2 text-white transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transform">{industry.name}</h3>

                {/* Description with Reveal Animation */}
                <p
                  className={`text-white/80 mb-6 transition-all duration-500 ${hoveredCard === industry.id ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-4'}`}>
                  {industry.description}
                </p>

                {/* Learn More Button - Clean and Modern */}
                <div className="mt-auto text-end pb-2">
                  <a
                    href="#"
                    className={`group/btn inline-flex items-center py-2.5 px-5 text-sm font-medium bg-${industry.color} text-gray-100 hover:bg-opacity-90 rounded-xl shadow-lg shadow-${industry.color}/20 transition-all duration-500 ${hoveredCard === industry.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  >
                    <span>Explore</span>
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Card Border Accent at Bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 origin-left transition-transform duration-700 ${hoveredCard === industry.id ? 'scale-x-100' : ''}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  )
    ;
      };

export default IndustrySolutionsSection;
