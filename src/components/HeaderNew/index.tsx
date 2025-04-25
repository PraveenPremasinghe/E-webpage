import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  X,
  Menu,
  MessageCircle,
  Play,
  Download,
  CheckCircle,
} from "lucide-react";

interface NavigationCategory {
  title: string;
  items: { name: string }[];
}

interface RightSidebar {
  title: string;
  brandName: { first: string; highlight: string };
  features: string[];
}

interface NavigationItemBase {
  id: string;
  title: string;
  submenu: boolean;
  link?: string;
}

interface NavigationItemWithSubmenu extends NavigationItemBase {
  submenu: true;
  content: {
    title: string;
    categories: NavigationCategory[];
    rightSidebar: RightSidebar;
  };
}

interface NavigationItemWithoutSubmenu extends NavigationItemBase {
  submenu: false;
  link: string;
}

type NavigationItem = NavigationItemWithSubmenu | NavigationItemWithoutSubmenu;


export default function HeaderNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);

  // Navigation Menu Items
  const navigationItems = [
    {
      id: "home",
      title: "Home",
      submenu: false,
      link: "/",
    },
    {
      id: "solutions-by-industry",
      title: "Solutions by Industry",
      submenu: true,
      content: {
        title: "Solutions by Industry",
        categories: [
          {
            title: "By Industry",
            items: [
              { name: "Enterprise" },
              { name: "Healthcare" },
              { name: "Education" },
              { name: "Finance" },
            ],
          },
          {
            title: "By Role",
            items: [
              { name: "Developers" },
              { name: "Project Managers" },
              { name: "Designers" },
              { name: "DevOps" },
            ],
          },
          {
            title: "By Use Case",
            items: [
              { name: "Startups" },
              { name: "Remote Teams" },
              { name: "Mobile Development" },
              { name: "Secure Enterprise" },
            ],
          },
        ],
        rightSidebar: {
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
    },
    {
      id: "products",
      title: "Products",
      submenu: true,
      content: {
        title: "Products",
        categories: [
          {
            title: "Project Management",
            items: [
              { name: "Tasks" },
              { name: "Portfolios" },
              { name: "Board views" },
              { name: "Gantt charts" },
            ],
          },
          {
            title: "Product Development",
            items: [
              { name: "Sprints" },
              { name: "Sprint Reports" },
              { name: "Kanban" },
              { name: "Roadmap & Backlog" },
            ],
          },
          {
            title: "Knowledge Management",
            items: [
              { name: "Docs" },
              { name: "Wikis" },
              { name: "Ask AI" },
              { name: "Connected search" },
            ],
          },
        ],
        rightSidebar: {
          title: "Powered by",
          brandName: { first: "Product", highlight: "AI" },
          features: [
            "Generate documentation",
            "Track tasks automatically",
            "Smart suggestions",
            "Generate roadmaps",
            "Feature prioritization",
            "Create reports",
          ],
        },
      },
    },
    {
      id: "about-company",
      title: "About Company",
      submenu: false,
      link: "/about",
    },
    {
      id: "careers",
      title: "Careers",
      submenu: false,
      link: "/careers",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close any active dropdowns when toggling menu
    setActiveDropdown(null);
    setMegaMenuVisible(false);
  };

  const toggleDropdown = (dropdown:any) => {
    const isSameDropdown = activeDropdown === dropdown;

    // Set the active dropdown
    setActiveDropdown(isSameDropdown ? null : dropdown);

    // Control mega menu visibility
    if (
      !isSameDropdown &&
      navigationItems.find((item) => item.id === dropdown)?.submenu
    ) {
      setMegaMenuVisible(true);
    } else {
      setMegaMenuVisible(false);
    }
  };

  // Find active dropdown content if available
  const activeContent = navigationItems.find(
    (item) => item.id === activeDropdown,
  )?.content;

  return (
    <>
      <header className="shadow-nav fixed left-0 top-0 z-[999] w-full border-b border-stroke bg-white/80 px-4 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10 sm:px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-60 max-w-full px-4">
                <Link href="/" className="navbar-logo block w-full py-5">
                  <Image
                    src="/images/logo/edhirya-it-logo.webp"
                    alt="Edhirya IT Logo"
                    width={200}
                    height={30}
                    className="header-logo w-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center space-x-1 md:flex">
            {navigationItems.map((item) =>
              item.submenu ? (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 ${activeDropdown === item.id ? "bg-gray-100" : ""}`}
                  >
                    {item.title}{" "}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${activeDropdown === item.id && megaMenuVisible ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={item.link}
                  className="rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.title}
                </a>
              ),
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href="#"
              className="rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pb-3 md:hidden">
            <div className="space-y-1 px-2 pt-2">
              {navigationItems.map((item) =>
                item.submenu ? (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleDropdown(`mobile-${item.id}`)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${activeDropdown === `mobile-${item.id}` ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeDropdown === `mobile-${item.id}` && item.submenu && (
                      <div className="ml-4 space-y-1">
    {(item as NavigationItemWithSubmenu).content.categories.map((category, idx) => (
      <div key={idx}>
        <div className="py-1 font-medium text-gray-700">
          {category.title}
        </div>
        {category.items
          .slice(0, 3)
          .map((subitem, subidx) => (
            <a
              key={subidx}
              href="#"
              className="block rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
            >
              {subitem.name}
            </a>
          ))}
      </div>
    ))}
  </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ),
              )}

              <div className="space-y-2 pt-4">
                <a
                  href="#"
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu - Only visible when a dropdown is active */}
        {megaMenuVisible && activeContent && (
          <div className="inner-details-card mx-auto mb-3 mt-3 w-full   max-w-7xl overflow-hidden rounded-lg bg-white">
            <div className="flex">
              {/* Main content area */}
              <div className="flex-1 p-6">
                {/*******************************/}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 hover:border-blue-500 hover:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:hover:border-blue-400">
                    <div className="flex gap-2">
                      <div>icon</div>
                      <div className="text-[0.875rem] font-semibold  group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Custom Software Development
                      </div>
                    </div>
                    <p className="text-[0.675rem] font-light text-gray-500 mt-2">
                      We help founders and enterprises define technical vision,
                      validate ideas, and architect scalable digital systems.
                    </p>
                  </div>


                </div>
                {/*******************************/}
              </div>

              {/* Right sidebar - AI features */}
              <div className="w-72 border-l border-gray-200 bg-purple-50 p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800">
                    {activeContent.rightSidebar.title}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">
                     Accto
                    </span>
                    <span className="text-xl font-bold text-purple-600">
                      Brain
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {activeContent.rightSidebar.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="mr-2 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="font-medium text-purple-700 hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="flex justify-end space-x-6 border-t border-gray-200 p-4">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <MessageCircle size={18} className="mr-2" />
                <span>Contact Us</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <Play size={18} className="mr-2" />
                <span>Watch demo</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
