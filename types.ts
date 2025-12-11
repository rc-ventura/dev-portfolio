import React from 'react';

export type Language = 'en' | 'pt';

export interface GitHubStats {
  stars: number;
  forks: number;
  lastUpdated: string;
  language?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  github?: string;
  problemSolved?: string;
  stats?: GitHubStats; // Optional dynamic stats
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface VolunteerExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  achievements: string[];
  gpa: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon?: React.ReactNode;
}

export interface Statistic {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface AboutCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlightWords: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface LanguageStats {
  name: string;
  percent: number;
  color: string;
}

export interface PortfolioData {
  RESUME_DATA: {
    name: string;
    title: string;
    avatarUrl: string;
    summary: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
    labels: {
        viewWork: string;
        contact: string;
        scroll: string;
        about: string;
        experience: string;
        projects: string;
        skills: string;
        education: string;
        certifications: string;
        volunteer: string;
        footerText: string;
        featuredWork: string;
        projectPortfolio: string;
        techSkills: string;
        techProficiency: string;
        techSubtitle: string;
        academicJourney: string;
        professionalJourney: string;
        githubStats: string;
        realTimeData: string;
        mostUsedLanguages: string;
        contributionStreak: string;
        totalContributions: string;
        active: string;
        status: string;
        high: string;
        activityLevel: string;
    }
  };
  ABOUT_CARDS: AboutCard[];
  EDUCATION_DATA: Education[];
  CERTIFICATIONS_DATA: Certification[];
  VOLUNTEER_DATA: VolunteerExperience[];
  EXPERIENCE_DATA: Experience[];
  PROJECTS_DATA: Project[];
  GEMINI_SYSTEM_INSTRUCTION: string;
}