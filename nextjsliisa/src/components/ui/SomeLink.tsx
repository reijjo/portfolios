import "./Somelink.css";
import Image from "next/image";

type SomeLinkProps = {
  href: string;
  text: string;
  iconSrc: string;
  iconAlt: string;
};

export default function SomeLink({
  href,
  text,
  iconSrc,
  iconAlt,
}: SomeLinkProps) {
  return (
    <a
      className="some-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={iconAlt}
    >
      <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
      <p>{text}</p>
    </a>
  );
}
