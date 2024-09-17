import React from "react";

type SkillCardProps = {
    title: string,
    skills: string[]
}
const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
    <div className="bg-[#F6F7F8] rounded-lg shadow-md p-6 pt-2 flex flex-col items-center">
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{title}</h3>
      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );

  export default SkillCard;