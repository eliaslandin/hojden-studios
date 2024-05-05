import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { Heading2 } from "@/components/Heading2";

const content = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">Contact us</Heading1>
      <p>
      För frågor gällande höjdens verksamhet, frågor till Släktet Ekonomisk förening och frågor gällande bokning av studios: <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink>
      <br/><br/>
      Kontakta oss också på <ParagraphLink href="https://www.facebook.com/hojdenostberga/">Facebook</ParagraphLink> eller via kontaktformuläret nedan. <br/>
      <br/>
      </p>
      <Heading2>Hitta hit</Heading2>
      <p>
      Du hittar oss på Östbergatorget 21, 125 73 Älvsjö.<br/>
      <br/>
      Buss 134 från Liljeholmen eller Årstaberg.<br/>
      Buss 168 från Gullmarsplan.<br/>
      <br/>
      Ungefär 20 minuter gångavstånd från Årstaberg station eller 15 minuter gångavstånd från hållplats Årstafältet.
      <br/><br/>
      </p>
      <Heading2>Tillgänglighet</Heading2>
      <p>
        Huset ligger på bottenplan, rullstolsramp finns. Lokalen är tillgänglighetsanpassad och är byggd utan trösklar/trappsteg med stora och öppna ytor samt har toaletter anpassade för personer som använder rullstol. 
      </p>
    </>
  ),
  sv: () => (
    <>
    <Heading1 className="text-hojden-orange">Kontakta oss</Heading1>
      <p>
      För frågor gällande höjdens verksamhet, frågor till Släktet Ekonomisk förening och frågor gällande bokning av studios: <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink>
      <br/><br/>
      Kontakta oss också på <ParagraphLink href="https://www.facebook.com/hojdenostberga/">Facebook</ParagraphLink> eller via kontaktformuläret nedan. <br/>
      <br/>
      </p>
      <Heading2>Hitta hit</Heading2>
      <p>
      Du hittar oss på Östbergatorget 21, 125 73 Älvsjö.<br/>
      <br/>
      Buss 134 från Liljeholmen eller Årstaberg.<br/>
      Buss 168 från Gullmarsplan.<br/>
      <br/>
      Ungefär 20 minuter gångavstånd från Årstaberg station eller 15 minuter gångavstånd från hållplats Årstafältet.
      <br/><br/>
      </p>
      <Heading2>Tillgänglighet</Heading2>
      <p>
        Huset ligger på bottenplan, rullstolsramp finns. Lokalen är tillgänglighetsanpassad och är byggd utan trösklar/trappsteg med stora och öppna ytor samt har toaletter anpassade för personer som använder rullstol. 
      </p>
    </>
  ),
};

type SupportedLocale = 'en' | 'sv';

export default function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;

  return (
    <PageContent>
    {content[locale as SupportedLocale]()}
    </PageContent>
  );
}
