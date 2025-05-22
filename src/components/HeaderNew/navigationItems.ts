export interface Tab {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface CategoryItem {
  name: string;
  subtitle: string;
  icon: string;
  tabs?: Tab[];
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
            name: "Consulting",
            subtitle: "Optimize your business processes with expert advice.",
            icon: "Consulting",
            tabs: [
              {
                title: "Business Analysis",
                subtitle: "Evaluate your workflows & spot improvements.",
                description:
                  "We assess your current state to propose optimized future strategies.",
                features: [
                  "Gap analysis",
                  "SWOT matrix",
                  "Business requirement docs",
                  "Stakeholder interviews",
                ],
                image: "consulting_business.jpg",
              },
              {
                title: "Digital Transformation",
                subtitle: "Modernize legacy systems & boost productivity.",
                description:
                  "Bring your business to the digital age with agile & scalable solutions.",
                features: [
                  "Legacy app migration",
                  "AI/ML integrations",
                  "Cloud solutions",
                  "Agile coaching",
                ],
                image: "consulting_digital.jpg",
              },
            ],
          },
          {
            name: "Implementation",
            subtitle: "Deploy systems with zero downtime.",
            icon: "Implementation",
            tabs: [
              {
                title: "ERP Setup",
                subtitle: "Tailor systems to fit your workflow.",
                description:
                  "Hands-on configuration, testing, and user onboarding for success.",
                features: [
                  "Data import & cleansing",
                  "Custom workflow setup",
                  "UAT & go-live",
                  "24/7 support",
                ],
                image: "implementation_erp.jpg",
              },
              {
                title: "CRM Onboarding",
                subtitle: "Engage leads and boost retention.",
                description:
                  "Integrate CRMs that align marketing, sales, and customer service.",
                features: [
                  "Lead funnel setup",
                  "Email campaign integration",
                  "Support automation",
                  "Customer portal creation",
                ],
                image: "implementation_crm.jpg",
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
    component: "WhoWeEmpowerSection",
  },
  {
    id: "about-company",
    title: "About Company",
    submenu: true,
    component: "AboutCompanySection",
  },
  {
    id: "careers",
    title: "Careers",
    submenu: true,
    component: "CareersSection",
  },
  {
    id: "acctogo",
    title: "AcctoGo",
    submenu: false,
    link: "/acctogo",
  },
];

