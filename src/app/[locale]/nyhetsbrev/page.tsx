import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { PageContent } from "@/components/PageContent";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { content as dictionary } from "@/lib/i18n/dictionary";
import { NewsletterSignUpForm } from "@/components/NewsletterSignUpForm";

export default async function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  const t = dictionary[locale].newsletter;

  return (
    <PageContent>
      <Heading1 className="text-hojden-orange">{t["pageTitle"]}</Heading1>
      <p>{t["paragraph"]}</p>
      <NewsletterSignUpForm />
    </PageContent>
  );
}