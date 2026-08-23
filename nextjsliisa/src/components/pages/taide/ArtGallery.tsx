import ImageWithCaption from "@/components/images/ImageWithCaption";
import "./ArtGallery.css";

const images = [
  {
    src: "/images/taide/vuoret.webp",
    alt: "Vuoret",
    title: "Vuoret",
  },
  {
    src: "/images/taide/wasting-time.webp",
    alt: "Wasting Time",
    title: "Wasting Time",
  },
  {
    src: "/images/taide/voodoo-viidakkoseremonia.webp",
    alt: "Voodoo Viidakkoseremonia",
    title: "Voodoo Viidakkoseremonia",
  },
  {
    src: "/images/taide/croissantti-puussa.webp",
    alt: "Croissantti puussa",
    title: "Croissantti puussa",
  },
  {
    src: "/images/taide/elavaksi-syntynyt.webp",
    alt: "Eläväksi syntynyt",
    title: "Eläväksi syntynyt",
  },
  {
    src: "/images/taide/hetken-syleily.webp",
    alt: "Hetken syleily",
    title: "Hetken syleily",
  },
  {
    src: "/images/taide/hetken-syleily2.webp",
    alt: "Hetken syleily 2",
    title: "Hetken syleily 2",
  },
  {
    src: "/images/taide/kaikki-mita-mukanani-kannan.webp",
    alt: "Kaikki mitä mukanani kannan",
    title: "Kaikki mitä mukanani kannan",
  },
  {
    src: "/images/taide/keraaminen-vanhus.webp",
    alt: "Keraaminen vanhus",
    title: "Keraaminen vanhus",
  },
  {
    src: "/images/taide/koristemaalaus1.webp",
    alt: "Koristemaalaus 1",
    title: "Koristemaalaus 1",
  },
  {
    src: "/images/taide/koristemaalaus2.webp",
    alt: "Koristemaalaus 2",
    title: "Koristemaalaus 2",
  },
  {
    src: "/images/taide/kukanimijat.webp",
    alt: "Kukanimijät",
    title: "Kukanimijät",
  },
  {
    src: "/images/taide/kukkaharjoituksia1.webp",
    alt: "Kukkaharjoituksia 1",
    title: "Kukkaharjoituksia 1",
  },
  {
    src: "/images/taide/kukkaharjoituksia2.webp",
    alt: "Kukkaharjoituksia 2",
    title: "Kukkaharjoituksia 2",
  },
  {
    src: "/images/taide/kukkivahuntu.webp",
    alt: "Kukkiva huntu",
    title: "Kukkiva huntu",
  },
  {
    src: "/images/taide/kuohuissani.webp",
    alt: "Kuohuissani",
    title: "Kuohuissani",
  },
  {
    src: "/images/taide/luonto-luojan-suo.webp",
    alt: "Luonto luojan suo",
    title: "Luonto luojan suo",
  },
  {
    src: "/images/taide/meren-verkossa.webp",
    alt: "Meren verkossa",
    title: "Meren verkossa",
  },
  {
    src: "/images/taide/merenrannalla.webp",
    alt: "Merenrannalla",
    title: "Merenrannalla",
  },
  {
    src: "/images/taide/metsassa.webp",
    alt: "Metsässä",
    title: "Metsässä",
  },
  {
    src: "/images/taide/mieleni-tulva.webp",
    alt: "Mieleni tulva",
    title: "Mieleni tulva",
  },
  {
    src: "/images/taide/nayn-omainen.webp",
    alt: "Näyn omainen",
    title: "Näyn omainen",
  },
  {
    src: "/images/taide/paperimosaiikkinukke.webp",
    alt: "Paperimosaiikkinukke",
    title: "Paperimosaiikkinukke",
  },
  {
    src: "/images/taide/pataassa.webp",
    alt: "Pataässä",
    title: "Pataässä",
  },
  {
    src: "/images/taide/tanssija.webp",
    alt: "Tanssija",
    title: "Tanssija",
  },
  {
    src: "/images/taide/valkoinen-virta.webp",
    alt: "Valkoinen virta",
    title: "Valkoinen virta",
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
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
    </section>
  );
}
