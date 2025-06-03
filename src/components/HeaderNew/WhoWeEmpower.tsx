"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Users,
  LineChart,
  Rocket,
  Check,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Layers,
  Cloud,
  BarChart,
  Shield,
  Smartphone,
  Globe,
  Palette,
  Brain,
  Link as LinkIcon,
  Cpu,
  ClipboardList,
  Server,
  Store,
  Landmark,
  Book,
  Handshake,
  FileText,
  BookOpen,
  Calendar,
  Briefcase,
  Coffee,
  Gift,
  Award,
  Package,
} from "lucide-react";

const IconMap: Record<string, any> = {
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Layers,
  Cloud,
  BarChart,
  Shield,
  Code,
  Smartphone,
  Globe,
  Palette,
  Brain,
  Link: LinkIcon,
  Cpu,
  Users,
  ClipboardList,
  Server,
  Rocket,
  Store,
  Landmark,
  Book,
  Handshake,
  FileText,
  BookOpen,
  Calendar,
  Briefcase,
  Coffee,
  Gift,
  Award,
  Package,
  TrendingUp,
};
import { CategoryItem } from "@/components/HeaderNew/navigationItems";
import Link from "next/link";

export default function WhoWeEmpowerSection({
  itemData,
  onNavigate,
}: {
  itemData: CategoryItem;
  onNavigate: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  if (!itemData) return null;
  return (
    <div className="flex flex-col">
  {/* Hero Section - Improved layout */}
      <section className="grid grid-cols-1  lg:grid-cols-2   ">
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-3xl">
          {itemData.name}
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 sm:text-lg">{itemData.name}</p>
      </div>
      <div className="prose prose-lg text-gray-700">
        <p>{itemData.subtitle}</p>
      </div>
    </div>
    <div className="relative aspect-video overflow-hidden  ">
      <img
        src={`/${itemData.image}`}
        alt={itemData.name}
        className="absolute h-full w-full object-cover"
      />
    </div>

        {/* Features Section - Enhanced card style */}
        <section className="space-y-6 ">
    <h2 className="mb-6 mt-4 text-2xl font-bold text-gray-900">Key Features</h2>
    <div className="space-y-4">
      {itemData.points?.map((point, idx) => (
        <div
          key={idx}
          className="flex items-start space-x-4   transition-all"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
            <Check className="h-5 w-5 text-pink-600" />
          </div>
          <div>
            <span className="text-gray-700">{point.text}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
  </section>



      {/* Case Study + CTA - Improved side-by-side layout */}
      <div className="grid gap-8 lg:grid-cols-3 mt-4">
    {/* Case Study Card - Full width */}
        <div className="lg:col-span-2">
      <div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-600 to-pink-800 p-8 text-white shadow-xl">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="grid-pattern"
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
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-2/3">
              <h3 className="mb-4 text-2xl font-bold">
                {itemData.caseStudy?.title}
              </h3>
              <p className="mb-6 text-pink-100">
                {itemData.caseStudy?.description}
              </p>
              <div className="space-y-4">
                {itemData.caseStudy?.highlights?.map((highlight, idh) => (
                  <div key={idh} className="flex items-start space-x-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="flex-1">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/3">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                {itemData.caseStudy?.stats?.map((stat, ids) => (
                  <div
                    key={ids}
                    className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-pink-100">
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

        {/* CTA Card - Improved styling */}
        <div className="flex flex-col">
      <div
        className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div>
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Ready to transform your business?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Let&aposs discuss how we can help you achieve your technology and business goals.
          </p>
        </div>

        <div className="space-y-4">
          <button
            className="w-full rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-700">
            Schedule a Consultation
          </button>

          {itemData.id && (
            <Link
              href={{
                pathname: "/our-service",
                query: { id: itemData.id },
              }}
              onClick={onNavigate}
              className="flex items-center justify-center text-sm font-medium text-pink-600 hover:underline dark:text-pink-400"
            >
              Learn more about this service
              <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
