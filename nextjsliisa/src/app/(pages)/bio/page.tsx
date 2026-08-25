import ImageGrid from "@/components/images/ImageGrid";
import ImageWrapper from "@/components/images/ImageWrapper";
import WhoAmI from "@/components/pages/bio/WhoAmI";

export default function Bio() {
  return (
    <main className="wrapper bio-page">
      <h1 className="text-center">KUKA?</h1>
      <WhoAmI />
      <p className="bigger-font">
        {" "}
        Taitelijana arvostan taiteessa kansanomaisuutta ja uskon taiteen
        herkullisimman ytimen löytyvänkin juuri tunneilmaisussa. Näin uskon
        taiteen voivan kommunikoida vapaammin ohi älyllisyyden ja
        rationaalisuuden kahleiden.
      </p>{" "}
      <p className="bigger-font">
        {" "}
        Teosteni aiheet liikkuvat taian ja sadun rajamailla, ne ovat
        mielikuvituksen ja alitajunnan antimia, olentoja ja ornamentteja, joiden
        värimaailma on kuin karkkia. Ne kutsuvat katselijansa tanssin
        pyörteisiin ja hulluttelemaan, joskus synkkienkin asioiden äärelle.
      </p>{" "}
      <ImageGrid>
        <ImageWrapper
          src="/images/bio/pataliisa.webp"
          alt="Pataässä"
          extraClassName="ratio-9-16"
        />
        <ImageWrapper
          src="/images/bio/kypara.webp"
          alt="mina2"
          extraClassName="ratio-9-16"
        />
      </ImageGrid>
      <p className="bigger-font">
        Merkityksellisiä alkusysäyksiä kuvien maailmaan ovat tuoneet henkiset ja
        hengelliset haasteet, taideterapia, kirjojen maailmat ja luonto.
        Kuvallisia valmiuksiani olen vahvistanut opiskelemalla taiteen ja
        käsityötaiteen perusopintoja, koristemaalausta ja kuvallista ilmaisua
        Pekka Halosen Akatemiassa.
      </p>{" "}
      <p className="bigger-font">
        Olen syntynyt Reisjärven pappilaan isoon perheeseen ja asunut eri
        puolilla suomea sekä ulkomailla mm. Moskovassa ja Detroitissa.
      </p>
      {/* <div className="image-grid bio-image-grid">
        <div className="placeholder">reisjärvi</div>
        <div className="placeholder">moskova</div>
        <div className="placeholder">detroit</div>
      </div> */}
    </main>
  );
}
