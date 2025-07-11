import Link from "next/link";
import Image from "next/image";
import "./ProjectInfo.css";

interface ProjectInfoProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
}

const ProjectInfo = ({
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectInfoProps) => {
  return (
    <>
      <div className="tarpit-intro">
        <div className="tarpit-intro-text">
          <div className="tarpit-what">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="tarpit-tech">
            {techStack.map((tech) => (
              <div key={tech} className="tarpit-tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="tarpit-images">
          <Link href="/projects" className="tarpit-image-container">
            <div className="project-image">
              <Image
                className="project-pic"
                src={image}
                alt={imageAlt}
                title={imageAlt}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                priority
                fill
              />
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="projects-divider"></div> */}
    </>
  );
};

export default ProjectInfo;
