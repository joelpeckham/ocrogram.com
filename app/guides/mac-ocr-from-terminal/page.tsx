import type { Metadata } from "next"
import Link from "next/link"

import { CodeSnippet } from "@/components/code-snippet"
import { GuideArticle } from "@/components/guide-article"
import { guideMetadata } from "@/lib/page-metadata"
import { INSTALL_COMMANDS } from "@/lib/site"

export const metadata: Metadata = guideMetadata("mac-ocr-from-terminal")

export default function MacOcrFromTerminalPage() {
  return (
    <GuideArticle slug="mac-ocr-from-terminal">
      <p>
        Most Mac OCR tools are GUIs. If you already live in a terminal, you
        want a command that takes a path and prints text. ocrogram ships that
        command as <code>ocrogram-helper</code>.
      </p>

      <h2>Install the helper</h2>
      <p>
        Homebrew puts both binaries on your PATH: <code>ocrogram</code> (the
        daemon) and <code>ocrogram-helper</code> (the Vision wrapper).
      </p>
      <CodeSnippet>{INSTALL_COMMANDS}</CodeSnippet>
      <p>
        You can skip <code>ocrogram start</code> if you only want the CLI.
        The helper does not need the LaunchAgent.
      </p>

      <h2>The contract</h2>
      <CodeSnippet>{"ocrogram-helper /path/to/image.png"}</CodeSnippet>
      <ul>
        <li>Prints recognized text to stdout.</li>
        <li>Copies that text to the clipboard.</li>
        <li>Exit 0 if it found text.</li>
        <li>Exit 1 if the image had no text.</li>
        <li>Exit 2 on usage or IO errors.</li>
      </ul>
      <p>
        Formats: PNG, JPEG, HEIC, TIFF. The helper uses{" "}
        <code>VNRecognizeTextRequest</code> at the accurate level, with
        language correction and automatic language detection. Same engine as
        Live Text. Nothing leaves the machine.
      </p>

      <h2>Pipe it</h2>
      <CodeSnippet>{`ocrogram-helper ~/Desktop/Screenshot\\ 2026-08-25.png > notes.txt
ocrogram-helper ./error.png && pbpaste | pbcopy`}</CodeSnippet>
      <p>
        The second line is a no-op that still proves the clipboard path works.
        In a script, check <code>$?</code> before you assume there is text.
      </p>

      <h2>Compared to Tesseract</h2>
      <p>
        <code>brew install tesseract</code> then{" "}
        <code>tesseract image.png stdout</code> is the usual answer. It works
        on any OS, takes language packs, and is easy to pin in CI. On a Mac
        that already has Vision, you pay for that portability with extra
        setup and, on screenshots of UI chrome, worse accuracy.
      </p>
      <p>
        Use Tesseract when you need the same binary on Linux. Use{" "}
        <code>ocrogram-helper</code> when you want Apple&apos;s engine from a
        shell, or when you also want{" "}
        <Link href="/#install">the screenshot watcher</Link> sitting behind
        it.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/guides/copy-text-from-screenshot-mac">
            How to copy text from a screenshot on Mac
          </Link>
        </li>
        <li>
          <Link href="/#requirements">Requirements and install</Link>
        </li>
      </ul>
    </GuideArticle>
  )
}
