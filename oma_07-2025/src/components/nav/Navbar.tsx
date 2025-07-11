"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav id="home" className={isHomePage ? "" : "nav-bg"}>
      <div className="nav-content">
        <div className="nav-links-wrapper">
          <Link
            href="/"
            className={pathname === "/" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">Home</span>
            <span className="nav-line hover">Home</span>
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">About</span>
            <span className="nav-line hover">About</span>
          </Link>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "nav-active" : "nav-link"}
          >
            <span className="nav-line default">Projects</span>
            <span className="nav-line hover">Projects</span>
          </Link>
          <button className="nav-link">
            <span className="nav-line default">Contact</span>
            <span className="nav-line hover">Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
