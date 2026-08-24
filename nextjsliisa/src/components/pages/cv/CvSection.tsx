import "./CvSection.css";

type SectionItem = {
  year?: string;
  description: string;
};

type CvSectionProps = {
  title: string;
  sectionItems: SectionItem[];
};

export default function CvSection({ title, sectionItems }: CvSectionProps) {
  return (
    <div className="cv-section">
      <h2>{title}</h2>
      <div className="cv-section-items-wrapper">
        {sectionItems.map((item, index) => (
          <div className="cv-section-item" key={index}>
            <span className="cv-year">{item.year}</span>
            <span className="cv-description">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
