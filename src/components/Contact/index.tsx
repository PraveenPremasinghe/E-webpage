"use client"

import type React from "react"

import { useState } from "react"
import { Headset, Navigation, Phone, MapPin } from "lucide-react"

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
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Card Container */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3 bg-gray-50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact US</h2>

            {/* Support Card */}
            <div className="mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#9c27b0]/10 flex items-center justify-center flex-shrink-0">
                  <Headset className="h-5 w-5 text-[#9c27b0]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Chat to support</h3>
                  <p className="text-gray-600 text-sm mb-2">We're here to help with any technical questions.</p>
                  <a
                    href="mailto:support@edhirya.com"
                    className="inline-flex items-center text-[#9c27b0] hover:text-[#7b1fa2] font-medium transition-colors group"
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
            <div className="mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#4caf50]/10 flex items-center justify-center flex-shrink-0">
                  <Navigation className="h-5 w-5 text-[#4caf50]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Visit us</h3>
                  <p className="text-gray-600 text-sm mb-2">Visit our office headquarters in person.</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4caf50] hover:text-[#388e3c] font-medium transition-colors group"
                  >
                    View on Google Maps
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

            {/* Call Us Card */}
            <div className="mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#ff9800]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#ff9800]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Call us</h3>
                  <p className="text-gray-600 text-sm mb-2">Mon-Fri from 8am to 5pm for phone support.</p>
                  <a
                    href="tel:+94112786007"
                    className="inline-flex items-center text-[#ff9800] hover:text-[#f57c00] font-medium transition-colors group"
                  >
                    +94 112 786 007
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

            {/* Offices */}
            <div>
              <h3 className="font-bold text-xl mb-4 text-gray-800">Our Offices</h3>
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

          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
            <p className="text-gray-500 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

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
                <p className="text-green-600">Thank you for reaching out. We'll get back to you as soon as possible.</p>
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2  focus:border-transparent"
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#e91e63] focus:border-transparent"
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#e91e63] focus:border-transparent"
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#e91e63] focus:border-transparent"
                    placeholder="Your message"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#212121] hover:bg-[#424242] text-white font-medium rounded-lg transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
