"use client";

import { motion } from "motion/react";
import StoryCard from "@/components/About/StoryCard";
import { stories } from "@/utils/stories";
import React from "react";
import Image from "next/image";
import HeroA from "@/public/AboutPhotos/HeroA.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { reasons } from "@/utils/WhyUsReason";
import ReasonCard from "@/components/About/ReasonCard";
import TimeLineItem from "@/components/About/TimeLineItem";
import { milestones } from "@/utils/milestone";
import Certificatons from "@/components/About/Certificatons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const aboutHeroTexts = {
  sq: {
    badge: "Ndërtojmë të Ardhmen me Çelik",
    titleLine1: "Duke Ndërtuar",
    titleLine2: "Ekselencë që nga 2003",
    paragraph1:
      "E themeluar në vitin 2003, Timimetal është më shumë se një kompani ndërtimi — ne jemi një ekip profesionistësh të përkushtuar ndaj krijimit të strukturave moderne dhe të qëndrueshme.",
    paragraph2:
      "Nga një punëtori e vogël, jemi rritur në një nga liderët rajonalë të ndërtimit industrial, duke realizuar struktura çeliku, shtëpi moderne dhe projekte që përcaktojnë standarde të reja.",
    paragraph3:
      "Me mbi 500 projekte të përfunduara dhe një ekip inxhinierësh të certifikuar, ne ndërtojmë jo vetëm struktura — por trashëgimi që zgjasin në kohë.",
    contactButton: "Kontaktoni Këtu",
    projectsButton: "Shikoni Projektet Tona",
    scroll: "Zbuloni më poshtë",
  },
  en: {
    badge: "Building the Future with Steel",
    titleLine1: "Building",
    titleLine2: "Excellence Since 2003",
    paragraph1:
      "Founded in 2003, Timimetal is more than a construction company — we are a team of professionals dedicated to creating modern and durable structures.",
    paragraph2:
      "From a small workshop, we have grown into one of the regional leaders in industrial construction, delivering steel structures, modern homes, and projects that set new standards.",
    paragraph3:
      "With over 500 completed projects and a team of certified engineers, we build not only structures — but lasting legacies.",
    contactButton: "Contact Us",
    projectsButton: "View Our Projects",
    scroll: "Scroll to Discover",
  },
  mk: {
    badge: "Ја градиме иднината со челик",
    titleLine1: "Градиме",
    titleLine2: "извонредност од 2003",
    paragraph1:
      "Основана во 2003 година, Timimetal е повеќе од градежна компанија — ние сме тим професионалци посветени на создавање модерни и издржливи структури.",
    paragraph2:
      "Од мала работилница, прераснавме во еден од регионалните лидери во индустриска градба, реализирајќи челични конструкции, модерни домови и проекти што поставуваат нови стандарди.",
    paragraph3:
      "Со над 500 завршени проекти и тим сертифицирани инженери, не градиме само структури — туку наследство што трае.",
    contactButton: "Контактирајте нè",
    projectsButton: "Погледнете ги нашите проекти",
    scroll: "Откријте повеќе",
  },
  de: {
    badge: "Wir bauen die Zukunft mit Stahl",
    titleLine1: "Wir bauen",
    titleLine2: "Exzellenz seit 2003",
    paragraph1:
      "Gegründet im Jahr 2003, ist Timimetal mehr als ein Bauunternehmen — wir sind ein Team von Fachleuten, das sich der Schaffung moderner und langlebiger Strukturen widmet.",
    paragraph2:
      "Aus einer kleinen Werkstatt sind wir zu einem der regionalen Marktführer im Industriebau gewachsen und realisieren Stahlkonstruktionen, moderne Häuser und Projekte, die neue Standards setzen.",
    paragraph3:
      "Mit über 500 abgeschlossenen Projekten und einem Team zertifizierter Ingenieure bauen wir nicht nur Strukturen — sondern bleibende Werte.",
    contactButton: "Kontakt aufnehmen",
    projectsButton: "Unsere Projekte ansehen",
    scroll: "Weiter entdecken",
  },
};

const aboutStoryTexts = {
  sq: {
    badge: "Historia Jonë",
    title: "Historia e Timimetal",
    description:
      "Një udhëtim i pasionit, inovacionit dhe përkushtimit ndaj përsosmërisë në ndërtimin industrial.",
  },
  en: {
    badge: "Our Story",
    title: "The Story of Timimetal",
    description:
      "A journey of passion, innovation, and dedication to excellence in industrial construction.",
  },
  mk: {
    badge: "Нашата приказна",
    title: "Приказната на Timimetal",
    description:
      "Патување исполнето со страст, иновација и посветеност кон извонредност во индустриската градба.",
  },
  de: {
    badge: "Unsere Geschichte",
    title: "Die Geschichte von Timimetal",
    description:
      "Eine Reise voller Leidenschaft, Innovation und Engagement für Exzellenz im Industriebau.",
  },
};

const aboutWhyUsTexts = {
  sq: {
    badge: "PSE NE",
    title: "Pse të Zgjidhni Timimetal",
    description:
      "Zgjidhni partnerin që kombinon përvojën me inovacionin modern për rezultate të jashtëzakonshme.",
  },
  en: {
    badge: "WHY US",
    title: "Why Choose Timimetal",
    description:
      "Choose a partner that combines experience with modern innovation for outstanding results.",
  },
  mk: {
    badge: "ЗОШТО НИЕ",
    title: "Зошто да го изберете Timimetal",
    description:
      "Изберете партнер кој го комбинира искуството со модерната иновација за извонредни резултати.",
  },
  de: {
    badge: "WARUM WIR",
    title: "Warum Timimetal wählen",
    description:
      "Wählen Sie einen Partner, der Erfahrung mit moderner Innovation für herausragende Ergebnisse verbindet.",
  },
};

const aboutTimelineTexts = {
  sq: {
    badge: "RRUGËTIMI I KOMPANISË",
    title: "Rrugëtimi Ynë",
    description: "Nga një punëtori e vogël në një kompani lider rajonale.",
  },
  en: {
    badge: "COMPANY JOURNEY",
    title: "Our Journey",
    description: "From a small workshop to a leading regional company.",
  },
  mk: {
    badge: "ПАТОТ НА КОМПАНИЈАТА",
    title: "Нашиот пат",
    description: "Од мала работилница до водечка регионална компанија.",
  },
  de: {
    badge: "UNTERNEHMENSWEG",
    title: "Unser Weg",
    description:
      "Von einer kleinen Werkstatt zu einem führenden regionalen Unternehmen.",
  },
};

const page = () => {
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const hero = aboutHeroTexts[currentLocale];
  const storySection = aboutStoryTexts[currentLocale];
  const whyUsSection = aboutWhyUsTexts[currentLocale];
  const timelineSection = aboutTimelineTexts[currentLocale];

  return (
    <div className="bg-[#F7F8FA] h-full overflow-hidden">
      {/* HERO */}
      <div className="relative w-full min-h-screen overflow-hidden flex items-center text-black pt-24">
        {/* IMAGE */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={HeroA}
            alt="Steel construction factory"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#0B1220]/85 to-[#2563EB]/55 z-10" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] z-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* CONTENT */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-white/90 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
                {hero.badge}
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              className="text-white text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.92] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {hero.titleLine1}
              <br />
              {hero.titleLine2}
            </motion.h1>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6 mb-12 max-w-4xl"
            >
              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                {hero.paragraph1}
              </p>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                {hero.paragraph2}
              </p>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                {hero.paragraph3}
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={`/${currentLocale}#GetInTouch`}>
                <button className="group px-10 py-5 bg-white text-[#111111] rounded-2xl hover:bg-[#3BA9FF] hover:text-white transition-all duration-500 flex items-center gap-3 shadow-2xl hover:-translate-y-1">
                  <span>{hero.contactButton}</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href={`/${currentLocale}/projects`}>
                <button className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                  {hero.projectsButton}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-white/60 text-sm tracking-[0.25em] uppercase">
            {hero.scroll}
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* STORY */}
      <section className="py-24 bg-[#F7F8FA] relative overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* HEADER */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 text-[#3BA9FF] text-[11px] tracking-[0.22em] uppercase font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
              {storySection.badge}
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              {storySection.title}
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              {storySection.description}
            </p>
          </motion.div>

          {/* STORIES */}
          <div className="space-y-28">
            {stories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 bg-[#F7F8FA] relative overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#60A5FA] opacity-5 rounded-full blur-3xl" />

        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* HEADER */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 text-[#3BA9FF] text-[11px] tracking-[0.22em] uppercase font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
              {whyUsSection.badge}
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              {whyUsSection.title}
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              {whyUsSection.description}
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="py-24 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 text-[#3BA9FF] text-[11px] tracking-[0.22em] uppercase font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />
              {timelineSection.badge}
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              {timelineSection.title}
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              {timelineSection.description}
            </p>
          </motion.div>

          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => (
              <TimeLineItem
                key={milestone.id}
                milestone={milestone}
                index={index}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <Certificatons />
    </div>
  );
};

export default page;