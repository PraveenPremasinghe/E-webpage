import { WeOfferCard } from "@/components/weOffer/weOfferData";

export interface servicesCard {
  title: string;
  href: string;
  content: string;
  image?: string;
  className?: string;
  iconBgColor?: string;
}

export const servicesData: servicesCard[] = [
  {
    title: "Technology & Product Strategy",
    content:
      "We help founders and enterprises define technical vision, validate ideas, and architect scalable digital systems — acting as your trusted product and tech partner.",
    image: "/images/Svg/11.svg",
    href: "/services/strategy",
    iconBgColor: "bg-[#f3e8ff]",
    className: " ",
  },
  {
    title: "Custom Software Development",
    content:
      "End-to-end design, development, QA, and deployment for SaaS platforms, mobile apps, internal tools, and APIs.",
    image: "/services/software.jpg",
    href: "/services/software-development",
    iconBgColor: "bg-[#dbeafe]",
    className: " ",
  },
  {
    title: "Digital Product Acceleration",
    content:
      "From discovery and prototyping to market launch — we help you build faster with confidence.",
    image: "/services/acceleration.jpg",
    href: "/services/product-acceleration",
    iconBgColor: "bg-[#1E1440]",
    className: " ",
  },
  {
    title: "ERP Implementation & Customization",
    content:
      "Tailored deployment of Actogo ERP to your business needs, with rapid rollout and secure scaling.",
    image: "/services/erp.jpg",
    href: "/services/erp",
    iconBgColor: "bg-[#fef9c3]",
    className: " ",
  },
  {
    title: "IT & Integration Consulting",
    content:
      "Expert support on cloud, security, integrations, DevOps, and enterprise architecture.",
    image: "/services/it-consulting.jpg",
    href: "/services/it-consulting",
    iconBgColor: "bg-[#dcfce7]",
    className: " ",
  },
];
