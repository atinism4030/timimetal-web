import React from "react";
import Image from "next/image";
import WeldingImage from "@/public/Image (Welding metal construction with sparks).png";

const metrics = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Welders" },
  { value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section className="bg-white w-full py-24 md:py-32 px-6 lg:px-20 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-gray-100 translate-x-6 translate-y-6 rounded-xl -z-10 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8" />
          <Image
            src={WeldingImage}
            alt="Welding Metal Construction"
            className="w-full h-auto object-cover rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] grayscale hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Floating Heritage Badge */}
          <div className="absolute -bottom-10 -right-10 bg-[#050505] text-white p-10 rounded-xl shadow-2xl hidden md:block">
            <p className="text-xs tracking-[0.4em] font-medium uppercase text-gray-400 mb-3">Established</p>
            <p className="text-6xl font-light tracking-tighter">1999</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col mt-8 md:mt-0 lg:pl-10">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-400 mb-6">Our Heritage</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Building <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">Excellence</span> <br/>
            Since 1999
          </h2>
          
          <div className="w-20 h-[1px] bg-gray-300 mb-8" />
          
          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-12 font-light">
            With over two decades of unwavering industry leadership, we deliver precision-engineered steel structures forged with cutting-edge technology. Our enterprise-grade solutions combine structural integrity, revolutionary design, and uncompromising safety standards to successfully execute mission-critical industrial projects worldwide.
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-12">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col border-l border-gray-200 pl-6">
                <p className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-2">{metric.value}</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
             <button className="bg-[#050505] text-white px-10 py-5 text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-4 group rounded-none">
               Discover Our Legacy
               <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
