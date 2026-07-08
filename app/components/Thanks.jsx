"use client";
import React from "react";

// FIXED: Added an 'onReset' prop callback to talk directly to your main page state
const Thanks = ({ onReset }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-anchor-placement="top-center" 
      className="w-full max-w-xl mx-auto flex items-center justify-center p-4 sm:p-8"
    >
      {/* 🔮 iOS TRANSLUCENT FROSTED GLASS CAPSULE CARD */}
      <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-10 text-center shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)] group transition-all duration-300 hover:border-white/[0.15]">
        
        {/* Animated Checkmark Vector Circle Indicator */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00bcd4]/10 border border-[#00bcd4]/20 text-[#00bcd4] mx-auto mb-6 shadow-[0_0_20px_rgba(0,188,212,0.15)] animate-pulse">
          <i className="fas fa-check text-xl"></i>
        </div>

        {/* Premium Silver Metallic Header */}
        <h1 className="text-2xl sm:text-3xl font-black uppercase font-mono tracking-tighter text-white mb-4">
          Thank You!
        </h1>
        
        {/* Matte Zinc Description Content */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed tracking-wide font-sans mb-8 text-justify sm:text-center max-w-md mx-auto">
          Your submission has been securely received via system relays. 
          I appreciate you reaching out and will get back to your message soon!
        </p>
        
        {/* FIXED: Swapped out Link for a button that resets your page state configuration layout on click */}
        <button 
          onClick={onReset}
          className="inline-block w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-b from-white via-zinc-200 to-zinc-400 hover:from-zinc-100 hover:to-zinc-300 text-black font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Thanks;
