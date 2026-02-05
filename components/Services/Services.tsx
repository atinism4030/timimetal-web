"use client";
import React from "react";
import ServicesList from "./ServicesList";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="bg-white text-black flex flex-col items-center justify-center py-20 px-10 transition-all duration-700">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
      >
        Our Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 text-xl text-center max-w-3xl leading-relaxed mb-8"
      >
        Comprehensive metal construction solutions from design to completion,
        backed by decades of expertise and state-of-the-art technology.
      </motion.p>

      <ServicesList />
    </section>
  );
};

export default Services;