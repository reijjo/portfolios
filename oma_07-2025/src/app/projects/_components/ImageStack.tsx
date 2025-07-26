import { useState } from "react";
import Image from "next/image";

interface ImageStackProps {
  images: string[];
}

const ImageStack = ({ images }: ImageStackProps) => {
  const [stack, setStack] = useState(images);

  const rotateStack = () => {
    const updated = [...stack];
    const first = updated.shift();
    if (first) updated.push(first);
    setStack(updated);
  };

  return (
    <div className="image-stack" onClick={rotateStack}>
      {stack.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="stacked-image"
          style={{
            zIndex: stack.length - i,
            transform: `rotate(${i * 3}deg) translate(${i * 8}px, ${i * 6}px)`,
          }}
        >
          <Image
            src={src}
            alt={`screenshot ${i + 1}`}
            width={360}
            height={180}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;
