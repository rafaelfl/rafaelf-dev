import { ImageResponse } from "next/og";

/** Apple touch icon — rounded tile + monogram, aligned with `icon.svg` / OG branding. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f1e",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 36,
            background: "#f5c842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#0a0f1e",
              letterSpacing: "-0.08em",
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            RF
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
