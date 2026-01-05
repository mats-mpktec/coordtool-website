# CoordTool Website

Website for CoordTool - Professional Coordinate Conversion for iOS

## Overview

This website is built with:
- **Tailwind CSS 4.0** for styling
- **Inter font** (locally hosted)
- **Vanilla HTML/CSS/JavaScript** (no build frameworks)
- **Multi-language support** (Swedish & English)
- **SEO optimized** with Open Graph, Twitter Cards, and structured data

## Project Structure

```
.
├── index.html              # Root page with language detection
├── sv/
│   └── index.html         # Swedish version
├── en/
│   └── index.html         # English version
├── src/
│   └── input.css          # Tailwind CSS source with custom classes
├── dist/
│   └── output.css         # Generated CSS (build output)
├── fonts/                 # Inter font files (woff2)
├── images/                # Images and screenshots
│   ├── logo.png           # TODO: Add logo
│   ├── hero-image.png     # TODO: Add hero image
│   ├── og-image.png       # TODO: Add OG image for social sharing
│   └── screenshots/       # App screenshots
│       ├── 01.png         # TODO: Add screenshot 1
│       ├── 02.png         # TODO: Add screenshot 2
│       ├── 03.png         # TODO: Add screenshot 3
│       ├── 04.png         # TODO: Add screenshot 4
│       └── 05.png         # TODO: Add screenshot 5
├── android-chrome-192x192.png  # TODO: Add Android icon
├── android-chrome-512x512.png  # TODO: Add Android icon
├── apple-touch-icon.png        # TODO: Add Apple touch icon
├── favicon-32x32.png           # TODO: Add favicon
├── favicon-16x16.png           # TODO: Add favicon
├── favicon.ico                 # TODO: Add favicon
├── site.webmanifest       # PWA manifest
├── robots.txt             # SEO robots file
├── sitemap.xml            # SEO sitemap
├── CNAME                  # Custom domain for GitHub Pages
├── tailwind.config.js     # Tailwind configuration
└── package.json           # NPM configuration

```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Tailwind CSS 4.0
- Tailwind CLI

### 2. Build CSS

For production (minified):
```bash
npm run build
```

For development (watch mode):
```bash
npm run dev
```

### 3. Add Required Assets

Before deploying, you need to add the following assets:

#### Fonts
Download Inter font (woff2 format) and place in `/fonts/`:
- Inter-Regular.woff2
- Inter-SemiBold.woff2
- Inter-Bold.woff2

Download from: https://fonts.google.com/specimen/Inter

#### Images
Add the following images to the `/images/` directory:
- `logo.png` - CoordTool logo (recommended size: 256x256px)
- `hero-image.png` - App screenshot for hero section (recommended size: 800x1600px)
- `og-image.png` - Open Graph image for social sharing (recommended size: 1200x630px)

#### Screenshots
Add 5 app screenshots to `/images/screenshots/`:
- `01.png` through `05.png` (recommended size: 1242x2688px - iPhone screenshot size)

#### Favicons
Generate and add favicons to the root directory:
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png` (180x180px)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `favicon.ico`

You can generate these from your app icon using: https://realfavicongenerator.net/

### 4. Update App Store Link

Replace all `#` placeholder links with your actual App Store URL in:
- `/sv/index.html`
- `/en/index.html`

Search for `href="#"` in the "Ladda ner" / "Download" buttons and replace with your App Store link.

### 5. Test Locally

Open `index.html` in a browser or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: CoordTool website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/coordtool-website.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select **main** branch
4. Click **Save**

### 3. Configure Custom Domain (coordtool.se)

1. In GitHub Pages settings, enter `coordtool.se` in the "Custom domain" field
2. Click **Save**
3. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses

More info: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### 4. Build Before Deploying

**Important**: Always build the CSS before committing:

```bash
npm run build
git add dist/output.css
git commit -m "Update CSS build"
git push
```

## Custom CSS Classes

The website uses custom Tailwind classes defined in `src/input.css`:

- `.btn-primary` - Primary button styling (blue background, hover effect)
- `.section-title` - Section heading styling (3xl/4xl, bold)
- `.section-subtitle` - Section subtitle styling (lg, gray-600)

## Cloudflare Analytics

The website uses Cloudflare Web Analytics with token: `861e2c09f768474f9eaa3daba6b4983b`

This is the same token used for SimplePDFScanner.

## SEO Features

- **Multi-language support** with automatic detection
- **hreflang tags** for language-specific pages
- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter sharing
- **Structured data** (Schema.org) for search engines
- **Sitemap.xml** for better indexing
- **robots.txt** for crawler control

## Browser Support

The website is optimized for modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 MPK Tec AB. All rights reserved.

## Support

For questions or issues, contact: MPK Tec AB via https://mpktec.se
