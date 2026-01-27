import MobileNav from "./navbars/MobileNav";
import "./Header.css";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header>
      <div className="header-wrapper wrapper">
        <h1>Luisa Lore</h1>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
