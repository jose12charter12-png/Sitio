"use client";
import Link from "next/link";
import type { Locale } from "@/lib/config";
export function SiteFooter({ locale, t }: { locale: Locale; t: any }) {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link className="brand footer-brand" href={`/${locale}`}><span className="brand-mark">w.</span><span>wellness<span className="brand-light">journal</span></span></Link><p>{t.about}</p></div><div className="footer-links"><Link href={`/${locale}/privacy`}>{t.privacy}</Link><Link href={`/${locale}/cookies`}>{t.cookies}</Link><Link href={`/${locale}/terms`}>{t.terms}</Link><Link href={`/${locale}/affiliate-disclosure`}>{t.affiliates}</Link><Link href={`/${locale}/contact`}>{t.contact}</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Wellness Journal</span><span>{t.footer}</span></div></footer>;
}
