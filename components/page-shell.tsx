import type { ReactNode } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

export function PageShell({
  children,
  header = false,
  className,
}: {
  children: ReactNode
  header?: boolean
  className?: string
}) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:ring-1 focus:ring-ring"
      >
        Skip to content
      </a>
      {header ? <SiteHeader /> : null}
      <main
        id="content"
        className={cn(
          "mx-auto flex w-full max-w-3xl flex-1 flex-col gap-20 px-6 py-16 sm:py-24",
          header && "pt-10 sm:pt-14",
          className
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
