type SectionHeadingProps = {
  id: string; // used by the parent <section aria-labelledby>
  number?: string; // leave out for sub-sections nested inside a main section
  label: string;
  title: string;
  highlight: string;
  highlightStyle?: "color" | "outline"; // "outline" = see-through letters with a purple border
  intro?: string;
  level?: 1 | 2 | 3; // 1 = page heading, 2 = main section, 3 = smaller heading for a sub-section
};

export default function SectionHeading({
  id,
  number,
  label,
  title,
  highlight,
  highlightStyle = "color",
  intro,
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 3 ? "h3" : level === 1 ? "h1" : "h2";
  const size = level === 3 ? "text-3xl sm:text-5xl" : "text-4xl sm:text-6xl";

  return (
    <div>
      <p className="text-xs font-semibold tracking-widest text-accent uppercase">
        {number ? `${number} — ${label}` : label}
      </p>
      <Heading id={id} className={`mt-4 leading-tight font-bold tracking-tight text-bright ${size}`}>
        {title}{" "}
        <span
          className={
            highlightStyle === "outline"
              ? "text-outline transition-colors duration-300 hover:text-accent"
              : "text-accent"
          }
        >
          {highlight}
        </span>
      </Heading>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}
