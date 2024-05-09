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
