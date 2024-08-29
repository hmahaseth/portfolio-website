import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-1">
        {" "}
        {/* Added flex-1 to ensure it grows */}
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
