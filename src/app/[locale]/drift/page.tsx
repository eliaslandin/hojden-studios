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
        Episode 9: Art and Life: Andrew Hartwidge and Fatima Kassius
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/5etb2JqMvQp8ujMUZ4G1S1?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        Fatima is the curator behind galleri höjden and wants to connect with
        the neighbors. Andrew is a dramaturg and dancer, he enjoys feeding
        people and grapples with what it means to be a performer who is also a
        parent. In the 9th episode of drift they address their prioritization of
        social relationships over artistic careers and question how context can
        become part of a performance or an exhibition. Could collectivity gain
        more importance when working with art and is it possible to hold space
        for nurturing within artistic spheres?
      </p>
      <p className="pb-6">
        Fatima Kassius is an artist working with painting and installation. Her
        work examines memory, architecture and space and often results in site
        specific installations that reach outside of the art space. She has a
        BFA from Royal Institute of Art in Stockholm 2020. In 2021 she did her
        solo show Lokál at Kulturhuset Möbeln in Tierp and she also exhibited in
        group shows at Örebro Läns museum, Konsthall C, Konstakademien. She
        often works in curatorial and collective projects and has recently
        started galleri höjden together with Josephine Kamoun Johansson.
      </p>
      <p className="pb-6">
        Andrew Hardwidge is a dance artist, dramaturg and researcher. He is
        curious about the entanglements of aesthetic practice, life making and
        political cosmologies. Recently he has been speaking with people about
        healing, about authorship and questions of liberation.
      </p>

      <Heading2>
        Episode 8: A radio show: Salka Ardal Rosengren and Lisa Schåman
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/22bfPyPxwcCm6KIPZtHQnw?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        Salka and Lisa met over the course of three days to spend time with each
        other and dance in höjden’s studio. In the eight episode of drift you
        are invited to become the listener of their radio show where they unpack
        some dance related concerns. As the show unfolds we follow them through
        a range of perspectives and are made aware of the many sides of what is
        going on. They underline unspoken rules and zoom in and out of their
        experience of doing and observing dance. What is actually the impact of
        having an audience and what is dance as a practice if it doesn't reach
        anyone?
      </p>
      <p>
        Works/People mentioned:
        <br />
        Peter Mills
      </p>
      <p>
        Lisa Schåman is a dancer based in Stockholm. For the past few years, she
        has been working with choreographers such as Oda Brekke, Peter Mills,
        Malin Elgán, Carima Neusser, and Ellen Söderhult. Her artistic process
        is shaped by somatic practices, score-dance, games and play, as well as
        theories and philosophies related to dance and aesthetics, and texts
        written by dance makers. Lisa is a member of höjden, an artist syndicate
        in Östberga.
      </p>
      <p>
        Salka Ardal Rosengren jobbar med dans och performance. Hon är född och
        uppvuxen i Stockholm men flyttade till Bryssel där hon utbildade sig på
        P.A.R.T.S. (2006-2010). Salka har skapat verk tillsammans med Mikko
        Hyvönen (Trash Talk), Nicholas Hoffman (The Thing with a Hook) och
        Andrew Hardwidge (Subbodybodysub). Som dansare har hon jobbat och
        turnerat verk internationellt med bland andra: Ezster Salamon, Xavier Le
        Roy, Boris Charmatz, Daniel Linehan, Sarah Vanhee, Tino Sehgal, Gunilla
        Heilborn, Malin Élgan, Rosalind Goldberg, Liz Kinoshita och Salva
        Sanchis. Våren 2021 tog hon en master i Nya performativa praktiker på
        Stockholms Konstnärliga Högskola. Efter sin master skapade hon Lasting
        Figures som har spelats på Weld, Flockfestivalen, Atalante och åker
        vidare på Riksteaterturné hösten 2025.
      </p>

      <Heading2>
        Episode 7: Collage and sound sampling as drifting states: Daniela
        Serafimova and Karin Roberts
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/1xQdn69LTfIGOJaglkn750?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        How is the state of drifting a fundamental part of being in a creative
        process? What does it feel like and how long can it last?
      </p>
      <p>
        Karins art and design practice meets Danielas song writing in her home
        on a warm summer day. They get to know each other through the proposed
        notion of drifting as they spend a day making both a song and a collage
        together. Listen to them discuss the process and their different
        approaches to music, language and images.
      </p>
      <p>
        Karin Roberts is a graphic designer and collage artist, working part
        time as a project manager for Nordberg Movement. She is also a
        co-founder of ARTmovement, an organisation that creates artistic
        meet-ups and co-creates art.
      </p>
      <p>
        Daniela Serafimova is a Stockholm-based musician, writer and teacher.
        She produces her own music and is known for her multi-layered sound. She
        has collaborated with electronic DnB producers such as London
        Elektricity and Voltage on Hospital Records (UK). Her first single
        “Borderlands” was released 2020 at Cherish Label (SE), and the self
        produced EP “Saving Grace” was released in 2022. Currently Daniela is
        working on her debut album, a soft folk-jazz piano and vocal record with
        lyrics in Swedish.
      </p>
      <p>
        Works mentioned:
        <br />
        Heather - Bill Cobham
        <br />
        Lars Norén - Dagböcker
        <br />
      </p>

      <Heading2>
        Episode 6: Walking in between skills and healing: Deike Ladwig and Yari
        Stilo
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/3ooApj9oRoG8iTDkz8Xskp?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        What does it mean to listen through touch, to listen to a movement? In
        the sixth episode of drift dialogues clay and dance meet in a
        centrifugal force through push, pull and the possibility of flying off.
      </p>
      <p className="pb-6">
        Yari has a background in ballet and Deike in lighting design, but both
        of them have discovered other worlds. Across several days and repeated
        walks a conversation emerges. It questions the status of art and the
        artist and discusses practices, tools and approaches that prioritize
        aesthetic exploration over disciplined performance and perfect results.
      </p>
      <p className="pb-6">
        Yari Stilo received daily dance training from the age of 13 to 32.
        Thanks to his 84 auditions as a dancer/performer, he could empathize
        with, support, and bond with hundreds of dancers. From 2005, he danced
        in several European theater-based companies inspired by or that adapted
        ballet traditions. Since 2012, he has performed increasingly within
        experimental dance, participatory performances, choreographic
        installations, and performance art contexts. In 2018, he was reborn as a
        dancer when he started tango as an amateur and follower, the role
        traditionally practiced by women. Yari has been working as a personlig
        assistent for five years.
      </p>
      <p className="pb-6">
        Deike Ladwig, born in Hamburg 1979, came to Stockholm in 2004 as an
        exchange student but stayed ever since. Her background lies in
        architecture and architectural lighting design. She has been
        passionately designing lighting for public spaces both out in the city
        space and inside public buildings for almost 20 years. Now is a time for
        change which led Deike to study Expressive Arts Therapy at Hälsans Hus.
        Thus Art and Healing is her new quest and wonder. She works with clay
        sculpturing and throwing in particular, which brings joy and time for
        connecting hands, body and soul. Watercolor paint and oil pastels is
        another medium for expression that she loves.
      </p>

      <Heading2>Episode 5: Listening to feelings, exploring sound</Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/7lxsGbg6cAhs5JuLw3eEPk?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        Ar and Foad are both active within the queer collective fake daughter
        and have organised artistic programs, parties and political actions
        together in and beyond höjden studios since its start in 2019. In the
        fifth episode of drift dialogues they discuss their approaches to music
        and choreography with a curiosity towards explorations of listening and
        feeling without a set aim.
      </p>
      <p className="pb-6">
        During the winter of 2024 Foad shared a practice with Ar directing focus
        towards the small units in music, opening a restricted frame to play
        with variation, texture and harmony. Ar invited Foad into a
        visualisation practice that explored the forms we see the world through
        by defining emotions as imaginary entities with texture, colour and
        place.
      </p>
      <p className="pb-6">
        Foad Arbabi is a composer, sound designer and song writer. As a self
        taught producer they have over a decade of experience creating music for
        performing arts. Foad’s body of work is unique in tone and wide in
        expression, as of 2024 Foad is working on commissions and self initiated
        projects whilst undertaking a formal education in musical composition.
      </p>
      <p className="pb-6">
        Ar Utke Ács is an artist working within contemporary dance and an
        expanded understanding of choreography. They work with the poetics and
        politics of the body in the seams of performance, dramaturgy, text,
        installation and the imaginary. Throughout the past years, they have
        created works focusing on affect landscapes and subversive poetics of
        positioning oneself non-verbally, including the performance echoes that
        was co-produced with MDT (SE) and Dansehallerne (DK). Now they are
        working on a series of works from the perspective of speculative
        characters and worlds built on lived experience of dancing with chronic
        illness.
      </p>
      <p className="pb-6">
        <strong>Works mentioned:</strong>
        <br />
        Pauline Oliveros’ deep listening practice / scores
        <br />
        Alvin Lucier - I Am Sitting In A Room
        <br />
      </p>

      <Heading2>
        Episode 4: Secret missions, epic places: Karina Sarkissova and Molly
        Engblom
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/2VdLK2QydSbpUv87sBN3Hl?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        In the fourth episode of drift dialogues Karina and Molly discuss their
        practices, and their use of text as well as the role that spaces outside
        of the studio and institutions play in their practices of dance,
        curating and poetry.
      </p>
      <p className="pb-6">
        They touch upon the use of montage and collage and dig into their
        motives for making art departing from two meetings in the studio at
        höjden, right in the beginning of 2024 where they exchanged practices by
        sharing, leaking, and finding common points of interest.
      </p>
      <p className="pb-6">
        Karina Sarkissova is an independent curator and dramaturge based in
        Uppsala and Stockholm. She graduated in 2012 at the School for New Dance
        Development in Amsterdam (SNDO) and in 2019 at Dutch Art Institute
        (DAI). Karina is together with Pontus Pettersson curating the annual
        festival My Wild Flag, as well as curating the performing arts program
        at Norbergfestival with Olof Runsten. Karina is a cofounder of höjden in
        Östberga, a space for artistic production. Karinas practice is
        dramaturgical, choreographic and curatorial; she is regularly working
        with other artists’ work and develops choreographic contexts.
      </p>
      <p className="pb-6">
        molly is a dancer, choreographer and poet based in Stockholm with a BFA
        in Dance performance from Stockholm University of the Arts (2019). molly
        works experimentally with dance, voice and text to make work that takes
        place in different spaces; like a body of water shifts shape, the
        choreographic leaks in and out of stage rooms, art galleries, magazines,
        and unconventional places e.g. outdoors. Through strange, tender and
        shivering fictions she wants to create situations where relational and
        poetic encounters can take place. Currently she is investigating the
        poetics of monstrosity, abjection and desire.
      </p>
      <p className="pb-6">
        <strong>Works mentioned:</strong>
        <br />
        And then it got legs, Jeroen Peeters
        <br />
        Generative Fictions, or How Dance May Teach Us Ethics, Alice Chauchat,
        Post dance book
        <br />
        Red doc, Anne Carson
        <br />
        Kafé mix, a series of performance evenings at höjden arranged by Jennie
        Bergsli, Stina Ehn, Lisen Pousette
        <br />
        Edith Ekström, graphic designer
        <br />
        INTER, by Karina Sarkissova. Commissioned work for the project Myths and
        realities, a lesbian oddysé
      </p>

      <Heading2>
        Episode 3: A four year old birch tree told me: Paloma Madrid and Robin
        Dingemans
      </Heading2>
      <p className="pb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/5IcfxdDnptvJZWwPLZS2lL?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>

      <p className="pb-6">
        October 2023 Paloma and Robin met in Vinterviken where they engaged in a
        shared curiosity towards the ancient wisdom of forests and gardens. In
        the third episode of drift dialogues you are invited to listen to their
        practices, unfolding through mantras and stories in a rainy afternoon.
      </p>
      <p className="pb-6">
        Paloma Madrid/Mar Lobos has been working in the dance field since 2005
        as a choreographer, dance educator, dancer and artist. Recognized as an
        active and emerging artist, she is often described in the field as the
        "poetical body investigator," exploring the body as a medium in constant
        (r)evolution and a producer of consciousness. Madrid's work consistently
        delves into the intersection of collaborative art and social
        choreography. Pioneer of Communitydance in Sweden, working with
        participatory embodied processes since 2008 at Botkyrka community dance
        and theater. Paloma is artistic director of Rosales, a dance company and
        platform that investigates the spaces between oppression and resistance
        to gather knowledge and establish a practical and theoretical framework
        through participatory methods, moving away from polarized dance
        practices. Her collaborations include commissioned work for Riksteatern,
        Moderna Museet, Dramaten, The Swedish Television, SKH. Engaged in the
        longlife process with the collective Tvillingskapet and V.C.V.T. Paloma
        holds a Master of Fine Arts in Choreography and a Bachelor of Arts in
        Dance Pedagogy from DOCH-SKH Stockholm University of Arts, Sweden.
      </p>
      <p className="pb-6">
        Robin Dingemans is a choreographer, performer & teacher from Aotearoa, a
        Pākehā based in Europe since 1999. Robin's work includes dance for the
        stage, non-traditional performance spaces, video, social dances, work
        for children, symposiums, and writing. He often collaborates with a
        broad spectrum of artists, including dancers, dramaturges, composers,
        writers, illustrators, video designers, psychologists, and more. His
        practice is centered around playing with creative processes and outputs
        which are often sociologically informed. Since 2015 explicitly committed
        to anti-racist/bigoted imperatives informed by his tricultural
        childhood, life in hyper diverse London and racism in Sweden and
        internationally. His works have been commissioned and presented by many
        different organisations in the UK, Sweden and internationally. He has
        interpreted and collaborated with a broad spectrum of contemporary dance
        choreographers and theatre directors since 1996, performing in works of
        Weld Company, Fevered Sleep, Station House Opera, DV8 Physical Theatre,
        Wally Cardona, Lito Walkey, Requardt & Rosenberg, Ricochet, Protein,
        Theatre Rites, Yvon Bonenfant, les gens d'Uterpan and many more. He has
        created works, supervised, taught improvisation, composition and
        creative practices at many Conservatoires, Universities and a broad
        spectrum of professional and community contexts internationally.
      </p>
      <p className="pb-6">
        Works mentioned in the episode
        <br />
        <a href="https://www.iwgia.org/en/news/4511-building-alliances-in-pandemic-times-the-zapatista-journey-through-europe.html">
          Gloria E Anzaldua- Light in the dark, zapatistas movement
        </a>
      </p>

      <p className="pb-6">Photo: Javier Lopez</p>

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
          src="https://open.spotify.com/embed/episode/6x5oT9yWMEMafBhilRFp8b?utm_source=generator&theme=0"
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
