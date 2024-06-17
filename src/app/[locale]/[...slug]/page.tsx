import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import {notFound} from 'next/navigation';
import { getPage } from "@/lib/i18n/venueAPI/fetchers";
import { getLocalizedContent } from "@/lib/i18n/venueAPI/utils";
import { MDEditor } from "@/components/MDEditor";
import { getPublicImage } from "@/components/utils";
import { HeaderImage } from "@/components/HeaderImage";


export default async function Page({ params }: { params: { locale: SupportedLocale, slug: Array<string> }}) {
  const { locale, slug } = params;
  unstable_setRequestLocale(locale);

  const page = await getPage(slug.join("/"))

  if (page.length <= 0) {
    notFound()
  }

  const headerImageUrl = page.image ? getPublicImage(page.image) : null
  
  const content = getLocalizedContent(page.localizedContent)
  
  return (
    <PageContent>
      { headerImageUrl && <HeaderImage src={headerImageUrl} alt={page.image.altText} />}
      <Heading1 className="text-hojden-orange">{content.content.title}</Heading1>
      <MDEditor content={content.content.content}/>
    </PageContent>
  )
};