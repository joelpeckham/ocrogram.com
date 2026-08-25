import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { GITHUB_URL } from "@/lib/site"

const LINKS = [
  { href: "/#install", label: "Install" },
  { href: "/#requirements", label: "Requirements" },
  { href: "/#troubleshooting", label: "Troubleshooting" },
  { href: "/#faq", label: "FAQ" },
  { href: "/guides", label: "Guides" },
] as const

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 pb-10">
      <Separator />
      <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} ocrogram
          <span aria-hidden> · </span>
          MIT
          <span aria-hidden> · </span>
          made by{" "}
          <a
            href="https://jpeckham.com"
            rel="author"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            jpeckham.com
          </a>
        </p>
        <nav aria-label="Site">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_URL}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
