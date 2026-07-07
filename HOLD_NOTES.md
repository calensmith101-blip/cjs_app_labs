# CJS App Labs — Hold Page Patch

## What changed
- Replaced the active `index.html` with a standalone construction / under-review homepage.
- The original live homepage was preserved as `index.full-site-backup.html`.
- Ran `npm run build`, which regenerated the `/public` folder with the same holding page.

## Why there are duplicate files
This project is set up as a static site where the root folder is the source and `/public` is the generated output.

The build script at `scripts/build.js` deletes `/public`, recreates it, then copies almost everything from the root into `/public`.
That means files like these are expected to appear twice after a build:

- `index.html` and `public/index.html`
- `app.js` and `public/app.js`
- `styles.css` and `public/styles.css`
- `apps.config.js` and `public/apps.config.js`
- `assets/screenshots/...` and `public/assets/screenshots/...`

This is not the same as the app being duplicated in the codebase. `/public` is basically the deploy/build copy.

## What looked messy before the patch
Before rebuilding, most root files and `/public` files were identical, but `apps.config.js` was different between root and `/public`.
That means the deployed copy may have had older pricing, demo URLs, checkout URLs, or app IDs than the source copy.
Running the build regenerated `/public` so it now matches the root source.

## Recommended repo cleanup later
When ready, decide whether you want to keep `/public` committed to GitHub.

Option A — keep `/public` committed:
- Simple static deployment.
- Duplicates are normal.
- Must remember to run `npm run build` before pushing.

Option B — do not commit `/public`:
- Cleaner repo.
- Add `/public` to `.gitignore`.
- Let Vercel run `npm run build` and deploy the generated output.

Do not delete source files from the root unless the Vercel project is confirmed to deploy from `/public` only.
