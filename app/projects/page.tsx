"use client";

import ProjectList from "@/components/Projects/ProjectList";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "lucide-react";
import { getProjects } from "@/app/actions/projects";
import { IProject } from "@/utils/types";

const ProjectsPage = () => {
  const [projectsList, setProjectsList] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setProjectsList(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="relative bg-[#F7F8FA] min-h-screen pt-10 pb-20 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* BLUE GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* HERO */}
        <div className="relative overflow-hidden bg-white border border-black/5 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.08)] mb-16">
          {/* INNER GRID */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3BA9FF_1px,transparent_1px),linear-gradient(to_bottom,#3BA9FF_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* GLOW */}
          <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#3BA9FF]/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-20 md:py-24">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-5 py-2 bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-semibold tracking-[0.25em] uppercase mb-8"
            >
              PORTFOLI
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.92] text-[#111111] mb-8"
            >
              Të Gjitha Projektet
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-[3px] bg-gradient-to-r from-[#3BA9FF] to-blue-300 mb-8"
            />

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl"
            >
              Zbuloni portofolin tonë të plotë të projekteve moderne të
              inxhinierisë dhe konstruksioneve metalike, të realizuara me
              precizitet, inovacion dhe standarde të larta industriale.
            </motion.p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-5xl mx-auto">
          {[
            { value: "500+", label: "Completed Projects" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "23+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden bg-white border border-black/5 p-10 flex flex-col items-center justify-center text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#3BA9FF]/10 via-transparent to-transparent" />

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mb-3">
                  {stat.value}
                </h3>

                <p className="text-gray-500 text-sm uppercase tracking-[0.18em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-black/5 px-6 py-5 mb-10 shadow-[0_15px_40px_-25px_rgba(0,0,0,0.08)] gap-4">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-11 h-11 flex items-center justify-center bg-[#111111] text-white">
              <Grid size={18} />
            </div>

            <span className="text-sm md:text-base">
              Shfaqur{" "}
              <span className="font-semibold text-[#111111]">
                {projectsList.length}
              </span>{" "}
              Projekte
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Updated Portfolio
          </div>
        </div>

        {/* PROJECTS */}
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3BA9FF]" />
          </div>
        ) : (
          <div className="relative">
            {/* PROJECT GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#3BA9FF]/5 blur-3xl rounded-full pointer-events-none" />

            <ProjectList projects={projectsList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
