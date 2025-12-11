import React from 'react';
import { Project, Experience, Education, Certification, AboutCard, PortfolioData, VolunteerExperience } from './types';

// --- SHARED DATA (Icons, Images, Links) ---
const AVATAR_URL = "https://github.com/rc-ventura.png";
const SOCIALS = {
  github: "https://github.com/rc-ventura",
  linkedin: "https://www.linkedin.com/in/dev-ventuara",
  email: "mailto:r.c_ventura@hotmail.com"
};

// --- ENGLISH DATA ---
const RESUME_DATA_EN = {
  name: "Rafael Ventura",
  title: "AI Engineer & DevOps Specialist",
  avatarUrl: AVATAR_URL,
  summary: "AI Engineer with a strong DevOps background, specializing in scaling cloud infrastructures on AWS & GCP and developing AI-driven solutions using Generative AI, RAG, and Agentic workflows. Experienced educator and technical leader bridging the gap between theory and industry practice.",
  socials: SOCIALS,
  labels: {
    viewWork: "View My Work",
    contact: "Get In Touch",
    scroll: "Scroll to explore",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    certifications: "Certifications",
    volunteer: "Volunteering",
    footerText: "Let's build something amazing together",
    featuredWork: "FEATURED WORK",
    projectPortfolio: "Project Portfolio",
    techSkills: "Technical Skills",
    techProficiency: "Technical Proficiency",
    techSubtitle: "Core skills across AI/LLM integrations, full-stack development, cloud infrastructure, and modern web technologies.",
    academicJourney: "Academic Journey",
    professionalJourney: "Professional Journey",
    githubStats: "GitHub Statistics",
    realTimeData: "Real-time data from",
    mostUsedLanguages: "Most Used Languages",
    contributionStreak: "Contribution Streak",
    totalContributions: "Total Contributions",
    active: "Active",
    status: "Status",
    high: "High",
    activityLevel: "Activity Level"
  }
};

const ABOUT_CARDS_EN: AboutCard[] = [
  {
    title: "Generative AI & Agents",
    description: "Developing industrial solutions using RAG, Agentic workflows, and LLMs to drive innovation and efficiency.",
    icon: null,
    highlightWords: ["RAG", "Agentic workflows", "LLMs"]
  },
  {
    title: "DevOps & MLOps",
    description: "Automating CI/CD pipelines and infrastructure with Terraform, Airflow, and Docker on AWS and GCP.",
    icon: null,
    highlightWords: ["Terraform", "Airflow", "AWS and GCP"]
  },
  {
    title: "Education & Leadership",
    description: "Specialist Teacher at SENAI and Instructor at Escola da Nuvem, mentoring professionals in Cloud and AI.",
    icon: null,
    highlightWords: ["Specialist Teacher", "mentoring professionals"]
  }
];

const EDUCATION_DATA_EN: Education[] = [
  {
    degree: "Master of Degree in Education",
    institution: "PUC-RJ (Brazil)",
    period: "Completed Feb 2023",
    location: "Rio de Janeiro, Brazil",
    gpa: "Completed",
    achievements: [
      "Focus on Educational Technology",
      "Bridging Industry and Academia"
    ]
  },
  {
    degree: "Technologist in Data Security",
    institution: "Anhanguera Educacional",
    period: "2022 – 2023",
    location: "Brazil",
    gpa: "Completed",
    achievements: [
      "Information Security Fundamentals",
      "Cloud Security Principles"
    ]
  },
  {
    degree: "English Studies",
    institution: "San Mateo Adult School",
    period: "2024-2025",
    location: "California, USA",
    gpa: "Immersion",
    achievements: [
      "Six months of formal study",
      "English immersion environment"
    ]
  }
];

const CERTIFICATIONS_DATA_EN: Certification[] = [
  { id: "1", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { id: "2", title: "IEL SUMMIT 2025 Winner", issuer: "Innovative Project: IA Multimodal Grader" }
];

const VOLUNTEER_DATA_EN: VolunteerExperience[] = [
  {
    id: "1",
    role: "DevOps Engineer Jr",
    company: "Qa Coders",
    period: "2023",
    location: "Remote",
    description: "Contributed to agile teams implementing Quality Assurance and DevOps best practices in a voluntary capacity."
  },
  {
    id: "2",
    role: "Cloud Infrastructure Instructor",
    company: "Escola da Nuvem",
    period: "2023 - 2024",
    location: "Remote",
    description: "Taught fundamentals of Cloud Computing and AWS infrastructure to underserved communities, fostering digital inclusion."
  }
];

const EXPERIENCE_DATA_EN: Experience[] = [
  {
    id: "1",
    role: "Researcher (AI Engineer)",
    company: "ISI-SENAI (Innovation Senai Institute)",
    period: "Apr 2024 – Present",
    location: "Brazil",
    description: [
      "Developing AI solutions for industry utilizing Generative AI and Large Language Models.",
      "Building DevOps environments from scratch with extensive automation on AWS.",
      "Implementing RAG and Agentic workflows for enterprise applications."
    ]
  },
  {
    id: "2",
    role: "Specialist Teacher",
    company: "SENAI (National Service for Industrial Training)",
    period: "Jan 2023 – Present",
    location: "Brazil",
    description: [
      "Delivering technical courses in system analysis, development, and database management.",
      "Teaching methodologies including Agile, React, Programming Logic, and Testing.",
      "Mentoring students to bridge the gap between academic theory and market needs."
    ]
  },
  {
    id: "3",
    role: "DevOps Intern",
    company: "Instituto Atlântico",
    period: "Feb 2024 – Aug 2024",
    location: "Brazil",
    description: [
      "Managed AWS infrastructure for an international automated data pipeline project.",
      "Collaborated in maintaining cloud-based environments and automating infrastructure using Terraform.",
      "Optimized Python-based workflows for data processing."
    ]
  },
  {
    id: "4",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "Jan 2022 – Present",
    location: "Remote",
    description: [
      "Developed software projects across multiple freelance platforms, creating proof-of-concept applications.",
      "Built full-stack solutions using Python, Generative AI, JavaScript, React, and Relational Databases.",
      "Delivered custom automation scripts and web applications for diverse clients."
    ]
  }
];

const PROJECTS_DATA_EN: Project[] = [
  {
    id: "1",
    title: "English Tutor AI",
    category: "AI + EdTech",
    description: "An intelligent, interactive English tutor powered by Generative AI. This application helps users improve their conversation and grammar skills through natural dialogue simulation.",
    problemSolved: "Provides accessible, personalized language practice without the cost of a human tutor.",
    techStack: ["Python", "GenAI", "Streamlit", "LLMs"],
    image: "https://picsum.photos/800/600?random=20",
    link: "https://github.com/rc-ventura/english-tutor-IA",
    github: "https://github.com/rc-ventura/english-tutor-IA"
  },
  {
    id: "2",
    title: "Google AI Agents Capstone",
    category: "Agentic Workflow",
    description: "Capstone project for the Google AI Agents Intensive Course. A complex system demonstrating the orchestration of multiple AI agents to solve multi-step problems autonomously.",
    problemSolved: "Demonstrates advanced reasoning and tool usage by AI agents in a coordinated environment.",
    techStack: ["Google GenAI", "Python", "Agents", "Orchestration"],
    image: "https://picsum.photos/800/600?random=21",
    link: "https://github.com/rc-ventura/5-day-ai-agents-intensive-course-with-google/tree/master/capstone",
    github: "https://github.com/rc-ventura/5-day-ai-agents-intensive-course-with-google" 
  },
  {
    id: "3",
    title: "EducaJus BR AI",
    category: "Legal Tech",
    description: "An AI-powered platform focused on making legal education and information more accessible in Brazil. Uses RAG to interpret and explain complex legal texts.",
    problemSolved: "Democratizes access to legal knowledge by simplifying technical jargon.",
    techStack: ["Python", "RAG", "Legal NLP", "Vector DB"],
    image: "https://picsum.photos/800/600?random=22",
    link: "https://github.com/rc-ventura/educajus-br-ai",
    github: "https://github.com/rc-ventura/educajus-br-ai"
  },
  {
    id: "4",
    title: "Industrial RAG Pipeline",
    category: "Enterprise AI",
    description: "A Retrieval-Augmented Generation system designed for industrial documentation. Allows workers to query technical manuals and get accurate, context-aware answers immediately.",
    techStack: ["LangChain", "Python", "Vector DB", "Docker"],
    image: "https://picsum.photos/800/600?random=11",
    link: "https://github.com/rc-ventura",
    github: "https://github.com/rc-ventura"
  }
];

const GEMINI_SYSTEM_INSTRUCTION_EN = `
You are an AI assistant for Rafael Ventura's professional portfolio. Answer in English.
Context:
Name: ${RESUME_DATA_EN.name}
Title: ${RESUME_DATA_EN.title}
Summary: ${RESUME_DATA_EN.summary}
Experience: ${EXPERIENCE_DATA_EN.map(e => `${e.role} at ${e.company}`).join(', ')}
Skills: GenAI, DevOps, AWS, Terraform, Python, React.
Volunteering: ${VOLUNTEER_DATA_EN.map(v => `${v.role} at ${v.company}`).join(', ')}
`;

// --- PORTUGUESE DATA ---
const RESUME_DATA_PT = {
  name: "Rafael Ventura",
  title: "Engenheiro de IA & Especialista DevOps",
  avatarUrl: AVATAR_URL,
  summary: "Engenheiro de IA com forte experiência em DevOps, especializado em escalar infraestruturas em nuvem na AWS e GCP e desenvolver soluções impulsionadas por IA usando IA Generativa, RAG e fluxos de trabalho Agênticos. Educador experiente e líder técnico unindo a teoria à prática industrial.",
  socials: SOCIALS,
  labels: {
    viewWork: "Ver Projetos",
    contact: "Entre em Contato",
    scroll: "Role para explorar",
    about: "Sobre Mim",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Habilidades",
    education: "Educação",
    certifications: "Certificações e Prêmios",
    volunteer: "Voluntariado",
    footerText: "Vamos construir algo incrível juntos",
    featuredWork: "TRABALHO EM DESTAQUE",
    projectPortfolio: "Portfólio de Projetos",
    techSkills: "Habilidades Técnicas",
    techProficiency: "Proficiência Técnica",
    techSubtitle: "Habilidades essenciais em integrações de IA/LLM, desenvolvimento full-stack, infraestrutura em nuvem e tecnologias web modernas.",
    academicJourney: "Jornada Acadêmica",
    professionalJourney: "Jornada Profissional",
    githubStats: "Estatísticas do GitHub",
    realTimeData: "Dados em tempo real de",
    mostUsedLanguages: "Linguagens Mais Usadas",
    contributionStreak: "Sequência de Contribuições",
    totalContributions: "Total de Contribuições",
    active: "Ativo",
    status: "Status",
    high: "Alta",
    activityLevel: "Nível de Atividade"
  }
};

const ABOUT_CARDS_PT: AboutCard[] = [
  {
    title: "IA Generativa & Agentes",
    description: "Desenvolvimento de soluções industriais usando RAG, fluxos Agênticos e LLMs para impulsionar inovação e eficiência.",
    icon: null,
    highlightWords: ["RAG", "fluxos Agênticos", "LLMs"]
  },
  {
    title: "DevOps & MLOps",
    description: "Automação de pipelines CI/CD e infraestrutura com Terraform, Airflow e Docker na AWS e GCP.",
    icon: null,
    highlightWords: ["Terraform", "Airflow", "AWS e GCP"]
  },
  {
    title: "Educação & Liderança",
    description: "Professor Especialista no SENAI e Instrutor na Escola da Nuvem, mentorando profissionais em Nuvem e IA.",
    icon: null,
    highlightWords: ["Professor Especialista", "mentorando profissionais"]
  }
];

const EDUCATION_DATA_PT: Education[] = [
  {
    degree: "Mestrado em Educação",
    institution: "PUC-RJ (Brasil)",
    period: "Concluído Fev 2023",
    location: "Rio de Janeiro, Brasil",
    gpa: "Concluído",
    achievements: [
      "Foco em Tecnologia Educacional",
      "Conexão Indústria e Academia"
    ]
  },
  {
    degree: "Tecnólogo em Segurança de Dados",
    institution: "Anhanguera Educacional",
    period: "2022 – 2023",
    location: "Brasil",
    gpa: "Concluído",
    achievements: [
      "Fundamentos de Segurança da Informação",
      "Princípios de Segurança em Nuvem"
    ]
  },
  {
    degree: "Estudos de Inglês",
    institution: "San Mateo Adult School",
    period: "2024-2025",
    location: "Califórnia, EUA",
    gpa: "Imersão",
    achievements: [
      "Seis meses de estudo formal",
      "Ambiente de imersão em inglês"
    ]
  }
];

const CERTIFICATIONS_DATA_PT: Certification[] = [
  { id: "1", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { id: "2", title: "Vencedor IEL SUMMIT 2025", issuer: "Projeto Inovador: Corretor Multimodal com IA" }
];

const VOLUNTEER_DATA_PT: VolunteerExperience[] = [
  {
    id: "1",
    role: "Engenheiro DevOps Jr",
    company: "Qa Coders",
    period: "2023",
    location: "Remoto",
    description: "Contribuição voluntária em equipes ágeis, implementando melhores práticas de QA e DevOps."
  },
  {
    id: "2",
    role: "Instrutor de Infraestrutura Cloud",
    company: "Escola da Nuvem",
    period: "2023 - 2024",
    location: "Remoto",
    description: "Ensino de fundamentos de Computação em Nuvem e infraestrutura AWS para comunidades sub-representadas, promovendo inclusão digital."
  }
];

const EXPERIENCE_DATA_PT: Experience[] = [
  {
    id: "1",
    role: "Pesquisador (Engenheiro de IA)",
    company: "ISI-SENAI (Instituto SENAI de Inovação)",
    period: "Abr 2024 – Presente",
    location: "Brasil",
    description: [
      "Desenvolvimento de soluções de IA para a indústria utilizando IA Generativa e Large Language Models.",
      "Construção de ambientes DevOps do zero com automação extensiva na AWS.",
      "Implementação de RAG e fluxos de trabalho Agênticos para aplicações empresariais."
    ]
  },
  {
    id: "2",
    role: "Professor Especialista",
    company: "SENAI (Serviço Nacional de Aprendizagem Industrial)",
    period: "Jan 2023 – Presente",
    location: "Brasil",
    description: [
      "Ministrando cursos técnicos em análise de sistemas, desenvolvimento e banco de dados.",
      "Ensino de metodologias incluindo Ágil, React, Lógica de Programação e Testes.",
      "Mentoria de alunos para preencher a lacuna entre teoria acadêmica e necessidades do mercado."
    ]
  },
  {
    id: "3",
    role: "Estagiário DevOps",
    company: "Instituto Atlântico",
    period: "Fev 2024 – Ago 2024",
    location: "Brasil",
    description: [
      "Gerenciamento de infraestrutura AWS para um projeto internacional de pipeline de dados automatizado.",
      "Colaboração na manutenção de ambientes baseados em nuvem e automação de infraestrutura usando Terraform.",
      "Otimização de fluxos de trabalho baseados em Python para processamento de dados."
    ]
  },
  {
    id: "4",
    role: "Engenheiro de Software Freelance",
    company: "Autônomo",
    period: "Jan 2022 – Presente",
    location: "Remoto",
    description: [
      "Desenvolvimento de projetos de software em múltiplas plataformas freelance, criando aplicações de prova de conceito.",
      "Construção de soluções full-stack usando Python, IA Generativa, JavaScript, React e Bancos de Dados Relacionais.",
      "Entrega de scripts de automação personalizados e aplicações web para diversos clientes."
    ]
  }
];

const PROJECTS_DATA_PT: Project[] = [
  {
    id: "1",
    title: "English Tutor IA",
    category: "IA + EdTech",
    description: "Um tutor de inglês inteligente e interativo impulsionado por IA Generativa. Esta aplicação ajuda usuários a melhorar suas habilidades de conversação e gramática através de simulação de diálogos naturais.",
    problemSolved: "Fornece prática de idiomas acessível e personalizada sem o custo de um tutor humano.",
    techStack: ["Python", "GenAI", "Streamlit", "LLMs"],
    image: "https://picsum.photos/800/600?random=20",
    link: "https://github.com/rc-ventura/english-tutor-IA",
    github: "https://github.com/rc-ventura/english-tutor-IA"
  },
  {
    id: "2",
    title: "Google AI Agents Capstone",
    category: "Fluxo Agêntico",
    description: "Projeto final para o Curso Intensivo de Agentes de IA do Google. Um sistema complexo demonstrando a orquestração de múltiplos agentes de IA para resolver problemas de várias etapas de forma autônoma.",
    problemSolved: "Demonstra raciocínio avançado e uso de ferramentas por agentes em um ambiente coordenado.",
    techStack: ["Google GenAI", "Python", "Agentes", "Orchestration"],
    image: "https://picsum.photos/800/600?random=21",
    link: "https://github.com/rc-ventura/5-day-ai-agents-intensive-course-with-google/tree/master/capstone",
    github: "https://github.com/rc-ventura/5-day-ai-agents-intensive-course-with-google"
  },
  {
    id: "3",
    title: "EducaJus BR AI",
    category: "Legal Tech",
    description: "Uma plataforma alimentada por IA focada em tornar a educação e informação jurídica mais acessível no Brasil. Utiliza RAG para interpretar e explicar textos jurídicos complexos.",
    problemSolved: "Democratiza o acesso ao conhecimento jurídico simplificando o jargão técnico.",
    techStack: ["Python", "RAG", "Legal NLP", "Vector DB"],
    image: "https://picsum.photos/800/600?random=22",
    link: "https://github.com/rc-ventura/educajus-br-ai",
    github: "https://github.com/rc-ventura/educajus-br-ai"
  },
  {
    id: "4",
    title: "Pipeline RAG Industrial",
    category: "IA Empresarial",
    description: "Um sistema de Geração Aumentada por Recuperação projetado para documentação industrial. Permite que trabalhadores consultem manuais técnicos e obtenham respostas precisas e contextuais imediatamente.",
    techStack: ["LangChain", "Python", "Vector DB", "Docker"],
    image: "https://picsum.photos/800/600?random=11",
    link: "https://github.com/rc-ventura",
    github: "https://github.com/rc-ventura"
  }
];

const GEMINI_SYSTEM_INSTRUCTION_PT = `
Você é um assistente de IA para o portfólio profissional de Rafael Ventura. Responda em Português.
Contexto:
Nome: ${RESUME_DATA_PT.name}
Título: ${RESUME_DATA_PT.title}
Resumo: ${RESUME_DATA_PT.summary}
Experiência: ${EXPERIENCE_DATA_PT.map(e => `${e.role} na ${e.company}`).join(', ')}
Habilidades: GenAI, DevOps, AWS, Terraform, Python, React.
Voluntariado: ${VOLUNTEER_DATA_PT.map(v => `${v.role} na ${v.company}`).join(', ')}
`;

// --- EXPORT DATA BY LANGUAGE ---
export const DATA_EN: PortfolioData = {
  RESUME_DATA: RESUME_DATA_EN,
  ABOUT_CARDS: ABOUT_CARDS_EN,
  EDUCATION_DATA: EDUCATION_DATA_EN,
  CERTIFICATIONS_DATA: CERTIFICATIONS_DATA_EN,
  VOLUNTEER_DATA: VOLUNTEER_DATA_EN,
  EXPERIENCE_DATA: EXPERIENCE_DATA_EN,
  PROJECTS_DATA: PROJECTS_DATA_EN,
  GEMINI_SYSTEM_INSTRUCTION: GEMINI_SYSTEM_INSTRUCTION_EN
};

export const DATA_PT: PortfolioData = {
  RESUME_DATA: RESUME_DATA_PT,
  ABOUT_CARDS: ABOUT_CARDS_PT,
  EDUCATION_DATA: EDUCATION_DATA_PT,
  CERTIFICATIONS_DATA: CERTIFICATIONS_DATA_PT,
  VOLUNTEER_DATA: VOLUNTEER_DATA_PT,
  EXPERIENCE_DATA: EXPERIENCE_DATA_PT,
  PROJECTS_DATA: PROJECTS_DATA_PT,
  GEMINI_SYSTEM_INSTRUCTION: GEMINI_SYSTEM_INSTRUCTION_PT
};