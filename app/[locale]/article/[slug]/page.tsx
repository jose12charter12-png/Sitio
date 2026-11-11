import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/config";
import { getArticle, articles } from "@/lib/content";
import { messages } from "@/lib/i18n";
export function generateStaticParams() { return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params; if (!isLocale(locale)) return {};
  const article = getArticle(slug); if (!article) return {};
  return { title: article.title[locale], description: article.excerpt[locale], alternates: { canonical: `/${locale}/article/${slug}`, languages: { es: `/es/article/${slug}`, en: `/en/article/${slug}` } }, openGraph: { type: "article", title: article.title[locale], description: article.excerpt[locale] } };
}
export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isLocale(locale)) notFound();
  const article = getArticle(slug); if (!article) notFound(); const t = messages[locale];
  return <article className="article-page"><div className="container article-content"><span className="eyebrow">{article.category.toUpperCase()} · {article.readTime.toUpperCase()}</span><h1>{article.title[locale]}</h1><p className="lead">{article.excerpt[locale]}</p>{article.body[locale].map((p, i) => <p key={i}>{p}</p>)}<div className="disclaimer">{t.disclaimer}</div></div></article>;
}
