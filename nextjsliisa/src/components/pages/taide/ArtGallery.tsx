"use client";

import "./ArtGallery.css";
import { images } from "@/lib/imageList";
import Image from "next/image";
import ImageWithCaption from "@/components/images/ImageWithCaption";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function ArtGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null
            ? null
            : (currentIndex - 1 + images.length) % images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null ? null : (currentIndex + 1) % images.length,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  return (
    <>
      <section className="art-gallery">
        {images.map((image, index) => (
          <ImageWithCaption
            key={image.src}
            src={image.src}
            alt={image.alt}
            title={image.title}
            koko={image.koko}
            tekniikka={image.tekniikka}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            onImageClick={() => setSelectedIndex(index)}
          />
        ))}
      </section>

      {selectedImage && selectedIndex !== null && (
        <div
          className="art-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} enlarged view`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close enlarged artwork"
          >
            <X color="white" size={20} />
          </button>
          <button
            type="button"
            className="lightbox-navigation lightbox-previous"
            onClick={() =>
              setSelectedIndex(
                (selectedIndex - 1 + images.length) % images.length,
              )
            }
            aria-label="Previous artwork"
          >
            <ChevronLeft color="white" size={20} />
          </button>

          <figure className="lightbox-content">
            <div className="lightbox-image-wrapper">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1600}
                height={1200}
                sizes="(max-width: 700px) 90vw, 80vw"
                priority
              />
            </div>
            <figcaption>
              <h2>{selectedImage.title}</h2>
              {selectedImage.koko && <p>{selectedImage.koko}</p>}
              {selectedImage.tekniikka && <p>{selectedImage.tekniikka}</p>}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-navigation lightbox-next"
            onClick={() =>
              setSelectedIndex((selectedIndex + 1) % images.length)
            }
            aria-label="Next artwork"
          >
            <ChevronRight color="white" size={20} />
          </button>
        </div>
      )}
    </>
  );
}
