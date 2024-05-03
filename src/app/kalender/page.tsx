import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { PageContent } from "@/components/PageContent";
import { ParagraphLink } from "@/components/ParagraphLink";


export default function Page() {
  return (
    <PageContent className="sm:items-center">
      <Heading1 className="text-hojden-orange">Händer på höjden</Heading1>
      <Heading3>17 February - members party! 18:00-late</Heading3>
      <br/>
      <Heading3>1 March - höjden nights (afterwork) 17.00</Heading3>
      <br/>
      <Heading3>25-27 March - höjden sessions (workshop)</Heading3>
      <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>
      <br/>
      <Heading3>5 April - höjden nights (afterwork) 17.00</Heading3>
      <br/>
      <Heading3>9-11 April - höjden sessions (workshop)</Heading3>
      <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>
      <br/>
      <Heading3>16-18 April - höjden sessions (workshop)</Heading3>
      <p>Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink></p>
      <br/>
      <Heading3>27 April - höjden festival</Heading3>
      <p>Festival by höjdens members for all!</p>
      <br/>
      <Heading3>3 May - höjden nights (afterwork) 17.00</Heading3>
    </PageContent>
  );
}
