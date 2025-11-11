import { client } from "@/lib/contentful";
import type { HeroContent } from "@/types/contentful";

export async function fetchHeroContent(): Promise<HeroContent> {
  // TODO: Replace 'hero' with the correct Contentful content type ID
  const res = await client.getEntries({ content_type: "hero", limit: 1 });
  const entry = res.items[0]?.fields;
  return {
    headline: entry?.headline || "",
    subheadline: entry?.subheadline || "",
    cta: entry?.cta || "",
    backgroundImage: entry?.backgroundImage || undefined,
  };
}
