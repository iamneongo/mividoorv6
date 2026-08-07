/* eslint-disable */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mivicomposite - Nhà máy cửa composite Mividoor",
  description:
    "Mividoor — Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm. Hơn 10.000 bộ cửa đã bàn giao trên toàn quốc.",
  icons: {
    icon: "/mividoor/logo.png",
    apple: "/mividoor/logo.png",
  },
  openGraph: {
    title: "Cửa composite Mividoor",
    description:
      "Cửa composite công nghệ Đức: Chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành 10 năm.",
    images: ["/mividoor/images/three-doors-showcase.webp"],
    type: "website",
    locale: "vi_VN",
    siteName: "Mivicomposite",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { TopBar } from "@/components/TopBar";
import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="vi" className="h-full antialiased">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Pattaya&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-full bg-background font-sans text-foreground">
          <TopBar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
