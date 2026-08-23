import "./WhoAmI.css";
import ImageWrapper from "@/components/images/ImageWrapper";

export default function WhoAmI() {
  return (
    <div className="who-am-i">
      <ImageWrapper src="/images/bio/mina.webp" alt="Omakuva" />
      <p className="bigger-font text-center">
        Olen Luisa Lore, Helsingissä asuva ja työskentelevä taiteilija.
        Inspiroidun luovasta ilmaisusta ja mielen mystiikasta sekä
        koristemaalausten estetiikasta ja haastan itseäni isoilla
        seinämaalauksilla!{" "}
      </p>{" "}
    </div>
  );
}
