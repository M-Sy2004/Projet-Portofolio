import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          À propos
        </h2>

        {/* Contenu */}
        <div className="space-y-8 text-lg md:text-xl">
          <p>
            <span className="font-semibold">Qui suis-je ?</span><br />
            Je suis <span className="text-blue-400">Mamoudou Sy</span>, développeur web frontend passionné par la création d’interfaces modernes et performantes.
          </p>

          <p>
            <span className="font-semibold">Mon parcours</span><br />
            J’ai suivi une formation en développement web et travaillé sur plusieurs projets personnels et professionnels, en utilisant React, TypeScript et Tailwind CSS.
          </p>

          <p>
            <span className="font-semibold">Ce que je recherche</span><br />
            Je souhaite rejoindre une équipe dynamique où je pourrai contribuer à des projets innovants et continuer à développer mes compétences en frontend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
