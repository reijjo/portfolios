import ArtGallery from "@/components/pages/taide/ArtGallery";
import Sitaatti from "@/components/ui/Sitaatti";

export default function Taide() {
  return (
    <main className="wrapper">
      <div className="page-section taide-page">
        <h1>TAIDE</h1>
        <div className="sitaatti-wrapper">
          <Sitaatti text='"Luova elämä on kytkeytymistä villien voimien pariin. Vimmaa. Eloonjäämistä ja elossapysymistä, yritystä keskustella luonnonvoimien kanssa. Se on askellusta jonkin pyhän äärellä, antautumista etsinnälle ja oudon kohtaamiselle, hiljaisuuden kuulemista, pysähtyneisyyden läikytystä ja pesän rakentamista myrskyn silmään. Ilmaisu on tarinan mahdollistamista, siinä vaikuttamista ja yli- ja alitajunnan loputtoman liikkeen havainnoimista."' />
        </div>
        <ArtGallery />
      </div>
    </main>
  );
}
