import Image from 'next/image';
import Link from 'next/link';



import { FlipWords } from '@/components/ui/lip-words';
import { AnimatedBeamDemo } from "@/components/ui/animated-beam";

const Hero = () => {
  const words = ['smarter', 'faster', 'scalable', 'secure'];

  return (
    <>
      <section id="home" className="hero-section min-h-screen w-full bg-white relative">

        <div className=" w-full h-full sm:px-6 lg:px-32 hero-content ">
          <div className="flex h-full flex-col items-center justify-between gap-8 py-12 md:py-16 lg:flex-row lg:py-20">
            {/* Left side - Title and content */}
            <div className="flex  flex-col justify-center space-y-6 lg:w-2/3 ">
              <div className="glassmorphism-effect w-fit h-fit  p-10">
                <h1
                  className="text-6xl font-normal tracking-tight text-white dark:text-neutral-400 md:text-6xl lg:text-8xl">
                  Build <FlipWords words={words} />
                </h1>

                <h1
                  className="text-6xl font-normal tracking-tight text-white dark:text-neutral-400 md:text-6xl lg:text-8xl">
                  digital solutions
                </h1>
                <p className="mt-3 max-w-sm text-lg text-white md:mt-10 md:max-w-lg md:text-lg lg:text-xl">
                  A compelling subheading that explains your value proposition
                  in clear terms.
                </p>
                 <div>
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
              </div>
              </div>


            </div>

            <div className="flex w-full items-center justify-center lg:w-1/2 ">

              {/*<AnimatedBeamDemo/>*/}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
