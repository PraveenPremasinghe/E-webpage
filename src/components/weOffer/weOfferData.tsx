
export interface WeOfferCard {
  title: string;
  href: string;
  content: string;
  icon?: string;
  className?: string;
  iconBgColor?: string;
}

export const weOfferData: WeOfferCard[] = [
  {
    title: "Actogo ERP Platform",
    href: "",
    content: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
    icon: "/images/products/accto-img.png",
    className: " ",
    iconBgColor: "bg-blue-700",

  },
  {
    title: "Industry-Focused Digital Solutions",
    href: "",
    content: "A modular, AI-driven ERP system designed for adaptability across industries. From CRM and inventory to budgeting and project management – scalable, secure, and built to grow with you.",
    icon: "/images/products/Industry-img.png",
    className: " ",
    iconBgColor: "bg-purple-700",
  },
  {
    title: "Strategic Technology Services",
    href: "",
    content: "End-to-end product development, technology strategy, and digital transformation — built for startups, SMEs, and enterprise teams.",
    icon: "/images/products/Strategic-img.png",
    className: " ",
    iconBgColor: "bg-red-600",
  }
];
