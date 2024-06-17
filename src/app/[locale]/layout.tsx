import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderMobile } from "@/components/HeaderMobile";
import { LocaleSelectOverlay } from "@/components/LocaleSelectOverlay";
import { unstable_setRequestLocale } from "next-intl/server";
import { SupportedLocale } from "@/types";
import { getPages } from "@/lib/i18n/venueAPI/fetchers";
import { getLocalizedContent } from "@/lib/i18n/venueAPI/utils";

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

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: SupportedLocale};
}) {
  unstable_setRequestLocale(locale)

  const pages = await getPages({})
  const childrenPages = pages.filter((page: Record<string, any>) => page.parentId)
  const parsedPages: Array<Record<string, any>> = []
  pages.forEach((page: Record<string, any>) => {
    if (page.parentId) { return };
    page.content = getLocalizedContent(page.localizedContent).content
    
    childrenPages.forEach((childPage: Record<string, any>) => {
      if (childPage.parentId === page.id) {
        childPage.content = getLocalizedContent(childPage.localizedContent).content

        if (!page.children) { 
          page.children = [childPage]
        } else {
          page.children.push(childPage) 
        }
      }
    })
    parsedPages.push(page)
  })


  return (
    <html lang={locale}>
      <body className={`${barlow.className} relative flex flex-col text-hojden-green font-light bg-hojden-beige`}>
        <LocaleSelectOverlay className="hidden md:flex"/>
        <div className={`min-h-screen bg-white pb-footerheight`}>
          <HeaderMobile locale={locale} pages={parsedPages}/>
          <Header locale={locale} pages={parsedPages}/>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
