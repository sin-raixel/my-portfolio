import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

// Shown for any address that doesn't exist.
export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-6xl place-items-center px-6 py-24 text-center">
      <div>
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">Error 404</p>
        <h1 className="mt-4 text-7xl leading-none font-bold tracking-tight text-bright sm:text-9xl">
          <span className="text-outline">Lost</span> in space
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed">
          That page doesn&apos;t exist, or it drifted off somewhere. Head back and pick a destination.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="group inline-flex items-center gap-2 shine btn-glass-accent px-7 py-3 font-medium">
            Back to Home
            <LuArrowRight aria-hidden="true" className="size-5 transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 btn-glass px-7 py-3 font-medium">
            See projects
          </Link>
        </div>
      </div>
    </main>
  );
}
