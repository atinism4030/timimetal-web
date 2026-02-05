"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "@/public/Logo timimetal.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full h-[80px] shadow-xl bg-white/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-20 h-full w-full max-w-[1920px] mx-auto">
        <Link href="/">
          <Image
            src={LogoImg}
            alt="Logo"
            width={200}
            height={80}
            className="cursor-pointer w-[150px] md:w-[200px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex justify-center items-center space-x-8 text-black font-semibold text-lg">
            <li>
              <Link href="/" className="hover:text-blue-600 transition duration-200">Home</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600 transition duration-200">Services</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-blue-600 transition duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-600 transition duration-200">Projects</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition duration-200">Blog</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition duration-200">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top-10 fade-in duration-300">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">Home</Link>
          <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">Services</Link>
          <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">About Us</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">Projects</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">Blog</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold hover:text-blue-600">Contacts</Link>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition w-3/4">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};
export default Header;
