import "./Esitys.css";

type MayralakitProps = {
  active: boolean;
};

export default function Mayralakit({ active }: MayralakitProps) {
  return (
    <section className={`${active ? "esitys-section" : "hide-section"}`}>
      <h2>Mäyrälakit</h2>
      MÄYRÄÄÄLAKKIIITAAAAA
    </section>
  );
}
