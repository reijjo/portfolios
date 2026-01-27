import "./PagePreview.css";
import PageCard from "./PageCard";

const homepageCards = [
  {
    link: "/taide",
    title: "Taide",
    description: "Tutustu taideprojekteihini ja näyttelyihini.",
    imageSrc: "/images/landing/Liisa-5-4.jpg",
  },
  {
    link: "/tyopajat",
    title: "Työpajat",
    description: "Tutustu taideprojekteihini ja näyttelyihini.",
    imageSrc: "/images/landing/Liisa-5-4.jpg",
  },
  {
    link: "/esitykset",
    title: "Esitykset",
    description: "Tutustu taideprojekteihini ja näyttelyihini.",
    imageSrc: "/images/landing/Liisa-5-4.jpg",
  },
  {
    link: "/bio",
    title: "bio & cv",
    description: "Tutustu taideprojekteihini ja näyttelyihini.",
    imageSrc: "/images/landing/Liisa-5-4.jpg",
  },
  {
    link: "/yhteystiedot",
    title: "Yhteystiedot",
    description: "Tutustu taideprojekteihini ja näyttelyihini.",
    imageSrc: "/images/landing/Liisa-5-4.jpg",
  },
];

export default function PagePreview({}) {
  return (
    <div className="page-preview wrapper">
      {homepageCards.map((card) => (
        <PageCard
          key={card.link}
          link={card.link}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}
