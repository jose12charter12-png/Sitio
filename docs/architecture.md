# Site architecture — single-domain multilingual

## Product direction
Editorial website focused on health, wellness, fitness, sleep and recovery. One production domain serves every language; language versions use path prefixes, never separate domains.

## Locale URLs
- `/es/` — Spanish (initial default)
- `/en/` — English
- Future: `/pt/`, `/fr/` and additional locales as content quality permits

## Language behavior
1. On a visitor's first visit, inspect the browser language and suggest the closest supported locale.
2. Keep the visitor on the selected locale after they choose; do not force repeated redirects.
3. Provide a persistent language switcher that preserves the current page when a translation exists.
4. If a page has not been translated, show a clear fallback rather than a broken route.
5. Store locale preference only as needed and respect privacy/consent requirements.

## SEO
- Each locale has a stable, crawlable URL and localized title, description, headings and content.
- Emit canonical URLs and reciprocal `hreflang` alternates (including `x-default` where appropriate).
- Include localized pages in the XML sitemap; configure robots.txt.
- Do not automatically canonicalize every translation to the Spanish page.
- Machine translation is a drafting aid: review health and safety content before publication.

## Content and monetization
- Topics: evidence-aware health education, wellbeing, fitness, sleep and recovery.
- Monetization: AdSense and affiliate links, with clear affiliate disclosures.
- Avoid medical diagnosis, treatment promises and unsupported health claims.
- Legal pages are launch requirements and must be reviewed for the site's actual operator, markets and providers.

## Integrations
Prepare configuration points for GA4, Search Console, Tag Manager, Google Ads, Meta Pixel, TikTok Pixel, AdSense and affiliate networks. Never commit credentials or real IDs. Marketing/analytics tags must respect the chosen consent management platform and applicable consent rules.

## Suggested implementation
Next.js App Router + TypeScript, localized route segment, reusable components, content stored with locale metadata, and deployment on Vercel. The production domain is selected later and configured through environment variables.
