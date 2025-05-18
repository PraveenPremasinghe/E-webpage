// navigationItems.ts
export interface NavigationCategory {
  title: string;
  items: { name: string; description?: string; icon?: string }[];
}

export interface RightSidebar {
  title: string;
  brandName: { first: string; highlight: string };
  features: string[];
}

export interface NavigationItemBase {
  id: string;
  title: string;
  submenu: boolean;
  link?: string;
}

export interface NavigationItemWithSubmenu extends NavigationItemBase {
  submenu: true;
  categories: NavigationCategory[];
  sidebarContent: RightSidebar;
}

export interface NavigationItemWithoutSubmenu extends NavigationItemBase {
  submenu: false;
  link: string;
}

export type NavigationItem = NavigationItemWithSubmenu | NavigationItemWithoutSubmenu;

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
        items: [
          {
            name: "Enterprise",
            description: "Solutions for enterprise-scale organizations with complex needs.",
            icon: "Building"
          },
          {
            name: "Healthcare",
            description: "Specialized tools for healthcare providers and organizations.",
            icon: "Heart"
          },
          {
            name: "Education",
            description: "Learning management and educational support systems.",
            icon: "GraduationCap"
          },
          {
            name: "Finance",
            description: "Secure solutions for financial services and banking.",
            icon: "DollarSign"
          },
        ],
      },
      {
        title: "Solutions",
        items: [
          {
            name: "Digital Transformation",
            description: "Modernize your business with end-to-end digital solutions.",
            icon: "Layers"
          },
          {
            name: "Cloud Migration",
            description: "Seamlessly move your operations to cloud platforms.",
            icon: "Cloud"
          },
          {
            name: "Data Analytics",
            description: "Turn your data into actionable business insights.",
            icon: "BarChart"
          },
          {
            name: "Security Solutions",
            description: "Protect your business with enterprise-grade security.",
            icon: "Shield"
          },
        ],
      },
    ],
    sidebarContent: {
      title: "Powered by",
      brandName: { first: "Solution", highlight: "Hub" },
      features: [
        "Custom workflows",
        "Industry templates",
        "Role-based views",
        "Custom integrations",
        "Security compliance",
        "Advanced reporting",
      ],
    },
  },
  {
    id: "products",
    title: "Products",
    submenu: true,
    categories: [
      {
        title: "Services",
        items: [
          {
            name: "Custom Software Development",
            description: "Tailored software solutions to address your unique business challenges.",
            icon: "Code"
          },
          {
            name: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            icon: "Smartphone"
          },
          {
            name: "Web Development",
            description: "Responsive and scalable web applications with modern frameworks.",
            icon: "Globe"
          },
          {
            name: "UI/UX Design",
            description: "User-centered design that enhances user experience and satisfaction.",
            icon: "Palette"
          },
        ],
      },
      {
        title: "Technologies",
        items: [
          {
            name: "AI & Machine Learning",
            description: "Intelligent solutions powered by cutting-edge AI technologies.",
            icon: "Brain"
          },
          {
            name: "Blockchain",
            description: "Secure, decentralized applications and smart contracts.",
            icon: "Link"
          },
          {
            name: "IoT Solutions",
            description: "Connected device ecosystems for smarter operations.",
            icon: "Cpu"
          },
          {
            name: "Cloud Services",
            description: "Scalable cloud infrastructure and managed services.",
            icon: "Cloud"
          },
        ],
      },
    ],
    sidebarContent: {
      title: "Powered by",
      brandName: { first: "Technology", highlight: "Hub" },
      features: [
        "Advanced AI algorithms",
        "Secure blockchain",
        "IoT integration",
        "Cloud infrastructure",
        "DevOps automation",
        "Continuous delivery",
      ],
    },
  },
  {
    id: "who-we-empower",
    title: "Who We Empower",
    submenu: true,
    categories: [
      {
        title: "By Role",
        items: [
          {
            name: "Executives & Leaders",
            description: "Strategic technology solutions for organizational leadership.",
            icon: "Users"
          },
          {
            name: "Developers",
            description: "Tools and platforms to enhance developer productivity.",
            icon: "Code"
          },
          {
            name: "Project Managers",
            description: "Solutions to streamline project execution and delivery.",
            icon: "ClipboardList"
          },
          {
            name: "IT Professionals",
            description: "Enterprise IT management and infrastructure solutions.",
            icon: "Server"
          },
        ],
      },
      {
        title: "By Company Size",
        items: [
          {
            name: "Startups",
            description: "Scalable solutions designed for rapid growth and flexibility.",
            icon: "Rocket"
          },
          {
            name: "SMBs",
            description: "Right-sized technology that grows with your business.",
            icon: "Store"
          },
          {
            name: "Enterprises",
            description: "Complex, integrated systems for large organizations.",
            icon: "Building"
          },
          {
            name: "Government",
            description: "Compliant solutions for public sector requirements.",
            icon: "Landmark"
          },
        ],
      },
    ],
    sidebarContent: {
      title: "Powered by",
      brandName: { first: "Client", highlight: "Success" },
      features: [
        "Dedicated support",
        "Implementation services",
        "Training programs",
        "Custom onboarding",
        "Success management",
        "Continuous improvement",
      ],
    },
  },
  {
    id: "about-company",
    title: "About Company",
    submenu: true,
    categories: [
      {
        title: "About Us",
        items: [
          {
            name: "Our Story",
            description: "Learn about our journey and mission.",
            icon: "Book"
          },
          {
            name: "Leadership Team",
            description: "Meet the people who drive our company forward.",
            icon: "Users"
          },
          {
            name: "Partners",
            description: "Our technology and business partners.",
            icon: "Handshake"
          },
          {
            name: "Corporate Responsibility",
            description: "Our commitment to giving back and sustainability.",
            icon: "Heart"
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            name: "Blog",
            description: "Insights and updates from our team of experts.",
            icon: "FileText"
          },
          {
            name: "Case Studies",
            description: "Real-world examples of our solutions in action.",
            icon: "BookOpen"
          },
          {
            name: "Whitepapers",
            description: "In-depth research and thought leadership.",
            icon: "FileText"
          },
          {
            name: "Events",
            description: "Upcoming webinars, conferences, and meetups.",
            icon: "Calendar"
          },
        ],
      },
    ],
    sidebarContent: {
      title: "Powered by",
      brandName: { first: "Company", highlight: "Vision" },
      features: [
        "Industry expertise",
        "Innovative solutions",
        "Global presence",
        "Diverse talent",
        "Technical excellence",
        "Client-centered approach",
      ],
    },
  },
  {
    id: "careers",
    title: "Careers",
    submenu: true,
    categories: [
      {
        title: "Join Our Team",
        items: [
          {
            name: "Open Positions",
            description: "Explore current job opportunities across our company.",
            icon: "Briefcase"
          },
          {
            name: "Life at Company",
            description: "Our culture, values, and what makes us unique.",
            icon: "Coffee"
          },
          {
            name: "Benefits & Perks",
            description: "What we offer to our team members.",
            icon: "Gift"
          },
          {
            name: "Learning & Development",
            description: "How we help our people grow professionally.",
            icon: "Award"
          },
        ],
      },
      {
        title: "Departments",
        items: [
          {
            name: "Engineering",
            description: "Software development and technical operations.",
            icon: "Code"
          },
          {
            name: "Design",
            description: "User experience and product design.",
            icon: "Palette"
          },
          {
            name: "Product",
            description: "Product management and strategy.",
            icon: "Package"
          },
          {
            name: "Business",
            description: "Sales, marketing, and business operations.",
            icon: "TrendingUp"
          },
        ],
      },
    ],
    sidebarContent: {
      title: "Powered by",
      brandName: { first: "Talent", highlight: "Engine" },
      features: [
        "Remote-first culture",
        "Continuous learning",
        "Career advancement",
        "Competitive benefits",
        "Work-life balance",
        "Global opportunities",
      ],
    },
  },
  {
    id: "acctogo",
    title: "AcctoGo",
    submenu: false,
    link: "/acctogo",
  },
];
