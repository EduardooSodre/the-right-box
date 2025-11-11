import { client } from "@/lib/contentful";
import type { ContactContent } from "@/types/contentful";

export async function fetchContactContent(): Promise<ContactContent> {
  // TODO: Replace 'contact' with the correct Contentful content type ID
  const res = await client.getEntries({ content_type: "contact", limit: 1 });
  const entry = res.items[0]?.fields;
  return {
    formTitle: entry?.formTitle || "",
    fields: entry?.fields || [],
    successMessage: entry?.successMessage || "",
  };
}
