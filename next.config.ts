import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  ...(isDevelopment ? {} : { output: "export" as const }),
  basePath: "/mividoor",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "development"
    ? {
        async rewrites() {
          return [
            // The production export is hosted in /mividoor on cPanel. Mirror
            // its public asset paths in Next's local development server.
            {
              source: "/images/:path*",
              destination: "/mividoor/images/:path*",
            },
            {
              source: "/fonts/:path*",
              destination: "/mividoor/fonts/:path*",
            },
            {
              source: "/videos/:path*",
              destination: "/mividoor/videos/:path*",
            },
            {
              source: "/catalogue/:path*",
              destination: "/mividoor/catalogue/:path*",
            },
            {
              source: "/pdfjs/:path*",
              destination: "/mividoor/pdfjs/:path*",
            },
            {
              source: "/:file(favicon.png|apple-touch-icon.png|logo.png)",
              destination: "/mividoor/:file",
            },
            {
              source: "/cms/:path*",
              destination: "https://mividoor.com/cms/:path*",
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
