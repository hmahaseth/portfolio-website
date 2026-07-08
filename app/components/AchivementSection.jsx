"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const achievements = [
  { label: "Photography Projects", count: 3852 },
  { label: "Cinematography Projects", count: 559 },
  { label: "Websites Created or Contributed", count: 11 },
];

const AchievementItem = ({ achievement, triggerAnimation }) => {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "20px",
        border: "1px rgba(255, 255, 255, 0.08) solid",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        padding: "2rem 1.5rem",
        width: "240px",
        textAlign: "center",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 35px rgba(0, 188, 212, 0.25)";
        e.currentTarget.style.borderColor = "rgba(0, 188, 212, 0.4)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px -15px rgba(0, 0, 0, 0.5)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
      }}
    >
      <h3
        style={{
          fontSize: "2.75rem",
          fontWeight: "800",
          letterSpacing: "-0.04em",
          color: "#00bcd4",
          margin: "0 0 0.5rem 0",
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
        {triggerAnimation ? (
          <CountUp start={0} end={achievement.count} duration={2.5} separator="," />
        ) : (
          0
        )}
        +
      </h3>
      <p 
        style={{ 
          fontSize: "0.9rem", 
          color: "#a1a1aa", 
          fontWeight: "500", 
          margin: "0",
          lineHeight: "1.4",
          letterSpacing: "0.02em"
        }}
      >
        {achievement.label}
      </p>
    </div>
  );
};

const AchievementSection = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setTriggerAnimation(true)}
      onExit={() => setTriggerAnimation(false)}
    >
      <section
        style={{
          padding: "5rem 2rem",
          backgroundColor: "transparent", // Allows page container's premium dark background to show through
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{ 
            fontSize: "2.25rem", 
            fontWeight: "900",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono), monospace",
            marginBottom: "3rem", 
            color: "white" 
          }}
        >
          Achievements
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              achievement={achievement}
              triggerAnimation={triggerAnimation}
            />
          ))}
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AchievementSection;
