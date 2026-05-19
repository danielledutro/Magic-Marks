# Magic Marks Cleaning Service Website

React/Vite website for Magic Marks Cleaning Service.

## Local preview

```bash
npm install
npm run dev
```

Open the local URL Vite gives you, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Cloudflare Pages settings

When connecting this GitHub repo to Cloudflare Pages, use:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank unless this project is inside a subfolder

## Logo

The logo is located at:

```text
public/logo.png
```

Replace that file with a higher-resolution logo later if one becomes available. Keep the same filename if you do not want to edit the code.

## Stock images

The current site uses remote stock-style image URLs inside `src/App.jsx`. To replace them with owned images later:

1. Add images to `public/images/`
2. Update the `stockImages` object in `src/App.jsx`
3. Example: `hero: '/images/your-image.jpg'`
