// src/types/CVData.ts
export interface Experience {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface CVData {
    name: string;
    title: string;
    contact: {
      phone: string;
      email: string;
    };
    summary: string;
    experience: Experience[];
    technicalSkills: Skill[];
    coreCompetencies: string[];
    education: {
      degree: string;
      university: string;
      year: string;
    };
    awards: string[];
  }