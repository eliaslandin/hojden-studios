import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ 
  weight: ["200", "400", "700"], 
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
      <body className={`${barlow.className} text-hojden-green font-light`}>{children}</body>
    </html>
  );
}
