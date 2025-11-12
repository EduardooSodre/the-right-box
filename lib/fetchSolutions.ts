import { client } from "@/lib/contentful";
import type { Solution } from "@/types/contentful";

export async function fetchSolutions(): Promise<Solution[]> {
  const res = await client.getEntries({
    content_type: "solution",
    order: ["fields.order"],
  });
  return res.items.map((item: unknown) => {
    const fields = (item as { fields: Solution }).fields;
    return {
      title: fields.title || "",
      description: fields.description || "",
      icon: fields.icon || undefined,
      order: fields.order || 0,
    };
  });
}
