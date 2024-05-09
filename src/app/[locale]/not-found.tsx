import { SupportedLocale } from "@/types";
import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";

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
  const locale = "en"

  return (
    <PageContent>
      { content[locale as SupportedLocale]() }
    </PageContent>
  )
}