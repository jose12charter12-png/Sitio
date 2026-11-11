import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/config";
import { articles, categories } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => categories.map((category) => ({ locale, slug: category.slug })));
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  const filtered = articles.filter((article) => {
    if (slug === "wellness") return true;
    return article.category.toLowerCase() === slug;
  });

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">WELLNESS JOURNAL</span>
        <h1>{locale === "es" ? category.es : category.en}</h1>
        <p className="hero-copy">{locale === "es" ? category.descriptionEs : category.descriptionEn}</p>
        <div className="article-grid">
          {filtered.map((article) => (
            <article className="article-card" key={article.slug}>
              <div className="card-body">
                <div className="card-meta">{article.category} · {article.readTime}</div>
                <h3>{article.title[locale]}</h3>
                <p>{article.excerpt[locale]}</p>
                <Link className="text-link" href={`/${locale}/article/${article.slug}`}>
                  {locale === "es" ? "Leer artículo" : "Read article"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
