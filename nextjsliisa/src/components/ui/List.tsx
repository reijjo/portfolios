import "./List.css";

type ListProps = {
  items: string[];
};

export default function List({ items }: ListProps) {
  return (
    <ul className="basic-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
