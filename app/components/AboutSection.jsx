"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li data-aos="fade-right">Nextjs</li>
        <li data-aos="fade-right">HTML</li>
        <li data-aos="fade-right">C language</li>
        <li data-aos="fade-right">JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li data-aos="fade-right">CCRC</li>
        <li data-aos="fade-right">IOE ERC</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li data-aos="fade-right">Reactjs</li>
        <li data-aos="fade-right">Developer</li>
        <li data-aos="fade-right">Photography</li>
        <li data-aos="fade-right">Videography</li>
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
    <section id="about" className="text-white p-8 max-w-screen-2xl">
      <div className="flex flex-col md:flex-row space-x-4">
        <Image
          data-aos="fade-right"
          className=" object-cover rounded-md transition-shadow duration-300 hover:shadow-glow"
          src="/images/about.jpg"
          alt=""
          width={300}
          height={300}
        />
        <div>
          <h2 data-aos="fade-left" className="text-4xl font-bold text-white">
            About Me
          </h2>
          <p data-aos="fade-up-left" className="text-base lg:text-lg">
            In the digital realm, I transform ideas into interactive and
            user-friendly websites. With a keen eye for detail and a passion for
            visual aesthetics, I specialize in capturing breathtaking images
            that tell a story.I thrive on capturing life's most compelling
            moments and turning them into visually stunning narratives. My work
            is deeply influenced by my love for adventure.
          </p>
          <div data-aos="fade-up-left" className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
