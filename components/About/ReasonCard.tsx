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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = reason.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group h-full"
    >
      <div className="relative h-full bg-white rounded-3xl p-10 border border-[#E5E7EB] hover:border-[#2563EB] transition-all duration-500 hover:shadow-[#2563EB]/15 hover:-translate-y-3 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F3F6FB] via-white to[##8F0FE] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#60A5FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }
            }
            transition={{
              duration: 0.7,
              delay: index * 0.08 + 0.2,
              type: "spring",
              bounce: 0.4,
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[#2563EB]/30">
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>
          <div className="flex-1">
            <h3 className="text-[#1E3A8A] mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
              {reason.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {reason.description}
            </p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.08 + 0.4 }}
            className="h-1 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB] rounded-full origin-left mt-auto"
          />
        </div>
        <motion.div
          className="absolute -top-2 -left-1 w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReasonCard;
