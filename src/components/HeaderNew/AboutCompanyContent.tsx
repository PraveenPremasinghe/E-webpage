import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutCompanySection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Set animation to start when component mounts
    setIsInView(true);
  }, []);

  return (
    <div className="relative overflow-hidden w-full   dark:bg-gray-900   flex items-center justify-center">
      {/* Background abstract elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - CEO Image with animations */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: isInView ? 0 : -100,
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-xl shadow-lg">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800">
                <img
                  src="/api/placeholder/600/600"
                  alt="Asanka Ediriweera, CEO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-8 border-primary opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>

          {/* Right side - CEO Message with staggered animations */}
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-2 text-primary bg-clip-text text-transparent">
                Asanka Ediriweera
              </h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center"
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
              <div className="absolute -top-12 -left-4 text-7xl text-primary opacity-20 font-serif">❝</div>

              <p className="text-xl md:text-2xl text-center text-gray-800 dark:text-gray-200 leading-1-7 relative z-10">
                Our mission is to transform how businesses leverage technology for growth and innovation. We believe in
                creating solutions that not only solve today &lsquo;s challenges but anticipate tomorrow &lsquo;s opportunities.
              </p>

              <div className="absolute -bottom-12 -right-4 text-7xl text-primary opacity-20 font-serif">❞</div>
            </motion.div>
  </div>

            <motion.div
              className="mt-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <motion.button
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Meet the team</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>


              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
