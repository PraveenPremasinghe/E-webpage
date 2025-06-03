import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/ShinyButton";
import { useRouter } from "next/navigation";

export default function AboutCompanySection() {
  const [isInView, setIsInView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set animation to start when component mounts
    setIsInView(true);
  }, []);

  const navigateAboutus = () => {
    router.push("/about");
    window.scrollTo(0, 0);
  };

  return (

    <div className="relative flex w-full items-center justify-center overflow-hidden dark:bg-gray-900">
  <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl w-full">

        {/* Left Side: Image + Name + Title */}
        <div className="flex flex-col items-center md:items-center w-full md:w-1/2 space-y-6 text-center">
  {/* CEO Image */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: isInView ? 0 : -50,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
    <div className="relative aspect-square w-48 md:w-64 overflow-hidden rounded-full">
      <img
        src="/images/clientLogo/CEO 4.webp"
        alt="Asanka Ediriweera, CEO"
        className="h-full w-full object-cover"
      />
    </div>
  </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#a12266] to-[#e94b8b] bg-clip-text text-transparent md:text-4xl lg:text-5xl">
      Asanka Ediriweera
    </h2>
    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
      Founder & CEO, Edhirya IT
    </p>
    <a
      href="https://linkedin.com/in/asankaediriweera"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    >
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
      LinkedIn Profile
    </a>
  </motion.div>
</div>

        {/* Right Side: CEO Message */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="space-y-6 text-center md:text-center text-gray-800 dark:text-gray-200">
            <p className="text-xl font-semibold md:text-2xl">
              CEO Message – Edhirya IT
            </p>
            <p className="text-lg md:text-xl">
              We started building business solutions before smartphones were in everyone&apos;s hands—before 3G even reached most parts of the world.
            </p>
            <p className="text-lg md:text-xl">
              Back then, innovation meant finding a way when nothing existed yet. That same mindset drives us today.
            </p>
            <p className="text-lg md:text-xl">
              At Edhirya, we help businesses break through growth barriers—not with off-the-shelf software, but with purpose-built systems that adapt, assist, and evolve. Whether you're limited by your current tech, launching something new, or ready to scale—we're here.
            </p>
            <p className="text-lg md:text-xl">
              Our mission is to transform how businesses leverage technology for growth and innovation.
            </p>
            <p className="text-lg font-semibold md:text-xl">
              We don&apos;t just solve today&apos;s problems—we anticipate tomorrow&apos;s.
            </p>
            <p className="text-lg md:text-xl">
              Let&apos;s build what your business truly needs.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <PrimaryButton
              dotColor="bg-primary"
              textColor="text-primary"
              hoverTextColor="text-white"
              backgroundColor="bg-[#a122661a]"
              borderColor="border-pink-800"
              onClick={navigateAboutus}
            >
              About Company
            </PrimaryButton>
          </div>
        </motion.div>

      </div>
    </div>
  </div>
</div>


  );
}
