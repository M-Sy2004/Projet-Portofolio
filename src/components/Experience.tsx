import React from "react";

interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    year: "2025",
    role: "Projet scolaire - Portfolio",
    company: "Aiglix Lab / Personnel",
    description:
      "Développement d’un portfolio en React + Tailwind pour l’évaluation de frontend. Utilisation de Git, GitHub et déploiement en ligne.",
  },
  {
    year: "2024",
    role: "Stage en développement Web",
    company: "TGI / MbaxalMi Immo",
    description:
      "Participation à la création de pages web dynamiques et responsive notamment celui de MbaxalMi Immo. Introduction aux bonnes pratiques frontend.",
  },
  {
    year: "2023",
    role: "Projet personnel",
    company: "Freelance / Personnel",
    description:
      "Création de petits projets web pour s’entraîner : calculatrice JS, jeu de hasard, site vitrine.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Expériences professionnelles
        </h2>

        {/* Liste des expériences */}
        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start md:space-x-6 bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <span className="text-blue-400 font-semibold md:w-32">{item.year}</span>
              <div>
                <h3 className="text-xl font-bold">{item.role}</h3>
                <p className="text-gray-300 italic mb-2">{item.company}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
