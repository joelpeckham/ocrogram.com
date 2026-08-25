import type { Metadata } from "next"
import Link from "next/link"

import { CodeSnippet } from "@/components/code-snippet"
import { GuideArticle } from "@/components/guide-article"
import type { FaqItem } from "@/lib/json-ld"
import { guideMetadata } from "@/lib/page-metadata"
import { INSTALL_COMMANDS } from "@/lib/site"

export const metadata: Metadata = guideMetadata("textsniper-alternatives")

const FAQ: readonly FaqItem[] = [
  {
    question: "Is there a free TextSniper alternative for Mac?",
    answer:
      "Yes. Apple Live Text is free and built in. ocrogram is a free, MIT-licensed Homebrew tool that OCRs every screenshot automatically with Apple Vision. It does not replace TextSniper's region hotkey — it replaces the repeat copy-from-screenshot workflow.",
  },
  {
    question: "Does ocrogram work like TextSniper?",
    answer:
      "No. TextSniper is a hotkey you press to select a region. ocrogram watches the screenshot folder and copies text after you take a normal macOS screenshot. Different habit, same Vision engine.",
  },
  {
    question: "Does ocrogram upload screenshots?",
    answer:
      "No. Recognition runs on-device via Apple Vision. The image and the text stay on your Mac.",
  },
]

export default function TextSniperAlternativesPage() {
  return (
    <GuideArticle slug="textsniper-alternatives" faq={FAQ}>
      <p>
        TextSniper is a paid Mac app: press a hotkey, drag a rectangle, get
        text. It is good at that job. It is not the only way to get there, and
        it is not free.
      </p>

      <h2>What you are actually buying</h2>
      <p>
        Most paid Mac OCR apps sell a capture overlay. The OCR underneath is
        usually Apple Vision, the same API Preview and Live Text already use.
        You pay for the overlay, the menu bar icon, and the habit.
      </p>

      <h2>Free options</h2>
      <h3>Apple Live Text</h3>
      <p>
        Built in since Monterey. Open an image, drag the words, copy. Zero
        install. Every capture is still a manual selection. Details:{" "}
        <Link href="/guides/apple-live-text-limitations">
          Live Text limitations
        </Link>
        .
      </p>
      <h3>Preview → Copy Text</h3>
      <p>
        Open the screenshot, Tools → Copy Text. Fine for one image. Not a
        workflow.
      </p>
      <h3>ocrogram</h3>
      <p>
        Free, MIT,{" "}
        <a href="https://github.com/joelpeckham/ocrogram">open source</a>.
        You keep taking the screenshots you already take. A background
        LaunchAgent OCRs each new file and puts the text on the clipboard.
        No overlay, no extra hotkey, no account.
      </p>
      <CodeSnippet>{INSTALL_COMMANDS}</CodeSnippet>
      <p>
        <Link href="/#install">Full install tutorial</Link>, including
        requirements and troubleshooting.
      </p>

      <h2>Honest comparison</h2>
      <ul>
        <li>
          <strong>Hotkey, drag a region, no file on disk:</strong> TextSniper
          (paid) or similar overlay apps. ocrogram will not do this.
        </li>
        <li>
          <strong>You already screenshot with Cmd+Shift+4:</strong> ocrogram.
          The file is the trigger.
        </li>
        <li>
          <strong>One image, once:</strong> Live Text. Do not install anything.
        </li>
        <li>
          <strong>Script or pipeline:</strong>{" "}
          <Link href="/guides/mac-ocr-from-terminal">
            ocrogram-helper from the terminal
          </Link>
          , or Tesseract if you need Linux too.
        </li>
      </ul>
      <p>
        If your muscle memory is &quot;press a dedicated OCR hotkey,&quot;
        stay with TextSniper. If your muscle memory is &quot;screenshot, then
        wish the text was already on the clipboard,&quot; install ocrogram.
      </p>
    </GuideArticle>
  )
}
