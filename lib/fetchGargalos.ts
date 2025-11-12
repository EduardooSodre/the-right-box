import { client } from "@/lib/contentful";
import type { Gargalo } from "@/types/contentful";

export async function fetchGargalos(): Promise<Gargalo[]> {
  const res = await client.getEntries({
    content_type: "gargalo",
    order: ["fields.order"],
  });

  type ContentfulGargalo = {
    fields: {
      title?: string;
      description?: string;
      order?: number;
    };
  };

  return res.items.map((item: ContentfulGargalo) => ({
    title: item.fields.title || "",
    description: item.fields.description || "",
    order: item.fields.order || 0,
  }));
}
