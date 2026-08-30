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
  loading?: "eager" | "lazy" | undefined;
  onImageClick?: () => void;
};

export default function ImageWithCaption({
  src,
  alt,
  title,
  koko,
  tekniikka = "akryyli ja munankuoret jne asdsad asd sad asd sadsadas dasd dsadsadasddsa",
  width = 1200,
  height = 800,
  fetchPriority,
  loading = undefined,
  onImageClick,
}: ImageWithCaptionProps) {
  return (
    <figure className="image-with-caption">
      {onImageClick ? (
        <button
          type="button"
          className="image-button"
          onClick={onImageClick}
          aria-label={`Enlarge ${title}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 400px) 100vw, 400px"
            fetchPriority={fetchPriority}
            loading={loading}
          />
        </button>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 400px) 100vw, 400px"
          fetchPriority={fetchPriority}
        />
      )}

      <figcaption className="caption">
        <div className="caption-text">
          <h2>{title}</h2>
          {koko && <p className="koko">{koko}</p>}
        </div>
        <p className="tekniikka">{tekniikka}</p>
      </figcaption>
    </figure>
  );
}
