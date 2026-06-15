# ⛅ WeatherModels PWA

Compare GFS, ECMWF, CMC, and ICON weather forecasts with hourly breakdowns for any location worldwide.

---

## 📁 Files in this folder

```
WeatherModels/
├── index.html       ← Main app
├── manifest.json    ← PWA config (name, icons, colors)
├── sw.js            ← Service worker (offline support, caching)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md        ← This file
```

---

## 🚀 How to host it (pick one)

### Option A — Netlify Drop (easiest, free, 2 minutes)
1. Go to **https://app.netlify.com/drop**
2. Drag the entire `WeatherModels` folder onto the page
3. Netlify gives you a live HTTPS URL instantly (e.g. `https://abc123.netlify.app`)
4. Open that URL on your phone → install prompt appears automatically

### Option B — GitHub Pages (free, permanent)
1. Create a free GitHub account at github.com
2. Create a new repository named `weathermodels`
3. Upload all files from this folder
4. Go to Settings → Pages → Source: main branch → Save
5. Your app lives at `https://yourusername.github.io/weathermodels`

### Option C — Vercel (free, fast)
1. Go to **https://vercel.com** and sign up
2. Click "Add New → Project" and drag the folder in
3. Deploy — you get an HTTPS URL in seconds

---

## 📲 Installing on your phone

### iPhone / iPad (Safari only)
1. Open your hosted URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (□↑) at the bottom
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **Add** — the app icon appears on your home screen

### Android (Chrome)
1. Open your hosted URL in Chrome
2. A banner appears: **"Add WeatherModels to Home Screen"**
3. Tap **Install** — done

### Desktop (Chrome / Edge)
- Look for the install icon (⊕) in the address bar and click it

---

## ✨ PWA Features included

- **Installable** — works like a native app with its own icon
- **Full-screen** — no browser chrome when launched from home screen
- **Offline support** — app shell loads even without internet; shows cached forecast if available
- **Auto-reload last search** — reopens your last location automatically on launch
- **Safe area support** — respects iPhone notch and home indicator
- **iOS install prompt** — custom instructions shown on first Safari visit

---

## 🌐 Data source

All forecast data is fetched live from **Open-Meteo** (open-meteo.com) — free, no API key required.
Models used: `gfs_seamless`, `ecmwf_ifs025`, `gem_seamless`, `icon_seamless`

