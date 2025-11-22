import { LucideIcon } from "lucide-react";

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  date: string;
  location: string;
  category: string;
}
