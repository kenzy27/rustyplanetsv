# The Rusty Planet: Survival Guide

Single-page Angular 22 mission archive for the NASA Space Apps hackathon game.

## Run locally

Use Node 24.15 or later in the 24.x line, or another version supported by Angular 22.

```sh
pnpm install --frozen-lockfile
pnpm start
```

Open http://localhost:4200/.

## Check and deploy

```sh
pnpm run check
pnpm run build
```

Publish the contents of `dist/rusty-planet/browser/` to a static host. For deployment in a subdirectory, pass the mount path to Angular, including both slashes, for example `pnpm run build --base-href /rusty-planet/`. Update `og:image` in `src/index.html` to the full public image URL when the deployment domain is known.

## Update the archive

Edit `src/app/data/site-content.ts` for artwork paths, gameplay records, the teaser, crew details, reference links, and the optional game URL. Asset paths are relative to the deployed site root. Set image dimensions to the actual pixel dimensions and describe visible details in the alt text. Omitted screenshot captions become numbered visual records. Optionally set `srcset` to local preview files and their pixel widths. The full-size `src` opens in the lightbox.

| Folder in `public/assets/` | Contents |
| --- | --- |
| `backgrounds/` | `main-menu.jpeg` for the desktop hero and `outpost.jpeg` for its mobile crop, the mission briefing, and the temporary teaser still |
| `screenshots/` | `visual-001.jpeg` through `visual-004.jpeg`, copied from the supplied game captures |
| `fonts/` | Self-hosted fallback fonts and licenses. Add the game font here when available |
| `video/` | Create this folder for a local teaser, dedicated poster, and WebVTT captions |
| `team/` | Create this folder if crew portraits are supplied |

For a local teaser, set `teaser.source` to `{ kind: 'file', src: 'assets/video/teaser.mp4', captions: 'assets/video/teaser.en.vtt' }`. The optional captions field accepts an English WebVTT track. For hosted playback, set `{ kind: 'youtube', videoId: '…' }` or `{ kind: 'vimeo', videoId: '…' }` to the provider's video ID. Update `teaser.poster` when a dedicated still is available.

For the game font, add the font file and a `game-font.css` stylesheet under `public/assets/fonts/`, then set `font: { family: 'Rusty Planet', stylesheet: 'assets/fonts/game-font.css' }` in the content file. Use this declaration in the stylesheet and adjust the filename, format, and weight for the supplied font.

```css
@font-face {
  font-family: 'Rusty Planet';
  src: url('./game-font.woff2') format('woff2');
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}
```

The section templates are in `src/app/` and `src/app/components/`. Shared layout, color, and motion rules are in `src/styles.css`.
