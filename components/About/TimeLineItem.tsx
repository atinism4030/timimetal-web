"use client";

import { milestones } from "@/utils/milestone";
import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const milestoneTexts = {
  sq: {
    1: {
      title: "Fillimi i Timimetal",
      description:
        "Timimetal filloi rrugëtimin e saj me vizion të qartë për të ndërtuar struktura të forta, të sigurta dhe profesionale.",
    },
    2: {
      title: "Zgjerimi i Kapaciteteve",
      description:
        "Me rritjen e kërkesave të tregut, kompania zgjeroi kapacitetet teknike dhe ekipin profesional për projekte më të mëdha.",
    },
    3: {
      title: "Projekte Industriale",
      description:
        "Timimetal filloi realizimin e projekteve më komplekse industriale, duke vendosur standarde të larta në cilësi dhe siguri.",
    },
    4: {
      title: "Teknologji Moderne",
      description:
        "Investimi në pajisje moderne dhe metoda të avancuara ndërtimi e forcoi pozitën e kompanisë në treg.",
    },
    5: {
      title: "Lidership Rajonal",
      description:
        "Sot, Timimetal vazhdon të rritet si një kompani e besueshme në rajon për konstruksione metalike dhe zgjidhje industriale.",
    },
  },
  en: {
    1: {
      title: "The Beginning of Timimetal",
      description:
        "Timimetal began its journey with a clear vision to build strong, safe, and professional structures.",
    },
    2: {
      title: "Capacity Expansion",
      description:
        "As market demand increased, the company expanded its technical capacity and professional team for larger projects.",
    },
    3: {
      title: "Industrial Projects",
      description:
        "Timimetal began delivering more complex industrial projects, setting high standards in quality and safety.",
    },
    4: {
      title: "Modern Technology",
      description:
        "Investment in modern equipment and advanced construction methods strengthened the company’s position in the market.",
    },
    5: {
      title: "Regional Leadership",
      description:
        "Today, Timimetal continues to grow as a trusted regional company for metal construction and industrial solutions.",
    },
  },
  mk: {
    1: {
      title: "Почетокот на Timimetal",
      description:
        "Timimetal го започна својот пат со јасна визија за изградба на цврсти, безбедни и професионални конструкции.",
    },
    2: {
      title: "Проширување на капацитетите",
      description:
        "Со зголемување на барањата на пазарот, компанијата ги прошири техничките капацитети и професионалниот тим за поголеми проекти.",
    },
    3: {
      title: "Индустриски проекти",
      description:
        "Timimetal започна со реализација на покомплексни индустриски проекти, поставувајќи високи стандарди за квалитет и безбедност.",
    },
    4: {
      title: "Модерна технологија",
      description:
        "Инвестирањето во модерна опрема и напредни методи на градба ја зајакна позицијата на компанијата на пазарот.",
    },
    5: {
      title: "Регионално лидерство",
      description:
        "Денес, Timimetal продолжува да расте како доверлива регионална компанија за метални конструкции и индустриски решенија.",
    },
  },
  de: {
    1: {
      title: "Der Beginn von Timimetal",
      description:
        "Timimetal begann seine Reise mit einer klaren Vision: starke, sichere und professionelle Konstruktionen zu bauen.",
    },
    2: {
      title: "Erweiterung der Kapazitäten",
      description:
        "Mit steigender Marktnachfrage erweiterte das Unternehmen seine technischen Kapazitäten und sein professionelles Team für größere Projekte.",
    },
    3: {
      title: "Industrieprojekte",
      description:
        "Timimetal begann mit der Umsetzung komplexerer Industrieprojekte und setzte hohe Standards in Qualität und Sicherheit.",
    },
    4: {
      title: "Moderne Technologie",
      description:
        "Investitionen in moderne Ausrüstung und fortschrittliche Baumethoden stärkten die Position des Unternehmens am Markt.",
    },
    5: {
      title: "Regionale Führungsrolle",
      description:
        "Heute wächst Timimetal weiter als vertrauenswürdiges regionales Unternehmen für Metallkonstruktionen und industrielle Lösungen.",
    },
  },
};

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
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const translatedMilestone =
    milestoneTexts[currentLocale][milestone.id as keyof typeof milestoneTexts.sq];

  const title = translatedMilestone?.title || milestone.title;
  const description = translatedMilestone?.description || milestone.description;

  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* DESKTOP */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center relative">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -50 : 50 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className={isEven ? "pr-14 text-right" : ""}
        >
          {isEven && (
            <div className="relative group">
              {/* CARD */}
              <div className="relative overflow-hidden bg-white rounded-[30px] border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">
                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

                <div className="relative z-10">
                  {/* YEAR */}
                  <div className="flex items-center justify-end gap-3 mb-5">
                    <Calendar className="w-5 h-5 text-[#3BA9FF]" />

                    <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                      {milestone.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] mb-4">
                    {title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-transparent"
            />
          )}
        </div>

        {/* TIMELINE DOT */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            type: "spring",
          }}
          className="absolute left-1/2 top-10 -translate-x-1/2 z-20 hidden lg:flex"
        >
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-[#3BA9FF]/30 blur-2xl rounded-full" />

            {/* CIRCLE */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] border-[6px] border-white shadow-2xl flex items-center justify-center">
              <span className="text-white font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 50 : -50 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className={!isEven ? "pl-14" : ""}
        >
          {!isEven && (
            <div className="relative group">
              {/* CARD */}
              <div className="relative overflow-hidden bg-white rounded-[30px] border border-black/5 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">
                {/* HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

                <div className="relative z-10">
                  {/* YEAR */}
                  <div className="flex items-center gap-3 mb-5">
                    <Calendar className="w-5 h-5 text-[#3BA9FF]" />

                    <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                      {milestone.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] mb-4">
                    {title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* MOBILE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden relative pl-16"
      >
        {/* LINE */}
        {!isLast && (
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-transparent" />
        )}

        {/* DOT */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="absolute left-0 top-6"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] border-4 border-white shadow-xl flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {index + 1}
            </span>
          </div>
        </motion.div>

        {/* CARD */}
        <div className="group relative overflow-hidden bg-white rounded-[28px] border border-black/5 p-7 mb-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)]">
          {/* HOVER */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

          <div className="relative z-10">
            {/* YEAR */}
            <div className="flex items-center gap-3 mb-5">
              <Calendar className="w-5 h-5 text-[#3BA9FF]" />

              <span className="text-[#3BA9FF] text-sm uppercase tracking-[0.2em] font-semibold">
                {milestone.year}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-[#111111] text-2xl font-semibold tracking-tight mb-4">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLineItem;