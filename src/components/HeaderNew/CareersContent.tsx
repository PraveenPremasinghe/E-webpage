"use client"

import { useState } from "react"
import { ChevronDown, Clock, Globe, DollarSign, Heart } from "lucide-react"

export default function CareersSection() {
  const [activeFilter, setActiveFilter] = useState("All Roles")

  const filters = ["All Roles", "Remote", "Department"]

  const jobs = [
    {
      title: "Field Sales",
      type: "Full-time",
      location: "Emeryville / On-site",
      category: "Sales",
    },
    {
      title: "Front-end Development",
      type: "Freelancer",
      location: "Emeryville / Remote",
      category: "Engineering",
    },
    {
      title: "UI/UX Designer",
      type: "Part-time",
      location: "Emeryville / Remote",
      category: "Design",
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Emeryville / Remote",
      category: "Engineering",
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Emeryville / On-site",
      category: "Product",
    },
    {
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Emeryville / Remote",
      category: "Marketing",
    },
  ]

  // Filter jobs based on active filter
  const filteredJobs = jobs.filter((job) => {
    if (activeFilter === "All Roles") return true
    if (activeFilter === "Remote") return job.location.includes("Remote")
    if (activeFilter === "Department") return true // In a real app, this would open a department selector
    return true
  })

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Working Hours",
      description:
        "Our families and lives outside of our jobs are very important to us; our schedules are flexible to reflect and support that.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Remote First",
      description:
        "Most of our team are based outside of the Bay Area. We do ask that your workday overlaps with Pacific Time for at least four hours.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Compensation",
      description:
        "Everyone at Edhirya IT makes $207,264 USD, regardless of location. (Some sales positions have a lower base salary and contain a commission component.)",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Premium Healthcare",
      description:
        "We offer the best medical PPO, dental, and vision plans we can find and cover 100% of premiums for employees and dependents.",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 ">
        <div className="inline-block px-3 py-1 bg-pink-100 text-primary rounded-full text-sm  mb-4">Career</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 ">Work With Us</h1>

        {/* Filters */}
        {/*<div className="flex justify-between items-center">*/}
        {/*  <div className="flex space-x-2">*/}
        {/*    {filters.map((filter) => (*/}
        {/*      <button*/}
        {/*        key={filter}*/}
        {/*        onClick={() => setActiveFilter(filter)}*/}
        {/*        className={`px-4 py-2 rounded-full text-sm ${*/}
        {/*          activeFilter === filter*/}
        {/*            ? "bg-black text-white"*/}
        {/*            : "bg-white text-black border border-gray-200 hover:bg-gray-50"*/}
        {/*        }`}*/}
        {/*      >*/}
        {/*        {filter}*/}
        {/*      </button>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*  <div className="relative">*/}
        {/*    <button className="flex items-center px-4 py-2 border border-gray-200 rounded-full text-sm">*/}
        {/*      Filter by*/}
        {/*      <ChevronDown className="ml-2 h-4 w-4" />*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      {/* Job Listings */}
      {/*<div className="mb-16">*/}
      {/*  {filteredJobs.map((job, index) => (*/}
      {/*    <div*/}
      {/*      key={index}*/}
      {/*      className="border-t border-gray-200 py-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"*/}
      {/*    >*/}
      {/*      <h3 className="text-xl font-medium">{job.title}</h3>*/}
      {/*      <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0">*/}
      {/*        <span className="text-gray-600 md:mr-8">{job.type}</span>*/}
      {/*        <span className="text-gray-600">{job.location}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/* Benefits Section */}
      {/*<div className="mt-24">*/}
      {/*  <h2 className="text-3xl font-bold mb-12 text-center">Our Perks and Benefits</h2>*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">*/}
      {/*    {benefits.map((benefit, index) => (*/}
      {/*      <div key={index} className="flex">*/}
      {/*        <div className="mr-4 mt-1">{benefit.icon}</div>*/}
      {/*        <div>*/}
      {/*          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>*/}
      {/*          <p className="text-gray-600">{benefit.description}</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to join our team?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We&apos;re always looking for talented individuals who are passionate about technology and innovation.
        </p>
        <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-gray-800 transition-colors">
          Apply Now
        </button>
      </div>
      {/* Application Process */}
      {/*<div className="mt-14">*/}
      {/*  <h2 className="text-2xl font-bold mb-10 text-center">Our Application Process</h2>*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
      {/*    <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">*/}
      {/*      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">*/}
      {/*        1*/}
      {/*      </div>*/}
      {/*      <h3 className="font-bold text-lg mb-3 mt-4 text-center">Send us your application</h3>*/}
      {/*      <p className="text-gray-600 text-center">*/}
      {/*        Upload your CV through the form provided. We're an equal opportunity employer and are committed to*/}
      {/*        creating an inclusive environment for everyone.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">*/}
      {/*      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">*/}
      {/*        2*/}
      {/*      </div>*/}
      {/*      <h3 className="font-bold text-lg mb-3 mt-4 text-center">We shortlist applications</h3>*/}
      {/*      <p className="text-gray-600 text-center">*/}
      {/*        If shortlisted, we will contact you to schedule an aptitude test. If you're not shortlisted, we will still*/}
      {/*        keep your application and match it with future openings.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">*/}
      {/*      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">*/}
      {/*        3*/}
      {/*      </div>*/}
      {/*      <h3 className="font-bold text-lg mb-3 mt-4 text-center">Let's talk</h3>*/}
      {/*      <p className="text-gray-600 text-center">Excel at the aptitude test and we will schedule two rounds of interviews.</p>*/}
      {/*    </div>*/}

      {/*    <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">*/}
      {/*      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">*/}
      {/*        4*/}
      {/*      </div>*/}
      {/*      <h3 className="font-bold text-lg mb-3 mt-4 text-center">Join us</h3>*/}
      {/*      <p className="text-gray-600 text-center">*/}
      {/*        You will receive an offer of employment. Accept it, and you officially become a part of Edhirya IT.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}


    </div>
  )
}
