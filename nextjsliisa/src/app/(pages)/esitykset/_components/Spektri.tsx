import "./Esitys.css";

type SpektriProps = {
  active: boolean;
};

export default function Spektri({ active }: SpektriProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <h1>Valosirkus Spektri</h1>
      <div className="jokukuva">joku kuva</div>
      <p>
        Olemme Valosirkus Spektri Helsingistä ja intohimonamme on tanssi
        erilaisilla led-välineillä! Esitämme uusia ihastusta ja ihmetystä
        herättäviä itsetekemiämme koreografioita mm. vanteille, siiville,
        viuhkoille, piiskoille, naruille, palloille, tikuille ja luomme
        musiikkiin vauhdikkaita esityskomboja, joissa välineet vaihtuu. Välillä
        rauhoitumme hitaampien melodioiden äärelle viipyillen joissain
        kauniissa.
      </p>{" "}
      <p>
        Esiinnymme päivän tai öin, mutta vain pimeässä esityksen saa loistamaan
        kaikissa sateenkaaren väreissä, ja valokarnevaali pääsee täyteen
        voimaansa.
      </p>
      <p>
        Erilaiset tilaisuudet festarilavoista kaduille ja toreille, bileistä
        päiväkoteihin, Asunnottomien yöstä Helsingin yliopiston saliin, sekä
        kaupallisista toimijoista, yksityistilaisuuksiin, ja alakulttuurien
        pariin eri puolella Suomea, ovat vahvistaneet ammattitaitoamme jo
        vuodesta 2015 lähtien.
      </p>
      <p>
        Me rakastamme sitä mitä teemme, ja tuommekin mukanamme sanoman ilosta ja
        hauskanpidosta!
      </p>
      <div className="jokukuva">joku kuva</div>
      <p>Lisää tekstii Lorem ipsum dolor sit amet ??</p>
      <div>
        Linkit
        <a href="https://www.valosirkusspektri.fi/" target="_blank">
          Website
        </a>
        <a href="https://www.instagram.com/valosirkusspektri" target="_blank">
          Insta
        </a>
      </div>
    </section>
  );
}
