import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      {/* Texte */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          👋 Bonjour, je suis <span className="text-blue-500">Mamoudou Sy</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Développeur Web Frontend passionné par la création d’interfaces modernes et performantes.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Voir mes projets
        </a>
      </div>

      {/* Photo */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/images/photo-professionnelle.jpg"
          alt="Mamoudou Sy"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-blue-500"
        />
      </div>
    </section>
  );
};

export default Hero;
