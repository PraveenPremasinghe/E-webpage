'use client';

import SectionTitle from '../Common/SectionTitle';
import { WeOfferCard, weOfferData } from './weOfferData';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { PinContainer } from '../ui/3d-pin';
import { WobbleCard } from '@/components/ui/wobble-card';

const WeOffer = () => {
  return (
    <section className="we-offer-section-bg pt-10 pb-10 sm:pt-18 sm:pb-18 md:pt-24 md:pb-24">
  <div className="container ">
        <SectionTitle
          subtitle="Our Expertise"
          title="Smarter Solutions for Digital Growth"
          paragraph="From AI-powered ERP platforms to full-cycle product development, we deliver scalable technology solutions tailored for startups, SMEs, and enterprises."
        />


        <div className=' mt-14 px-4 sm:px-0'>
          <div className='wow fadeInUp' data-wow-delay='.2s'>
           <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8'>
  {/* First Card */}
             <WobbleCard
               containerClassName='col-span-1 lg:col-span-1 h-full bg-pink-800 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[300px]'>
    <div className='max-w-xs'>
      <h2
        className='text-balance text-left text-lg font-semibold tracking-[-0.015em] text-white sm:text-xl md:text-2xl lg:text-3xl'>
        Industry-Focused Digital Solutions
      </h2>
      <p className='mt-3 text-left text-sm/6 text-neutral-200 sm:mt-4 sm:text-base/6'>
        A modular, AI-driven ERP system designed for adaptability
        across industries. From CRM and inventory to budgeting and
        project management – scalable, secure, and built to grow
        with you.
      </p>
    </div>
    <div className='w-10'>
      <img
        src='/images/products/Industry-img.png'
        alt='linear demo image'
        className='absolute -bottom-8 h-full w-full rounded-2xl object-contain sm:bottom-[3rem] md:-bottom-12 lg:-right-[55%]'
      />
    </div>
    <button
      type='submit'
      className='text-sm group relative isolation-auto z-10 mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-3 py-1.5 shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 sm:mt-6 sm:px-4 sm:py-2 sm:text-base md:text-md lg:font-semibold'
    >
      Get started
      <svg
        className='h-5 w-5 rotate-45 justify-end rounded-full border border-gray-700 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 sm:h-6 sm:w-6 sm:p-2 md:h-7 md:w-7'
        viewBox='0 0 16 19'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
          className='fill-gray-800 group-hover:fill-gray-800'
        />
      </svg>
    </button>
  </WobbleCard>

             {/* Second Card */}
             <WobbleCard
               containerClassName='col-span-1 h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[300px]'>
    <div className='max-w-xs'>
      <h2
        className='max-w-80 text-balance text-left text-lg font-semibold tracking-[-0.015em] text-white sm:text-xl md:text-2xl lg:text-3xl'>
        Strategic Technology Services
      </h2>
      <p className='mt-3 text-left text-sm/6 text-neutral-200 sm:mt-4 sm:text-base/6'>
        End-to-end product development, technology strategy, and
        digital transformation — built for startups, SMEs, and
        enterprise teams.
      </p>
    </div>
    <div className='w-10'>
      <img
        src='/images/products/statgi.png'
        alt='linear demo image'
        className='absolute -bottom-6 -right-4 h-full w-full rounded-2xl object-contain sm:-bottom-8 lg:-right-[55%]'
      />
    </div>
    <button
      type='submit'
      className='text-sm group relative isolation-auto z-10 mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-3 py-1.5 shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 sm:mt-6 sm:px-4 sm:py-2 sm:text-base md:text-md lg:font-semibold'
    >
      Get started
      <svg
        className='h-5 w-5 rotate-45 justify-end rounded-full border border-gray-700 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 sm:h-6 sm:w-6 sm:p-2 md:h-7 md:w-7'
        viewBox='0 0 16 19'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
          className='fill-gray-800 group-hover:fill-gray-800'
        />
      </svg>
    </button>
  </WobbleCard>

             {/* Third Card */}
             <WobbleCard
               containerClassName='col-span-1 lg:col-span-2 bg-blue-900 min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[400px] xl:min-h-[300px]'>
    <div className='max-w-sm'>
      <h2
        className='max-w-sm text-balance text-left text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl md:max-w-lg md:text-3xl lg:text-4xl'>
        Actogo ERP Platform
      </h2>
      <p className='mt-3 max-w-[20rem] text-left text-sm/6 text-white sm:mt-4 sm:max-w-[26rem] sm:text-base/6'>
        Transform your business with cutting-edge artificial
        intelligence and machine learning technologies.
      </p>
    </div>
    <div className='w-10'>
      <img
        src='/images/products/accto-img.png'
        alt='linear demo image'
        className='absolute -bottom-6 -right-6 h-full w-full rounded-2xl object-contain sm:-bottom-8 sm:-right-8 md:-right-[40%] lg:-right-[40%]'
      />
    </div>
    <button
      type='submit'
      className='text-sm group relative isolation-auto z-10 mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-3 py-1.5 shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 sm:mt-6 sm:px-4 sm:py-2 sm:text-base md:text-md lg:font-semibold'
    >
      Get started
      <svg
        className='h-5 w-5 rotate-45 justify-end rounded-full border border-gray-700 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 sm:h-6 sm:w-6 sm:p-2 md:h-7 md:w-7'
        viewBox='0 0 16 19'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z'
          className='fill-gray-800 group-hover:fill-gray-800'
        />
      </svg>
    </button>
  </WobbleCard>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
