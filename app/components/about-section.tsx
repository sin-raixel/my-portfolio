import { LuLaptop, LuSparkles, LuTelescope } from "react-icons/lu";
import type { About } from "../data/portfolio";
import SectionHeading from "./section-heading";

export default function AboutSection({ about }: { about: About }) {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16">
      <SectionHeading
        id="about-title"
        number="05"
        label="About me"
        title="Curious by habit,"
        highlight="builder by choice."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div>
          <div className="space-y-5 text-lg leading-relaxed">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-accent pt-4">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-accent uppercase">
                <LuTelescope aria-hidden="true" className="size-4" />
                Away from the keyboard
              </p>
              <p className="mt-2 text-bright">{about.away}</p>
            </div>
            <div className="border-t border-line pt-4">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
                <LuLaptop aria-hidden="true" className="size-4" />
                At the keyboard
              </p>
              <p className="mt-2 text-bright">{about.atKeyboard}</p>
            </div>
          </div>
        </div>

        <div className="self-start rounded-2xl glow border border-line bg-surface p-8">
          <h3 className="flex items-center gap-2 text-2xl font-semibold text-bright">
            Right now
            <LuSparkles aria-hidden="true" className="size-5 text-accent motion-safe:animate-float" />
          </h3>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {about.currently.map((row) => (
              <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-xs font-semibold tracking-widest text-accent uppercase">{row.label}</dt>
                <dd className="text-bright">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}