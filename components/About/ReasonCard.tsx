import { reasons } from "@/utils/WhyUsReason";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const ReasonCard = ({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const Icon = reason.icon;

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
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >

      {/* CARD */}
      <div className="relative h-full overflow-hidden bg-white rounded-[32px] border border-black/5 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">

        {/* HOVER EFFECT */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#3BA9FF]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          initial={false}
        />

        {/* TOP LINE */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

        {/* GLOW */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#3BA9FF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col h-full">

          {/* NUMBER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.08 + 0.2,
            }}
            className="absolute top-0 right-0 text-[#3BA9FF]/10 text-6xl font-bold tracking-tight"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* ICON */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView
                ? { scale: 1, opacity: 1 }
                : { scale: 0.8, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.08 + 0.2,
            }}
            className="mb-8"
          >

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">

              <Icon
                className="w-10 h-10 text-white"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="flex-1">

            {/* TITLE */}
            <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] leading-tight mb-5 group-hover:text-[#3BA9FF] transition-colors duration-300">
              {reason.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed text-lg">
              {reason.description}
            </p>
          </div>

          {/* BOTTOM LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={
              isInView
                ? { scaleX: 1 }
                : { scaleX: 0 }
            }
            transition={{
              duration: 0.8,
              delay: index * 0.08 + 0.4,
            }}
            className="h-[2px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-transparent origin-left mt-8"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ReasonCard;