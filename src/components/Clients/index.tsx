import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marqueeSlider";
import { clientsData } from "@/components/Clients/clientsData";
import { SwiperSlide } from "swiper/react";
import SingleClient from "@/components/Clients/SingleClient";



export default function MainClient() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
       {clientsData.map((client, i) => (
         <div key={i}>
          <div className="flex items-center justify-center">
            <SingleClient client={client} />
          </div>
        </div>
       ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
