"use client";

import { reasons } from "@/utils/WhyUsReason";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const reasonTexts = {
  sq: {
    1: {
      title: "Përvojë e dëshmuar",
      description:
        "Me vite përvojë në konstruksione metalike dhe projekte industriale, ne ofrojmë zgjidhje të sigurta, profesionale dhe të qëndrueshme.",
    },
    2: {
      title: "Cilësi dhe precizitet",
      description:
        "Çdo projekt realizohet me kujdes të lartë teknik, materiale cilësore dhe standarde të avancuara të ndërtimit.",
    },
    3: {
      title: "Teknologji moderne",
      description:
        "Përdorim metoda bashkëkohore, pajisje profesionale dhe zgjidhje inovative për të arritur rezultate efikase dhe afatgjata.",
    },
    4: {
      title: "Ekip profesional",
      description:
        "Ekipi ynë përbëhet nga profesionistë të përkushtuar që punojnë me përgjegjësi, siguri dhe përkushtim maksimal.",
    },
    5: {
      title: "Zgjidhje të personalizuara",
      description:
        "Çdo projekt trajtohet sipas nevojave të klientit, duke ofruar zgjidhje të përshtatura për funksionalitet, dizajn dhe qëndrueshmëri.",
    },
    6: {
      title: "Besueshmëri afatgjatë",
      description:
        "Ne ndërtojmë marrëdhënie të qëndrueshme me klientët duke respektuar afatet, cilësinë dhe standardet profesionale.",
    },
  },
  en: {
    1: {
      title: "Proven Experience",
      description:
        "With years of experience in metal construction and industrial projects, we deliver safe, professional, and durable solutions.",
    },
    2: {
      title: "Quality and Precision",
      description:
        "Every project is completed with high technical care, quality materials, and advanced construction standards.",
    },
    3: {
      title: "Modern Technology",
      description:
        "We use contemporary methods, professional equipment, and innovative solutions to achieve efficient and long-lasting results.",
    },
    4: {
      title: "Professional Team",
      description:
        "Our team consists of dedicated professionals who work with responsibility, safety, and maximum commitment.",
    },
    5: {
      title: "Customized Solutions",
      description:
        "Every project is handled according to the client’s needs, offering tailored solutions for functionality, design, and durability.",
    },
    6: {
      title: "Long-Term Reliability",
      description:
        "We build lasting relationships with clients by respecting deadlines, quality, and professional standards.",
    },
  },
  mk: {
    1: {
      title: "Докажано искуство",
      description:
        "Со години искуство во метални конструкции и индустриски проекти, нудиме безбедни, професионални и издржливи решенија.",
    },
    2: {
      title: "Квалитет и прецизност",
      description:
        "Секој проект се реализира со високо техничко внимание, квалитетни материјали и напредни градежни стандарди.",
    },
    3: {
      title: "Модерна технологија",
      description:
        "Користиме современи методи, професионална опрема и иновативни решенија за ефикасни и долготрајни резултати.",
    },
    4: {
      title: "Професионален тим",
      description:
        "Нашиот тим е составен од посветени професионалци кои работат со одговорност, безбедност и максимална посветеност.",
    },
    5: {
      title: "Прилагодени решенија",
      description:
        "Секој проект се третира според потребите на клиентот, со решенија прилагодени за функционалност, дизајн и издржливост.",
    },
    6: {
      title: "Долгорочна доверливост",
      description:
        "Градиме трајни односи со клиентите преку почитување на рокови, квалитет и професионални стандарди.",
    },
  },
  de: {
    1: {
      title: "Bewährte Erfahrung",
      description:
        "Mit jahrelanger Erfahrung im Metallbau und in Industrieprojekten liefern wir sichere, professionelle und langlebige Lösungen.",
    },
    2: {
      title: "Qualität und Präzision",
      description:
        "Jedes Projekt wird mit hoher technischer Sorgfalt, hochwertigen Materialien und fortschrittlichen Baustandards umgesetzt.",
    },
    3: {
      title: "Moderne Technologie",
      description:
        "Wir nutzen moderne Methoden, professionelle Ausrüstung und innovative Lösungen für effiziente und langfristige Ergebnisse.",
    },
    4: {
      title: "Professionelles Team",
      description:
        "Unser Team besteht aus engagierten Fachleuten, die mit Verantwortung, Sicherheit und höchstem Einsatz arbeiten.",
    },
    5: {
      title: "Individuelle Lösungen",
      description:
        "Jedes Projekt wird nach den Bedürfnissen des Kunden umgesetzt, mit maßgeschneiderten Lösungen für Funktionalität, Design und Beständigkeit.",
    },
    6: {
      title: "Langfristige Zuverlässigkeit",
      description:
        "Wir bauen langfristige Kundenbeziehungen auf, indem wir Termine, Qualität und professionelle Standards respektieren.",
    },
  },
};

export const ReasonCard = ({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const translatedReason =
    reasonTexts[currentLocale][reason.id as keyof typeof reasonTexts.sq];

  const title = translatedReason?.title || reason.title;
  const description = translatedReason?.description || reason.description;

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      {/* CARD */}
      <div className="relative h-full overflow-hidden bg-white rounded-[32px] border border-black/5 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700">
        {/* HOVER EFFECT */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#3BA9FF]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          initial={false}
        />

        {/* TOP LINE */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

        {/* GLOW */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#3BA9FF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 flex flex-col h-full">
          {/* NUMBER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.08 + 0.2,
            }}
            className="absolute top-0 right-0 text-[#3BA9FF]/10 text-6xl font-bold tracking-tight"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* ICON */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.08 + 0.2,
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="flex-1">
            {/* TITLE */}
            <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] leading-tight mb-5 group-hover:text-[#3BA9FF] transition-colors duration-300">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* BOTTOM LINE */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08 + 0.4,
            }}
            className="h-[2px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-transparent origin-left mt-8"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ReasonCard;