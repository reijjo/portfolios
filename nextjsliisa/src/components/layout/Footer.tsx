import "./Footer.css";

export default function Footer() {
  return (
    <footer className="wrapper">
      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
