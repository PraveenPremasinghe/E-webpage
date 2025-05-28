"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { navigationItems } from "@/components/HeaderNew/navigationItems";

export default function OurService() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const allTabs = navigationItems
    .flatMap((item) =>
      item.categories?.flatMap((category) =>
        category.category.flatMap((catItem) => catItem.tabs || [])
      ) || []
    );

  const allEmpowerItems = navigationItems
    .find((nav) => nav.id === "who-we-empower")
    ?.categories?.flatMap((category) => category.category) || [];

  const selectedTab = allTabs.find((tab) => tab.id === id);
  const selectedEmpowerItem = allEmpowerItems.find((item) => item.id === id);
  const title = selectedTab?.title ?? "";
  const subtitle = selectedTab?.subtitle ?? "";
  const description = selectedTab?.description ?? "";
  const image = selectedTab?.image ?? "";

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We analyze your business requirements and define the project scope through collaborative workshops.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our designers create wireframes and prototypes to visualize the solution before development begins.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Using agile methodologies, we build your solution with clean, maintainable code and regular feedback cycles.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Rigorous quality assurance ensures your software is bug-free and meets all requirements.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We handle seamless deployment and provide comprehensive documentation and training.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "Ongoing maintenance and support to ensure your software continues to perform optimally.",
    },
  ];

  const benefits = [
    "Tailored solutions that align perfectly with your business needs",
    "Scalable architecture that grows with your business",
    "Improved operational efficiency and reduced costs",
    "Enhanced user experience and customer satisfaction",
    "Competitive advantage through digital innovation",
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP", "Laravel",
    "AWS", "Azure", "Google Cloud", "MongoDB", "PostgreSQL", "MySQL",
  ];

  const overview = {
    title: "Crafting Digital Excellence",
    paragraphs: [
      "We specialize in full-cycle software development — from ideation to launch. Our team builds scalable SaaS platforms, high-performance mobile apps, robust APIs, and powerful internal tools tailored to your business needs.",
      "Whether you're a startup building an MVP or an enterprise modernizing your system, we deliver high-quality code, thoughtful UX, and scalable architecture that stands the test of time.",
    ],
  };

  const faqs = [
    {
      question: "How long does it typically take to develop a custom software solution?",
      answer:
        "Development timelines vary based on project complexity. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during our initial consultation.",
    },
  ];

  const heroImage = image ? `/images/${image}` : "/services/software.jpg";

  if (!selectedTab && !selectedEmpowerItem) {
    return (
      <main className="py-24 text-center">
        <Breadcrumb pageName="Solutions by Industry" />
        <h1 className="text-3xl font-bold text-red-600">Service Not Found</h1>
        <p className="mt-4 text-gray-600">
          The requested service could not be found. Please return to the{" "}
          <Link href="/#solutions-by-industry" className="text-primary underline">
            solutions section
          </Link>{" "}
          and try again.
        </p>
      </main>
    );
  }

  if (selectedEmpowerItem) {
    return (
      <main>
      <Breadcrumb pageName="Who We Empower" />

        {/* Sticky Navigation */}
        <nav className="sticky top-[90px] z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <Link
            href="/#solutions-by-industry"
            className="group flex items-center text-sm font-medium text-primary transition-all hover:text-indigo-700 dark:text-primary dark:hover:text-indigo-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#overview" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Overview</a>
            <a href="#process" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Process</a>
            <a href="#technologies" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Tech Stack</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary dark:hover:text-primary">FAQ</a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="overview" className="pb-16 pt-12">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {selectedEmpowerItem.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {selectedEmpowerItem.subtitle}
            </p>
          </div>

          {selectedEmpowerItem.points && (
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {selectedEmpowerItem.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start rounded-lg bg-gray-50 p-4 shadow-sm dark:bg-gray-800"
                >
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {selectedEmpowerItem.caseStudy && (
            <div className="rounded-xl bg-gradient-to-r from-pink-600 to-pink-800 p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedEmpowerItem.caseStudy.title}</h2>
              <p className="mb-6">{selectedEmpowerItem.caseStudy.description}</p>
              <ul className="mb-6 space-y-2">
                {selectedEmpowerItem.caseStudy.highlights?.map((h, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-white" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {selectedEmpowerItem.caseStudy.stats?.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white/90 p-4 text-center text-pink-800"
                  >
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Process Section */}
        <section id="process" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold">Our Development Process</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We follow a systematic approach to ensure quality, transparency, and timely delivery
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={i} className="rounded-xl border-t-4 border-indigo-500 bg-white p-6 shadow-sm dark:bg-gray-800">
                <div className="mb-4 text-4xl font-bold text-indigo-500 opacity-50">{step.number}</div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="technologies" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold">Technologies We Use</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We leverage the latest technologies and frameworks to build modern, secure, and scalable applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-800">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    );
  }

  return (
    <main>
      <Breadcrumb pageName="Solutions by Industry" />

      {/* Sticky Navigation */}
      <nav className="sticky top-[90px] z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <Link
            href="/#solutions-by-industry"
            className="group flex items-center text-sm font-medium text-primary transition-all hover:text-indigo-700 dark:text-primary dark:hover:text-indigo-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#overview" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Overview</a>
            <a href="#process" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Process</a>
            <a href="#technologies" className="text-sm font-medium hover:text-primary dark:hover:text-primary">Tech Stack</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary dark:hover:text-primary">FAQ</a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="overview" className="pb-16 pt-12">
          <div className="relative mb-12 h-80 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96 lg:h-112">
            <Image src={heroImage} alt={title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
              <h1 className="mb-4 max-w-xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="max-w-2xl text-lg text-gray-100">{subtitle}</p>
            </div>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{overview.title}</h2>
              {overview.paragraphs.map((text, i) => (
                <p key={i} className="text-lg leading-relaxed">{text}</p>
              ))}
            </div>
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Why Choose Us</h3>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-green-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold">Our Development Process</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We follow a systematic approach to ensure quality, transparency, and timely delivery
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={i} className="rounded-xl border-t-4 border-indigo-500 bg-white p-6 shadow-sm dark:bg-gray-800">
                <div className="mb-4 text-4xl font-bold text-indigo-500 opacity-50">{step.number}</div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="technologies" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-4 text-center text-3xl font-bold">Technologies We Use</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We leverage the latest technologies and frameworks to build modern, secure, and scalable applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <div key={i} className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-800">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="border-t border-gray-200 py-16 dark:border-gray-800">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
