import Image from "next/image";
import "./ImageWrapper.css";

type ImageWrapperProps = {
  src: string;
  alt: string;
};

export default function ImageWrapper({ src, alt }: ImageWrapperProps) {
  return (
    <div className="image-wrapper">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
