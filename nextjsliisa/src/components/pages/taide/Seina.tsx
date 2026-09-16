import {
  koriste,
  punttis,
  punttisIntro,
  ranska,
  ranskaIntro,
} from "@/lib/koristeList";
import ArtGallery from "./ArtGallery";
import "./styles.css";
import KoristeSection from "./KoristeSection";

type SeinaProps = {
  active: boolean;
};

export default function Seina({ active }: SeinaProps) {
  return (
    <section
      className={`${active ? "page-section taide-page" : "hide-section"}`}
    >
      <h1>KORISTE- JA SEINÄMAALAUKSET</h1>
      <div className="koriste-link-list">
        <a href="#ooppera">Ooppera</a>
        <a href="#punttis">Punttis</a>
      </div>
      <ArtGallery images={koriste} />
      <KoristeSection
        sectionTitle="oopperakeissi"
        intro={ranskaIntro}
        images={ranska}
        link="ooppera"
      />
      <KoristeSection
        sectionTitle="punttis"
        intro={punttisIntro}
        images={punttis}
        link="punttis"
      />
    </section>
  );
}
