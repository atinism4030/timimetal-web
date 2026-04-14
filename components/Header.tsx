"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoImg from "@/public/Logo timimetal.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full h-[80px] z-[100] transition-all duration-500 ease-in-out ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100" 
        : "bg-transparent border-b border-white/10"
    }`}>
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-20 h-full w-full max-w-[1920px] mx-auto">
        <Link href="/">
          <Image
            src={LogoImg}
            alt="Logo"
            width={200}
            height={80}
            className={`cursor-pointer w-[140px] md:w-[180px] h-auto object-contain transition-all duration-500 ${!isScrolled ? "brightness-0 invert opacity-90" : "opacity-100"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className={`flex justify-center items-center space-x-10 text-xs tracking-[0.15em] font-medium uppercase transition-colors duration-500 ${isScrolled ? "text-gray-900" : "text-white"}`}>
            <li>
              <Link href="/" className="hover:opacity-70 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="#services" className="hover:opacity-70 transition duration-300">Services</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:opacity-70 transition duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:opacity-70 transition duration-300">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:opacity-70 transition duration-300">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button className={`px-8 py-3 text-xs tracking-widest font-semibold uppercase transition duration-500 ${
            isScrolled 
              ? "bg-[#050505] text-white hover:bg-black hover:shadow-2xl hover:-translate-y-0.5" 
              : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black hover:-translate-y-0.5"
          }`}>
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 transition-colors duration-500 ${isScrolled ? "text-gray-900" : "text-white"}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-2xl py-8 flex flex-col items-center gap-8 animate-in slide-in-from-top-4 fade-in duration-300 border-t border-gray-100">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-light tracking-wide text-gray-900 hover:text-gray-500 transition-colors">Home</Link>
          <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-light tracking-wide text-gray-900 hover:text-gray-500 transition-colors">Services</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-xl font-light tracking-wide text-gray-900 hover:text-gray-500 transition-colors">About Us</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-xl font-light tracking-wide text-gray-900 hover:text-gray-500 transition-colors">Projects</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-light tracking-wide text-gray-900 hover:text-gray-500 transition-colors">Contacts</Link>

          <button className="bg-[#050505] text-white font-semibold tracking-widest uppercase text-sm px-10 py-4 w-3/4 shadow-xl">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};
export default Header;
