"use client";

import Image from "next/image";
import "./ImageWithCredits.css";
import { Info } from "lucide-react";

import { useId } from "react";

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
  const popoverId = useId();

  return (
    <div className="image-with-credits">
      <div className="image-wrapper">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ width: "100%", height: "auto" }}
        />
        <button
          type="button"
          aria-label="Näytä kuvaaja"
          popoverTarget={popoverId}
          popoverTargetAction="show"
          className="show-kuvaaja"
        >
          <Info size={16} />
        </button>
      </div>
      <p popover="auto" id={popoverId} className="image-credits">
        Kuva: {credits}
      </p>
    </div>
  );
}
