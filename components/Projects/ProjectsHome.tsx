import React from "react";
import { fetchProjecst, projects } from "@/utils/projects";
import ProjectList from "./ProjectList";
import Link from "next/link";

const ProjectsHome = async () => {
  return (
    <div className="bg-gray-200 py-25">
      <h2 className="text-black text-6xl flex justify-center pb-5">
        Featured Projects
      </h2>
      <p className="text-gray-500 text-xl flex justify-center ml-25">
        Showcasing our expertise through successful projects that demonstrate
        innovation, quality craftsmanship, and engineering excellence.
      </p>

      <div>
        <ProjectList projects={(await fetchProjecst(3)) || []} />
      </div>

      <div className="flex justify-between mx-auto items-center *: text-white">
        <Link
          className=" bg-blue-400 mx-auto flex p-3 border rounded-2xl hover:bg-blue-500"
          href="/projects"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsHome;
