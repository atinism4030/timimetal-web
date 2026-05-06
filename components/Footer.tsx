import React from "react";
import PhoneIcon from "@/public/GetInTouchIcons/phone-call 1.png";
import MailIcon from "@/public/GetInTouchIcons/mail 1.png";
import LocationIcon from "@/public/GetInTouchIcons/pin 1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#030712] border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2563EB]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-5">
              Timi<span className="text-[#60A5FA]">metal</span>
            </h1>

            <p className="text-gray-400 leading-relaxed mb-8">
              Modern steel construction company focused on innovation,
              precision, and durable structural solutions for industrial and
              commercial projects.
            </p>

            <div className="flex flex-col gap-4">
              
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2563EB] transition-all duration-300">
                  <Image
                    alt="phone Icon"
                    src={PhoneIcon}
                    width={20}
                    height={20}
                  />
                </div>

                <p className="text-gray-300">+38910209553</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2563EB] transition-all duration-300">
                  <Image
                    alt="MailIcon"
                    src={MailIcon}
                    width={20}
                    height={20}
                  />
                </div>

                <p className="text-gray-300">info@timimetal.com</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2563EB] transition-all duration-300">
                  <Image
                    alt="LocationIcon"
                    src={LocationIcon}
                    width={20}
                    height={20}
                  />
                </div>

                <p className="text-gray-300">Tetovë, North Macedonia</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-6">
              Services
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Structural Steel
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Metal Fabrication
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Installation
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Quality Control
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Maintenance & Repair
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-6">
              Company
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                About Us
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Our Team
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Careers
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                News & Updates
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Safety Standards
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-6">
              Resources
            </h2>

            <div className="flex flex-col gap-4 text-gray-400">
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Project Gallery
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Technical Specifications
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Downloads
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Case Studies
              </p>
              <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
                Industry Insights
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Timimetal. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
              Terms of Service
            </p>

            <p className="hover:text-[#60A5FA] transition-colors cursor-pointer">
              Site Map
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;