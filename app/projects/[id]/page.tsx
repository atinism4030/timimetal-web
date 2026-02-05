"use client"
import React, { useEffect, useState } from 'react'
import { getProjectById } from '@/utils/projects';
import ProjectCard from '@/components/Projects/ProjectCard';
import { ProjectDetails } from '@/components/Projects/ProjectDetails';
import { IProject } from '@/utils/types';

const page = () => {
  const [project, setProject] = useState<IProject>();
  const selectedProjectId = typeof window !== "undefined" && window.location.pathname.split('/')[2]
  
  useEffect(() => {
    console.log("hereee");
    
    getProjectById(Number(selectedProjectId)).then((data) => {
      setProject(data)
      console.log({data});
    })
    },[])

  return (
    <div>
      <ProjectDetails key={new Date().getDay()} project={project!} />
  </div>
  )
}

export default page;