import "./Navbar.css";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

const Navbar = () => {
  const scrolled = useScrollPosition(0);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrapper">
        <h5>Navigointiiiaaaa</h5>
      </div>
    </nav>
  );
};

export default Navbar;
