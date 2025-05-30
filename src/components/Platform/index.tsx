'use client';

import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import WorkspaceSetupUI from "@/components/WorkspaceSetupUI";
import WeAreEdhirya from "@/components/weAreEdhirya";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";


const Platform = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dramaticVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };


  return (
    <section className="pt-0 pb-10 sm:pt-18 sm:pb-18 md:pt-24 md:pb-24">
      <div className="">
       <div className="container">
  <motion.div
    className="wow fadeInUp"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={dramaticVariants}
  >
    <div className="-mx-4 flex flex-wrap items-center">
      <div className="w-full px-4 lg:w-1/2">
        <motion.div className="mb-12 lg:mb-0" variants={itemVariants}>
          <motion.h2
            className="mb-3 max-w-[600px] text-4xl font-medium text-zinc-900 lg:text-[3.2rem] lg:leading-tight"
            variants={itemVariants}
          >
            AI-Powered Business{" "}
            <span className="bg-gradient-to-r from-[#a12266] to-[#e94b8b] bg-clip-text text-transparent">
              Adaptation Engine
            </span>
          </motion.h2>

          <motion.p
            className="mb-4 max-w-[600px] text-lg text-zinc-600 lg:text-xl lg:leading-8"
            variants={itemVariants}
          >
            We don&apos;t just integrate with your workflows—we{" "}
            <strong>learn</strong> and <strong>evolve</strong> with
            them. Our platform continuously optimizes finance, HR, and
            operations using real-time data, reducing manual work by up
            to 80% while providing actionable insights.
          </motion.p>

          <motion.div
            className="flex"
            variants={itemVariants}
          >
            <button
              type="submit"
              className="text-md group relative isolation-auto z-10 mt-7 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-4 py-2 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 lg:font-semibold"
            >
              Let&apos;s Talk
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
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full lg:w-1/2"
        variants={itemVariants}
      >
        <WorkspaceSetupUI />
      </motion.div>
    </div>
  </motion.div>
</div>

        {/*<section className="edhirya-card  pt-32">*/}
        {/*  <div className="flex flex-col items-center gap-4 border-y-2 pb-20 pt-14 ">*/}
        {/*    <div className="flex flex-col gap-3">*/}
        {/*      <span*/}
        {/*        className="home-banner-title-sub ml-[-2.25rem] text-2xl font-medium   text-dark dark:text-white sm:ml-[-10.25rem]">*/}
        {/*        We are ,*/}
        {/*      </span>*/}
        {/*      <span*/}
        {/*        className="home-banner-title-main text-center text-2xl font-medium leading-tight text-dark dark:text-white">*/}
        {/*        <span className="logo-text-color">*/}
        {/*          <span className="logo-text-second-color">[e]</span>dhirya*/}
        {/*        </span>*/}
        {/*        <span className="logo-text-second-color"> IT.</span>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>
    </section>
  );
};

export default Platform;
