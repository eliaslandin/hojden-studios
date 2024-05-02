import { Heading1 } from "@/components/Heading1";
import { Heading2 } from "@/components/Heading2";
import { HojdenButton } from "@/components/HojdenButton";
import { ParagraphLink } from "@/components/ParagraphLink";
import { Post } from "@/components/Post";
import { PostBody } from "@/components/Post/PostBody";
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="pt-10 container flex flex-col sm:flex-row sm:justify-center gap-10">
        <Post className="flex-[2]">
          <Heading1 className=" text-hojden-orange">Bli medlem i höjden studios</Heading1>
          <PostBody>
            Vill du bli medlem i höjden studios? Just nu söker vi fler som vill vara med och driva huset och dela platsen! höjden erbjuder verksamhetsanpassade lokaler för det dagliga arbetet som frilansare. Som yrkesverksam konstnär kan du vara delaktig genom delad kontorsplats eller genom att hyra en egen ateljé.<br/>
            <br/>
            höjden erbjuder
            <ul className="list-disc pl-8">
              <li>
                Medlemskap i ett community av konstnärer och kulturarbetare
              </li>
              <li>
                Tillgång dygnet runt till våra lokaler med delade kontorsplatser  
              </li>
              <li>
                Bokningsbart mötesrum, 25kr/timme.
              </li>
              <li>
                Välutrustat kök med kaffe och te
              </li>
              <li>
                Möjligheten att boka vår 100m2 studio för 100kr/timmen veckodagar, 50kr/timmer på kvällar/helger.
              </li>
              <li>
                Föreställningar, utställningar, fester, festival och andra kulturevenemang
              </li>
              <li>
                Rabatterade workshops som: musikproduktion för scen, tech för scen, performance och dansworkshops. (läs mer under “höjden sessions”)
              </li>
            </ul>
            <br/>
            Medlemskapet är 200 SEK per månad ink. moms och du blir medlem antingen som privatperson eller via ditt företag.<br/>
            <br/>
            Du kan också hyra din egna ateljé/kontor. Maila <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink> för mer info om lediga lokaler.
            Vid intresse, skicka in anmälan via länken nedan.<br/>
            <br/>
            <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Ansök här för att bli medlem</HojdenButton>
            <br/>
            <ParagraphLink href="/supportmedlem" className="text-hojden-orange"><Heading2>Bli supportmedlem</Heading2></ParagraphLink>
            Som stödmedlem deltar du i möjliggörandet av höjdens fortsatta existens. Genom att betala från 50kr/månad stödjer du det fria konst- och kulturfältet i Stockholm och får nyhetsbrev om vad som pågår i huset. Du kan också donera en valfri engångssumma.
          </PostBody>
        </Post>
        <div className="flex-1">
          <Image 
            width={1000}
            height={0}
            src="/hojden_become_member.webp" 
            alt="Four people taking part in a dance class." 
          />
        </div>
      </div>
    </main>
  );
}
