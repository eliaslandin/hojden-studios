import { Post } from "../components/Post";
import { Heading2 } from "../components/Heading2";
import { PostDate } from "../components/Post/PostDate";
import { PostImage } from "../components/Post/PostImage";
import { PostBody } from "../components/Post/PostBody";
import { Heading3 } from "../components/Heading3";
import { Heading1 } from "../components/Heading1";
import { ParagraphLink } from "../components/ParagraphLink";
import { HojdenButton } from "../components/HojdenButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
            <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">Ansök här för att bli medlem</HojdenButton>
          </PostBody>
        </Post>

        <Post>
          <PostDate>23/10/02</PostDate>
          <Heading2>Dansklassen!</Heading2>
          <PostBody>
            Vår gemensamma hatfigur, vårt nöje och slit, vår gemenskap och våra förebilder. Vår fysiska ritual för yrkesidentitet och sensorisk uppmärksamhet. Våra gemensamma morgnar.<br/>
            <br/>
            Den 3-13 oktober, joina oss på klass med Pontus Pettersson och Robert Malmborg, på höjden i Östberga, Östbergatorget 21.<br/>
            <br/>
            <Heading3>Tis-fre 3-6 oktober, kl 10-11: Pontus Pettersson</Heading3>
            <Heading3>Mån-fre 9-13 oktober, kl 10-11: Robert Malmborg</Heading3>
            <br/>
            Klasserna är gratis, Pontus och Robert gör sin grej, alla som vill röra på sig, workshoppa, dansa med andra i denna lösa värld vi kallar dansvärlden är välkomna. Sprid ordet, föranmälan behövs inte, kom förbi!<br/>
            <br/>
            Dansklasserna anordnas som del av processen med ett nytt dansverk av Stina Nyberg med premiär i maj 2024.
          </PostBody>
        </Post>

        <Post>
          <PostDate>23/03/30</PostDate>
          <Heading2>höjden SESSIONS/DAGLIG TRÄNING</Heading2>
          <PostBody>
              höjden sessions is back with a series of workshops during april 2023. <ParagraphLink href="/daglig-traening">more info here.</ParagraphLink>
          </PostBody>
        </Post>

        <Post>
          <PostDate>23/04/22</PostDate>
          <Heading2>KULTURNATTEN</Heading2>
          <PostImage
            src="/hojden_kulturnatt_april_2023.jpg"
            alt="Höjden kulturnatt april 2023."
          />
          <PostBody>
            Under Kulturnatten bjuder det interdisciplinära konstnärshuset höjden studios in till en helkväll i konstens olika former. Ni är varmt välkomna för att uppleva live-musik och performance, titta på film och bildkonst, prova på magdans eller för att hänga med konstnärerna på höjden!<br/>
            <br/>
            <Heading3>Programpunkter</Heading3>
            18:00 - 18:30 — Musik och mingel!<br/>
            <br/>
            18:00 - 23:59 — Film: Eight eyed wheel av Paloma Madrid<br/>
            Längd: 5 minutes. Loopas under hela kvällen.<br/>
            <br/>
            18:00 - 23:59 — Utställning: Wunderwall<br/>
            Blandade verk av höjdens konstnärer.<br/>
            <br/>
            18:30 - 19:30 — Prova på magdans med Nasreen Aljanabi Larsson<br/>
            Inga förkunskaper krävs.<br/>
            <br/>
            20:00 - 21:00 — Musik performance: Scott Cazan<br/>
            <br/>
            21:00 - 22:00 — Live gig med osläppt musik: Rayo​<br/>
            <br/>
            22:00 - 23:59 — Dansgolv!<br/>
            <br/>
            <ParagraphLink href="https://kulturnattstockholm.se/event/hojden-studios-oppnar-dorrarna/" target="_blank">https://kulturnattstockholm.se/event/hojden-studios-oppnar-dorrarna/</ParagraphLink>
          </PostBody>
        </Post>

        <Post>
          <PostDate>22/10/24</PostDate>
          <Heading2>höjden IS LOOKING FOR NEW ARTISTS!</Heading2>
          <PostBody>
            höjden is an independent space for art run by artists. At höjden you can share office space and studios or you can rent your own room. We are searching for people interested in a collective context: artists, writers, producers and curators with an interest in working in an interdisciplinary and experimental space.<br/>
            <br/>
            <span className="italic">höjden offers you…</span><br/>
            <ul className="list-disc pl-8">
              <li>
                being a member of a community of all kinds of artists & culture workers.
              </li>
              <li>
                24/7 access to well equipped shared office area for the daily work as a freelancer.  
              </li>
              <li>
                bookable private meeting room, 25kr/hour.
              </li>
              <li>
                kitchen and hang-out area, well supplied with coffee & tea. 
              </li>
              <li>
                opportunity to book our 100m2 studio for the internal, and/or common are at-cost price of 100kr/hour weekdays, 50kr/hour weekends & evenings.
              </li>
              <li>
                Performance events, exhibition space, launch parties, annual festival & other events for all kinds of artists & culture workers.
              </li>
              <li>
                Discounted workshops such as: music production for stage, tech for stage, performance workshops. (see höjden sessions)
              </li>
            </ul>  
            <br/>
            To become an artist in the house you sign a service contract ("tjänstekontrakt") with höjden, which you can do as a private person or through your company. The service contract costs 200 SEK/month.<br/>
            <br/>
            When you become an artist in the house, you’re creating the atmosphere and place that is höjden together with everyone else. The possibility to create public and community events, house meetings, networks and opportunities for knowledge-sharing is open to all artists. And if you just need a nice place to work, it’s available!<br/>
            <br/>
            If interested, send a CV and a short personal letter to info@hojden.house telling us what type of art form you work with and why you want to be an active artist at höjden.<br/>
            <br/>
            <span className="italic">höjden was created 2019. höjden is run by Släktet Economic association. Coordinator: Anna Fischler, <ParagraphLink href="mailto:info@hojden.house">info@hojden.house</ParagraphLink>. In case of any questions, please email us!</span>
          </PostBody>
        </Post>
        
        
      </div>
    </main>
  );
}
