# Gaber Youssef — personal website

Static Astro site with a consulting homepage and MDX blog.

## Local development

Use Node.js 24 LTS (`nvm use`) and npm 11. The project uses npm only;
commit `package-lock.json` whenever dependencies change.

```sh
npm ci
npm run dev
```

## Production verification

```sh
npm ci
npm run build
npm run preview
```

Call buttons currently use the email fallback in `src/config.ts` because the previous
Google Calendar appointment page was unavailable. Replace `PERSONAL.callUrl` when
a valid scheduling URL is available.

The static output is `dist/`. The canonical origin is configured in
`astro.config.mjs`; keep `public/robots.txt` aligned if the domain changes.
Legacy CV, projects, and services paths redirect to homepage sections.
The removed demo store must return the host's 404 page.

Blog posts live in `src/content/blog/`. Use `.mdx` for articles: write prose in Markdown, add HTML for custom formatting, and import Astro components from `src/components/blog/` for diagrams or interactive explanations. These render within the existing article layout; do not add a separate HTML document shell. Keep existing titles stable because
URLs are generated from titles. Add primary-source links for factual claims.

## Cloudflare deployment

Cloudflare Workers serves the static `dist/` output; no server adapter is required.

- Repository: `Gaber-Youssef/personal-website`
- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Build environment: Node 24 (`NODE_VERSION=24`), npm 11; use the committed lockfile.
- Worker name: `gaber-youssef-personal-website`
- Production URL: `https://gaberyoussef.dev`
- Worker URL: `https://gaber-youssef-personal-website.gaber-b29.workers.dev`
- `wrangler.jsonc` configures static assets, both custom domains, and the custom 404 page.
- `public/_redirects` supplies HTTP redirects for legacy homepage section URLs.
- Cloudflare's `Redirect www to gaberyoussef.dev` rule redirects the `www` host
  permanently while preserving paths and query strings. Host-specific source URLs
  are not supported in Workers' `_redirects` file.
- Cloudflare's Always Use HTTPS setting redirects HTTP requests to HTTPS.

To validate packaging locally, run `npm run deploy:preview` after a successful build.
It is a dry run and does not publish. `npm run deploy` builds and publishes using an
authorized Cloudflare session. Keep tokens out of the repository.

Verify the workers.dev deployment before assigning the production domain.
Before changing authoritative nameservers, copy and verify all existing DNS records,
especially Google Workspace MX, SPF, DKIM, DMARC, and domain verification records.
Preserve any other subdomains and services. Test both apex and www routing, HTTPS,
blog navigation, RSS, sitemap, redirects, and a nonexistent route after cutover.
Keep the previous Netlify project available until the new site is verified.
