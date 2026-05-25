"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const storyTexts = {
  sq: {
    legacy: "Trashëgimia Timimetal",
    1: {
      title: "Fillimet Tona",
      description:
        "Timimetal filloi si një punëtori e vogël me vizion të madh: të ndërtojë struktura çeliku të forta, të sigurta dhe të qëndrueshme për klientët tanë.",
    },
    2: {
      title: "Rritje dhe Zhvillim",
      description:
        "Me kalimin e viteve, kompania u zhvillua në një ekip profesional me kapacitete më të mëdha, duke realizuar projekte industriale dhe komerciale me standarde të larta.",
    },
    3: {
      title: "E Ardhmja e Ndërtimit",
      description:
        "Sot, Timimetal vazhdon të ndërtojë me teknologji moderne, ekspertizë inxhinierike dhe përkushtim ndaj cilësisë, duke krijuar projekte që zgjasin në kohë.",
    },
  },
  en: {
    legacy: "Timimetal Legacy",
    1: {
      title: "Our Beginnings",
      description:
        "Timimetal started as a small workshop with a strong vision: to build durable, safe, and reliable steel structures for our clients.",
    },
    2: {
      title: "Growth and Development",
      description:
        "Over the years, the company developed into a professional team with greater capacity, delivering industrial and commercial projects with high standards.",
    },
    3: {
      title: "The Future of Construction",
      description:
        "Today, Timimetal continues to build with modern technology, engineering expertise, and dedication to quality, creating projects that stand the test of time.",
    },
  },
  mk: {
    legacy: "Наследството на Timimetal",
    1: {
      title: "Нашите почетоци",
      description:
        "Timimetal започна како мала работилница со голема визија: да гради цврсти, безбедни и издржливи челични конструкции за нашите клиенти.",
    },
    2: {
      title: "Раст и развој",
      description:
        "Со текот на годините, компанијата се разви во професионален тим со поголеми капацитети, реализирајќи индустриски и комерцијални проекти со високи стандарди.",
    },
    3: {
      title: "Иднината на градбата",
      description:
        "Денес, Timimetal продолжува да гради со модерна технологија, инженерска експертиза и посветеност на квалитетот, создавајќи проекти што траат.",
    },
  },
  de: {
    legacy: "Timimetal Vermächtnis",
    1: {
      title: "Unsere Anfänge",
      description:
        "Timimetal begann als kleine Werkstatt mit einer starken Vision: robuste, sichere und langlebige Stahlkonstruktionen für unsere Kunden zu bauen.",
    },
    2: {
      title: "Wachstum und Entwicklung",
      description:
        "Im Laufe der Jahre entwickelte sich das Unternehmen zu einem professionellen Team mit größerer Kapazität und realisierte Industrie- und Gewerbeprojekte mit hohen Standards.",
    },
    3: {
      title: "Die Zukunft des Bauens",
      description:
        "Heute baut Timimetal weiterhin mit moderner Technologie, ingenieurtechnischer Expertise und einem klaren Qualitätsanspruch Projekte, die langfristig bestehen.",
    },
  },
};

export default function StoryCard({
  story,
  index,
}: {
  story: any;
  index: number;
}) {
  const ref = useRef(null);
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const translatedStory =
    storyTexts[currentLocale][story.id as keyof typeof storyTexts.sq];

  const title =
    typeof translatedStory === "object" && "title" in translatedStory
      ? translatedStory.title
      : story.title;

  const description =
    typeof translatedStory === "object" && "description" in translatedStory
      ? translatedStory.description
      : story.description;

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const Icon = story.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className={`flex flex-col ${
        story.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-10 lg:gap-20 items-center`}
    >
      {/* IMAGE */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{
          opacity: 0,
          x: story.reverse ? 50 : -50,
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : {
                opacity: 0,
                x: story.reverse ? 50 : -50,
              }
        }
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.2,
        }}
      >
        <div className="group relative overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.1)]">
          {/* HOVER EFFECT */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* IMAGE */}
          <div className="relative overflow-hidden">
            <Image
              src={story.image}
              width={700}
              height={700}
              alt={title}
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* YEAR */}
            <div className="absolute top-6 left-6 px-5 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#111111]">
                {storyTexts[currentLocale].legacy}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="w-full lg:w-1/2">
        {/* ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.3,
          }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-lg group-hover:scale-110 transition-all duration-500">
            <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.4,
          }}
        >
          {title}
        </motion.h2>

        {/* LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 100 } : { width: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.45,
          }}
          className="h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mb-8"
        />

        {/* DESCRIPTION */}
        <motion.p
          className="text-gray-500 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.5,
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}