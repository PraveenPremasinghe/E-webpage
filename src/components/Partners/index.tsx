"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

import SinglePartners from "./SinglePartners";
import { partnersData } from "./PartnersData";
import SectionTitle from "@/components/Common/SectionTitle";

const Partners = () => {
  return (
    <section className=" dark:bg-dark we-offer-section-bg">
<div className="container backdrop-blur-lg p-16 ">
 <SectionTitle
   subtitle="Partner With Us"
   title="Our Technology Partners"
   paragraph="We collaborate with leading global tech platforms."
 />



      <div className="container px-4 mt-[3rem]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={4}
          spaceBetween={10}
          speed={8000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {partnersData.map((client, i) => (
            <SwiperSlide key={i}>
          <div className="flex items-center justify-center">
    <SinglePartners client={client} />
  </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
</div>
    </section>
  );
};

export default Partners;
