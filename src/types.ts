export interface Project {
  id: string;
  title: string;
  category: 'WordPress' | 'Frontend' | 'E-Commerce' | 'Portfolio & Brand';
  badgeType: 'Client Showcase' | 'Design Concept' | 'Featured Project';
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  features: string[];
  livePreviewUrl?: string;
  demoStats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  keyFeatures: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  category: 'CMS & Builders' | 'Frontend Core' | 'Optimization & Tools';
  level: number;
  description: string;
  yearsOfUse: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyOrProject: string;
  quote: string;
  rating: number;
  projectType: string;
  avatarInitials: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
}
