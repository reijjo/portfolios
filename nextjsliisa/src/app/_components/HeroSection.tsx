import "./HeroSection.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section wrapper">
      <div className="hero-image">
        <Image
          src="/images/landing/Liisa-5-4.jpg"
          alt="Luisa Lore"
          className="desktop-img"
          fill
          priority
          sizes="(max-width: 580px) 100vw, 1000px"
        />
        <Image
          src="/images/landing/Liisa-9-16.jpg"
          alt="Luisa Lore"
          className="mobile-img"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <h1 className="sitaatti">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima!"
        -Reijjo
      </h1>
    </section>
  );
}
