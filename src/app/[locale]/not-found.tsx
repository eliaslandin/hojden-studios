import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { SupportedLocale } from "@/types";
import { useLocale } from "next-intl";

const content = {
  en: () => (
    <>
      <Heading1>Page not found</Heading1>
    </>
  ),
  sv: () => (
    <>
      <Heading1>Sidan hittades inte</Heading1>
    </>
  )
}

export default function NotFoundPage() {
  const locale = useLocale()

  return (
    <PageContent>
      { content[locale as SupportedLocale]() }
    </PageContent>
  )
}