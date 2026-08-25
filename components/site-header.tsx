import Link from "next/link"

import { OcrogramLogo } from "@/components/ocrogram-logo"
import { GITHUB_URL } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 pt-8">
      <Link
        href="/"
        className="flex items-center gap-3 text-sm text-foreground underline-offset-4 hover:underline"
      >
        <OcrogramLogo className="size-8" />
        <span className="font-heading text-base font-medium">ocrogram</span>
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-4 text-xs">
        <Link
          href="/#install"
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Install
        </Link>
        <Link
          href="/guides"
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Guides
        </Link>
        <a
          href={GITHUB_URL}
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}
