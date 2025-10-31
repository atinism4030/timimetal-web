"use client"
import React, { useEffect, useState } from 'react'
import { IProject } from '../page'
import { getProjectById } from '@/utils/projects';
import ProjectCard from '@/components/Projects/ProjectCard';

const page = () => {
  const [project, setProject] = useState<IProject>();
  const selectedProjectId = window.location.pathname.split('/')[2]
  
  useEffect(() => {
    getProjectById(Number(selectedProjectId)).then((data) => {
      setProject(data)})
  },[])

  return (
    <div>
      <ProjectCard key={new Date().getDay()} project={project!} />
  </div>
  )
}

export default page;