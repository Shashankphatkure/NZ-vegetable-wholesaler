import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#173c2c",
          color: "#f6f4ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8dbf52",
          }}
        >
          Fresh Produce · New Zealand
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.08,
            maxWidth: 900,
          }}
        >
          Fresh produce. Delivered with confidence.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "rgba(246,244,234,0.75)",
          }}
        >
          {siteConfig.name} — Pukekohe, New Zealand
        </div>
      </div>
    ),
    { ...size },
  );
}
