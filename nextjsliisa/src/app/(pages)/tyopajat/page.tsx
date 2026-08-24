import ImageGrid from "@/components/images/ImageGrid";
import ImageWrapper from "@/components/images/ImageWrapper";
import List from "@/components/ui/List";
import PageHeader from "@/components/ui/PageHeader";
import Sitaatti from "@/components/ui/Sitaatti";

const listItems = [
  "Työpajan kesto: 2,5 tuntia",
  "Sijainti: AXravintola, Hotel AX, Välimerenkatu 18, Jätkäsaari, Helsinki",
  "Hinta: 65 eur",
  "Sis. ohjauksen, Canvas-taulupohjan 50 x 60 cm, tarvittavat akryylimaalit, ja maalausvälineet, Cocktail-juoman sekä alv 24%.",
  "Lisätietoja: liisa.repo@hotel.ax",
];

export default function Tyopajat() {
  return (
    <main className="wrapper">
      <div className="page-section">
        <PageHeader
          mainTitle="Canvas & Cocktails"
          subTitle="luovan maalauksen työpaja"
          pageLinks={[
            {
              href: "https://www.instagram.com/hotel.ax/",
              text: "hotel.ax",
              iconSrc: "/icons/ig.svg",
              iconAlt: "AX IG",
            },
          ]}
        />
        <ImageWrapper
          src="/images/tyopaja/studiostyle.webp"
          alt="studio"
          fetchPriority="high"
        />
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
        <ImageGrid>
          <ImageWrapper src="/images/tyopaja/pari.webp" alt="pari" />
          <ImageWrapper src="/images/tyopaja/niina.webp" alt="action" />
        </ImageGrid>
        <div className="text-container">
          <p className="bigger-font">
            Ohjaan osallistua maalauksen alkuun eikä aiempaa kokemusta tarvita.
            Yhdessä Etsimme voimme myös etsiä keinoja maalauksen toteuttamiseen.
            Lopullinen maalaus on esittävä tai absrakti taideteos, joka on
            toteutettu vapaasti tai kuva-aiheen pohjalta ja sen saa mukaan
            kotiin.
          </p>
        </div>
        <Sitaatti
          text="Osallistuaksesi työpajaan tarvitset vain uskallusta heittäytyä uuden
          äärelle! Illan tavoitteena on nauttia luovuudesta ja tehdä teos, joka
          on juuri sinun näköisesi – eli mestariteos!"
        />
        <List items={listItems} />

        <div className="image-grid">
          <ImageWrapper src="/images/tyopaja/lahi.webp" alt="lähikuva" />
          <ImageWrapper src="/images/tyopaja/kadet.webp" alt="sotkukädet" />
        </div>
      </div>
    </main>
  );
}
