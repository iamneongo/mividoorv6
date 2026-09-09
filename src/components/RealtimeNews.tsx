"use client";

import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { NewsItem } from "@/types";

const API_URL = "/cms/wp-json/wp/v2/posts?_embed=1&per_page=100&orderby=date&order=desc";

type ApiPost = {
  slug: string;
  link?: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  jetpack_featured_media_url?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: Array<Array<{ name: string; taxonomy: string }>>;
  };
};

function decodeHtml(value: string) {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

function getSameOriginArticleUrl(postUrl?: string) {
  if (!postUrl) return undefined;

  try {
    const sourceUrl = new URL(postUrl, window.location.origin);
    const cmsPathIndex = sourceUrl.pathname.indexOf("/cms/");

    // WordPress still returns its historic .com permalink. Loading through the
    // local /cms proxy keeps the iframe same-origin, so its real Elementor
    // height can be measured instead of falling back to the fixed 640px height.
    if (cmsPathIndex >= 0) {
      return `${sourceUrl.pathname.slice(cmsPathIndex)}${sourceUrl.search}${sourceUrl.hash}`;
    }
  } catch {
    // Keep the original URL as a last-resort fallback.
  }

  return postUrl;
}

function mapPost(post: ApiPost): NewsItem {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  return {
    slug: post.slug,
    title: decodeHtml(post.title.rendered),
    excerpt: decodeHtml(post.excerpt.rendered),
    content: post.content.rendered,
    category: terms.find((term) => term.taxonomy === "category")?.name ?? "Tin tức",
    date: new Intl.DateTimeFormat("vi-VN", { month: "long", year: "numeric" }).format(new Date(post.date)),
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? post.jetpack_featured_media_url,
    wordpressUrl: getSameOriginArticleUrl(post.link),
  };
}

function NewsThumbnail({ article }: { article: NewsItem }) {
  const placeholder = (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E3A5F] px-4 text-center text-white"
      aria-hidden={Boolean(article.image)}
    >
      <span className="text-xs font-medium tracking-[0.2em]">MIVIDOOR</span>
      <span className="mt-1 text-[10px] font-medium tracking-[0.14em] text-white/70">TIN TỨC</span>
    </div>
  );

  return (
    <div
      className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#1E3A5F]"
      role={article.image ? undefined : "img"}
      aria-label={article.image ? undefined : `Ảnh minh họa cho ${article.title}`}
    >
      {placeholder}
      {article.image ? (
        <img
          src={article.image}
          alt={`Ảnh minh họa cho ${article.title}`}
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.classList.add("opacity-0");
          }}
        />
      ) : null}
    </div>
  );
}

function currentSlug() {
  const querySlug = new URLSearchParams(window.location.search).get("post");
  if (querySlug) return querySlug;

  const parts = window.location.pathname.split("/").filter(Boolean);
  const index = parts.indexOf("tin-tuc");
  return index >= 0 ? parts[index + 1] : undefined;
}

function applyEmbeddedArticleStyles(document: Document) {
  if (document.getElementById("mividoor-news-font")) return;

  const style = document.createElement("style");
  style.id = "mividoor-news-font";
  style.textContent = `
    @font-face {
      font-family: "Google Sans Flex";
      src: url("/mividoor/fonts/google-sans-400.ttf") format("truetype");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    @font-face {
      font-family: "Google Sans Flex";
      src: url("/mividoor/fonts/google-sans-500.ttf") format("truetype");
      font-style: normal;
      font-weight: 500;
      font-display: swap;
    }
    @font-face {
      font-family: "Google Sans Flex";
      src: url("/mividoor/fonts/google-sans-700.ttf") format("truetype");
      font-style: normal;
      font-weight: 700 900;
      font-display: swap;
    }
    body,
    .elementor,
    .elementor p,
    .elementor h1,
    .elementor h2,
    .elementor h3,
    .elementor h4,
    .elementor h5,
    .elementor h6,
    .elementor a,
    .elementor li,
    .elementor blockquote,
    .elementor figcaption,
    .elementor td,
    .elementor th,
    .elementor span:not(.elementor-button-icon) {
      font-family: "Google Sans Flex", sans-serif !important;
    }
  `;
  document.head.appendChild(style);
}

function resizeEmbeddedArticle(event: React.SyntheticEvent<HTMLIFrameElement>) {
  const iframe = event.currentTarget;

  try {
    const document = iframe.contentDocument;
    if (!document?.body) return;

    applyEmbeddedArticleStyles(document);

    const updateHeight = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        640,
      );
      iframe.style.height = `${height}px`;
    };

    updateHeight();
    new ResizeObserver(updateHeight).observe(document.body);
  } catch {
    // Cross-origin WordPress pages keep the safe fallback height.
  }
}

export function RealtimeNews() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [slug, setSlug] = useState<string>();

  useEffect(() => {
    setSlug(currentSlug());
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("WordPress API unavailable");
        const posts = (await response.json()) as ApiPost[];
        if (active) {
          setArticles(posts.map(mapPost).filter((article) => article.slug));
          setError(false);
        }
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    const timer = window.setInterval(load, 60_000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  const article = slug ? articles.find((item) => item.slug === slug) : undefined;

  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-28 pb-20 min-h-[50vh]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            {slug ? (
              <article className="mx-auto max-w-[820px] pt-4">
                <a href="/tin-tuc/" className="inline-flex mb-8 text-sm font-medium uppercase tracking-wider text-ink/60 hover:text-brand">Trở lại tin tức</a>
                {loading ? <p>Đang tải bài viết...</p> : article ? (
                  <>
                    <div className="flex gap-4 text-sm font-medium uppercase tracking-wider text-brand mb-6"><span>{article.category}</span><span>•</span><span>{article.date}</span></div>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] mb-8">{article.title}</h1>
                    <p className="text-lg md:text-xl text-ink/70 leading-relaxed font-medium mb-12">{article.excerpt}</p>
                    <div className="border-t border-black/10 pt-10">
                      {article.wordpressUrl ? (
                        <iframe
                          title={article.title}
                          src={article.wordpressUrl}
                          className="block h-[640px] w-full border-0"
                          onLoad={resizeEmbeddedArticle}
                          scrolling="no"
                        />
                      ) : (
                        <div className="wp-content" dangerouslySetInnerHTML={{ __html: article.content }} />
                      )}
                    </div>
                  </>
                ) : <p>Không tìm thấy bài viết này.</p>}
              </article>
            ) : (
              <>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
                  <h1 className="text-4xl font-medium tracking-tight text-ink md:text-6xl leading-[1.1]">Tin tức & <br /><span className="text-[#2563EB] accent-serif font-normal text-3xl md:text-[56px] inline-block mt-2">Sự kiện</span></h1>
                  <p className="max-w-md text-lg text-ink/70 md:text-right pb-4 md:pb-8">Cập nhật những thông tin mới nhất về Mividoor, các hoạt động triển lãm, hội thảo và xu hướng thiết kế nội thất.</p>
                </div>
                {loading ? <p>Đang tải bài viết từ CMS...</p> : error ? <p>Không thể kết nối CMS lúc này.</p> : (
                  <div className="flex flex-col border-t border-black/10">
                    {articles.map((item) => (
                      <a
                        key={item.slug}
                        href={`/tin-tuc/?post=${encodeURIComponent(item.slug)}`}
                        className="group flex flex-col gap-5 border-b border-black/10 px-6 py-8 transition-colors hover:bg-black/5 md:-mx-6 md:grid md:grid-cols-[minmax(18rem,22rem)_minmax(0,1fr)] md:gap-10 md:py-10"
                      >
                        <NewsThumbnail article={item} />
                        <div className="flex min-w-0 flex-col gap-3 md:pt-1">
                          <h3 className="line-clamp-2 text-2xl font-medium leading-[1.15] tracking-tight text-ink transition-colors group-hover:text-brand md:text-[28px]">{item.title}</h3>
                          <p className="line-clamp-2 text-base leading-relaxed text-ink/60 md:text-lg">{item.excerpt}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-ink/50">
                            <span>{item.category}</span><span aria-hidden="true">—</span><span>{item.date}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
