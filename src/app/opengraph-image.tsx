import { ImageResponse } from "next/og";

/** Matches `icon.svg`: primary yellow tile, RF monogram — exported as PNG for OG/Twitter crawlers. */
export const alt = "Rafael Fernandes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            width: 320,
            height: 320,
            borderRadius: 70,
            background: "#f5c842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 128,
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
