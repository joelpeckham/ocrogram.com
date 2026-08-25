import type { FaqItem, HowToStep } from "@/lib/json-ld"
import { HEAD_INSTALL_COMMAND, LOCK_PATH, LOG_PATH } from "@/lib/site"

export const REQUIREMENTS = [
  {
    title: "macOS 14 Sonoma or later",
    detail:
      "The Swift helper targets macOS 14 so it can use Apple Vision with language correction and automatic language detection.",
  },
  {
    title: "Homebrew",
    detail:
      "ocrogram ships as a tap formula: brew install joelpeckham/ocrogram/ocrogram. Homebrew 6 asks you to trust third-party tap formulas the first time. The formula downloads a prebuilt binary for Apple silicon or Intel.",
  },
  {
    title: "A screenshot that writes a file",
    detail:
      "Cmd+Shift+3 and Cmd+Shift+4 work. Clipboard-only shortcuts (Cmd+Ctrl+Shift+3 / 4) never write a file, so ocrogram ignores them.",
  },
] as const

export const INSTALL_STEPS: readonly HowToStep[] = [
  {
    name: "Install ocrogram with Homebrew",
    text: "Run brew install joelpeckham/ocrogram/ocrogram. That taps joelpeckham/homebrew-ocrogram, downloads a prebuilt ocrogram and ocrogram-helper for your Mac, and puts them on your PATH.",
  },
  {
    name: "Start the login item",
    text: "Run ocrogram start. That writes a LaunchAgent at ~/Library/LaunchAgents/com.joelpeckham.ocrogram.plist and bootstraps it with launchctl so the daemon starts now and at every login.",
  },
  {
    name: "Take a normal screenshot",
    text: "Use Cmd+Shift+3 for the whole screen or Cmd+Shift+4 for a region. Wait a beat while the file settles and Apple Vision runs.",
  },
  {
    name: "Paste the text",
    text: "Cmd+V in any app. The recognized text is already on the clipboard. Nothing is uploaded.",
  },
]

export const COMMANDS = [
  {
    command: "ocrogram start",
    role: "Install and start the login item",
  },
  {
    command: "ocrogram stop",
    role: "Stop and remove the login item",
  },
  {
    command: "ocrogram daemon",
    role: "Background watcher. launchd runs this; you usually do not.",
  },
  {
    command: "ocrogram version",
    role: "Print the installed version. --version and -v work too.",
  },
] as const

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Does ocrogram upload my screenshots?",
    answer:
      "No. Apple Vision runs on your Mac. The helper never sends the image or the text to a server.",
  },
  {
    question: "Which languages does it recognize?",
    answer:
      "Apple Vision detects the language automatically and applies language correction. Whatever Live Text can read, ocrogram can read.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Nothing. ocrogram is free and MIT-licensed. The source is on GitHub.",
  },
  {
    question: "Does it work on Intel Macs?",
    answer:
      "Yes, if the Mac can run macOS 14. Homebrew downloads a prebuilt binary for Apple silicon or Intel.",
  },
  {
    question: "Does it work with CleanShot, Shottr, or other screenshot apps?",
    answer:
      "Yes, if that app writes an image file (.png, .jpg, .jpeg, .heic, .tiff) into the folder macOS uses for screenshots. ocrogram watches that folder, not a specific app.",
  },
  {
    question: "Do I need Screen Recording or Accessibility permission?",
    answer:
      "No. ocrogram never captures the screen. It watches files after macOS (or another tool) writes them. The permission that sometimes matters is Full Disk Access, and only if the screenshot folder is Desktop.",
  },
  {
    question: "How do I uninstall it?",
    answer:
      "Run ocrogram stop, then brew uninstall ocrogram. That removes the LaunchAgent and the binaries.",
  },
]

export const TROUBLESHOOTING = [
  {
    title: "Nothing lands on the clipboard",
    body: `The daemon could not read the screenshot folder. If that folder is Desktop, grant Full Disk Access to /opt/homebrew/bin/ocrogram (Apple silicon) or /usr/local/bin/ocrogram (Intel), then run ocrogram stop && ocrogram start. Or point screenshots at a folder you own — see the screenshot location guide.`,
  },
  {
    title: "Homebrew says Xcode is outdated",
    body: "Stable brew install does not compile. This only happens with brew install --HEAD, which builds from source. Update Xcode or the Command Line Tools to the version for your macOS. If an old /Applications/Xcode.app is sitting around after you switched to the CLT, remove it so Homebrew can find the tools it wants.",
  },
  {
    title: "I used Cmd+Ctrl+Shift+3 or 4",
    body: "Those shortcuts copy a screenshot to the clipboard and never write a file. ocrogram watches the filesystem, so it ignores them. Use Cmd+Shift+3 or Cmd+Shift+4 instead.",
  },
  {
    title: "I renamed the screenshot and it took a few seconds",
    body: "Default localized names (Screenshot, Bildschirmfoto, 截屏, and the rest) match immediately. A custom name waits until Spotlight sets kMDItemIsScreenCapture. ocrogram retries for a couple of seconds.",
  },
  {
    title: "I need to see what the daemon is doing",
    body: `launchd writes stdout and stderr to ${LOG_PATH}. Open that file after a failed screenshot. There is no status command.`,
  },
  {
    title: "It says it is already running",
    body: `A lock file at ${LOCK_PATH} keeps a second daemon from starting. If a previous process died badly, run ocrogram stop, delete that lock if it is still there, then ocrogram start.`,
  },
  {
    title: "I want the latest main, not the last release",
    body: `Run ${HEAD_INSTALL_COMMAND}. That still builds from source.`,
  },
] as const

export const GUIDES = [
  {
    slug: "copy-text-from-screenshot-mac",
    title: "How to copy text from a screenshot on Mac",
    description:
      "Live Text, Preview, and automatic OCR. Three ways to get text out of a Mac screenshot without retyping it.",
    datePublished: "2026-08-25",
  },
  {
    slug: "mac-ocr-from-terminal",
    title: "OCR from the terminal on macOS",
    description:
      "Run Apple Vision from the command line with ocrogram-helper, and how that compares to Tesseract.",
    datePublished: "2026-08-25",
  },
  {
    slug: "change-mac-screenshot-location",
    title: "Change the Mac screenshot save location",
    description:
      "Point macOS screenshots at any folder with defaults write com.apple.screencapture location.",
    datePublished: "2026-08-25",
  },
  {
    slug: "textsniper-alternatives",
    title: "Free TextSniper alternatives for Mac",
    description:
      "Compare TextSniper, Live Text, and ocrogram — a free, open-source tool that OCRs every screenshot automatically.",
    datePublished: "2026-08-25",
  },
  {
    slug: "apple-live-text-limitations",
    title: "Apple Live Text limitations (and how to automate OCR)",
    description:
      "Live Text needs a click and a drag every time. Here is what it will not do, and how to copy screenshot text automatically.",
    datePublished: "2026-08-25",
  },
] as const

export type Guide = (typeof GUIDES)[number]
export type GuideSlug = Guide["slug"]

export function guideBySlug(slug: GuideSlug): Guide {
  const guide = GUIDES.find((item) => item.slug === slug)
  if (guide === undefined) {
    throw new Error(`Unknown guide: ${slug}`)
  }
  return guide
}

export function guidePath(slug: GuideSlug): `/guides/${GuideSlug}` {
  return `/guides/${slug}`
}
