"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { IProject } from "@/utils/types";

export default function ProjectCard({ project }: { project: IProject }) {
  const handleViewDetails = (id: string) => {
    window.location.href = `/projects/${id}`;
  };
  console.log({ project });


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative h-full cursor-pointer"
    >
      <div className="relative h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-[#00008B]/50 via-[#3BA9FF]/40 to-[#00008B]/30 shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00008B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

          {/* IMAGE */}
          <div className="relative h-72 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              {/* IMAGE */}
              <Image
                width={500}
                height={500}
                src={project?.image}
                alt={project?.title!}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-60" />

            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-[#00008B]/30 group-hover:border-[#00008B]/60 transition-all duration-300"
            >
              {/* ICON */}
              {/* <project.icon className="w-6 h-6 text-[#00008B]" /> */}
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00008B] to-transparent opacity-70" />
          </div>

          {/* CONTENT */}
          <div className="p-7 flex-1 flex flex-col relative">
            <div className="absolute top-0 left-7 right-7 h-[1px] bg-gradient-to-r from-transparent via-[#3BA9FF]/30 to-transparent" />

            <h3 className="mb-4 text-[#0a0e1a] tracking-tight leading-tight">
              {project?.title}
            </h3>

            {/* DATE + LOCATION */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/20">
                <svg className="w-3.5 h-3.5 text-[#3BA9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs text-[#5A6675]">{project?.date}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/20">
                <svg className="w-3.5 h-3.5 text-[#3BA9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-[#5A6675]">{project?.location}</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#5A6675] leading-relaxed flex-1">
              {project?.description}
            </p>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E8F3FF]">
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-[#00008B]/40" />
                <div className="w-1 h-1 rounded-full bg-[#00008B]/70" />
                <div className="w-1 h-1 rounded-full bg-[#00008B]" />
              </div>

              <div
                onClick={() => handleViewDetails(project?.id)}
                className="text-xs tracking-wider text-[#00008B]/60 group-hover:text-[#00008B] transition-colors duration-300 uppercase"
              >
                View Details →
              </div>
            </div>
          </div>

          {/* CORNER ACCENTS */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00008B]/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00008B]/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3BA9FF]/20 via-[#6FB7FF]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}
