import ImageWrapper from "@/components/images/ImageWrapper";
import Image from "next/image";

export default function Tyopajat() {
  return (
    <main className="wrapper">
      <div className="page-section">
        <div className="page-header">
          <div className="double-header">
            <h1>Canvas & Cocktails</h1>
            <h2>luovan maalauksen työpaja</h2>
          </div>
          <div className="page-links">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/ig.svg" alt="AX IG" width={16} height={16} />
              <p>axin instagram sitten joo</p>
            </a>
          </div>
        </div>
        <ImageWrapper src="/images/tyopaja/studiostyle.jpeg" alt="studio" />
        <div className="text-container">
          <p className="bigger-font">
            Järjestämme yhteistyössä Taidehotelli AX:in kanssa Canvas &
            Cocktails-taideiltoja AX:in tiloissa Jätkäsaaressa Helsingissä.
            Työpajat ovat kaikille avoimia ohjelmallisia luovan maalauksen
            työpajoja, jotka olen suunnitellut ja joiden ohjaajana toimin itse.
          </p>
        </div>
        <div className="text-container">
          <p className="bigger-font">
            Työpaja koostuu kolmesta alkuharjoituksesta, joilla lämmitellään
            varsinaista maalausta varten. Harjoituksissa herätellään aisteja ja
            sivellintä, sekä tehdään sattumanvaraisia teoksia. Tarkoituksena on
            auttaa osallistujia löytämään uusia maalaustapoja ja vahvistaa omaa
            tyyliä ja ilmaisua sekä nauttia vapautuneesta tekemisestä.
          </p>
        </div>
        <div className="image-grid">
          <ImageWrapper src="/images/tyopaja/pari.jpeg" alt="pari" />
          <ImageWrapper src="/images/tyopaja/niina.jpeg" alt="action" />
        </div>
        <div className="text-container">
          <p className="bigger-font">
            Ohjaan osallistua maalauksen alkuun eikä aiempaa kokemusta tarvita.
            Yhdessä Etsimme voimme myös etsiä keinoja maalauksen toteuttamiseen.
            Lopullinen maalaus on esittävä tai absrakti taideteos, joka on
            toteutettu vapaasti tai kuva-aiheen pohjalta ja sen saa mukaan
            kotiin.
          </p>
        </div>
        <div className="sitaatti">
          Osallistuaksesi työpajaan tarvitset vain uskallusta heittäytyä uuden
          äärelle! Illan tavoitteena on nauttia luovuudesta ja tehdä teos, joka
          on juuri sinun näköisesi – eli mestariteos!
        </div>

        <ul>
          <li>Työpajan kesto: 2,5 tuntia</li>
          <li>
            Sijainti: AXravintola, Hotel AX, Välimerenkatu 18, Jätkäsaari,
            Helsinki
          </li>
          <li>Hinta: 65 eur</li>
          <li>
            Sis. ohjauksen, Canvas-taulupohjan 50 x 60 cm, tarvittavat
            akryylimaalit, ja maalausvälineet, Cocktail-juomat sekä alv 24%.
          </li>
          <li>Lisätietoja: liisa.repo@hotel.ax</li>
        </ul>
        <div className="image-grid">
          <ImageWrapper src="/images/tyopaja/lahi.jpeg" alt="lähikuva" />
          <ImageWrapper src="/images/tyopaja/kadet.jpeg" alt="sotkukädet" />
        </div>
      </div>
    </main>
  );
}
