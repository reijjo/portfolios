import "./ImageGrid.css";

type ImageGridProps = {
  children: React.ReactNode;
};

export default function ImageGrid({ children }: ImageGridProps) {
  return <div className="image-grid">{children}</div>;
}
