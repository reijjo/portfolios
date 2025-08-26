import "./LandingPage.css";

import hero from "../../assets/images/landing/liisa-hero.jpg";
import herodesk from "../../assets/images/landing/liisa-desk.jpg";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="hero">
        <picture className="hero-image">
          <source media="(width <= 600px)" srcSet={hero} />
          <img
            src={herodesk}
            alt="Luisa Lore"
            title="Luisa Lore"
            className="hero-img"
          />
        </picture>
      </section>
    </main>
  );
};

export default LandingPage;
