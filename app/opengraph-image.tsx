import { ImageResponse } from "next/og"

export const alt = "ocrogram — Take a screenshot. Paste the text."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
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
        <div
          style={{
            display: "flex",
            width: 168,
            height: 168,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#111111",
              transform: "rotate(18deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 22,
              background: "#fff100",
              transform: "rotate(8deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 48,
              background: "#ffffff",
              transform: "rotate(8deg)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontFamily: "Georgia, ui-serif, serif",
            marginTop: 56,
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
