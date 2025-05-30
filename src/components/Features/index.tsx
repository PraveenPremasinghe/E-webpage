"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { PrimaryButton } from "@/components/ui/ShinyButton";
import React from "react";

const Features = () => {
  return (
    <section className="pt-10 pb-10 sm:pt-18 sm:pb-18 md:pt-24 md:pb-24">
      <div className="">
        <SectionTitle
          subtitle="Who We Are ?"
          title="Engineering Intelligent Cloud Solutions for Tomorrow’s Enterprises"
          paragraph="At Edhirya IT, we design and build intelligent, secure, and scalable technology platforms — helping businesses modernize operations and unlock new opportunities.
"
        />

        <div className="container pt-20">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className=" flex flex-wrap items-center">
              <div className="w-full px-4 md:px-6 lg:w-1/2 lg:px-8">
                <div className="mb-8 max-w-full text-center md:max-w-[540px] lg:mb-0">
                  <h1 className="mb-3 max-w-[600px] text-4xl font-medium text-zinc-900 lg:text-[3.2rem] lg:leading-tight">
                    About
                    <span className="bg-gradient-to-r from-[#a12266] to-[#e94b8b] bg-clip-text text-transparent">
                      #Edhirya IT
                    </span>
                  </h1>

                  {/* Description */}
                  <h2 className="mb-4 text-base font-medium  text-zinc-700 dark:text-white sm:mb-5 sm:text-lg sm:!leading-[1.8] md:text-2xl">
                    &quot;Over the years we&apos;ve developed sophisticated
                    tools, platforms and digital products with cutting edge
                    technology and helped grow businesses rapidly. It&apos;s a
                    well known fact that through automation, a business would
                    run having minimum staff and investment and also risks. Well
                    this isn&apos;t a constant outcome and that&apos;s why
                    our.&quot;
                  </h2>

                  {/* Button */}

                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <img
                      src="/images/office/office1.jpg"
                      alt="Slide 1"
                      className="h-full w-full rounded-xl object-cover shadow-md"
                    />
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <img
                      src="/images/office/office2.jpg"
                      alt="Slide 2"
                      className="h-full w-full rounded-xl object-cover shadow-md"
                    />
                  </SwiperSlide>

                  {/* Add more slides as needed */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/*<section className='edhirya-card  pt-32'>*/}
        {/*  <div className='flex flex-col items-center gap-4 border-y-2 pb-20 pt-14 '>*/}
        {/*    <div className='flex flex-col '>*/}
        {/*      <span className='home-banner-title-sub ml-[-3.25rem] text-2xl font-medium   text-dark dark:text-white sm:ml-[-10.25rem]'>*/}
        {/*        We are ,*/}
        {/*      </span>*/}
        {/*      <span className='home-banner-title-main text-center text-2xl font-medium leading-tight text-dark dark:text-white'>*/}
        {/*        <span className='logo-text-color'>*/}
        {/*          <span className='logo-text-second-color'>[e]</span>dhirya*/}
        {/*        </span>*/}
        {/*        <span className='logo-text-second-color'> IT.</span>*/}
        {/*      </span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </div>

      <section className="pt-16 dark:bg-dark sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container relative w-full overflow-hidden rounded-2xl bg-black p-6 text-white sm:rounded-3xl sm:p-12 md:p-16 lg:rounded-[2rem] lg:p-24">
          {/* Glow Effect */}
          <img
            src="/images/glows/glow-vector.png"
            alt="Glow Effect"
            className="pointer-events-none absolute right-[-50px] top-[-50px] z-0 w-[600px] opacity-50 sm:right-[-80px] sm:top-[-80px] sm:w-[800px] md:right-[-100px] md:top-[-100px] md:w-[1000px]"
          />

          {/* Warm Vector */}
          <img
            src="/images/glows/warm-vector.png"
            alt="Warm Vector"
            className="pointer-events-none absolute bottom-[-50px] left-[-50px] z-0 w-[800px] opacity-60 sm:bottom-[-80px] sm:left-[-80px] sm:w-[1000px] md:bottom-[-100px] md:left-[-100px] md:w-[1200px]"
          />

          {/* Noise Overlay */}
          <div className="absolute inset-0 z-0 opacity-50 mix-blend-soft-light">
            <img
              src="/images/glows/noise-wide.png"
              alt="Noise"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="w-[200px] sm:w-[250px] md:w-[300px]">
                <img
                  src="/images/logo/edhirya-it-logo.webp"
                  alt="AI Brain"
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white sm:mt-5 sm:text-2xl md:mt-6 md:text-3xl">
                Revolutionizing AI Solutions
              </h3>
              <p className="mt-2 text-sm text-gray-300 sm:mt-3 sm:text-base md:text-lg">
                Discover our innovative AI brain technology that&apos;s shaping
                industries through intelligent automation and smarter systems.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10">
                <PrimaryButton>Get Started</PrimaryButton>
              </div>
            </div>

            <div className="w-full lg:w-1/2"></div>
          </div>

          <div className="absolute bottom-[-24px] right-[-15px] w-[300px] sm:bottom-[-36px] sm:right-[-20px] sm:w-[400px] md:bottom-[-48px] md:right-[-30px] md:w-[350px] lg:w-[650px]">
            <div className="modern-image-mask rounded-tl-[15px] border-l border-t border-white border-opacity-30 bg-white/20 p-2 sm:rounded-tl-[20px] sm:p-3 md:rounded-tl-[30px] md:p-4">
              <img
                src="/images/hero/ai10.jpg"
                alt="AI Brain"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
