type SectionHeadingProps = {
  id: string; // used by the parent <section aria-labelledby>
  number: string;
  label: string;
  title: string;
  highlight: string;
  highlightStyle?: "color" | "outline"; // "outline" = see-through letters with a purple border
  intro?: string;
};

export default function SectionHeading({
  id,
  number,
  label,
  title,
  highlight,
  highlightStyle = "color",
  intro,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest text-accent uppercase">
        {number} — {label}
      </p>
      <h2 id={id} className="mt-4 text-4xl leading-tight font-bold tracking-tight text-bright sm:text-6xl">
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
      </h2>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}