"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoImg from "@/public/Logo timimetal.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const locales = ["sq", "en", "mk", "de"] as const;
type Locale = (typeof locales)[number];

const headerTexts = {
  sq: {
    home: "Fillimi",
    services: "Shërbimet",
    about: "Rreth Nesh",
    projects: "Projektet",
    contact: "Kontakti",
  },
  en: {
    home: "Home",
    services: "Services",
    about: "About Us",
    projects: "Projects",
    contact: "Contact",
  },
  mk: {
    home: "Почетна",
    services: "Услуги",
    about: "За нас",
    projects: "Проекти",
    contact: "Контакт",
  },
  de: {
    home: "Startseite",
    services: "Leistungen",
    about: "Über uns",
    projects: "Projekte",
    contact: "Kontakt",
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const firstPathPart = pathname.split("/")[1];
  const currentLocale: Locale = locales.includes(firstPathPart as Locale)
    ? (firstPathPart as Locale)
    : "sq";

  const cleanPathname =
    pathname.replace(/^\/(sq|en|mk|de)(?=\/|$)/, "") || "/";

  const t = headerTexts[currentLocale];

  const isHomePage = cleanPathname === "/";
  const isAboutPage = cleanPathname === "/about-us";

  useEffect(() => {
    const handleScroll = () => {
      if (cleanPathname === "/about-us") {
        setIsScrolled(window.scrollY > 120);
        return;
      }

      const projectsSection = document.getElementById("projects");

      if (!projectsSection) {
        setIsScrolled(window.scrollY > 50);
        return;
      }

      const projectsTop = projectsSection.offsetTop;
      const projectsBottom = projectsTop + projectsSection.offsetHeight;
      const scrollY = window.scrollY + 100;

      if (scrollY < window.innerHeight * 0.8) {
        setIsScrolled(false);
      } else if (scrollY >= projectsTop && scrollY <= projectsBottom) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cleanPathname]);

  if (cleanPathname.startsWith("/admin") || cleanPathname.startsWith("/login")) {
    return null;
  }

  const changeLanguage = (newLocale: Locale) => {
    let newPath = pathname;

    const hasLocale = locales.some(
      (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
    );

    if (hasLocale) {
      newPath = pathname.replace(/^\/(sq|en|mk|de)/, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname === "/" ? "" : pathname}`;
    }

    router.push(newPath);
  };

  const navItems = [
    { label: t.home, href: `/${currentLocale}` },
    { label: t.services, href: `/${currentLocale}#services` },
    { label: t.about, href: `/${currentLocale}/about-us` },
    { label: t.projects, href: `/${currentLocale}/projects` },
    { label: t.contact, href: `/${currentLocale}#GetInTouch` },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[80px] z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || (!isHomePage && !isAboutPage)
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-20 h-full w-full max-w-[1920px] mx-auto">
        <Link href={`/${currentLocale}`}>
          <Image
            src={LogoImg}
            alt="Logo"
            width={200}
            height={80}
            priority
            className={`cursor-pointer w-[140px] md:w-[180px] h-auto object-contain transition-all duration-500 ${
              !isScrolled || (!isHomePage && !isAboutPage)
                ? "brightness-0 invert opacity-90"
                : "opacity-100"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul
            className={`flex justify-center items-center space-x-10 text-xs tracking-[0.15em] font-medium uppercase transition-colors duration-500 ${
              isScrolled || (!isHomePage && !isAboutPage)
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:opacity-70 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden lg:block relative">
          <select
            value={currentLocale}
            onChange={(e) => changeLanguage(e.target.value as Locale)}
            className={`appearance-none px-8 py-3 pr-14 text-xs tracking-widest font-semibold uppercase transition duration-500 outline-none cursor-pointer rounded-full ${
              isScrolled || (!isHomePage && !isAboutPage)
                ? "bg-[#050505] text-white hover:bg-black hover:shadow-2xl"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black"
            }`}
          >
            <option value="sq">🇦🇱 Shqip</option>
            <option value="en">🇬🇧 English</option>
            <option value="mk">🇲🇰 Македонски</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>

          <div
            className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[10px] ${
              isScrolled || (!isHomePage && !isAboutPage)
                ? "text-white"
                : "text-white"
            }`}
          >
            ▼
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors duration-500 ${
              isScrolled || !isHomePage ? "text-gray-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-black/40 backdrop-blur-xl z-[99] animate-in fade-in duration-300">
          <div className="absolute top-4 left-4 right-4 bg-white rounded-[32px] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden border border-gray-100">
            <div className="flex flex-col py-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between px-7 py-5 border-b border-gray-100 last:border-none hover:bg-[#F7FAFF] transition-all duration-300"
                >
                  <span className="text-[15px] font-medium text-gray-900 tracking-wide">
                    {item.label}
                  </span>

                  <span className="text-gray-400 group-hover:text-[#3BA9FF] group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </Link>
              ))}

              <div className="p-5 pt-6">
                <select
                  value={currentLocale}
                  onChange={(e) => changeLanguage(e.target.value as Locale)}
                  className="w-full bg-[#050505] text-white rounded-2xl py-4 px-5 text-[12px] tracking-[0.18em] uppercase font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300 outline-none cursor-pointer appearance-none"
                >
                  <option value="sq">🇦🇱 Shqip</option>
                  <option value="en">🇬🇧 English</option>
                  <option value="mk">🇲🇰 Македонски</option>
                  <option value="de">🇩🇪 Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;