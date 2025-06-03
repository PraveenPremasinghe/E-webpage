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
  caseStudy?: CaseStudy; // changes this
  id? : string;
  image?: string;
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
            icon: "Building", // from lucide-react
            tabs: [
              {
                id: "erp_inventory_management",
                title: "Saltside Technologies & Ikman.lk",
                subtitle: "ERP solution for classifieds and marketplace management.",
                description: "Integrated ERP tools built to manage operations efficiently for Saltside Technologies.",
                features: ["Inventory management", "Vendor tracking", "Workflow automation", "Real-time reporting"],
                image: "images/OurJourneyTimeline/ikman.webp",
              },
              {
                id: "erp_business_register",
                title: "National Business Register & Start.Biz",
                subtitle: "Digital business registration and compliance management.",
                description: "Complete ERP suite for government-driven business registration services.",
                features: ["Registration workflow", "User management", "Document handling", "Audit trails"],
                image: "images/OurJourneyTimeline/nbr.png",
              },


            ],
          },
          {
            name: "Healthcare",
            subtitle: "Empower hospitals with integrated solutions.",
            icon: "Heart", // Lucide icon for healthcare
            tabs: [
              {
                id: "healthcare_dentalpro",
                title: "DentalPro",
                subtitle: "Dental clinic management system.",
                description: "Appointment, patient records, and billing for dental practices.",
                features: ["Dental charting", "EHR", "Billing", "Patient history"],
                image: "images/OurJourneyTimeline/dentalpro.png",
              },

            ],
          },
          {
            name: "Food",
            subtitle: "Modern tech for food and retail businesses.",
            icon: "Coffee", // Lucide icon for food & beverage
            tabs: [
              {
                id: "food_gonuts_with_donuts",
                title: "Gonuts with Donuts",
                subtitle: "POS and kitchen management for retail chains.",
                description: "End-to-end food outlet management from kitchen to cashier.",
                features: ["POS integration", "Order management", "Customer loyalty", "Inventory sync"],
                image: "images/megaMenu/erp_operations.webp",
              },
              {
                id: "food_pak_supermarket",
                title: "PAK Supermarket",
                subtitle: "Supermarket ERP and inventory automation.",
                description: "Retail-focused ERP solution for stock, billing, and CRM.",
                features: ["Multi-location stock", "Billing", "Offers & promotions", "Customer analytics"],
                image: "images/clientLogo/pak.png",
              },
            ],
          },
          {
            name: "Government",
            subtitle: "Digitization for public sector operations.",
            icon: "Landmark", // Lucide icon for government
            tabs: [
              {
                id: "government_slsCa",
                title: "SlsCa",
                subtitle: "Smart compliance and automation for authorities.",
                description: "Public sector ERP built for compliance, document flow, and approvals.",
                features: ["Document tracking", "eForms", "Role-based access", "Secure logs"],
                image: "images/clientLogo/solor.png",
              },
            ],
          },
          {
            name: "Construction",
            subtitle: "Project management for construction businesses.",
            icon: "BrickWall",
            tabs: [
              {
                id: "construction_pasg",
                title: "Pasg",
                subtitle: "Site and material tracking for contractors.",
                description: "Manage construction workflows with procurement and project modules.",
                features: ["Site progress", "Material requests", "Contractor logs", "Timesheet integration"],
                image: "images/clientLogo/pasg.png",
              },
            ],
          },
          {
            name: "Automotive",
            subtitle: "Digitally transform vehicle-related services.",
            icon: "Car", // Lucide icon for automotive
            tabs: [
              {
                id: "automotive_amvms",
                title: "AMVMS",
                subtitle: "Automated Motor Vehicle Management System.",
                description: "Complete solution for managing vehicle registrations and inspections.",
                features: ["Vehicle database", "Inspection records", "License renewals", "Reporting"],
                image: "images/megaMenu/erp_operations.webp",
              },
            ],
          },
          {
            name: "Accounting",
            subtitle: "HR and finance operations in one place.",
            icon: "FileText", // Lucide icon for accounting/HR
            tabs: [
              {
                id: "accounting_hrm",
                title: "HRM",
                subtitle: "Human Resource and Payroll Management.",
                description: "Streamlined employee data, payroll processing, and leave tracking.",
                features: ["Payslips", "Leave approvals", "Attendance", "Employee portal"],
                image: "images/megaMenu/erp_operations.webp",
              },
            ],
          },
          {
            name: "Education",
            subtitle: "Modern learning and management systems.",
            icon: "BookOpen", // Lucide icon for education
            tabs: [
              {
                id: "education_ca",
                title: "CA",
                subtitle: "Student & course management for educational institutes.",
                description: "ERP tailored for course registration, grading, and communication.",
                features: ["Course catalogs", "Timetable", "Exam results", "Notifications"],
                image: "images/clientLogo/casrilnka.jpg",
              },
            ],
          },
          {
            name: "Beauty",
            subtitle: "Salon and spa management software.",
            icon: "Shirt", // Lucide icon for beauty/salon
            tabs: [
              {
                id: "beauty_beautech_salon_spa",
                title: "Beautech Salon & Spa Management System",
                subtitle: "Appointment and staff management for beauty businesses.",
                description: "Boost customer experience and simplify your spa/salon operations.",
                features: ["Online bookings", "Stylist schedules", "Service tracking", "Customer profiles"],
                image: "images/clientLogo/beatech-feature.webp",
              },
            ],
          },
        ],
      },
    ],
  }

  ,
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
                title: "Saltside Technologies",
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
                image: "images/megaMenu/erp_operations.webp",
              },

            ],
          },
          {
            name: "Sales & Engagement",
            subtitle:
              "A platform that helps relationships grow—with structure, consistency, and space to scale.",
            icon: "Percent",
            tabs: [
              {
                id: "sales_and_engagement_customer_lifecycle",
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
                image: "images/megaMenu/Sales-Engagement.webp",
              },
            ],
          },
          {
            name: "SaaS Solutions",
            subtitle:
              "Purpose-built platforms, developed as friendships—not just products.",
            icon: "Target",
            tabs: [
              {
                id: "saas_solutions_co_created_platforms",
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
                image: "images/megaMenu/SaaS-Solutions.webp",
              },
            ],
          },
          {
            name: "Smart Docs & Data",
            subtitle:
              "Take the manual out of your documents, and put control back in.",
            icon: "Database",
            tabs: [
              {
                id: "smart_docs_and_data_document_automation",
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
                image: "images/megaMenu/smart.avif",
              },
            ],
          },
          {
            name: "eGovernance & B2B",
            subtitle:
              "Structure, transparency, and speed—for decisions that matter.",
            icon: "Landmark",
            tabs: [
              {
                id: "egovernance_and_b2b_trusted_processes",
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
                image: "images/megaMenu/gov.jpg",
              },
            ],
          },
          {
            name: "BIS Platform",
            subtitle:
              "The backbone of everything we build—and everything you scale.",
            icon: "Webcam",
            tabs: [
              {
                id: "bis_platform_foundation_for_growth",
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
                image: "images/megaMenu/bis.jpg",
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
            image: "images/megaMenu/startup.jpg",
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

              ],
            },
          },
          {
            id: "who_we_empower_franchise_networks",
            name: "Franchise Networks",
            subtitle:
              "Centralized solutions to manage and grow franchise ecosystems.",
            icon: "Network",
            image:"images/megaMenu/Franchise.jpg",
            points: [
              { text: "Unified Dashboard Systems", icon: "LayoutDashboard" },
              { text: "Automated Reporting & Analytics", icon: "BarChart3" },
              { text: "Multi-location Management", icon: "MapPin" },
              { text: "Custom Role-based Access", icon: "ShieldCheck" },
            ],
            caseStudy: {
              title: "FranchiseSync Platform",
              description:
                "We developed a scalable system to unify operations across 50+ franchise locations.",
              highlights: [
                "Centralized operations portal",
                "Franchisee training modules",
                "Integrated POS & inventory tools",
              ],
              stats: [
                { label: "Operational Efficiency", value: "70%↑" },
                { label: "Support Tickets Reduced", value: "50%" },

              ],
            },
          },
          {
            id: "who_we_empower_tech_investors",
            name: "Tech Investors",
            subtitle:
              "Insights and tools to evaluate and scale tech portfolios.",
            image:"images/megaMenu/people-1979261_1280.jpg",
            icon: "DollarSign",
            points: [
              { text: "Due Diligence Platforms", icon: "ClipboardCheck" },
              { text: "Tech Valuation Dashboards", icon: "TrendingUp" },
              { text: "Post-Investment Monitoring", icon: "MonitorCheck" },
              { text: "Custom Reporting Tools", icon: "FileBarChart" },
            ],
            caseStudy: {
              title: "InvestorView Analytics Suite",
              description:
                "Enabled real-time portfolio tracking and risk visibility for a leading venture capital firm.",
              highlights: [
                "Custom investor dashboard",
                "Data-driven risk analysis",
                "Startup milestone tracking",
              ],
              stats: [
                { label: "Portfolio ROI Visibility", value: "100%" },
                { label: "Decision Speed Improved", value: "40%" },

              ],
            },
          },
          {
            id: "who_we_empower_strategic_outsourcing",
            name: "Strategic Outsourcing",
            subtitle:
              "Smart outsourcing strategies for cost-effective execution.",
            image:"images/megaMenu/pawn-2430046_1280.jpg",
            icon: "Briefcase",
            points: [
              { text: "Dedicated Offshore Teams", icon: "Users" },
              { text: "Process Automation", icon: "Settings2" },
              { text: "Agile Project Management", icon: "Activity" },
              { text: "Timezone-aligned Support", icon: "Clock" },
            ],
            caseStudy: {
              title: "OpsBridge Delivery Network",
              description:
                "We helped a Fortune 500 company reduce costs by streamlining development and support through offshore teams.",
              highlights: [
                "Nearshore & offshore team integration",
                "Agile sprints with local PM oversight",
                "High SLA compliance & quality controls",
              ],
              stats: [
                { label: "Cost Reduction", value: "45%" },
                { label: "Time to Market", value: "30% faster" },

              ],
            },
          },
          {
            id: "who_we_empower_tech_partnerships",
            name: "Tech Partnerships",
            subtitle:
              "Collaborate on innovation with integrated tech ecosystems.",
            image:"images/megaMenu/team-spirit-2447163_1280.jpg",
            icon: "Link",
            points: [
              { text: "API-first Integration", icon: "Plug" },
              { text: "Joint GTM Strategy", icon: "Target" },
              { text: "Custom Product Co-builds", icon: "Box" },
              { text: "Innovation Sprints", icon: "Zap" },
            ],
            caseStudy: {
              title: "FusionTech Alliance Launch",
              description:
                "Together with FusionTech, we co-developed a data analytics module now used across 3 continents.",
              highlights: [
                "Joint R&D team setup",
                "Integrated deployment pipelines",
                "Global rollout support",
              ],
              stats: [
                { label: "Time to MVP", value: "8 weeks" },
                { label: "Shared Clients Onboarded", value: "15+" },
              ],
            },
          },
        ],
      },
    ],
    component: "WhoWeEmpowerSection",
  }
  ,
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
