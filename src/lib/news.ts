import type { NewsItem } from "@/types";
import { newsArticles as fallbackNewsArticles } from "@/lib/content";

const WORDPRESS_BASE_URL = (process.env.WORDPRESS_URL ?? "https://mividoor.com/cms").replace(/\/$/, "");
const NEWS_CATEGORY_SLUG = process.env.WORDPRESS_NEWS_CATEGORY_SLUG ?? "tin-tuc";
const NEWS_PER_PAGE = 12;

type WordPressPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  link: string;
  categories?: number[];
  jetpack_featured_media_url?: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
};

type WordPressCategory = {
  id: number;
  slug: string;
  name: string;
};

function stripHtml(input: string) {
  return input.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function decodeRenderedText(input: string) {
  return stripHtml(input)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…");
}

function formatVietnameseMonthYear(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const month = new Intl.DateTimeFormat("vi-VN", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("vi-VN", { year: "numeric" }).format(date);
  return `${month} ${year}`.replace(/^tháng\s+/i, "Tháng ");
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${WORDPRESS_BASE_URL}${path}`, {
      cache: "force-cache",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

async function getNewsCategoryId() {
  const categories = await fetchJson<WordPressCategory[]>(
    `/wp-json/wp/v2/categories?slug=${encodeURIComponent(NEWS_CATEGORY_SLUG)}&per_page=1`
  );

  return categories?.[0]?.id ?? null;
}

function pickCategoryName(post: WordPressPost) {
  const embeddedTerms = post._embedded?.["wp:term"]?.flat() ?? [];
  const category = embeddedTerms.find((term) => term.taxonomy === "category" && term.slug !== NEWS_CATEGORY_SLUG);
  if (category) {
    return category.name;
  }

  const fallbackCategory = embeddedTerms.find((term) => term.taxonomy === "category");
  return fallbackCategory?.name ?? "Tin tức";
}

function mapPostToNewsItem(post: WordPressPost): NewsItem {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    post.jetpack_featured_media_url ??
    undefined;

  return {
    slug: post.slug,
    title: decodeRenderedText(post.title.rendered),
    excerpt: decodeRenderedText(post.excerpt.rendered),
    content: post.content.rendered,
    category: pickCategoryName(post),
    date: formatVietnameseMonthYear(post.date) || "Tin tức",
    image: featuredImage,
  };
}

export async function getNewsArticles(): Promise<NewsItem[]> {
  const categoryId = await getNewsCategoryId();
  const query = new URLSearchParams({
    _embed: "1",
    per_page: String(NEWS_PER_PAGE),
    orderby: "date",
    order: "desc",
  });

  if (categoryId) {
    query.set("categories", String(categoryId));
  }

  const posts = await fetchJson<WordPressPost[]>(`/wp-json/wp/v2/posts?${query.toString()}`);
  if (posts) {
    return posts.map(mapPostToNewsItem).filter((post) => post.slug);
  }

  // Keep the local Mividoor content only as an outage/install fallback.
  return fallbackNewsArticles;
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsItem | undefined> {
  const articles = await getNewsArticles();
  return articles.find((article) => article.slug === slug);
}
