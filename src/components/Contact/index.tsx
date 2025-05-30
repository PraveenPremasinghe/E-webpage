"use client"

import type React from "react"

import { useState } from "react"
import { Headset, Navigation, Phone, MapPin } from "lucide-react"
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (

    <div className="py-24 px-4 sm:px-6 lg:px-8  bg-primary">
      {/* Main Card Container */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3 p-6 bg-[#a12266]/10">
  <h2 className="text-3xl font-bold text-gray-900 pb-5 text-center">Contact Us</h2>

            {/* Cards Container */}
            <div className="grid grid-cols-1 gap-6">
    {/* Support Card */}
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-start space-x-4 flex-grow">
        <div className="w-10 h-10 rounded-full bg-[#a12266]/10 flex items-center justify-center flex-shrink-0">
          <Headset className="h-5 w-5 text-[#a12266]" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Chat to support</h3>
          <p className="text-gray-600 text-sm mb-4">We&apos;re here to help with any technical questions.</p>
          <a
            href="mailto:support@edhirya.com"
            className="inline-flex items-center text-[#a12266] hover:text-[#a12266] font-medium transition-colors group mt-auto"
          >
            support@edhirya.com
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>

              {/* Visit Us Card */}
    {/*          <div className="bg-white rounded-2xl p-6 h-full flex flex-col">*/}
    {/*  <div className="flex items-start space-x-4 flex-grow">*/}
    {/*    <div className="w-10 h-10 rounded-full bg-[#a12266]/10 flex items-center justify-center flex-shrink-0">*/}
    {/*      <Navigation className="h-5 w-5 text-[#a12266]" />*/}
    {/*    </div>*/}
    {/*    <div className="flex-1">*/}
    {/*      <h3 className="font-bold text-lg mb-2">Visit us</h3>*/}
    {/*      <p className="text-gray-600 text-sm mb-4">Visit our office headquarters in person.</p>*/}
    {/*      <a*/}
    {/*        href="https://maps.google.com"*/}
    {/*        target="_blank"*/}
    {/*        rel="noopener noreferrer"*/}
    {/*        className="inline-flex items-center text-[#a12266] hover:text-[#a12266] font-medium transition-colors group mt-auto"*/}
    {/*      >*/}
    {/*        View on Google Maps*/}
    {/*        <svg*/}
    {/*          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"*/}
    {/*          fill="none"*/}
    {/*          viewBox="0 0 24 24"*/}
    {/*          stroke="currentColor"*/}
    {/*        >*/}
    {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
    {/*        </svg>*/}
    {/*      </a>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}

              {/* Call Us Card */}
    {/*          <div className="bg-white rounded-2xl p-6 h-full flex flex-col">*/}
    {/*  <div className="flex items-start space-x-4 flex-grow">*/}
    {/*    <div className="w-10 h-10 rounded-full bg-[#a12266]/10 flex items-center justify-center flex-shrink-0">*/}
    {/*      <Phone className="h-5 w-5 text-[#a12266]" />*/}
    {/*    </div>*/}
    {/*    <div className="flex-1">*/}
    {/*      <h3 className="font-bold text-lg mb-2">Call us</h3>*/}
    {/*      <p className="text-gray-600 text-sm mb-4">Mon-Fri from 8am to 5pm for phone support.</p>*/}
    {/*      <a*/}
    {/*        href="tel:+94112786007"*/}
    {/*        className="inline-flex items-center text-[#a12266] hover:text-[#a12266] font-medium transition-colors group mt-auto"*/}
    {/*      >*/}
    {/*        +94 112 786 007*/}
    {/*        <svg*/}
    {/*          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"*/}
    {/*          fill="none"*/}
    {/*          viewBox="0 0 24 24"*/}
    {/*          stroke="currentColor"*/}
    {/*        >*/}
    {/*          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
    {/*        </svg>*/}
    {/*      </a>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}

              {/* Offices Section */}
              <div className="bg-white rounded-2xl p-6">
      <h3 className="font-bold text-xl mb-6 text-gray-800">Our Offices</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#2196f3]/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-[#2196f3]" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Sri Lanka Office</h3>
            <p className="text-gray-600 text-sm">
              No 426/25, Welipara,
              <br />
              Thalawathugoda, Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-[#2196f3]/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-[#2196f3]" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">UK Office</h3>
            <p className="text-gray-600 text-sm">
              34 Parsons Hill,
              <br />
              Birmingham, B68 9BX,
              <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p className="text-gray-500 mb-6">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

            {isSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg text-green-700 text-center border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-green-600">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#a12266]  focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#a12266] focus:border-transparent"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#a12266] focus:border-transparent"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#a12266] focus:border-transparent"
                    placeholder="Your message"
                    rows={5}
                    required
                  ></textarea>
                </div>


                <button

                  type="submit"
                  className="group relative isolation-auto z-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-pink-700 px-6 py-3 text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-black before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700"
                >
                  <span className="text-sm md:text-base font-medium">Send Now</span>
                  <svg
                    className="h-6 w-6 rotate-45 rounded-full border border-gray-100 p-1.5 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-100 group-hover:fill-gray-700"
                    />
                  </svg>
                </button>


              </form>
              )}
          </div>
        </div>
      </div>
    </div>

  )
}
