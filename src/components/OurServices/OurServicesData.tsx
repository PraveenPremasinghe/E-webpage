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
    image: "https://images.ctfassets.net/w8fc6tgspyjz/3Wp4kVC24lqBVENLSx0jaP/26f0b90ec2844eca3ec80275190da212/self-serve-onboarding.png?fm=avif&q=50",
    href: "/services/strategy",
    iconBgColor: "bg-[#0F6FF3]",
    className: " ",

  },
  {

    title: "Custom Software Development",
    content:
      "End-to-end design, development, QA, and deployment for SaaS platforms, mobile apps, internal tools, and APIs.",
    image: "/services/software.jpg",
    href: "/services/software-development",
    iconBgColor: "bg-[#733AEB]",
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
    iconBgColor: "bg-[#E24861]",
    className: " ",

  },
  {

    title: "IT & Integration Consulting",
    content:
      "Expert support on cloud, security, integrations, DevOps, and enterprise architecture.",
    image: "/services/it-consulting.jpg",
    href: "/services/it-consulting",
    iconBgColor: "bg-[#069053]",
    className: " ",

  },
];
