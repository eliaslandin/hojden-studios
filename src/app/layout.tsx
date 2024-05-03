import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

const barlow = Barlow({ 
  weight: ["200", "500", "700"], 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Höjden studios",
  description: "Höjden studios is an artist-run platform for art production. We call on the broader cultural field to join and support the existence of the house.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footerHeight = "9rem"

  return (
    <html lang="en">
      <body className={`${barlow.className} flex flex-col text-hojden-green font-light`}>
        <div className={`min-h-[calc(100vh-9rem)]`}>
          <Header/>
          {children}
        </div>
        <Footer height={footerHeight} />
      </body>
    </html>
  );
}
