"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoImg from "@/public/Logo timimetal.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // ABOUT PAGE
      if (pathname === "/about-us") {
        if (window.scrollY > 120) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        return;
      }

      // HOME PAGE
      const projectsSection = document.getElementById("projects");

      // fallback
      if (!projectsSection) {
        setIsScrolled(window.scrollY > 50);

        return;
      }

      const projectsTop = projectsSection.offsetTop;

      const projectsBottom = projectsTop + projectsSection.offsetHeight;

      const scrollY = window.scrollY + 100;

      // HERO SECTION
      if (scrollY < window.innerHeight * 0.8) {
        setIsScrolled(false);
      }

      // PROJECTS DARK SECTION
      else if (scrollY >= projectsTop && scrollY <= projectsBottom) {
        setIsScrolled(false);
      }

      // WHITE/LIGHT SECTIONS
      else {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[80px] z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || (pathname !== "/" && pathname !== "/about-us")
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-20 h-full w-full max-w-[1920px] mx-auto">
        <Link href="/">
          <Image
            src={LogoImg}
            alt="Logo"
            width={200}
            height={80}
            className={`cursor-pointer w-[140px] md:w-[180px] h-auto object-contain transition-all duration-500 ${
              !isScrolled || (pathname !== "/" && pathname !== "/about-us")
                ? "brightness-0 invert opacity-90"
                : "opacity-100"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul
            className={`flex justify-center items-center space-x-10 text-xs tracking-[0.15em] font-medium uppercase transition-colors duration-500 ${
              isScrolled || (pathname !== "/" && pathname !== "/about-us")
                ? "text-gray-900"
                : "text-white"
            }`}
          >
            <li>
              <Link
                href="/"
                className="hover:opacity-70 transition duration-300"
              >
                Fillimi
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:opacity-70 transition duration-300"
              >
                Shërbimet
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:opacity-70 transition duration-300"
              >
                Rreth Nesh
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:opacity-70 transition duration-300"
              >
                Projektet
              </Link>
            </li>
            <li>
              <Link
                href="/#GetInTouch"
                className="hover:opacity-70 transition duration-300"
              >
                Kontakti
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block relative">
          <select
            className={`appearance-none px-8 py-3 pr-14 text-xs tracking-widest font-semibold uppercase transition duration-500 outline-none cursor-pointer rounded-full ${
              isScrolled || (pathname !== "/" && pathname !== "/about-us")
                ? "bg-[#050505] text-white hover:bg-black hover:shadow-2xl"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black"
            }`}
          >
            <option value="en">🇬🇧 English</option>
            <option value="sq">🇦🇱 Shqip</option>
            <option value="mk">🇲🇰 Македонски</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>

          {/* Arrow */}
          <div
            className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[10px] ${
              isScrolled || (pathname !== "/" && pathname !== "/about-us")
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
              isScrolled || pathname !== "/" ? "text-gray-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-black/40 backdrop-blur-xl z-[99] animate-in fade-in duration-300">
          <div className="absolute top-4 left-4 right-4 bg-white rounded-[32px] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden border border-gray-100">
            <div className="flex flex-col py-3">
              {[
                { label: "Fillimi", href: "/" },
                { label: "Shërbimet", href: "/#services" },
                { label: "Rreth Nesh", href: "/about-us" },
                { label: "Projektet", href: "/projects" },
                { label: "Kontakti", href: "/#GetInTouch" },
              ].map((item, index) => (
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
                <select className="w-full bg-[#050505] text-white rounded-2xl py-4 px-5 text-[12px] tracking-[0.18em] uppercase font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300 outline-none cursor-pointer appearance-none">
                  <option value="en">🇬🇧 English</option>
                  <option value="sq">🇦🇱 Shqip</option>
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
