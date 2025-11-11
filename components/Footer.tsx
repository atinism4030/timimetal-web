import React from "react";
import PhoneIcon from "@/public/GetInTouchIcons/phone-call 1.png";
import MailIcon from "@/public/GetInTouchIcons/mail 1.png";
import LocationIcon from "@/public/GetInTouchIcons/pin 1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[rgb(3,5,34)] h-130">
      <div className="flex grid-cols-4 justify-around pt-30 pb-10 text-gray-300">
        <div>
          <h1 className="py-5">Timimetal</h1>
          <p className="w-100 py-5 text-gray-300">
            Leading metal construction company delivering innovative structural
            solutions for industrial, commercial, and infrastructure projects
            since 1999.
          </p>
          <div className="flex py-1 ">
            <Image alt="phone Icon" src={PhoneIcon} width={30} />
            <p className="px-2">+38910209553</p>
          </div>
          <div className="flex py-1 ">
            <Image alt="MailIcon" src={MailIcon} width={30} />
            <p className="px-2">info@timimetal.com</p>
          </div>
          <div className="flex py-1 ">
            <Image alt="LocationIcon" src={LocationIcon} width={18} />
            <p className="px-5">Tetove</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl py-2">Services</h2>
          <p className="py-0.5">Structural Steel</p>
          <p className="py-0.5">Metal Fabrication</p>
          <p className="py-0.5">Installation</p>
          <p className="py-0.5">Quality Control</p>
          <p className="py-0.5">Maintance and Repair</p>
        </div >
        <div >
          <h2 className="font-bold text-2xl py-2">Company</h2>
          <p className="py-0.5">About Us</p>
          <p className="py-0.5">Our Team</p>
          <p className="py-0.5">Careers</p>
          <p className="py-0.5">News&Updates</p>
          <p className="py-0.5">Safety Standards</p>
        </div>
        <div>
          <h2 className="font-bold text-2xl py-2">Resources</h2>
          <p className="py-0.5">Project Gallery</p>
          <p className="py-0.5">Technicall Spesefications</p>
          <p className="py-0.5">Downloads</p>
          <p className="py-0.5">Case studies</p>
          <p className="py-0.5">Industry Insights</p>
        </div>
      </div>
      <hr className="border-gray-400 w-500 mx-auto my-4"/>
      <div className="flex justify-around tex-sm text-gray-600">
        <p>2025 Timimetal, All Rights reserved. </p>
        <p>Privacy Policy</p>
        <p>Tearms of Service</p>
        <p>Site Map</p>
      </div>
    </div>
  );
};

export default Footer;
