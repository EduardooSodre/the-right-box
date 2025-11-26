// This file will contain Contentful type guards and helpers for strong typing
import type {
  HeroContent,
  AccelerationContent,
  Solution,
  AboutContent,
  BlogPost,
  ContactContent,
} from "@/types/contentful";

function isRecord(entry: unknown): entry is Record<string, unknown> {
  return typeof entry === "object" && entry !== null;
}

export function isHeroContent(entry: unknown): entry is HeroContent {
  return (
    isRecord(entry) &&
    typeof entry.headline === "string" &&
    typeof entry.subheadline === "string" &&
    typeof entry.cta === "string"
  );
}

export function isAccelerationContent(
  entry: unknown
): entry is AccelerationContent {
  return (
    isRecord(entry) &&
    typeof entry.title === "string" &&
    typeof entry.subtitle === "string" &&
    Array.isArray(entry.steps) &&
    Array.isArray(entry.solutions)
  );
}

export function isSolution(entry: unknown): entry is Solution {
  return isRecord(entry) && typeof entry.title === "string";
}

export function isAboutContent(entry: unknown): entry is AboutContent {
  return (
    isRecord(entry) &&
    typeof entry.description === "string" &&
    typeof entry.mission === "string" &&
    typeof entry.vision === "string" &&
    typeof entry.philosophy === "string"
  );
}

export function isBlogPost(entry: unknown): entry is BlogPost {
  return (
    isRecord(entry) &&
    typeof entry.title === "string" &&
    typeof entry.slug === "string" &&
    typeof entry.excerpt === "string" &&
    typeof entry.date === "string"
  );
}

export function isContactContent(entry: unknown): entry is ContactContent {
  return (
    isRecord(entry) &&
    typeof entry.formTitle === "string" &&
    Array.isArray(entry.fields) &&
    typeof entry.successMessage === "string"
  );
}
