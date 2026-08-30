import Sitaatti from "@/components/ui/Sitaatti";
import "./HeroSection.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section wrapper">
      <div className="hero-image">
        <Image
          src="/images/landing/Liisa-5-4.webp"
          alt="Luisa Lore"
          className="desktop-img"
          fill
          priority
          sizes="(max-width: 580px) 90vw, 1000px"
          fetchPriority="high"
        />
        <Image
          src="/images/landing/Liisa-9-16.webp"
          alt="Luisa Lore"
          className="mobile-img"
          fill
          priority
          sizes="100vw"
          fetchPriority="high"
        />
      </div>
      <Sitaatti
        text='"Etsin samankaltaisuutta erilaisuudessa, taipuisaa keskiviivaa ja
        pehmeää ydintä. Radikaalisti keskeneräisenä ja keskitiellä, kapinoin
        kaikkea vastaan, etsien kuitenkin kotia."'
        // text='"Luova elämä on kytkeytymistä villien voimien pariin. Vimmaa. Eloonjäämistä ja elossapysymistä, yritystä keskustella luonnonvoimien kanssa. Se on askellusta jonkin pyhän äärellä, pesän rakentamista myrskyn silmään, antautumista etsinnälle, oudon kohtaamiselle
        //  luonnonvoimien liikehdinnän havainnoimista ja sen ilmaisua, pysähtyneisyyden läikytystä sekä tarinan  mahdollistamista."'
      />
    </section>
  );
}
