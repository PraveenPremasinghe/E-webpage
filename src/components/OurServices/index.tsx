"use client";

import SectionTitle from "../Common/SectionTitle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import {
  servicesCard,
  servicesData,
} from "@/components/OurServices/OurServicesData";
import { PinContainer } from "@/components/ui/3d-pin";

const OurServices = () => {
  return (
    <section className="service-section-bg pt-10 sm:pt-24 md:pt-32 dark:bg-dark">
      <div className="container">
        <SectionTitle
          subtitle="Our Services"
          title="Technology Expertise That Drives Results"
          paragraph="From strategic consulting to custom software and ERP implementation — we help you build, scale, and succeed with confidence."
        />

        <div className="container mt-14">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 grid gap-12 md:grid-cols-3">
              {servicesData.map((card: servicesCard, index) => (
                <div key={index} className=" w-full">
                  {" "}
                  {/* Square container */}
                  <PinContainer
                    title={card.title}
                    href={card.href}
                    containerClassName="w-full h-full"
                  >
                    <div
                      className={`group relative flex h-full flex-col overflow-hidden rounded-xl p-6 transition-all duration-300 ${
                        card.className ||
                        "bg-gradient-to-br from-gray-900 to-black"
                      }`}
                    >
                      <div className="absolute inset-0 z-0 bg-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>

                      {card.image && (
                        <div
                          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                            card.iconBgColor || "bg-gray-500"
                          } transition-all duration-300 group-hover:scale-110`}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      )}

                      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        {card.title}{" "}
                      </h3>

                      <p className="mb-6 line-clamp-3 flex-grow text-gray-600 dark:text-gray-300">
                        {card.content}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          0{index + 1}
                        </span>
                        <span className="text-primary-500 text-sm font-medium ">
                          Get In Touch →
                        </span>
                      </div>
                    </div>
                  </PinContainer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
