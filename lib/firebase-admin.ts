import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import fs from "fs";
import path from "path";

if (!getApps().length) {
  // 1. Locate the file in the root directory
  const configPath = path.join(process.cwd(), "firebase-config.json");
  
  // 2. Read and parse the JSON
  const serviceAccount = JSON.parse(fs.readFileSync(configPath, "utf8"));

  // 3. Initialize with the file data
  initializeApp({
    credential: cert({
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      // Ensure the private key handles newlines correctly
      privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"),
    }),
    storageBucket: "timimetal-f30a7.firebasestorage.app",
  });
}

export const db = getFirestore("timimetal");
export const storage = getStorage();