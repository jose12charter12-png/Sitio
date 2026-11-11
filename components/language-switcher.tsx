"use client";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/config";
export function LanguageSwitcher({locale,label}:{locale:Locale;label:string}){
 const pathname=usePathname()||"/";
 return <label className="language-switcher"><span className="sr-only">{label}</span><select aria-label={label} value={locale} onChange={e=>{const next=e.target.value;window.localStorage.setItem("site-locale",next);const target=pathname.replace(/^\/(es|en)(?=\/|$)/,`/${next}`);window.location.href=target;}}><option value="es">Español</option><option value="en">English</option></select></label>;
}
