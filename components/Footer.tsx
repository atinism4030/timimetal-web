"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { Instagram, Facebook } from "lucide-react";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const footerTexts = {
  sq: {
    description:
      "Konstruksione moderne çeliku dhe zgjidhje industriale të ndërtuara me precizitet, qëndrueshmëri dhe inovacion.",
    navigationTitle: "Navigim",
    home: "Kryefaqja",
    projects: "Projektet",
    about: "Rreth Nesh",
    contact: "Kontakti",
    contactTitle: "Kontakti",
    location: "Tetovë, Maqedonia e Veriut",
    rights: "Të gjitha të drejtat e rezervuara.",
    designedBy: "Dizajnuar dhe zhvilluar nga Horizonte Digital Group.",
  },
  en: {
    description:
      "Modern steel constructions and industrial solutions built with precision, durability, and innovation.",
    navigationTitle: "Navigation",
    home: "Home",
    projects: "Projects",
    about: "About Us",
    contact: "Contact",
    contactTitle: "Contact",
    location: "Tetovo, North Macedonia",
    rights: "All rights reserved.",
    designedBy: "Designed & Developed by Horizonte Digital Group.",
  },
  mk: {
    description:
      "Модерни челични конструкции и индустриски решенија изградени со прецизност, издржливост и иновација.",
    navigationTitle: "Навигација",
    home: "Почетна",
    projects: "Проекти",
    about: "За нас",
    contact: "Контакт",
    contactTitle: "Контакт",
    location: "Тетово, Северна Македонија",
    rights: "Сите права се задржани.",
    designedBy: "Дизајнирано и развиено од Horizonte Digital Group.",
  },
  de: {
    description:
      "Moderne Stahlkonstruktionen und industrielle Lösungen, gebaut mit Präzision, Beständigkeit und Innovation.",
    navigationTitle: "Navigation",
    home: "Startseite",
    projects: "Projekte",
    about: "Über uns",
    contact: "Kontakt",
    contactTitle: "Kontakt",
    location: "Tetovo, Nordmazedonien",
    rights: "Alle Rechte vorbehalten.",
    designedBy: "Entworfen und entwickelt von Horizonte Digital Group.",
  },
};

const Footer = () => {
  const pathname = usePathname();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const cleanPathname =
    pathname.replace(/^\/(sq|en|mk|de)(?=\/|$)/, "") || "/";

  const t = footerTexts[currentLocale];

  if (cleanPathname.startsWith("/admin") || cleanPathname.startsWith("/login")) {
    return null;
  }

  return (
    <footer className="bg-[#030712] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">TIMIMETAL</h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3BA9FF] mb-4">
              {t.navigationTitle}
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link
                href={`/${currentLocale}`}
                className="hover:text-[#3BA9FF] transition-colors"
              >
                {t.home}
              </Link>

              <Link
                href={`/${currentLocale}/projects`}
                className="hover:text-[#3BA9FF] transition-colors"
              >
                {t.projects}
              </Link>

              <Link
                href={`/${currentLocale}/about-us`}
                className="hover:text-[#3BA9FF] transition-colors"
              >
                {t.about}
              </Link>

              <Link
                href={`/${currentLocale}#GetInTouch`}
                className="hover:text-[#3BA9FF] transition-colors"
              >
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3BA9FF] mb-4">
              {t.contactTitle}
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3BA9FF] mt-0.5" />
                <span>{t.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#3BA9FF]" />
                <span>+389 70 209 553</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#3BA9FF]" />
                <span>info@timimetal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col gap-6 items-center text-xs text-gray-500">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/timimetal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/p/Timimetal-Dooel-100038760675629/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full">
            <p>© 2026 Timimetal. {t.rights}</p>

            <p>{t.designedBy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;