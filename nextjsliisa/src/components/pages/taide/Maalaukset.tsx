import "./styles.css";

import Sitaatti from "@/components/ui/Sitaatti";
import ArtGallery from "./ArtGallery";
import { images } from "@/lib/imageList";

type MaalauksetProps = {
  active: boolean;
};

export default function Maalaukset({ active }: MaalauksetProps) {
  return (
    <section
      className={`${active ? "page-section taide-page" : "hide-section"}`}
    >
      <h1>TAIDE</h1>
      <div className="sitaatti-wrapper">
        <Sitaatti text='"Luova elämä on kytkeytymistä villien voimien pariin. Vimmaa. Eloonjäämistä ja elossapysymistä, yritystä keskustella luonnonvoimien kanssa. Se on askellusta jonkin pyhän äärellä, antautumista etsinnälle ja oudon kohtaamiselle, hiljaisuuden kuulemista, pysähtyneisyyden läikytystä ja pesän rakentamista myrskyn silmään. Ilmaisu on tarinan mahdollistamista, siinä vaikuttamista ja yli- ja alitajunnan loputtoman liikkeen havainnoimista ja näkyväksi tuomista."' />
      </div>
      <ArtGallery images={images} />
    </section>
  );
}
