import { client } from "@/lib/contentful";
import type { MethodologyStep } from "@/types/contentful";

export async function fetchMethodologySteps(): Promise<MethodologyStep[]> {
  const res = await client.getEntries({
    content_type: "methodologyStep",
    order: ["fields.order"],
  });

  return res.items.map((item) => {
    const fields = item.fields as Partial<MethodologyStep>;
    return {
      number: fields.number || "",
      title: fields.title || "",
      description: fields.description || "",
      order: fields.order || 0,
    };
  });
}
