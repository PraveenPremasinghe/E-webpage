export interface Tab {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface CategoryPoints {
  text: string;
  icon: string;
}

interface CaseStudy {
  title: string;
  description: string;
  highlights: string[];
  stats: { label: string; value: string }[];
}

export interface CategoryItem {
  name: string;
  subtitle: string;
  icon: string;
  tabs?: Tab[];
  points?: CategoryPoints[];
  caseStudy?: CaseStudy; // changes this
}

export interface Category {
  title: string;
  category: CategoryItem[];
}

export interface NavigationItem {
  id: string;
  title: string;
  submenu: boolean;
  link?: string;
  categories?: Category[];
  component?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    title: "Home",
    submenu: false,
    link: "/",
  },
  {
    id: "solutions-by-industry",
    title: "By Industry",
    submenu: true,
    categories: [
      {
        title: "Industries",
        category: [
          {
            name: "ERP",
            subtitle: "Streamline your supply chain and operations.",
            icon: "Building",
            tabs: [
              {
                title: "Inventory Management",
                subtitle: "Real-time control over stock and availability.",
                description:
                  "Ideal for businesses needing accurate stock tracking and alerts.",
                features: [
                  "Stock visibility",
                  "Reorder levels",
                  "Batch tracking",
                  "Warehouse mapping",
                ],
                image: "erp_inventory.jpg",
              },
              {
                title: "Procurement",
                subtitle: "Simplify purchase processes with automation.",
                description:
                  "Ensure compliance, reduce costs, and manage vendors effectively.",
                features: [
                  "Purchase order automation",
                  "Vendor management",
                  "Approval workflows",
                  "Budget control",
                ],
                image: "erp_procurement.jpg",
              },
            ],
          },
          {
            name: "Healthcare",
            subtitle: "Empower hospitals with integrated solutions.",
            icon: "Hospital",
            tabs: [
              {
                title: "Patient Management",
                subtitle: "Centralized patient records and appointments.",
                description:
                  "EHR integration, appointment scheduling, and follow-ups made easy.",
                features: [
                  "EHR integration",
                  "Appointment booking",
                  "Patient history tracking",
                  "Telemedicine support",
                ],
                image: "healthcare_patient.jpg",
              },
              {
                title: "Billing System",
                subtitle: "Streamline invoicing and insurance claims.",
                description:
                  "Automated medical billing with insurance support and transparency.",
                features: [
                  "Medical coding",
                  "Insurance claim tracking",
                  "Invoice generation",
                  "Payment gateway integration",
                ],
                image: "healthcare_billing.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "what-we-offer",
    title: "What We Offer",
    submenu: true,
    categories: [
      {
        title: "Services",
        category: [
          {
            name: "ERP Platform",
            subtitle:
              "A platform built to streamline your supply chain—structured where it matters, flexible where it counts.",
            icon: "Heart",
            tabs: [
              {
                title: "Operational Backbone",
                subtitle:
                  "Manage inventory, procurement, and fulfilment with flexibility",
                description:
                  "Built with the basics done right and the architecture ready to expand, this ERP gives you the operational backbone to manage inventory, procurement, and fulfilment—while staying ready for whatever's next. Because in business, the unplanned isn't a surprise—it's expected. And planning for it is what keeps you in control.",
                features: [
                  "Inventory management",
                  "Procurement automation",
                  "Order fulfilment tracking",
                  "Scalable architecture",
                  "Real-time analytics",
                ],
                image: "erp_operations.jpg",
              },
            ],
          },
          {
            name: "Sales & Engagement",
            subtitle:
              "A platform that helps relationships grow—with structure, consistency, and space to scale.",
            icon: "Sales",
            tabs: [
              {
                title: "Customer Lifecycle",
                subtitle: "From lead generation to long-term retention",
                description:
                  "From lead generation to long-term retention, it brings every customer interaction into one clear, connected flow. It's built to help you stay consistent in how you engage, reward, and communicate—because the way you retain customers shapes how your brand is remembered. And when retention becomes a system, brand growth becomes a habit.",
                features: [
                  "Lead management",
                  "Customer segmentation",
                  "Retention automation",
                  "Loyalty programs",
                  "Unified communication",
                ],
                image: "sales_engagement.jpg",
              },
            ],
          },
          {
            name: "SaaS Solutions",
            subtitle:
              "Purpose-built platforms, developed as friendships—not just products.",
            icon: "SaaS",
            tabs: [
              {
                title: "Co-Created Platforms",
                subtitle: "Better ways of working through collaboration",
                description:
                  "We don't just deliver tools—we co-create better ways of working. Every subscription is a step toward optimizing the day-to-day, reducing waste, and strengthening the core of your industry. These platforms evolve with your input, adapt without disruption, and move beyond features toward something lasting: progress you can measure, and impact your customers will feel.",
                features: [
                  "Custom workflow design",
                  "Continuous improvement",
                  "Waste reduction",
                  "Impact measurement",
                  "Customer feedback loops",
                ],
                image: "saas_collaboration.jpg",
              },
            ],
          },
          {
            name: "Smart Docs & Data",
            subtitle:
              "Take the manual out of your documents, and put control back in.",
            icon: "Documents",
            tabs: [
              {
                title: "Document Automation",
                subtitle: "Move faster, stay compliant, and focus on decisions",
                description:
                  "Automate document generation, approvals, signatures, and storage—so you can move faster, stay compliant, and focus on decisions, not file formats.",
                features: [
                  "Template-based generation",
                  "Approval workflows",
                  "Digital signatures",
                  "Secure storage",
                  "Version control",
                ],
                image: "smart_docs.jpg",
              },
            ],
          },
          {
            name: "eGovernance & B2B",
            subtitle:
              "Structure, transparency, and speed—for decisions that matter.",
            icon: "Governance",
            tabs: [
              {
                title: "Trusted Processes",
                subtitle: "Run operations with built-in confidence",
                description:
                  "Whether it's shareholder voting or internal tendering, our platforms help you run processes people can trust—with audit trails, control, and confidence built in.",
                features: [
                  "Secure voting systems",
                  "Transparent tendering",
                  "Audit trails",
                  "Role-based access",
                  "Compliance tracking",
                ],
                image: "egovernance.jpg",
              },
            ],
          },
          {
            name: "BIS Platform",
            subtitle:
              "The backbone of everything we build—and everything you scale.",
            icon: "Platform",
            tabs: [
              {
                title: "Foundation for Growth",
                subtitle: "Alignment, automation, and adaptability",
                description:
                  "With our core business information system, you don't just get tools—you get alignment, automation, and a foundation that adapts as you grow.",
                features: [
                  "Centralized data hub",
                  "Process automation",
                  "Scalable architecture",
                  "Integration ready",
                  "Real-time insights",
                ],
                image: "bis_platform.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "who-we-empower",
    title: "Who We Empower",
    submenu: true,
    categories: [
      {
        title: "Who We Empower",
        category: [
          {
            name: "Startup Founders",
            subtitle:
              "Startup founders are visionary entrepreneurs who identify problems, develop innovative solutions, and build early-stage companies from the ground up, often navigating risk, uncertainty, and rapid growth",
            icon: "Rocket",
            points: [
              { text: "MVP Development & Scaling", icon: "Code" },
              { text: "Technical Co-founding", icon: "Users" },
              { text: "Investor-ready Solutions", icon: "LineChart" },
              { text: "Growth-focused Architecture", icon: "CheckCircle" },
            ],
            caseStudy: {
              title: "TechLaunch MVP Scaling",
              description:
                "We helped TechLaunch scale their MVP to meet growing demand while securing their next funding round.",
              highlights: [
                "12-week implementation timeline",
                "Architecture redesign & optimization",
                "DevOps implementation & automation",
              ],
              stats: [
                { label: "User Capacity", value: "4x" },
                { label: "Funding Secured", value: "$2M" },
                { label: "Less Tech Debt", value: "60%" },
              ],
            },
          },
          {
            name: "Franchise Networks",
            subtitle:
              "Centralized solutions to manage and grow franchise ecosystems.",
            icon: "Network",
            points: [
              { text: "MVP Development & Scaling", icon: "Code" },
              { text: "Technical Co-founding", icon: "Users" },
              { text: "Investor-ready Solutions", icon: "LineChart" },
              { text: "Growth-focused Architecture", icon: "CheckCircle" },
            ],
            caseStudy: {
              title: "TechLaunch MVP Scaling",
              description:
                "We helped TechLaunch scale their MVP to meet growing demand while securing their next funding round.",
              highlights: [
                "12-week implementation timeline",
                "Architecture redesign & optimization",
                "DevOps implementation & automation",
              ],
              stats: [
                { label: "User Capacity", value: "4x" },
                { label: "Funding Secured", value: "$2M" },
                { label: "Less Tech Debt", value: "60%" },
              ],
            },
          },
          {
            name: "Tech Investors",
            subtitle:
              "Insights and tools to evaluate and scale tech portfolios.",
            icon: "DollarSign",
          },
          {
            name: "Strategic Outsourcing",
            subtitle:
              "Smart outsourcing strategies for cost-effective execution.",
            icon: "Briefcase",
          },
          {
            name: "Tech Partnerships",
            subtitle:
              "Collaborate on innovation with integrated tech ecosystems.",
            icon: "Link",
          },
        ],
      },
    ],
    component: "WhoWeEmpowerSection",
  },
  {
    id: "about-company",
    title: "About Company",
    submenu: true,
    categories: [],
    component: "AboutCompanySection",
  },
  {
    id: "careers",
    title: "Careers",
    submenu: true,
    categories: [],
    component: "CareersSection",
  },
  {
    id: "Actogo",
    title: "Actogo",
    submenu: false,
    link: "/actogo",
  },
];
