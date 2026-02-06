"use server";

import { db, storage } from "@/lib/firebase-admin";
import { IProject } from "@/utils/types";
import { revalidatePath } from "next/cache";

const COLLECTION_NAME = "projects";

export async function getProjects(): Promise<IProject[]> {
    try {
        console.log({db});
        
        const snapshot = await db.collection(COLLECTION_NAME).orderBy("date", "desc").get();
        console.log({snapshot});
        
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as IProject[];
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getProject(id: string): Promise<IProject | null> {
    try {
        const doc = await db.collection(COLLECTION_NAME).doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() } as IProject;
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
}

export async function saveProject(formData: FormData) {
    try {
        const id = formData.get("id") as string | null;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const fullDescription = formData.get("fullDescription") as string;
        const date = formData.get("date") as string;
        const location = formData.get("location") as string;
        const client = formData.get("client") as string;
        const duration = formData.get("duration") as string;
        const category = formData.get("category") as string;

        // Handle images
        const existingImagesJson = formData.get("existingImages") as string;
        const existingImages: string[] = existingImagesJson ? JSON.parse(existingImagesJson) : [];

        const newImageFiles = formData.getAll("images") as File[];
        const uploadedImages: string[] = [];

        const bucket = storage.bucket();
        console.log(`Attempting to access storage bucket: ${bucket.name}`);

        // Basic connectivity check
        const [exists] = await bucket.exists();
        if (!exists) {
            throw new Error(`The storage bucket "${bucket.name}" does not exist. Please ensure Storage is initialized in the Firebase Console and the bucket name is correct in lib/firebase-admin.ts.`);
        }

        for (const file of newImageFiles) {
            if (file.size === 0) continue;

            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = `${Date.now()}-${file.name}`;
            const fileRef = bucket.file(`projects/${fileName}`);

            await fileRef.save(buffer, {
                metadata: { contentType: file.type },
            });

            // Make the file public or get a signed URL
            // For simplicity in this demo, we'll use a public URL if configured, 
            // or a long-lived signed URL. Firebase Admin doesn't have a simple "getPublicUrl" 
            // like the client SDK unless the bucket is public.
            // We'll use the standard Firebase Storage URL format.
            const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(fileRef.name)}?alt=media`;
            uploadedImages.push(publicUrl);
        }

        const allImages = [...existingImages, ...uploadedImages];

        const projectData = {
            title,
            description,
            fullDescription,
            date,
            location,
            client,
            duration,
            category,
            image: allImages[0] || "", // Main image
            images: allImages,
        };

        try {
            if (id) {
                await db.collection(COLLECTION_NAME).doc(id).update(projectData);
            } else {
                await db.collection(COLLECTION_NAME).add(projectData);
            }
        } catch (dbError: any) {
            if (dbError.code === 5) {
                throw new Error("Firestore database not found. Please ensure you have created a 'Firestore Database' in the Firebase Console (Build > Firestore Database) and that it is using the '(default)' database ID.");
            }
            throw dbError;
        }

        revalidatePath("/projects");
        revalidatePath("/admin");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Error saving project:", error);
        return { success: false, error: String(error) };
    }
}

export async function deleteProject(id: string) {
    try {
        // Ideally, we should also delete images from storage
        const doc = await db.collection(COLLECTION_NAME).doc(id).get();
        const data = doc.data();
        if (data?.images) {
            const bucket = storage.bucket();
            for (const imageUrl of data.images) {
                try {
                    // Extract file path from URL
                    const url = new URL(imageUrl);
                    const path = decodeURIComponent(url.pathname.split("/o/")[1].split("?")[0]);
                    await bucket.file(path).delete();
                } catch (e) {
                    console.warn("Could not delete image from storage:", imageUrl, e);
                }
            }
        }

        await db.collection(COLLECTION_NAME).doc(id).delete();

        revalidatePath("/projects");
        revalidatePath("/admin");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Error deleting project:", error);
        return { success: false, error: String(error) };
    }
}
