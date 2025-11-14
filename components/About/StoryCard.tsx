"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";


export default function StoryCard({ story, index }: { story: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = story.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${story.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: story.reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: story.reverse ? 50 : -50 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
      >
        <div className="relative rounded-2xl overflow-hidden group">
          <Image 
          src={story.image}
          width={400}
          height={400}
            alt={story.title}
             className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/30 to-transparent" />
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-2xl mb-6"
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </motion.div>

        <motion.h2
          className="text-[#1E3A8A] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          {story.title}
        </motion.h2>

        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {story.description}
        </motion.p>
      </div>
    </motion.div>
  );
}
