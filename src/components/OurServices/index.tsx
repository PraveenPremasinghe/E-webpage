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
          subtitle="Solutions by Industry"
          title="Technology Expertise That Drives Results"
          paragraph="From strategic consulting to custom software and ERP implementation — we help you build, scale, and succeed with confidence."
        />

        <div className="container mt-14">
          <div className="wow fadeInUp" data-wow-delay=".2s">
           <div className="-mx-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
  {servicesData.map((card: servicesCard, index) => (
    <div key={index} className="w-full">
      <PinContainer
        title={card.title}
        href={card.href}
        containerClassName="w-full h-full"
      >
        <div
          className={`group relative flex h-full flex-col overflow-hidden rounded-xl p-6 transition-all duration-300 ${
            card.className || "bg-gradient-to-br from-gray-900 to-black"
          } hover:bg-pink-800 dark:hover:bg-indigo-600`} // Added hover background colors
        >
          {card.icon && (
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                card.iconBgColor || "bg-gray-500"
              } transition-all duration-300 group-hover:scale-110 group-hover:bg-white`} // Added hover bg color for icon
            >
              <div
                className="text-gray-900 dark:text-white w-6 h-6 group-hover:text-indigo-600"> {/* Added hover text color for icon */}
                {card.icon}
              </div>
            </div>
          )}

          <h3
            className="mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-white"> {/* Added hover text color */}
            {card.title}{" "}
          </h3>

          <p
            className="mb-6 line-clamp-3 flex-grow text-gray-600 dark:text-gray-300 group-hover:text-gray-200"> {/* Added hover text color */}
            {card.content}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs text-gray-400 group-hover:text-gray-200"> {/* Added hover text color */}
              0{index + 1}
            </span>
            <span
              className="text-primary-500 text-sm font-medium group-hover:text-white"> {/* Added hover text color */}
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
