import { client } from "@/lib/contentful";
import type { AccelerationContent } from "@/types/contentful";

export async function fetchAccelerationContent(): Promise<AccelerationContent> {
  // TODO: Replace 'acceleration' with the correct Contentful content type ID
  const res = await client.getEntries({
    content_type: "acceleration",
    limit: 1,
  });
  const entry = res.items[0]?.fields;
  return {
    title: entry?.title || "",
    subtitle: entry?.subtitle || "",
    steps: entry?.steps || [],
    solutions: entry?.solutions || [],
  };
}
