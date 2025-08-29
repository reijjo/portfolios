import "./MobileNav.css";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileNav = ({ isOpen, toggleMenu }: MobileNavProps) => {
  return (
    <button className="mobile-nav-button" onClick={toggleMenu}>
      <FontAwesomeIcon
        icon={isOpen ? faClose : faBars}
        size="lg"
        className="mobile-nav-icon"
      />
    </button>
  );
};
