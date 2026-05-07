
"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();

if (
  pathname.startsWith("/admin") ||
  pathname.startsWith("/login")
) {
  return null;
}

  return (
    <footer className="bg-[#030712] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              TIMIMETAL
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Modern steel construction and industrial solutions built with precision, durability, and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3BA9FF] mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-[#3BA9FF] transition-colors">
                Home
              </Link>

              <Link href="/projects" className="hover:text-[#3BA9FF] transition-colors">
                Projects
              </Link>

              <Link href="/about" className="hover:text-[#3BA9FF] transition-colors">
                About
              </Link>

              <Link href="/contact" className="hover:text-[#3BA9FF] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3BA9FF] mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3BA9FF] mt-0.5" />
                <span>Tetovo, North Macedonia</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#3BA9FF]" />
                <span>+389 XX XXX XXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#3BA9FF]" />
                <span>info@timimetal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Timimetal. All rights reserved.</p>

          <p>
            Designed & Developed by Horizonte Digital Group.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
