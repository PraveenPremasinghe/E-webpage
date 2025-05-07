import { WeOfferCard } from "@/components/weOffer/weOfferData";
import React from "react";

export interface servicesCard {
  title: string;
  href: string;
  content: string;
  icon?: React.ReactNode; // Changed from image to icon
  className?: string;
  iconBgColor?: string;
}

// Minimalist outline SVG Icons as React Components
const StrategyIcon = () => (
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
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    />
  </svg>
);

const SoftwareIcon = () => (
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
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const AccelerationIcon = () => (
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
);

const ErpIcon = () => (
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
      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
    />
  </svg>
);

const ConsultingIcon = () => (
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
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

export const servicesData: servicesCard[] = [
  {
    title: "Technology & Product Strategy",
    content:
      "We help founders and enterprises define technical vision, validate ideas, and architect scalable digital systems — acting as your trusted product and tech partner.",
    icon: <StrategyIcon />,
    href: "/services/strategy",
    iconBgColor: "bg-purple-100 text-purple-600",
    className: " ",
  },
  {
    title: "Custom Software Development",
    content:
      "End-to-end design, development, QA, and deployment for SaaS platforms, mobile apps, internal tools, and APIs.",
    icon: <SoftwareIcon />,
    href: "/services/software-development",
    iconBgColor: "bg-blue-100 text-blue-600",
    className: " ",
  },
  {
    title: "Digital Product Acceleration",
    content:
      "From discovery and prototyping to market launch — we help you build faster with confidence.",
    icon: <AccelerationIcon />,
    href: "/services/product-acceleration",
    iconBgColor: "bg-indigo-100 text-indigo-600",
    className: " ",
  },
  {
    title: "ERP Implementation & Customization",
    content:
      "Tailored deployment of Actogo ERP to your business needs, with rapid rollout and secure scaling.",
    icon: <ErpIcon />,
    href: "/services/erp",
    iconBgColor: "bg-amber-100 text-amber-600",
    className: " ",
  },
  {
    title: "IT & Integration Consulting",
    content:
      "Expert support on cloud, security, integrations, DevOps, and enterprise architecture.",
    icon: <ConsultingIcon />,
    href: "/services/it-consulting",
    iconBgColor: "bg-green-100 text-green-600",
    className: " ",
  },
];
