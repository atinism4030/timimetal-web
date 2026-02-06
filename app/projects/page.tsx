"use client";
import ProjectList from "@/components/Projects/ProjectList";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Grid, ChevronDown } from "lucide-react";
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
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Top Navigation */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-blue-100"
          >
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative"
          >
            All Projects
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1.5 bg-blue-500 rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed"
          >
            Explore our complete portfolio of precision engineering and metal fabrication projects, delivered with excellence across the nation.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          {[
            { value: projectsList.length + "+", label: "Completed Projects" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "25+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-blue-50/50 border border-blue-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 mb-8 border-b border-gray-100 gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <Grid size={20} className="text-blue-500" />
            <span>Showing <span className="font-semibold text-gray-900">{projectsList.length}</span> projects</span>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 bg-white transition-all text-sm font-medium">
            All Categories
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Projects List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <ProjectList projects={projectsList} />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;