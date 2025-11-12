import { client } from "@/lib/contentful";
import type { AccelerationContent } from "@/types/contentful";

export async function fetchAccelerationContent(): Promise<AccelerationContent> {
  const res = await client.getEntries({
    content_type: "accelerationContent",
    limit: 1,
  });
  const entry = res.items[0]?.fields as unknown as AccelerationContent;
  return {
    title: entry?.title ?? "",
    subtitle: entry?.subtitle ?? "",
    mainTitle: entry?.mainTitle ?? "",
    mainDescription: entry?.mainDescription ?? "",
    solutionsSectionTitle: entry?.solutionsSectionTitle ?? "",
    solutionsSectionDescription: entry?.solutionsSectionDescription ?? "",
    ctaTitle: entry?.ctaTitle ?? "",
    finalNote: entry?.finalNote ?? "",
    gargalosTitle: entry?.gargalosTitle ?? "",
    gargalosSubtitle: entry?.gargalosSubtitle ?? "",
  };
}
