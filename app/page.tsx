import Hero from "./components/hero";
import HomeSummary from "./components/home-summary";
import SectionDots from "./components/section-dots";
import { nav } from "./data/portfolio";

// Home: the hero and a short summary of every other page. Each card (and each side
// dot) opens the full version on its own page.
export default function Home() {
  return (
    <main id="home">
      <Hero />
      <HomeSummary />
      <SectionDots caption="Pages" dots={nav} />
    </main>
  );
}
