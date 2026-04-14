"use client";
import React from "react";
import ServicesList from "./ServicesList";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="bg-white text-black flex flex-col items-center justify-center py-24 md:py-32 px-6 lg:px-20 relative border-b border-gray-100">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-400 mb-6"
            >
              Our Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.05]"
            >
              Comprehensive <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">Engineering</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="w-16 h-[1px] bg-gray-300 hidden lg:block" />
            <p className="text-gray-500 text-lg lg:text-xl max-w-lg leading-relaxed font-light">
              Delivering advanced metal construction solutions from initial design through to completion, backed by structural integrity and cutting-edge operational technology.
            </p>
          </motion.div>
        </div>
        
        <ServicesList />
      </div>
    </section>
  );
};

export default Services;