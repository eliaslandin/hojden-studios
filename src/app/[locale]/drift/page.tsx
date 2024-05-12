import { Heading1 } from "@/components/Heading1";
import { Heading2 } from "@/components/Heading2";
import { HojdenButton } from "@/components/HojdenButton";
import { PageContent } from "@/components/PageContent";
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({
  params,
}: {
  params: { locale: SupportedLocale };
}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <PageContent>
      <Heading1 className=" text-hojden-orange">
        drift - a series of dialogues between artists at höjden studios
      </Heading1>
      <p className="pb-6">
        drift is a proposal that aims to trace artistic and discursive
        tendencies moving through höjden studios.It simultaneously constitutes a
        forum where materials and ideas can transform, resonate or fall apart in
        the movement of recurring meetings.drift is a record of cacophonies
        landing slowly over time as artists at höjden studios invite for
        openings and points of connection.
      </p>
      <p className="pb-6">
        With Ar Utke Ács Austeja Vilkaityte Foad Arbabi Karina Sarkissova Maia
        Means Molly Engblom Oda Brekke Paloma Madrid Robin Dingemans Scott Cazan
        Sonja Lindgren Stina Ehn
      </p>
      <p className="pb-6">
        produced by Oda Brekke and Scott Cazan
        <br />
        graphic form by Edith Ekström
        <br />
        mastering by Foad Arbabi
      </p>
      <p className="pb-6">
        drift is made possible with support from Kulturrådet
      </p>

      <Heading2>
        Episode 2: How does it shape the way we dwell? Sonja Lindgren and Oda
        Brekke
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/3xxZ3PcTVrvriCuk5UiqUW?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        The second episode of drift dialogues starts in the middle of a
        practice. Sonja comes from architecture and Oda from dance, they
        discover they share many interests, but use different words. In this
        conversation they complicate each other's means of making sense of life,
        work and art in a society where consumption controls the way we see
        things. How can ideas and methods alter our perception? What are the
        limits of the formats we use when we work and how do they form the
        potential for thinking and memorizing?
      </p>
      <p className="pb-6">
        During November 2023 they met several times over a pile of papers and
        books in höjdens studio. Listen to them read, describe and discuss their
        own work as well as texts and performances by other artists and
        thinkers.
      </p>
      <p className="pb-6">
        Sonja Lindgren is an architect based in Stockholm, and works in the
        fields of architecture, design and scenography. She is educated at Umeå
        School of Architecture.
      </p>
      <p className="pb-6">
        Oda Brekke is a dance artist based in Stockholm, working internationally
        as a choreographer, writer and performer. Her choreographic work has
        been presented at MDT, Weld and Fylkingen in Stockholm, Bergen Kjøtt and
        Zagreb Museum of Contemporary Art and includes ‘When there’s only
        surface left’ (2021), ‘Cut: a choreo-essay’(2023) and ‘dead dead
        document’ (2024). Since 2018 she has organised a range of discursive
        formats and structures for collective spaces and processes.
      </p>
      <p className="pb-6">Works mentioned in the episode:</p>
      <p className="pb-6">
        <a
          href="https://www.skogen.pm/publication/oYXbtdaJbecXi3uxJ"
          target="_blank"
        >
          Object Making- Manon Santkin
        </a>
        <br />
        From the publication Art as Practice| Art as object
      </p>

      <p className="pb-6">
        <a href="https://odabrekke.com/Cut-a-choreo-essay" target="_blank">
          Cut: a choreo-essay- Oda Brekke
        </a>
        <br />
        Performed at 14.01.2023 Kafé Mix, höjden studios
      </p>

      <p className="pb-6">
        <a
          href="https://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-196662"
          target="_blank"
        >
          the deconstruction of the image of swedish domestic architecture
          through ‘marginalia’- Sonja Lindgren
        </a>
      </p>

      <p className="pb-6">
        <a
          href="https://www.alicechauchat.net/text-breastpiece.html"
          target="_blank"
        >
          The Breast piece- Alice Chauchat & Frédéric Gies
        </a>
      </p>
      <p className="pb-6">
        Translating the Essay into Film and Installation- Nora M. Alter
      </p>
      <p className="pb-6">Michael Taussig- Fieldwork Notebooks</p>
      <p className="pb-6">Sarah Vanhee- Oblivion</p>
      <p className="pb-6">
        <a
          href="https://www.gabrielmaher.xyz/wonderment-domastication"
          target="_blank"
        >
          "Wonderment Domastication"
        </a>
        , Gabriel A Maher
      </p>

      <Heading2>
        Episode 1: Words with many textures: Maia Means and Stina Ehn
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/show/7BHMoWkR9sTCO4OkUkzady?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        In the first episode of drift dialogues you hear a non-linear reading of
        a book Maia and Stina made together when they met in the studio at
        höjden November 2023. The reading is followed by a discussion some
        months later where they look back at the activities that led to and
        landed in the book.
      </p>
      <p className="pb-6">
        Amongst other things Maia invited Stina to join her in scores of
        listening, talking, writing and moving, adapted from her recent piece
        ‘fictions, stitched’ with Copenhagen based choreographer Max Wallmeier
        that was presented at Weld in Stockholm November 2023. Stina shared
        movement and writing practices, and proposed a performance score that
        took place around the whole house, adapted from her ongoing process with
        the Zürich based artist Sophie Germanier.
      </p>
      <p className="pb-6">
        STINA EHN (SE) works with dance and choreography based in Stockholm. Her
        work departs from experimental methods where steps and language inform
        one another and she often works in close collaboration with other
        artists. Her choreographic work has been presented at places such as
        Dance Nucleus Singapore, Weld Stockholm, HAUT in Copenhagen and
        Köttinspektionen in Uppsala. Stina has been a member of höjden studios
        since 2020 and part of organizing the performance event Kafé Mix since
        2022.
      </p>
      <p className="pb-6">
        MAIA MEANS (NO/DK) is a Stockholm-based freelance dancer who spends time
        between performance, text and organisational practices. The last years
        she has worked with choreographers such as Oda Brekke, Sindri Runudde,
        Björn Säfsten, Ellard/Lech and Mette Ingvartsen. Together with Max
        Wallmeier, she has created two books and the performance “fictions,
        stitched” that premiered in 2023. Means is part of running “höjden”, a
        self-organised space for artists in Stockholm.
      </p>
      <p className="pb-6 text-hojden-orange">More episodes coming soon...</p>

      <HojdenButton href="https://forms.gle/VATrpZTMH8vdaqpd8" target="_blank">
        {locale === "sv"
          ? "Ansök här för att bli medlem"
          : "Apply here to become a member"}
      </HojdenButton>
      <p className="py-6">
        höjden studios is an artist-run space for work and a shared context for
        artists and cultural workers to meet. Join us!
      </p>
    </PageContent>
  );
}
