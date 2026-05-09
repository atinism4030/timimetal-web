"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/utils/Partners";
const duplicatedPartners = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="relative py-24 bg-[#F7F8FA] overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">

            <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

            <span className="text-[11px] uppercase tracking-[0.22em] text-[#3BA9FF] font-semibold">
              Partnerët Tanë
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1]">
            Our Partners
          </h2>
        </motion.div>
      </div>

      {/* SLIDER */}
      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F8FA] to-transparent z-20 pointer-events-none" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F8FA] to-transparent z-20 pointer-events-none" />

        {/* TRACK */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-max"
        >

          {duplicatedPartners.map((partner, index) => (

            <div
              key={index}
              className="group relative flex-shrink-0 w-[220px] h-[120px] bg-white rounded-[28px] border border-black/5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700 overflow-hidden flex items-center justify-center px-8"
            >

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3BA9FF]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

              {/* LOGO */}
              <Image
                src={partner.logo}
                alt="Partner Logo"
                width={140}
                height={70}
                className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;