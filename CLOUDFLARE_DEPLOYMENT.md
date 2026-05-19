# Deploying to Cloudflare Pages

## 1. Create a GitHub repository

1. Go to GitHub.
2. Create a new repository, for example: `magic-marks-cleaning-service`.
3. Upload all files from this folder.
4. Commit the files to the main branch.

## 2. Connect to Cloudflare Pages

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages**.
5. Connect your GitHub account.
6. Select the `magic-marks-cleaning-service` repository.

## 3. Build settings

Use these settings:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: / or blank
```

## 4. Deploy

Click **Save and Deploy**.

Cloudflare will build the site and provide a temporary `.pages.dev` link.

## 5. Custom domain

After deployment:

1. Open the Cloudflare Pages project.
2. Go to **Custom domains**.
3. Add the business domain.
4. Follow Cloudflare's DNS instructions.
