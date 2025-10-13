"use client";

import "./Navbar.css";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpoint(900);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <nav>
        <div className="nav-wrapper wrapper">
          <Link href="/">
            <h2>Luisa Lore</h2>
          </Link>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="desktop-nav">
            <NavLinks setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav-menu ${isOpen ? "mobile-nav-menu-open" : ""}`}
      >
        <NavLinks setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
