# Wellness Journal — multilingual editorial platform

Professional single-domain editorial website for health, wellbeing, fitness, sleep and recovery.

## One domain, multiple languages
The site uses locale paths on one domain: `/es/` and `/en/`. The root route suggests a locale based on browser language on a first visit. Visitors can change language using the site selector. No separate domains are needed.

## Included foundation
- Next.js App Router + TypeScript
- Responsive editorial homepage and category pages
- Spanish and English interface and starter articles
- Article pages with localized metadata and canonical / hreflang alternates
- XML sitemap and robots.txt
- About, contact, privacy, cookies, terms and affiliate disclosure templates
- Initial consent banner and configuration placeholders for analytics / advertising
- Health-content disclaimer and editorial caution

## Run locally
1. Install Node.js 20.9 or later.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to the final canonical domain.
4. Run `npm install`, then `npm run dev`.
5. Run `npm run typecheck` and `npm run build` before deployment.

## Before launch
- Replace the temporary brand, contact email and example domain.
- Expand original, expert-reviewed content; cite reliable sources and show authorship / editorial standards.
- Adapt legal pages to the real operator, providers and target jurisdictions.
- Replace the demo consent banner with a compliant consent management platform; configure Google Consent Mode v2 and ensure all tags respect consent.
- Configure and verify GA4, Search Console, GTM, AdSense and advertising pixels only after account setup and approval.
- Add real affiliate program disclosures and links; do not publish placeholder product recommendations.
- Test mobile accessibility, Core Web Vitals, structured data, canonical URLs, hreflang, sitemap and indexing.
- Add a genuine editorial contact address and author credentials.

**No implementation can guarantee AdSense approval or Google rankings.** Approval depends on policy compliance, original useful content, site quality and Google's review.

## Environment
See `.env.example`. Never commit secrets or private API keys.
