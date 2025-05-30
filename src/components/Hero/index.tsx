import { FlipWords } from "@/components/ui/lip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import MainClient from "@/components/Clients";
import React from "react";


const Hero = () => {
  const words = ["Smarter", "Faster", "Scalable", "Secure"];


  return (
    <>
      <section className="hero-section relative min-h-screen w-full bg-white">
        <div className="flex h-screen w-full  flex-col lg:flex-row">
          {/* Left side - Red background */}
          {/* Left side - Red background */}
          <div className="hero-glassmorphism-effect flex w-full items-center justify-center md:w-2/5 ">
            <div className="relative flex h-screen w-full flex-col">
              {/* Full-screen SparklesCore with gradients */}
              <div className="absolute inset-0 h-full w-full">
                {/* Full-screen SparklesCore */}
                <SparklesCore
                  background="transparent"
                  minSize={0.2}
                  maxSize={0.7}
                  particleDensity={2000}
                  className="h-full w-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient */}
                <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(500px_500px_at_center,transparent_20%,white)]"></div>
              </div>

              {/* Content container - centered */}
              <div className="relative flex flex-1 flex-col items-center justify-center">
                <div className="mt-8 rounded-lg p-8">
                  <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Build <FlipWords words={words} />
                  </h1>
                  <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    digital solutions
                  </h1>

                  <p className="mt-3 text-lg text-white md:mt-10 md:text-lg lg:text-xl">
                    A compelling subheading that explains your value proposition
                    in clear terms.
                  </p>
                  <button


                    type="submit"
                    className="text-md group relative mt-7 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white bg-pink-700 px-4 py-2 text-white shadow-xl hover:bg-pink-800"
                  >
                    Let&apos;s Talk
                    <svg
                      className="h-7 w-7 rotate-45 rounded-full border border-white p-2 text-white duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-white group-hover:text-pink-700"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* MainClient at the bottom */}
              <div className="relative pb-2">
                <div className="mb-3 ml-6 text-center text-lg font-medium text-white">
                  Powering the world’s most forward-thinking companies.
                </div>
                <div className="swiper-mask">
                  <MainClient />
                </div>
              </div>

              <div>
                {/* Gradients */}
                <div className="inset-x-30 absolute bottom-0 h-[6px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                <div className="inset-x-30 absolute bottom-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                <div className="bottom-0bg-gradient-to-r absolute inset-x-60 h-[9px] w-1/4 from-transparent via-sky-500 to-transparent blur-sm" />
                <div className="inset-x-70 absolute bottom-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right side - Blue background */}
          <div className="hero-section-right _relation_1lgfw_11 flex  w-3/5 ">
            <div className="  "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
