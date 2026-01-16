"use client";

import "./Navbar.css";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Activity, useEffect, useState } from "react";
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
      <header>
        <div className="header-wrapper wrapper">
          <h1>Luisa Lore</h1>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
      <Activity mode={isMobile ? "hidden" : "visible"}>
        <nav>
          <div className="nav-wrapper wrapper">
            <div className="desktop-nav">
              <NavLinks setIsOpen={setIsOpen} />
            </div>
          </div>
        </nav>
      </Activity>
      <div
        className={`mobile-nav-menu ${isOpen ? "mobile-nav-menu-open" : ""}`}
      >
        <NavLinks setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
