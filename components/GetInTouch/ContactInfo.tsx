"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  value: string;
  index: number;
}

export function ContactInfo({ icon: Icon, title, value, index }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 py-6 border-b border-gray-200 last:border-0 hover:bg-white transition-colors duration-500 cursor-pointer -mx-4 px-4 sm:-mx-6 sm:px-6"
    >
      {/* Icon container */}
      <div className="shrink-0 text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2 font-semibold">
          {title}
        </p>
        <p className="text-gray-900 text-lg md:text-xl font-light tracking-tight break-words">
          {value}
        </p>
      </div>

      {/* Hover indicator */}
      <div className="hidden md:block opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500 text-gray-300 font-light text-2xl">
        →
      </div>
    </motion.div>
  );
}
