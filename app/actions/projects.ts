"use server";

import { IProject } from "@/utils/types";
import { supabase } from "@/lib/supabase";

const hardcodedProjects: IProject[] = [
  {
    id: "1",
    title: "Industrial Steel Complex",
    description:
      "A large scale steel factory with modern structural engineering.",
    fullDescription:
      "Built with the highest standards of safety and sustainability.",
    date: "2024-01-15",
    location: "E65 Tetovo MK, 1200",
    client: "Global Manufacturing Inc.",
    duration: "18 months",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    ],
  },
];

export async function getProjects(): Promise<IProject[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return hardcodedProjects;
  }

  if (!data || data.length === 0) {
    return hardcodedProjects;
  }

  return data as IProject[];
}

export async function getProject(id: string): Promise<IProject | null> {
  const projects = await getProjects();

  const project = projects.find((p) => String(p.id) === String(id));

  return project || null;
}

export async function deleteProject(id: string) {
  try {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.log(error);

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "Something went wrong",
    };
  }
}

export async function saveProject(formData: FormData) {
  try {
    const id = formData.get("id") as string;

    console.log("PROJECT ID:", id);
    const files = formData.getAll("images") as File[];

console.log("FILES:", files);

    let uploadedImages: string[] = [];
for (const file of files) {

  if (!(file instanceof File)) continue;

  if (file.size > 0) {

    const cleanFileName = file.name
  .replace(/\s+/g, "-")
  .replace(/[^a-zA-Z0-9.-]/g, "");

const fileName = `projects/${Date.now()}-${cleanFileName}`;

    const { error } = await supabase.storage
      .from("projects")
      .upload(fileName, file);

    console.log("UPLOAD ERROR:", error);
    console.log("FILE NAME:", fileName);

    if (!error) {

      const { data } = supabase.storage
        .from("projects")
        .getPublicUrl(fileName);

      uploadedImages.push(data.publicUrl);

      console.log("UPLOADED IMAGES:", uploadedImages);
    }
  }
}
    const existingImages = JSON.parse(
  (formData.get("existingImages") as string) || "[]"
);

    const project = {
        
        
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      fullDescription: formData.get("fullDescription") as string,
      date: formData.get("date") as string,
      location: formData.get("location") as string,
      client: formData.get("client") as string,
      duration: formData.get("duration") as string,
      category: formData.get("category") as string,

      challenges: formData.get("challenges") as string,
      solutions: formData.get("solutions") as string,
      results: formData.get("results") as string,
      image: uploadedImages[0] || "",
      images: [...existingImages, ...uploadedImages],
      
      
    };


    // UPDATE EXISTING PROJECT
    if (id && id !== "new") {
      console.log("UPDATING PROJECT");

      const { data, error } = await supabase
        .from("projects")
        .update(project)
        .eq("id", id)
        .select();

      console.log("UPDATED DATA:", data);

      if (error) {
        console.log(error);

        return {
          success: false,
          error: error.message,
        };
      }

      return {
        success: true,
      };
    }

    // CREATE NEW PROJECT
    console.log("CREATING NEW PROJECT");

    const { error } = await supabase.from("projects").insert([project]);

    if (error) {
      console.log(error);

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "Something went wrong",
    };
  }
}
