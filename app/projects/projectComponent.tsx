import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface ProjectComponentProps {
  imagelink: string;
  projectName: string;
  projectDescription: string;
  techUsed: string[];
  githubLink: string;
  hostedLink: string;
}

function ProjectComponent({
  imagelink,
  projectName,
  projectDescription,
  techUsed,
  githubLink,
  hostedLink,
}: ProjectComponentProps) {
  return (
    <div className="w-full h-[70vh] px-6 py-4 flex flex-col bg-black bg-opacity-75 border-gray-500 border  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-1/2 relative rounded-xl overflow-hidden">
        <Image
          src={imagelink}
          alt={projectName}
          fill={true}
          objectFit="cover"
          className="rounded-t-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Details */}
      <h1 className="text-xl font-bold text-white mt-3">{projectName}</h1>
      <p className="text-sm text-gray-300 mt-1 whitespace-pre-line">{projectDescription}</p>


      {/* Technologies Used */}
      <div className="flex flex-wrap mt-3 gap-2">
        {techUsed.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-800 text-gray-200 px-3 py-1 rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex space-x-5 mt-auto pt-4">
        <a
          href={githubLink}
          target="_blank"
          className="flex items-center gap-2 text-white text-lg hover:text-gray-400 transition-colors"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
          <span>GitHub</span>
        </a>
        <a
          href={hostedLink}
          target="_blank"
          className="flex items-center gap-2 text-white text-lg hover:text-gray-400 transition-colors"
          rel="noopener noreferrer"
        >
          <TbWorld className="text-2xl" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
