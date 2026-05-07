"use client";

import { supabaseAuth } from "@/lib/supabase-auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "@/app/actions/projects";
import { IProject } from "@/utils/types";
import Link from "next/link";
import { Plus, Edit2, Trash2, Home, Layout, List } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const handleLogout = async () => {
    await supabaseAuth.auth.signOut();

    window.location.href = "/login";
  };

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabaseAuth.auth.getSession();

      if (!session) {
        router.push("/login");

        return;
      }

      setAuthorized(true);
    };

    checkAuth();
  }, []);

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
  if (!authorized) {
    return null;
  }

return (
  <div className="min-h-screen bg-[#050505] text-white py-12 px-6 relative overflow-hidden">

    {/* Background Glow */}
    <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

    <div className="absolute bottom-[-250px] right-[-150px] w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full pointer-events-none" />

    {/* Logout */}
    <button
      onClick={handleLogout}
      className="fixed top-6 right-6 z-50 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-sm font-medium text-white hover:bg-red-500 transition-all duration-300 shadow-2xl"
    >
      Logout
    </button>

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-8">

        <div>
          <div className="flex items-center gap-2 text-[#3BA9FF] mb-3">
            <Layout size={18} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Timimetal Admin
            </span>
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white">
            Project Management
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage and organize your portfolio projects.
          </p>
        </div>

        <div className="flex gap-4">

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-xl"
          >
            <Home size={18} />
            View Site
          </Link>

          <Link
            href="/admin/project/new"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(255,255,255,0.35)]"
          >
            <Plus size={18} />
            New Project
          </Link>

        </div>
      </div>

      {/* Loading */}
      {loading ? (

        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-20 border border-white/10 flex justify-center items-center">
          <div className="w-14 h-14 rounded-full border-2 border-white/10 border-t-white animate-spin" />
        </div>

      ) : projects.length === 0 ? (

        <div className="bg-white/5 backdrop-blur-2xl rounded-[32px] p-20 border border-white/10 text-center">

          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white mb-8 border border-white/10">
            <List size={34} />
          </div>

          <h2 className="text-3xl font-semibold text-white mb-3">
            No Projects Found
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            Start building your premium portfolio experience.
          </p>

          <Link
            href="/admin/project/new"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300"
          >
            <Plus size={18} />
            Create Project
          </Link>

        </div>

      ) : (

        <div className="grid gap-6">

          {projects.map((project, index) => (

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              key={project.id}
              className="group bg-white/5 backdrop-blur-2xl rounded-[28px] p-6 border border-white/10 shadow-[0_20px_80px_-25px_rgba(0,0,0,0.6)] hover:bg-white/[0.07] transition-all duration-500 flex flex-col md:flex-row items-center gap-6"
            >

              {/* Image */}
              <div className="w-full md:w-44 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-black/30 relative border border-white/10">

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image || undefined}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0 px-2 text-white">

                <div className="flex items-center gap-3 mb-3">

                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {project.category}
                  </span>

                  <span className="text-xs text-gray-400 font-medium">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-3 truncate">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 ml-auto">

                <Link
                  href={`/admin/project/${project.id}`}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Edit2 size={18} />
                </Link>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300"
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
