import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Code,
  Database,
  Layout,
  Smartphone,
  Users,
} from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function OurService() {
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
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "PHP",
    "Laravel",
    "AWS",
    "Azure",
    "Google Cloud",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
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
      question:
        "How long does it typically take to develop a custom software solution?",
      answer:
        "Development timelines vary based on project complexity. Simple applications may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed timelines during our initial consultation.",
    },
  ];

  const serviceContent = {
    title: "Custom Software Development",
    description:
      "Transforming ideas into powerful software solutions that drive business growth",
    heroImage: "/services/software.jpg",
    heroTitle: "Custom Software Development",
    heroSubtitle:
      "Transforming ideas into powerful software solutions that drive business growth",
  };

  return (
    <main className="">
      <Breadcrumb pageName="Solutions by Industry " />

      {/* Navigation Bar */}
      <nav className="sticky top-[90px] z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <Link
            href="/services"
            className="group flex items-center text-sm font-medium text-primary transition-all hover:text-indigo-700 dark:text-primary dark:hover:text-indigo-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </Link>

          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="#overview"
              className="text-sm font-medium text-gray-500 transition-all hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              Overview
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-gray-500 transition-all hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              Process
            </a>
            <a
              href="#technologies"
              className="text-sm font-medium text-gray-500 transition-all hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              Tech Stack
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-500 transition-all hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="overview" className="pb-16 pt-12">
          <div className="lg:h-112 relative mb-12 h-80 w-full overflow-hidden rounded-2xl shadow-xl sm:h-96">
            <Image
              src={serviceContent.heroImage}
              alt={serviceContent.heroTitle}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
              <h1 className="mb-4 max-w-xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {serviceContent.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg text-gray-100">
                {serviceContent.heroSubtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{overview.title}</h2>
              {overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Why Choose Us</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          id="process"
          className="border-t border-gray-200 py-16 dark:border-gray-800"
        >
          <h2 className="mb-4 text-center text-3xl font-bold">
            Our Development Process
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We follow a systematic approach to ensure quality, transparency, and
            timely delivery
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-xl border-t-4 border-indigo-500 bg-white p-6 shadow-sm transition hover:shadow-md dark:bg-gray-800"
              >
                <div className="mb-4 text-4xl font-bold text-indigo-500 opacity-50">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="border-t border-gray-200 py-16 dark:border-gray-800"
        >
          <h2 className="mb-4 text-center text-3xl font-bold">
            Technologies We Use
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
            We leverage the latest technologies and frameworks to build modern,
            secure, and scalable applications
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-800"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="border-t border-gray-200 py-16 dark:border-gray-800"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <h3 className="mb-2 text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200 py-16 dark:border-gray-800">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white dark:from-indigo-500 dark:to-purple-500 md:p-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mb-4 text-lg opacity-90">
                  Let&apos;s discuss how our custom software solutions can help you
                  achieve your business goals.
                </p>
                <ul className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Free consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    No obligation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Tailored solutions
                  </li>
                </ul>
              </div>
              <div className="flex justify-center md:w-1/3 md:justify-end">
                <Link
                  href="/contact"
                  className="inline-block transform rounded-full bg-white px-8 py-4 font-medium text-primary shadow transition hover:scale-105 hover:bg-gray-50"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
