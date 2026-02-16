import React from "react";

interface FormationItem {
  year: string;
  title: string;
}

const formations: FormationItem[] = [
  { year: "2024-2025", title: "Licence Génie Informatique" },
  { year: "2023", title: "Bac S2" },
];

const Formation: React.FC = () => {
  return (
    <section
      id="formation"
      className="py-20 px-6 md:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Formation
        </h2>

        {/* Timeline */}
        <div className="flex flex-col space-y-8">
          {formations.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <span className="text-blue-400 font-semibold md:w-32">{item.year}</span>
              <p className="text-lg md:text-xl text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;
