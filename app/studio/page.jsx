"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import bgImage from "@/public/images/bg-texture.png";
// Safely reuses your optimized texture asset

export default function StudioPage() {
  return (
    <main  className="relative flex min-h-screen flex-col bg-zinc-950 overflow-x-hidden text-white antialiased items-center justify-center p-4">
      
      {/* 🌌 FULL SCREEN DEVICE ADAPTIVE BACKGROUND REFRACTION SHEET */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none w-full h-full">
        <Image
          src={bgImage}
          alt="Studio Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center opacity-40 brightness-[0.45] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-zinc-950" />
      </div>

      {/* 🔮 iOS GLASS MORPHISM CREATIVE STUDIOS FRAME CAP */}
      <div data-aos="zoom-in" className="relative z-10 w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-[0_24px_70px_-15px_rgba(0,0,0,0.8)]">
        
        {/* Shimmering Dynamic Gear Logo Node */}
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00bcd4]/10 border border-[#00bcd4]/20 text-[#00bcd4] mx-auto mb-8 shadow-[0_0_30px_rgba(0,188,212,0.2)] animate-[spin_8s_linear_infinite]">
          <i className="fas fa-compact-disc text-2xl"></i>
        </div>

        {/* Premium Production Title */}
        <h1 data-aos="fade-right" className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 mb-2 leading-none">
          Signature Creative
        </h1>
        <h2 data-aos="fade-left" className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#00bcd4] font-sans mb-6">
          Studios
        </h2>
        
        {/* Soft Separator divider rule */}
        <div className="w-16 h-[2px] bg-white/10 mx-auto mb-6 rounded-full" />
        
        {/* Matte info content block */}
        <p data-aos="fade-up-right" className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide font-sans mb-10 max-w-md mx-auto">
          Our high-end cinematography, visual narrative architecture, and post-production creative engineering environment is currently in active development. Coming soon for full production.
        </p>
        
        {/* Brushed Silver Return Hub Navigation Trigger */}
        <Link data-aos="fade-up-left"
          href="/"
          className="inline-block w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-b from-white via-zinc-200 to-zinc-400 hover:from-zinc-100 hover:to-zinc-300 text-black font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
        >
          <i  className="fas fa-arrow-left mr-2 text-xs"></i> Return to Portfolio
        </Link>
      </div>

    </main>
  );
}
