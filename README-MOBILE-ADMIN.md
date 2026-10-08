# EnergyOS EMS Mobile + Super Admin (frontend prototype)

Run `npm install`, then `npm run dev`. Build with `npm run build`; deploy `dist/` on an HTTPS host with SPA fallback to index.html.

Admin page: `/admin` (or Admin navigation). **Demo-only password `admin123`**, stored as sessionStorage flag. This is NOT secure authorization. Super Admin can add, edit, and delete MFMs per system. Data is stored in the current browser localStorage, not synced across users/devices.

To install: on Android Chrome, open HTTPS deployed URL and choose Install app/Add to Home screen. On iPhone Safari, Share → Add to Home Screen. App Store APK/IPA is NOT included.

Before production: backend authentication + role enforcement, PostgreSQL MFM/system tables, API validation, audit logs, HTTPS, telemetry ingestion/WebSocket, multi-site isolation, and proper offline strategy.
