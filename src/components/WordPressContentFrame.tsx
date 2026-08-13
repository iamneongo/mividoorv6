"use client";

import { useEffect, useRef, useState } from "react";

const WORDPRESS_BLOCK_CSS = "https://mividoor.com/cms/wp-includes/css/dist/block-library/style.min.css";
const WORDPRESS_THEME_CSS = "https://mividoor.com/cms/wp-includes/css/dist/block-library/theme.min.css";

type WordPressContentFrameProps = {
  html: string;
  sourceUrl?: string;
};

function createDocument(html: string, headAssets = "") {
  return `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="https://mividoor.com/cms/" />
    ${headAssets || `<link rel="stylesheet" href="${WORDPRESS_BLOCK_CSS}" /><link rel="stylesheet" href="${WORDPRESS_THEME_CSS}" />`}
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; }
      body {
        color: #1e1e1e;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 16px;
        line-height: 1.65;
      }
      img, video { height: auto; max-width: 100%; }
      .wp-block-image.is-resized img { max-width: none; }
      .wp-block-columns { align-items: initial; display: flex; flex-wrap: wrap; gap: 2em; }
      .wp-block-column { flex-basis: 0; flex-grow: 1; min-width: 0; overflow-wrap: break-word; }
      .wp-block-spacer { clear: both; }
      @media (max-width: 781px) {
        .wp-block-columns:not(.is-not-stacked-on-mobile) { flex-direction: column; }
        .wp-block-column { flex-basis: 100% !important; }
        .wp-block-image.is-resized img { max-width: 100%; }
      }
    </style>
  </head>
  <body><main class="wp-content">${html}</main></body>
</html>`;
}

export function WordPressContentFrame({ html, sourceUrl }: WordPressContentFrameProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(800);
  const [sourceDocument, setSourceDocument] = useState<{ html: string; assets: string }>({ html, assets: "" });

  useEffect(() => {
    let active = true;
    if (!sourceUrl) {
      setSourceDocument({ html, assets: "" });
      return () => { active = false; };
    }

    fetch(sourceUrl, { cache: "no-store" })
      .then((response) => response.text())
      .then((page) => {
        const parsed = new DOMParser().parseFromString(page, "text/html");
        const content = parsed.querySelector(".wp-block-post-content, .entry-content");
        const assets = Array.from(parsed.head.querySelectorAll('link[rel="stylesheet"], style'))
          .map((node) => {
            if (node.tagName.toLowerCase() !== "link") return node.outerHTML;
            const link = node as HTMLLinkElement;
            return `<link rel="stylesheet" href="${new URL(link.href, sourceUrl).href}" />`;
          })
          .join("\n");
        if (active && content) setSourceDocument({ html: content.innerHTML, assets });
      })
      .catch(() => {
        if (active) setSourceDocument({ html, assets: "" });
      });

    return () => { active = false; };
  }, [html, sourceUrl]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const resize = () => {
      const document = frame.contentDocument;
      if (!document) return;
      setHeight(Math.max(320, document.documentElement.scrollHeight));
    };

    frame.addEventListener("load", resize);
    const timer = window.setTimeout(resize, 500);
    return () => {
      frame.removeEventListener("load", resize);
      window.clearTimeout(timer);
    };
  }, [html]);

  return (
    <iframe
      ref={frameRef}
      title="Nội dung bài viết"
      srcDoc={createDocument(sourceDocument.html, sourceDocument.assets)}
      onLoad={() => {
        const document = frameRef.current?.contentDocument;
        if (document) setHeight(Math.max(320, document.documentElement.scrollHeight));
      }}
      style={{ height, width: "100%" }}
      className="block border-0"
    />
  );
}
