import React from "react";
import PhoneIcon from "@/public/GetInTouchIcons/phone-call 1.png";
import MailIcon from "@/public/GetInTouchIcons/mail 1.png";
import LocationIcon from "@/public/GetInTouchIcons/pin 1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[rgb(3,5,34)] py-16 text-gray-300 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Timimetal</h1>
          <p className="max-w-xs text-gray-400 leading-relaxed">
            Leading metal construction company delivering innovative structural
            solutions for industrial, commercial, and infrastructure projects
            since 1999.
          </p>
          <div className="flex items-center gap-3">
            <Image alt="phone Icon" src={PhoneIcon} width={24} height={24} />
            <p>+38910209553</p>
          </div>
          <div className="flex items-center gap-3">
            <Image alt="MailIcon" src={MailIcon} width={24} height={24} />
            <p>info@timimetal.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Image alt="LocationIcon" src={LocationIcon} width={24} height={24} />
            <p>Tetove</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl text-white mb-4">Services</h2>
          <div className="flex flex-col gap-2 text-gray-400">
            <p>Structural Steel</p>
            <p>Metal Fabrication</p>
            <p>Installation</p>
            <p>Quality Control</p>
            <p>Maintance and Repair</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl text-white mb-4">Company</h2>
          <div className="flex flex-col gap-2 text-gray-400">
            <p>About Us</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>News & Updates</p>
            <p>Safety Standards</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-xl text-white mb-4">Resources</h2>
          <div className="flex flex-col gap-2 text-gray-400">
            <p>Project Gallery</p>
            <p>Technicall Spesefications</p>
            <p>Downloads</p>
            <p>Case studies</p>
            <p>Industry Insights</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-800 my-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 max-w-7xl mx-auto">
        <p>&copy; 2025 Timimetal, All Rights reserved. </p>
        <div className="flex flex-wrap justify-center gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
