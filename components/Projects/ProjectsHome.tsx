import React from "react";
import ProjectList from "./ProjectList";
import Link from "next/link";
import { getProjects } from "@/app/actions/projects";
import { ArrowRight } from "lucide-react";

const ProjectsHome = async () => {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-[#050505] text-white py-20 md:py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="projects">
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6 whitespace-nowrap">
              Projektet <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600">
                Tona
              </span>
            </h2>
            <div className="h-[1px] w-24 bg-white/20 mb-8" />
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Showcasing our expertise through successful projects that demonstrate
              innovation, quality craftsmanship, and engineering excellence.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/30 rounded-full px-8 py-4 transition-all duration-500 w-max shrink-0"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white/90 group-hover:text-white">Full Portfolio</span>
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* Projects List */}
        <div className="mt-12 w-full">
          <ProjectList projects={featuredProjects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsHome;
