import { hero, nav, profile } from "../data/portfolio";

export default function Navbar() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  const links = [{ label: "Home", href: "#home" }, ...nav];

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 font-semibold text-bright">
          <span className="grid size-9 place-items-center rounded-full bg-accent-strong text-sm text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={hero.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent-strong px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-ink"
          >
            Resume
          </a>

          {/* Mobile menu: no JavaScript needed */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-line px-4 py-2 text-sm font-medium text-bright">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-44 space-y-1 rounded-lg border border-line bg-surface p-2 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="block rounded-md px-3 py-2 hover:bg-ink hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}