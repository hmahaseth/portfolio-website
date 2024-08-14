import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1",
    image: "/images/project/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Photography",
    description: "Project 2",
    image: "/images/project/digital.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Cinematography",
    description: "Project 3",
    image: "/images/project/Studio.jpg",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
