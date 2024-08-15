// src/components/Education.tsx
import React from 'react';

interface EducationProps {
  education: {
    degree: string;
    university: string;
    year: string;
  };
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
      <div>
        <p className="text-xl font-semibold text-gray-700">{education.degree}</p>
        <p className="text-lg text-blue-500">{education.university}</p>
        <p className="text-gray-600">{education.year}</p>
      </div>
    </section>
  );
};

export default Education;