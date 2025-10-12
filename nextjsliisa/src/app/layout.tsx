import "./globals.css";
import "./layout.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Luisa Lore",
  description: "Artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
