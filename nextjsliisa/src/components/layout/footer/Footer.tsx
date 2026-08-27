import "./Footer.css";
import SomeLink from "@/components/ui/SomeLink";
import Image from "next/image";

// const navLinks = [
//   { to: "/", label: "Etusivu" },
//   { to: "/taide", label: "Taide" },
//   { to: "/tyopajat", label: "Työpajat" },
//   { to: "/esitykset", label: "Esitykset" },
//   { to: "/bio", label: "Bio & CV" },
// ];

export default function Footer() {
  return (
    <footer>
      <div className="wrapper footer-wrapper">
        <div className="footer-links">
          {/* <div className="link-section">
            <ul>
              {navLinks.map((link) => (
                <li className="link-section-item" key={link.to}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="yhteystiedot" id="yhteystiedot">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Luisa Lore
            </p>
            <div className="contact-links">
              <SomeLink
                href="https://www.instagram.com/luisa.loreart/"
                text="luisa.loreart"
                iconSrc="/icons/ig.svg"
                iconAlt="ig logo"
              />
              <p className="link-divider">|</p>
              <SomeLink
                href="https://www.facebook.com/luisa.lore111"
                text="Luisa Lore"
                iconSrc="/icons/fb.svg"
                iconAlt="fb logo"
              />
              <p className="link-divider">|</p>

              <a className="footer-email">
                <Image
                  src="/icons/mail.svg"
                  alt="email logo"
                  width={20}
                  height={20}
                />
                <p>repo.liisa@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
