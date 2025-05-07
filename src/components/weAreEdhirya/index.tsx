"use client";


import { WorldMap } from "@/components/ui/world-map";

const WeAreEdhirya = () => {
  return (


    <>
    <div className="relative mt-32 h-[400px]">
        <section className="edhirya-card  inset-0 z-10 flex items-center justify-center ">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 border-y-2 pb-20 pt-14">
            <div className="flex flex-col gap-3">
              <span className="home-banner-title-sub text-2xl font-medium text-dark dark:text-white">
                We are ,
              </span>
              <span className="home-banner-title-main text-center text-2xl font-medium leading-tight text-dark dark:text-white">
                <span className="logo-text-color">
                  <span className="logo-text-second-color">[e]</span>dhirya
                </span>
                <span className="logo-text-second-color"> IT.</span>
              </span>
            </div>
          </div>
        </section>
        <div className=" ">
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>


    </>


  );
};

export default WeAreEdhirya;
