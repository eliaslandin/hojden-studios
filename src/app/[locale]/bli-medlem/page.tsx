import { Heading1 } from "@/components/Heading1";
import { Heading2 } from "@/components/Heading2";
import { HojdenButton } from "@/components/HojdenButton";
import { HojdenImage } from "@/components/HojdenImage";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { ColumnFlexOne } from "@/components/layouts/ColumnFlexOne";
import { ColumnFlexTwo } from "@/components/layouts/ColumnFlexTwo";
import { TwoColumnLayout } from "@/components/layouts/TwoColumnLayout";
import { SupportedLocale } from "@/types";
import { Heading3 } from "@/components/Heading3";

const content = {
  en: () => (
    <>
  <TwoColumnLayout className="gap-10">
  <ColumnFlexTwo>
    <Heading1 className=" text-hojden-orange">Become a member of höjden studios</Heading1>
    <p>
      Do you want to become a member of höjden studios? We are currently looking for more people to join us!<br/>
      <br/>
      höjden offers
    </p>
    <ul className="list-disc pl-8">
      <li>
        <p>
          being a member of a community of all kinds of artists & culture workers.
        </p>
      </li>
      <li>
        <p>
          24/7 access to well equipped shared office area for the daily work as a freelancer.
        </p>  
      </li>
      <li>
        <p>
          bookable private meeting room, 25kr/hour.
        </p>
      </li>
      <li>
        <p>
          kitchen and hang-out area, well supplied with coffee & tea. 
        </p>
      </li>
      <li>
        <p>
          opportunity to book our 100m2 studio for the internal, and/or common area at-cost price of 100kr/hour weekdays, 50kr/hour weekends & evenings.
        </p>
      </li>
      <li>
        <p>
          Performance events, exhibition space, launch parties, annual festival & other events for all kinds of artists & culture workers.  
        </p>
      </li>
      <li>
        <p>
          Discounted workshops such as: music production for stage, tech for stage, performance workshops. (see höjden sessions)
        </p>
      </li>
    </ul>
    <br/>
    <p>
      Membership is SEK 200 a month, ink. moms. You can sign up as a private person or through your company. <br/>
      <br/>
      The agreement gives you access to the house's shared office space, kitchen and hang-out area as well as the opportunity to book our 100m2 studio for the internal, at-cost price of 100kr/hour weekdays, 50kr/hour weekends & evenings.<br/>
      <br/>
    </p>
    <Heading3>Rent your own atelier</Heading3>
    <p>
      We also rent out studios / offices to artists who have an F-tax certificate.<br/>
      <br/>
    </p>
    <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Apply here to become a member</HojdenButton>
    <br/>
    <ParagraphLink href="/supportmedlem" className="text-hojden-orange"><Heading2>Become a supporting member</Heading2></ParagraphLink>
    <p>
      As a support member, you participate in the assumption of the height's continued existence. By paying from SEK 50/month, you support the free art and culture field in Stockholm and receive newsletters about what's going on in the house.
    </p>
  </ColumnFlexTwo>
  <ColumnFlexOne>
    <HojdenImage 
      src="/hojden_become_member.webp" 
      alt="Four people taking part in a dance class." 
    />
  </ColumnFlexOne>
</TwoColumnLayout>
    </>
  ),
  sv: () => (
    <>
  <TwoColumnLayout className="gap-10">
  <ColumnFlexTwo>
    <Heading1 className=" text-hojden-orange">Bli medlem i höjden studios</Heading1>
    <p>
      Vill du bli medlem i höjden studios? Just nu söker vi fler som vill vara med och driva huset och dela platsen! höjden erbjuder verksamhetsanpassade lokaler för det dagliga arbetet som frilansare. Som yrkesverksam konstnär kan du vara delaktig genom delad kontorsplats eller genom att hyra en egen ateljé.<br/>
      <br/>
      höjden erbjuder
    </p>
    <ul className="list-disc pl-8">
      <li>
        <p>
          Medlemskap i ett community av konstnärer och kulturarbetare
        </p>
      </li>
      <li>
        <p>
          Tillgång dygnet runt till våra lokaler med delade kontorsplatser
        </p>  
      </li>
      <li>
        <p>
          Bokningsbart mötesrum, 25kr/timme.
        </p>
      </li>
      <li>
        <p>
          Välutrustat kök med kaffe och te
        </p>
      </li>
      <li>
        <p>
          Möjligheten att boka vår 100m2 studio för 100kr/timmen veckodagar, 50kr/timmer på kvällar/helger.
        </p>
      </li>
      <li>
        <p>
          Föreställningar, utställningar, fester, festival och andra kulturevenemang
        </p>
      </li>
      <li>
        <p>
          Rabatterade workshops som: musikproduktion för scen, tech för scen, performance och dansworkshops. (läs mer under “höjden sessions”)
        </p>
      </li>
    </ul>
    <br/>
    <p>
      Medlemskapet är 200 SEK per månad ink. moms och du blir medlem antingen som privatperson eller via ditt företag.<br/>
      <br/>
      Du kan också hyra din egna ateljé/kontor. Maila <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink> för mer info om lediga lokaler.
      Vid intresse, skicka in anmälan via länken nedan.<br/>
      <br/>
    </p>
    <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Ansök här för att bli medlem</HojdenButton>
    <br/>
    <ParagraphLink href="/supportmedlem" className="text-hojden-orange"><Heading2>Bli supportmedlem</Heading2></ParagraphLink>
    <p>
      Som stödmedlem deltar du i möjliggörandet av höjdens fortsatta existens. Genom att betala från 50kr/månad stödjer du det fria konst- och kulturfältet i Stockholm och får nyhetsbrev om vad som pågår i huset. Du kan också donera en valfri engångssumma.
    </p>
  </ColumnFlexTwo>
  <ColumnFlexOne>
    <HojdenImage 
      src="/hojden_become_member.webp" 
      alt="Four people taking part in a dance class." 
    />
  </ColumnFlexOne>
</TwoColumnLayout>
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
};
