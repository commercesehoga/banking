# ⚡ ThunderStudy Banking

> **Free banking exam preparation dashboard** for IBPS PO, SBI PO, RBI Grade B and all major Indian government banking exams.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2563eb?style=for-the-badge)](https://commercesehoga.github.io/banking/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=for-the-badge)](https://commercesehoga.github.io/banking/manifest.json)

---

## 🚀 Features

| Feature | Description |
|---|---|
| 📝 **Mock Tests** | Full-length Prelims & Mains mocks for 8 banking exams |
| 📈 **Analytics** | Subject-wise breakdown, accuracy trends, study heatmap |
| 🏆 **Live Leaderboard** | Real-time ranking against other aspirants |
| 🎮 **XP System** | Gamified progress tracking with levels and badges |
| 📱 **PWA** | Install on Android/iOS for offline access |
| 🔒 **No Login** | All data stored locally — complete privacy |
| 💰 **Free** | Completely free, forever |

---

## 🏦 Exams Covered

- **IBPS** — PO, Clerk, RRB PO, RRB Clerk
- **SBI** — PO, Clerk
- **RBI** — Grade B, Assistant

---

## 🗂️ Project Structure

```
banking/
├── index.html          # Main app (SPA)
├── 404.html            # Custom 404 page
├── favicon.svg         # SVG favicon
├── icon-192.png        # PWA icon 192×192
├── icon-512.png        # PWA icon 512×512
├── og-image.png        # Open Graph image (1200×630)
├── og-image.svg        # OG image source
├── manifest.json       # Web App Manifest (PWA)
├── sw.js               # Service Worker (offline cache)
├── robots.txt          # Search engine crawl rules
├── sitemap.xml         # XML sitemap for SEO
├── llms.txt            # AI-readable site summary (AEO)
└── README.md           # This file
```

---

## 📊 SEO & AEO Implementation

### SEO (Search Engine Optimization)
- ✅ Semantic `<title>` and `<meta description>` with target keywords
- ✅ Open Graph tags for rich social sharing previews
- ✅ Twitter Card meta tags
- ✅ Canonical URL
- ✅ `robots.txt` with sitemap reference
- ✅ `sitemap.xml` with lastmod and priority
- ✅ Structured data: `WebApplication` schema
- ✅ Structured data: `BreadcrumbList` schema
- ✅ FAQ section with `FAQPage` + `Question/Answer` microdata

### AEO (Answer Engine Optimization — AI Overviews / SGE)
- ✅ `FAQPage` JSON-LD for Google AI Overviews
- ✅ Inline `itemscope`/`itemprop` microdata on FAQ answers
- ✅ `llms.txt` — structured summary for AI crawlers (ChatGPT, Perplexity, Claude)
- ✅ Concise, direct answers to common banking exam questions in FAQ
- ✅ `WebApplication` structured data with clear description

### PWA (Progressive Web App)
- ✅ `manifest.json` with name, icons, shortcuts, screenshots
- ✅ `sw.js` service worker with cache-first strategy
- ✅ Offline fallback to cached home page
- ✅ Apple PWA meta tags (`apple-mobile-web-app-capable`)
- ✅ `theme-color` meta for browser UI tinting

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Charts**: [Chart.js 4.4](https://www.chartjs.org/)
- **PDF Export**: [jsPDF 2.5](https://github.com/parallax/jsPDF)
- **Fonts**: Plus Jakarta Sans, DM Mono, Outfit (Google Fonts)
- **Hosting**: GitHub Pages
- **Analytics**: Google Analytics 4 (G-11GVYLFSCP)

---

## 🚀 Getting Started

### Run Locally
```bash
git clone https://github.com/commercesehoga/banking.git
cd banking
# Open with any static server, e.g.:
npx serve .
# Then visit http://localhost:3000
```

### Deploy to GitHub Pages
```bash
git push origin main
# GitHub Pages auto-deploys from the main branch
```

---

## 📱 Install as PWA

1. Open https://commercesehoga.github.io/banking/ in Chrome/Edge/Safari
2. Tap the browser menu → **"Add to Home Screen"** / **"Install App"**
3. ThunderStudy Banking is now on your home screen with offline support

---

## 🤝 Contributing

Contributions, bug reports and feature requests are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Wondermayank** — [commercesehoga.github.io](https://commercesehoga.github.io)

---

## 📄 License

MIT License — free to use, modify and distribute.

---

*Built with ⚡ for every banking aspirant in India.*
