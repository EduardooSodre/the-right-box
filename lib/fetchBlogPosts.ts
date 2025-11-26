import { client } from "@/lib/contentful";
import type { BlogPost } from "@/types/contentful";
import type { EntrySkeletonType } from "contentful";

type BlogPostFields = EntrySkeletonType<{
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  date: string;
}>;

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace 'blogPost' with the correct Contentful content type ID
  const res = await client.getEntries<BlogPostFields>({ content_type: "blogPost" });
  return res.items.map((item) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    coverImage: item.fields.coverImage || undefined,
    date: item.fields.date,
  }));
}
