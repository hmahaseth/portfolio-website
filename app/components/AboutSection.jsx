"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      /* FIXED: Switched grid-cols-1 as baseline for mobile screens to stop text wrapping bugs, sm:grid-cols-2 on desktop */
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pl-1 text-zinc-300 font-medium">
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 overflow-hidden relative p-1 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
            <Image 
              src="/images/Nextjs-Logo-Vector.svg-.png" 
              alt="Next.js Logo" 
              width={20} 
              height={20}
              className="object-contain filter brightness-100 invert"
            />
          </div>
          <span className="tracking-wide whitespace-nowrap">NEXTjs</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-[#339933] transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#339933]/5 border border-[#339933]/20 text-[#339933] text-base shrink-0">
            <i className="fab fa-node-js"></i>
          </div>
          <span className="tracking-wide text-zinc-300 hover:text-zinc-100 whitespace-nowrap">Nodejs</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-[#00bcd4] transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-video"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Video Editing</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-[#00bcd4] transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-palette"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Graphics Designing</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4 pl-1 text-zinc-300 font-medium">
        <li data-aos="fade-right" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#00bcd4]/10 border border-[#00bcd4]/20 text-[#00bcd4] shrink-0">
            <i className="fas fa-graduation-cap text-xs"></i>
          </div>
          <span className="tracking-wide">+2 From CCRC</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#00bcd4]/10 border border-[#00bcd4]/20 text-[#00bcd4] shrink-0">
            <i className="fas fa-university text-xs"></i>
          </div>
          <span className="tracking-wide">Engineering from IOE ERC</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      /* FIXED: Re-engineered layout with grid-cols-1 to keep items perfectly aligned and clean on devices */
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pl-1 text-zinc-300 font-medium">
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-code text-xs"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Web Development</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-film text-xs"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Cinematography</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-camera text-xs"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Photography</span>
        </li>
        <li data-aos="fade-right" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-zinc-400 shrink-0">
            <i className="fas fa-video text-xs"></i>
          </div>
          <span className="tracking-wide whitespace-nowrap">Videography</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white max-w-screen-2xl mx-auto py-4 px-4 sm:px-0">
      <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Fixed, Contained Image Wrapper */}
          <div className="md:col-span-5 w-full flex justify-center self-start">
            <div className="relative w-full max-w-[340px] md:max-w-none aspect-square rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">
              <Image
                data-aos="fade-right"
                className="rounded-xl object-cover object-center transition-all duration-300 hover:scale-[1.02]"
                src="/images/about.jpg"
                alt="About Me Portrait Image"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Tabbed Content Block */}
          <div className="md:col-span-7 flex flex-col justify-start">
            <h2 
              data-aos="fade-left" 
              className="text-white mb-4 text-3xl sm:text-4xl font-black tracking-tighter uppercase font-mono"
            >
              About Me
            </h2>
            
            <p 
              data-aos="fade-up-left" 
              className="text-zinc-400 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed tracking-wide text-justify font-sans"
            >
              In the digital realm, I transform ideas into interactive and
              user-friendly websites. With a keen eye for detail and a passion for
              visual aesthetics, I specialize in capturing breathtaking images
              that tell a story. I thrive on capturing life's most compelling
              moments and turning them into visually stunning narratives. My work
              is deeply influenced by my love for adventure.
            </p>
            
            {/* iOS Glass Tab Switch Track Frame */}
            <div 
              data-aos="fade-up-left" 
              className="flex flex-row p-1 bg-white/[0.02] border border-white/[0.05] rounded-xl mb-6 max-w-fit overflow-x-auto"
            >
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                Skills
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                Education
              </TabButton>
              <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                Experience
              </TabButton>
            </div>

            {/* Content Tab Window wrapper box */}
            <div className="min-h-[180px] sm:min-h-[160px] p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>

          {/* FIXED: Restored the missing end export token link safely inside closure scope context */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
