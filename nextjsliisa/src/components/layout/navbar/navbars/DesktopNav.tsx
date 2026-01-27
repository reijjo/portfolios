import NavLinks from "../NavLinks";
import "./DesktopNav.css";

type DesktopNavProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function DesktopNav({ setIsOpen }: DesktopNavProps) {
  return (
    <nav>
      <div className="nav-wrapper wrapper">
        <div className="desktop-nav">
          <NavLinks setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
}
