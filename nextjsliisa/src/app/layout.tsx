import "./globals.css";
import "./layout.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { Open_Sans, Libre_Baskerville, Lavishly_Yours } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
const baskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});
const lavish = Lavishly_Yours({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lavish",
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
    <html
      lang="en"
      className={`${sans.variable} ${baskerville.variable} ${lavish.variable}`}
    >
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
