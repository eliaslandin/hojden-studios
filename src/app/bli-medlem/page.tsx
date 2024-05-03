import { Heading1 } from "@/components/Heading1";
import { Heading2 } from "@/components/Heading2";
import { HojdenButton } from "@/components/HojdenButton";
import { HojdenImage } from "@/components/HojdenImage";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { ColumnFlexOne } from "@/components/layouts/ColumnFlexOne";
import { ColumnFlexTwo } from "@/components/layouts/ColumnFlexTwo";
import { TwoColumnLayout } from "@/components/layouts/TwoColumnLayout";


export default function Page() {
  return (
    <PageContent>
      <TwoColumnLayout>
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
    </PageContent>
  );
}
