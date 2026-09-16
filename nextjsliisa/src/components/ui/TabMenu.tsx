import "./TabMenu.css";

type TabMenuProps = {
  active: boolean;
  setActive: (active: boolean) => void;
  page1: string;
  page2: string;
};

export default function TabMenu({
  active,
  setActive,
  page1,
  page2,
}: TabMenuProps) {
  return (
    <div className="tab-menu">
      <div className={`esitys-btn ${active ? "" : "inactive-esitys"}`}>
        <button onClick={() => setActive(!active)}>
          <h3>{page1}</h3>
        </button>
      </div>
      <div className={`esitys-btn ${active ? "inactive-esitys" : ""}`}>
        <button onClick={() => setActive(!active)}>
          <h3>{page2}</h3>
        </button>
      </div>
    </div>
  );
}
