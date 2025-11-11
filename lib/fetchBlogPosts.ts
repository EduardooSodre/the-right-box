import { client } from "@/lib/contentful";
import type { BlogPost } from "@/types/contentful";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace 'blogPost' with the correct Contentful content type ID
  const res = await client.getEntries({ content_type: "blogPost" });
  return res.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    coverImage: item.fields.coverImage || undefined,
    date: item.fields.date,
  }));
}
