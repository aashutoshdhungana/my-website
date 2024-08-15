// src/components/Experience.tsx
import React from 'react';
import { Experience as ExperienceType } from '../types/CVData';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <h3 className="text-xl font-semibold text-gray-700">{job.position}</h3>
          <p className="text-lg font-medium text-blue-500">{job.company}</p>
          <p className="text-sm text-gray-500 mb-2">{job.duration}</p>
          <ul className="list-disc list-inside space-y-1">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-600">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;