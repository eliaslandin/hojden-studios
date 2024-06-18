import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { PageContent } from "@/components/PageContent";
import { getEvents } from "@/lib/i18n/venueAPI/fetchers";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { content as dictionary } from "@/lib/i18n/dictionary";
import { getLocalizedContent } from "@/lib/i18n/venueAPI/utils";
import { formatDate } from '@/components/utils/date';

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
            </>
          )
        })
      }
    </PageContent>
  );
}