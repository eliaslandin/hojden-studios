import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { Heading3 } from "@/components/Heading3";


export default function Page() {
  return (
    <PageContent>
      <Heading1 className="text-hojden-orange">Styrelsen</Heading1>
      <p>
      höjden drivs av Släktet Ekonomisk Förening.<br/>
      <br/>
      Föreningen startades våren 2018 och består verksamhetsåret 2023 av:
      </p>
      <br/>
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
    </PageContent>
  );
}
