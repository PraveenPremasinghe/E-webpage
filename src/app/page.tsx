import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import WeOffer from "@/components/weOffer";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import AIBot from "@/components/AIBot";
import ActogoERP from "@/components/ActogoERP";
import Platform from "@/components/Platform";
import IndustrySolutionsSection from "@/components/TailoredSolution";
import { HeroUIProvider } from "@heroui/react";
import ContactModal from "@/components/HeaderNew/test";
import React from "react";

export const metadata: Metadata = {
  title: "Edhirya IT - Crafting the Future of Digital Innovation",
  description:
    "Edhirya IT empowers businesses with cutting-edge digital solutions. From SaaS platforms to customized IT services, we help you innovate, scale, and lead the future. Explore our futuristic, minimalistic technologies designed for the modern world.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="bg-zinc-50">
      <HeroUIProvider>
        <ScrollUp />
        <Hero />
        {/*<AIBot/>*/}
        <Clients />
        {/*<ContactModal/>*/}
        <Platform />
        <IndustrySolutionsSection />
        <Features />
        {/*<OurServices/>*/}
        <WeOffer />

        {/*<About />*/}
        <ActogoERP />
        <Partners />
        {/*<CallToAction />*/}
        {/*<Pricing />*/}
        {/*<Testimonials />*/}
        {/*<Faq />*/}
        {/*<Team />*/}
        {/*<HomeBlogSection posts={posts} />*/}
        <Contact />
      </HeroUIProvider>
    </main>
  );
}
