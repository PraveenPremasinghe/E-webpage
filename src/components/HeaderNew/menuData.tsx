export const navigationData = [
  {
    title: "Home",
    href: "/",
    type: "link" as const,
  },
  {
    title: "Solutions by Industry",
    href: "#",
    type: "dropdown" as const,
    submenu: [
      {
        title: "Healthcare Solutions",
        content: "Tailored digital solutions for healthcare providers and organizations.",
        image: "/industries/healthcare.jpg",
        href: "/solutions/healthcare",
        iconBgColor: "bg-[#dbeafe]",
      },
      {
        title: "Financial Services",
        content: "Innovative technology solutions for banking and financial institutions.",
        image: "/industries/finance.jpg",
        href: "/solutions/finance",
        iconBgColor: "bg-[#dcfce7]",
      },
      {
        title: "Retail & E-commerce",
        content: "Digital transformation solutions for modern retail businesses.",
        image: "/industries/retail.jpg",
        href: "/solutions/retail",
        iconBgColor: "bg-[#fef9c3]",
      },
      {
        title: "Manufacturing",
        content: "Industry 4.0 solutions for smart manufacturing operations.",
        image: "/industries/manufacturing.jpg",
        href: "/solutions/manufacturing",
        iconBgColor: "bg-[#fee2e2]",
      },
    ],
  },
  {
    title: "Products",
    href: "#",
    type: "dropdown" as const,
    submenu: [
      {
        title: "Actogo ERP",
        content: "Comprehensive enterprise resource planning solution for businesses.",
        image: "/products/erp.jpg",
        href: "/products/erp",
        iconBgColor: "bg-[#f3e8ff]",
      },
      {
        title: "Analytics Suite",
        content: "Powerful business intelligence and data visualization tools.",
        image: "/products/analytics.jpg",
        href: "/products/analytics",
        iconBgColor: "bg-[#e0f2fe]",
      },
      {
        title: "CRM Platform",
        content: "Customer relationship management for sales and marketing teams.",
        image: "/products/crm.jpg",
        href: "/products/crm",
        iconBgColor: "bg-[#ecfccb]",
      },
    ],
  },
  {
    title: "About Company",
    href: "/about",
    type: "link" as const,
  },
  {
    title: "Careers",
    href: "/careers",
    type: "link" as const,
  },
];
