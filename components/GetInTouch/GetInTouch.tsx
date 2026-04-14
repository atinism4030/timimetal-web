"use client";
import React from 'react'
import { ContactInfo } from './ContactInfo'
import RequestQuote from './RequestQuote'
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "E65 Tetovo MK, 1200",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+389 70 209 553",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@timimetal.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
  },
];

const GetInTouch = () => {
  return (
    <div className='bg-[#fafafa] py-24 md:py-32 px-6 lg:px-20 top-border'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='pb-16 text-center max-w-4xl mx-auto'>
          <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6">
            Get In <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">Touch</span>
          </h2>
          <div className="h-[1px] w-24 bg-gray-300 mx-auto mb-8" />
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
            Ready to start your project? Contact us for a free consultation and quote.
            Our expert team is here to bring your vision to life.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 items-start w-full relative'>
          {/* Decorative Divider */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-[50%]" />

          <div className="flex flex-col gap-10 w-full lg:w-1/2 lg:pr-12">
            <div>
              <h3 className="text-2xl font-medium mb-10 text-gray-900">Contact Information</h3>
              <div className="flex flex-col gap-8">
                {contactDetails.map((details, index) => (
                  <ContactInfo
                    key={index}
                    icon={details.icon}
                    title={details.title}
                    value={details.value}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12 flex justify-center lg:justify-start">
            <div className="w-full bg-white p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <RequestQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch