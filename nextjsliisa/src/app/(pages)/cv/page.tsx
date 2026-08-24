import CvSection from "@/components/pages/cv/CvSection";

export default function CV() {
  return (
    <main className="wrapper page-section">
      <h1 className="text-center">CV</h1>
      <CvSection
        title="Taideopinnot"
        sectionItems={[
          {
            year: "2024-2025",
            description:
              "Kuvallisen ilmaisun toteuttaminen, Pekka Halosen Akatemia",
          },
          {
            year: "2021-2023",
            description: "Taiteen perusopinnot, Espoon työväenopisto",
          },
          {
            year: "2020-2023",
            description:
              "Käsityötaiteen perusopinnot, Taito Etelä-Suomi ry, Vantaa",
          },
        ]}
      />
      <CvSection
        title="Kurssit"
        sectionItems={[
          { year: "2025", description: "Koristemaalaus, Keuda Järvenpää" },
          {
            year: "2025",
            description:
              "Taiteellisen kirjoittamisen työpaja, Christina Holmlund",
          },
          {
            year: "2024",
            description: "Shamanistiset kuvat, Espoon työväenopisto",
          },
          {
            year: "2024",
            description:
              "Mielikuvitus taiteilijan työvälineenä, Espoon työväenopisto",
          },
          { year: "2023", description: "Jungilainen taideterapia, Iabet" },
          {
            year: "2021",
            description: "Ekspressiivinen taideterapia, Inartes instituutti",
          },
          {
            year: "2019",
            description:
              "Kädentaidoissa osaaminen ja ohjaaminen, luonnonmateriaalien käyttäminen, Hyria, Hyvinkää",
          },
        ]}
      />
      <CvSection
        title="Työkokemus"
        sectionItems={[
          {
            year: "2025",
            description:
              "Sisustussuunnitelma ja seinämaalaus rentoutumistilaan, Kunto Salus, Järvenpää",
          },
          {
            year: "2025",
            description:
              "Lavastemaalaus Carmen-ooppera, La Fabrique Opera Val de Loire, Orleans, Ranska",
          },
          {
            year: "2024-2025",
            description:
              "Canvas&Cocktails-luovan maalauksen työpajaohjaaja, Hotel AX, Helsinki",
          },
          {
            year: "2019",
            description:
              "Ympäristötaideleiriohjaaja, Lasten ja nuorten puutarhayhdistys ry",
          },
          {
            year: "2019",
            description: "Kasvikäsityöt ja työpajaohjaus, Hyötykasviyhdistys",
          },
          {
            year: "2019",
            description:
              "Luonnonmateriaalit ja perinnetekniikat, Sirinä-Design, Perinnekäsityökeskus Tarvo",
          },
          {
            year: "2018",
            description:
              "Työpajaohjaaja (kierrätysmateriaalit), Ympäristökoulu Polku",
          },
          {
            year: "2018",
            description:
              "Työpajaohjaaja (luonnonmateriaalit), Vihreän Oksan Werstas",
          },
        ]}
      />

      <CvSection
        title="Tulevat näyttelyt"
        sectionItems={[
          { year: "2026 Syyskuu", description: "Delgalleria, Helsinki" },
          {
            year: "2026 Marraskuu",
            description: "Pasilan kirjaston Galleria, Helsinki",
          },
          {
            year: "2026 Joulukuu - Tammikuu 2027",
            description: "Hotel AX, Helsinki",
          },
        ]}
      />
      <CvSection
        title="Yksityisnäyttelyt"
        sectionItems={[
          {
            year: "2026 Heinäkuu",
            description:
              "Luonnonvoimia -Alkusäröistä syntyihin syviin, Bar Vakiopaine, Jyväskylä",
          },
          {
            year: "2026 Huhtikuu",
            description: "Luonnonvoimia, Blossom point, Helsinki",
          },
          {
            year: "2025 Huhtikuu",
            description: "Lohdullisia unia, Käpylän kirjasto, Helsinki",
          },
          {
            year: "2024 Marraskuu",
            description: "O’lentoiset, Yhteisötalo Hanna, Helsinki",
          },
          {
            year: "2023 Helmikuu",
            description:
              "Munankuorimaalauksia, Kääntöpaikan galleriatila, Helsinki",
          },
          {
            year: "2022 Heinäkuu – Tammikuu 2023",
            description: "Hotel AX shop&galleria, Helsinki",
          },
        ]}
      />
      <CvSection
        title="Yhteis- ja ryhmänäyttelyt"
        sectionItems={[
          {
            year: "2024 Helmikuu",
            description: "Helo, La Fiaba, Kauppakeskus Tawast, Jyväskylä",
          },
          {
            year: "2023 Joulukuu",
            description:
              "Mielenkuvia, Espoon työväenopisto, Taiteen perusopetuksen opiskelijat",
          },
          {
            year: "2024 Elokuu",
            description:
              "XR-teos Luova lohikäärme, Loren Ingeniosus Draco, Tuusulan taiteiden yö, Pekka Halosen Akatemia",
          },
        ]}
      />
      <CvSection
        title="Teoskuvat julkaisuissa"
        sectionItems={[
          { year: "2026", description: "EP-Kansikuva yhtyeelle Koti" },
          { year: "2023", description: "EP-Kansikuva artistille Namo" },
        ]}
      />
      <CvSection
        title="Teokset julkisissa tiloissa"
        sectionItems={[
          {
            year: "2025",
            description:
              "Rentoutumishuoneen maalauskokonaisuus, Kunto Salus, Järvenpää",
          },
          {
            year: "2025",
            description:
              "Seinämaalaus Keudan ammattiopiston B-aulassa, Wärtsilänkatu Järvenpää",
          },
        ]}
      />
      <CvSection
        title="Palkinnot ja kunniamaininnat"
        sectionItems={[
          {
            year: "2024",
            description:
              "SAKUstars valtakunnallinen kulttuurikilpailu, kunniamaininta kuvanveisto",
          },
          {
            year: "2024",
            description:
              "SAKUstars valtakunnallinen kulttuurikilpailu, kunniamaininta taidetta kahdessa tunnissa",
          },
        ]}
      />
      <CvSection
        title="Muu taiteellinen toiminta"
        sectionItems={[
          {
            year: "2020 – 2026",
            description:
              "Koreografiat ja esiintyminen, Valosirkus Spektri, led-valotanssiryhmä",
          },
          {
            year: "2018 – 2026",
            description: "Esiintyjä ja muusikko yhtyeessä Mäyrälakit",
          },
          {
            year: "2016 – 2026",
            description:
              "Tapahtumajärjestämistä (pienimuotoiset leffaillat, miekkarit, ruoanjako, taidetempaukset ja keikat) eri puolilla Helsinkiä, Helsingin Sosiaalinen Oikeudenmukaisuus ry",
          },
        ]}
      />
    </main>
  );
}
