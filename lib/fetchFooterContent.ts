import { client } from "@/lib/contentful";
import type { FooterContent } from "@/types/contentful";

export async function fetchFooterContent(): Promise<FooterContent> {
  const res = await client.getEntries({
    content_type: "footerContent",
    limit: 1,
  });
  const entry = res.items[0]?.fields as Partial<FooterContent> | undefined;
  return {
    tagline: entry?.tagline || "",
    contactTitle: entry?.contactTitle || "",
    socialTitle: entry?.socialTitle || "",
    copyright: entry?.copyright || "",
    developedBy: entry?.developedBy || "",
    developedByUrl: entry?.developedByUrl || "",
  };
}
