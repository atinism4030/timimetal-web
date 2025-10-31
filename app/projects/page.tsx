"use client"
import ProjectList from '@/components/Projects/ProjectList'
import { projects } from '@/utils/projects';
import React from 'react'

export interface IProject {
  id: number;
  pic:  string  ;
  adrres: string;
  date: string
  name: string;
  description: string;
}

const page = () => {

  return (
    <div className='bg-white'>
      <ProjectList projects={projects} />
    </div>
  )
}

export default page