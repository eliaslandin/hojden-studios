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
  return (
    <html lang="en">
      <body className={`${barlow.className} min-h-screen flex flex-col justify-between text-hojden-green font-light`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
