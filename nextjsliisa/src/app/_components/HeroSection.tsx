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
      <p className="sitaatti">
        "Etsin samankaltaisuutta erilaisuudessa, taipuisaa keskiviivaa ja
        pehmeää ydintä. Radikaalisti keskeneräisenä ja keskitiellä, kapinoin
        kaikkea vastaan, etsien kuitenkin kotia."
      </p>
    </section>
  );
}
