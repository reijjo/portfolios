import "./Navbar.css";
import { NavLinks } from "./NavLinks";

interface NavlinksProps {
  closeMenu: () => void;
}

const DesktopNav = ({ closeMenu }: NavlinksProps) => {
  return <NavLinks closeMenu={closeMenu} />;
};

export default DesktopNav;
