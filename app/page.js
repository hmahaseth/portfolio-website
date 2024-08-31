"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactSection from "./components/ContactSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AchievementSection from "./components/AchivementSection";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-1">
        {" "}
        {/* Added flex-1 to ensure it grows */}
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
