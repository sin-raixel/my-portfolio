// Decorative celestial objects. They sit behind the page content and are partly
// cropped by the screen edge, like they're drifting past.
export default function SpaceObjects() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none">
      {/* Ringed planet behind the hero */}
      <svg
        viewBox="0 0 400 400"
        className="planet-drift absolute top-52 -right-28 size-72 opacity-45 drop-shadow-[0_0_60px_rgb(124_58_237/0.35)] md:top-4 md:-right-40 md:size-[30rem] md:opacity-90"
      >
        <defs>
          <radialGradient id="planet-body" cx="34%" cy="30%" r="78%">
            <stop offset="0%" stopColor="#ddd0ff" />
            <stop offset="42%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#25105c" />
          </radialGradient>
          <radialGradient id="planet-shade" cx="30%" cy="26%" r="85%">
            <stop offset="55%" stopColor="#05030f" stopOpacity="0" />
            <stop offset="100%" stopColor="#05030f" stopOpacity="0.7" />
          </radialGradient>
          <linearGradient id="planet-ring" x1="0" x2="1">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#e9e1ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.15" />
          </linearGradient>
          <clipPath id="planet-clip"><circle cx="200" cy="200" r="104" /></clipPath>
          <clipPath id="ring-front"><rect x="0" y="200" width="400" height="200" /></clipPath>
        </defs>
        <g transform="rotate(-18 200 200)">
          <ellipse cx="200" cy="200" rx="188" ry="46" fill="none" stroke="url(#planet-ring)" strokeWidth="14" />
          <ellipse cx="200" cy="200" rx="164" ry="40" fill="none" stroke="url(#planet-ring)" strokeWidth="5" opacity="0.7" />
          <circle cx="200" cy="200" r="104" fill="url(#planet-body)" />
          <g clipPath="url(#planet-clip)" opacity="0.14">
            <rect x="90" y="150" width="220" height="14" fill="#fff" />
            <rect x="90" y="190" width="220" height="22" fill="#25105c" />
            <rect x="90" y="236" width="220" height="10" fill="#fff" />
          </g>
          <circle cx="200" cy="200" r="104" fill="url(#planet-shade)" />
          <g clipPath="url(#ring-front)">
            <ellipse cx="200" cy="200" rx="188" ry="46" fill="none" stroke="url(#planet-ring)" strokeWidth="14" />
            <ellipse cx="200" cy="200" rx="164" ry="40" fill="none" stroke="url(#planet-ring)" strokeWidth="5" opacity="0.7" />
          </g>
        </g>
      </svg>

      {/* Crescent moon near the contact section */}
      <svg
        viewBox="0 0 120 120"
        className="absolute bottom-44 -left-6 size-28 opacity-80 drop-shadow-[0_0_24px_rgb(196_181_253/0.45)] md:bottom-52 md:left-16 md:size-36"
      >
        <defs>
          <linearGradient id="moon-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f1ff" />
            <stop offset="100%" stopColor="#b9b2d0" />
          </linearGradient>
          <mask id="moon-crescent">
            <rect width="120" height="120" fill="#fff" />
            <circle cx="78" cy="50" r="44" fill="#000" />
          </mask>
        </defs>
        <circle cx="58" cy="62" r="46" fill="url(#moon-fill)" mask="url(#moon-crescent)" />
      </svg>
    </div>
  );
}
