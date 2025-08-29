import "./NavLinks.css";
import { NavLink } from "react-router-dom";

interface NavlinksProps {
  closeMenu: () => void;
}

export const NavLinks = ({ closeMenu }: NavlinksProps) => {
  const navLinks = [
    {
      to: "/",
      label: "Etusivu",
    },
    {
      to: "/taide",
      label: "Taide",
    },
    {
      to: "/tyopajat",
      label: "Työpajat",
    },
    {
      to: "/esitykset",
      label: "Esitykset",
    },
    {
      to: "/bio",
      label: "BIO & CV",
    },
    {
      to: "/yhteystiedot",
      label: "Yhteystiedot",
    },
  ];

  return (
    <div className="nav-links">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          <h5>{link.label}</h5>
        </NavLink>
      ))}
    </div>
  );
};
