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
    <section className='pt-32 dark:bg-dark  '>
      <div className="">
        <SectionTitle
          subtitle='Who We Are ?'
          title='We are on a Mission to
Digitalize all critical Business Operations'
          paragraph='Our vast experience leveraged to solve your problems – across verticals.'
        />

        <div className='container pt-20'>
          <div className='wow fadeInUp' data-wow-delay='.2s'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-4 lg:w-1/2'>
                <div className='mb-12 max-w-[540px] lg:mb-0'>
                  <h1 className='mb-5 text-5xl font-medium leading-tight text-dark dark:text-white'>
                    About
                    <span className='font-semibold text-primary'>
                      #Edhirya IT
                    </span>
                  </h1>
                  <h2 className='text-1xl mb-5 font-medium leading-tight text-dark dark:text-white sm:text-[30px] sm:leading-[1.5]'>
                    &quot; Over the years we’ve developed sophisticated tools,
                    platforms and digital products with cutting edge technology
                    and helped grow businesses rapidly. It’s a well known fact
                    that through automation, a business would run having minimum
                    staff and investment and also risks. Well this isn’t a
                    constant outcome and that’s why our . &quot;
                  </h2>

                  {/*<p className='mb-10 text-base leading-relaxed text-body-color dark:text-dark-6'>*/}
                  {/*  Over the years we’ve developed sophisticated tools, platforms and digital products with cutting edge technology and helped grow businesses rapidly. It’s a well known fact that through automation, a business would run having minimum staff and investment and also risks. Well this isn’t a constant outcome and that’s why our team with the right tools, will analyse your business and develop the bet suited tools and management systems for a great compatibility.*/}
                  {/*</p>*/}

                  <div className='flex justify-center'>
                    <Link
                      href='#'
                      className='inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90'
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className='w-full lg:w-1/2'>
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
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
                  className='mySwiper'
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <img
                      src='/images/products/email-cover.png'
                      alt='Slide 1'
                      className='h-full w-full rounded-xl object-cover shadow-md'
                    />
                  </SwiperSlide>

                  {/* Slide 2 */}
                  <SwiperSlide>
                    <img
                      src='/images/products/email-cover.png'
                      alt='Slide 2'
                      className='h-full w-full rounded-xl object-cover shadow-md'
                    />
                  </SwiperSlide>

                  {/* Add more slides as needed */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <section className='edhirya-card  pt-32'>
          <div className='flex flex-col items-center gap-4 border-y-2 pb-20 pt-14 '>
            <div className='flex flex-col '>
              <span className='home-banner-title-sub ml-[-3.25rem] text-2xl font-medium   text-dark dark:text-white sm:ml-[-10.25rem]'>
                We are ,
              </span>
              <span className='home-banner-title-main text-center text-2xl font-medium leading-tight text-dark dark:text-white'>
                <span className='logo-text-color'>
                  <span className='logo-text-second-color'>[e]</span>dhirya
                </span>
                <span className='logo-text-second-color'> IT.</span>
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className='pt-32 dark:bg-dark'>
        <div
          className='container relative w-full overflow-hidden rounded-[2rem] bg-black p-6
 text-white sm:p-24'
        >
          <img
            src='/images/glows/glow-vector.png'
            alt='Glow Effect'
            className='pointer-events-none absolute right-[-100px] top-[-100px] z-0 w-[1000px] opacity-50 md:w-[1000px]'
          />

          {/* Bottom-left Warm Vector */}
          <img
            src='/images/glows/warm-vector.png'
            alt='Warm Vector'
            className='pointer-events-none absolute bottom-[-100px] left-[-100px] z-0 w-[1200px] opacity-60 md:w-[1200px]'
          />

          {/* Noise Overlay */}
          <div className='absolute inset-0 z-0 opacity-50 mix-blend-soft-light'>
            <img
              src='/images/glows/noise-wide.png'
              alt='Noise'
              className='h-full w-full object-cover'
            />
          </div>

          <div className='relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center'>
            {/* Text Section */}
            <div className='w-full lg:w-1/2'>
              <div className='w-[300px]'>
                <img
                  src='/images/logo/edhirya-it-logo.webp'
                  alt='AI Brain'
                  className='h-auto w-full object-contain'
                />
              </div>
              <h3 className='mt-6 text-2xl font-semibold text-white md:text-3xl'>
                Revolutionizing AI Solutions
              </h3>
              <p className='mt-3 text-base text-gray-300 md:text-lg'>
                Discover our innovative AI brain technology that’s shaping
                industries through intelligent automation and smarter systems.
              </p>
              <div className='mt-10'>
                <button className='ai-button'>Get Started ,</button>
              </div>
            </div>

            <div className='w-full lg:w-1/2'></div>
          </div>

          <div className='absolute bottom-[-48px] right-[-30px] w-[600px] md:w-[350px] lg:w-[650px] '>
            <div className='modern-image-mask rounded-tl-[30px] border-l border-t border-white border-opacity-30 bg-white/20 p-4'>
              <img
                src='/images/hero/email-cover2.png'
                alt='AI Brain'
                className='h-auto w-full object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
