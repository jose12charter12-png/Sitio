export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const siteName = "Wellness Journal";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "");
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
