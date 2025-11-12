"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { MdArchitecture, MdRoofing, MdSolarPower } from "react-icons/md";
import { PiFactoryThin } from "react-icons/pi";
import { TbWaveSawTool, TbCarCrane } from "react-icons/tb";

// Definimi i tipit të shërbimit
interface Service {
  title: string;
  desc: string;
  descOpen: string;
  icon: React.ReactNode;
}

// Përdorim vetëm 6 shërbime
const services: Service[] = [
    { title: "Structural Engineering", desc: "Reliable steel and concrete design.", descOpen: "Ky shërbim ofron dizajne të qëndrueshme të çelikut dhe betonit, duke siguruar integritetin e projektit tuaj me standardet më të larta inxhinierike.", icon: <TbWaveSawTool size={38} color="#0070f3" /> },
    { title: "Architectural Design", desc: "Innovative and sustainable planning.", descOpen: "Ne ofrojmë planifikim inovativ dhe të qëndrueshëm, duke përfshirë modelimin 3D dhe vizualizime të detajuara për të realizuar vizionin tuaj.", icon: <MdRoofing size={38} color="#0070f3" /> },
    { title: "Project Management", desc: "Supervision and on-time delivery.", descOpen: "Menaxhimi i plotë i projektit, duke garantuar mbikëqyrje të saktë, respektim të afateve dhe kontrolle të rrepta të cilësisë nga fillimi në fund.", icon: <PiFactoryThin size={38} color="#0070f3" /> },
    { title: "Metal Fabrication", desc: "Industrial and commercial builds.", descOpen: "Prerje, saldim dhe montim metali me precizion të lartë për projekte industriale dhe komerciale, duke përdorur teknologjinë më të fundit.", icon: <TbCarCrane size={38} color="#0070f3" /> },
    { title: "Consulting", desc: "Expert technical support.", descOpen: "Mbështetje teknike eksperte dhe studime fizibiliteti për projekte të mëdha, duke ofruar këshilla strategjike dhe zgjidhje të orientuara drejt të dhënave.", icon: <MdArchitecture size={38} color="#0070f3" /> },
    { title: "Electrical Systems", desc: "Smart integrated systems.", descOpen: "Dizajn dhe instalim i sistemeve elektrike të zgjuara, duke siguruar efikasitet energjetik dhe integrim të plotë të teknologjisë moderne në ndërtesën tuaj.", icon: <MdSolarPower size={38} color="#0070f3" /> },
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
            transition={{ layout: { type: "spring", duration: 0.8, bounce: 0.2 } }}
            className={`grid transition-all duration-700 gap-6 w-full max-w-[1200px] mx-auto py-10 px-6 relative h-[600px]
            ${activeIndex === null ? "grid-cols-3" : "grid-cols-4"}`}
        >
            {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                
                let scale = 1;
                let opacity = 1;
                let z = 5;
                let x = 0;
                let y = 0;
                let blur = 0;

                if (activeIndex !== null) {
                    if (isActive) {
                        z = 50;
                    } else {
                        // Kartat Jo-Aktive
                        scale = 0.9;     
                        opacity = 0.6;   
                        z = 1;
                        blur = 1;       

                        y = Math.random() * 10 - 5; 
                        x = Math.random() * 10 - 5;
                    }
                }

                return (
                    <motion.div
                        key={idx}
                        layout
                        animate={{ scale, opacity, x, y, zIndex: z }}
                        transition={{ 
                            layout: { type: "spring", duration: 0.8, bounce: 0.25 },
                            scale: { duration: 0.4 }, 
                            opacity: { duration: 0.4 },
                            x: { duration: 0.4 },
                            y: { duration: 0.4 },
                        }}
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                        className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                            isActive ? "col-span-3" : "col-span-1"
                        }`}
                        style={{
                            filter: `blur(${blur}px)`,
                        }}
                    >
                        <ServiceCard
                            service={service}
                            isActive={isActive}
                            onClick={() => setActiveIndex(isActive ? null : idx)}
                            onNext={handleNext} // Lëviz te karta tjetër
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default ServicesList;