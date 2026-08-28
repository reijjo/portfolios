import "./WhoAmI.css";
import ImageWrapper from "@/components/images/ImageWrapper";

export default function WhoAmI() {
  return (
    <div className="who-am-i">
      <ImageWrapper src="/images/taide/ooppera/ooppera2.webp" alt="Ooppera" />
      {/* <p className="bigger-font">
        Olen Luisa Lore, Helsingissä asuva ja työskentelevä taiteilija.
        Inspiroidun luovasta ilmaisusta ja mielen mystiikasta sekä
        koristemaalausten estetiikasta ja haastan itseäni isoilla
        seinämaalauksilla!{" "}
      </p>{" "} */}
      <p className="bigger-font">
        Olen Helsingissä asuva taiteilija ja teen munankuoritaidetta, ohjaan
        luovan maalauksen työpajoja, suunnittelen lastenkirjaa, ja unelmoin
        isojen koriste- ja seinämaalausten tekemisestä.
      </p>
      <p className="bigger-font">
        Teosten aiheet ammentavat alitajunnasta, ja liikkuvat taian ja sadun
        rajamailla. Ne ovat mielikuvituksen antimia, tunnepurkauksia,
        ornamentteja ja olentoja, joiden värimaailma on kuin karkkia. Teokset
        kutsuvat kohtaamansa ihmiset tanssinpyörteisiin ja hulluttelemaan,
        joskus synkkienkin asioiden äärelle. Tarkoituksena on etsiä yhteyksiä ja
        samankaltaisuutta, jonkinlaista keskiviivaa ja pehmeää ydintä älyllisen
        erottelun sijaan. Viime aikoina taiteilijalle merkityksellisintä on
        ollut seinämaalaus-projektit sekä koristemaalaustekniikoiden opiskelu.
      </p>
    </div>
  );
}
