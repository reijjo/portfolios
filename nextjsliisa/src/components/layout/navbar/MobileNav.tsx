import "./MobileNav.css";
import { Menu, X } from "lucide-react";

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
      {isOpen ? <X /> : <Menu />}
    </button>
  );
}
