import ImageWithCaption from "@/components/images/ImageWithCaption";
import "./ArtGallery.css";

const images = [
  {
    src: "/images/taide/vuoret.webp",
    alt: "Vuoret",
    title: "Vuoret",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/wasting-time.webp",
    alt: "Wasting Time",
    title: "Wasting Time",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/voodoo-viidakkoseremonia.webp",
    alt: "Voodoo Viidakkoseremonia, 2025",
    title: "Voodoo Viidakkoseremonia, 2025",
    koko: "50 x 61 cm",
    tekniikka: "Akryyli kankaalle",
  },
  {
    src: "/images/taide/croissantti-puussa.webp",
    alt: "Croissantti puussa",
    title: "Croissantti puussa",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/elavaksi-syntynyt.webp",
    alt: "Eläväksi syntynyt, 2026",
    title: "Eläväksi syntynyt, 2026",
    koko: "60 x 40 cm",
    tekniikka: "Akryyli ja muste kankaalle",
  },
  {
    src: "/images/taide/hetken-syleily.webp",
    alt: "Hetken syleily, 2026",
    title: "Hetken syleily, 2026",
    koko: "30 x 30 cm",
    tekniikka: "Akryyli mdf-levylle",
  },
  {
    src: "/images/taide/hetken-syleily2.webp",
    alt: "Hetken syleily 2",
    title: "Hetken syleily 2",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/kaikki-mita-mukanani-kannan.webp",
    alt: "Kaikki mitä mukanani kannan, 2026",
    title: "Kaikki mitä mukanani kannan, 2026",
    koko: "50 x 70 cm",
    tekniikka: "Akryyli kankaalle",
  },
  {
    src: "/images/taide/keraaminen-vanhus.webp",
    alt: "Keraaminen vanhus",
    title: "Keraaminen vanhus",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/koristemaalaus1.webp",
    alt: "Koristemaalaus 1",
    title: "Koristemaalaus 1",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/koristemaalaus2.webp",
    alt: "Koristemaalaus 2",
    title: "Koristemaalaus 2",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/kukanimijat.webp",
    alt: "Kukanimijät, 2026",
    title: "Kukanimijät, 2026",
    koko: "46 x 38 cm",
    tekniikka: "Muste ja akryyli mdf-levylle",
  },
  {
    src: "/images/taide/kukkaharjoituksia1.webp",
    alt: "Kehystetty korsitekukkakollaasi pysty, 2025",
    title: "Kehystetty korsitekukkakollaasi pysty, 2025",
    koko: "46 x 56 cm",
    tekniikka: "Akryyli maitopahville ja pellavakankaalle",
  },
  {
    src: "/images/taide/kukkaharjoituksia2.webp",
    alt: "Kehystetty korsitekukkakollaasi vaaka, 2025",
    title: "Kehystetty korsitekukkakollaasi vaaka, 2025",
    koko: "56 x 46 cm",
    tekniikka: "Akryyli maitopahville ja pellavakankaalle",
  },
  {
    src: "/images/taide/kukkivahuntu.webp",
    alt: "Kukkiva huntu, 2024, 2026",
    title: "Kukkiva huntu, 2024, 2026",
    koko: "40 x 50 cm",
    tekniikka: "Öljyväri, muste, akryyli mdf-levylle",
  },
  {
    src: "/images/taide/kuohuissani.webp",
    alt: "Kuohuissani, 2026",
    title: "Kuohuissani, 2026",
    koko: "70 x 50 cm",
    tekniikka: "Akryyli kankaalle",
  },
  {
    src: "/images/taide/luonto-luojan-suo.webp",
    alt: "Luonto Luojan suo, 2024",
    title: "Luonto Luojan suo, 2024",
    koko: "30 x 40 cm",
    tekniikka: "Puukaiverrus, munankuoret, akryyli puulevylle",
  },
  {
    src: "/images/taide/meren-verkossa.webp",
    alt: "Meren verkossa",
    title: "Meren verkossa",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/merenrannalla.webp",
    alt: "Merenrannalla",
    title: "Merenrannalla",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/metsassa.webp",
    alt: "Metsässä",
    title: "Metsässä",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/mieleni-tulva.webp",
    alt: "Mieleni tulva, 2026",
    title: "Mieleni tulva, 2026",
    koko: "50 x 61 cm",
    tekniikka: "Akryyli kankaalle",
  },
  {
    src: "/images/taide/nayn-omainen.webp",
    alt: "Näyn omainen, 2024",
    title: "Näyn omainen, 2024",
    koko: "40 x 40 cm",
    tekniikka: "Akryyli kankaalle",
  },
  {
    src: "/images/taide/paperimosaiikkinukke.webp",
    alt: "Paperimosaiikkinukke",
    title: "Paperimosaiikkinukke",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/pataassa.webp",
    alt: "Pataässä",
    title: "Pataässä",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/tanssija.webp",
    alt: "Tanssija",
    title: "Tanssija",
    koko: "",
    tekniikka: "",
  },
  {
    src: "/images/taide/valkoinen-virta.webp",
    alt: "Valkoinen virta, 2025",
    title: "Valkoinen virta, 2025",
    koko: "50 x 61 cm",
    tekniikka: "Akryyli kankaalle",
  },
];

export default function ArtGallery() {
  return (
    <section className="art-gallery">
      {images.map((image, index) => (
        <ImageWithCaption
          key={image.src}
          src={image.src}
          alt={image.alt}
          title={image.title}
          koko={image.koko}
          tekniikka={image.tekniikka}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
    </section>
  );
}
