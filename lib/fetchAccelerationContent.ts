import { client } from "@/lib/contentful";
import type { AccelerationContent } from "@/types/contentful";

export async function fetchAccelerationContent(): Promise<AccelerationContent> {
  const res = await client.getEntries({
    content_type: "accelerationContent",
    limit: 1,
  });
  const entry = res.items[0]?.fields as any;
  return {
    title: entry?.title || "",
    subtitle: entry?.description || "",
    steps: entry?.steps || [],
    solutions: entry?.solutions || [],
  };
}
