import "./Esitys.css";

type MayralakitProps = {
  active: boolean;
};

export default function Mayralakit({ active }: MayralakitProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <h1>Mäyrälakit</h1>
      <div className="jokukuva">joku kuva</div>
      <p>
        Mäyrälakit on noin kahdeksan jäsenen muodostama yhtye, joka esittää itse
        säveltämäänsä ja suomeksi sanoittamaansa kevyttä laulu- ja
        soitinmusiikkia, jossa on vaikutteita rock-iskelmästä ja
        vaihtoehtorockista. Mäyrälakkien saundimaailma on orgaanisen juurevaa,
        ja siinä tuoksuu lämpimät kesäyöt, himmeät kapakat ja elämän
        katkeransuloinen toivorikkaus.
      </p>
      <p>
        Mäyrälakit on soittanut yhdessä vuodesta 2015 saakka, ja yhtyeen
        ensimmäinen levy ”Tanssi halki tavernan” julkaistiin vuonna 2021.
        Debyyttilevynsä jälkeen yhtye on julkaissut pari singleä, ja nyt
        kymmenvuotista taivaltaan juhlistava yhtye on palannut studioon
        tarkoituksenaan julkaista toinen pitkäsoitto vuoden 2026 aikana.
      </p>
      <div className="jokukuva">joku kuva</div>
      <p>Lisää tekstii Lorem ipsum dolor sit amet ??</p>
      <div>
        Linkit
        <a
          href="https://open.spotify.com/artist/34En99VGBVc5hlfYJXbp27?si=41MmFRSNT1eQHwX8Qscrdg&nd=1&dlsi=064a3fddf86440ff"
          target="_blank"
        >
          spotfiy
        </a>
        <a href="https://www.instagram.com/mayralakit" target="_blank">
          Insta
        </a>
      </div>
    </section>
  );
}
