import Image from "next/image";
import "./Esitys.css";
import ImageWithCredits from "@/components/images/ImageWithCredits";
import PageHeader from "@/components/ui/PageHeader";

type MayralakitProps = {
  active: boolean;
};

export default function Mayralakit({ active }: MayralakitProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <PageHeader
        mainTitle="Mäyrälakit"
        pageLinks={[
          {
            href: "https://open.spotify.com/artist/34En99VGBVc5hlfYJXbp27?si=41MmFRSNT1eQHwX8Qscrdg&nd=1&dlsi=064a3fddf86440ff",
            text: "mäyrälakit",
            iconSrc: "/icons/spotify.svg",
            iconAlt: "Spotify logo",
          },
          {
            href: "https://www.instagram.com/mayralakit",
            text: "mayralakit",
            iconSrc: "/icons/ig.svg",
            iconAlt: "Instagram logo",
          },
        ]}
      />
      <ImageWithCredits
        src="/images/mayralakit/saunassa-sami_virtanen.jpeg"
        alt="Mäyrälakit saunassa"
        credits="Sami Virtanen"
      />
      <p className="esitys-text">
        Mäyrälakit on noin kahdeksan jäsenen muodostama yhtye, joka esittää itse
        säveltämäänsä ja suomeksi sanoittamaansa kevyttä laulu- ja
        soitinmusiikkia, jossa on vaikutteita rock-iskelmästä ja
        vaihtoehtorockista. Mäyrälakkien saundimaailma on orgaanisen juurevaa,
        ja siinä tuoksuu lämpimät kesäyöt, himmeät kapakat ja elämän
        katkeransuloinen toivorikkaus.
      </p>
      <ImageWithCredits
        src="/images/mayralakit/yleisoa-jonne_hytonen.jpeg"
        alt="Mäyrälakit bändikuva"
        credits="Jonne Hytönen"
      />
      <p className="esitys-text">
        Mäyrälakit on soittanut yhdessä vuodesta 2015 saakka, ja yhtyeen
        ensimmäinen levy ”Tanssi halki tavernan” julkaistiin vuonna 2021.
        Debyyttilevynsä jälkeen yhtye on julkaissut pari singleä, ja nyt
        kymmenvuotista taivaltaan juhlistava yhtye on palannut studioon
        tarkoituksenaan julkaista toinen pitkäsoitto vuoden 2026 aikana.
      </p>
      <div className="image-grid">
        <ImageWithCredits
          src="/images/mayralakit/liisa_heikki-mikko_kuorelahti.jpeg"
          alt="Mäyrälakit keikalla"
          credits="Mikko Kuorelahti"
        />
        <ImageWithCredits
          src="/images/mayralakit/liilat-mikko_kuorelahti.jpeg"
          alt="Mäyrälakit keikalla"
          credits="Mikko Kuorelahti"
        />
      </div>

      <ImageWithCredits
        src="/images/mayralakit/hamara-riikka_arte.jpeg"
        alt="Mäyrälakit bändikuva ulkona"
        credits="Riikka Arte"
      />
    </section>
  );
}
