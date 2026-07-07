# Importing your app screenshots

This website package cannot directly reach your `D:\apps\...` folders from inside ChatGPT, so this project includes a local importer.

## How to use it

Open Command Prompt in this website folder and run:

```bat
npm run import-screenshots
npm run build
```

Or double-click:

```text
copy-my-screenshots.bat
```

## Screenshot folders currently wired in

The importer looks in these folders:

```text
D:\apps\after-dark-tales\after-dark-tales-main\screenshots
D:\apps\coachcourt\vercel\screenhots
D:\apps\FamilyApp\screenshots
D:\apps\sanctuary\screenshots
D:\apps\in out - public\screensots
D:\apps\GamerTabs\screenshot
D:\apps\Grimoire\screenshot
D:\apps\never-ending-story\never-ending-story-main\screenshots
D:\apps\MixMate\Vercel\screenshot
```

It also checks common spelling variants such as `screenshots` and `screenshot`.

## Where screenshots go

Imported screenshots are copied into:

```text
assets\screenshots\<app-id>\
```

For example:

```text
assets\screenshots\gamertabs\screen-1.png
assets\screenshots\gamertabs\screen-2.png
```

Then `apps.config.js` is updated automatically so the app detail pages use the real screenshots.

## Important

After importing screenshots, run:

```bat
npm run build
```

This refreshes the `public` folder that Vercel serves.
