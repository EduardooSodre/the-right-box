import { MetadataRoute } from "next";
import { client } from "@/lib/contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://therightbox.com.br";

  // Buscar posts do blog
  const entries = await client.getEntries({
    content_type: "blogPost",
    limit: 1000,
  });

  const blogPosts = entries.items.map((item) => ({
    url: `${baseUrl}/blog/${(item.fields as { slug: string }).slug}`,
    lastModified: new Date((item.fields as { publishedDate: string }).publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
