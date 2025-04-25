"use client";

import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { OurJourneyTimeline } from "@/components/OurJourney";
import ProductCard from "@/components/ProductCard";
import productDetailsHeader from "@/components/ProductCard/ProductDetailsHeader";
import ProductDetailsHeader from "@/components/ProductCard/ProductDetailsHeader";

const productDetails = () => {


  return (
    <main>
      <Breadcrumb pageName="Product" />

      {/* Navigation Bar */}
      <nav className="sticky top-[90px] z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
          <Link
            href="/"
            className="group flex items-center text-sm font-medium text-primary transition-all hover:text-indigo-700 dark:text-primary dark:hover:text-indigo-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>


        </div>
      </nav>


   <ProductDetailsHeader />

 <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
     <section id="overview" className="pb-16 pt-12">
       <ProductCard/>
     </section>
 </div>


    </main>
  );
};

export default productDetails;
