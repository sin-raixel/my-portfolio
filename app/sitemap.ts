import type { MetadataRoute } from "next";
import { site } from "./data/portfolio";

// Update lastModified when you make a meaningful change to a page.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-13";
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
