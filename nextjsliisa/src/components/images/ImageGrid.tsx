import "./ImageGrid.css";

type ImageGridProps = {
  children: React.ReactNode;
  isPainting?: boolean;
};

export default function ImageGrid({
  children,
  isPainting = false,
}: ImageGridProps) {
  return (
    <div className={`image-grid ${isPainting ? "painting-grid" : ""}`}>
      {children}
    </div>
  );
}
