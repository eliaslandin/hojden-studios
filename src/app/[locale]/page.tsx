import { Heading1 } from '@/components/Heading1';
import { Heading2 } from '@/components/Heading2';
import { MDEditor } from '@/components/MDEditor';
import { PageContent } from '@/components/PageContent';
import { Post } from '@/components/Post';
import { PostDate } from '@/components/Post/PostDate';
import { getPages } from '@/lib/i18n/venueAPI/fetchers';
import { getLocalizedContent } from '@/lib/i18n/venueAPI/utils';
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from 'next-intl/server';
import { content as dictionary} from "@/lib/i18n/dictionary";
import { formatDate } from '@/components/utils/date';

export default async function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const t = dictionary[(locale as "sv" | "en") || "en"].frontPage;

  const pages = await getPages({});
  
  return (
    <PageContent className="max-w-[42rem]">
      <Heading1 className="pb-10">{t["WelcomeMessage"]}</Heading1>

      { pages.map((page: any) => {
        const content = getLocalizedContent(page.localizedContent)
        const formattedDate = formatDate(page.site.createdAt)

        return (
          <Post key={page.id}>
            <PostDate>{formattedDate}</PostDate>
            <Heading2>{content.content.title}</Heading2>
              <MDEditor
                content={content.content.content}
              />
          </Post>
        )
      })}
    </PageContent>
  )
}