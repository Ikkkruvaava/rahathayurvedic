import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Rahath Ayurvedic | Traditional Raw Herbal Medicines in Mannarkkad",
  description: "Parambaragatha reethiyil thayyarakkunna pacha marunnukal & Ayurvedic formulations in Hospital Junction, Mannarkkad. Local trusted herbal support for 5+ years.",
  keywords: "Ayurvedic shop Mannarkkad, herbal medicine Kerala, Rahath Ayurvedic, raw herbal medicines, Piles care Mannarkkad, Postnatal Care herbs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
