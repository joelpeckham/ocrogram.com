import type { Metadata } from "next"
import Link from "next/link"

import { CodeSnippet } from "@/components/code-snippet"
import { GuideArticle } from "@/components/guide-article"
import { guideMetadata } from "@/lib/page-metadata"
import { INSTALL_COMMANDS } from "@/lib/site"

export const metadata: Metadata = guideMetadata("copy-text-from-screenshot-mac")

export default function CopyTextFromScreenshotPage() {
  return (
    <GuideArticle slug="copy-text-from-screenshot-mac">
      <p>
        You took a screenshot of a Slack thread, an error dialog, or a PDF page
        you cannot select. You want the words, not the pixels. On a Mac you have
        three honest options.
      </p>

      <h2>1. Live Text on the screenshot itself</h2>
      <p>
        Open the image in Preview, Photos, or Quick Look. Hover the pointer over
        the words. The cursor turns into a text cursor. Drag, then Cmd+C.
      </p>
      <p>
        This is built in and accurate. It is also manual. Every screenshot is a
        new click, drag, and copy. If you do this ten times a day, you will get
        tired of it. See{" "}
        <Link href="/guides/apple-live-text-limitations">
          Apple Live Text limitations
        </Link>{" "}
        for what it will not do.
      </p>

      <h2>2. Preview → Tools → Copy Text</h2>
      <p>
        In Preview, open the screenshot and choose Tools → Copy Text. That
        dumps every recognized string onto the clipboard in one shot. Faster
        than dragging, still one app launch per image.
      </p>

      <h2>3. Automatic OCR with ocrogram</h2>
      <p>
        ocrogram watches the folder macOS already uses for screenshots. Take a
        normal Cmd+Shift+3 or Cmd+Shift+4. Apple Vision reads the file on your
        Mac. The text is on the clipboard by the time you switch windows.
      </p>
      <CodeSnippet>{INSTALL_COMMANDS}</CodeSnippet>
      <p>
        Full walkthrough, requirements, and troubleshooting:{" "}
        <Link href="/#install">install ocrogram</Link>. Nothing is uploaded.
        Clipboard-only shortcuts (Cmd+Ctrl+Shift+3 / 4) never write a file, so
        they never trigger OCR.
      </p>

      <h2>Which one should you use?</h2>
      <ul>
        <li>
          One-off grab from a photo you already have open: Live Text or Preview.
        </li>
        <li>
          You already screenshot things all day and want the text every time:
          ocrogram.
        </li>
        <li>
          You need a hotkey that OCRs a region without saving a file: look at{" "}
          <Link href="/guides/textsniper-alternatives">
            TextSniper alternatives
          </Link>
          . ocrogram is not that tool.
        </li>
      </ul>
    </GuideArticle>
  )
}
