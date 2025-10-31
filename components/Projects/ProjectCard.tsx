"use client";

import { IProject } from "@/app/projects/page";
import Image from "next/image";
import React from "react";
import PinIcon from "@/public/ProjectTestPic/pin 3.png";
import CalendarIcon from "@/public/ProjectTestPic/calendar.png";

const ProjectCard = ({ project }: { project: IProject }) => {
  const handleViewDetails = (id: number) => {
    window.location.href = `/projects/${id}`;
  };

  return (
    <div className=" min-h-110 min-w-2 border border-b-gray-100 rounded-3xl shadow-2xl hover:bg-gray-300 bg-white ">
      <div className="">
        <div className="">
          <Image
            src={project?.pic}
            width={600}
            height={600}
            alt={project?.name}
            className="rounded-t-3xl max-h-50 mb-2"
          />
        </div>
        <h3 className="text-black text-xl flex justify-center pt-5 pb-3  font-semibold ">
          {project?.name}
        </h3>
        <div className="flex justify-around text-gray-400 ">
          <div className="flex">
            <Image src={PinIcon} alt="Pin Icon" width={20} height={25} />
            {project?.adrres}
          </div>
          <div className="flex">
            <Image
              src={CalendarIcon}
              alt="Calendar Icon"
              width={25}
              height={20}
            />
            {project?.date}
          </div>
        </div>
        <div className="py-4">
          {project?.description ? (
            <p className="mt-2 text-sm text-gray-600  text-center  line-clamp-2">
              {project?.description}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-400 italic">
              No description provided
            </p>
          )}
        </div>
        <button
          className=" mx-12 bold text-black pt-6"
          onClick={() => handleViewDetails(project?.id)}
        >
          View Details →{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
