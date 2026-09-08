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
        Olen Helsingissä asuva taiteilija ja teen akryyli- ja öljyvärimaalauksia
        sekä munankuoritaidetta, ohjaan luovan maalauksen työpajoja, ja unelmoin
        isojen koriste- ja seinämaalausten tekemisestä.
      </p>
    </div>
  );
}
