import Image from "next/image";
import "./ImageWithCredits.css";
import { Info } from "lucide-react";

type ImageWithCreditsProps = {
  src: string;
  alt: string;
  credits: string;
};

export default function ImageWithCredits({
  src,
  alt,
  credits,
}: ImageWithCreditsProps) {
  return (
    <div className="image-with-credits">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
      <button
        popoverTarget="kuvaaja"
        popoverTargetAction="show"
        className="show-kuvaaja"
      >
        <Info size={16} />
      </button>
      <p popover="auto" id="kuvaaja" className="image-credits">
        Kuva: {credits}
      </p>
    </div>
  );
}
