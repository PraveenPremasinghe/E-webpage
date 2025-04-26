"use client";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

const AIBot = () => {
  return (
    <section className="pt-32 dark:bg-dark">
<div className="container">
       <SectionTitle
         subtitle="Powering Innovation Across Industries"
         title="Our Smart Accto Brain"
         paragraph=" "
       />

      <section
        id="about"
        className="pt-32 dark:bg-dark-2"
      >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-full lg:w-2/3">
              <div className="h-[400px] mx-10">
                <img
                  src='/images/products/email-cover.png'
                  alt="Actogo ERP"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3">
              <div className="  lg:mb-0">
                <h2
                  className="mb-5 text-3xl font-medium brand-color-text leading-tight dark:text-white sm:text-[28px] sm:leading-[1.2]">
                 Actogo  #Edhirya IT’s flagship ERP platform
                </h2>
                <p className="mb-10 text-base font-light leading-relaxed text-body-color dark:text-dark-6">
                  Actogo is Edhirya IT’s flagship ERP platform — a powerful,
                  AI-powered solution that helps businesses orchestrate
                  operations, automate workflows, and unlock actionable
                  insights. Inspired by platforms like Odoo but designed with
                  adaptability at its core, Actogo supports full customization
                  and rapid deployment.
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    </section>
  );
};

export default AIBot;
