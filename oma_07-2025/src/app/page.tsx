import { Hero } from "./_components/hero/Hero";
import { Projects } from "./_components/projects/Projects";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Projects />
    </main>
  );
}
