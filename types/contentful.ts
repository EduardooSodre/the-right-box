// Types for Contentful models (Hero, Aceleração Comercial, Soluções, Sobre Nós, Blog, Contato)

export interface HeroContent {
  headline: string;
  subheadline: string;
  cta: string;
  backgroundImage?: string;
}

export interface Step {
  title: string;
  description: string;
  icon?: string;
}

export interface Solution {
  title: string;
  icon?: string;
}

export interface AccelerationContent {
  title: string;
  subtitle: string;
  steps: Step[];
  solutions: Solution[];
}

export interface AboutContent {
  description: string;
  mission: string;
  vision: string;
  philosophy: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  date: string;
}

export interface ContactContent {
  formTitle: string;
  fields: Array<{ label: string; name: string; type: string; options?: string[] }>;
  successMessage: string;
}
