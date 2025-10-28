# Sahneva – SEO & Performans İyileştirmeleri
- Güvenlik başlıkları: HSTS, CSP (Trusted Types kapalı – mobil uyumluluk için), XFO, X-CTO, COOP/CORP/COEP, Referrer, Permissions eklendi (next.config.js).
- Başlık hiyerarşisi: Sayfa şablonunda tekil H1 korunuyor; `main#main` landmark ve skip-link eklendi (erişilebilirlik/SEO).
- WhatsApp ve dış bağlantılar: `rel="noopener noreferrer"` ile güvenli.
- `next/image`: AVIF/WEBP aktiftir. Hero ve büyük görsellerde `priority` ve `sizes` kullanımı korunmuştur.
- Layout: Sabit navbar için içerik üst boşluğu korundu (`pt-16 md:pt-20`).
- JSON-LD: Organization, LocalBusiness, FAQ schema sayfa şablonunda yer alıyor.
- Kanonik: `metadata.alternates.canonical` tanımlı.
- Lighthouse önerileri: Kullanılmayan JS/CSS minimize; görsel boyutları doğru; fontlar `next/font` ile preload edilir.
- CDN: Vercel edge üzerinde cache ve sıkıştırma otomatik (Brotli).

Not: Trusted Types bazı Chrome sürümlerinde Next runtime ile çakışabildiği için kapalı tutuldu. İleride TT tekrar açılacaksa policy injection `app/layout` içine eklenmelidir.