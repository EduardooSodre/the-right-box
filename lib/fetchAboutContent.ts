import { client } from "@/lib/contentful";
import type { AboutContent } from "@/types/contentful";

export async function fetchAboutContent(): Promise<AboutContent> {
  // TODO: Replace 'about' with the correct Contentful content type ID
  const res = await client.getEntries({ content_type: "about", limit: 1 });
  const entry = res.items[0]?.fields;
  return {
    description: entry?.description || "",
    mission: entry?.mission || "",
    vision: entry?.vision || "",
    philosophy: entry?.philosophy || "",
  };
}
