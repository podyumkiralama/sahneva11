# Sahneva – Cloudflare Pages (SSR) Patch

Bu paket, projenizi Cloudflare Pages + Workers (SSR) uyumlu hale getirir ve SEO / hız için iyileştirmeler içerir.

## İçerik
- `next.config.js` → Yönlendirmeler + görsel formatları
- `wrangler.toml` → Cloudflare Pages yapılandırması
- `app/layout.js` → Global metadata + Inter font (swap) + Organization JSON-LD
- `app/sitemap.js` → Güncel rotalara göre site haritası
- `app/robots.js` → Basit robots ayarı
- `middleware.ts` → (Opsiyonel) Güvenlik başlıkları
- `package.json.additions.json` → Eklenmesi gereken script ve devDependencies notu

## Kurulum
1. Dosyaları proje köküne kopyalayın (aynı isimliler **üzerine yazılacak**).
2. Paketleri kurun:
   ```bash
   npm i -D @cloudflare/next-on-pages wrangler
   ```
3. `package.json` içine şu scriptleri ekleyin (mevcutları silmeyin):
   ```json
   {
     "scripts": {
       "cf:build": "npx @cloudflare/next-on-pages",
       "cf:deploy": "npm run cf:build && npx wrangler pages deploy .vercel/output/static --project-name sahneva --branch production"
     }
   }
   ```
4. Build & Deploy (lokal):
   ```bash
   npm run build
   npm run cf:build
   npx wrangler pages deploy .vercel/output/static --project-name sahneva --branch production
   ```
5. Cloudflare Pages → Project → Custom Domain ekleyin. SSL otomatik.

## Notlar
- `app/sitemap.js` içindeki sayfa listelerini sitenizdeki gerçek rotalara göre güncelleyebilirsiniz.
- `middleware.ts` opsiyoneldir; isterseniz devrede bırakmayın.
- Görseller için `next/image` kullanımı ve `sizes/priority` ayarları LCP/CLS’i iyileştirir.
"# sahneva"  
