export interface PersonalDetails {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  downloadCvUrl: string;
  linkedInUrl: string;
  gitHubUrl: string;
  twitterUrl: string;
  profileImagePath: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutDetails {
  title: string;
  tagline: string;
  paragraphs: string[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
  skills?: string[];
}

export interface EducationDetails {
  degree: string;
  institution: string;
  major: string;
}

export interface CertificationItem {
  title: string;
  body: string;
}

export interface ContactDetails {
  ctaTitle: string;
  ctaText: string;
  email: string;
  phone: string;
}

export interface PortfolioData {
  personal: PersonalDetails;
  stats?: StatItem[];
  about: AboutDetails;
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationDetails;
  certifications?: CertificationItem[];
  "certifications and Courses"?: CertificationItem[];
  contact: ContactDetails;
}
