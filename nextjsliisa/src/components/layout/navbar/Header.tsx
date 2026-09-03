import MobileNav from "./navbars/MobileNav";
import "./Header.css";
import Link from "next/link";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header>
      <div className="header-wrapper wrapper">
        <Link href="/">
          <h1>Luisa Lore</h1>
        </Link>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
