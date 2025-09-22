import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer-content">
        <p className="footer-copy">&copy; 2025 Liisa Repo</p>
        <div className="footer-contact">
          <p className="footer-email">repo.liisa@gmail.com</p>
          <a
            href="https://instagram.com/luisa.loreart"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo"
          >
            <FontAwesomeIcon icon={faInstagram as IconProp} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
