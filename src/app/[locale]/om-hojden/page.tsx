import { Heading1 } from "@/components/Heading1";
import { HojdenButton } from "@/components/HojdenButton";
import { PageContent } from "@/components/PageContent";
import { HojdenImage } from "@/components/HojdenImage";
import { SupportedLocale } from "@/types"
import { unstable_setRequestLocale } from "next-intl/server";

const content = {
  en: () => (
    <>
    <Heading1 className="text-hojden-orange">Our activity</Heading1>
    <p>
    höjden is an interdisciplinary artist-driven platform for production, and daily work. A place for connection and context for performance, choreography, music and all kinds of artistic disciplines. We have performances, all kinds of events, and from spring 2024 a new public facing gallery space. We rent our premises at Östbergatorget 21 in Stockholm.<br/>
    <br/>
    An innovative gathering place for freelance artists who pave the way for collective, norm-critical and experimental collaborations between fields and across borders. In addition to being a workplace, we also offer workshops, performances and lectures regularly. höjden aims to appeal to a wide audience and to supplement existing initiatives that are available to artists on their own terms. <br/>
    <br/>
    We have an intersectional approach to our work environment, premises and organisation that permeates all activities. The artists at höjden decide together with the höjden's board, what daily operations look like and can run different parts of their projects and their work through höjden. höjden aims to have around 150 cultural workers and artists, and around 100 support members.<br/>
    <br/>
    </p>
    <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Apply here to become a member</HojdenButton>
    <HojdenImage alt="Woman giving speach to a room full of people at höjden." src="/hojden_verksamhet.webp" />
    </>
  ),
  sv: () => (
    <>
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
  );
}
