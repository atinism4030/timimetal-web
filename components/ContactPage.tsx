"use client"
import React from 'react'
import { motion } from "motion/react";
import { ContactInfo } from './GetInTouch/ContactInfo';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@timimetal.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "1234 Industrial Blvd, Manufacturing District, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 8:00 AM - 6:00 PM"
    }
  ];

const ContactPage = () => {
  return (
    <div>
           <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white via-[#F3F7FF] to-white border-t-2 border-[#E8F3FF]">
        {/* Background effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#3BA9FF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6FB7FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Section Divider with glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00008B] to-transparent shadow-[0_0_20px_rgba(0,0,139,0.4)]" />
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-50%] right-[-50%] h-full">
            <div className="absolute top-0 left-[10%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[25%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[40%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/10 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[55%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/7 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[70%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/8 to-transparent rotate-[15deg] origin-top" />
            <div className="absolute top-0 left-[85%] w-px h-[200%] bg-gradient-to-b from-transparent via-[#3BA9FF]/6 to-transparent rotate-[15deg] origin-top" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Section Header - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3BA9FF]/20 to-[#6FB7FF]/20 border-2 border-[#00008B]/50 backdrop-blur-sm shadow-xl"
              >
                <span className="text-base text-[#00008B] tracking-[0.25em] uppercase">Get In Touch</span>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 bg-gradient-to-r from-[#00008B] via-[#0a0e1a] to-[#00008B] bg-clip-text text-transparent">
                Contact Us
              </h1>
              <div className="w-32 h-2 mx-auto bg-gradient-to-r from-[#00008B] via-[#3BA9FF] to-[#00008B] rounded-full shadow-[0_0_30px_rgba(0,0,139,0.5)]" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#5A6675] max-w-3xl mx-auto leading-relaxed text-xl"
            >
              Ready to bring your project to life? Reach out to our team of metal fabrication experts.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-[#0a0e1a] mb-8">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfo
                    key={index}
                    {...info}
                    index={index}
                  />
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#E8F3FF] to-white border border-[#3BA9FF]/15 shadow-sm">
                <p className="text-sm text-[#5A6675] leading-relaxed">
                  For urgent project inquiries or technical support, please call our 24/7 emergency hotline or use the quote request form.
                </p>
              </div>
            </div>

            {/* Quote Request Form */}
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage