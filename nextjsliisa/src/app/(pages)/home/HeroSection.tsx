import "./HeroSection.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="hero-section wrapper">
      <div className="hero-image">
        <Image
          src="/images/landing/Liisa-5-4.jpg"
          alt="Luisa Lore"
          title="Luisa Lore"
          className="desktop-img"
          width={800}
          height={600}
          priority
        />
        <Image
          src="/images/landing/Liisa-9-16.jpg"
          alt="Luisa Lore"
          title="Luisa Lore"
          className="mobile-img"
          width={480}
          height={720}
          priority
        />
      </div>
      <h1 className="sitaatti">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima!"
        -Reijjo
      </h1>
    </div>
  );
}
