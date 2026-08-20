import "./Sitaatti.css";

type SitaattiProps = {
  text: string;
};

export default function Sitaatti({ text }: SitaattiProps) {
  return <p className="sitaatti">{text}</p>;
}
