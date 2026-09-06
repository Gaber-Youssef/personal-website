# Prelaunch checks — 6 September 2026

## Completed

- Standardized on npm 11.13.0 with `package-lock.json`; removed the competing pnpm lockfile.
- Clean `npm ci` succeeded under Node 24.20.0. Node 24 is recorded in `.nvmrc` and package engines.
- Production Astro build passed. Generated internal page/asset links and RSS paths were checked.
- Blog, article, and tag pages expose Home, Blog, and Contact navigation; sidebar controls are omitted when no sidebar exists.
- Chrome checks covered desktop, tablet (768px), and mobile (390px and 320px) layouts.
- Exercised homepage → blog → back, results anchors, tag links, Contact navigation, and the removed store's 404 page.
- Checked keyboard link activation, visible focus, and mobile-menu Enter/Escape behavior.
- Fixed cramped small-screen navigation, the clipped hero badge, and article table overflow. The table scroll region is keyboard-focusable.
- Applied the approved light canvas, ink, and cobalt palette across the homepage and blog, with solid buttons and simplified surfaces. Article syntax highlighting uses github-light.
- Rebuilt successfully after the palette change. Desktop and 320px mobile checks covered the homepage and article; neither had horizontal page overflow.
- Authored palette contrast ratios: white/cobalt 5.86:1, muted text/canvas 5.79:1, body text/white 10.35:1.
- Chrome had Dark Reader enabled, so screenshots show extension-modified colors. A clean Safari visual check was blocked by automatic approval review when it detected an unrelated Start Page; native light-color visual verification remains outstanding.
- Revised the article against linked primary sources; removed unsupported claims and nonfunctional setup/training examples. Kept the title and public URL stable and added an update date.
- Python pseudocode was syntax-checked; no model training or OpenClaw installation was performed.
- Confirmed client names remain absent from generated HTML.

## Booking fallback

The former Google Calendar appointment URL displayed “Appointment not found.”
Call buttons now use `PERSONAL.callUrl`, a mailto link with a strategy-call subject,
and say “Arrange a call.” No email was sent. A working booking URL can replace this
fallback later; mailbox delivery has not been tested.

## Still to resolve before public deployment

- Owner review of marketing metrics and Google grant wording. Upwork confirms 100% Job Success and Expert-Vetted; the unsupported aggregate 5.0 rating was replaced with the observed 12 total jobs.
- Reconcile the website’s 8+ years with the Upwork overview’s 7 years.
- Owner corrected the Rosalyn figure to 10K+ concurrent users; updated both the metric and headline.
- Hosting/domain configuration, HTTPS, and host-level redirect/404 verification.
- No deployment or Git commit was performed during this work.

## Upwork enrichment — 6 September 2026

Source: https://www.upwork.com/freelancers/gyoussef (read in Chrome).

- Added selected builds for PiperX’s visual multi-agent workflow engine, a LangGraph content studio, and pickleball video analytics. Each card links to the corresponding public portfolio entry.
- Refined capability descriptions using the profile’s multimodal agents, object tracking, pose estimation, memory, retrieval, and telemetry experience.
- Kept enterprise/client identities anonymized and retained PiperX naming.
- Profile figures observed: 100% Job Success, Expert-Vetted, 12 total jobs, 1,799 hours, and $100K+ total earnings. Earnings and hourly pricing were not added to the website.
- Portfolio descriptions are self-reported; no independent performance benchmark or client authorization was inferred from them.
- Both content-studio and pickleball portfolio embeds report that their videos are unavailable because the uploader closed the YouTube account. No videos were embedded on the website.
- Upwork itself was not edited and no messages were sent.

## Broader experience and Upwork anonymization — 6 September 2026

- Owner clarified that most work is outside Upwork. The selected-builds introduction now covers company roles, direct engagements, and selected Upwork projects.
- Removed the prominent Upwork statistics panel and job count. Retained a small, explicitly platform-specific credibility paragraph and feedback link.
- Project links now say “Project details”; their accessible labels still identify Upwork as the destination.
- At the owner’s request, saved changes directly to the Upwork overview and related Lead AI Engineer employment description: replaced named-client references with PiperX project wording. Read back both saved descriptions.
- The existing workflow portfolio description already named PiperX. Employer names, role titles, dates, and unrelated profile content were preserved.
- Website production build and whitespace checks passed. Website remains local; Upwork profile changes are live.

## Deployment preparation — 6 September 2026

- Owner approved the marketing figures and appearance, and confirmed the contact email works.
- Replaced “Google grant” with “Google startup support”; the exact benefit type can be reconciled with the original company announcement later.
- Added static Cloudflare Workers configuration, pinned Wrangler, deployment commands, and legacy HTTP redirects.
- Public DNS currently uses Netlify/NS1 nameservers. The apex MX record points to Google Workspace. Complete authoritative-zone records must be verified before changing nameservers.
- Existing production origin did not return an HTTP response within 20 seconds during the initial check; the precise Netlify failure is not diagnosed.
