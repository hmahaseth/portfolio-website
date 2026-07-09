"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const thoughts = [
  "Simplicity is the ultimate sophistication in both code and design.",
  "Capturing stories through a lens, engineering experiences with a keyboard.",
  "The best error message is the one that never shows up.",
  "A pixel-perfect website is nothing without lightning-fast performance.",
  "Adventure expands the mind, building web apps exercises it."
];

const Footer = () => {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  // Automatically cycle through random thoughts every 10 seconds
  useEffect(() => {
    const thoughtInterval = setInterval(() => {
      setThoughtIndex((prevIndex) => (prevIndex + 1) % thoughts.length);
    }, 10000);
    return () => clearInterval(thoughtInterval);
  }, []);

  // Automatically fade out the notification toast after 5 seconds
  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(alertTimer);
  }, []);

  return (
    <>
      {/* 🛡️ PREMIUM OVERLAY ALERT (Updated copy for user experience tracking) */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.4 } }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50 max-w-sm bg-white/[0.04] backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.6)] flex items-center gap-3.5"
          >
            {/* Ambient Vector Network Optimization Icon */}
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00bcd4]/10 border border-[#00bcd4]/20 text-[#00bcd4] shrink-0">
              <i className="fas fa-chart-line text-xs animate-pulse"></i>
            </div>
            
            {/* Custom Transparent Tracking & Space Message */}
            <div className="flex-1 font-sans">
              <p className="text-xs font-bold text-white tracking-wide uppercase">System Optimization</p>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                Welcome to Himanshu's core space. Anonymous interaction insights are active to measure system performance and engineer a better user experience.
              </p>
            </div>
            
            <button 
              onClick={() => setShowAlert(false)}
              className="text-zinc-500 hover:text-white p-1.5 transition-colors rounded-lg hover:bg-white/5 active:scale-95 shrink-0"
            >
              <i className="fas fa-times text-xs"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌐 iOS GLASS MORPHISM FOOTER FRAME */}
      <footer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="w-full max-w-screen-2xl mx-auto px-6 py-8 mt-12 bg-white/[0.02] backdrop-blur-xl border-t border-white/[0.08] rounded-t-3xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col gap-6"
      >
        {/* Upper Column Slot: Random Thoughts Dynamic Ticker */}
        <div className="w-full border-b border-white/[0.04] pb-6 flex flex-col items-center justify-center min-h-[45px] overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={thoughtIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="text-xs sm:text-sm font-medium tracking-wide italic text-zinc-400 font-sans max-w-2xl px-4"
            >
              "{thoughts[thoughtIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Lower Column Slot: Core Brand Attribution Elements */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl w-full mx-auto">
          
          {/* Left Side Grouping */}
          <div className="text-center md:text-left font-sans tracking-wide">
            <p className="text-sm font-semibold text-zinc-300">
              &copy; 2026 Himanshu Mahaseth. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-mono">
              Crafted with Next.js & Tailwind
            </p>
          </div>

          {/* Right Side Social Link Cluster */}
          <div className="flex items-center justify-center flex-wrap gap-4">
            <a
              href="https://github.com/hmahaseth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-white rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all duration-300 text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-white rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 transition-all duration-300 text-xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/royal-empire/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-[#0a66c2] rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 text-xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/himanshumahaseth_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-[#e1306c] rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#e1306c]/40 hover:bg-[#e1306c]/10 hover:shadow-[0_0_15px_rgba(225,48,108,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/himanshumahaseth8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-[#1877f2] rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#1877f2]/40 hover:bg-[#1877f2]/10 hover:shadow-[0_0_15px_rgba(24,119,242,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
