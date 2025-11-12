"use client"; // E bën këtë komponent të ekzekutohet në anën e klientit (browser), jo në serverin e Next.js

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  // 📹 useRef përdoret për të marrë referencë të drejtpërdrejtë te video HTML
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🪄 useState për të kontrolluar nëse teksti duhet të shfaqet apo jo
  const [showText, setShowText] = useState(false);

  // ⚙️ useEffect – logjika që dëgjon kur video po luan dhe afron fundin
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // nëse video nuk është ngarkuar ende, dalim

    // Kjo funksion aktivizohet gjatë luajtjes së videos (sa herë ndryshon sekonda)
    const handleTimeUpdate = () => {
      // Nëse ka mbetur më pak se 1.2 sekonda nga fundi i videos...
      if (video.duration - video.currentTime <= 1.2) {
        setShowText(true); // ...shfaq tekstin (aktivizo animacionin)
      }
    };

    // Lidhe eventin "timeupdate" te video
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Pastrim kur komponenti largohet (shmang bugje)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []); // [] => ekzekutohet vetëm një herë kur ngarkohet komponenti

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 VIDEO E SFOND-it */}
      <video
        ref={videoRef} // lidhja e referencës
        src="timimetal-drone.mp4" // rruga e videos
        autoPlay // e luan automatikisht
        muted // pa zë (shumica e shfletuesve nuk lejojnë autoplay me zë)
        playsInline // në mobile nuk e hap fullscreen
        className="absolute inset-0 w-full h-full object-cover brightness-90" // mbulon krejt ekranin
      />

      {/* 🌑 Hije për kontrast (poshtë më e errët, sipër më e ndritshme) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* ✨ TEKSTI NË KËNDIN E MAJTË POSHTË */}
      <div
        className={`absolute top-1/2 left-10 md:left-20 -translate-y-1/2 max-w-400 transition-all duration-1000 ${
          showText ? "opacity-100 translate-x-10" : "opacity-0 -translate-x-10"
        }`}
      >
        {/* TITULLI KRYESOR
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
          Welcome to <span className="text-blue-400">TIMIMETAL</span>
          <br />
          Let’s Bring Your Ideas to Life
        </h1> */}

        <div className="text-7xl ">
          <h1>
            Welcome to <span className="font-bold">Timimetal</span>
            <br /> Let`s Bring Your Ideas to Life
          </h1>
        </div>

        {/* NËNTITULLI */}
        <p className="text-gray-200 text-2xl md:text-3xl mt-6 max-w-2xl leading-snug">
          Industrial, commercial, infrastructure, LGS, eco-friendly homes — we
          turn your ideas into strong, lasting structures.
        </p>

        {/* BUTONAT */}
        <div className="flex gap-4 mt-8 pt-9">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
            View Our Projects →
          </button>
          <button className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
