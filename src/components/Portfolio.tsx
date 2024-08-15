// src/components/Portfolio.tsx
import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import TechnicalSkills from './TechnicalSkills';
import CoreCompetencies from './CoreCompetencies';
import Education from './Education';
import Awards from './Awards';
import { CVData } from '../types/CVData';

const cvData: CVData = {
    name: "Aashutosh Dhungana",
    title: "Software Engineer (.NET / React Developer)",
    contact: {
      phone: "+977 9861288977",
      email: "dhunganaaashutosh@gmail.com"
    },
    summary: "Results-oriented Software Engineer with 2+ years of experience building innovative and scalable applications. Skilled in .NET Core, React, SQL Server, and other backend/frontend technologies. Proven ability to deliver complex projects, including an Asset Management System and a Claim Negotiation Management software. Eager to leverage expertise in software engineering to contribute to a forward-thinking tech company.",
    experience: [
      {
        company: "Spiralogics, Inc",
        position: "Software Engineer",
        duration: "April 2023 – Present (1 year 5 months)",
        responsibilities: [
          "Developed an Asset Management System with a chatbot for accepting requests using .NET MVC and Microsoft Bot Framework with Azure AD authentication",
          "Worked on a Claim Negotiation Management software using React, Redux, .NET Core API, and SQL Server, featuring in app notification, task scheduler, reporting and complex access rules.",
          "Contributed to an ERP project with CRM, employee management, and sales management using .NET Core MVC",
          "Refactored the Asset Management System code base, improving response time by 50%"
        ]
      },
      {
        company: "DGHUB",
        position: "Junior .NET Developer",
        duration: "Jul 2022 – Mar 2023 (9 months)",
        responsibilities: [
          "Developed and maintained fintech web applications using ASP.NET MVC, ASP.NET API, .NET 6, C#, and SQL Server",
          "Worked on various wallet application panels (Admin, Agent, Merchant, Customer)",
          "Developed and maintained a wallet customer API",
          "Assisted in migrating legacy code to .NET 6",
          "Gained expertise in documentation, API versioning, rate limiting, REST API practices, encryption, SOAP requests, and Postman testing"
        ]
      },
      {
        company: "Janata Tech",
        position: ".NET Intern",
        duration: "Dec 2021 – Apr 2022 (5 months)",
        responsibilities: [
          "Gained hands-on experience in software development practices and methodologies",
          "Contributed to CMS and Ride Sharing projects",
          "Assisted in bug fixes and feature implementations",
          "Developed expertise in Entity Framework, Identity, jQuery, ASP.NET MVC"
        ]
      }
    ],
    technicalSkills: [
      {
        category: "Backend Technologies",
        items: [".NET Core MVC", ".NET Core API", "SignalR", "Entity Framework", "Identity Server", "Hangfire"]
      },
      {
        category: "Frontend Technologies",
        items: ["React.js", "Redux", "jQuery", "Tailwind", "Bootstrap", "DevExtreme"]
      },
      {
        category: "Database Technologies",
        items: ["SQL Server", "MySQL", "Entity Framework", "Dapper"]
      },
      {
        category: "Cloud and DevOps",
        items: ["Azure", "IIS", "CI/CD", "GitHub Actions"]
      },
      {
        category: "Additional Tools",
        items: ["Git", "Firebase", "Bash"]
      }
    ],
    coreCompetencies: [
      "Problem solver",
      "Clean Coder",
      "Communicator",
      "Team player",
      "Versatile"
    ],
    education: {
      degree: "BSc. CSIT",
      university: "Tribhuvan University",
      year: "2018 - 2023"
    },
    awards: ["Initiator Award at Spiralogics, Inc."]
  };
const Portfolio: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <Header name={cvData.name} title={cvData.title} contact={cvData.contact} />
      <Summary summary={cvData.summary} />
      <Experience experience={cvData.experience} />
      <TechnicalSkills skills={cvData.technicalSkills} />
      <CoreCompetencies competencies={cvData.coreCompetencies} />
      <Education education={cvData.education} />
      <Awards awards={cvData.awards} />
    </div>
  );
};

export default Portfolio;