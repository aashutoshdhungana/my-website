// src/components/TechnicalSkills.tsx
import React from 'react';
import { Skill } from '../types/CVData';

interface TechnicalSkillsProps {
  skills: Skill[];
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;