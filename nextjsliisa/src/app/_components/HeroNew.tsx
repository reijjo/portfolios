import "./HeroNew.css";
import Sitaatti from "@/components/ui/Sitaatti";

import Image from "next/image";

export default function HeroNew() {
  return (
    <section className="hero-new">
      {/* <div className="hero-new-image-container"> */}
      <Image
        className="hero-new-image"
        // src="/images/landing/liisa3-169.jpeg"
        src="/images/landing/liisa-og.jpeg"
        // src="/images/landing/liisa-leikkaus.jpeg"
        alt="Luisa Lore"
        width={1600}
        height={900}
      />
      {/* </div> */}
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
