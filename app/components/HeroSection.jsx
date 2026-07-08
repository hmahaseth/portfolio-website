"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../public/images/himanshu.JPG";

const wordsSequence = ["Himanshu", "a Student", "a Developer", "a Photographer"];
const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 12; // Controls how long the scrambling/rolling lasts
    let animationFrameId;

    const tick = () => {
      if (frame >= totalFrames) {
        setDisplayText(text);
        return;
      }

      // Progressively locks characters from left to right as time goes on
      const progress = frame / totalFrames;
      const lettersToScrambleStart = Math.floor(text.length * progress);

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < lettersToScrambleStart) return text[index];
          // Generates a random character to mimic an increasing value transition
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join("");

      setDisplayText(scrambled);
      frame++;
      animationFrameId = setTimeout(tick, 40); // Controls the speed of character updates
    };

    tick();
    return () => clearTimeout(animationFrameId);
  }, [text]);

  return <>{displayText}</>;
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordsSequence.length);
    }, 3000); // Cycles to the next word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-12 sm:p-12 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* iOS Glass Container Effect */}
      <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)]">
        
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Premium Silver Typography Content */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            
            <h1
              data-aos="zoom-in"
              className="text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase font-mono inline-flex flex-wrap items-baseline justify-center md:justify-start gap-x-3 w-full leading-none"
            >
              <span className="leading-none">Hi I'm</span>
              
              {/* Dynamic Text Container aligned cleanly with baseline rows */}
              <span className="inline-flex relative normal-case font-sans font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-500 text-center md:text-left min-w-[280px] lg:min-w-[340px] items-baseline self-baseline leading-none">
                <ScrambleText text={wordsSequence[index]} />
              </span>
            </h1>
            
            {/* Matte Silver Body Text */}
            <p
              data-aos="fade-right"
              className="text-zinc-400 text-sm sm:text-base lg:text-lg mb-8 text-center md:text-justify leading-relaxed max-w-xl md:max-w-none font-sans tracking-wide"
            >
              I’m a versatile professional with a passion for capturing and
              creating engaging visual content. As a photographer, videographer,
              and cinematographer, I specialize in bringing stories to life
              through compelling imagery and dynamic video production. My eye for
              detail and creative vision help me craft visually stunning content
              that resonates with audiences. In addition to my work behind the
              camera, I am also an adept web developer. I blend technical skills
              with artistic flair to build engaging and user-friendly websites,
              ensuring that every project not only looks great but performs
              seamlessly.
            </p>
            
            {/* iOS Sleek Button Controls */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center"
              >
                <button
                  data-aos="fade-up"
                  className="px-8 py-3.5 w-full sm:w-fit rounded-xl bg-gradient-to-b from-white via-zinc-200 to-zinc-400 hover:from-zinc-100 hover:to-zinc-300 text-black font-semibold text-sm tracking-wide uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  Contact
                </button>
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center"
              >
                <button
                  data-aos="fade-up"
                  className="px-8 py-3.5 w-full sm:w-fit rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/20 hover:border-white/40 font-semibold text-sm tracking-wide uppercase transition-all duration-300 backdrop-blur-md active:scale-[0.98]"
                >
                  Follow on
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: iOS Profile Image Box */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              <Image
                data-aos="fade-up"
                className="rounded-full object-cover filter contrast-[1.05] brightness-[0.95]"
                src={img1}
                alt="Himanshu Profile Picture"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 384px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
