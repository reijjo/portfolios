"use client";

import { useState } from "react";
import Spektri from "./_components/Spektri";
import Mayralakit from "./_components/Mayralakit";
import TabMenu from "./_components/TabMenu";

export default function Esitykset() {
  const [spektri, setSpektri] = useState(true);

  return (
    <main className="wrapper">
      <TabMenu active={spektri} setActive={setSpektri} />
      {spektri ? (
        <Spektri active={spektri} />
      ) : (
        <Mayralakit active={!spektri} />
      )}
    </main>
  );
}
