"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true);
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          src="timimetal-drone.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoLoaded(true)}
          style={{ transform: "translateZ(0)" }}
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] will-change-transform"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_120%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center pb-20 lg:pb-1 px-6 md:px-12 lg:px-20 mx-auto">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVideoLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%" }}
                animate={isVideoLoaded ? { y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-white/70 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-2 ml-1"
              >
                E ardhmja e ndertesave te celikut
              </motion.p>
            </div>

            <h1 className="text-white font-light text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight ">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-500">
                Timimetal
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={isVideoLoaded ? { opacity: 1, width: "100px" } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-white/30 my-6 md:my-8"
            />

            <p className="text-gray-300 text-lg md:text-xl font-light max-w-xl leading-relaxed">
              Industriale, komerciale, infrastrukturë, LGS, shtëpi ekologjike.
              Ne i transformojmë planet ambicioze në realitete të qëndrueshme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVideoLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0"
          >
            <a
              href="#projects"
              className="group flex justify-between items-center gap-6 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide">
                Shiko Projektet
              </span>

              <div className="bg-white text-black p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVideoLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest hidden md:block">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
