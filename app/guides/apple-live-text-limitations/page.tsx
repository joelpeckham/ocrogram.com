import type { Metadata } from "next"
import Link from "next/link"

import { CodeSnippet } from "@/components/code-snippet"
import { GuideArticle } from "@/components/guide-article"
import { guideMetadata } from "@/lib/page-metadata"
import { INSTALL_COMMANDS } from "@/lib/site"

export const metadata: Metadata = guideMetadata("apple-live-text-limitations")

export default function LiveTextLimitationsPage() {
  return (
    <GuideArticle slug="apple-live-text-limitations">
      <p>
        Live Text is the right default. It is fast, private, and already on
        the Mac. People look for another tool when they notice it is a
        gesture, not a pipeline.
      </p>

      <h2>What Live Text will not do</h2>
      <ul>
        <li>
          It will not copy text when you take a screenshot. You still have to
          open the image (or click the thumbnail) and select.
        </li>
        <li>
          It will not run in the background. There is no login item, no folder
          watch, no &quot;always OCR screenshots&quot; switch.
        </li>
        <li>
          It will not expose a first-party CLI. Shortcuts can get you partway
          there; a shell script cannot call &quot;Live Text&quot; the way it
          can call <code>tesseract</code>.
        </li>
        <li>
          It will not help if you never look at the screenshot. The text stays
          in the pixels until you go get it.
        </li>
      </ul>
      <p>
        None of that is a bug. Live Text is a pointer tool. The gap is
        automation.
      </p>

      <h2>Automate it with ocrogram</h2>
      <p>
        ocrogram uses the same Apple Vision API Live Text uses. The difference
        is the trigger: a new file in your screenshot folder, not a click.
        Take Cmd+Shift+3 or 4. Wait a beat. Cmd+V.
      </p>
      <CodeSnippet>{INSTALL_COMMANDS}</CodeSnippet>
      <p>
        Recognition stays on-device.{" "}
        <Link href="/#install">Install, requirements, and troubleshooting</Link>
        .
      </p>

      <h2>When to keep using Live Text</h2>
      <p>
        Photos you did not just capture — a camera roll, a downloaded PNG,
        a page in Safari — still belong to Live Text. ocrogram only watches
        the screenshot folder. For a one-off image, open it and drag. For
        the tenth error dialog of the afternoon, let the daemon have it.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/guides/copy-text-from-screenshot-mac">
            How to copy text from a screenshot on Mac
          </Link>
        </li>
        <li>
          <Link href="/guides/textsniper-alternatives">
            Free TextSniper alternatives
          </Link>
        </li>
        <li>
          <Link href="/guides/mac-ocr-from-terminal">
            OCR from the terminal
          </Link>
        </li>
      </ul>
    </GuideArticle>
  )
}
