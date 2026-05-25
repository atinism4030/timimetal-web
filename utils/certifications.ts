import { Award, CheckCircle, Shield, Star } from "lucide-react";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const certificationTexts = {
  sq: [
    {
      description: "Sistem për menaxhimin e cilësisë",
    },
    {
      description: "Sistem për menaxhimin e mjedisit jetësor",
    },
    {
      description: "Sistem për menaxhimin e sigurisë dhe shëndetit në punë",
    },
    {
      description:
        "Kërkesa të cilësisë për saldimin me shkrirje të materialeve metalike",
    },
  ],
  en: [
    {
      description: "Quality management system",
    },
    {
      description: "Environmental management system",
    },
    {
      description: "Occupational health and safety management system",
    },
    {
      description:
        "Quality requirements for fusion welding of metallic materials",
    },
  ],
  mk: [
    {
      description: "Систем за управување со квалитет",
    },
    {
      description: "Систем за управување со животна средина",
    },
    {
      description: "Систем за управување со безбедност и здравје при работа",
    },
    {
      description:
        "Барања за квалитет при фузиско заварување на метални материјали",
    },
  ],
  de: [
    {
      description: "Qualitätsmanagementsystem",
    },
    {
      description: "Umweltmanagementsystem",
    },
    {
      description: "Managementsystem für Arbeitssicherheit und Gesundheitsschutz",
    },
    {
      description:
        "Qualitätsanforderungen für das Schmelzschweißen metallischer Werkstoffe",
    },
  ],
};

const baseCertifications = [
  {
    id: 1,
    icon: Award,
    title: "ISO 9001:2015",
  },
  {
    id: 2,
    icon: Shield,
    title: "ISO 14001:2015",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "ISO 45001:2018",
  },
  {
    id: 4,
    icon: Star,
    title: "ISO 3834-2:2021",
  },
];

export const getCertifications = (locale: Locale = "sq") => {
  const texts = certificationTexts[locale] || certificationTexts.sq;

  return baseCertifications.map((certification, index) => ({
    ...certification,
    description: texts[index].description,
  }));
};

export const certifications = getCertifications("sq");