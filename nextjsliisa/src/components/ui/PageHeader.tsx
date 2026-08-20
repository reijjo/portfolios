import "./PageHeader.css";
import Image from "next/image";

type PageHeaderProps = {
  mainTitle: string;
  subTitle?: string;
  pageLinks?: {
    href: string;
    text: string;
    iconSrc: string;
    iconAlt: string;
  }[];
};

export default function PageHeader({
  mainTitle,
  subTitle,
  pageLinks,
}: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="double-header">
        <h1>{mainTitle}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div className="page-links">
        {pageLinks?.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={link.iconAlt}
          >
            <Image
              src={link.iconSrc}
              alt={link.iconAlt}
              width={16}
              height={16}
            />
            <p>{link.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
