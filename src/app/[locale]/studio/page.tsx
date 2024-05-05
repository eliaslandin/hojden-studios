import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { HojdenImage } from "@/components/HojdenImage";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";
import { ColumnFlexOne } from "@/components/layouts/ColumnFlexOne";
import { TwoColumnLayout } from "@/components/layouts/TwoColumnLayout";


export default function Page() {
  return (
    <PageContent>
      <Heading1 className=" text-hojden-orange">Vår studio</Heading1>
      <p className="pb-6">
      Studion är 100m2 och har högtalarsystem samt Wi-Fi.<br/>
      <br/>
      Medlemspriset är 100kr/timmen veckodagar, 50kr/timmen på kvällar/helger. Dansmattan går att vända för att få svart eller vitt underlag.<br/>
      <br/>
      <Heading3>För frågor gällande bokning av studios: <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink></Heading3> 
      </p>

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
    </PageContent>
  );
}
