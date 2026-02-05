import ImageWithCredits from "@/components/images/ImageWithCredits";
import "./Esitys.css";
import Image from "next/image";

type SpektriProps = {
  active: boolean;
};

export default function Spektri({ active }: SpektriProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <div className="esitys-header">
        <h1>Valosirkus Spektri</h1>
        <div className="esitys-links">
          <a
            href="https://www.valosirkusspektri.fi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/link.svg"
              alt="Link icon"
              width={16}
              height={16}
            />
            <p>Valosirkus Spektri</p>
          </a>
          <a
            href="https://www.instagram.com/valosirkusspektri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/ig.svg"
              alt="Instagram logo"
              width={16}
              height={16}
            />
            <p>valosirkusspektri</p>
          </a>
        </div>
      </div>
      <ImageWithCredits
        src="/images/spektri/taiteellista-sauli_ketola.jpeg"
        alt="Liisa"
        credits="Sauli Ketola"
      />
      <p>
        Olemme Valosirkus Spektri Helsingistä ja intohimonamme on tanssi
        erilaisilla led-välineillä! Esitämme uusia ihastusta ja ihmetystä
        herättäviä itsetekemiämme koreografioita mm. vanteille, siiville,
        viuhkoille, piiskoille, naruille, palloille, tikuille ja luomme
        musiikkiin vauhdikkaita esityskomboja, joissa välineet vaihtuu. Välillä
        rauhoitumme hitaampien melodioiden äärelle viipyillen joissain
        kauniissa.
      </p>
      <div className="esitys-grid">
        <ImageWithCredits
          src="/images/spektri/viuhkat-ahti_kannisto.jpeg"
          alt="Viuhkat"
          credits="Ahti Kannisto"
        />
        <ImageWithCredits
          src="/images/spektri/liisa-nalle_elmgren.jpeg"
          alt="Liisa"
          credits="Nalle Elmgren"
        />
      </div>
      <div className="esitys-container">
        <p>
          Esiinnymme päivän tai öin, mutta vain pimeässä esityksen saa
          loistamaan kaikissa sateenkaaren väreissä, ja valokarnevaali pääsee
          täyteen voimaansa.
        </p>
        <p>
          Erilaiset tilaisuudet festarilavoista kaduille ja toreille, bileistä
          päiväkoteihin, Asunnottomien yöstä Helsingin yliopiston saliin, sekä
          kaupallisista toimijoista, yksityistilaisuuksiin, ja alakulttuurien
          pariin eri puolella Suomea, ovat vahvistaneet ammattitaitoamme jo
          vuodesta 2015 lähtien.
        </p>
      </div>
      <div className="esitys-grid">
        <ImageWithCredits
          src="/images/spektri/kolmikko-chris_senn.jpeg"
          alt="Trio"
          credits="Chris Senn"
        />
        <ImageWithCredits
          src="/images/spektri/laser-ahti_kannisto.jpeg"
          alt="Laser"
          credits="Ahti Kannisto"
        />
        <ImageWithCredits
          src="/images/spektri/olympia-timo_salola.jpeg"
          alt="Valosirkus"
          credits="Timo Salola"
        />
        <ImageWithCredits
          src="/images/spektri/teltan_edessa-nalle_elmgren.jpeg"
          alt="Teltan edessä"
          credits="Nalle Elmgren"
        />
      </div>
      <h2 className="text-center">
        Me rakastamme sitä mitä teemme, ja tuommekin mukanamme sanoman ilosta ja
        hauskanpidosta!
      </h2>
    </section>
  );
}
