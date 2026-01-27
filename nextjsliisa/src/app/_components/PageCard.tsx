import Link from "next/link";
import "./PageCard.css";
import Image from "next/image";

type PageCardProps = {
  link: string;
  title: string;
  description: string;
  imageSrc: string;
};

export default function PageCard({
  link,
  title,
  description,
  imageSrc,
}: PageCardProps) {
  return (
    <Link href={link} className="page-card">
      <div className="image-overlay" />
      <div className="page-card-img">
        <Image src={imageSrc} alt="title" fill sizes="50vw" />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
