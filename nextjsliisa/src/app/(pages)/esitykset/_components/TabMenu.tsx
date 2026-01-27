import "./TabMenu.css";

type TabMenuProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export default function TabMenu({ active, setActive }: TabMenuProps) {
  return (
    <div className="tab-menu">
      <div className={`esitys-btn ${active ? "" : "inactive-esitys"}`}>
        <button onClick={() => setActive(!active)}>
          <h3>Valosirkus Spektri</h3>
        </button>
      </div>
      <div className={`esitys-btn ${active ? "inactive-esitys" : ""}`}>
        <button onClick={() => setActive(!active)}>
          <h3>Mäyrälakit</h3>
        </button>
      </div>
    </div>
  );
}
