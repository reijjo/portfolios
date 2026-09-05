import { useEffect, useRef, useState } from "react";
import NavLinks from "../NavLinks";
import "./DesktopNav.css";

type DesktopNavProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function DesktopNav({ setIsOpen }: DesktopNavProps) {
  const markerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    setIsSticky(marker.getBoundingClientRect().bottom <= 0);
    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(marker);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={markerRef} className="desktop-nav-marker" aria-hidden="true" />
      <nav className={`desktop-navbar${isSticky ? " is-sticky" : ""}`}>
        <div className="nav-content">
          <div className="nav-wrapper wrapper">
            <div className="desktop-nav">
              <NavLinks setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
