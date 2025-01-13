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
        background: "#333",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        padding: "1.5rem",
        width: "200px",
        textAlign: "center",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.6)";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h3
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#00bcd4",
          margin: "0",
        }}
      >
        {triggerAnimation ? (
          <CountUp start={0} end={achievement.count} duration={2} />
        ) : (
          0
        )}
        +
      </h3>
      <p style={{ fontSize: "1rem", color: "#ddd", fontWeight: "bold" }}>
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
          padding: "2rem",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#f5f5f5" }}
        >
          Achievements
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
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
