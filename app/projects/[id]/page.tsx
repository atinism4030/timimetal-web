"use client"
import React, { useEffect, useState, use } from 'react'
import { ProjectDetails } from '@/components/Projects/ProjectDetails';
import { IProject } from '@/utils/types';
import { getProject } from '@/app/actions/projects';

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = use(params);

  useEffect(() => {
    getProject(id).then((data) => {
      setProject(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Project not found.</p>
      </div>
    );
  }

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
}

export default Page;
