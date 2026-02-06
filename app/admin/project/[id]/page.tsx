"use client";

import React, { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getProject, saveProject } from "@/app/actions/projects";
import { IProject } from "@/utils/types";
import { ArrowLeft, Save, Upload, X, Loader2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectFormPage({ params }: { params: Promise<{ id: string }> }) {
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
        images: [],
    });

    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);

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

        formData.append("existingImages", JSON.stringify(existingImages));

        selectedImages.forEach((file) => {
            formData.append("images", file);
        });

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

    return (
        <div className="min-h-screen bg-[#F8FAFB] py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/admin"
                    className="inline-flex items-center gap-2 text-[#5A6675] hover:text-[#3BA9FF] transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>

                <div className="bg-white rounded-3xl shadow-xl border border-[#E8F3FF] overflow-hidden">
                    <div className="bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] px-8 py-10 text-white">
                        <h1 className="text-3xl font-bold mb-2">
                            {isNew ? "Create New Project" : "Edit Project"}
                        </h1>
                        <p className="text-white/80">Fill in the details below to showcase your engineering excellence.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Project Title</label>
                                <input
                                    type="text"
                                    required
                                    value={project.title}
                                    onChange={(e) => setProject({ ...project, title: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. Industrial Complex Fabrication"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Category</label>
                                <input
                                    type="text"
                                    required
                                    value={project.category}
                                    onChange={(e) => setProject({ ...project, category: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. Industrial Fabrication"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Date / Period</label>
                                <input
                                    type="text"
                                    required
                                    value={project.date}
                                    onChange={(e) => setProject({ ...project, date: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. September 2024"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Location</label>
                                <input
                                    type="text"
                                    required
                                    value={project.location}
                                    onChange={(e) => setProject({ ...project, location: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. Detroit, Michigan"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Client</label>
                                <input
                                    type="text"
                                    value={project.client}
                                    onChange={(e) => setProject({ ...project, client: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. Advanced Manufacturing Corp"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#0a0e1a]">Duration</label>
                                <input
                                    type="text"
                                    value={project.duration}
                                    onChange={(e) => setProject({ ...project, duration: e.target.value })}
                                    className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none"
                                    placeholder="e.g. 8 months"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0a0e1a]">Short Description (Card View)</label>
                            <textarea
                                required
                                rows={3}
                                value={project.description}
                                onChange={(e) => setProject({ ...project, description: e.target.value })}
                                className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none resize-none"
                                placeholder="A brief overview for the project card..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0a0e1a]">Full Description (Detail View)</label>
                            <textarea
                                required
                                rows={6}
                                value={project.fullDescription}
                                onChange={(e) => setProject({ ...project, fullDescription: e.target.value })}
                                className="w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border border-[#E8F3FF] focus:border-[#3BA9FF] focus:ring-2 focus:ring-[#3BA9FF]/20 transition-all outline-none resize-none"
                                placeholder="Detailed project history, technical specs, and comprehensive overview..."
                            />
                        </div>

                        {/* Images */}
                        <div className="space-y-4">
                            <label className="text-sm font-semibold text-[#0a0e1a] flex items-center gap-2">
                                <ImageIcon size={18} className="text-[#3BA9FF]" />
                                Project Images (The first image will be the main display)
                            </label>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {/* Existing Images */}
                                {existingImages.map((url, index) => (
                                    <div key={`existing-${index}`} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#E8F3FF]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={url} alt="Project" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(url)}
                                            className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={14} />
                                        </button>
                                        {index === 0 && (
                                            <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF]/80 text-white text-[10px] py-1 text-center font-bold">
                                                MAIN IMAGE
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* New Previews */}
                                {imagePreviews.map((url, index) => (
                                    <div key={`new-${index}`} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#E8F3FF]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={url} alt="Preview" className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeNewImage(index)}
                                            className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <X size={14} />
                                        </button>
                                        {existingImages.length === 0 && index === 0 && (
                                            <div className="absolute bottom-0 left-0 right-0 bg-[#3BA9FF]/80 text-white text-[10px] py-1 text-center font-bold">
                                                MAIN IMAGE
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Upload Button */}
                                <label className="flex flex-col items-center justify-center aspect-square rounded-2xl border-2 border-dashed border-[#3BA9FF]/30 bg-[#F3F7FF] hover:bg-[#E8F3FF] hover:border-[#3BA9FF]/50 transition-all cursor-pointer group">
                                    <Upload size={24} className="text-[#3BA9FF] group-hover:scale-110 transition-transform mb-2" />
                                    <span className="text-xs font-semibold text-[#3BA9FF]">Upload Images</span>
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#E8F3FF] flex justify-end gap-4">
                            <Link
                                href="/admin"
                                className="px-8 py-4 rounded-xl bg-white border border-[#E8F3FF] text-[#5A6675] hover:bg-[#F3F7FF] transition-all font-semibold"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={saving}
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF] text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all font-bold"
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
