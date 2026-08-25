import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"

export const alt = "ocrogram — Take a screenshot. Paste the text."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const LOGO_VIEWBOX = { width: 1044, height: 1078 }
const LOGO_HEIGHT = 320
const LOGO_WIDTH = Math.round(
  (LOGO_VIEWBOX.width / LOGO_VIEWBOX.height) * LOGO_HEIGHT
)

async function getLogoSrc() {
  const svg = (
    await readFile(join(process.cwd(), "public/ocrogram.svg"), "utf8")
  )
    .replaceAll('width="100%"', `width="${LOGO_VIEWBOX.width}"`)
    .replaceAll('height="100%"', `height="${LOGO_VIEWBOX.height}"`)
    .replace("<svg ", '<svg fill="#f4f0e6" ')

  const png = await sharp(Buffer.from(svg))
    .resize(LOGO_WIDTH * 2, LOGO_HEIGHT * 2)
    .png()
    .toBuffer()

  return `data:image/png;base64,${png.toString("base64")}`
}

export default async function OpenGraphImage() {
  const logoSrc = await getLogoSrc()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1814",
          color: "#f4f0e6",
        }}
      >
        <img src={logoSrc} width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontFamily: "Georgia, ui-serif, serif",
            marginTop: 40,
            letterSpacing: "-0.03em",
          }}
        >
          ocrogram
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 16,
            opacity: 0.75,
          }}
        >
          Take a screenshot. Paste the text.
        </div>
      </div>
    ),
    size
  )
}
