import type { Metadata } from "next";
import { profile } from "./portfolio";

// Each page needs its own title, canonical link, and social preview text, because
// openGraph and twitter set in the layout are replaced, not merged, by a page's own.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const full = `${title} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: `${profile.name} Portfolio`,
      title: full,
      description,
      locale: "en_PH",
    },
    twitter: { card: "summary_large_image", title: full, description },
  };
}
