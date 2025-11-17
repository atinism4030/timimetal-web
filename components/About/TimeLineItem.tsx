import { milestones } from "@/utils/milestone";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";
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
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isEven = index % 2 === 0;
  return (
    <div ref={ref} className="relative">
      {/* desktopejshen */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${isEven ? "text-right" : "order-2"}`}
        >
          {isEven && (
            <div className="pr-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-end gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#60A5FA] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[#2563EB]">{milestone.year}</span>
                </div>
                <h3 className="text-[#1E3A8A] mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            </div>
          )}
        </motion.div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full bg-gradient-to-b from-[#2563EB] to-[#60A5FA]"
            />
          )}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
          className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:flex"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-white">{index + 1}</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 50 : -50 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${!isEven ? "text-left" : "order-1"}`}
        >
          {!isEven && (
            <div className="pl-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inlinde-block bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#60A5FA] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[#2563EB]">{milestone.year}</span>
                </div>
                <h3 className="text-[#1E3A8A] mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
      {/* Natellejshen */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden relative pl-12">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] to-[#60A5FA]" />
                <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute left-0 top-4 w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
        >
          <span className="text-white">{index + 1}</span>
        </motion.div>
        <div className="bg-white rounded-2xl p-6 mb-8 border border-[#E5E7EB] hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-[#60A5FA] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-[#2563EB]">{milestone.year}</span>
          </div>
          <h3 className="text-[#1E3A8A] mb-2">{milestone.title}</h3>
          <p className="text-gray-600">{milestone.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLineItem;
