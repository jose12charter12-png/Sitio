"use client";
import Link from "next/link";
import type { Locale } from "@/lib/config";
import { LanguageSwitcher } from "./language-switcher";
export function SiteHeader({ locale, t }: { locale: Locale; t: any }) {
  return <header className="site-header"><div className="container header-inner"><Link className="brand" href={`/${locale}`}><span className="brand-mark">w.</span><span>wellness<span className="brand-light">journal</span></span></Link><nav aria-label="Main navigation"><Link href={`/${locale}`}>{t.nav.home}</Link><Link href={`/${locale}/category/fitness`}>{t.nav.fitness}</Link><Link href={`/${locale}/category/sleep`}>{t.nav.sleep}</Link><Link href={`/${locale}/category/recovery`}>{t.nav.recovery}</Link><Link href={`/${locale}/about`}>{t.nav.about}</Link></nav><LanguageSwitcher locale={locale} label={t.language}/></div></header>;
}
