import { Award, Building2, Shield, Users } from "lucide-react";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const factLabels = {
  sq: {
    engineers: "Inxhinierë Ekspertë",
    projects: "Projekte të Përfunduara",
    experience: "Vite Përvojë",
    safety: "Vlerësim i Sigurisë",
  },
  en: {
    engineers: "Expert Engineers",
    projects: "Completed Projects",
    experience: "Years of Experience",
    safety: "Safety Rating",
  },
  mk: {
    engineers: "Експертски инженери",
    projects: "Завршени проекти",
    experience: "Години искуство",
    safety: "Оценка за безбедност",
  },
  de: {
    engineers: "Fachingenieure",
    projects: "Abgeschlossene Projekte",
    experience: "Jahre Erfahrung",
    safety: "Sicherheitsbewertung",
  },
};

export const getFacts = (locale: Locale = "sq") => {
  const labels = factLabels[locale] || factLabels.sq;

  return [
    {
      id: 1,
      icon: Users,
      number: 8,
      suffix: "+",
      label: labels.engineers,
      color: "from-[#2563EB] to-[#60A5FA]",
    },
    {
      id: 2,
      icon: Building2,
      number: 500,
      suffix: "+",
      label: labels.projects,
      color: "from-[#1E3A8A] to-[#2563EB]",
    },
    {
      id: 3,
      icon: Award,
      number: 25,
      suffix: "+",
      label: labels.experience,
      color: "from-[#60A5FA] to-[#2563EB]",
    },
    {
      id: 4,
      icon: Shield,
      number: 100,
      suffix: "%",
      label: labels.safety,
      color: "from-[#2563EB] to-[#1E3A8A]",
    },
  ];
};

export const facts = getFacts("sq");