// components/AchievementSection.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Utility function for counting up animation
const useCountUp = (endValue, duration = 1) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 1000 / 60; // update every frame (60 FPS)
    const end = endValue;
    const totalSteps = Math.ceil((duration * 1000) / stepTime);
    const stepValue = (end - start) / totalSteps;

    const updateValue = () => {
      start += stepValue;
      if (start >= end) {
        setValue(end);
        return;
      }
      setValue(Math.round(start));
      requestAnimationFrame(updateValue);
    };

    updateValue();
  }, [endValue, duration]);

  return value;
};

const achievements = [
  { label: "Number of Photo Clicks", count: 1234 },
  { label: "Cinematography Projects", count: 56 },
  { label: "Websites Created or Contributed", count: 10 },
];

const AchievementSection = () => {
  return (
    <section
      style={{
        padding: "2rem",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        data-aos="fade-down"
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
        {achievements.map((achievement, index) => {
          const animatedCount = useCountUp(achievement.count, 2); // 2 seconds for animation
          return (
            <motion.div
              key={index}
              style={{
                background: "#333",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                padding: "1.5rem",
                width: "200px",
                textAlign: "center",
                transition:
                  "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
                cursor: "pointer",
                transform: "scale(1)",
              }}
              whileHover={{
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.6)",
                transform: "scale(1.05)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#00bcd4",
                  margin: "0",
                }}
              >
                {animatedCount}+
              </h3>
              <p
                style={{ fontSize: "1rem", color: "#ddd", fontWeight: "bold" }}
              >
                {achievement.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AchievementSection;
