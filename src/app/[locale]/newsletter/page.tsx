import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { NewsletterSignUpForm } from "@/components/NewsletterSignUpForm";

const content = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">Newsletter</Heading1>
  <p className="font-bold">Do you want to stay up to date with what is happening at höjden?
  <br/>Sign up for our newsletter!</p>
  <NewsletterSignUpForm />
    </>
  ),
  sv: () => (
    <>
  <Heading1 className="text-hojden-orange">Nyhetsbrev</Heading1>
  <p className="font-bold">Vill du hålla dig uppdaterad om vad som händer på höjden?
  <br/>Anmäl dig till vårt nyhetsbrev!</p>
  <NewsletterSignUpForm />
    </>
  ),
};

export default function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  
  return (
    <PageContent>
      {content[locale as SupportedLocale]()}
    </PageContent>
  )
}
