import Image from "next/image";
import "./ImageWrapper.css";

type ImageWrapperProps = {
  src: string;
  alt: string;
  fetchPriority?: "high" | "low" | "auto";
  extraClassName?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

export default function ImageWrapper({
  src,
  alt,
  fetchPriority = "low",
  extraClassName = "",
}: ImageWrapperProps) {
  return (
    <div className="image-wrapper">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="(max-width: 768px) 100vw, 50vw"
        fetchPriority={fetchPriority}
        className={`image-wrapper-img ${extraClassName}`}
      />
    </div>
  );
}
