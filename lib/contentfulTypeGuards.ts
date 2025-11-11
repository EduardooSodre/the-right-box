// This file will contain Contentful type guards and helpers for strong typing
import type {
  HeroContent,
  AccelerationContent,
  Solution,
  AboutContent,
  BlogPost,
  ContactContent,
} from "@/types/contentful";

export function isHeroContent(entry: any): entry is HeroContent {
  return (
    typeof entry.headline === "string" &&
    typeof entry.subheadline === "string" &&
    typeof entry.cta === "string"
  );
}

export function isAccelerationContent(
  entry: any
): entry is AccelerationContent {
  return (
    typeof entry.title === "string" &&
    typeof entry.subtitle === "string" &&
    Array.isArray(entry.steps) &&
    Array.isArray(entry.solutions)
  );
}

export function isSolution(entry: any): entry is Solution {
  return typeof entry.title === "string";
}

export function isAboutContent(entry: any): entry is AboutContent {
  return (
    typeof entry.description === "string" &&
    typeof entry.mission === "string" &&
    typeof entry.vision === "string" &&
    typeof entry.philosophy === "string"
  );
}

export function isBlogPost(entry: any): entry is BlogPost {
  return (
    typeof entry.title === "string" &&
    typeof entry.slug === "string" &&
    typeof entry.excerpt === "string" &&
    typeof entry.date === "string"
  );
}

export function isContactContent(entry: any): entry is ContactContent {
  return (
    typeof entry.formTitle === "string" &&
    Array.isArray(entry.fields) &&
    typeof entry.successMessage === "string"
  );
}
