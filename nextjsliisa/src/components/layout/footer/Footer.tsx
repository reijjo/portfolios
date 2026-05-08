import Link from "next/link";
import "./Footer.css";

const navLinks = [
  { to: "/", label: "Etusivu" },
  { to: "/taide", label: "Taide" },
  { to: "/tyopajat", label: "Työpajat" },
  { to: "/esitykset", label: "Esitykset" },
  { to: "/bio", label: "Bio & CV" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrapper footer-wrapper">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Luisa Lore.
        </p>

        <div className="footer-links">
          {/* <div className="link-section">
            <h4>Linkit</h4>
            <ul>
              {navLinks.map((link) => (
                <li className="link-section-item" key={link.to}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="yhteystiedot" id="yhteystiedot">
            <h4>Yhteystiedot</h4>
            <p>ig</p>
            <p>facebook</p>
            <p>email@email.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
