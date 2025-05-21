"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Code, Users, LineChart } from "lucide-react"

export default function WhoWeEmpowerSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      {/* Startup Founders Section */}
      <div className="mb-10">
        <div className="mb-4 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold">Startup Founders</h3>
        </div>

        <p className="mb-4 text-gray-600">
          Brand-driven, client-first approach — best for positioning Edhirya as
          a transformation partner. Brand-driven, client-first approach — best
          for positioning Edhirya as a transformation partner. Brand-driven,
          client-first approach — best for positioning Edhirya as a
          transformation partner.
        </p>

        <div className="mb-6 space-y-4">
          <div className="flex items-start">
            <div className="mr-2 flex-shrink-0 text-gray-400">
              <Code className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-600">
              MVP Development & Scaling
            </span>
          </div>
          <div className="flex items-start">
            <div className="mr-2 flex-shrink-0 text-gray-400">
              <Users className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-600">Technical Co-founding</span>
          </div>
          <div className="flex items-start">
            <div className="mr-2 flex-shrink-0 text-gray-400">
              <LineChart className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-600">
              Investor-ready Solutions
            </span>
          </div>
          <div className="flex items-start">
            <div className="mr-2 flex-shrink-0 text-gray-400">
              <CheckCircle className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-600">
              Growth-focused Architecture
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {" "}
        {/* Stack on mobile, row on desktop */}
        {/* Left Card - Case Study */}
        <div className="flex-1">
          {" "}
          {/* Takes available space */}
          <div
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-black p-6 text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background pattern */}
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
                {/* Case Study Content */}
                <div className="md:w-1/2">
                  <h3 className="mb-2 text-lg font-bold">
                    TechLaunch MVP Scaling
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    We helped TechLaunch scale their MVP to meet growing demand
                    while securing their next funding round.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                      <span>12-week implementation timeline</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                      <span>Architecture redesign & optimization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                      <span>DevOps implementation & automation</span>
                    </div>
                  </div>
                </div>

                {/* Stats - Stacked vertically on all screens */}
                <div className="md:w-1/2">
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:grid-rows-3">
                    <motion.div
                      className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      animate={isHovered ? { y: [0, -5, 0] } : {}}
                      transition={{ duration: 1, delay: 0.1 }}
                    >
                      <div className="text-xl font-bold">4x</div>
                      <div className="text-xs text-gray-300">User Capacity</div>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      animate={isHovered ? { y: [0, -5, 0] } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <div className="text-xl font-bold">$2M</div>
                      <div className="text-xs text-gray-300">
                        Funding Secured
                      </div>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-white/10 p-3 text-center backdrop-blur-sm"
                      whileHover={{ y: -5 }}
                      animate={isHovered ? { y: [0, -5, 0] } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <div className="text-xl font-bold">60%</div>
                      <div className="text-xs text-gray-300">
                        Less Tech Debt
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right CTA - Full width on mobile, aligned with card on desktop */}
        <div className="flex-shrink-0 lg:w-80 xl:w-96">
          {" "}
          {/* Fixed width on desktop */}
          <div className="flex h-full flex-col justify-center rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-2 text-lg font-bold">
              Ready to transform your business?
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Let's discuss how Edhirya can help you achieve your technology and
              business goals with our client-first approach.
            </p>
            <button className="rounded-full bg-black px-6 py-2 text-sm text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
