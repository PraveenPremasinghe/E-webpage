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

const Features = () => {
  return (
    <section className="pt-10 dark:bg-dark sm:pt-24 md:pt-32">
      <div className="">
        <SectionTitle
          subtitle="Who We Are ?"
          title="We are on a Mission to
Digitalize all critical Business Operations"
          paragraph="Our vast experience leveraged to solve your problems – across verticals."
        />

        <div className="container pt-20">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 md:px-6 lg:w-1/2 lg:px-8">
                <div className="mb-8 max-w-full md:max-w-[540px] lg:mb-0 text-center">
                  {/* Title Section */}
                  <h1
                    className="mb-3 text-3xl font-medium leading-tight text-dark dark:text-white sm:mb-4 sm:text-4xl md:mb-5 md:text-5xl">
                    About
                    <span className="mx-1 font-semibold text-primary sm:mx-2">
                      #Edhirya IT
                    </span>
                  </h1>

                  {/* Description */}
                  <h2
                    className="mb-4 text-base font-medium  text-dark dark:text-white sm:mb-5 sm:text-lg sm:!leading-[1.8] md:text-2xl">
                    &quot;Over the years we&apos;ve developed sophisticated tools,
                    platforms and digital products with cutting edge technology
                    and helped grow businesses rapidly. It&apos;s a well known fact
                    that through automation, a business would run having minimum
                    staff and investment and also risks. Well this isn&apos;t a
                    constant outcome and that&apos;s why our.&quot;
                  </h2>

                  {/* Button */}
                  <div className="flex justify-items-center items-center text-center">
                    <button
                      type="submit"
                      className="group relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-4 py-2 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:bg-pink-800 sm:mt-6 sm:px-5 sm:py-2 sm:text-base md:mt-7 md:text-lg"
                    >
                      Let&apos;s Talk
                      <svg
                        className="h-6 w-6 rotate-45 rounded-full border border-gray-100 p-1.5 text-gray-50 transition-all duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 sm:h-7 sm:w-7 sm:p-2"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="fill-gray-100 group-hover:fill-gray-700"
                        />
                      </svg>
                    </button>
                  </div>
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
                      src="/images/products/email-cover.png"
                      alt="Slide 1"
                      className="h-full w-full rounded-xl object-cover shadow-md"
                    />
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <img
                      src="/images/products/email-cover.png"
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

    <section className="pt-16 sm:pt-24 md:pt-28 lg:pt-32 dark:bg-dark">
  <div
    className="container relative w-full overflow-hidden rounded-2xl bg-black p-6 text-white sm:rounded-3xl sm:p-12 md:p-16 lg:rounded-[2rem] lg:p-24">
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

    <div
      className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
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
          <button className="ai-button">Get Started ,</button>
        </div>
      </div>

      <div className="w-full lg:w-1/2"></div>
    </div>

    <div
      className="absolute bottom-[-24px] right-[-15px] w-[300px] sm:bottom-[-36px] sm:right-[-20px] sm:w-[400px] md:bottom-[-48px] md:right-[-30px] md:w-[350px] lg:w-[650px]">
      <div
        className="modern-image-mask rounded-tl-[15px] border-l border-t border-white border-opacity-30 bg-white/20 p-2 sm:rounded-tl-[20px] sm:p-3 md:rounded-tl-[30px] md:p-4">
        <img
          src="/images/hero/email-cover2.png"
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
