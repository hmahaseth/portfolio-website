"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import img1 from "../../public/images/himanshu.JPG";

const HeroSection = () => {
  return (
    <section className=" max-w-screen-2xl p-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            data-aos="zoom-in"
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          >
            Hi I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Himanshu",
                  1000, // wait 1s before re
                  "Student",
                  1000,
                  "Developer",
                  1000,
                  "Photographer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p
            data-aos="fade-right"
            className="text-[#ADB7BE] text-base mb-6 text-lg lg:text-xl text-justify"
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
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/royal-empire/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                data-aos="fade-up"
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                Contact
              </button>
            </a>
            <a
              href="https://www.instagram.com/himanshumahaseth_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                data-aos="fade-up"
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white   mt-3"
              >
                <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                  Follow on
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="  ">
            <Image
              data-aos="fade-up"
              className="rounded-full  object-cover overflow-hidden transition-shadow duration-300 hover:shadow-glow "
              src={img1}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
