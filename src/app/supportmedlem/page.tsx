import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { Heading3 } from "@/components/Heading3";
import { ParagraphLink } from "@/components/ParagraphLink";


export default function Page() {
  return (
    <PageContent>
      <Heading1 className="text-hojden-orange">Bli supportmedlem</Heading1>
      <p>
        Som stödmedlem deltar du i möjliggörandet av höjdens fortsatta existens. Genom att betala från 50kr/månad stödjer du det fria konst- och kulturfältet i Stockholm och får nyhetsbrev om vad som pågår i huset.<br/>
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
    </PageContent>
  );
}
