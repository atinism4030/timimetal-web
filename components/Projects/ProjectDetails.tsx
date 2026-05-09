"use client";

import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, User, Award, Wrench } from "lucide-react";
import { ImageGallery } from "../ImageGallery";
import { IProject } from "@/utils/types";
import Link from "next/link";

export function ProjectDetails({ project }: { project: IProject }) {
  return (
    <div className="min-h-screen bg-[#F7F8FA] relative overflow-hidden pt-24">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* BLUE GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      {/* HERO */}
      <div className="relative border-b border-black/5 bg-white overflow-hidden">
        {/* INNER GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3BA9FF_1px,transparent_1px),linear-gradient(to_bottom,#3BA9FF_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          {/* BACK BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link
              href={"/projects"}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/5 hover:border-[#3BA9FF]/30 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <ArrowLeft className="w-4 h-4 text-[#3BA9FF] group-hover:-translate-x-1 transition-transform duration-300" />

              <span className="text-sm text-[#5A6675] group-hover:text-[#3BA9FF] transition-colors duration-300">
                Pas Tek Projektet
              </span>
            </Link>
          </motion.div>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-blue-50 border border-blue-100">
              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#3BA9FF] font-semibold">
                Përmbledhje e Projektit
              </span>
            </div>

            {/* TITLE */}
            <h1 className="mb-8 text-[#111111] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] leading-[0.95] max-w-5xl">
              {project?.title}
            </h1>

            {/* META */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                {
                  icon: Calendar,
                  value: project?.date,
                },
                {
                  icon: MapPin,
                  value: project?.location,
                },
                {
                  icon: User,
                  value: project?.client,
                },
                {
                  icon: Award,
                  value: project?.category,
                },
                {
                  icon: Wrench,
                  value: project?.duration,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-[#3BA9FF]" />

                    <span className="text-sm text-[#5A6675]">{item.value}</span>
                  </div>
                );
              })}
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#5A6675] leading-relaxed max-w-4xl text-lg">
              {project?.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10"
      >
        <ImageGallery key={project?.date} images={project?.images!} />
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Rreth Këtij Projekti",
              badge: "Përmbledhje",
              content: project?.fullDescription,
            },
            {
              title: "Sfidat Teknike",
              badge: "Sfidat",
              content: project?.challenges,
            },
            {
              title: "Qasja Jonë",
              badge: "Zgjidhjet",
              content: project?.solutions,
            },
            {
              title: "Rezultatet e Projektit",
              badge: "Rezultatet",
              content: project?.results,
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden bg-white border border-black/5 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

              <div className="relative z-10">
                {/* BADGE */}
                <div className="inline-block mb-6">
                  <div className="px-4 py-2 bg-blue-50 border border-blue-100">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#3BA9FF] font-semibold">
                      {section.badge}
                    </span>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[#111111] text-3xl font-semibold tracking-tight mb-6">
                  {section.title}
                </h3>

                {/* TEXT */}
                <p className="text-[#5A6675] leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative overflow-hidden mt-16 bg-[#050505] p-12 md:p-16 text-center"
        >
          {/* GLOW */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#3BA9FF]/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white/10 border border-white/10 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold">
                NISNI PROJEKTIN TUAJ
              </span>
            </div>

            {/* TITLE */}
            <h3 className="mb-6 text-white text-4xl md:text-5xl font-semibold tracking-[-0.05em] leading-tight">
              Të Interesuar për një Projekt të Ngjashëm?
            </h3>

            {/* TEXT */}
            <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              Ne jemi të gatshëm të realizojmë projektin tuaj të ardhshëm në
              konstruksione metalike dhe ndërtim modern, duke kombinuar
              precizitetin, inovacionin dhe zgjidhjet bashkëkohore inxhinierike.
            </p>

            {/* BUTTON */}
            <Link href="/#GetInTouch">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#3BA9FF] text-black hover:text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Kontaktoni Këtu
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
