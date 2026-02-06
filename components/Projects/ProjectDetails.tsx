"use client";

import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, User, Award, Wrench } from "lucide-react";
import { ImageGallery } from "../ImageGallery";
import { IProject } from "@/utils/types";
import Link from "next/link";


export function ProjectDetails({ project }: { project: IProject }) {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Back Button */}
      <div className="relative bg-gradient-to-b from-[#F8FAFB] to-white border-b border-[#E8F3FF]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#3BA9FF]/20 hover:border-[#3BA9FF]/50 hover:bg-[#F3F7FF] transition-all duration-300 shadow-sm hover:shadow-md mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#3BA9FF] group-hover:-translate-x-1 transition-transform duration-300" />
            <Link href={"/projects"} className="text-sm text-[#5A6675] group-hover:text-[#3BA9FF] transition-colors duration-300">Back to Projects</Link>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="mb-6 text-[#0a0e1a] text-4xl md:text-5xl lg:text-6xl">{project?.title}</h1>

            {/* Project Meta Information */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 shadow-sm">
                <Calendar className="w-4 h-4 text-[#3BA9FF]" />
                <span className="text-sm text-[#5A6675]">{project?.date}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 shadow-sm">
                <MapPin className="w-4 h-4 text-[#3BA9FF]" />
                <span className="text-sm text-[#5A6675]">{project?.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 shadow-sm">
                <User className="w-4 h-4 text-[#3BA9FF]" />
                <span className="text-sm text-[#5A6675]">{project?.client}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 shadow-sm">
                <Award className="w-4 h-4 text-[#3BA9FF]" />
                <span className="text-sm text-[#5A6675]">{project?.category}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 shadow-sm">
                <Wrench className="w-4 h-4 text-[#3BA9FF]" />
                <span className="text-sm text-[#5A6675]">{project?.duration}</span>
              </div>
            </div>

            <p className="text-[#5A6675] leading-relaxed max-w-4xl">
              {project?.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-Width Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <ImageGallery key={project?.date} images={project?.images!} />
      </motion.div>

      {/* Project Details Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 mb-4">
                <span className="text-sm text-[#3BA9FF] tracking-wide">Project Overview</span>
              </div>
            </div>
            <h3 className="text-[#0a0e1a]">About This Project</h3>
            <p className="text-[#5A6675] leading-relaxed">{project?.fullDescription}</p>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 mb-4">
                <span className="text-sm text-[#3BA9FF] tracking-wide">Challenges</span>
              </div>
            </div>
            <h3 className="text-[#0a0e1a]">Technical Challenges</h3>
            <ul className="space-y-4">
              {project?.challenges?.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3BA9FF] flex-shrink-0" />
                  <p className="text-[#5A6675] leading-relaxed">{challenge}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 mb-4">
                <span className="text-sm text-[#3BA9FF] tracking-wide">Solutions</span>
              </div>
            </div>
            <h3 className="text-[#0a0e1a]">Our Approach</h3>
            <ul className="space-y-4">
              {project?.solutions?.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#3BA9FF]/20 to-[#6FB7FF]/10 border border-[#3BA9FF]/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-[#3BA9FF]">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-[#5A6675] leading-relaxed">{solution}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3BA9FF]/10 to-[#6FB7FF]/10 border border-[#3BA9FF]/25 mb-4">
                <span className="text-sm text-[#3BA9FF] tracking-wide">Results</span>
              </div>
            </div>
            <h3 className="text-[#0a0e1a]">Project Outcomes</h3>
            <div className="space-y-4">
              {project?.results?.map((result, index) => (
                <div key={index} className="p-5 rounded-xl bg-gradient-to-br from-[#E8F3FF] to-white border border-[#3BA9FF]/15 shadow-sm">
                  <p className="text-[#5A6675] leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-[#F3F7FF] to-white border-2 border-[#3BA9FF]/20 shadow-xl text-center"
        >
          <h3 className="mb-4 text-[#0a0e1a]">Interested in Similar Work?</h3>
          <p className="text-[#5A6675] mb-8 max-w-2xl mx-auto leading-relaxed">
            We're ready to bring your next metal fabrication project to life with the same level of precision and excellence.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] hover:from-[#2E8FE5] hover:to-[#5BA3E5] text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Get a Quote for Your Project
          </button>
        </motion.div>
      </div>
    </div>
  );
}