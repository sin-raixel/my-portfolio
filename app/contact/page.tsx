import ContactSection from "../components/contact-section";
import Reveal from "../components/reveal";
import { pageMetadata } from "../data/page-metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with John Raizel Bacang. Open to an internship.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <ContactSection />
      </Reveal>
    </main>
  );
}
