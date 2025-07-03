import Image from "next/image";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi. I am Teemu</h1>

        <div className="hero-image-container">
          <div className="tape"></div>
          <Image
            className="hero-image"
            src="/assets/images/mina.jpg"
            alt="Teemu"
            title="That's me"
            priority
            fill
          />
        </div>
        <h2>Full Stack Developer</h2>
      </div>
    </section>
  );
};
