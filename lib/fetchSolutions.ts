import { client } from "@/lib/contentful";
import type { Solution } from "@/types/contentful";

export async function fetchSolutions(): Promise<Solution[]> {
  // TODO: Replace 'solution' with the correct Contentful content type ID
  const res = await client.getEntries({ content_type: "solution" });
  return res.items.map((item: any) => ({
    title: item.fields.title,
    icon: item.fields.icon || undefined,
  }));
}
