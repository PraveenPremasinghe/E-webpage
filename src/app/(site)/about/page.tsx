"use client";

import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { OurJourneyTimeline } from "@/components/OurJourney";



const AboutPage = () => {

  const [activeTab, setActiveTab] = useState("mission");

  return (
    <main>
      <Breadcrumb pageName="About Us " />


       <section
         id="about"
         className="pb-28 pt-20 dark:bg-dark-2"
       >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
             <div className="w-full px-4 lg:w-2/3">
              <div className="  lg:mb-0">
                <h2
                  className="mb-5 text-7xl font-medium   leading-tight dark:text-white  sm:leading-[1.2]">
               We Are
                  <span className="font-semibold text-primary"> #Edhirya IT</span>

                </h2>
                <p className="mb-10 text-base text-xl font-light leading-relaxed text-body-color dark:text-dark-6">
                  Founded in 2010, Edhirya IT has consistently positioned itself at the forefront of technological innovation, specialising in delivering top-tier IT solutions to bridge the gap between management and data. Our comprehensive software support and maintenance services empower businesses to view problems from new perspectives, enhancing managerial efficiency and decision-making. By focusing on quality, efficiency, and innovation, we transform challenges into opportunities, ensuring our clients thrive in a rapidly evolving digital landscapedeployment.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className=" ">
                <img
                  src="https://images.unsplash.com/photo-1594235045856-a6315f0c4083?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Actogo ERP"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>


          </div>
        </div>
      </div>




     </section>


          <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The foundation of everything we do at our company
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "mission"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Mission & Vision
          </button>
          <button
            onClick={() => setActiveTab("values")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "values"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Core Values
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
          {activeTab === "mission" && (
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  To deliver innovative, high-quality IT solutions to resolve
                  complex business issues by reducing the gap between data and
                  the management that enhance business performance and foster
                  long-term success for our clients.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  To be a global leader in technology solutions, driving
                  transformation and growth for businesses through cutting-edge
                  innovations, trustworth and exceptional service.
                </p>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Innovation",
                    description:
                      "Continuously pushing the boundaries of technology to create impactful solutions.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ),
                    color: "bg-purple-100 dark:bg-purple-900",
                    iconColor: "text-purple-600 dark:text-purple-400",
                  },
                  {
                    title: "Integrity",
                    description:
                      "Upholding the highest standards of ethics and transparency in all our endeavours.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    ),
                    color: "bg-blue-100 dark:bg-blue-900",
                    iconColor: "text-blue-600 dark:text-blue-400",
                  },
                  {
                    title: "Excellence",
                    description:
                      "Committing to superior quality and performance in every project.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ),
                    color: "bg-yellow-100 dark:bg-yellow-900",
                    iconColor: "text-yellow-600 dark:text-yellow-400",
                  },
                  {
                    title: "Collaboration",
                    description:
                      "Fostering strong partnerships and teamwork to achieve common goals.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    color: "bg-green-100 dark:bg-green-900",
                    iconColor: "text-green-600 dark:text-green-400",
                  },
                  {
                    title: "Customer-Centricity",
                    description:
                      "Prioritising the needs and success of our clients in every decision we make.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    ),
                    color: "bg-red-100 dark:bg-red-900",
                    iconColor: "text-red-600 dark:text-red-400",
                  },
                  {
                    title: "Continuous Improvement",
                    description:
                      "We strive to bridge the gap between data and management, providing insights and uncovering new business opportunities through ongoing enhancement.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    ),
                    color: "bg-indigo-100 dark:bg-indigo-900",
                    iconColor: "text-indigo-600 dark:text-indigo-400",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600"
                  >
                    <div
                      className={`${value.color} ${value.iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

<div>
  <OurJourneyTimeline/>
</div>

      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
