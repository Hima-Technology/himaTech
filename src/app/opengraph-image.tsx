import { ImageResponse } from "next/og";

export const dynamic = "force-static";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: "#0A2463",
            color: "white",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          H
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "white", letterSpacing: -2 }}>
          Hima Technologies
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#AFBDE5", marginTop: 20, fontWeight: 600 }}>
          Software &middot; AI &middot; Data &middot; Cybersecurity
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)", marginTop: 12 }}>
          Founded in Zanzibar
        </div>
      </div>
    ),
    { ...size }
  );
}
