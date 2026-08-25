import { GUIDES, guidePath } from "@/lib/content"
import { alsoByJoelMarkdown } from "@/lib/product-graph"
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site"

export function buildLlmsTxt(): string {
  const guideLines = GUIDES.map(
    (guide) =>
      `- [${guide.title}](${SITE_URL}${guidePath(guide.slug)}): ${guide.description}`
  ).join("\n")

  return [
    "# ocrogram",
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "ocrogram is a set-and-forget macOS background tool. After `ocrogram start`, a normal screenshot writes a file, Apple Vision OCRs it on-device, and the text lands on the clipboard. Cmd+V pastes it anywhere. Nothing is uploaded.",
    "",
    "## Install",
    "",
    "```bash",
    "brew install joelpeckham/ocrogram/ocrogram",
    "ocrogram start",
    "```",
    "",
    "Requires macOS 14 (Sonoma) or later, Homebrew, and a Swift 6 toolchain (Xcode or Command Line Tools). Homebrew compiles from source and installs Go as a build dependency. `ocrogram start` writes a LaunchAgent at `~/Library/LaunchAgents/com.joelpeckham.ocrogram.plist`. `ocrogram stop` removes it. Logs: `~/Library/Logs/ocrogram.log`.",
    "",
    "## Commands",
    "",
    "- `ocrogram start` — install and start the login item",
    "- `ocrogram stop` — stop and remove the login item",
    "- `ocrogram daemon` — background watcher (what launchd runs)",
    "- `ocrogram version` — print the installed version",
    "",
    "There is no `status` command. Clipboard-only screenshot shortcuts (Cmd+Ctrl+Shift+3 / 4) never write a file and are ignored.",
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): Product, requirements, install tutorial, troubleshooting, FAQ`,
    `- [Guides](${SITE_URL}/guides): Index of Mac OCR and screenshot guides`,
    guideLines,
    "",
    "## Notes for crawlers",
    "",
    "- Brand name is ocrogram; people search for Mac screenshot OCR, copy text from a screenshot, TextSniper alternatives, and Live Text automation",
    "- Source: https://github.com/joelpeckham/ocrogram",
    "- Homebrew tap: https://github.com/joelpeckham/homebrew-ocrogram",
    "- License: MIT",
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
    alsoByJoelMarkdown("ocrogram"),
  ].join("\n")
}
