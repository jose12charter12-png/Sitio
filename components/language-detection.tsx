"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { defaultLocale, locales } from "@/lib/config";
export function LanguageDetection() {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!pathname || pathname !== "/") return;
    const saved = window.localStorage.getItem("site-locale");
    if (saved && locales.includes(saved as any)) { router.replace("/" + saved); return; }
    const preferred = navigator.languages?.[0] || navigator.language || "";
    const detected = preferred.toLowerCase().startsWith("en") ? "en" : defaultLocale;
    router.replace("/" + detected);
  }, [pathname, router]);
  return null;
}
