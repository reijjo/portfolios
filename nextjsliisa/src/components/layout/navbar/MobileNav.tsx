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
    >
      <FontAwesomeIcon icon={isOpen ? faX : faBars} size="lg" />
    </button>
  );
}
