# cjsapplabs.xyz

Public professional demo and subscription information site for CJS App Labs.

## Edit apps
Open `apps.config.js`.

Change these fields for each app:

```js
demoUrl: "https://your-demo-url/",
checkoutUrl: "https://your-stripe-payment-link/"
```

Leave `checkoutUrl` empty until Stripe links are ready. The site will use the support email as the fallback subscription request link.

## Replace screenshots
Replace files in:

```text
assets/screenshots
```

Keep the same file names or update the `screenshots` array in `apps.config.js`.

## Deploy
Push the files in this folder to the `cjs_app_labs` GitHub repo. No build step is required.
