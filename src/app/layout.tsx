import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderMobile } from "@/components/HeaderMobile";

const barlow = Barlow({ 
  weight: ["200", "500", "700"], 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "höjden studios",
  description: "höjden studios is an artist-run platform for art production. We call on the broader cultural field to join and support the existence of the house.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body className={`${barlow.className} relative flex flex-col text-hojden-green font-light bg-hojden-beige`}>
        <div className={`min-h-screen bg-white pb-footerheight`}>
          <HeaderMobile/>
          <Header/>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
