# Daisy Digital (v3, professional)

A calmer, professional version of the Daisy Digital site: soft lilac and plum, Bodoni Moda headings,
real client photography, no novelty effects. Separate from the playful site in the `DaisyDigital` repo.

Built with Next.js 16 (App Router) and TypeScript, exported as a static site and hosted on GitHub Pages.

## Where things live

| Path | What |
| --- | --- |
| `content/site.ts` | All the words: services, team, work, form text. `[placeholder]` = still to confirm with the client |
| `app/globals.css` | Colours, fonts, spacing, buttons |
| `public/work/<brand>/` | Client photos (webp, location data removed) |
| `components/` | Header, footer, logo, work tiles, team cards, forms |

## Run it locally

```bash
npm install
npm run dev
```

## Publish

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

## Forms

Until `brand.formEndpoint` in `content/site.ts` is set (e.g. a Formspree link), the contact and careers
forms open the visitor's email app with the message filled in; resumes are attached there by hand.
