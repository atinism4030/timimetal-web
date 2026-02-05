"use client"
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  value: string;
  index: number;
}

export function ContactInfo({ icon: Icon, title, value, index }: ContactInfoProps) {
  return (
   <div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 6, scale: 1.02 }}
      className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-[#F3F7FF] to-white border border-[#00008B]/20 hover:border-[#00008B]/50 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Icon container with premium metallic effect */}
      <div className="relative shrink-0">
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#00008B]/10 to-[#3BA9FF]/5 border border-[#00008B]/30 group-hover:from-[#00008B]/20 group-hover:to-[#3BA9FF]/10 group-hover:border-[#00008B]/60 transition-all duration-300 shadow-sm">
          {/* <Icon className="w-5 h-5 text-[#00008B] drop-shadow-[0_0_8px_rgba(0,0,139,0.4)]" /> */}
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-xl bg-[#00008B]/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[#5A6675] mb-1.5 tracking-wide">{title}</p>
        <p className="text-[#0a0e1a] break-words">{value}</p>
      </div>

      {/* Accent indicator */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-[#00008B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
   </div> 
  );
}
