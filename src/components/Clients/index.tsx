"use client"; // If you're using Next.js 13+ app router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";
import SectionTitle from "@/components/Common/SectionTitle";

const Clients = () => {
  return (
    <section className="sm:pt-24 md:pt-24 dark:bg-dark">
<div className="container">
       <SectionTitle
         subtitle="Powering Innovation Across Industries"
         title="Trusted by Industry Leaders Around the World"
         paragraph=" "
       />

   <div className="container px-4 sm:pt-24 md:pt-24 md:pb-24 relative overflow-hidden">
  {/* Masked Swiper container */}
     <div className="swiper-mask">
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView={4}
      spaceBetween={30}
      speed={15000}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {clientsData.map((client, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center">
            <SingleClient client={client} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
</div>
    </section>
  );
};

export default Clients;
