import type { MetadataRoute } from "next";
import { site } from "./data/portfolio";

// Update lastModified when you make a meaningful change to the site.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-11-08",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
