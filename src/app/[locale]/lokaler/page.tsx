import { Heading1 } from "@/components/Heading1";
import { HojdenImage } from "@/components/HojdenImage";
import { PageContent } from "@/components/PageContent";
import { ColumnFlexOne } from "@/components/layouts/ColumnFlexOne";
import { TwoColumnLayout } from "@/components/layouts/TwoColumnLayout";
import { SupportedLocale } from "@/types";

const content = {
  en: () => (
    <>
  <Heading1 className=" text-hojden-orange">Our premises</Heading1>
  <p className="pb-6">
    höjden has an area of 460m2 spread over two floors. On the first floor there is a social area connected to the kitchen, a large dance studio of 100m2, a music studio, a shared office landscape, WC, workshop and two ateliérs. Upstairs is two offices office.<br/>
    <br/>
    Click on the pictures or download the pdf document for more info!
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
    </>
  ),
  sv: () => (
    <>
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
}
