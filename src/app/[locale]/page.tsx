import { Heading1 } from '@/components/Heading1';
import { Heading2 } from '@/components/Heading2';
import { MDEditor } from '@/components/MDEditor';
import { PageContent } from '@/components/PageContent';
import { Post } from '@/components/Post';
import { PostDate } from '@/components/Post/PostDate';
import { getFeaturedEvents, getFeaturedPages } from '@/lib/i18n/venueAPI/fetchers';
import { getLocalizedContent } from '@/lib/i18n/venueAPI/utils';
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from 'next-intl/server';
import { content as dictionary} from "@/lib/i18n/dictionary";
import { formatDate } from '@/components/utils/date';

export default async function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const t = dictionary[(locale as "sv" | "en") || "en"].frontPage;

  const pages = await getFeaturedPages({});
  const events = await getFeaturedEvents({})
  const allPosts = pages.concat(events)
  console.log(allPosts)
  
  return (
    <PageContent className="max-w-[42rem]">
      <Heading1 className="pb-10">{t["WelcomeMessage"]}</Heading1>

      { allPosts.map((post: any) => {
        const content = getLocalizedContent(post.localizedContent)

        return (
          <Post key={post.id}>
            <Heading2>{content.content.title}</Heading2>
            { post.startDate && <PostDate>{formatDate(post.startDate)}</PostDate> }
              <MDEditor
                content={content.content.content}
              />
          </Post>
        )
      })}
    </PageContent>
  )
}