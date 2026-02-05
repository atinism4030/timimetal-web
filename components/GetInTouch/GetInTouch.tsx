"use client";
import React from 'react'
import { ContactInfo } from './ContactInfo'
import RequestQuote from './RequestQuote'
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Industrial Park, City, Country",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
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
    <div className='bg-gray-100 py-16 md:py-24 px-4'>
      <div className='pb-12 text-center'>
        <h2 className="text-black text-4xl md:text-6xl font-bold pb-5">Get In Touch</h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">Ready to start your project? Contact us for a free consultation and quote. Our expert team is here to bring your vision to life.</p>
      </div>

      <div className='text-black flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 items-start w-full max-w-7xl mx-auto'>
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
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
        <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
          <RequestQuote />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch