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
import { Safari } from "@/components/ui/SafariInterface";

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
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-28">
  <div className="container px-4 sm:px-6 mx-auto">


    <div className="mx-auto flex w-full flex-wrap justify-center px-4 sm:px-6 lg:px-8 mb-8">
      <div
        className={`wow fadeInUp w-full px-4 ${
           "mx-auto text-center"
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: "735px" }}
      >

          <span className="mb-3 mt-3 block text-center sm:mb-4">
            <div
              className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-950">
              <div
                className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#a12266] via-[#a12266] to-[#FF7DAA]"></div>
              ActoGo ERP Platform
            </div>
          </span>


        <h2 className="mb-3 text-center text-4xl font-medium tracking-tight  lg:text-5xl text-white">
          {" "}
          One Platform. Multiple Possibilities.
        </h2>

        <p className="text-center text-lg text-white">Actogo ERP is a comprehensive enterprise resource planning solution that integrates all your critical business functions into a single, unified platform.</p>
      </div>
    </div>

    <div className="mt-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Vertical Tabs - Left Side */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col space-y-4"
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    onClick={() => toggleDescription(index)}
                    className={`flex w-full cursor-pointer flex-col justify-between gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? "border-l-4 border-pink-700 bg-pink-900/50 bg-opacity-50 backdrop-blur-sm"
                        : "hover:bg-zinc-800/50"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {tab.title}
                    </h3>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedTab === index ? "auto" : 0,
                        opacity: expandedTab === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="text-sm md:text-base text-gray-300 pb-2">
                        {tab.description}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group relative isolation-auto z-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-6 py-3 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700"
                >
                  <span className="text-sm md:text-base font-medium">I&apos;m interested</span>
                  <svg
                    className="h-6 w-6 rotate-45 rounded-full border border-gray-100 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-100 group-hover:fill-gray-700"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Display - Right Side */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-6 sm:p-8 md:p-10 rounded-2xl overflow-hidden h-full min-h-[400px]"
            >
              {/* Gradient background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FB923C] via-[#F472B6] to-[#E879F9]">
                {/* Radial white fade */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]" />

                {/* Noise texture */}
                <div className="absolute inset-0 z-10 bg-[url('/noise.png')] opacity-[0.02] mix-blend-color-dodge" />

                {/* Vertical stripes pattern */}
                <div className="absolute inset-0 flex">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + (i * 0.02) }}
                      className="h-full w-12 lg:w-6"
                      style={{
                        background: 'linear-gradient(90deg, #D9D9D903 0%, #00000033 50%, #FFFFFF03 100%)',
                        mixBlendMode: 'overlay'
                      }}
                    />
                  ))}
                </div>

              </div>

              {/* Content with animation */}
              <div className="relative z-20 h-full flex items-center justify-center">
                {tabs[activeTab]?.image && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <div className="relative h-full">
                      <Safari
                        url="www.actogo.com"
                        mode="simple"
                        className="w-full h-full"
                        imageSrc={tabs[activeTab].image}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default ActogoERP;


