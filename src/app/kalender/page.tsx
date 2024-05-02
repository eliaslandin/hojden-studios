import { Heading1 } from "@/components/Heading1";
import { Heading3 } from "@/components/Heading3";
import { ParagraphLink } from "@/components/ParagraphLink";
import { Post } from "@/components/Post";
import { PostBody } from "@/components/Post/PostBody";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center">
        <Post>
        <Heading1 className="pt-10 text-hojden-orange">Händer på höjden</Heading1>
          <PostBody>
            <Heading3>17 February - members party! 18:00-late</Heading3>
            <br/>
            <Heading3>1 March - höjden nights (afterwork) 17.00</Heading3>
            <br/>
            <Heading3>25-27 March - höjden sessions (workshop)</Heading3>
            Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink>
            <br/>
            <br/>
            <Heading3>5 April - höjden nights (afterwork) 17.00</Heading3>
            <br/>
            <Heading3>9-11 April - höjden sessions (workshop)</Heading3>
            Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink>
            <br/>
            <br/>
            <Heading3>16-18 April - höjden sessions (workshop)</Heading3>
            Read more here: <ParagraphLink href="https://en.hojden.house/daglig-traening">https://en.hojden.house/daglig-traening</ParagraphLink>
            <br/>
            <br/>
            <Heading3>27 April - höjden festival</Heading3>
            Festival by höjdens members for all!
            <br/>
            <br/>
            <Heading3>3 May - höjden nights (afterwork) 17.00</Heading3>
          </PostBody>
        </Post>
        
        
      </div>
    </main>
  );
}
