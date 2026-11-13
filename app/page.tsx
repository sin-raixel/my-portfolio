import Hero from "./components/hero";
import HomeAbout from "./components/home-about";
import HomeContact from "./components/home-contact";
import HomeProjects from "./components/home-projects";
import HomeSkills from "./components/home-skills";
import SectionDots from "./components/section-dots";

// Home: the hero, then a short preview of every other page. Each preview links to its
// full page, and the side buttons jump between the previews.
export default function Home() {
  return (
    <main>
      <div id="home-hero">
        <Hero />
      </div>
      <HomeProjects />
      <HomeSkills />
      <HomeAbout />
      <div className="pb-12">
        <HomeContact />
      </div>

      <SectionDots
        caption="Home"
        dots={[
          { href: "#home-hero", label: "Home" },
          { href: "#home-projects", label: "Projects" },
          { href: "#home-skills", label: "Skills" },
          { href: "#home-about", label: "About me" },
          { href: "#home-contact", label: "Contact" },
        ]}
      />
    </main>
  );
}
