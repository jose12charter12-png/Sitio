import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, siteName, siteUrl } from "@/lib/config";
import { messages } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsentBanner } from "@/components/consent-banner";
import { TagManager } from "@/components/tag-manager";
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isLocale(locale)) return {};
  return { title: siteName, description: messages[locale].heroText, alternates: { canonical: `/${locale}`, languages: { es: "/es", en: "/en", "x-default": "/" } }, openGraph: { locale: locale === "es" ? "es_ES" : "en_US" } };
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  const t = messages[locale];
  return <><SiteHeader locale={locale} t={t}/><main>{children}</main><SiteFooter locale={locale} t={t}/><ConsentBanner locale={locale}/><TagManager/></>;
}
