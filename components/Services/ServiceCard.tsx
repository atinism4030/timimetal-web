"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definimi i tipit të shërbimit
interface Service {
  title: string;
  desc: string;
  descOpen: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  onNext: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isActive, onClick, onNext }) => {
  return (
    <motion.div
      layout
      whileHover={!isActive ? { scale: 1.04, y: -3 } : {}}
      transition={{
        layout: { type: "spring", duration: 0.8, bounce: 0.25 },
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      // Përmasat e reja, më të mëdha
      className={`relative bg-white border border-gray-200 shadow-xl rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-700 ease-in-out flex flex-col hover:shadow-2xl ${
        isActive ? "h-[340px]" : "h-[240px]" // Kartë e mbyllur më e madhe
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-4">
          {/* Ikona */}
          <motion.div
            layoutId={`icon-${service.title}`}
            className="bg-blue-50 w-14 h-14 flex justify-center items-center rounded-xl shadow-inner flex-shrink-0"
          >
            {service.icon}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 drop-shadow-sm line-clamp-2">
            {service.title}
          </h2>
        </div>
        
        {/* Butoni "✕" ose "⋮" */}
        {isActive ? (
            <motion.button
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
                className="text-gray-400 hover:text-black text-2xl"
            >
                ✕
            </motion.button>
        ) : (
            <div className="text-gray-400 text-3xl select-none">⋮</div>
        )}
      </div>

      {/* Përshkrimi i shkurtër */}
      <p className="mt-4 text-gray-700 text-lg relative z-10">
        {service.desc}
      </p>

      {/* Përmbajtja kur hapet */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-6 space-y-4 text-gray-700 overflow-y-auto pr-4 flex-grow relative z-10"
          >
            <p className="font-semibold text-black mb-3">Detajet e Shërbimit:</p>
            <p className="text-base leading-relaxed">{service.descOpen}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Butoni Next/Arrow */}
      {isActive && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-6 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-gray-800 transition-all duration-300 z-20"
        >
          →
        </motion.button>
      )}
    </motion.div>
  );
};

export default ServiceCard;