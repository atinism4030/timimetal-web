"use client";

import { milestones } from "@/utils/milestone";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import React, { useRef } from "react";

const TimeLineItem = ({
  milestone,
  index,
  isLast,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">

      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center relative">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -50 : 50 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className={isEven ? "pr-14 text-right" : ""}
        >

          {isEven && (

            <div className="relative group">

              {/* CARD */}
              <div className="relative overflow-hidden bg-white rounded-[30px] border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

                <div className="relative z-10">

                  {/* YEAR */}
                  <div className="flex items-center justify-end gap-3 mb-5">

                    <Calendar className="w-5 h-5 text-[#3BA9FF]" />

                    <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                      {milestone.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] mb-4">
                    {milestone.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">

          {!isLast && (

            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-transparent"
            />
          )}
        </div>

        {/* TIMELINE DOT */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            type: "spring",
          }}
          className="absolute left-1/2 top-10 -translate-x-1/2 z-20 hidden lg:flex"
        >

          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#3BA9FF]/30 blur-2xl rounded-full" />

            {/* CIRCLE */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] border-[6px] border-white shadow-2xl flex items-center justify-center">

              <span className="text-white font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 50 : -50 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className={!isEven ? "pl-14" : ""}
        >

          {!isEven && (

            <div className="relative group">

              {/* CARD */}
              <div className="relative overflow-hidden bg-white rounded-[30px] border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">

                {/* HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

                <div className="relative z-10">

                  {/* YEAR */}
                  <div className="flex items-center gap-3 mb-5">

                    <Calendar className="w-5 h-5 text-[#3BA9FF]" />

                    <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                      {milestone.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] mb-4">
                    {milestone.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* MOBILE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -30 }
        }
        transition={{ duration: 0.6 }}
        className="lg:hidden relative pl-16"
      >

        {/* LINE */}
        {!isLast && (
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-transparent" />
        )}

        {/* DOT */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="absolute left-0 top-6"
        >

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] border-4 border-white shadow-xl flex items-center justify-center">

            <span className="text-white text-sm font-semibold">
              {index + 1}
            </span>
          </div>
        </motion.div>

        {/* CARD */}
        <div className="group relative overflow-hidden bg-white rounded-[28px] border border-black/5 p-7 mb-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)]">

          {/* HOVER */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

          <div className="relative z-10">

            {/* YEAR */}
            <div className="flex items-center gap-3 mb-5">

              <Calendar className="w-5 h-5 text-[#3BA9FF]" />

              <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                {milestone.year}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-[#111111] text-2xl font-semibold tracking-tight mb-4">
              {milestone.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLineItem;