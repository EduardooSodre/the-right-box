import { client } from "@/lib/contentful";
import type { ContactContent } from "@/types/contentful";

export async function fetchContactContent(): Promise<ContactContent> {
  const res = await client.getEntries({
    content_type: "contactContent",
    limit: 1,
  });
  const entry = res.items[0]?.fields as unknown as ContactContent;
  return {
    email: entry?.email || "",
    phone: entry?.phone || "",
    whatsapp: entry?.whatsapp || undefined,
    address: entry?.address || undefined,
    linkedin: entry?.linkedin || undefined,
    instagram: entry?.instagram || undefined,
  };
}
