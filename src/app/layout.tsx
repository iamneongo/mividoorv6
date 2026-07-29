import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mivicomposite - Nhà máy cửa composite Mividoor công nghệ Đức",
  description:
    "Mividoor — cửa composite công nghệ Đức: chống nước, chống mối mọt, cách âm cách nhiệt, bảo hành lên đến 10 năm. Hơn 10.000 bộ cửa đã bàn giao trên toàn quốc.",
  icons: {
    icon: "/mividoor/logo.png",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
