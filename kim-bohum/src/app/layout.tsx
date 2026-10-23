import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.siteUrl),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.profile.name,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // iPhone 하단 안전 영역(safe-area) 계산에 필요
  themeColor: "#FAF8F5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
