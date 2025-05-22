"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Code, Users, LineChart, Rocket, Check } from "lucide-react";
import { IconMap } from "@tabler/icons-react";
import { CategoryItem } from "@/components/HeaderNew/navigationItems";



export default function WhoWeEmpowerSection({ itemData  }: { itemData : CategoryItem }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!itemData ) return null;


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {itemData.name}
          </h1>
          <p className="mt-1 text-lg text-gray-600">{itemData.name}</p>
          <p className="mt-6 text-gray-700">{itemData.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <img
            src={  "/placeholder.jpg"}
            alt={itemData.name}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-4 mt-10">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Key Features</h2>
        {itemData.points?.map((point, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
              <Check className="h-4 w-4 text-pink-600" />
            </div>
            <span className="text-gray-700">{point.text}</span>
          </div>
        ))}
      </section>

      {/* Case Study + CTA */}
      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        {/* Case Study Card */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-600 to-pink-800 p-6 text-white">
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="md:w-2/3">
                  <h3 className="mb-2 text-lg font-bold">
                    {itemData.caseStudy?.title}
                  </h3>
                  <p className="mb-4 text-sm text-white">
                    {itemData.caseStudy?.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    {itemData.caseStudy?.highlights?.map((highlight, idh) => (
                      <div key={idh} className="flex items-start space-x-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/70">
                          <Check className="h-4 w-4 text-pink-900" />
                        </div>
                        <span className="text-white">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/3">
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:grid-rows-3">
                    {itemData.caseStudy?.stats?.map((stat, ids) => (
                      <div
                        key={ids}
                        className="rounded-lg bg-white p-3 text-center backdrop-blur-sm"
                      >
                        <div className="text-3xl font-bold text-pink-800">
                          {stat.value}
                        </div>
                        <div className="text-xs text-pink-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex-shrink-0 lg:w-80 xl:w-96">
          <div className="flex flex-col justify-center rounded-lg border border-gray-200 bg-pink-100 p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 text-lg font-bold">
              Ready to transform your business?
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Let&apos;s discuss how Edhirya can help you achieve your technology and
              business goals with our client-first approach.
            </p>
            <button className="rounded-full bg-primary px-6 py-2 text-sm text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
