"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArchitecture, MdRoofing, MdSolarPower } from "react-icons/md";
import { PiFactoryThin } from "react-icons/pi";
import { TbWaveSawTool, TbCarCrane } from "react-icons/tb";

interface Service {
    title: string;
    descOpen: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    { title: "Structural Engineering and Design", descOpen: "Reliable structural designs for steel and concrete, ensuring your project's integrity with the highest engineering standards.", icon: <TbWaveSawTool size={36} className="text-gray-500" /> },
    { title: "Metal Consturction", descOpen: "Innovative and sustainable planning, including 3D modeling and detailed visualizations to realize your vision.", icon: <MdRoofing size={36} className="text-gray-500" /> },
    { title: "LGS Contruction", descOpen: "Complete project management, ensuring precise supervision, deadline compliance, and strict quality controls from start to finish.", icon: <PiFactoryThin size={36} className="text-gray-500" /> },
    { title: "Metal Roofing and Facade", descOpen: "High-precision metal cutting, welding, and assembly for industrial and commercial projects using the latest technology.", icon: <TbCarCrane size={36} className="text-gray-500" /> },
    { title: "Crane Services", descOpen: "Expert technical support and feasibility studies for large scale projects, providing strategic advice and data-driven solutions.", icon: <MdArchitecture size={36} className="text-gray-500" /> },
    { title: "Photovoltaic system", descOpen: "Design and installation of smart electrical systems, ensuring energy efficiency and full integration of modern technology in your building.", icon: <MdSolarPower size={36} className="text-gray-500" /> },
];

const ServicesList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative bg-[#fafafa] hover:bg-white border border-gray-100 px-10 py-12 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] cursor-default overflow-hidden"
                >
                    <div className="mb-10 text-gray-900 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 origin-left">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">{service.descOpen}</p>
                    
                    {/* Hover indicator effect */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-700 ease-in-out" />
                </motion.div>
            ))}
        </div>
    );
};

export default ServicesList;