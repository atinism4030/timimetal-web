"use client";

import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getProject, saveProject } from "@/app/actions/projects";
import { IProject } from "@/utils/types";
import {
  ArrowLeft,
  Save,
  Upload,
  X,
  Loader2,
  Image as ImageIcon,
  Layout,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabaseAuth } from "@/lib/supabase-auth";

export default function ProjectFormPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [authorized, setAuthorized] = useState(false);

  const router = useRouter();

  const { id: projectId } = use(params);

  const isNew = projectId === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const [project, setProject] = useState<Partial<IProject>>({
    title: "",
    description: "",
    fullDescription: "",
    date: "",
    location: "",
    client: "",
    duration: "",
    category: "",
    challenges: "",
    solutions: "",
    results: "",
    images: [],
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabaseAuth.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      setAuthorized(true);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!isNew) {
      getProject(projectId).then((data) => {
        if (data) {
          setProject(data);
          setExistingImages(data.images || []);
        }

        setLoading(false);
      });
    }
  }, [projectId, isNew]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      setSelectedImages((prev) => [...prev, ...files]);

      const newPreviews = files.map((file) =>
        URL.createObjectURL(file)
      );

      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeNewImage = (index: number) => {
    setSelectedImages((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setImagePreviews((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const removeExistingImage = (url: string) => {
    setExistingImages((prev) =>
      prev.filter((img) => img !== url)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);

    const formData = new FormData();

    if (!isNew) formData.append("id", projectId);

    formData.append("title", project.title || "");
    formData.append("description", project.description || "");
    formData.append(
      "fullDescription",
      project.fullDescription || ""
    );
    formData.append("date", project.date || "");
    formData.append("location", project.location || "");
    formData.append("client", project.client || "");
    formData.append("duration", project.duration || "");
    formData.append("category", project.category || "");
    formData.append("challenges", project.challenges || "");
    formData.append("solutions", project.solutions || "");
    formData.append("results", project.results || "");

    formData.append(
      "existingImages",
      JSON.stringify(existingImages)
    );

    for (const file of selectedImages) {
      formData.append("images", file);
    }

    const res = await saveProject(formData);

    if (res.success) {
      router.push("/admin");
    } else {
      console.log(res.error);

      alert("Error saving project: " + res.error);

      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#F7F8FA]">

        <Loader2
          className="animate-spin text-[#3BA9FF]"
          size={42}
        />
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F7F8FA] py-14 px-6">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOWS */}
      <div className="absolute top-[-250px] left-[-200px] w-[650px] h-[650px] bg-[#3BA9FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[650px] h-[650px] bg-black/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* BACK */}
        <Link
          href="/admin"
          className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-black/5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 mb-10"
        >

          <ArrowLeft className="w-4 h-4 text-[#3BA9FF] group-hover:-translate-x-1 transition-transform duration-300" />

          <span className="text-sm text-[#5A6675] group-hover:text-[#111111] transition-colors duration-300">
            Back to Dashboard
          </span>
        </Link>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-white rounded-[36px] border border-black/5 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.12)]"
        >

          {/* INNER GRID */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3BA9FF_1px,transparent_1px),linear-gradient(to_bottom,#3BA9FF_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* GLOW */}
          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-[#3BA9FF]/10 blur-3xl rounded-full" />

          {/* HEADER */}
          <div className="relative z-10 px-10 md:px-12 py-10 border-b border-black/5">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-6">

              <Layout size={16} className="text-[#3BA9FF]" />

              <span className="text-[11px] uppercase tracking-[0.22em] text-[#3BA9FF] font-semibold">
                Timimetal CMS
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-[#111111] text-5xl font-semibold tracking-[-0.05em] mb-4">
              {isNew
                ? "Create New Project"
                : "Edit Project"}
            </h1>

            {/* TEXT */}
            <p className="text-gray-500 text-lg leading-relaxed">
              Manage your portfolio projects professionally.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative z-10 p-10 md:p-12 space-y-10"
          >

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* TITLE */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Project Title
                </label>

                <input
                  type="text"
                  required
                  value={project.title}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      title: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="Industrial Steel Construction"
                />
              </div>

              {/* CATEGORY */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Category
                </label>

                <input
                  type="text"
                  required
                  value={project.category}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      category: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="Metal Fabrication"
                />
              </div>

              {/* DATE */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Date / Period
                </label>

                <input
                  type="text"
                  required
                  value={project.date}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      date: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="September 2025"
                />
              </div>

              {/* LOCATION */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Location
                </label>

                <input
                  type="text"
                  required
                  value={project.location}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      location: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="Tetovo, North Macedonia"
                />
              </div>

              {/* CLIENT */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Client
                </label>

                <input
                  type="text"
                  value={project.client}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      client: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="Client Name"
                />
              </div>

              {/* DURATION */}
              <div className="space-y-3">

                <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                  Duration
                </label>

                <input
                  type="text"
                  value={project.duration}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      duration: e.target.value,
                    })
                  }
                  className="w-full h-[62px] px-6 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white transition-all duration-300 text-[#111111]"
                  placeholder="8 Months"
                />
              </div>
            </div>

            {/* TEXTAREAS */}
            <div className="space-y-8">

              {[
                {
                  label: "Short Description",
                  key: "description",
                  rows: 3,
                  placeholder: "Project overview...",
                },
                {
                  label: "Full Description",
                  key: "fullDescription",
                  rows: 6,
                  placeholder:
                    "Detailed project description...",
                },
                {
                  label: "Technical Challenges",
                  key: "challenges",
                  rows: 4,
                  placeholder:
                    "Describe technical challenges...",
                },
                {
                  label: "Solutions",
                  key: "solutions",
                  rows: 4,
                  placeholder: "Describe solutions...",
                },
                {
                  label: "Results",
                  key: "results",
                  rows: 4,
                  placeholder: "Describe project results...",
                },
              ].map((field) => (

                <div
                  key={field.key}
                  className="space-y-3"
                >

                  <label className="text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">
                    {field.label}
                  </label>

                  <textarea
                    rows={field.rows}
                    value={
                      (project as any)[field.key] || ""
                    }
                    onChange={(e) =>
                      setProject({
                        ...project,
                        [field.key]: e.target.value,
                      })
                    }
                    className="w-full px-6 py-5 rounded-2xl bg-[#F7F8FA] border border-black/5 outline-none focus:border-[#3BA9FF] focus:bg-white resize-none transition-all duration-300 text-[#111111]"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            {/* IMAGES */}
            <div className="space-y-5">

              <label className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gray-500 font-semibold">

                <ImageIcon
                  size={16}
                  className="text-[#3BA9FF]"
                />

                Project Images
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

                {/* EXISTING */}
                {existingImages.map((url, index) => (

                  <div
                    key={`existing-${index}`}
                    className="group relative aspect-square rounded-[24px] overflow-hidden border border-black/5 bg-[#F7F8FA]"
                  >

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={url}
                      alt="Project"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeExistingImage(url)
                      }
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >

                      <X size={15} />
                    </button>

                    {index === 0 && (

                      <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF] text-white text-[10px] py-1.5 text-center font-bold tracking-[0.18em] uppercase">
                        Main Image
                      </div>
                    )}
                  </div>
                ))}

                {/* PREVIEWS */}
                {imagePreviews.map((url, index) => (

                  <div
                    key={`new-${index}`}
                    className="group relative aspect-square rounded-[24px] overflow-hidden border border-black/5 bg-[#F7F8FA]"
                  >

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={url}
                      alt="Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeNewImage(index)
                      }
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >

                      <X size={15} />
                    </button>

                    {existingImages.length === 0 &&
                      index === 0 && (

                        <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF] text-white text-[10px] py-1.5 text-center font-bold tracking-[0.18em] uppercase">
                          Main Image
                        </div>
                      )}
                  </div>
                ))}

                {/* UPLOAD */}
                <label className="group flex flex-col items-center justify-center aspect-square rounded-[24px] border border-dashed border-black/10 bg-[#F7F8FA] hover:border-[#3BA9FF]/40 hover:bg-white transition-all duration-300 cursor-pointer">

                  <Upload
                    size={30}
                    className="text-[#3BA9FF] mb-4 group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="text-sm text-gray-500 font-medium">
                    Upload Images
                  </span>

                  <input
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="pt-8 border-t border-black/5 flex flex-wrap justify-end gap-4">

              <Link
                href="/admin"
                className="px-8 py-4 rounded-2xl bg-[#F7F8FA] border border-black/5 text-[#5A6675] hover:bg-white hover:text-[#111111] transition-all duration-300 font-medium"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="group relative overflow-hidden inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-[#111111] text-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 disabled:opacity-50"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-[#3BA9FF] to-[#111111] opacity-0 group-hover:opacity-100 transition duration-500" />

                <span className="relative z-10 inline-flex items-center gap-2">

                  {saving ? (
                    <>
                      <Loader2
                        className="animate-spin"
                        size={18}
                      />

                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={18} />

                      Save Project
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}