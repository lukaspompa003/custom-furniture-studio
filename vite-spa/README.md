# Quercus nábytek

Čistá Vite + React + React Router SPA. Připraveno pro Vercel.

## Lokálně
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Nasazení na Vercel
1. Pushni složku do GitHub repa.
2. Na vercel.com → New Project → vyber repo.
3. Framework: **Vite**, build command `npm run build`, output `dist`.
4. Deploy. SPA fallback řeší `vercel.json`.
