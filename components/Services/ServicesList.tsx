import React from 'react'
import ServiceCard from './ServiceCard';
import { MdSolarPower } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import { TbCarCrane } from "react-icons/tb";
import { PiFactoryThin } from "react-icons/pi";
import { MdRoofing } from "react-icons/md";
import { TbWaveSawTool } from "react-icons/tb";


const ServicesList = () => {
    const constructionServices = [
  {
    title: "Structural Engineering",
    desc: "Design and analysis of building structures to ensure safety, durability, and compliance with regulations.",
    icon: <TbWaveSawTool size={40} color='blue'/>
  },
  {
    title: "Architectural Design",
    desc: "Creating innovative and functional designs that balance aesthetics, usability, and sustainability.",
    icon: <MdRoofing size={40} color='blue'/>
  },
  {
    title: "Project Management",
    desc: "End-to-end supervision of construction projects to ensure they are completed on time and within budget.",
    icon: <PiFactoryThin size={40} color='blue'/>
  },
  {
    title: "Metal Fabrication",
    desc: "Custom fabrication and installation of steel and metal components for industrial and commercial buildings.",
    icon: <TbCarCrane size={40} color='blue' />
  },
  {
    title: "Renovation & Remodeling",
    desc: "Upgrading existing structures to meet modern standards while maintaining their original character.",
    icon: <GiGreenhouse size={40} color='blue'/>
  },
  {
    title: "Electrical & Plumbing",
    desc: "Complete electrical and plumbing solutions for new builds and renovation projects.",
    icon: <MdSolarPower size={40} color='blue'/>
  }
];


  return (
    <div className=' grid grid-cols-3 gap-20 justify-center items-center mx-auto'>
        {
            constructionServices && constructionServices.map((service: any) => (
                <div className='flex  gap-2'>
                    <ServiceCard service={service} />
                </div>
            ))
        }
    </div>
  )
}

export default ServicesList