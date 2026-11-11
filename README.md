# Wellness Journal — multilingual editorial platform

Professional bilingual editorial website about health, wellbeing, fitness, sleep and recovery.

## Languages and URLs
- Spanish: `/es`
- English: `/en`
- One site and one future custom domain, with locale-specific paths.
- The root route detects the visitor's browser language and redirects to the matching locale.

## Technology
- Next.js 15 App Router, React 19 and TypeScript
- Static export for deployment on Cloudflare Pages
- Responsive editorial layout
- Localized article, category and information pages
- Metadata, canonical URLs, hreflang, sitemap and robots.txt
- Consent-aware optional Google Tag Manager bootstrap

## Run locally
1. Install Node.js 20.9 or later.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed URL.
4. Run `npm install`.
5. Run `npm run dev`.
6. Before publishing, run `npm run typecheck` and `npm run build`.

## Deploy free with Cloudflare Pages
The project is configured for a static export. Cloudflare's official guide for static Next.js sites is:
https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

In Cloudflare:
1. Create or sign in to a Cloudflare account.
2. Open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare to access the GitHub repository `jose12charter12-png/Sitio`.
4. Select branch `main`.
5. Choose the **Next.js (Static HTML Export)** preset, or set:
   - Build command: `npm run build`
   - Build output directory: `out`
6. Deploy. Cloudflare will provide a temporary `*.pages.dev` address and automatically rebuild after later commits.

The free Pages limits currently include up to 500 builds per month, 20,000 files per site and a 25 MiB maximum per file. Check the current limits before launch:
https://developers.cloudflare.com/pages/platform/limits/

Cloudflare's Developer Platform terms explicitly include Pages and permit hosting content. Do not collect or process payment-card data on a property receiving Cloudflare Free Services. This editorial/affiliate site should send purchases to the affiliate merchant and must not collect card data itself. Review the current agreement:
https://www.cloudflare.com/service-specific-terms-developer-platform/

**Important:** GitHub is connected to this project, but Cloudflare account authorization and the first deployment must be completed by the account owner in the Cloudflare dashboard. No live URL exists until Cloudflare confirms a successful deployment.

## Before commercial launch
- Replace the temporary brand name and configure the final domain/URL.
- Add a real editorial contact email and identify the responsible publisher.
- Complete and review the privacy, cookie, terms and affiliate-disclosure pages for the actual business and markets.
- Replace the demonstration consent banner with a suitable consent management solution; verify that every analytics/advertising tag obeys consent requirements.
- Configure GA4, Search Console, GTM, Meta/TikTok pixels and AdSense only after creating the relevant accounts and obtaining real IDs/approval.
- AdSense approval is not guaranteed. Publish original, useful, human-reviewed content and meet Google's publisher policies.
- Health content must cite reliable sources, identify authors/reviewers, avoid unsupported medical claims and make clear that it is general education rather than personal medical advice.
- Review translations for accuracy; the current Spanish and English articles are manually authored, not automatically translated.
- Add real contact handling and a privacy-compliant newsletter provider before advertising those features.

## Environment variables
See `.env.example`. Never commit passwords, tokens or private API keys.
