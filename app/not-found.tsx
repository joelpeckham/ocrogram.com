import Link from "next/link"

import { PageShell } from "@/components/page-shell"

export default function NotFound() {
  return (
    <PageShell header>
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl font-medium tracking-tight">
          Page not found
        </h1>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          That URL is not on ocrogram.com.
        </p>
        <p>
          <Link
            href="/"
            className="text-sm text-foreground underline-offset-4 hover:underline"
          >
            Back to ocrogram
          </Link>
        </p>
      </div>
    </PageShell>
  )
}
