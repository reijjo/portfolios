import "./WhoAmI.css";
import ImageWrapper from "@/components/images/ImageWrapper";

export default function WhoAmI() {
  return (
    <div className="who-am-i">
      <ImageWrapper
        src="/images/taide/ooppera/ooppera2.webp"
        alt="Ooppera"
        loading="eager"
        fetchPriority="high"
      />
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
    </div>
  );
}
