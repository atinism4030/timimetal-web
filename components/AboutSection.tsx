import React from "react";
import Image from "next/image";
import WeldingImage from "@/public/Image (Welding metal construction with sparks).png";

const AboutSection = () => {
  return (
    <section className="
      w-full 
      flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 
      py-16 px-6 md:py-24 md:px-16 
      bg-gradient-to-br from-white via-[#f5f8ff] to-[#eeeff3]
      shadow-[0px_30px_90px_rgba(30,80,200,0.08)]
      backdrop-blur-[1px]
    ">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="w-28 h-[4px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-xl"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Building Excellence Since 1999
          </h2>
          <div className="w-28 h-[4px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-xl"></div>
        </div>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Precision-engineered steel structures forged with cutting-edge welding
          technology. Our certified team delivers advanced metal construction
          solutions combining structural integrity, innovative design, and
          uncompromising safety standards for mission-critical industrial
          projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center justify-center gap-3 
                    p-8 w-full h-auto min-h-[180px] rounded-2xl bg-white border 
                    border-[#e8eeff] 
                    shadow-[0px_10px_30px_rgba(30,80,200,0.10)]
                    hover:shadow-[0px_14px_40px_rgba(30,80,200,0.17)]
                    hover:-translate-y-1 
                    transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-200 shadow rounded-full"></div>
              <p className="text-3xl font-bold text-gray-800">50+</p>
              <p className="text-gray-500 text-sm tracking-wide uppercase">
                Expert Welders
              </p>
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-r w-full sm:w-[300px] h-[60px] mt-6 from-blue-400 to-blue-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition">
          Learn More About Us
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-start mt-8 lg:mt-0">
        <Image
          src={WeldingImage}
          width={730}
          height={650}
          alt="Welding Worker"
          className="rounded-3xl object-cover shadow-[0px_15px_40px_rgba(0,0,0,0.15)] w-full h-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
