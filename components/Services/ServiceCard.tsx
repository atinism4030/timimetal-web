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
    <div
      onClick={onClick}
      className={`relative bg-white border border-gray-200 rounded-xl p-8 cursor-pointer overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-lg ${isActive ? "h-auto ring-1 ring-blue-500 shadow-xl" : "h-[240px]"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="bg-blue-50 w-14 h-14 flex justify-center items-center rounded-lg text-blue-600 shadow-sm border border-blue-100">
            {service.icon}
          </div>
          <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
            {service.title}
          </h2>
        </div>

        {/* Toggle Icon */}
        <div className="text-gray-400">
          {isActive ? "✕" : "⋮"}
        </div>
      </div>

      {/* Short Description */}
      <p className="mt-2 text-gray-600 text-base leading-relaxed relative z-10">
        {service.desc}
      </p>

      {/* Expanded Content - Simple Fade In */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 pt-4 border-t border-gray-100 text-gray-600 overflow-hidden"
          >
            <p className="font-semibold text-gray-900 mb-2 text-sm">Service Details</p>
            <p className="text-sm leading-relaxed">{service.descOpen}</p>

            {/* Next Button inside expanded area */}
            <div className="flex justify-end mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="p-2 rounded-full hover:bg-gray-100/80 text-blue-600 transition-colors flex items-center gap-2 text-sm font-semibold"
              >
                Next Service →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;