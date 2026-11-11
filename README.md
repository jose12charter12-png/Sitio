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

## Deploy free with Netlify

Netlify explicitly states that its Free plan can host commercial projects. It currently costs $0 and includes 300 credits per month. If the account reaches its monthly credit limit, projects pause until the next billing cycle, so monitor usage:
https://www.netlify.com/blog/introducing-netlify-free-plan/
https://www.netlify.com/pricing/

1. Create or sign in to a Netlify account.
2. Choose **Add new project** → **Import an existing project** → **GitHub**.
3. Authorize Netlify to access `jose12charter12-png/Sitio`.
4. Select branch `main`.
5. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Deploy. Netlify will assign a temporary `*.netlify.app` address and rebuild automatically after future commits.

The project uses Next.js static export, so it publishes the generated `out` folder rather than requiring a paid Next.js server runtime.

**Important:** GitHub is connected to this project, but Netlify account authorization and the first deployment must be completed by the account owner in the Netlify dashboard. No live URL exists until Netlify confirms a successful deployment.

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
