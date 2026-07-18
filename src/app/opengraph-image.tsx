import { ImageResponse } from "next/og";

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
          backgroundColor: "#0A2463",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(255,107,107,0.25), transparent 45%)",
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
            backgroundColor: "#FF6B6B",
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
        <div style={{ display: "flex", fontSize: 32, color: "#FF9E9E", marginTop: 20, fontWeight: 600 }}>
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
