import type { Metadata } from "next"
import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { GUIDES, guidePath } from "@/lib/content"
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  JsonLd,
} from "@/lib/json-ld"
import { contentMetadata } from "@/lib/page-metadata"

const TITLE = "Guides"
const DESCRIPTION =
  "Mac screenshot OCR guides: copy text from a screenshot, change the save location, run Vision from the terminal, and compare TextSniper alternatives."
const PATH = "/guides"

export const metadata: Metadata = contentMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "website",
})

export default function GuidesPage() {
  return (
    <PageShell header className="gap-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "ocrogram", path: "/" },
          { name: "Guides", path: PATH },
        ])}
      />
      <JsonLd
        data={collectionPageJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: PATH,
        })}
      />

      <header className="flex flex-col gap-3">
        <p className="text-xs text-muted-foreground">
          <Link
            href="/"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            ocrogram
          </Link>
          <span aria-hidden> / </span>
          Guides
        </p>
        <h1 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          Guides
        </h1>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {DESCRIPTION}
        </p>
      </header>

      <ul className="flex flex-col gap-6">
        {GUIDES.map((guide) => (
          <li key={guide.slug}>
            <Link href={guidePath(guide.slug)} className="group flex flex-col gap-1">
              <span className="text-sm text-foreground underline-offset-4 group-hover:underline">
                {guide.title}
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {guide.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
