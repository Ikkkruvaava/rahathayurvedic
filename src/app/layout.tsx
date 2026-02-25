import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Rahath Ayurvedic | Traditional Raw Herbal Medicines in Mannarkkad",
  description: "Traditional herbal remedies and Ayurvedic formulations prepared in an authentic way, located at Hospital Junction, Mannarkkad. A locally trusted herbal care provider for over 5 years.",
  keywords: "Ayurvedic shop Mannarkkad, herbal medicine Kerala, Rahath Ayurvedic, raw herbal medicines, Piles care Mannarkkad, Postnatal Care herbs",
  icons: {
    icon: [
      { url: "/Logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Logo/apple-touch-icon.png",
  },
  manifest: "/Logo/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
