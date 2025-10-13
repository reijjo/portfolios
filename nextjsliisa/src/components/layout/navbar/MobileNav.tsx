import "./MobileNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <button
      className="mobile-nav-button"
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Sulje valikko" : "Avaa valikko"}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-menu"
    >
      <FontAwesomeIcon icon={isOpen ? faX : faBars} size="lg" />
    </button>
  );
}
