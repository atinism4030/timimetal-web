"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 1.2) {
        setShowText(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="timimetal-drone.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div
        className={`absolute top-1/2 left-4 md:left-20 -translate-y-1/2 max-w-[90%] md:max-w-2xl transition-all duration-1000 ${showText ? "opacity-100 translate-x-0 md:translate-x-10" : "opacity-0 -translate-x-10"
          }`}
      >
        <div className="text-4xl md:text-5xl lg:text-7xl">
          <h1 className="text-white">
            Welcome to <span className="font-bold">Timimetal</span>
            <br /> Let`s Bring Your Ideas to Life
          </h1>
        </div>

        <p className="text-gray-200 text-lg md:text-2xl lg:text-3xl mt-6 max-w-2xl leading-snug">
          Industrial, commercial, infrastructure, LGS, eco-friendly homes — we
          turn your ideas into strong, lasting structures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-9">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition w-full sm:w-auto">
            View Our Projects →
          </button>
          <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition w-full sm:w-auto">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
