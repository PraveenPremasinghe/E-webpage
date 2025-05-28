export interface Tab {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  id?: string;
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
  caseStudy?: CaseStudy;
  id? : string;
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
                id: "erp_inventory_management",
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
                id: "erp_procurement",
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
                id: "healthcare_patient_management",
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
                id: "healthcare_billing_system",
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
                id: "erp_platform_operational_backbone",
                title: "Operational Backbone",
                subtitle:
                  "Manage inventory, procurement, and fulfilment with flexibility",
                description:
                  "Built with the basics done right and the architecture ready to expand...",
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
                id: "sales_and_engagement_customer_lifecycle",
                title: "Customer Lifecycle",
                subtitle: "From lead generation to long-term retention",
                description: "From lead generation to long-term retention...",
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
                id: "saas_solutions_co_created_platforms",
                title: "Co-Created Platforms",
                subtitle: "Better ways of working through collaboration",
                description:
                  "We don't just deliver tools—we co-create better ways of working...",
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
                id: "smart_docs_and_data_document_automation",
                title: "Document Automation",
                subtitle: "Move faster, stay compliant, and focus on decisions",
                description:
                  "Automate document generation, approvals, signatures, and storage...",
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
                id: "egovernance_and_b2b_trusted_processes",
                title: "Trusted Processes",
                subtitle: "Run operations with built-in confidence",
                description:
                  "Whether it's shareholder voting or internal tendering...",
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
                id: "bis_platform_foundation_for_growth",
                title: "Foundation for Growth",
                subtitle: "Alignment, automation, and adaptability",
                description: "With our core business information system...",
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
            id: "who_we_empower_startup_founders",
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
            id: "who_we_empower_franchise_networks",
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
            id: "who_we_empower_tech_investors",
            name: "Tech Investors",
            subtitle:
              "Insights and tools to evaluate and scale tech portfolios.",
            icon: "DollarSign",
          },
          {
            id: "who_we_empower_strategic_outsourcing",
            name: "Strategic Outsourcing",
            subtitle:
              "Smart outsourcing strategies for cost-effective execution.",
            icon: "Briefcase",
          },
          {
            id: "who_we_empower_tech_partnerships",
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
