"use server";

import { IProject } from "@/utils/types";

const hardcodedProjects: IProject[] = [
    {
        id: "1",
        title: "Industrial Steel Complex",
        description: "A large scale steel factory with modern structural engineering.",
        fullDescription: "Built with the highest standards of safety and sustainability.",
        date: "2024-01-15",
        location: "E65 Tetovo MK, 1200",
        client: "Global Manufacturing Inc.",
        duration: "18 months",
        category: "Industrial",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"],
    },
    {
        id: "2",
        title: "Eco-Friendly LGS Homes",
        description: "Sustainable Light Gauge Steel homes integrated with smart systems.",
        fullDescription: "Residential properties that provide top-tier thermal insulation.",
        date: "2023-11-05",
        location: "Green Valley",
        client: "EcoLiving Developers",
        duration: "8 months",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"],
    },
    {
        id: "3",
        title: "Commercial Retail Center",
        description: "A sleek, modern steel framework for a new shopping district.",
        fullDescription: "Incorporating expansive glass facades supported by structural steel.",
        date: "2023-05-20",
        location: "Downtown Metropolis",
        client: "Metro Retail Group",
        duration: "12 months",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"],
    }
];

export async function getProjects(): Promise<IProject[]> {
    return hardcodedProjects;
}

export async function getProject(id: string): Promise<IProject | null> {
    const project = hardcodedProjects.find(p => p.id === id);
    return project || null;
}

export async function saveProject(formData: FormData) {
    return { success: false, error: "Firebase has been removed; functionality is disabled." };
}

export async function deleteProject(id: string) {
    return { success: false, error: "Firebase has been removed; functionality is disabled." };
}
