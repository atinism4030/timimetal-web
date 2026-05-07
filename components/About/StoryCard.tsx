"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function StoryCard({
  story,
  index,
}: {
  story: any;
  index: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const Icon = story.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 50 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className={`flex flex-col ${
        story.reverse
          ? "lg:flex-row-reverse"
          : "lg:flex-row"
      } gap-10 lg:gap-20 items-center`}
    >

      {/* IMAGE */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{
          opacity: 0,
          x: story.reverse ? 50 : -50,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : {
                opacity: 0,
                x: story.reverse ? 50 : -50,
              }
        }
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.2,
        }}
      >

        <div className="group relative overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.1)]">

          {/* HOVER EFFECT */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* IMAGE */}
          <div className="relative overflow-hidden">

            <Image
              src={story.image}
              width={700}
              height={700}
              alt={story.title}
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* YEAR */}
            <div className="absolute top-6 left-6 px-5 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg">

              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#111111]">
                Timimetal Legacy
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">

        {/* ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.3,
          }}
          className="mb-8"
        >

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-lg group-hover:scale-110 transition-all duration-500">

            <Icon
              className="w-10 h-10 text-white"
              strokeWidth={1.5}
            />
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.4,
          }}
        >
          {story.title}
        </motion.h2>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 100 } : { width: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.45,
          }}
          className="h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mb-8"
        />

        {/* DESCRIPTION */}
        <motion.p
          className="text-gray-500 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.5,
          }}
        >
          {story.description}
        </motion.p>
      </div>
    </motion.div>
  );
}