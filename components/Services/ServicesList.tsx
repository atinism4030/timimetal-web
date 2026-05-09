"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArchitecture, MdRoofing, MdSolarPower,MdEngineering ,MdOutlineHomeWork} from "react-icons/md";
import { TbSolarPanel2 } from "react-icons/tb";
import { GiBeamWake } from "react-icons/gi";
import { TbWaveSawTool, TbCarCrane } from "react-icons/tb";

interface Service {
  title: string;
  descOpen: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Inxhinieri dhe Projektim Strukturor",
    descOpen:
      "Zgjidhje inovative dhe të sakta inxhinierike të zhvilluara për të transformuar konceptet arkitekturore në struktura funksionale, të sigurta dhe të qëndrueshme me standarde të larta profesionale.",
    icon: <MdEngineering size={36} className="text-gray-500" />,
  },
  {
    title: "Konstruksione Metalike",
    descOpen:
      "Realizim i strukturave moderne metalike me fokus në qëndrueshmëri, precizitet dhe funksionalitet, të përshtatura për projekte industriale, komerciale dhe rezidenciale me standarde të avancuara ndërtimi.",
    icon: <GiBeamWake size={36} className="text-gray-500" />,
  },
  {
    title: "Ndërtim me LGS",
    descOpen:
      "Sisteme moderne ndërtimi me çelik të lehtë që ofrojnë efikasitet të lartë, izolim superior dhe realizim të shpejtë, duke kombinuar teknologjinë bashkëkohore me qëndrueshmërinë afatgjatë.",
    icon: <MdOutlineHomeWork size={36} className="text-gray-500" />,
  },
  {
    title: "Kulme dhe Fasada Metalike",
    descOpen:
      "Zgjidhje moderne për mbulim dhe fasada metalike që kombinojnë estetikën arkitekturore, mbrojtjen afatgjatë dhe performancën e lartë për objekte industriale dhe komerciale",
    icon: <MdRoofing size={36} className="text-gray-500" />,
  },
  {
    title: "Shërbime me Kran",
    descOpen:
      "Ofrim i zgjidhjeve profesionale për ngritje dhe montim me kranë, duke garantuar siguri maksimale, precizitet operacional dhe efikasitet në realizimin e projekteve ndërtimore dhe industriale.",
    icon: <TbCarCrane size={36} className="text-gray-500" />,
  },
  {
    title: "Sisteme Fotovoltaike",
    descOpen:
      "Zgjidhje moderne për energji të rinovueshme të projektuara për efikasitet maksimal, kursim energjie dhe performancë afatgjatë, duke integruar teknologji të avancuar për një të ardhme më të qëndrueshme.",
    icon: <MdSolarPower size={36} className="text-gray-500" />,
  },
];

const ServicesList: React.FC = () => {
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
