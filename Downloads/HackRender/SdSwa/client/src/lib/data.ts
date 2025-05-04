import { Education, Certification, Skill, CoreSkill, Project, Experience } from "./types";

// Education data
export const educationData: Education[] = [

  {
    title: "Bachelor's Degree",
    institution: "Università degli Studi di Macerata",
    period: "#"
  },
  {
    title: "Erasmus Program",
    institution: "University of Vaasa",
    period: "#"
  }
];

// Certification data
export const certificationData: Certification[] = [
  {
    title: "AI 900: Microsoft Azure AI Fundamentals",
    issuer: "Amazon Web Services",
    year: "2023"
  },
  {
    title: "AZ 900 Azure Fundamentals",
    issuer: "Microsoft",
    year: "2022"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2021"
  },
  {
    title: "ISO 27001 - Cyber Security",
    issuer: "Cyber Security",
    year: "2022"
  },
  {
    title: "GDPR Compliance",
    issuer: "General Data Protection Regulation",
    year: "2022"
  }
];

// Technical skills
export const technicalSkills: Skill[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Java" },
  { name: "C#" },
  { name: "ASP.NET" },
  { name: "SQL Server" },
  { name: "Microservices" },
  { name: "RESTful APIs" }
];

// Tools skills
export const toolsSkills: Skill[] = [
  { name: "Git" },
  { name: "GitHub" },
  { name: "Azure" },
  { name: "Jira" },
  { name: "Confluence" },
  { name: "VS Code" },
];

// Soft skills
export const softSkills: Skill[] = [
  { name: "Project Management" },
  { name: "Agile Methodologies" },
  { name: "Problem Solving" },
  { name: "Communication" },
  { name: "Time Management" },
  { name: "Client Collaboration" }
];

// Core skills with percentages
export const coreSkills: CoreSkill[] = [
  { name: "Solution Development", percentage: 95 },
  { name: "Cloud Architecture", percentage: 85 },
  { name: "Full-Stack Development", percentage: 90 },
  { name: "Software Engineering", percentage: 90 },
  { name: "Enterprise Architecture", percentage: 80 },
  { name: "DevOps", percentage: 75 }
];

// Project data
// Project data
export const projectsData: Project[] = [
  
 
    {
      title: "Rimini Connect",
      description: "Rimini Connect is a social platform designed for event sharing and community interaction. It allows users to connect with local activities, events, and services in Rimini, facilitating seamless bookings and service management.",
      image: "https://images.unsplash.com/photo-1518639478032-d9240d11a43f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fFJpbWluaSUyMENvbm5lY3R8ZW58MHx8fHwxNjgwNzA3MjEy&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["React", "Node.js", "PostgreSQL", "Azure"],
      link: "#"
    },
    {
      title: "TimeSharing",
      description: "TimeSharing is an innovative startup designed to manage and allocate time slots for various services. It offers a dynamic scheduling and resource allocation system for businesses.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fFJpbWluaSUyMENvbm5lY3R8ZW58MHx8fHwxNjgwNzA3MjEy&crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fFJpbWluaSUyMENvbm5lY3R8ZW58MHx8fHwxNjgwNzA3MjEy&ixid=rb-1.2.1&q=80&w=1080",
      tags: ["Node.js", "React", "PostgreSQL", "Azure"],
      link: "#"
    },
    {
      title: "Customizable CRM Integration with Azure AI through Logical Web Resource Development",
      description: "Chat AI Pros showcases a customizable CRM solution integrated with Azure AI for enhanced client communications. The platform helps businesses streamline customer service processes with advanced web resources and AI-driven tools.",
      image: "https://images.unsplash.com/photo-1596562323-e551e495aa58?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFxdWEgcGx1bWJpbmcgY3Jvc3N8ZW58MHx8fHwxNjg5NTYwNzMw&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["Azure", "CRM", "AI", "Customization"],
      link: "#"
    },
  
      {
        title: "Kering",
        description: "For Kering, I implemented customized solutions specifically designed to enhance their customer service processes. These customizations include tools that streamline service management and create a more personalized experience for their clients.",
        image: "shared\saas.jpeg",
        tags: ["SQL", "Customization", "Azure","C#","jScript"],
        link: "#"
      },
      {
        title: "Leonardo",
        description: "For Leonardo, I provided customized solutions to improve their business operations. These customizations focused on adapting advanced technologies to meet their unique operational needs, enabling optimized performance and growth.",
        image: "https://images.unsplash.com/photo-1532670478701-92e1252d91ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fExlZ25pZXJvY3MlMjBQbGF0Zm9ybXMgfGVufDB8fHx8fDE2ODk1NjA3MjM&ixlib=rb-1.2.1&q=80&w=1080",
        tags: ["Customization", "Javascript", "Platform"],
        link: "#"
      },
    
    {
      title: "Space AI Chat",
      description: "Space AI Chat is an AI-driven conversational interface built to educate and foster curiosity about space exploration. It uses HTML, JavaScript, and Azure AI to engage users in discussions about space science.",
      image: "https://images.unsplash.com/photo-1523021443985-e5e7e0a7ac4f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fFNoY2lpZmlub3JvY2VndW5lY3R8ZW58MHx8fHwxNjg5NTYwNzMw&ixlib=rb-1.2.1&q=80&w=1080",
      tags: ["AI", "Space Exploration", "Chatbot", "Azure"],
      link: "#"
    }
  
  
];



// Experience data
export const experienceData: Experience[] = [
  {
    position: "Senior Associate, Software Development",
    company: "Avanade",
    period: "December 2024 - Present",
    description: "Utilized GIT for version control, contributed to Agile practices, and developed dynamic applications using JavaScript.",
    achievements: [
      "Developed dynamic applications using JavaScript and Azure services",
      "Contributed to Agile practices by participating in sprints and reviews"
    ]
  },
  {
    position: "Associate, Software Development",
    company: "Avanade",
    period: "January 2024 - Present",
    description: "Participated in Agile ceremonies and ensured successful project delivery through collaboration and adherence to Agile principles.",
    achievements: [
      "Participated in sprint planning, daily stand-ups, and retrospectives",
      "Collaborated with cross-functional teams to ensure project success"
    ]
  },
  {
    position: "Associate, Development Regional DC",
    company: "Avanade",
    period: "March 2023 - Present",
    description: "Worked with Microsoft Dynamics CRM and developed JavaScript and XRM models for client-side scripting and Azure services integration.",
    achievements: [
      "Worked with Microsoft Dynamics CRM, customizing forms and aligning the system with organizational needs",
      "Developed JavaScript and XRM models for integration with Azure services"
    ]
  },
  {
    position: "Software Engineer",
    company: "Avanade",
    period: "August 2022 - Present",
    description: "Led CRM portal development projects and integrated Microsoft Dynamics CRM with Azure services.",
    achievements: [
      "Led CRM portal development using C#, ASP.NET/MVC, jQuery, and AJAX",
      "Integrated Microsoft Dynamics CRM with Azure services"
    ]
  },

  {
    position: "Software Developer",
    company: "Bellachioma Systems Srl",
    period: "April 2022 - July 2022",
    description: "Developed software using C#, ASP.NET/MVC, and SQL, and optimized application performance.",
    achievements: [
      "Worked on software development using C#, ASP.NET/MVC, and SQL",
      "Utilized Git for version control and optimized application performance"
    ]
  },
  {
    position: "Software Developer",
    company: "NTS Informatica Srl",
    period: "September 2021 - April 2022",
    description: "Developed software solutions leveraging C# and SQL, focusing on database management and optimization.",
    achievements: [
      "Developed software solutions using C# and SQL",
      "Focused on database management and optimization"
    ]
  }
];
