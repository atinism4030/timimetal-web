"use client"
import ProjectList from '@/components/Projects/ProjectList'
import { projects } from '@/utils/projects';
import React from 'react'


const page = () => {
  console.log({projects});
  
  return (
    <div className='bg-white'>
      <ProjectList projects={projects} />
    </div>
  )
}

export default page