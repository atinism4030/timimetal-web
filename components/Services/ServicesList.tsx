"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MdRoofing,
  MdSolarPower,
  MdEngineering,
  MdOutlineHomeWork,
} from "react-icons/md";
import { GiBeamWake } from "react-icons/gi";
import { TbCarCrane } from "react-icons/tb";
import { useTranslations } from "next-intl";

interface Service {
  title: string;
  descOpen: string;
  icon: React.ReactNode;
}

const ServicesList: React.FC = () => {
  const t = useTranslations("ServicesList");

  const services: Service[] = [
    {
      title: t("engineering.title"),
      descOpen: t("engineering.description"),
      icon: <MdEngineering size={36} className="text-gray-500" />,
    },
    {
      title: t("metalConstruction.title"),
      descOpen: t("metalConstruction.description"),
      icon: <GiBeamWake size={36} className="text-gray-500" />,
    },
    {
      title: t("lgs.title"),
      descOpen: t("lgs.description"),
      icon: <MdOutlineHomeWork size={36} className="text-gray-500" />,
    },
    {
      title: t("roofsFacades.title"),
      descOpen: t("roofsFacades.description"),
      icon: <MdRoofing size={36} className="text-gray-500" />,
    },
    {
      title: t("craneServices.title"),
      descOpen: t("craneServices.description"),
      icon: <TbCarCrane size={36} className="text-gray-500" />,
    },
    {
      title: t("photovoltaic.title"),
      descOpen: t("photovoltaic.description"),
      icon: <MdSolarPower size={36} className="text-gray-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="group relative bg-[#fafafa] hover:bg-white border border-gray-100 px-10 py-12 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] cursor-default overflow-hidden"
        >
          <div className="mb-10 text-gray-900 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 origin-left">
            {service.icon}
          </div>

          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            {service.title}
          </h3>

          <p className="text-gray-500 leading-relaxed font-light text-sm">
            {service.descOpen}
          </p>

          {/* Hover indicator effect */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-700 ease-in-out" />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;