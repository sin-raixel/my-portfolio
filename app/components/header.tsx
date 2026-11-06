import { nav, profile } from "../data/portfolio";

export default function Header() {
  return (
    <header className="flex flex-col justify-between py-16 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-bright sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-accent">{profile.role}</p>
        <p className="mt-6 max-w-xs leading-relaxed">{profile.bio}</p>

        <nav aria-label="Sections" className="mt-10 hidden lg:block">
          <ul className="space-y-3 font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        {profile.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}