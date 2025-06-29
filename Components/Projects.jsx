import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Bill Pay Koro",
    image: "../src/assets/Projects/A-9.png",
    description: "A responsive payment website for paying electricity, gas, and other utility bills. Users can get reminder of next bill payment date alongside the last payment date. All the UI is desgned with React, Tailwind and Daisyui. Firebase is used for authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://assignment-payment.web.app/",
    githubClient: "https://github.com/AzharChy/Phudu",
    githubServer: "https://github.com/AzharChy/Phudu",
  },
  {
    id: 2,
    name: "My Plant Care App",
    image: "../src/assets/Projects/A-10.png",
    description: "A plant care website designed for plant lovers. By the help of this website users can mark and get reminder about the next watering date alongside the last watered date. All the UI is desgned with React, Tailwind and Daisyui. Firebase is used for authentication. Mongodb, express and node is used for backend and dashboard made for admin",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://my-plant-app-c0fd4.web.app",
    githubClient: "https://github.com/AzharChy/Plant-App-Clinet",
    githubServer: "https://github.com/AzharChy/Plant-App-Clinet",
  },
  {
    id: 3,
    name: "Tourist Package",
    image: "../src/assets/Projects/A-11.png",
    description: "A website for tour ethuatits for exploring the world! Users can book tour package, Airlines and railway tickets throug this website. Admin can post tour pakcage alongside the guide information. All the UI is desgned with React, Tailwind and Daisyui. Firebase is used for authentication. Mongodb, express and node is used for backend",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://assignment-payment.web.app/",
    githubClient: "https://github.com/AzharChy/Tourist-Package-Client",
    githubServer: "https://github.com/AzharChy/Touris-App-Server",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="hero min-h-screen bg-base-200 px-4 py-12">
      <div className="hero-content flex flex-col items-center bg-[#252525] rounded-lg p-10 max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-white mb-10">My Projects</h2>

        <div className="space-y-8 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row bg-[#1e1e1e] text-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full lg:w-1/2 h-80 object-contain"
              />
              <div className="p-6 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="mb-4 text-xl">{project.description}</p>
                </div>
                <button
                  className="btn btn-outline btn-primary self-start"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <dialog id="project_modal" className="modal modal-open">
            <div className="modal-box bg-[#1e1e1e] text-white max-w-2xl">
              <h3 className="font-bold text-2xl text-primary mb-4">
                {selectedProject.name}
              </h3>
              <p className="mb-2">{selectedProject.description}</p>
              <p className="mb-2">
                <strong>Tech Stack:</strong> {selectedProject.tech.join(", ")}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-success"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Site
                </a>
                {selectedProject.githubClient && (
                  <a
                    href={selectedProject.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <FaGithub className="mr-2" /> Client Repo
                  </a>
                )}
                {selectedProject.githubServer && (
                  <a
                    href={selectedProject.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <FaGithub className="mr-2" /> Server Repo
                  </a>
                )}
              </div>

              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Projects;
