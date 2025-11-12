// Types for Contentful models

export interface HeroContent {
  headline: string;
  subheadline: string;
  tagline: string;
  cta: string;
  bottomTagline: string;
  backgroundImage?: string;
}

export interface Gargalo {
  title: string;
  description: string;
  order: number;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  order: number;
}

export interface Solution {
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface AccelerationContent {
  title: string;
  subtitle: string;
  mainTitle: string;
  mainDescription: string;
  solutionsSectionTitle: string;
  solutionsSectionDescription: string;
  ctaTitle: string;
  finalNote: string;
  gargalosTitle: string;
  gargalosSubtitle: string;
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
  email: string;
  phone: string;
  whatsapp?: string;
  address?: string;
  linkedin?: string;
  instagram?: string;
}

export interface FooterContent {
  tagline: string;
  contactTitle: string;
  socialTitle: string;
  copyright: string;
  developedBy: string;
  developedByUrl: string;
}
