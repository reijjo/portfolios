import "./WhoAmI.css";
import ImageWrapper from "@/components/images/ImageWrapper";

export default function WhoAmI() {
  return (
    <div className="who-am-i">
      <ImageWrapper
        src="/images/bio/signeeraus.webp"
        alt="Signeeraus"
        loading="eager"
        fetchPriority="high"
      />
      <p className="bigger-font">
        Olen Helsingissä asuva ja työskentelevä taiteilija. Kuvataiteesta on
        muodostunut viime vuosina ilmaisuni pääväylä. Teen akryyli- ja
        öljyvärimaalauksia sekä munankuoritaidetta, ohjaan tilauksesta luovan
        maalauksen työpajoja, ja unelmoin isojen koriste- ja seinämaalausten
        tekemisestä. Kokeilullinen tekeminen ja luovat metodit ovat tekemiseni
        ytimessä.
      </p>
    </div>
  );
}
