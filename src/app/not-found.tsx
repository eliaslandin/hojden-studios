'use client'

import { Heading1 } from "@/components/Heading1";
import { PageContent } from "@/components/PageContent";

const content = {
  en: () => (
    <>
      <Heading1>Page not found</Heading1>
    </>
  ),
  sv: () => (
    <>
      <Heading1>Sidan hittades inte</Heading1>
    </>
  )
}

export default function NotFound() {

  return (
    <PageContent>
      { content["en"]() }
    </PageContent>
  )
}