"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button 
      onClick={selectTab}
      className="relative px-5 py-2.5 text-sm font-semibold tracking-wide uppercase outline-none select-none shrink-0 group rounded-lg"
    >
      {/* Text Layer: Stays crisp white when active, matte zinc when inactive */}
      <span 
        className={`relative z-10 transition-colors duration-300 font-sans ${
          active ? "text-white font-bold" : "text-zinc-400 group-hover:text-zinc-200"
        }`}
      >
        {children}
      </span>

      {/* 💧 iOS FLUID LIQUID WATER-DROP GLASS SLIDER */}
      {active && (
        <motion.div
          layoutId="activeTabSlider" // Glides the droplet seamlessly across buttons
          className="absolute inset-0 bg-white/[0.06] backdrop-blur-md border border-white/[0.15] rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.4)]"
          
          /* Liquid-style spring interpolation physics */
          transition={{
            type: "spring",
            stiffness: 140, // Organic, fluid speed
            damping: 18,    // Low damping creates a slight elastic stretching effect on movement
            mass: 0.8       // Lighter mass allows it to respond instantly and snap with high fidelity
          }}
        />
      )}
    </button>
  );
};

export default TabButton;
