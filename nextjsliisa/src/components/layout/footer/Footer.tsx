import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <p>&copy; {new Date().getFullYear()} Luisa Lore</p>
      </div>
    </footer>
  );
}
