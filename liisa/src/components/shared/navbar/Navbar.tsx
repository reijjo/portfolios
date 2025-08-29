import "./Navbar.css";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import DesktopNav from "./DesktopNav";
import { NavLink } from "react-router-dom";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";
import { useMobileMenu } from "../../../hooks/useMobileMenu";

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  const scrolled = useScrollPosition(0);
  const isMobile = useBreakpoint(900);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="wrapper nav-wrapper">
          <div className="nav-logo">
            <NavLink to="/">
              <h4>Luisa Lore</h4>
            </NavLink>
          </div>
          {isMobile ? (
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
          ) : (
            <DesktopNav closeMenu={closeMenu} />
          )}
        </div>
      </nav>
      <div
        className={`mobile-nav-menu ${isOpen ? "mobile-nav-menu-open" : ""}`}
      >
        <NavLinks closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default Navbar;
