import "./HeroNew.css";
import Sitaatti from "@/components/ui/Sitaatti";

import Image from "next/image";

export default function HeroNew() {
  return (
    <section className="hero-new">
      <div className="hero-overlay"></div>
      <Image
        className="hero-new-image"
        src="/images/landing/og-zoomout.webp"
        alt="Luisa Lore"
        width={1600}
        height={900}
        fetchPriority="high"
        priority
        loading="eager"
      />
      <div className="hero-new-image-mobile">
        <Image
          src="/images/landing/og-zoomout-mobile2.webp"
          alt="Luisa Lore"
          className="new-mobile-img"
          fill
          sizes="100vw"
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <div className="wrapper center">
        <Sitaatti
          text='"Etsin samankaltaisuutta erilaisuudessa, taipuisaa keskiviivaa ja
				pehmeää ydintä. Radikaalisti keskeneräisenä ja keskitiellä, kapinoin
				kaikkea vastaan, etsien kuitenkin kotia."'
        />
      </div>
    </section>
  );
}
