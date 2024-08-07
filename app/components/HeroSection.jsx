"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hi I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Himanshu",
                  1000, // wait 1s before re
                  "Editor",
                  1000,
                  "Web Developer",
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
          <p className="text-[#ADB7BE] text-base mb-6 text-lg lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus similique ipsa tempora doloribus quisquam eius
            laudantium animi cupiditate enim! Asperiores in tenetur sint
            aliquam! Vel sed molestiae cumque nisi velit.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Contact
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white   mt-3">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                Follow on
              </span>
            </button>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="  ">
            <Image
              className="rounded-full  object-cover overflow-hidden "
              src="/images/himanshu-image.jpg "
              alt="himanshu image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
