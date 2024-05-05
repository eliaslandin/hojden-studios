import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { Heading3 } from "@/components/Heading3";
import { SupportedLocale } from "@/types";

const content = {
  en: () => (
    <>
  <Heading1 className="text-hojden-orange">The board</Heading1>
  <p>
  höjden is run by Släktet Economic Association (Släktet Ekonomisk Förening).<br/>
  <br/>
  The association was started in the spring of 2018 and the board of 2023 fiscal year consists of:<br/>
  <br/>
  </p>
  <Heading3>Chairperson:</Heading3>
  <p>
    Ofelia Jarl Ortega<br/>
    Oda Brekke<br/>
    <br/>
  </p>
  <Heading3>Ordinary board members:</Heading3>
  <p>
    Anna Fischler<br/>
    Maia Means<br/>
    Karina Sarkissova<br/>
    Nasreen Aljanabi Larsson <br/>
    Scott Cazan<br/>
    Sonja Lindgren<br/>
    Alice MacKenzie<br/>
    <br/>
  </p>
  <Heading3>External board member:</Heading3>
  <p>
    Anne Vigeland
  </p>
    </>
  ),
  sv: () => (
    <>
  <Heading1 className="text-hojden-orange">Styrelsen</Heading1>
  <p>
  höjden drivs av Släktet Ekonomisk Förening.<br/>
  <br/>
  Föreningen startades våren 2018 och består verksamhetsåret 2023 av:<br/>
  <br/>
  </p>
  <Heading3>Ordförande:</Heading3>
  <p>
    Ofelia Jarl Ortega<br/>
    Oda Brekke<br/>
    <br/>
  </p>
  <Heading3>Ordinarie styrelsemedlemmar:</Heading3>
  <p>
    Anna Fischler<br/>
    Maia Means<br/>
    Karina Sarkissova<br/>
    Nasreen Aljanabi Larsson <br/>
    Scott Cazan<br/>
    Sonja Lindgren<br/>
    Alice MacKenzie<br/>
    <br/>
  </p>
  <Heading3>Externa styrelsemedlemmar:</Heading3>
  <p>
    Anne Vigeland
  </p>
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
