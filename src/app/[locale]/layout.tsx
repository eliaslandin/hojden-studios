import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderMobile } from "@/components/HeaderMobile";
import { LocaleSelectOverlay } from "@/components/LocaleSelectOverlay";
import { unstable_setRequestLocale } from "next-intl/server";

const locales = ['en', 'sv'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const barlow = Barlow({ 
  weight: ["300", "500", "700"], 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "höjden studios",
  description: "höjden studios is an artist-run platform for art production. We call on the broader cultural field to join and support the existence of the house.",
};

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={`${barlow.className} relative flex flex-col text-hojden-green font-light bg-hojden-beige`}>
        <LocaleSelectOverlay className="hidden md:flex"/>
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
