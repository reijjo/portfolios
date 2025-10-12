"use client";

import { usePathname } from "next/navigation";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { to: "/", label: "Etusivu" },
    { to: "/taide", label: "Taide" },
    { to: "/tyopajat", label: "Työpajat" },
    { to: "/esitykset", label: "Esitykset" },
    { to: "/bio", label: "Bio & CV" },
    { to: "/yhteystiedot", label: "Yhteystiedot" },
  ];
  return (
    <nav className="wrapper">
      <Link href="/">
        <h2>Luisa Lore</h2>
      </Link>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              href={link.to}
              className={pathname === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
