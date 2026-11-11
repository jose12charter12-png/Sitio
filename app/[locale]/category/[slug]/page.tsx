import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/config";
import { articles, categories } from "@/lib/content";
export default async function CategoryPage({params}:{params:Promise<{locale:string;slug:string}>}) {
 const {locale,slug}=await params; if(!isLocale(locale)) notFound();
 const category=categories.find(c=>c.slug===slug); if(!category) notFound();
 const filtered=articles.filter(a=>slug==="fitness"?a.category==="Fitness":slug==="sleep"?a.category==="Sleep":slug==="recovery"?a.category==="Recovery":true);
 return <section className="section"><div className="container"><span className="eyebrow">WELLNESS JOURNAL</span><h1>{locale==="es"?category.es:category.en}</h1><p className="hero-copy">{locale==="es"?category.descriptionEs:category.descriptionEn}</p><div className="article-grid">{filtered.map(a=><article className="article-card" key={a.slug}><div className="card-body"><div className="card-meta">{a.category} · {a.readTime}</div><h3>{a.title[locale]}</h3><p>{a.excerpt[locale]}</p><Link className="text-link" href={`/${locale}/article/${a.slug}`}>{locale==="es"?"Leer artículo":"Read article"} →</Link></div></article>)}</div></div></section>;
}