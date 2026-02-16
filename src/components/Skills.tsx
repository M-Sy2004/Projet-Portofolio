import React from "react";

const skills: string[] = [
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "MySQL",
  "React",
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Compétences
        </h2>

        {/* Cartes des compétences */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300"
            >
              <p className="text-xl font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
