"use client";

import { Activity, useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import DesktopNav from "./DesktopNav";
import Header from "./Header";

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
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Activity mode={isMobile ? "hidden" : "visible"}>
        <DesktopNav setIsOpen={setIsOpen} />
      </Activity>
    </>
  );
}
