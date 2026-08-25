import type { MetadataRoute } from "next"

import { GUIDES, guidePath } from "@/lib/content"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-25")

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...GUIDES.map((guide) => ({
      url: `${SITE_URL}${guidePath(guide.slug)}`,
      lastModified: new Date(guide.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]
}
