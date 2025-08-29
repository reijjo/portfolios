import "./LandingPage.css";

import liisa916 from "../../assets/images/landing/liisa-9-16.jpg";
import liisa54 from "../../assets/images/landing/Liisa-5-4.jpg";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="hero">
        <picture className="hero-image">
          <source media="(width <= 600px)" srcSet={liisa916} />
          <img
            src={liisa54}
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
