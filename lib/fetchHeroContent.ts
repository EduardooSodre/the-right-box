import { client } from "@/lib/contentful";
import type { HeroContent } from "@/types/contentful";

export async function fetchHeroContent(): Promise<HeroContent> {
  const res = await client.getEntries({ content_type: "heroContent", limit: 1 });
  const entry = res.items[0]?.fields as any;
  return {
    headline: entry?.headline || "",
    subheadline: entry?.subheadline || "",
    cta: entry?.ctaButtonText || "",
    backgroundImage: entry?.backgroundImage || undefined,
  };
}
