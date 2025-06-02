import MarqueeDemo  from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import WeOffer from "@/components/weOffer";
import Partners from "@/components/Partners";
import ActogoERP from "@/components/ActogoERP";
import Platform from "@/components/Platform";
import IndustrySolutionsSection from "@/components/TailoredSolution";
import React from "react";
import OurClient from "@/components/Clients/index2";
import SmoothScroll from "@/components/ui/SmoothScroll";


export const metadata: Metadata = {
  title: "Edhirya IT - Crafting the Future of Digital Innovation",
  description:
    "Edhirya IT empowers businesses with cutting-edge digital solutions. From SaaS platforms to customized IT services, we help you innovate, scale, and lead the future. Explore our futuristic, minimalistic technologies designed for the modern world.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (

    <main className="bg-zinc-50">

      <ScrollUp />
      <Hero />
      {/*<AIBot/>*/}
      <OurClient />
      {/*<ContactModal/>*/}
      <Platform />
      <IndustrySolutionsSection />
      <Features />
      {/*<OurServices/>*/}
      <WeOffer />
      {/*<About />*/}
      <ActogoERP />
      <Contact />
      {/*<Partners />*/}
      {/*<CallToAction />*/}
      {/*<Pricing />*/}
      {/*<Testimonials />*/}
      {/*<Faq />*/}
      {/*<Team />*/}
      {/*<HomeBlogSection posts={posts} />*/}

    </main>

  );
}
