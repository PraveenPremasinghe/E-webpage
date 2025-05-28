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
    <div className="relative flex w-full   items-center   justify-center overflow-hidden dark:bg-gray-900">
      {/* Background abstract elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary blur-3xl filter"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-indigo-500 blur-3xl filter"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16">
          {/* Left side - CEO Image with animations */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: isInView ? 0 : -100,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg md:aspect-auto md:h-[500px]">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800">
                <img
                  src="/api/placeholder/600/600"
                  alt="Asanka Ediriweera, CEO"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full border-8 border-primary opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>

          {/* Right side - CEO Message with staggered animations */}
          <motion.div
            className="w-full p-4 sm:p-6 md:w-1/2 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="mb-2 bg-clip-text text-center text-3xl font-bold text-primary text-transparent md:text-4xl lg:text-5xl">
                Asanka Ediriweera
              </h2>
              <motion.p
                className="mb-6 text-center text-lg text-gray-600 dark:text-gray-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Chief Executive Officer
              </motion.p>
            </motion.div>

            <div className="py-10">
              <motion.div
                className="relative "
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: isInView ? 0 : 40, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Quote marks */}
                <div className="absolute -left-4 -top-12 font-serif text-7xl text-primary opacity-20">
                  ❝
                </div>

                <p className="leading-1-7 relative z-10 text-center text-xl text-gray-800 dark:text-gray-200 md:text-2xl">
                  Our mission is to transform how businesses leverage technology
                  for growth and innovation. We believe in creating solutions
                  that not only solve today&apos;s challenges but anticipate
                  tomorrow&apos;s opportunities.
                </p>

                <div className="absolute -bottom-12 -right-4 font-serif text-7xl text-primary opacity-20">
                  ❞
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton
                  dotColor="bg-primary"
                  textColor="text-primary"
                  hoverTextColor="text-white"
                  backgroundColor="bg-[#a122661a]"
                  borderColor="border-pink-800"
                  onClick={navigateAboutus}
                >
                  Meet the team
                </PrimaryButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
