import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { SupportedLocale } from "@/types";

const content = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">Become a support member by donating</Heading1>
  <p>As a support member, you participate in the assumption of the height's continued existence. By paying from SEK 50/month, you support the free art and culture field in Stockholm and receive newsletters about what's going on in the house.<br/>
  <br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/5kA0458jMeVS95C6oq">50 kr/month</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/3cs0457fIeVS0z66or">100 kr/month</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/00g6st6bEbJGepW7sw">200 kr/month</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/5kA7wxdE6dRO3LicMR">400 kr/month</ParagraphLink>
  <br/><br/>
  </p>
    </>
  ),
  sv: () => (
    <>
  <Heading1 className="text-hojden-orange">Bli supportmedlem</Heading1>
  <p>
    Som stödmedlem deltar du i möjliggörandet av höjdens fortsatta existens. Genom att betala från 50kr/månad stödjer du det fria konst- och kulturfältet i Stockholm och får nyhetsbrev om vad som pågår i huset.<br/>
  <br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/5kA0458jMeVS95C6oq">50 kr/månad</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/3cs0457fIeVS0z66or">100 kr/månad</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/00g6st6bEbJGepW7sw">200 kr/månad</ParagraphLink>
  <br/><br/>
  <ParagraphLink className="text-hojden-orange" href="https://buy.stripe.com/5kA7wxdE6dRO3LicMR">400 kr/månad</ParagraphLink>
  <br/><br/>
  </p>
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
