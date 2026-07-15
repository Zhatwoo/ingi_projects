import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0f172a 0%, #131b2e 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#855300",
            marginBottom: 24,
          }}
        >
          Unified HR &amp; Workflow Powerhouse
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          LoopWork + DeskHRX
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          One platform for project management and HR. Bundle both, save 30%.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
