# MapStacker website

Static landing site for [MapStacker](https://github.com/a26413768/map_stacker-releases), a lunar and planetary SER image stacker.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Production build

```sh
npm run check
npm run build
npm run preview
```

Astro writes the eight localized static pages to `dist/`. The site is available in English, Traditional Chinese, Simplified Chinese, Japanese, German, French, Spanish, and Italian.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages whenever `main` is pushed. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The Astro configuration derives the GitHub Pages base path from `GITHUB_REPOSITORY`, so both project sites and `<owner>.github.io` repositories work without source changes. Set `SITE_URL` in the build environment when using a custom domain.

## Content sources

Application downloads, release notes, checksums, and issue reporting are hosted in the public [MapStacker releases repository](https://github.com/a26413768/map_stacker-releases).
