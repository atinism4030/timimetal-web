import React from 'react'
import ProjectCard from './ProjectCard'
import { IProject } from '@/app/projects/page';

const ProjectList = ({projects}: {projects: IProject[]}) => {
  return (
    <div className='grid grid-cols-3 gap-45 justify-center items-center mx-50 my-15
    '>
      {projects && projects.map((project) => (
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  )
}

export default ProjectList;
