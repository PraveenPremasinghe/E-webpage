"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Code, Users, LineChart, Rocket } from "lucide-react";
import { IconMap } from "@tabler/icons-react";
import { CategoryItem } from "@/components/HeaderNew/navigationItems";



export default function WhoWeEmpowerSection({ itemData  }: { itemData : CategoryItem }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!itemData ) return null;

  
  return (
    <div>
        <div className="mb-10">
          {/* Header */}
          <div className="mb-4 flex items-center">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">{itemData .name}</h3>
          </div>

          <p className="mb-4 text-gray-600">{itemData .subtitle}</p>

          {/* Points */}
          <div className="mb-6 space-y-4">
            {itemData.points?.map((point, idx) => (
              <div key={idx} className="flex items-start">
                <div className="mr-2 flex-shrink-0 text-gray-400">
                  <LineChart className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-600">{point.text}</span>
              </div>
            ))}
          </div>

          {/* Case Study Section */}
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <div
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-black p-6 text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
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
                    <div className="md:w-1/2">
                      <h3 className="mb-2 text-lg font-bold">
                        {itemData.caseStudy?.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-300">
                        {itemData.caseStudy?.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        {itemData.caseStudy?.highlights.map((highlight, idh) => (
                          <div
                            key={idh}
                            className="flex items-center text-green-400"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-1/2">
                      <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:grid-rows-3">
                        {itemData.caseStudy?.stats.map((stat, ids) => (
                          <motion.div
                            key={ids}
                            className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm"
                            whileHover={{ y: -5 }}
                            animate={isHovered ? { y: [0, -5, 0] } : {}}
                            transition={{
                              duration: 1,
                              delay: 0.1 * (ids + 1),
                            }}
                          >
                            <div className="text-xl font-bold">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-300">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex-shrink-0 lg:w-80 xl:w-96">
              <div className="flex h-full flex-col justify-center rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                <h3 className="mb-2 text-lg font-bold">
                  Ready to transform your business?
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  Let&#39;s discuss how Edhirya can help you achieve your technology
                  and business goals with our client-first approach.
                </p>
                <button className="rounded-full bg-black px-6 py-2 text-sm text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

