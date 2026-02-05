"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { MdArchitecture, MdRoofing, MdSolarPower } from "react-icons/md";
import { PiFactoryThin } from "react-icons/pi";
import { TbWaveSawTool, TbCarCrane } from "react-icons/tb";

interface Service {
    title: string;
    desc: string;
    descOpen: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    { title: "Structural Engineering", desc: "Reliable steel and concrete design.", descOpen: "Reliable structural designs for steel and concrete, ensuring your project's integrity with the highest engineering standards.", icon: <TbWaveSawTool size={38} color="#0070f3" /> },
    { title: "Architectural Design", desc: "Innovative and sustainable planning.", descOpen: "Innovative and sustainable planning, including 3D modeling and detailed visualizations to realize your vision.", icon: <MdRoofing size={38} color="#0070f3" /> },
    { title: "Project Management", desc: "Supervision and on-time delivery.", descOpen: "Complete project management, ensuring precise supervision, deadline compliance, and strict quality controls from start to finish.", icon: <PiFactoryThin size={38} color="#0070f3" /> },
    { title: "Metal Fabrication", desc: "Industrial and commercial builds.", descOpen: "High-precision metal cutting, welding, and assembly for industrial and commercial projects using the latest technology.", icon: <TbCarCrane size={38} color="#0070f3" /> },
    { title: "Consulting", desc: "Expert technical support.", descOpen: "Expert technical support and feasibility studies for large scale projects, providing strategic advice and data-driven solutions.", icon: <MdArchitecture size={38} color="#0070f3" /> },
    { title: "Electrical Systems", desc: "Smart integrated systems.", descOpen: "Design and installation of smart electrical systems, ensuring energy efficiency and full integration of modern technology in your building.", icon: <MdSolarPower size={38} color="#0070f3" /> },
];

const ServicesList: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleNext = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % services.length);
    };

    return (
        <motion.div
            layout
            transition={{ layout: { type: "spring", duration: 0.5, bounce: 0.1 } }}
            className={`grid gap-6 w-full max-w-[1200px] mx-auto py-10 px-6 relative h-auto min-h-[600px]
            grid-cols-1 ${activeIndex === null ? "md:grid-cols-3" : "md:grid-cols-4"}`}
        >
            {services.map((service, idx) => {
                const isActive = activeIndex === idx;

                return (
                    <motion.div
                        key={idx}
                        layout
                        initial={false}
                        animate={{
                            opacity: activeIndex !== null && !isActive ? 0.6 : 1,
                            scale: activeIndex !== null && !isActive ? 0.95 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                        className={`relative cursor-pointer transition-all duration-300 ${isActive ? "md:col-span-3" : "md:col-span-1"
                            }`}
                    >
                        <ServiceCard
                            service={service}
                            isActive={isActive}
                            onClick={() => setActiveIndex(isActive ? null : idx)}
                            onNext={handleNext}
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default ServicesList;