import type { MetadataRoute } from "next";
import { siteUrl,locales } from "@/lib/config";
import { articles } from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap{
 const pages=["","/about","/contact","/editorial-policy","/privacy","/cookies","/terms","/affiliate-disclosure"];
 return [...locales.flatMap(locale=>pages.map(path=>({url:`${siteUrl}/${locale}${path}`,lastModified:new Date(),alternates:{languages:{es:`${siteUrl}/es${path}`,en:`${siteUrl}/en${path}`}}}))),...locales.flatMap(locale=>articles.map(a=>({url:`${siteUrl}/${locale}/article/${a.slug}`,lastModified:new Date(),alternates:{languages:{es:`${siteUrl}/es/article/${a.slug}`,en:`${siteUrl}/en/article/${a.slug}`}}})))];
}