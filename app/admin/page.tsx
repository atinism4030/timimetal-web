"use client";

import { supabaseAuth } from "@/lib/supabase-auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "@/app/actions/projects";
import { IProject } from "@/utils/types";
import Link from "next/link";
import {
  Plus,
  Edit2,
  Trash2,
  Home,
  Layout,
  List,
  LogOut,
} from "lucide-react";
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
    <div className="relative min-h-screen overflow-hidden bg-[#F7F8FA] px-6 py-12">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOWS */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[650px] h-[650px] bg-black/[0.04] blur-3xl rounded-full pointer-events-none" />

      {/* LOGOUT */}
      <motion.button
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={handleLogout}
        className="fixed top-6 right-6 z-50 group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-black/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.16)] transition-all duration-500"
      >

        <LogOut className="w-4 h-4 text-[#3BA9FF] group-hover:translate-x-0.5 transition-transform duration-300" />

        <span className="text-sm font-medium text-[#5A6675] group-hover:text-[#111111] transition-colors duration-300">
          Logout
        </span>
      </motion.button>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-14">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-6">

              <div className="w-2 h-2 rounded-full bg-[#3BA9FF]" />

              <span className="text-[11px] uppercase tracking-[0.22em] text-[#3BA9FF] font-semibold">
                Timimetal Admin
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-[#111111] text-5xl md:text-6xl font-semibold tracking-[-0.05em] leading-[1] mb-4">
              Project Management
            </h1>

            {/* TEXT */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Manage, organize and update your premium portfolio projects.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* SITE */}
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-black/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500"
            >

              <Home className="w-5 h-5 text-[#3BA9FF]" />

              <span className="text-[#5A6675] group-hover:text-[#111111] transition-colors duration-300">
                View Site
              </span>
            </Link>

            {/* NEW PROJECT */}
            <Link
              href="/admin/project/new"
              className="group relative overflow-hidden inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#111111] text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.5)] transition-all duration-500"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-[#3BA9FF] to-[#111111] opacity-0 group-hover:opacity-100 transition duration-500" />

              <Plus className="relative z-10 w-5 h-5" />

              <span className="relative z-10 font-medium">
                New Project
              </span>
            </Link>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (

          <div className="bg-white rounded-[36px] border border-black/5 p-24 flex justify-center items-center shadow-[0_25px_80px_-30px_rgba(0,0,0,0.08)]">

            <div className="w-16 h-16 rounded-full border-2 border-black/10 border-t-[#3BA9FF] animate-spin" />
          </div>

        ) : projects.length === 0 ? (

          /* EMPTY */
          <div className="bg-white rounded-[36px] border border-black/5 p-24 text-center shadow-[0_25px_80px_-30px_rgba(0,0,0,0.08)]">

            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[28px] bg-[#F7F8FA] border border-black/5 mb-8">

              <List className="w-10 h-10 text-[#3BA9FF]" />
            </div>

            <h2 className="text-[#111111] text-4xl font-semibold tracking-tight mb-4">
              No Projects Found
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Start building your premium portfolio experience.
            </p>

            <Link
              href="/admin/project/new"
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#111111] text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.5)] transition-all duration-500"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-[#3BA9FF] to-[#111111] opacity-0 group-hover:opacity-100 transition duration-500" />

              <Plus className="relative z-10 w-5 h-5" />

              <span className="relative z-10">
                Create Project
              </span>
            </Link>
          </div>

        ) : (

          /* PROJECTS */
          <div className="grid gap-6">

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden bg-white rounded-[32px] border border-black/5 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.14)] transition-all duration-700 flex flex-col lg:flex-row items-center gap-6"
              >

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#3BA9FF]/8 via-transparent to-transparent" />

                {/* TOP LINE */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#3BA9FF] to-transparent transition-all duration-700" />

                {/* IMAGE */}
                <div className="relative w-full lg:w-52 h-40 rounded-[24px] overflow-hidden border border-black/5 flex-shrink-0">

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image || undefined}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex-grow min-w-0">

                  {/* TOP */}
                  <div className="flex items-center flex-wrap gap-3 mb-4">

                    <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#3BA9FF] text-[10px] uppercase tracking-[0.22em] font-semibold">
                      {project.category}
                    </span>

                    <span className="text-sm text-gray-400">
                      {project.date}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#111111] text-3xl font-semibold tracking-[-0.04em] mb-4 truncate group-hover:text-[#3BA9FF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 leading-relaxed line-clamp-2 max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="relative z-10 flex items-center gap-3 ml-auto">

                  {/* EDIT */}
                  <Link
                    href={`/admin/project/${project.id}`}
                    className="group/edit w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-black/5 flex items-center justify-center hover:bg-[#3BA9FF] transition-all duration-300"
                  >

                    <Edit2 className="w-5 h-5 text-[#5A6675] group-hover/edit:text-white transition-colors duration-300" />
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="group/delete w-14 h-14 rounded-2xl bg-[#F7F8FA] border border-black/5 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                  >

                    <Trash2 className="w-5 h-5 text-[#5A6675] group-hover/delete:text-white transition-colors duration-300" />
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