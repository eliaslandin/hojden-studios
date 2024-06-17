import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";import { getEvents } from "@/lib/i18n/venueAPI/fetchers";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { content as dictionary } from "@/lib/i18n/dictionary";
import { getLocalizedContent } from "@/lib/i18n/venueAPI/utils";
import { MDEditor } from "@/components/MDEditor";
import { formatDate } from '@/components/utils/date';

const contents = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">Happening at höjden</Heading1>
  <Heading3 className="pt-6">17 February - members party! 18:00-late</Heading3>

  <Heading3 className="pt-6">1 March - höjden nights (afterwork) 17.00</Heading3>

  <Heading3 className="pt-6">25-27 March - höjden sessions (workshop)</Heading3>
  <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

  <Heading3 className="pt-6">5 April - höjden nights (afterwork) 17.00</Heading3>

  <Heading3 className="pt-6">9-11 April - höjden sessions (workshop)</Heading3>
  <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

  <Heading3 className="pt-6">16-18 April - höjden sessions (workshop)</Heading3>
  <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

  <Heading3 className="pt-6">27 April - höjden festival</Heading3>
  <p>Festival by höjdens members for all!</p>

  <Heading3 className="pt-6">3 May - höjden nights (afterwork) 17.00</Heading3>
    </>
  ),
  sv: () => (
    <>
    <Heading1 className="text-hojden-orange">Händer på höjden</Heading1>
    <Heading3 className="pt-6">17 February - members party! 18:00-late</Heading3>

    <Heading3 className="pt-6">1 March - höjden nights (afterwork) 17.00</Heading3>

    <Heading3 className="pt-6">25-27 March - höjden sessions (workshop)</Heading3>
    <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

    <Heading3 className="pt-6">5 April - höjden nights (afterwork) 17.00</Heading3>

    <Heading3 className="pt-6">9-11 April - höjden sessions (workshop)</Heading3>
    <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

    <Heading3 className="pt-6">16-18 April - höjden sessions (workshop)</Heading3>
    <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>

    <Heading3 className="pt-6">27 April - höjden festival</Heading3>
    <p>Festival by höjdens members for all!</p>

    <Heading3 className="pt-6">3 May - höjden nights (afterwork) 17.00</Heading3>
    </>
  ),
};

export default async function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const t = dictionary[locale].calendar;

  const events = await getEvents({});
  events.reverse()

  return (
    <PageContent className="sm:items-center">
      <Heading1 className="text-hojden-orange">{t["pageTitle"]}</Heading1>
      {
        events.map((event: Record<string, any>) => {
          const content = getLocalizedContent(event.localizedContent).content
          
          return (
            <>
              <Heading3 className="mt-6">{content.title} - {formatDate(event.startDate)}</Heading3>
              { content.content && <MDEditor className="sm:text-center" content={content.content}/> }
            </>
          )
        })
      }
    </PageContent>
  );
}