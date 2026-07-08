"use client";
import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div
      data-aos="zoom-in-up"
      /* FIXED: Replaced sharp solid boxes with floating translucent iOS frosted layout card frames */
      className="group relative w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:translate-y-[-4px]"
    >
      {/* Upper Aspect Wrapper: Holds Project Graphic */}
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-zinc-950">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          {/* FIXED: Replaced standard overlay with a modern high-contrast premium glass mask on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        </div>
      </div>

      {/* Lower Aspect Wrapper: Holds Description Metadata */}
      <div className="py-5 px-6 font-sans">
        <h5 className="text-white text-lg font-bold tracking-tight mb-2 transition-colors duration-300 group-hover:text-zinc-200">
          {title}
        </h5>
        <p className="text-zinc-400 text-sm leading-relaxed tracking-wide text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
