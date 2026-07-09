"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";

// Core Layout Section Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementSection from "./components/AchivementSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks"; // Import for the independent Thanks view

// Global Styling Imports
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

// High-Resolution Background Source Image
import bgImage from "../public/images/bg-texture.png";

export default function Home() {
  // GLOBAL STATE: Tracks if the form has been sent to update screen visibility conditions
  const [isSiteSubmitted, setIsSiteSubmitted] = useState(false);
  
  // ⏱️ NEW LOAD STATE: Holds back rendering until the optimization timer finishes
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // 🚀 3-SECOND TIMER GATING WINDOW: Holds layout rendering to let animations/images spin up cleanly
    const loadTimer = setTimeout(() => {
      setIsPageReady(true);
    }, 3000);

    const aosTimer = setTimeout(() => {
      AOS.init({
        duration: 800,  // Stays fast to protect your scrolling frame rate
        once: false,    // Set to false so animations fire every time they enter the screen
        mirror: true,   // Animates elements out smoothly when scrolling past them
      });
    }, 3100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(aosTimer);
    };
  }, []);

  // 🎬 LOADER RETURN TRIGGER: Displays your local GIF asset during initial loading intervals
  if (!isPageReady) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 select-none pointer-events-none w-full h-full">
        {/* FIXED: Increased container dimensions for a larger, high-impact visibility state */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56">
          <Image
            src="/images/loading.gif" // 🚀 Verified asset filename pointer
            alt="Optimizing Experience..."
            fill
            priority
            unoptimized // Crucial: prevents Next.js from breaking the GIF cycle
            className="object-contain"
          />
        </div>
        <p className="font-mono text-[11px] tracking-[0.35em] text-zinc-500 uppercase mt-6 animate-pulse">
          Optimizing Experience
        </p>
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col bg-zinc-950 overflow-x-hidden text-white antialiased">
      
      {/* 🌌 NEXT.JS SMART DEVICE-ADAPTIVE ACCELERATED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none w-full h-full">
        <Image
          src={bgImage}
          alt="Abstract Dark Textured Background"
          fill
          priority                 // Signals the browser to fetch this layer immediately
          quality={75}             // Sharp compression to save mobile bandwidth data
          sizes="100vw"            // Auto-generates responsive source paths for mobile, tablet, and desktop
          placeholder="blur"       // Instant blurry layout placeholder while image hydrates
          className="object-cover object-center opacity-50 brightness-[0.50] contrast-100 transition-opacity duration-500"
        />
        {/* Deep ambient dark gradient protection overlay ensuring code elements stay perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-zinc-950" />
      </div>

      {/* 🛡️ CONDITION WRAPPER: If submitted, wipes everything and shows only the Thanks Card */}
      {isSiteSubmitted ? (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
          {/* Passed the state reset function to allow returning to the main page */}
          <Thanks onReset={() => setIsSiteSubmitted(false)} />
        </div>
      ) : (
        /* 🛡️ GRAPHICAL ELEMENT VIEW WRAPPER (Sits safely on top of fixed background) */
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          {/* Adjusted responsive responsive padding thresholds (px-4 to px-12) to fit mobile */}
          <div className="container mt-24 mx-auto px-4 sm:px-12 py-4 flex-1 flex flex-col gap-20">
            
            <HeroSection />
            
            <div data-aos="flip-up" className="w-full">
              <AchievementSection />
            </div>
            
            <AboutSection />
            
            <ProjectSection />
            
            {/* Passed the global state transition prop function directly to your Contact module */}
            <ContactSection onGlobalSubmit={() => setIsSiteSubmitted(true)} />
            
          </div>
          
          <Footer />
        </div>
      )}
    </main>
  );
}
