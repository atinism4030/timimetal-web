import { LucideIcon } from "lucide-react";

export interface IProject {
  id: string;
  name?: string;
  title?: string;
  description: string;
  image: string;
  images?: string[];
  pic?: string;
  icon?: LucideIcon;
  date: string;
  location: string;
  category: string;
  client?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  duration?: string;
  fullDescription?: string;

}
