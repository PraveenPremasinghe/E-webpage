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
  Check,
  ChevronLeft,
} from "lucide-react";
import { navigationItems, NavigationItem } from "./navigationItems";
import ContactForm from "@/components/ContactForm/ContactForm";
import { TabsDemo } from "@/components/HeaderNew/dataList/tabs";
// import { Tabs } from "@/components/ui/tabs";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import CEOMessageCard from "@/components/HeaderNew/AboutCompanyContent";
import MinimalistCareersPage from "@/components/HeaderNew/CareersContent";
import WhoWeEmpowerSection from "@/components/HeaderNew/WhoWeEmpower";
import AboutCompanySection from "@/components/HeaderNew/AboutCompanyContent";
import CareersSection from "@/components/HeaderNew/CareersContent";
import { PrimaryButton } from "@/components/ui/ShinyButton";

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
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  // Add this state to track mobile menu selections
  const [mobileSelectedItemData, setMobileSelectedItemData] =
    useState<any>(null);

  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const navButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Update current path when component mounts or pathname changes
  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname);
    };

    // Set initial path
    updateCurrentPath();

    // Add event listener for navigation changes (for SPA navigation)
    window.addEventListener("popstate", updateCurrentPath);

    return () => {
      window.removeEventListener("popstate", updateCurrentPath);
    };
  }, []);

  // Find active dropdown content if available
  // const activeNavItem = navigationItems.find(
  //   (item) => item.id === activeDropdown && item.submenu,
  // );

  const activeNavItem = navigationItems.find((item) => {
    const match = item.id === activeDropdown && item.submenu;
    console.log(
      `Checking item: ${item.id}, submenu: ${item.submenu} → Match: ${match}`,
    );
    return match;
  });

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
      if (navItem && navItem.categories && navItem.categories.length > 0) {
        setSelectedCategory(navItem.categories[0].title);
        if (navItem.categories[0].category.length > 0) {
          setSelectedItem(navItem.categories[0].category[0].name);
        }
      }
    } else {
      setMegaMenuVisible(false);
    }
  };

  // Function to check if a nav item is active
  const isNavItemActive = (item: NavigationItem) => {
    // If a dropdown is active, only highlight it
    if (activeDropdown) {
      return item.id === activeDropdown;
    }

    // No dropdown active, check based on route
    const link = (item as any).link;

    if (link === "/") {
      return currentPath === "/";
    }

    return link && currentPath.startsWith(link);
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

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      if (megaMenuVisible) {
        setIsScrolling(true);
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
          setIsScrolling(false);
          setMegaMenuVisible(false);
          setActiveDropdown(null);
        }, 300);
      }
    };

    // Menu positioning logic
    const handleMenuPosition = () => {
      if (megaMenuVisible && megaMenuRef.current) {
        const menu = megaMenuRef.current;
        menu.style.willChange = "transform, opacity";
        void menu.offsetWidth; // Trigger reflow
        menu.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleMenuPosition(); // Initialize menu position

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);

      // Cleanup menu positioning
      if (megaMenuRef.current) {
        megaMenuRef.current.classList.remove("active");
        megaMenuRef.current.style.willChange = "";
      }
    };
  }, [megaMenuVisible]);

  // Handle selecting a category
  const handleCategorySelect = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);

    // Select first item of this category by default
    const navItem = navigationItems.find((item) => item.id === activeDropdown);
    if (navItem && navItem.categories) {
      const category = navItem.categories.find(
        (cat) => cat.title === categoryTitle,
      );
      if (category && category.category.length > 0) {
        // Changed from 'items' to 'category'
        setSelectedItem(category.category[0].name); // Changed from 'items' to 'category'
      }
    }
  };

  // Handle selecting an item
  const handleItemSelect = (itemName: string) => {
    setSelectedItem(itemName);
  };

  // Get current selected item data
  const getSelectedItemData = () => {
    if (
      !activeNavItem ||
      !("categories" in activeNavItem) ||
      !activeNavItem.categories ||
      !selectedCategory ||
      !selectedItem
    )
      return null;

    const category = activeNavItem.categories.find(
      (cat) => cat.title === selectedCategory,
    );
    if (!category || !category.category) return null;

    return category.category.find((item) => item.name === selectedItem);
  };

  const selectedItemData = getSelectedItemData();

  // Get dynamic icon component
  const getIconComponent = (iconName?: string) => {
    if (!iconName || !IconMap[iconName]) return Building;
    return IconMap[iconName];
  };

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
    // Close other open menus when contact form is opened
    if (!isContactFormOpen) {
      setMegaMenuVisible(false);
      setActiveDropdown(null);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //
  //   // Simulate form submission
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     setSubmitSuccess(true);
  //     setFormData({ name: "", email: "", message: "" });
  //
  //     // Reset success message after 3 seconds
  //     setTimeout(() => {
  //       setSubmitSuccess(false);
  //       setIsContactFormOpen(false);
  //     }, 3000);
  //   } catch (error) {
  //     console.error("Submission error:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // Close contact form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactFormRef.current &&
        !contactFormRef.current.contains(event.target as Node)
      ) {
        // Check if the clicked element is not the contact button
        const contactButton = document.querySelector(".contact-button");
        if (contactButton && !contactButton.contains(event.target as Node)) {
          setIsContactFormOpen(false);
        }
      }
    };

    if (isContactFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isContactFormOpen]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onOpenChange();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="shadow-nav fixed left-0 top-0 z-[9999] h-[90px] w-full border-b border-stroke bg-white px-4 dark:border-dark-3/20 dark:bg-dark/10 sm:px-4 md:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-9xl items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-60 max-w-full">
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
              className="rounded-md p-2 text-gray-700 hover:bg-[#a1226629] hover:text-[#A12266]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center space-x-1 md:flex">
            {navigationItems.map((item) => {
              const isActive = isNavItemActive(item);

              return item.submenu ? (
                <div key={item.id} className="relative">
                  <button
                    ref={(el) => {
                      if (el) navButtonRefs.current[item.id] = el;
                    }}
                    onClick={() => toggleDropdown(item.id)}
                    className={`flex items-center rounded-full px-3 py-2 font-medium transition-all duration-200 hover:bg-[#fff] hover:text-[#A12266] ${
                      isActive
                        ? "bg-[#ffffff] text-[#a3004c] after:absolute after:-bottom-1 after:left-1/2 after:h-[3px]" +
                          " after:w-[40%] after:-translate-x-1/2 after:rounded-full after:bg-[#A12266] after:content-['']"
                        : "text-gray-700"
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.id && megaMenuVisible
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.link || "#"}
                  className={`relative rounded-full px-3 py-2 font-medium transition-all duration-200 hover:bg-[#fff] hover:text-[#A12266] ${
                    isActive
                      ? "text-[#a3004c] after:absolute after:-bottom-1 after:left-1/2 after:h-[3px] after:w-[70%] after:-translate-x-1/2 after:rounded-full after:bg-[#A12266] after:content-['']"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-2 md:flex">
            <button
              onClick={onOpen}
              className="contact-button rounded-full bg-[#A12266] px-4 py-2 font-medium text-white transition-colors hover:bg-[#8a1c57]"
            >
              Contact Us
            </button>
          </div>


        </div>


        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-200 pb-3 md:hidden bg-white">
          {/* Mobile menu items */}
            {navigationItems.map((item) => {
              const isActive = isNavItemActive(item);
              return item.submenu ? (
                <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.categories?.[0]?.category?.[0]) {
                      setMobileSelectedItemData(item.categories[0].category[0]);
                    }
                    toggleDropdown(`mobile-${item.id}`);
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-medium hover:bg-gray-100 ${
                    isActive ? "text-[#A12266]" : "text-gray-700"
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      activeDropdown === `mobile-${item.id}` ? "rotate-180" : ""
                    }`}
                  />
                </button>

                  {activeDropdown === `mobile-${item.id}` && item.submenu && item.categories && (
                    <div className="ml-4 space-y-1">
                    {item.categories.map((category, idx) => (
                      <div key={idx}>
                        {category.category.map((subitem, subidx) => (
                          <a
                            key={subidx}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileSelectedItemData(subitem);
                            }}
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
                <Link
                  key={item.id}
                  href={item.link || "#"}
                  className={`block rounded-md px-3 py-2 font-medium hover:bg-gray-100 ${
                    isActive ? "text-[#A12266]" : "text-gray-700"
                  }`}
                >
                {item.title}
              </Link>
              );
            })}

            {/* Contact Us button */}
            <div className="space-y-2 pt-4">
            <button
              onClick={toggleContactForm}
              className="block w-full rounded-md border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Us
            </button>
          </div>
        </div>
        )}
    </header>

      {/************************** Mobile megamenu *****************************/}
      {/* Mobile item details view */}
      {mobileSelectedItemData && (
        <div className=" inset-0 mt-20 z-50 bg-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setMobileSelectedItemData(null)}
            className="flex items-center text-gray-600"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

          {/* Render the selected item details */}
          <div className="space-y-6">
          {mobileSelectedItemData.tabs?.map((tab: any, index: number) => (
            <div key={index}>
              <h1 className="text-2xl font-bold text-gray-900">{tab.title}</h1>
              <p className="mt-1 text-gray-600">{tab.subtitle}</p>
              <p className="mt-4 text-gray-700">{tab.description}</p>

              {tab.image && (
                <img
                  src={`/images/${tab.image}`}
                  alt={tab.title}
                  className="mt-4 rounded-lg shadow-md w-full"
                />
              )}

              {tab.features && (
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-gray-900">Key Features</h2>
                  <div className="mt-2 space-y-2">
                    {tab.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-pink-600" />
                        </div>
                        <p className="ml-2 text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 p-4 bg-gradient-to-r from-pink-600 to-pink-800 rounded-lg text-white">
                <h2 className="text-xl font-bold">Ready to optimize your {tab.title}?</h2>
                <p className="mt-1 text-pink-100">
                  Schedule a demo to see how our system fits your needs
                </p>
                <button className="mt-4 px-4 py-2 bg-white text-pink-700 rounded-md font-medium">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}


      {/************************** Mobile megamenu *****************************/}

      {/* Mega Menu - Only visible when a dropdown is active */}
      {megaMenuVisible && activeNavItem && "categories" in activeNavItem && (
        // <div
        //   ref={megaMenuRef}
        //   className={`inner-details-card mega-menu fixed mx-auto w-full bg-white transition-all duration-300 ease-in-out ${
        //     isScrolling
        //       ? "pointer-events-none translate-y-[-10px] opacity-0"
        //       : "translate-y-0 opacity-100"
        //   }`}
        // >

        <div
          ref={megaMenuRef}
          className={`inner-details-card mega-menu fixed mx-auto w-full bg-white transition-all duration-300 ease-in-out 
    ${megaMenuVisible ? "active" : ""} 
    ${isScrolling ? "pointer-events-none translate-y-[-10px] opacity-0" : "translate-y-0 opacity-100"}`}
        >
          {activeNavItem.id === "about-company" && (
            <div className="mx-auto">
              <div className="flex h-[80vh]">
                <AboutCompanySection />
              </div>
            </div>
          )}

          {activeNavItem.id === "careers" && (
            <div className="mx-auto">
              <div className="flex h-[80vh]">
                <CareersSection />
              </div>
            </div>
          )}

          {Array.isArray(activeNavItem?.categories) &&
            activeNavItem.categories.length > 0 && (
              <div className="mx-auto">
                <div className="flex h-[80vh]">
                  {/* Left sidebar - Navigation */}
                  <div
                    className="w-70 overflow-y-auto border-r border-gray-200 bg-gray-50 py-6"
                    style={{ maxHeight: "80vh" }}
                  >
                    {/* Cards with matching size to original (7rem × 7rem) but updated visual style */}
                    {activeNavItem.categories?.map((category, idx) => (
                      <div key={idx} className="mb-8">
                        <h3 className="mb-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                          {category.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-4 px-4">
                          {category.category.map((item, itemIdx) => {
                            const IconComponent = getIconComponent(item.icon);

                            return (
                              <button
                                key={itemIdx}
                                onClick={() => {
                                  handleCategorySelect(category.title);
                                  handleItemSelect(item.name);
                                }}
                                className={`group relative flex aspect-square w-[7rem] flex-col items-center justify-center rounded-xl border transition-all duration-300 ${
                                  selectedCategory === category.title &&
                                  selectedItem === item.name
                                    ? "-translate-y-0.5 border-pink-600 bg-pink-50/20 shadow-sm dark:bg-pink-900/20"
                                    : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-pink-600 hover:bg-pink-50/20 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-pink-900/10"
                                }`}
                              >
                                <div
                                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                                    selectedCategory === category.title &&
                                    selectedItem === item.name
                                      ? "bg-pink-50/40 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
                                      : "bg-gray-50/50 text-gray-500 group-hover:bg-pink-50/30 group-hover:text-pink-600 dark:bg-gray-700/50 dark:text-gray-300 dark:group-hover:bg-pink-900/20 dark:group-hover:text-pink-400"
                                  }`}
                                >
                                  <IconComponent size={20} />
                                </div>

                                <span
                                  className={`line-clamp-2 px-1 text-center text-sm transition-colors ${
                                    selectedCategory === category.title &&
                                    selectedItem === item.name
                                      ? "font-semibold text-pink-600 dark:text-pink-400"
                                      : "font-medium text-gray-700 group-hover:text-pink-600 dark:text-gray-200 dark:group-hover:text-pink-400"
                                  }`}
                                >
                                  {item.name}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main content area - Selected item details */}
                  <div className="flex-1 overflow-auto p-8">
                    {activeNavItem.id === "who-we-empower" && (
                      <div className="mx-auto">
                        <div className="flex h-[80vh]">
                          <WhoWeEmpowerSection itemData={selectedItemData!} />
                        </div>
                      </div>
                    )}
                    {selectedItemData && (
                      <div className="flex   flex-col">
                        <div className="flex w-full flex-col  ">
                          <Tabs
                            key="primary"
                            aria-label="Tabs"
                            radius="sm"
                            className=" mb-4"
                            size="lg"
                            variant="solid"
                          >
                            {selectedItemData.tabs?.map((tab, index) => (
                              <Tab key={index} title={tab.title}>
                                <div className="">
                                  <div className="space-y-10">
                                    {/* Hero Section */}
                                    <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                                      <div>
                                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                          {tab.title}
                                        </h1>
                                        <p className="mt-1 text-lg text-gray-600">
                                          {tab.subtitle}
                                        </p>
                                        <p className="mt-6 text-gray-700">
                                          {tab.description}
                                        </p>
                                      </div>
                                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <img
                                          src={`/images/${tab.image}`}
                                          alt={tab.title}
                                          className="rounded-lg shadow-md"
                                        />
                                      </div>
                                    </section>

                                    {/* Features Section */}
                                    <section>
                                      <h2 className="mb-6 text-2xl font-bold text-gray-900">
                                        Key Features
                                      </h2>
                                      <div className="space-y-4">
                                        {tab.features.map(
                                          (feature, featureIndex) => (
                                            <div
                                              key={featureIndex}
                                              className="flex items-start space-x-3"
                                            >
                                              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100">
                                                <Check className="h-4 w-4 text-pink-600" />
                                              </div>
                                              <span className="text-gray-700">
                                                {feature}
                                              </span>
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </section>

                                    {/* CTA Section */}
                                    <div className=" mx-auto max-w-5xl rounded-xl bg-gradient-to-r from-pink-600 to-pink-800 p-8 text-white shadow-lg">
                                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                          <h2 className="text-2xl font-bold">
                                            Ready to optimize your {tab.title}?
                                          </h2>
                                          <p className="mt-2 text-pink-100">
                                            Schedule a demo to see how our
                                            system fits your needs
                                          </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-4 ">
                                          <PrimaryButton>
                                            Request Demo
                                          </PrimaryButton>

                                          <a
                                            href="#"
                                            className="inline-flex items-center font-medium text-[#fff] hover:underline"
                                          >
                                            Learn more
                                            <ArrowRight
                                              size={16}
                                              className="ml-1"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab>
                            ))}
                          </Tabs>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="flex justify-end space-x-6 rounded-bl-lg rounded-br-lg border-t border-gray-200 p-4">
                  <button className="flex items-center text-gray-800">
                    <MessageCircle size={18} className="mr-2" />
                    <span>Contact Us</span>
                  </button>
                  <button className="flex items-center text-gray-800">
                    <Play size={18} className="mr-2" />
                    <span>Watch demo</span>
                  </button>
                </div>
              </div>
            )}
        </div>
      )}



      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="lg"
      >
            <ModalContent className="max-w-md">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-2 p-6 text-center text-3xl font-bold">
                    Let&apos;s Have A Chat 👋
                    <p className="text-lg font-normal text-gray-500">
                      We&apos;ll Get Back To You Soon
                    </p>
                  </ModalHeader>

                  <ModalBody className="relative pb-20">
                    {" "}
                    {/* Added padding-bottom */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {" "}
                      {/* Added padding-bottom */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                          placeholder="Your message"
                          rows={5}
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <PrimaryButton
                          dotColor="bg-primary"
                          textColor="text-primary"
                          hoverTextColor="text-white"
                          backgroundColor="bg-[#a122661a]"
                          borderColor="border-pink-800"
                        >
                          Send Message
                        </PrimaryButton>
                      </div>
                    </form>
                    {/* Phone number section */}
                    <div className="absolute bottom-0 left-0 right-0 rounded-b-[10px] border-t border-gray-200 bg-primary p-4">
                      <div className="text-center text-2xl text-white">
                        <span>Call us: </span>
                        <a
                          href="tel:+94458718711"
                          className="font-semibold hover:underline"
                        >
                          +94 45871 8711
                        </a>
                      </div>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
    </>
  );
}
