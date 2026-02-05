import React from 'react'
import ProjectCard from './ProjectCard'
import { IProject } from '@/utils/types';

const ProjectList = ({ projects }: { projects: IProject[] }) => {
  console.log({ projects });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-7xl mx-auto px-4 my-10'>
      {projects && projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList;
