"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { facts, getFacts } from "@/utils/facts";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const highlightFactsTexts = {
  sq: {
    badge: "Shifrat Tona",
    title: "Arritjet Tona",
    description:
      "Më shumë se dy dekada përkushtimi, inovacioni dhe suksesi në industrinë e ndërtimit me çelik.",
  },
  en: {
    badge: "Our Numbers",
    title: "Our Achievements",
    description:
      "More than two decades of dedication, innovation, and success in the steel construction industry.",
  },
  mk: {
    badge: "Нашите бројки",
    title: "Нашите достигнувања",
    description:
      "Повеќе од две децении посветеност, иновација и успех во индустријата за челична градба.",
  },
  de: {
    badge: "Unsere Zahlen",
    title: "Unsere Erfolge",
    description:
      "Mehr als zwei Jahrzehnte Engagement, Innovation und Erfolg in der Stahlbauindustrie.",
  },
};

export default function FactCard({
  fact,
  index,
}: {
  fact: typeof facts[0];
  index: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const Icon = fact.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="group"
    >
      {/* CARD */}
      <div className="relative overflow-hidden bg-white rounded-[32px] border border-black/5 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">
        {/* HOVER EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3BA9FF]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* TOP LINE */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

        <div className="relative z-10 text-center">
          {/* ICON */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.2,
            }}
            className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${fact.color} rounded-[28px] mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
          >
            <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* NUMBER */}
          <div className="mb-4">
            <motion.span
              className="text-[#111111] inline-flex items-end justify-center group-hover:text-[#3BA9FF] transition-colors duration-300"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : { scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
              }}
            >
              <CountUp
                end={fact.number}
                className="text-5xl md:text-6xl font-semibold tracking-tight"
              />

              <span className="ml-1 text-4xl md:text-5xl font-semibold">
                {fact.suffix}
              </span>
            </motion.span>
          </div>

          {/* LABEL */}
          <p className="text-gray-500 text-lg leading-relaxed">{fact.label}</p>
        </div>

        {/* GLOW */}
        <div
          className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${fact.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
        />
      </div>
    </motion.div>
  );
}

export function HighlightFacts() {
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const t = highlightFactsTexts[currentLocale];
  const localizedFacts = getFacts(currentLocale);

  return (
    <section className="relative py-24 bg-[#F7F8FA] overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* BADGE */}
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 text-[#3BA9FF] text-[11px] tracking-[0.22em] uppercase font-semibold mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
            {t.badge}
          </span>

          {/* TITLE */}
          <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
            {t.title}
          </h2>

          {/* LINE */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

          {/* TEXT */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* FACTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {localizedFacts.map((fact, index) => (
            <FactCard key={fact.label} fact={fact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}