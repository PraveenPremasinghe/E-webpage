'use client';

import SectionTitle from '../Common/SectionTitle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { WobbleCard } from '@/components/ui/wobble-card';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const ActogoERP = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedTab, setExpandedTab] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedTab(expandedTab === index ? null : index);
    setActiveTab(index);
  };

  const tabs = [
    {
      title: 'CRM & Sales',
      description:
        'From idea to execution, effortlessly plan, organize, and track campaigns that deliver results.',
      image: '/images/products/accto-img.png',
    },
    {
      title: 'Inventory Management',
      description:
        'Quickly identify and resolve product problems with streamlined workflows.',
      image: '/images/products/email-cover.png',
    },
    {
      title: 'Finance & Budgeting',
      description:
        'Keep your systems running smoothly with real-time monitoring.',
      image: '/images/products/Strategic-img.png',
    },
    {
      title: 'HR & Payroll',
      description: 'Discover more ways our platform can help your business.',
      image: '/images/products/accto-img.png',
    },
  ];

  return (
    <section className=" pb-10 pt-32 dark:bg-dark">
      <div className="container ">
        <SectionTitle
          subtitle="ActoGo ERP Platform"
          title="One Platform. Multiple Possibilities."
          paragraph="Actogo ERP is a comprehensive enterprise resource planning solution that integrates all your critical business functions into a single, unified platform."
        />
        <div className="mt-14 px-4 sm:px-6">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-col  lg:flex-row">
              {/* Vertical Tabs - Left Side */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col space-y-2">
                  {tabs.map((tab, index) => (
                    <div key={index}>
                      <div
                        onClick={() => toggleDescription(index)}
                        className={`flex w-full cursor-pointer  flex-col justify-between gap-4  px-3  text-left transition-all duration-300 ${
                          activeTab === index
                            ? "border-l-4 border-pink-700 dark:bg-blue-900/50 "
                            : " "
                        }`}
                      >
                        <h3 className="border-b-2 border-gray-50 py-2 text-xl font-semibold dark:border-gray-600">
                          {tab.title}
                        </h3>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedTab === index ? "auto" : 0,
                            opacity: expandedTab === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="text-md text-gray-600 dark:text-gray-300">
                            {tab.description}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                  <div>
                    <button
                      type="submit"
                      className="text-md group relative isolation-auto z-10 mt-7 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-4 py-2 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
                    >
                      Request Demo
                      <svg
                        className="h-7 w-7 rotate-45 justify-end rounded-full border border-gray-100 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-100 group-hover:fill-gray-700"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Display - Right Side */}
              <div className="w-full lg:w-2/3">
                <div className="relative  h-[500px] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                  {tabs[activeTab]?.image && (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].title}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {tabs[activeTab].title}
                      </h3>
                      <p className="mt-2 text-gray-200">
                        {tabs[activeTab].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 px-4 sm:px-6">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-col  lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="  lg:mb-0">
                  <h2 className="  mb-5 text-3xl font-medium leading-tight dark:text-white sm:text-[28px] sm:leading-[1.2]">
                    We are powered by{" "}
                    <span className="font-semibold text-primary">
                      #CA Sri Lanka
                    </span>
                  </h2>
                  <p className="mb-10 text-base font-light leading-relaxed text-body-color dark:text-dark-6">
                    Actogo is Edhirya IT’s flagship ERP platform — a powerful,
                    AI-powered solution that helps businesses orchestrate
                    operations, automate workflows, and unlock actionable
                    insights. Inspired by platforms like Odoo but designed with
                    adaptability at its core, Actogo supports full customization
                    and rapid deployment.
                  </p>
                  <button
                    type="submit"
                    className="text-md group relative isolation-auto z-10 mt-7 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-4 py-2 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
                  >
                    Read More
                    <svg
                      className="h-7 w-7 rotate-45 justify-end rounded-full border border-gray-100 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-100 group-hover:fill-gray-700"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="  mx-10   h-[400px]">
                  <img
                    src="/images/products/email-cover.png"
                    alt="Actogo ERP"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-4 sm:px-6">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-col  lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="  mx-10   h-[400px]">
                  <img
                    src="/images/products/email-cover.png"
                    alt="Actogo ERP"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="  lg:mb-0">
                  <h2
                    className="  mb-5 text-3xl font-medium leading-tight dark:text-white sm:text-[28px] sm:leading-[1.2]">
                    We are powered by{" "}
                    <span className="font-semibold text-primary">
                      #Gonuts with donuts
                    </span>
                  </h2>
                  <p className="mb-10 text-base font-light leading-relaxed text-body-color dark:text-dark-6">
                    Actogo is Edhirya IT’s flagship ERP platform — a powerful,
                    AI-powered solution that helps businesses orchestrate
                    operations, automate workflows, and unlock actionable
                    insights. Inspired by platforms like Odoo but designed with
                    adaptability at its core, Actogo supports full customization
                    and rapid deployment.
                  </p>
                  <button
                    type='submit'
                    className='text-md group relative isolation-auto z-10 mt-7 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-4 py-2 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold'
                  >
                     Read More
                      <svg
                        className='h-7 w-7 rotate-45 justify-end rounded-full border border-gray-100 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50'
                        viewBox='0 0 16 19'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
                          className='fill-gray-100 group-hover:fill-gray-700'
                        ></path>
                      </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActogoERP;
