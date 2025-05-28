"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

import SinglePartners from "./SinglePartners";
import { partnersData } from "./PartnersData";
import SectionTitle from "@/components/Common/SectionTitle";
import { clientsData } from "@/components/Clients/clientsData";
import SingleClient from "@/components/Clients/SingleClient";

const Partners = () => {
  return (
    <section className="dark:bg-dark sm:pt-24 md:pt-24">
      <div className="container">
        <SectionTitle
          subtitle="Partner With Us"
          title="Our Technology Partners"
          paragraph="We collaborate with leading global tech platforms."
        />

        <div className="container relative overflow-hidden px-4 sm:pt-24 md:pb-24 md:pt-24">
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
      </div>
    </section>
  );
};

export default Partners;
