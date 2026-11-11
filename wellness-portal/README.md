# Wellness & Active Living — bilingual editorial website

A lightweight, static Spanish/English publication about everyday wellbeing, home fitness, sleep, mobility and recovery. The project lives in its own folder and is developed on a dedicated branch; the repository's main branch and any other site are not replaced.

## Current project
- **GitHub repository:** https://github.com/jose12charter12-png/Sitio
- **Development branch:** `build/wellness-editorial-site`
- **Site folder:** `wellness-portal/`
- **Languages:** `/es/` and `/en/`
- **Stack:** static HTML, CSS and small vanilla JavaScript; no paid apps, plugins or build dependencies.
- **Preview workflow:** `.github/workflows/wellness-pages.yml`

## Preview on GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Settings → Actions → General** and ensure Actions are allowed to run.
4. The workflow deploys the `wellness-portal/` folder from the `build/wellness-editorial-site` branch.
5. After the workflow completes successfully, the project preview URL is: https://jose12charter12-png.github.io/Sitio/

If GitHub Pages has not been enabled for the repository, the workflow may not publish until step 1 is completed.

## Site contents
- Spanish and English homepages and category pages.
- Original starter guides about home workouts, sleep habits, daily mobility and home fitness equipment.
- About, contact, privacy, cookies, affiliate disclosure, health disclaimer and editorial policy pages in both languages.
- Shared responsive styling, mobile navigation, metadata, canonical/hreflang placeholders, Open Graph basics, WebSite structured data, sitemap, robots and a placeholder ads.txt.
- Custom 404 page.

## Before public launch
- Replace every `REPLACE-WITH-YOUR-DOMAIN` canonical and sitemap placeholder with the final domain.
- Replace `CONTACT_EMAIL_TO_BE_CONFIGURED` and operator placeholders with real, monitored business contact information.
- Review legal pages for the operator's jurisdiction and the locations of visitors. These are starter templates, not legal advice.
- Add accurate author information, editorial review details and source citations to every new health article. Do not invent medical credentials or clinical review.
- Implement a consent management solution before activating non-essential analytics, advertising cookies or tracking pixels where required.
- Connect Google Search Console and submit the sitemap after the final domain is set.
- Add the exact AdSense publisher declaration to ads.txt only after Google issues it.
- Add affiliate IDs and merchant disclosures only after the corresponding programs approve the account and links.
- Test all links, mobile layouts, page speed, accessibility and structured data on the live domain.

## Monetization and policy note
The architecture is prepared for future AdSense and affiliate integration, but this does **not** mean Google has approved the site or that AdSense eligibility is guaranteed. Approval depends on Google's review, original and useful content, site quality, ownership, compliance and ongoing policy adherence. Traffic, ranking and revenue are never guaranteed.

## Health editorial standard
Content is educational, not personal medical advice. Avoid diagnosis, treatment promises, fabricated credentials, fake testimonials, fabricated product reviews and unsupported health claims. Cite reliable primary or institutional sources for factual health claims.
