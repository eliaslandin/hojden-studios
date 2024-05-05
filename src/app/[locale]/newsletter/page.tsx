import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";
import { Heading3 } from "@/components/Heading3";


export default function Page() {
  return (
    <PageContent>
      <Heading1 className="text-hojden-orange">Nyhetsbrev</Heading1>
      <Heading3>Vill du hålla dig uppdaterad om vad som händer på höjden?
      <br/>Anmäl dig till vårt nyhetsbrev!</Heading3>
    </PageContent>
  );
}
