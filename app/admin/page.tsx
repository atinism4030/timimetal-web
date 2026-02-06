"use client";

import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "@/app/actions/projects";
import { IProject } from "@/utils/types";
import Link from "next/link";
import { Plus, Edit2, Trash2, Home, Layout, List } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
    }

    async function handleDelete(id: string) {
        if (confirm("Are you sure you want to delete this project?")) {
            const res = await deleteProject(id);
            if (res.success) {
                fetchProjects();
            } else {
                alert("Failed to delete project: " + res.error);
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#F8FAFB] py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-[#3BA9FF] mb-2">
                            <Layout size={20} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Admin Panel</span>
                        </div>
                        <h1 className="text-4xl font-bold text-[#0a0e1a]">Project Management</h1>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#E8F3FF] text-[#5A6675] hover:bg-[#F3F7FF] transition-all shadow-sm"
                        >
                            <Home size={18} />
                            View Site
                        </Link>
                        <Link
                            href="/admin/project/new"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            <Plus size={18} />
                            New Project
                        </Link>
                    </div>
                </div>

                {loading ? (
                    <div className="bg-white rounded-3xl p-20 shadow-xl border border-[#E8F3FF] flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3BA9FF]"></div>
                    </div>
                ) : projects.length === 0 ? (
                    <div className="bg-white rounded-3xl p-20 shadow-xl border border-[#E8F3FF] text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F3F7FF] text-[#3BA9FF] mb-6">
                            <List size={32} />
                        </div>
                        <h2 className="text-2xl font-semibold text-[#0a0e1a] mb-2">No Projects Found</h2>
                        <p className="text-[#5A6675] mb-8">Start by creating your first project to showcase your work.</p>
                        <Link
                            href="/admin/project/new"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] text-white shadow-lg hover:shadow-xl transition-all font-medium"
                        >
                            <Plus size={18} />
                            Create Your First Project
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                key={project.id}
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E8F3FF] hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6"
                            >
                                <div className="w-full md:w-40 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-grow min-w-0 px-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-[#E8F3FF] text-[#3BA9FF] text-xs font-semibold uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-[#5A6675] font-medium">{project.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0a0e1a] mb-2 truncate">{project.title}</h3>
                                    <p className="text-[#5A6675] text-sm line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-3 ml-auto">
                                    <Link
                                        href={`/admin/project/${project.id}`}
                                        className="p-3 rounded-xl bg-white border border-[#E8F3FF] text-[#5A6675] hover:text-[#3BA9FF] hover:bg-[#F3F7FF] transition-all shadow-sm"
                                        title="Edit project"
                                    >
                                        <Edit2 size={18} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="p-3 rounded-xl bg-white border border-[#E8F3FF] text-[#5A6675] hover:text-red-500 hover:bg-red-50 transition-all shadow-sm"
                                        title="Delete project"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
