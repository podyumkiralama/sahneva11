# Sahneva Hotfix (Next.js 16, Turbopack)

Bu paket; import yol hataları, `next/headers` client kullanımı ve `globals.css` yolu gibi build hatalarını hızlıca çözmek için hazırlanmış minimal yamadır.

## Yapılacaklar

1. **`app/app` dizinini tamamen silin.** Sadece kökteki `app/` kalmalı.
2. Aşağıdaki dosyaları projeye kopyalayın (aynı isim/konuma):
   - `jsconfig.json`
   - `app/layout.js`
   - `app/globals.css`
   - `app/(site)/page.js`
   - `components/*` (eksikse eklenir; sizde zaten varsa kendi sürümünüzü bırakabilirsiniz)
3. Importlarda **alias** kullanıyoruz: `@/components/...`
   - Alias için `jsconfig.json` dahildir.
4. `page.js` içinde **`next/headers` importu yoktur** (server-only). Gerekirse sadece `layout.js` gibi server bileşenlerinde kullanın.
5. `globals.css` yolu **`./globals.css`** olmalı.

Ardından:
```bash
npm ci
npm run build
```

Not: Görseller placeholder'dır (`/public/img/...`). Kendi görsellerinizle değiştirin.
