import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { Heading3 } from "@/components/Heading3";
import { SupportedLocale } from "@/types";

const content = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">Newsletter</Heading1>
  <Heading3>Do you want to stay up to date with what is happening at höjden?
  <br/>Sign up for our newsletter!</Heading3>
    </>
  ),
  sv: () => (
    <>
  <Heading1 className="text-hojden-orange">Nyhetsbrev</Heading1>
  <Heading3>Vill du hålla dig uppdaterad om vad som händer på höjden?
  <br/>Anmäl dig till vårt nyhetsbrev!</Heading3>
    </>
  ),
};

export default function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  return (
    <PageContent>
      {content[locale as SupportedLocale]()}
    </PageContent>
  )
}
