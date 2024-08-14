import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-md">
      <div className="relative w-full h-0 pb-[56.25%]">
        {" "}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"></div>
        </div>
      </div>

      <div className="text-white bg-[#181818] py-4 px-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
