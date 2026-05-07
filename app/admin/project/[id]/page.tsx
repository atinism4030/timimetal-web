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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedImages((prev) => [...prev, ...files]);

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeNewImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (url: string) => {
    setExistingImages((prev) => prev.filter((img) => img !== url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    if (!isNew) formData.append("id", projectId);

    formData.append("title", project.title || "");
    formData.append("description", project.description || "");
    formData.append("fullDescription", project.fullDescription || "");
    formData.append("date", project.date || "");
    formData.append("location", project.location || "");
    formData.append("client", project.client || "");
    formData.append("duration", project.duration || "");
    formData.append("category", project.category || "");
    formData.append("challenges", project.challenges || "");
    formData.append("solutions", project.solutions || "");
    formData.append("results", project.results || "");
    formData.append("category", project.category || "");

    formData.append("existingImages", JSON.stringify(existingImages));
    console.log("SELECTED IMAGES:", selectedImages);
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
      <div className="min-h-screen flex justify-center items-center bg-[#F8FAFB]">
        <Loader2 className="animate-spin text-[#3BA9FF]" size={40} />
      </div>
    );
  }

  if (!authorized) {
    return null;
  }
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Dashboard
        </Link>

        {/* Main Card */}
        <div className="bg-[#121212] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_20px_80px_-25px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="px-10 py-10 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-[#3BA9FF] mb-3">
              <Layout size={18} />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Timimetal CMS
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight mb-3">
              {isNew ? "Create New Project" : "Edit Project"}
            </h1>

            <p className="text-gray-400 text-lg">
              Manage your portfolio projects professionally.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-10">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="Industrial Steel Construction"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="Metal Fabrication"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="September 2025"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="Tetovo, North Macedonia"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="Client Name"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
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
                  className="w-full h-[58px] px-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] transition-all text-white placeholder:text-gray-500"
                  placeholder="8 Months"
                />
              </div>
            </div>

            {/* Textareas */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
                  Short Description
                </label>

                <textarea
                  rows={3}
                  required
                  value={project.description}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-5 py-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] resize-none transition-all text-white placeholder:text-gray-500"
                  placeholder="Project overview..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
                  Full Description
                </label>

                <textarea
                  rows={6}
                  required
                  value={project.fullDescription}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      fullDescription: e.target.value,
                    })
                  }
                  className="w-full px-5 py-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] resize-none transition-all text-white placeholder:text-gray-500"
                  placeholder="Detailed project description..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
                  Technical Challenges
                </label>

                <textarea
                  rows={4}
                  value={project.challenges || ""}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      challenges: e.target.value,
                    })
                  }
                  className="w-full px-5 py-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] resize-none transition-all text-white placeholder:text-gray-500"
                  placeholder="Describe technical challenges..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
                  Solutions
                </label>

                <textarea
                  rows={4}
                  value={project.solutions || ""}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      solutions: e.target.value,
                    })
                  }
                  className="w-full px-5 py-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] resize-none transition-all text-white placeholder:text-gray-500"
                  placeholder="Describe solutions..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-300">
                  Results
                </label>

                <textarea
                  rows={4}
                  value={project.results || ""}
                  onChange={(e) =>
                    setProject({
                      ...project,
                      results: e.target.value,
                    })
                  }
                  className="w-full px-5 py-5 rounded-2xl bg-[#181818] border border-white/10 outline-none focus:border-[#3BA9FF] resize-none transition-all text-white placeholder:text-gray-500"
                  placeholder="Describe project results..."
                />
              </div>
            </div>

            {/* Images */}
            <div className="space-y-5">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <ImageIcon size={18} className="text-[#3BA9FF]" />
                Project Images
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Existing Images */}
                {existingImages.map((url, index) => (
                  <div
                    key={`existing-${index}`}
                    className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#181818]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={url}
                      alt="Project"
                      className="w-full h-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeExistingImage(url)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <X size={14} />
                    </button>

                    {index === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF] text-white text-[10px] py-1 text-center font-bold tracking-wider">
                        MAIN IMAGE
                      </div>
                    )}
                  </div>
                ))}

                {/* New Previews */}
                {imagePreviews.map((url, index) => (
                  <div
                    key={`new-${index}`}
                    className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#181818]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={url}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <X size={14} />
                    </button>

                    {existingImages.length === 0 && index === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF] text-white text-[10px] py-1 text-center font-bold tracking-wider">
                        MAIN IMAGE
                      </div>
                    )}
                  </div>
                ))}

                {/* Upload */}
                <label className="flex flex-col items-center justify-center aspect-square rounded-2xl border border-dashed border-white/10 bg-[#181818] hover:border-[#3BA9FF]/50 hover:bg-[#1E1E1E] transition-all cursor-pointer group">
                  <Upload
                    size={28}
                    className="text-[#3BA9FF] mb-3 group-hover:scale-110 transition-transform"
                  />

                  <span className="text-xs font-medium text-gray-300">
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

            {/* Buttons */}
            <div className="pt-8 border-t border-white/10 flex justify-end gap-4">
              <Link
                href="/admin"
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all font-medium"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-black shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Project
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
