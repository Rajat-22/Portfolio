import { ImageResponse } from "next/og";

export const alt = "Rajat Sharma — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0b",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "#c9f24b",
            color: "#0a0a0b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          RS
        </div>
        <div
          style={{
            color: "#a0a0ab",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Rajat Sharma
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            color: "#f2f2f3",
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Building thoughtful digital experiences through engineering.
        </div>
        <div style={{ color: "#a0a0ab", fontSize: 28 }}>
          Senior Software Engineer · Full-Stack Developer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #232329",
          paddingTop: 28,
          color: "#6c6c78",
          fontSize: 20,
          letterSpacing: 2,
        }}
      >
        <div>REACT · NEXT.JS · VUE · TYPESCRIPT</div>
        <div>rajatsharma-portfolio.vercel.app</div>
      </div>
    </div>,
    size,
  );
}
