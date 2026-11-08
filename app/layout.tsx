import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { hero, profile, site } from "./data/portfolio";
import SpaceBackground from "./components/space-background";
import SpaceObjects from "./components/space-objects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${profile.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title: site.title,
    description: site.description,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090f",
  colorScheme: "dark",
};

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  jobTitle: profile.role,
  image: `${site.url}${hero.photo}`,
  sameAs: profile.links
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {/* The hero sparkles poke a few pixels past the screen edge on phones and
            tablets. Clipping here stops sideways scrolling, and unlike overflow-hidden
            it keeps the sticky navbar working. */}
        <div className="space-nebula" aria-hidden="true" />
        <SpaceBackground />
        <div className="relative overflow-x-clip">
          <SpaceObjects />
          {children}
        </div>
      </body>
    </html>
  );
}
