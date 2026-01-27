import "./Esitys.css";

type SpektriProps = {
  active: boolean;
};

export default function Spektri({ active }: SpektriProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <h2>Valosirkus Spektri</h2>
    </section>
  );
}
