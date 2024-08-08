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
        <li>React</li>
        <li>Js</li>
        <li>Photography</li>
        <li>Videography</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Capital College And Research Center</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>React</li>
        <li>Js</li>
        <li>Photography</li>
        <li>Videography</li>
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
    <section className="text-white p-8">
      <div className="flex flex-row space-x-4">
        <Image
          className=" rounded-md"
          src="/images/car.jpg"
          width={300}
          height={300}
        />
        <div>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            In the digital realm, I transform ideas into interactive and
            user-friendly websites. With a keen eye for detail and a passion for
            visual aesthetics, I specialize in capturing breathtaking images
            that tell a story.I thrive on capturing life's most compelling
            moments and turning them into visually stunning narratives. My work
            is deeply influenced by my love for adventure.
          </p>
          <div className="flex flex-row mt-8">
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
