import Image from "next/image";
import { Header } from "./components/Header";
import Link from "next/link";
import { Post } from "./components/Post";
import { Heading2 } from "./components/Heading2";
import { PostDate } from "./components/Post/PostDate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-3xl py-10">Välkommen till höjden studios!</h1>
        <Post>
          <PostDate>24/03/22</PostDate>
          <Heading2>höjden sessions</Heading2>
          <Link href="/daglig-traening" className="flex relative justify-center pt-4 max-w-full max-h-96">
            <Image
              src="/hojden_sessions_spring_2024.jpg"
              width={672}
              height={0}
              alt="Höjden sessions spring 2024."
              className="object-contain"
            />
          </Link>
          <p className="pt-4 text-base sm:text-lg">
            RSVP to <Link className="underline" href="mailto:hojdenbokning@gmail.com">hojdenbokning@gmail.com</Link> and write höjden sessions in the subject line, and which workshop you’d like to attend.
            <br/><br/>
            All workshops are held at höjden - Östbergatorget 21.
            <br/><br/>
            <h3 className="font-bold">Ronald Salas: Tech and lights for stage</h3>
            25th of March 11-14<br/>
            26th of March 11-14
            <br/><br/>
            <h3 className="font-bold">Lisa Schåman: dance</h3>
            25th of March 14.30-16.30<br/>
            26th of March 14.30-16.30<br/>
            27th of March 14.30-16.30<br/>
            <br/><br/>
            <h3 className="font-bold">Erik Valentin Berg: psychosomatics’ and dance - making a space that moves us</h3>
            9th of April 11-14<br/>
            10th of April 11-14<br/>
            <br/><br/>
            <h3 className="font-bold">Gergo D. Farkas: body scam mediation sessions</h3>
            9th of April 17-19<br/>
            10th of April 17-19<br/>
            11th of April 17-19<br/>
            <br/><br/>
            <h3 className="font-bold">Rayo: Music production</h3>
            16th of April 18-20<br/>
            17th of April 18-20<br/>
            18th of April 18-20<br/>
          </p>
        </Post>
        <div className="w-full max-w-2xl">
          
        </div>

      </div>
    </main>
  );
}
