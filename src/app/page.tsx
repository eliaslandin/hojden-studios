import Image from "next/image";
import { Header } from "./components/Header";
import Link from "next/link";
import { Post } from "./components/Post";
import { Heading2 } from "./components/Heading2";
import { PostDate } from "./components/Post/PostDate";
import { PostImage } from "./components/Post/PostImage";
import { PostBody } from "./components/Post/PostBody";
import { Heading3 } from "./components/Heading3";
import { Heading1 } from "./components/Heading1";
import { ParagraphLink } from "./components/ParagraphLink";
import { HojdenButton } from "./components/HojdenButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <div className="container flex flex-col items-center">
        <Heading1 className="py-10">Välkommen till höjden studios!</Heading1>
        <Post>
          <PostDate>24/03/22</PostDate>
          <Heading2>höjden sessions</Heading2>
          <PostImage
            src="/hojden_sessions_spring_2024.jpg"
            alt="Höjden sessions spring 2024."
            href="/daglig-traening"
          />
          <PostBody>
            RSVP to <ParagraphLink href="mailto:hojdenbokning@gmail.com">hojdenbokning@gmail.com</ParagraphLink> and write höjden sessions in the subject line, and which workshop you'd like to attend.
            <br/><br/>
            All workshops are held at höjden - Östbergatorget 21.
            <br/><br/>
            <Heading3>Ronald Salas: Tech and lights for stage</Heading3>
            25th of March 11-14<br/>
            26th of March 11-14<br/>
            <br/>
            <Heading3>Lisa Schåman: dance</Heading3>
            25th of March 14.30-16.30<br/>
            26th of March 14.30-16.30<br/>
            27th of March 14.30-16.30<br/>
            <br/>
            <Heading3>Erik Valentin Berg: psychosomatics' and dance - making a space that moves us</Heading3>
            9th of April 11-14<br/>
            10th of April 11-14<br/>
            <br/>
            <Heading3>Gergo D. Farkas: body scam mediation sessions</Heading3>
            9th of April 17-19<br/>
            10th of April 17-19<br/>
            11th of April 17-19<br/>
            <br/>
            <Heading3>Rayo: Music production</Heading3>
            16th of April 18-20<br/>
            17th of April 18-20<br/>
            18th of April 18-20<br/>
          </PostBody>
        </Post>

        <Post>
          <PostDate>24/01/30</PostDate>
          <Heading2>Cultural workers unite at höjden studios!</Heading2>
          <PostBody>
            höjden studios is an artist-run space for work and a shared context for artists and cultural workers to meet. Join us!<br />
            The current government is making it harder for artists to create. Rents are higher, funding is reduced, less art is shown at venues, and fewer artists are sharing less money. We want to resist the push towards individualisation and competition. Us artists at höjden want a space where we share resources and support each other as a thriving community of artists. If we come together we can be a stronger voice.<br />
            <br />
            <Heading3>Stronger together at höjden studios!</Heading3>
            höjden calls on more members for the survival of an important space for artists. We need spaces where we can meet and organize for the arts field to remain diverse and thriving. Join us!!<br />
            höjden studios is an artist-run platform for art production. We call on the broader cultural field to join and support the existence of the house.<br />
            <br />
            <Heading3>Tough times for arts - let's unite at höjden studios!</Heading3>
            Instead of exclusive and expensive, inclusive and cheap!<br />
            Many artists and spaces for art are struggling to survive. höjden is not an exception. As one of the few artist-run spaces with a dance studio in Stockholm, höjden has an important, irreplaceable position. We see the need for this space to continue to exist; to be a place for artists to do art as well as gather and organize. Instead of raising the prices to follow the market, we will reduce them significantly to create a space where everyone can participate.  A space where we can support each other in daily struggles and be a strong collective voice.<br />
            <br />
            <HojdenButton href="/">Ansök här för att bli medlem</HojdenButton>
          </PostBody>
        </Post>
        
        
      </div>
    </main>
  );
}
