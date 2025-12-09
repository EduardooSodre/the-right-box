import { client } from "@/lib/contentful";
import type { Asset, EntrySkeletonType } from "contentful";

interface BlogPostFields {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: Asset;
  publishedDate: string;
  author?: string;
  tags?: string[];
}

interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: BlogPostFields;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author?: string;
  category?: string;
  slug: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishedDate"], // Mais recentes primeiro
      limit: 10,
    });

    return entries.items.map((item) => {
      const fields = item.fields;
      const imageUrl = fields.featuredImage?.fields?.file?.url;

      return {
        title: fields.title || "Post sem título",
        excerpt: fields.excerpt || "",
        image: imageUrl ? `https:${imageUrl}` : "/images/blog.png",
        date: fields.publishedDate || new Date().toISOString(),
        author: fields.author,
        category: fields.tags?.[0], // Primeira tag como categoria
        slug: fields.slug || "",
      };
    });
  } catch (error) {
    console.error("Erro ao buscar posts do blog:", error);
    return [];
  }
}
