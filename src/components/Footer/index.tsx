import Link from 'next/link'
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react'
import Image from "next/image";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 px-4 py-12 text-white sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-12 mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center">
              <div className="flex items-center">
                <div className=" max-w-full">
                  <Link href="/" className="navbar-logo block w-full py-5">
                    <Image
                      src="/images/logo/edhirya-it-logo-bg.jpg"
                      alt="Edhirya IT Logo"
                      width={200}
                      height={30}
                      className="header-logo w-full"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mb-6 text-sm text-white">
              Innovative IT solutions tailored to your business needs.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-white"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-white"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-white"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* By Industry Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              BY INDUSTRY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* What We Offer Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              WHAT WE OFFER
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  AI & ML Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Empower Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              WHO WE EMPOWER
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Startups
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  SMEs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Enterprises
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Non-profits
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Government
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-300">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white transition-colors duration-200 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Chatbase Text */}
        <div className="border-t border-gray-800 ">
          <div className="text-center">
            <h2 className="select-none text-6xl font-bold text-pink-200 sm:text-7xl md:text-8xl lg:text-[11rem]">
                <TextHoverEffect text="[E]dhirya IT." />
            </h2>
            <div>    <p className="text-base text-gray-7">
                  Designed and Developed by{" "}
              <Link
                href=" "
                rel="nofollow noopner noreferrer"
                target="_blank"
                className="text-gray-1 hover:underline"
              >
                      © 2024 Edhirtya IT.
                  </Link>
                </p></div>
          </div>
        </div>




      </div>
    </footer>
  );
}

export default Footer
