"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { IProject } from "@/utils/types";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const projectCardTexts = {
  sq: {
    viewDetails: "Shiko Detajet",
  },
  en: {
    viewDetails: "View Details",
  },
  mk: {
    viewDetails: "Погледни детали",
  },
  de: {
    viewDetails: "Details ansehen",
  },
};

export default function ProjectCard({ project }: { project: IProject }) {
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const t = projectCardTexts[currentLocale];

  const handleViewDetails = (id: string) => {
    window.location.href = `/${currentLocale}/projects/${id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1 * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full cursor-pointer"
    >
      {/* OUTER */}
      <div className="relative h-full rounded-[30px] p-[1.5px] bg-gradient-to-br from-[#00008B]/40 via-[#3BA9FF]/30 to-[#00008B]/20 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.12)] group-hover:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.18)] transition-all duration-700">
        {/* CARD */}
        <div className="relative h-full bg-white rounded-[30px] overflow-hidden flex flex-col">
          {/* HOVER EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3BA9FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          {/* IMAGE */}
          <div className="relative h-72 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                width={500}
                height={500}
                src={project?.image || "/placeholder.jpg"}
                alt={project?.title!}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

            {/* CATEGORY */}
            <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg">
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#111111]">
                {project?.category}
              </span>
            </div>

            {/* BOTTOM LINE */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent opacity-70" />
          </div>

          {/* CONTENT */}
          <div className="p-7 flex-1 flex flex-col relative">
            {/* TOP LINE */}
            <div className="absolute top-0 left-7 right-7 h-[1px] bg-gradient-to-r from-transparent via-[#3BA9FF]/30 to-transparent" />

            {/* TITLE */}
            <h3 className="mb-4 text-[#0a0e1a] text-3xl font-semibold tracking-[-0.04em] leading-tight group-hover:text-[#3BA9FF] transition-colors duration-500">
              {project?.title}
            </h3>

            {/* META */}
            <div className="flex flex-wrap gap-2 mb-5">
              {/* DATE */}
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/20">
                <svg
                  className="w-3.5 h-3.5 text-[#3BA9FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <span className="text-xs text-[#5A6675]">
                  {project?.date}
                </span>
              </div>

              {/* LOCATION */}
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/20">
                <svg
                  className="w-3.5 h-3.5 text-[#3BA9FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="text-xs text-[#5A6675]">
                  {project?.location}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#5A6675] leading-relaxed flex-1 line-clamp-4">
              {project?.description}
            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-[#E8F3FF]">
              {/* DOTS */}
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00008B]/40" />

                <div className="w-1.5 h-1.5 rounded-full bg-[#00008B]/70" />

                <div className="w-1.5 h-1.5 rounded-full bg-[#00008B]" />
              </div>

              {/* BUTTON */}
              <div
                onClick={() => handleViewDetails(project?.id)}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#00008B]/60 group-hover:text-[#00008B] transition-colors duration-300 uppercase font-semibold"
              >
                {t.viewDetails}

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </div>

          {/* CORNER ACCENTS */}
          <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-[#00008B]/15 rounded-tl-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-[#00008B]/15 rounded-br-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#3BA9FF]/20 via-[#6FB7FF]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}