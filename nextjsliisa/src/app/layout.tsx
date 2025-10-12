import "./globals.css";
import "./layout.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Luisa Lore",
  description: "Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
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
