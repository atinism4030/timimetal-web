"use client";

import { getCertifications } from "@/utils/certifications";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const certificationSectionTexts = {
  sq: {
    badge: "Standarde Cilësie",
    titleLine1: "Certifikata &",
    titleLine2: "Standarde Cilësie",
    description:
      "Angazhimi ynë ndaj cilësisë dhe sigurisë vërtetohet nga certifikatat dhe standardet më të larta ndërkombëtare.",
    bannerBadge: "STANDARDE TË BESUESHME",
    bannerTitle: "Të Përkushtuar ndaj Ekselencës",
    bannerDescription:
      "Çdo certifikatë përfaqëson angazhimin tonë për të ofruar punë me standarde të larta profesionale, duke respektuar kriteret më rigoroze ndërkombëtare në siguri, cilësi dhe mbrojtje të mjedisit.",
    stats: [
      "Të Certifikuar që nga 2003",
      "Auditime Vjetore",
      "100% në Përputhje me Standardet",
    ],
  },
  en: {
    badge: "Quality Standards",
    titleLine1: "Certifications &",
    titleLine2: "Quality Standards",
    description:
      "Our commitment to quality and safety is proven by internationally recognized certifications and high professional standards.",
    bannerBadge: "TRUSTED STANDARDS",
    bannerTitle: "Committed to Excellence",
    bannerDescription:
      "Every certification represents our commitment to delivering work with high professional standards while meeting strict international criteria for safety, quality, and environmental responsibility.",
    stats: [
      "Certified Since 2003",
      "Annual Audits",
      "100% Standards Compliant",
    ],
  },
  mk: {
    badge: "Стандарди за квалитет",
    titleLine1: "Сертификати &",
    titleLine2: "Стандарди за квалитет",
    description:
      "Нашата посветеност кон квалитет и безбедност е потврдена со меѓународно признати сертификати и високи професионални стандарди.",
    bannerBadge: "ДОВЕРЛИВИ СТАНДАРДИ",
    bannerTitle: "Посветени на извонредност",
    bannerDescription:
      "Секој сертификат ја претставува нашата посветеност да обезбедиме работа со високи професионални стандарди, почитувајќи строги меѓународни критериуми за безбедност, квалитет и заштита на животната средина.",
    stats: [
      "Сертифицирани од 2003",
      "Годишни ревизии",
      "100% усогласеност со стандардите",
    ],
  },
  de: {
    badge: "Qualitätsstandards",
    titleLine1: "Zertifizierungen &",
    titleLine2: "Qualitätsstandards",
    description:
      "Unser Engagement für Qualität und Sicherheit wird durch international anerkannte Zertifizierungen und hohe professionelle Standards bestätigt.",
    bannerBadge: "VERTRAUENSWÜRDIGE STANDARDS",
    bannerTitle: "Der Exzellenz verpflichtet",
    bannerDescription:
      "Jede Zertifizierung steht für unser Engagement, Arbeiten nach hohen professionellen Standards auszuführen und strenge internationale Kriterien für Sicherheit, Qualität und Umweltschutz einzuhalten.",
    stats: [
      "Zertifiziert seit 2003",
      "Jährliche Audits",
      "100% standardkonform",
    ],
  },
};

const Certificatons = () => {
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];

  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const certifications = getCertifications(currentLocale);
  const t = certificationSectionTexts[currentLocale];

  return (
    <section className="relative py-24 bg-[#F7F8FA] overflow-hidden">
      {/* GRID BACKGROUND */}
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
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h2>

          {/* LINE */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

          {/* TEXT */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full bg-white border border-black/5 p-6 overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.12)] transition-all duration-500 text-center">
                  {/* HOVER EFFECT */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

                  {/* TOP LINE */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-[#3BA9FF] transition-all duration-700" />

                  <div className="relative z-10">
                    {/* ICON */}
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#111111] to-[#3BA9FF] mb-6 shadow-lg"
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </motion.div>

                    {/* TITLE */}
                    <h4 className="text-[#111111] text-lg font-semibold mb-3 tracking-tight group-hover:text-[#3BA9FF] transition-colors duration-300">
                      {cert.title}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* CHECK */}
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 bg-[#3BA9FF] flex items-center justify-center shadow-lg">
                        <CheckCircle
                          className="w-4 h-4 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden bg-[#050505] px-8 py-12 md:px-14 md:py-16 text-center">
            {/* GLOW */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#3BA9FF]/20 blur-3xl rounded-full" />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/10 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

                <span className="text-[11px] uppercase tracking-[0.22em] text-white/70 font-semibold">
                  {t.bannerBadge}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-white text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-tight mb-6">
                {t.bannerTitle}
              </h3>

              {/* TEXT */}
              <p className="text-white/70 text-lg leading-relaxed">
                {t.bannerDescription}
              </p>

              {/* STATS */}
              <div className="mt-10 flex flex-wrap justify-center gap-8">
                {t.stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

                    <span className="text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificatons;