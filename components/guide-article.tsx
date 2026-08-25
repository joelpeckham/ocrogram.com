import type { ReactNode } from "react"
import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import type { GuideSlug } from "@/lib/content"
import { guideBySlug, guidePath } from "@/lib/content"
import {
  articleJsonLd,
  breadcrumbJsonLd,
  JsonLd,
  type FaqItem,
  faqJsonLd,
} from "@/lib/json-ld"

export function GuideArticle({
  slug,
  children,
  faq,
}: {
  slug: GuideSlug
  children: ReactNode
  faq?: readonly FaqItem[]
}) {
  const guide = guideBySlug(slug)
  const path = guidePath(guide.slug)
  const crumbs = [
    { name: "ocrogram", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path },
  ]

  return (
    <PageShell header className="gap-12">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={articleJsonLd({
          headline: guide.title,
          description: guide.description,
          path,
          datePublished: guide.datePublished,
        })}
      />
      {faq === undefined ? null : <JsonLd data={faqJsonLd(faq)} />}

      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link
                  href="/"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  ocrogram
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/guides"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{guide.title}</li>
            </ol>
          </nav>
          <h1 className="font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            {guide.title}
          </h1>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            {guide.description}
          </p>
        </header>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground [&_a]:underline-offset-4 [&_a]:hover:underline [&_code]:text-xs [&_h2]:font-heading [&_h2]:text-sm [&_h2]:font-medium [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-medium [&_li]:text-sm [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_p]:text-pretty [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </PageShell>
  )
}
