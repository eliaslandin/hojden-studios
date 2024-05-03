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
      <Heading1 className=" text-hojden-orange">Våra lokaler</Heading1>
      <p className="pb-6">
        höjden är en lokal om 460m2 fördelat på två våningar. På den första våningen finns en social yta kopplad till köket, en stor dansstudio om 100m2, en musikstudio, ett delat kontorslandskap, WC och tre ateljéer. På övervåningen finns två kontor.<br/>
        <br/>
        Klicka på bilderna eller ladda ner pdf dokumentet för mer info!
      </p>

      <HojdenImage 
        src="/hojden_lokaler_1.jpeg" 
        alt="Four people taking part in a dance class."
        className="py-2" 
      />
      <TwoColumnLayout>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_2.jpeg" 
            alt="Four people taking part in a dance class."
            className="p-0" 
          />  
        </ColumnFlexOne>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_3.jpeg" 
            alt="Four people taking part in a dance class." 
            className="p-0" 
          />
        </ColumnFlexOne>
      </TwoColumnLayout>
      <HojdenImage 
        src="/hojden_lokaler_4.jpeg" 
        alt="Four people taking part in a dance class."
        className="py-2" 
      />
      <TwoColumnLayout>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_5.jpeg" 
            alt="Four people taking part in a dance class."
            className="p-0" 
          />  
        </ColumnFlexOne>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_6.jpeg" 
            alt="Four people taking part in a dance class." 
            className="p-0" 
          />
        </ColumnFlexOne>
      </TwoColumnLayout>
      <HojdenImage 
        src="/hojden_lokaler_7.jpeg" 
        alt="Four people taking part in a dance class."
        className="py-2" 
      />
      <TwoColumnLayout>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_8.jpeg" 
            alt="Four people taking part in a dance class."
            className="p-0" 
          />  
        </ColumnFlexOne>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_9.jpeg" 
            alt="Four people taking part in a dance class." 
            className="p-0" 
          />
        </ColumnFlexOne>
      </TwoColumnLayout>
      <HojdenImage 
        src="/hojden_lokaler_10.jpeg" 
        alt="Four people taking part in a dance class."
        className="py-2" 
      />
      <TwoColumnLayout>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_11.jpeg" 
            alt="Four people taking part in a dance class."
            className="p-0" 
          />  
        </ColumnFlexOne>
        <ColumnFlexOne>
          <HojdenImage 
            src="/hojden_lokaler_12.jpeg" 
            alt="Four people taking part in a dance class." 
            className="p-0" 
          />
        </ColumnFlexOne>
      </TwoColumnLayout>
    </PageContent>
  );
}
