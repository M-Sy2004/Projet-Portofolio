import React from "react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveDemo: string;
}

const projects: Project[] = [
  {
    name: "Calculatrice JS",
    description: "Une calculatrice simple réalisée en JavaScript et HTML/CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/calculatrice.png",
    github: "https://github.com/mamoudousy/calculatrice-js",
    liveDemo: "https://mamoudousy.github.io/calculatrice-js",
  },
  {
    name: "Application gestion étudiants PHP",
    description:
      "Application de gestion des étudiants avec mentions, réalisée en PHP et stockage fichier.",
    technologies: ["PHP", "HTML", "CSS"],
    image: "/images/gestion-etudiants.png",
    github: "https://github.com/mamoudousy/gestion-etudiants",
    liveDemo: "#",
  },
  {
    name: "MbaxalMi Immo",
    description:
      "Site immobilier basé à Dakar avec interface moderne et responsive.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    image: "/images/mbaxalmi.png",
    github: "https://github.com/mamoudousy/mbaxalmi-immo",
    liveDemo: "https://mbaxalmi.vercel.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Projets
        </h2>

        {/* Cartes projets */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Boutons */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
