import HeroSection from "@/app/_components/HeroSection";
import React from "react";

export default function Home() {
  console.log("Activity" in React); // Should log true
  return (
    <main>
      <HeroSection />
    </main>
  );
}
