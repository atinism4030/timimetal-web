import React from "react";
import { fetchProjecst, projects } from "@/utils/projects";
import ProjectList from "./ProjectList";
import Link from "next/link";

const ProjectsHome = async () => {
  return (
    <div className="bg-gray-200 py-16 md:py-24 w-full h-full">
      <h2 className="text-black text-4xl md:text-6xl flex justify-center pb-5 text-center px-4">
        Featured Projects
      </h2>
      <p className="text-gray-500 text-lg md:text-xl flex justify-center text-center max-w-4xl mx-auto px-4">
        Showcasing our expertise through successful projects that demonstrate
        innovation, quality craftsmanship, and engineering excellence.
      </p>

      <div>
        <ProjectList projects={(await fetchProjecst(3)) || []} />
      </div>

      <div className="flex justify-center mx-auto items-center mt-8">
        <Link
          className="bg-blue-400 text-white flex p-3 border rounded-2xl hover:bg-blue-500 transition-colors"
          href="/projects"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsHome;
