
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p>&copy; 2026 {profile.name}</p>
        <p>Built with Next.js and Tailwind CSS</p>
        <a href="#home" className="text-accent underline decoration-line underline-offset-4 hover:decoration-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}