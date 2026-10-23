import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";
export const alt = siteConfig.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const font = await readFile(join(process.cwd(), "src/app/fonts/Pretendard-Bold.otf"));
  const { profile } = siteConfig;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 80px", background: "#1E3A5F", color: "#FFFFFF", fontFamily: "Pretendard" }}>
        <div style={{ width: 72, height: 8, borderRadius: 4, background: "#F4A261", marginBottom: 40 }} />
        <div style={{ fontSize: 32, color: "#F4A261" }}>{`${profile.title} · ${profile.company}`}</div>
        <div style={{ fontSize: 96, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85 }}>{profile.tagline}</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Pretendard", data: font, weight: 700, style: "normal" }] }
  );
}
