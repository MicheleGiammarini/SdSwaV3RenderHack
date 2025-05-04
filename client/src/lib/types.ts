export interface Education {
  title: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Skill {
  name: string;
}

export interface CoreSkill {
  name: string;
  percentage: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
