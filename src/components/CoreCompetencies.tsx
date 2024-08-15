// src/components/CoreCompetencies.tsx
import React from 'react';

interface CoreCompetenciesProps {
  competencies: string[];
}

const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ competencies }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Core Competencies</h2>
      <div className="flex flex-wrap gap-2">
        {competencies.map((competency, index) => (
          <span key={index} className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
            {competency}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;