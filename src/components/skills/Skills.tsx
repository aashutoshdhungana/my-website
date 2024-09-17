import React from "react";

const skillsData = [
  {
    title: ".NET",
    skills: [
      ".NET Core MVC / API",
      "Entity Framework",
      "SignalR",
      "Identity Server",
      "LINQ",
    ],
  },
  {
    title: "JavaScript",
    skills: ["React.js", "Redux", "jQuery"],
  },
  {
    title: "Python",
    skills: ["LlamaIndex", "Pandas", "NumPy", "Matplotlib", "Scikit Learn"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL", "Entity Framework", "Dapper"],
  },
  {
    title: "Additional",
    skills: ["Git", "Azure Ad", "CI/CD", "Linux"],
  },
];

const SkillCard: React.FC = () => {
  return (
    <div>
      <h2 className="text-6xl font-bold text-center mb-3 md:mb-8">Skills</h2>
      <div className="flex gap-3 md:gap-8 md:mb-8 container lg:w-[80%] m-auto flex-wrap justify-center">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg w-[80%] md:w-[210px] p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {skillCategory.title}
            </h3>
            <ul className="space-y-2">
              {skillCategory.skills.map((skill, i) => (
                <li
                  key={i}
                  className="text-gray-600 flex items-center space-x-2 "
                >
                  <span className="text-[#212529]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>{skill}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
