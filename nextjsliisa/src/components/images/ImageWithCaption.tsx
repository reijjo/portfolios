import Image from "next/image";
import "./ImageWithCaption.css";

type ImageWithCaptionProps = {
  src: string;
  alt: string;
  title: string;
  koko?: string;
  tekniikka?: string;
  width?: number;
  height?: number;
  fetchPriority?: "high" | "low" | "auto";
};

export default function ImageWithCaption({
  src,
  alt,
  title,
  koko = "1200 x 800",
  tekniikka = "akryyli ja munankuoret jne",
  width = 1200,
  height = 800,
  fetchPriority,
}: ImageWithCaptionProps) {
  return (
    <figure className="image-with-caption">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 400px) 100vw, 400px"
        fetchPriority={fetchPriority}
      />

      <figcaption className="caption">
        <div className="caption-text">
          <h2>{title}</h2>
          <p className="koko">{koko}</p>
        </div>
        <p className="tekniikka">{tekniikka}</p>
      </figcaption>
    </figure>
  );
}
