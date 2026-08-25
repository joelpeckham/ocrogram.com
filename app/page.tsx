import Link from "next/link"
import { RiEyeLine, RiFileCopyLine, RiScreenshotLine } from "@remixicon/react"

import { CodeSnippet } from "@/components/code-snippet"
import { InstallBlock } from "@/components/install-block"
import { OcrogramLogo } from "@/components/ocrogram-logo"
import { PageShell } from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  COMMANDS,
  FAQ_ITEMS,
  GUIDES,
  INSTALL_STEPS,
  REQUIREMENTS,
  TROUBLESHOOTING,
  guidePath,
} from "@/lib/content"
import {
  faqJsonLd,
  howToJsonLd,
  JsonLd,
  personJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld"
import {
  GITHUB_TAP_URL,
  GITHUB_URL,
  HEAD_INSTALL_COMMAND,
  LAUNCH_AGENT_LABEL,
  LOG_PATH,
  PLIST_PATH,
  SCREENSHOT_LOCATION_COMMANDS,
} from "@/lib/site"

const STEPS = [
  {
    title: "Watches screenshots",
    description:
      "The daemon watches the folder from your macOS screenshot location. A normal screenshot is enough.",
    icon: RiScreenshotLine,
  },
  {
    title: "Reads with Apple Vision",
    description:
      "A local helper runs on-device OCR. Nothing is uploaded. Text never leaves your Mac.",
    icon: RiEyeLine,
  },
  {
    title: "Lands on the clipboard",
    description:
      "The recognized text is copied automatically. Cmd+V pastes it anywhere.",
    icon: RiFileCopyLine,
  },
] as const

const SECTION_TITLE = "font-heading text-base font-medium"
const DETAILS_SUMMARY =
  "cursor-pointer text-sm text-foreground marker:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50"

export default function Page() {
  return (
    <PageShell header>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={howToJsonLd({
          name: "Install ocrogram",
          description:
            "Install ocrogram with Homebrew, start the login item, then copy text from any macOS screenshot.",
          steps: INSTALL_STEPS,
        })}
      />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      <section className="flex flex-col items-center gap-8 text-center">
        <OcrogramLogo className="size-40 sm:size-52" />
        <div className="flex flex-col items-center gap-4">
          <Badge variant="outline">macOS</Badge>
          <h1 className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
            ocrogram
          </h1>
          <p className="max-w-md text-balance text-lg text-foreground">
            Take a screenshot. Paste the text.
          </p>
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
            A set-and-forget Mac background tool. Install it, run{" "}
            <code className="text-foreground">ocrogram start</code>, leave it
            on as a login item. After that, a normal macOS screenshot puts
            the text on the clipboard.
          </p>
        </div>
        <div className="flex w-full max-w-xl flex-col items-stretch gap-3 text-left">
          <InstallBlock />
          <p className="text-center text-xs text-muted-foreground">
            <a
              href={GITHUB_URL}
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Source on GitHub
            </a>
          </p>
        </div>
      </section>

      <section id="how-it-works" className="flex scroll-mt-8 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>How it works</h2>
          <p className="text-xs text-muted-foreground">
            Private, on-device, macOS only.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <Card key={step.title} size="sm">
              <CardHeader>
                <step.icon className="size-4 text-primary" />
                <CardTitle>
                  <span className="mr-2 text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="requirements" className="flex scroll-mt-8 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>Requirements</h2>
          <p className="text-xs text-muted-foreground">
            Check these before you run brew.
          </p>
        </div>
        <ol className="flex flex-col gap-4">
          {REQUIREMENTS.map((item, index) => (
            <li key={item.title} className="flex flex-col gap-1">
              <p className="text-sm text-foreground">
                <span className="mr-2 text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground sm:pl-7">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="install" className="flex scroll-mt-8 flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>Install</h2>
          <p className="text-xs text-muted-foreground">
            Two commands. Then a normal screenshot.
          </p>
        </div>
        <InstallBlock />
        <ol className="flex flex-col gap-5">
          {INSTALL_STEPS.map((step, index) => (
            <li key={step.name} className="flex flex-col gap-1">
              <h3 className="text-sm text-foreground">
                <span className="mr-2 text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.name}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:pl-7">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm text-foreground">Commands</h3>
          <dl className="grid gap-3 sm:grid-cols-2">
            {COMMANDS.map((item) => (
              <div key={item.command} className="flex flex-col gap-1">
                <dt>
                  <code className="text-xs text-foreground">{item.command}</code>
                </dt>
                <dd className="text-xs leading-relaxed text-muted-foreground">
                  {item.role}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground">
          <p>
            <code className="text-foreground">ocrogram start</code> writes{" "}
            <code className="text-foreground">{PLIST_PATH}</code> and
            bootstraps LaunchAgent{" "}
            <code className="text-foreground">{LAUNCH_AGENT_LABEL}</code>.
            launchd runs <code className="text-foreground">ocrogram daemon</code>{" "}
            at login. Logs go to{" "}
            <code className="text-foreground">{LOG_PATH}</code>.
          </p>
          <p>
            The formula lives in{" "}
            <a
              href={GITHUB_TAP_URL}
              className="text-foreground underline-offset-4 hover:underline"
            >
              joelpeckham/homebrew-ocrogram
            </a>
            . Homebrew 6 asks you to trust third-party tap formulas. To compile
            latest <code className="text-foreground">main</code> from source
            instead of the last release:
          </p>
          <CodeSnippet>{HEAD_INSTALL_COMMAND}</CodeSnippet>
        </div>
      </section>

      <section id="troubleshooting" className="flex scroll-mt-8 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>Troubleshooting</h2>
          <p className="text-xs text-muted-foreground">
            Most failures are a folder the daemon cannot read, or a screenshot
            that never wrote a file.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {TROUBLESHOOTING.map((item) => (
            <details
              key={item.title}
              className="group border-b border-border py-3"
            >
              <summary className={DETAILS_SUMMARY}>{item.title}</summary>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </details>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs leading-relaxed text-muted-foreground">
            If Desktop is locked down, point screenshots at a folder you own:
          </p>
          <CodeSnippet>{SCREENSHOT_LOCATION_COMMANDS}</CodeSnippet>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Step-by-step:{" "}
            <Link
              href="/guides/change-mac-screenshot-location"
              className="text-foreground underline-offset-4 hover:underline"
            >
              change the Mac screenshot save location
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="faq" className="flex scroll-mt-8 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>FAQ</h2>
          <p className="text-xs text-muted-foreground">
            Short answers. Source of truth is the repo.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-border py-3"
            >
              <summary className={DETAILS_SUMMARY}>{item.question}</summary>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className={SECTION_TITLE}>Guides</h2>
          <p className="text-xs text-muted-foreground">
            Screenshot OCR questions people actually type.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={guidePath(guide.slug)}
                className="group flex flex-col gap-1"
              >
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
      </section>
    </PageShell>
  )
}
