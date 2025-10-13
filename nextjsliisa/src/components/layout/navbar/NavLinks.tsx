"use client";

import "./NavLinks.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function NavLinks({ setIsOpen }: NavLinksProps) {
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
    <ul className="nav-links">
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link
            href={link.to}
            className={pathname === link.to ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
