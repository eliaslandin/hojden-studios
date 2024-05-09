import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { HojdenImage } from "@/components/HojdenImage";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { ColumnFlexOne } from "@/components/layouts/ColumnFlexOne";
import { TwoColumnLayout } from "@/components/layouts/TwoColumnLayout";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";

const content = {
  en: () => (
    <>
  <Heading1 className=" text-hojden-orange">Our shared studio</Heading1>
  <p className="pb-6">
  Our studio is 100m2 and has a sound system and Wi-Fi.<br/>
  <br/>
  It's possible to flip the dancemat and have it be either black or white.<br/>
  <br/>
  As a member it is possible to book höjden's studio and common spaces for events or such. The price is 100kr/hour weekdays, 50kr/hour weekends & evenings.<br/>
  </p>
  <p className="font-bold pb-8">For questions regarding booking studios and other practical questions: <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink></p> 

  <HojdenImage 
    src="/hojden_studio_1.jpeg" 
    alt="Four people taking part in a dance class."
    className="py-2" 
  />
  <TwoColumnLayout>
    <ColumnFlexOne>
      <HojdenImage 
        src="/hojden_studio_2.jpeg" 
        alt="Four people taking part in a dance class."
        className="p-0" 
      />  
    </ColumnFlexOne>
    <ColumnFlexOne>
      <HojdenImage 
        src="/hojden_studio_3.jpeg" 
        alt="Four people taking part in a dance class." 
        className="p-0" 
      />
    </ColumnFlexOne>
  </TwoColumnLayout>
    </>
  ),
  sv: () => (
    <>
  <Heading1 className=" text-hojden-orange">Vår studio</Heading1>
  <p className="pb-6">
  Studion är 100m2 och har högtalarsystem samt Wi-Fi.<br/>
  <br/>
  Medlemspriset är 100kr/timmen veckodagar, 50kr/timmen på kvällar/helger. Dansmattan går att vända för att få svart eller vitt underlag.<br/>
  </p>
  <p className="font-bold pb-8">För frågor gällande bokning av studios: <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink></p> 

  <HojdenImage 
    src="/hojden_studio_1.jpeg" 
    alt="Four people taking part in a dance class."
    className="py-2" 
  />
  <TwoColumnLayout>
    <ColumnFlexOne>
      <HojdenImage 
        src="/hojden_studio_2.jpeg" 
        alt="Four people taking part in a dance class."
        className="p-0" 
      />  
    </ColumnFlexOne>
    <ColumnFlexOne>
      <HojdenImage 
        src="/hojden_studio_3.jpeg" 
        alt="Four people taking part in a dance class." 
        className="p-0" 
      />
    </ColumnFlexOne>
  </TwoColumnLayout>
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
