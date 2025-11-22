"use client";
import { motion } from "motion/react";
import StoryCard from "@/components/About/StoryCard";
import Header from "@/components/Header";
import { stories } from "@/utils/stories";
import { scale } from "framer-motion";
import React from "react";
import Image from "next/image";
import HeroA from "@/public/AboutPhotos/HeroA.jpg";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import FactCard, { HighlightFacts } from "@/components/About/FactCard";
import { facts } from "@/utils/facts";
import { reasons } from "@/utils/WhyUsReason";
import ReasonCard from "@/components/About/ReasonCard";
import TimeLineItem from "@/components/About/TimeLineItem";
import { milestones } from "@/utils/milestone";
import Certificatons from "@/components/About/Certificatons";

const page = () => {
  return (
    <div className="bg-white h-full">
      <div>
        <Header />
      </div>
      <div className="w-full h-[100vh] bg-blue-100 overflow-hidden flex items-center text-black">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={HeroA}
            alt="Steel construction factory"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 via-[#1E3A8A] to-[#2563EB]/72 z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90">
                Ndertojme te Ardhmen me Celik
              </span>
            </motion.div>

            <motion.h1
              className="text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building Excellence Since 1999,
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6 mb-10"
            >
              <p className="text-white/95 text-xl leading-realxed">
                E themeluar ne vitin 199, Timimetal eshte me shume se nje
                kompani nderitmi - ne jemi nje ekip i pasionuar profesioinistesh
                qe kemi perkushtuar me shume se 25 vjet ne krijimin e strukutrve
                te qendrueshme dhe innovative.
              </p>

              <p className="text-white/95 text-xl leading-realxed">
                Nga nje puntori e vogel,ne jhemi rritur ne nje nga lideret
                rajone te ndertimit insdustirajl, duke ndertuar shtepi moderne
                me teknologji lGS ,struktura te medha celiku dhe fabrika qe
                perkufizojne peisazhin industrial te reajonit. chdo projekt qe
                ndetojme bart shenjen e cilesise sigurise dhe inovacioint.
              </p>

              <p className="text-white/95 text-xl leading-realxed">
                Me m bi 500 projekte te perfunduara nje ekip prej 8 +
                inxhinieresh te certifikuar angazhim ndaj standardeve evropiane
                ne nuk ndertojme thjesht strktura - ne krijojme trashigimi qe
                zgjasin ne kohe
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-10 py-5 bg-white text-[#1E3A8a] rounded-xl hover:bg-[#60A5FA] hover:text-white transition-all duration-300 flex items-center gap-3 group shadow-2xl hover:shadow-white/20 hover:translate-y-1">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                View Our Projects
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-white/70 text-sm tracking-wider uppercase">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
      <div>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6 py-2 bg-[#F3F6FB] text-[#2563EB] rounded-full mb-4">
                Rrëfimi Ynë
              </span>
              <h2 className="text-[#1E3A8A] mb-4">The Timimetal Story</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Një udhëtim i pasionit, inovacionit dhe përkushtimit ndaj
                përsosmërisë në ndërtimin industrial.
              </p>
            </motion.div>

            <div className="space-y-24">
              {stories.map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="py-24 bg-gradient-to-b from-white to-[#F3F6FB] max-w-7xl mx-auto px-6">
        <HighlightFacts />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <FactCard key={fact.id} fact={fact} index={index} />
          ))}
        </div>
      </div>

      <section className="py-32 bg-gradient-to-b from-[#F3F6FB] via-white to-[#F3F6FB] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-[#60A5FA] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 bg-gradient-to-r from-[#2563EB]/10 to-[#60A5FA]/10 text-[#2563EB] rounded-full border border-[#2563EB]/20">
                Avantazhet Tona
              </span>
            </motion.div>

            <h2 className="text-[#1E3A8A] mb-6">Why Choose Timimetal</h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Zgjidhni partnerin që kombinon përvojën e gjatë me inovacionin
              modern për rezultate të jashtëzakonshme. Çdo projekt që ndërtojmë
              është një dëshmi e angazhimit tonë ndaj përsosmërisë.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.id} reason={reason} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-white rounded-full" />
                <div className="absolute top-10 right-1/3 w-2 h-2 bg-white rounded-full" />
                <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white">ISO 9001 Certified</span>
                </div>

                <div className="w-px h-8 bg-white/30" />

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white">CE Marked</span>
                </div>

                <div className="w-px h-8 bg-white/30" />

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white">European Standards</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
          className="text-center mb-20"
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          >
            <span className="inline-block px-6 py-2 bg-[#F3F6FB] text-[#2563EB] rounded-full mb-4">Udhetimi Yne</span>
            <h2 className="text-[#1E3A8A] mb-4">Company Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nga nje puntori e vogel ne nje kompani linder rajonale - historia
              e rritjes dhe sukssesit tone
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
      <Certificatons />
    </div>
  );
};

export default page;
