import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero, profile, site } from "./data/portfolio";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors match the site's design tokens in globals.css.
const INK = "#09090f";
const SURFACE = "#130f21";
const LINE = "#2a2142";
const BODY = "#b9b2d0";
const BRIGHT = "#f4f1ff";
const ACCENT = "#a78bfa";
const ACCENT_STRONG = "#7c3aed";

const photoFile = await readFile(join(process.cwd(), "public", hero.photo));
const photo = `data:image/jpeg;base64,${photoFile.toString("base64")}`;

export default function Image() {
  const [first, highlight, last] = hero.lines;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: `radial-gradient(circle at 85% 20%, ${ACCENT_STRONG}55 0%, ${INK} 55%)`,
          color: BODY,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 650 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              border: `2px solid ${LINE}`,
              background: SURFACE,
              color: BRIGHT,
              fontSize: 26,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: ACCENT }} />
            Open to internships
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 36,
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.05,
              color: BRIGHT,
            }}
          >
            <span>{first}</span>
            <span style={{ color: ACCENT }}>{highlight}</span>
            <span>{last}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 44 }}>
            <span style={{ fontSize: 38, fontWeight: 600, color: BRIGHT }}>{profile.name}</span>
            <span style={{ marginTop: 6, fontSize: 28 }}>
              {site.url.replace("https://", "")}
            </span>
          </div>
        </div>

        <img
          src={photo}
          alt=""
          width={340}
          height={425}
          style={{
            width: 340,
            height: 425,
            objectFit: "cover",
            borderTopLeftRadius: 170,
            borderTopRightRadius: 170,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
            border: `4px solid ${ACCENT_STRONG}`,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
