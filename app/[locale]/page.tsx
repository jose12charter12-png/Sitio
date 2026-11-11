import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/config";
import { messages } from "@/lib/i18n";
import { articles, categories } from "@/lib/content";
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  const t = messages[locale];
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: "Wellness Journal", url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com", inLanguage: locale === "es" ? "es" : "en", description: t.heroText };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="hero"><div className="container hero-grid"><div><span className="eyebrow">{t.heroEyebrow}</span><h1>{t.heroTitle}</h1><p className="hero-copy">{t.heroText}</p><a className="button" href="#featured">{t.explore} <span aria-hidden="true"> →</span></a></div><div className="hero-art" aria-label="Abstract illustration of calm nature"><div className="sun"/><div className="leaf"/><div className="leaf two"/><div className="art-caption">Move · Rest · Grow</div></div></div></section>
    <section className="section" id="featured"><div className="container"><div className="section-head"><div><span className="eyebrow">{t.latest}</span><h2>{t.featured}</h2></div></div><div className="article-grid">{articles.map((article, i) => <article className="article-card" key={article.slug}><div className="card-art" aria-hidden="true">{["☀","◌","✳"][i]}</div><div className="card-body"><div className="card-meta">{article.category} · {article.readTime}</div><h3>{article.title[locale]}</h3><p>{article.excerpt[locale]}</p><Link className="text-link" href={`/${locale}/article/${article.slug}`}>{t.read} →</Link></div></article>)}</div></div></section>
    <section className="category-strip"><div className="container"><div className="category-grid">{categories.map((cat, i) => <Link className="category-item" key={cat.slug} href={`/${locale}/category/${cat.slug}`}><span aria-hidden="true">{["✿","↗","☾","⟳"][i]}</span><h3>{locale === "es" ? cat.es : cat.en}</h3><p>{locale === "es" ? cat.descriptionEs : cat.descriptionEn}</p></Link>)}</div></div></section>
    <section className="section"><div className="container"><div className="newsletter"><div><h2>{t.newsletter}</h2><p>{t.newsletterText}</p></div><span className="eyebrow">WELLNESS JOURNAL</span></div><p className="disclaimer">{t.disclaimer}</p></div></section>
  </>;
}
