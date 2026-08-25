export const SITE_URL = "https://ocrogram.com"
export const SITE_NAME = "ocrogram"
export const SITE_VERSION = "0.0.1"

export const SITE_TITLE = "ocrogram — screenshot OCR to clipboard for Mac"

export const SITE_DESCRIPTION =
  "Take a screenshot. Paste the text. A set-and-forget Mac tool that OCRs screenshots onto your clipboard with Apple Vision. Nothing is uploaded."

export const SITE_TAGLINE = "Take a screenshot. Paste the text."

export const SITE_KEYWORDS = [
  "macos screenshot ocr",
  "copy text from screenshot mac",
  "screenshot to clipboard ocr",
  "apple vision ocr",
  "textsniper alternative",
  "live text automate",
  "ocr screenshot macos",
  "on-device ocr mac",
  "ocrogram",
] as const

export const GITHUB_URL = "https://github.com/joelpeckham/ocrogram"
export const GITHUB_TAP_URL = "https://github.com/joelpeckham/homebrew-ocrogram"
export const LICENSE_URL = "https://opensource.org/licenses/MIT"

export const INSTALL_COMMANDS = `brew install joelpeckham/ocrogram/ocrogram
ocrogram start`

export const HEAD_INSTALL_COMMAND = "brew install --HEAD joelpeckham/ocrogram/ocrogram"

export const SCREENSHOT_LOCATION_COMMANDS = `mkdir -p ~/Pictures/Screenshots
defaults write com.apple.screencapture location ~/Pictures/Screenshots
killall SystemUIServer`

export const LOG_PATH = "~/Library/Logs/ocrogram.log"
export const LOCK_PATH = "~/Library/Application Support/ocrogram/daemon.lock"
export const PLIST_PATH = "~/Library/LaunchAgents/com.joelpeckham.ocrogram.plist"
export const LAUNCH_AGENT_LABEL = "com.joelpeckham.ocrogram"
