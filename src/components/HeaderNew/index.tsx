import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  X,
  Menu,
  MessageCircle,
  Play,
  CheckCircle,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Layers,
  Cloud,
  BarChart,
  Shield,
  Code,
  Smartphone,
  Globe,
  Palette,
  Brain,
  Link as LinkIcon,
  Cpu,
  Users,
  ClipboardList,
  Server,
  Rocket,
  Store,
  Landmark,
  Book,
  Handshake,
  FileText,
  BookOpen,
  Calendar,
  Briefcase,
  Coffee,
  Gift,
  Award,
  Package,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { navigationItems, NavigationItem } from "./navigationItems";

// Icon mapping for dynamic rendering
const IconMap: Record<string, any> = {
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Layers,
  Cloud,
  BarChart,
  Shield,
  Code,
  Smartphone,
  Globe,
  Palette,
  Brain,
  Link: LinkIcon,
  Cpu,
  Users,
  ClipboardList,
  Server,
  Rocket,
  Store,
  Landmark,
  Book,
  Handshake,
  FileText,
  BookOpen,
  Calendar,
  Briefcase,
  Coffee,
  Gift,
  Award,
  Package,
  TrendingUp,
};

export default function HeaderNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Find active dropdown content if available
  const activeNavItem = navigationItems.find(
    (item) => item.id === activeDropdown && item.submenu
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close any active dropdowns when toggling menu
    setActiveDropdown(null);
    setMegaMenuVisible(false);
  };

  const toggleDropdown = (dropdown: string | null) => {
    const isSameDropdown = activeDropdown === dropdown;

    // Set the active dropdown
    setActiveDropdown(isSameDropdown ? null : dropdown);

    // Control mega menu visibility
    if (
      !isSameDropdown &&
      navigationItems.find((item) => item.id === dropdown)?.submenu
    ) {
      setMegaMenuVisible(true);
      // Set default selected category to first category
      const navItem = navigationItems.find((item) => item.id === dropdown);
      if (navItem && 'categories' in navItem && navItem.categories.length > 0) {
        setSelectedCategory(navItem.categories[0].title);
        if (navItem.categories[0].items.length > 0) {
          setSelectedItem(navItem.categories[0].items[0].name);
        }
      }
    } else {
      setMegaMenuVisible(false);
    }
  };

  // Handle click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        headerRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMegaMenuVisible(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selecting a category
  const handleCategorySelect = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    // Select first item of this category by default
    const navItem = navigationItems.find((item) => item.id === activeDropdown);
    if (navItem && 'categories' in navItem) {
      const category = navItem.categories.find(cat => cat.title === categoryTitle);
      if (category && category.items.length > 0) {
        setSelectedItem(category.items[0].name);
      }
    }
  };

  // Handle selecting an item
  const handleItemSelect = (itemName: string) => {
    setSelectedItem(itemName);
  };

  // Get current selected item data
  const getSelectedItemData = () => {
    if (!activeNavItem || !('categories' in activeNavItem) || !selectedCategory || !selectedItem) return null;

    const category = activeNavItem.categories.find(cat => cat.title === selectedCategory);
    if (!category) return null;

    return category.items.find(item => item.name === selectedItem);
  };

  const selectedItemData = getSelectedItemData();

  // Get dynamic icon component
  const getIconComponent = (iconName?: string) => {
    if (!iconName || !IconMap[iconName]) return Building;
    return IconMap[iconName];
  };

  return (
    <>
      <header
        ref={headerRef}
        className="shadow-nav fixed left-0 top-0 z-[999] w-full border-b border-stroke  px-4 bg-white  dark:border-dark-3/20 dark:bg-dark/10 sm:px-4 md:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-9xl items-center justify-between">
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
              className="rounded-md p-2 text-gray-700 hover:text-[#A12266] hover:bg-[#a1226629]"
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
                    className={`flex items-center rounded-full px-3 py-2 font-medium text-gray-700 hover:text-[#A12266] hover:bg-[#a1226629] ${
                      activeDropdown === item.id ? "text-[#A12266] bg-[#a1226629]" : ""
                    }`}
                  >
                    {item.title}{" "}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.id && megaMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <a
                  key={item.id}
                  href={(item as any).link}
                  className="rounded-full px-3 py-2 font-medium text-gray-700 hover:text-[#A12266] hover:bg-[#a1226629]"
                >
                  {item.title}
                </a>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href="#"
              className="rounded-full px-4 py-2 font-medium text-white bg-[#A12266]"
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
                        className={`transform transition-transform duration-200 ${
                          activeDropdown === `mobile-${item.id}` ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === `mobile-${item.id}` && item.submenu && 'categories' in item && (
                      <div className="ml-4 space-y-1">
                        {item.categories.map((category, idx) => (
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
                    href={(item as any).link}
                    className="block rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                )
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
      </header>

      {/* Mega Menu - Only visible when a dropdown is active */}
      {megaMenuVisible && activeNavItem && 'categories' in activeNavItem && (
        <div
          ref={megaMenuRef}
          className="inner-details-card mega-menu fixed   mx-auto w-full bg-white "
        >
          <div className="mx-auto ">
            <div className="flex">
              {/* Left sidebar - Navigation */}
              <div className="w-80 border-r border-gray-200 bg-gray-50 py-6">
                {activeNavItem.categories.map((category, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="px-6 py-2 text-sm font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <ul>
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <button
                            onClick={() => {
                              handleCategorySelect(category.title);
                              handleItemSelect(item.name);
                            }}
                            className={`flex w-full items-center px-6 py-2 text-sm ${
                              selectedCategory === category.title && selectedItem === item.name
                                ? "bg-[#a1226620] text-[#A12266] font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Main content area - Selected item details */}
              <div className="flex-1 p-8">
                {selectedItemData && (
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      {selectedItemData.icon && (
                        <div className="mr-6 rounded-full bg-[#a1226615] p-4">
                          {React.createElement(getIconComponent(selectedItemData.icon), {
                            size: 24,
                            className: "text-[#A12266]",
                          })}
                        </div>
                      )}
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{selectedItemData.name}</h2>
                        <p className="mt-2 text-gray-600">{selectedItemData.description}</p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-[#A12266] hover:underline"
                      >
                        Learn more about {selectedItemData.name}
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Right sidebar - AI features */}
              <div className="w-64 border-l border-gray-200 bg-[#a1226615] p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800">
                    {activeNavItem.sidebarContent.title}
                  </h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">
                      {activeNavItem.sidebarContent.brandName.first}
                    </span>
                    <span className="text-xl font-bold text-[#A12266]">
                      {activeNavItem.sidebarContent.brandName.highlight}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {activeNavItem.sidebarContent.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="mr-2 text-[#A12266]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="font-medium text-[#A12266] hover:underline">
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
        </div>
      )}

      {/* Overlay when mega menu is visible */}
      {megaMenuVisible && (
        <div
          className="mega-menu-overlay"
          onClick={() => {
            setMegaMenuVisible(false);
            setActiveDropdown(null);
          }}
          style={{ top: '73px' }}
        />
      )}
    </>
  );
}
