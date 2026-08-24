import "./Esitys.css";
import ImageWithCredits from "@/components/images/ImageWithCredits";
import PageHeader from "@/components/ui/PageHeader";
import ImageGrid from "@/components/images/ImageGrid";
import Sitaatti from "@/components/ui/Sitaatti";

type SpektriProps = {
  active: boolean;
};

export default function Spektri({ active }: SpektriProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <PageHeader
        mainTitle="Valosirkus Spektri"
        pageLinks={[
          {
            href: "https://www.valosirkusspektri.fi/",
            text: "Valosirkus Spektri",
            iconSrc: "/icons/link.svg",
            iconAlt: "Link icon",
          },
          {
            href: "https://www.instagram.com/valosirkusspektri",
            text: "valosirkusspektri",
            iconSrc: "/icons/ig.svg",
            iconAlt: "Instagram logo",
          },
        ]}
      />
      <ImageWithCredits
        src="/images/spektri/taiteellista-sauli_ketola.webp"
        alt="Liisa"
        credits="Sauli Ketola"
        fetchPriority="high"
      />

      <div className="esitys-container">
        <p className="esitys-text">
          Olemme Valosirkus Spektri Helsingistä ja intohimonamme on tanssi
          erilaisilla led-välineillä!
        </p>
        <p className="esitys-text">
          Esitämme uusia ihastusta ja ihmetystä herättäviä itsetekemiämme
          koreografioita mm. vanteille, siiville, viuhkoille, piiskoille,
          naruille, palloille, tikuille ja luomme musiikkiin vauhdikkaita
          esityskomboja, joissa välineet vaihtuu. Välillä rauhoitumme hitaampien
          melodioiden äärelle viipyillen joissain kauniissa.
        </p>
      </div>
      <ImageGrid>
        <ImageWithCredits
          src="/images/spektri/viuhkat-ahti_kannisto.webp"
          alt="Viuhkat"
          credits="Ahti Kannisto"
        />
        <ImageWithCredits
          src="/images/spektri/liisa-nalle_elmgren.webp"
          alt="Liisa"
          credits="Nalle Elmgren"
        />
      </ImageGrid>
      <div className="esitys-container">
        <p className="esitys-text">
          Esiinnymme päivän tai öin, mutta vain pimeässä esityksen saa
          loistamaan kaikissa sateenkaaren väreissä, ja valokarnevaali pääsee
          täyteen voimaansa.
        </p>
        <p className="esitys-text">
          Erilaiset tilaisuudet festarilavoista kaduille ja toreille, bileistä
          päiväkoteihin, Asunnottomien yöstä Helsingin yliopiston saliin, sekä
          kaupallisista toimijoista, yksityistilaisuuksiin, ja alakulttuurien
          pariin eri puolella Suomea, ovat vahvistaneet ammattitaitoamme jo
          vuodesta 2015 lähtien.
        </p>
      </div>
      <ImageGrid>
        <ImageWithCredits
          src="/images/spektri/kolmikko-chris_senn.webp"
          alt="Trio"
          credits="Chris Senn"
        />
        <ImageWithCredits
          src="/images/spektri/laser-ahti_kannisto.webp"
          alt="Laser"
          credits="Ahti Kannisto"
        />
      </ImageGrid>
      <ImageGrid>
        <ImageWithCredits
          src="/images/spektri/olympia-timo_salola.webp"
          alt="Valosirkus"
          credits="Timo Salola"
        />
        <ImageWithCredits
          src="/images/spektri/teltan_edessa-nalle_elmgren.webp"
          alt="Teltan edessä"
          credits="Nalle Elmgren"
        />
      </ImageGrid>
      <Sitaatti
        text="Me rakastamme sitä mitä teemme, ja tuommekin mukanamme sanoman ilosta ja
        hauskanpidosta!"
      />
    </section>
  );
}
