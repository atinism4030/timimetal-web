"use client";
import { motion } from "motion/react";
import StoryCard from "@/components/About/StoryCard";
import { stories } from "@/utils/stories";
import React from "react";
import Image from "next/image";
import HeroA from "@/public/AboutPhotos/HeroA.jpg";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { HighlightFacts } from "@/components/About/FactCard";
import { reasons } from "@/utils/WhyUsReason";
import ReasonCard from "@/components/About/ReasonCard";
import TimeLineItem from "@/components/About/TimeLineItem";
import { milestones } from "@/utils/milestone";
import Certificatons from "@/components/About/Certificatons";
import Link from "next/link";

const page = () => {
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

                Ndërtojmë të Ardhmen me Çelik
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              className="text-white text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.92] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building
              <br />
              Excellence Since 1999
            </motion.h1>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6 mb-12 max-w-4xl"
            >

              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                E themeluar në vitin 1999, Timimetal është më shumë se një
                kompani ndërtimi — ne jemi një ekip profesionistësh të
                përkushtuar ndaj krijimit të strukturave moderne dhe të
                qëndrueshme.
              </p>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                Nga një punëtori e vogël, jemi rritur në një nga liderët
                rajonalë të ndërtimit industrial, duke realizuar struktura
                çeliku, shtëpi moderne dhe projekte që përcaktojnë standarde të
                reja.
              </p>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed">
                Me mbi 500 projekte të përfunduara dhe një ekip inxhinierësh të
                certifikuar, ne ndërtojmë jo vetëm struktura — por trashëgimi
                që zgjasin në kohë.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >

              <Link href="/#contacts">

                <button className="group px-10 py-5 bg-white text-[#111111] rounded-2xl hover:bg-[#3BA9FF] hover:text-white transition-all duration-500 flex items-center gap-3 shadow-2xl hover:-translate-y-1">

                  <span>Get in Touch</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/projects">

                <button className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">

                  View Our Projects
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
            Scroll to Discover
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

              Our Story
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              The Timimetal Story
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Një udhëtim i pasionit, inovacionit dhe përkushtimit ndaj
              përsosmërisë në ndërtimin industrial.
            </p>
          </motion.div>

          {/* STORIES */}
          <div className="space-y-28">
            {stories.map((story, index) => (
              <StoryCard
                key={story.id}
                story={story}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <div className="py-24">
        <HighlightFacts />
      </div>

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

              Why Us
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              Why Choose Timimetal
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Zgjidhni partnerin që kombinon përvojën me inovacionin modern për
              rezultate të jashtëzakonshme.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            {reasons.map((reason, index) => (
              <ReasonCard
                key={reason.id}
                reason={reason}
                index={index}
              />
            ))}
          </div>

          {/* BOTTOM BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative overflow-hidden bg-[#050505] rounded-[32px] p-12 text-center">

              <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#3BA9FF]/20 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-8">

                {[
                  "ISO 9001 Certified",
                  "CE Marked",
                  "European Standards",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >

                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">

                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>

                    <span className="text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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

              Company Journey
            </span>

            <h2 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-6">
              Our Journey
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#3BA9FF] to-transparent mx-auto mb-8" />

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Nga një punëtori e vogël në një kompani lider rajonale.
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