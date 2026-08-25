import type { Metadata } from "next"
import Link from "next/link"

import { CodeSnippet } from "@/components/code-snippet"
import { GuideArticle } from "@/components/guide-article"
import { howToJsonLd, JsonLd } from "@/lib/json-ld"
import { guideMetadata } from "@/lib/page-metadata"
import { SCREENSHOT_LOCATION_COMMANDS } from "@/lib/site"

export const metadata: Metadata = guideMetadata(
  "change-mac-screenshot-location"
)

const STEPS = [
  {
    name: "Create the folder",
    text: "mkdir -p ~/Pictures/Screenshots — any folder you own works.",
  },
  {
    name: "Write the preference",
    text: "defaults write com.apple.screencapture location ~/Pictures/Screenshots",
  },
  {
    name: "Restart SystemUIServer",
    text: "killall SystemUIServer so the screenshot service picks up the new path.",
  },
] as const

export default function ChangeScreenshotLocationPage() {
  return (
    <GuideArticle slug="change-mac-screenshot-location">
      <JsonLd
        data={howToJsonLd({
          name: "Change the Mac screenshot save location",
          description:
            "Use defaults write com.apple.screencapture location to save screenshots somewhere other than Desktop.",
          steps: STEPS,
        })}
      />

      <p>
        macOS drops screenshots on the Desktop unless you tell it otherwise.
        That fills the Desktop, and it is a folder some background tools
        cannot read without Full Disk Access. Move the save location.
      </p>

      <h2>Set a new folder</h2>
      <CodeSnippet>{SCREENSHOT_LOCATION_COMMANDS}</CodeSnippet>
      <ol>
        <li>
          <code>mkdir -p</code> creates the folder if it is missing.
        </li>
        <li>
          <code>defaults write com.apple.screencapture location</code> stores
          an absolute path in the screenshot preference domain.
        </li>
        <li>
          <code>killall SystemUIServer</code> reloads the service that honors
          that key. You do not need to log out.
        </li>
      </ol>
      <p>
        Take a screenshot. It should land in the new folder, not on the
        Desktop.
      </p>

      <h2>See the current location</h2>
      <CodeSnippet>
        {"defaults read com.apple.screencapture location"}
      </CodeSnippet>
      <p>
        If that key is unset, macOS uses <code>~/Desktop</code>. That is also
        what ocrogram watches: it reads this preference, then falls back to
        Desktop.
      </p>

      <h2>Reset to Desktop</h2>
      <CodeSnippet>{`defaults delete com.apple.screencapture location
killall SystemUIServer`}</CodeSnippet>

      <h2>Why ocrogram cares</h2>
      <p>
        The daemon only watches one folder. If you change the location after{" "}
        <code>ocrogram start</code>, run{" "}
        <code>ocrogram stop && ocrogram start</code> so it picks up the new
        path. Watching Desktop often needs Full Disk Access. A folder under
        Pictures usually does not. That is the workaround in{" "}
        <Link href="/#troubleshooting">troubleshooting</Link> when nothing
        lands on the clipboard.
      </p>
      <p>
        Next:{" "}
        <Link href="/#install">install ocrogram</Link> so each new file in
        that folder becomes clipboard text.
      </p>
    </GuideArticle>
  )
}
