"use client"; // If you're using Next.js 13+ app router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

import SingleClient2 from "./SingleClient2";
import { clientsData } from "./clientsData2";
import SectionTitle from "@/components/Common/SectionTitle";

const OurClient = () => {
  return (
    <section className="pt-10 pb-10 sm:pt-18 sm:pb-18 md:pt-24 md:pb-12 bg-white">
<div className="container">
       <SectionTitle
         subtitle="Powering Innovation Across Industries"
         title="Trusted by Industry Leaders Around the World"
         paragraph=" "
       />

   <div className="container px-4 mt-8 sm:mt-12   relative overflow-hidden">
  {/* Masked Swiper container */}
     <div className="swiper-mask">
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView={5}
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
        1024: { slidesPerView: 6 },
      }}
    >
      {clientsData.map((client, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center">
            <SingleClient2 client={client} />
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

export default OurClient;
