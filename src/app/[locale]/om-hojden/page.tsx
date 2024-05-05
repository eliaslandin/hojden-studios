import { Heading1 } from "@/components/Heading1";
import { HojdenButton } from "@/components/HojdenButton";
import { PageContent } from "@/components/PageContent";
import { HojdenImage } from "@/components/HojdenImage";


export default function Page() {
  return (
    <PageContent>
      <Heading1 className="text-hojden-orange">Vår verksamhet</Heading1>
      <p>
      höjden är en interdisciplinär konstnärsdriven plattform för produktion, sammanhang och dagligt arbete främst inom dans, performance, och koreografi men även andra konstnärliga grenar såsom bildkonst och musik. Vi hyr våra lokaler på Östbergatorget 21 i Stockholm.<br/>
      <br/>
      höjden är en nyskapande samlingsplats för frilansande konstnärer som banar väg för kollektiva, normkritiska och experimentella samarbeten mellan fält och över gränser. Förutom att vara en arbetsplats erbjuder vi även workshops, föreställningar och föreläsningar regelbundet. Vi vill med vår publika verksamhet tilltala en bredare skara kulturintresserade och med angelägenhet komplettera det kulturutbud som finns att tillgå på konstnärers villkor.<br/>
      <br/>
      Vi har en intersektionell inställning till arbetsmiljö, lokal och organisation som genomsyrar alla aktiviteter, rekrytering av medlemmar och personal. Konstnärerna på höjden bestämmer tillsammans med styrelsen hur plattformens dagliga verksamhet ser ut och kan driva olika delar av sina projekt och sitt arbete genom höjden. höjden har i nuläget omkring 30 konstnärer som jobbar inom dans, musik, performance, koreografi, bildkonst och design.<br/>
      <br/>
      </p>
      <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Ansök här för att bli medlem</HojdenButton>
      <HojdenImage alt="Woman giving speach to a room full of people at höjden." src="/hojden_verksamhet.webp" />
    </PageContent>
  );
}
