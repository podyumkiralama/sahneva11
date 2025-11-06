// components/Footer.js
"use client";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-12 pb-6 border-t border-neutral-800">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">

          {/* 1: Hızlı Bağlantılar */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/hakkimizda"
                  className="text-neutral-300 hover:text-white transition-colors"
                  title="Sahneva Hakkında"
                >
                  Hakkımızda
                </a>
              </li>

              <li>
                <a
                  href="/iletisim"
                  className="text-neutral-300 hover:text-white transition-colors"
                  title="İletişim"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* 2: İletişim */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+905453048671"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  📞 +90 545 304 8671
                </a>
              </li>
              <li>
                <ExternalLink
                  href="https://wa.me/905453048671"
                  className="text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  💬 WhatsApp
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://g.page/r/CZhkMzkNOdgnEBI"
                  rel="noopener noreferrer nofollow"
                  title="Google Haritalar"
                  className="group inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-all duration-300"
                >
                  <span
                    className="group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    📍
                  </span>
                  Google Haritalar'da bizi bulun
                </ExternalLink>
              </li>
            </ul>
          </div>

          {/* 3: Sosyal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sosyal</h3>
            <div className="flex items-center gap-4">
              <ExternalLink
                href="https://www.instagram.com/sahnevaorganizasyon"
                rel="noopener noreferrer me"
                aria-label="Sahneva Instagram"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                📷
              </ExternalLink>

              <ExternalLink
                href="https://www.youtube.com/@sahneva"
                rel="noopener noreferrer me"
                aria-label="Sahneva YouTube"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                ▶️
              </ExternalLink>
            </div>

            <div className="mt-4">
              <ExternalLink
                href="https://g.page/r/CZhkMzkNOdgnEBI/review"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#b45309] hover:bg-[#92400e] text-white text-sm font-semibold px-4 py-2 transition-colors"
                title="Google Yorum Yaz"
              >
                ⭐ Google Yorum Yaz
              </ExternalLink>
            </div>
          </div>

          {/* 4: Adres */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Adres</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              İstanbul — Türkiye
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-700 text-sm text-neutral-400 text-center">
          © {new Date().getFullYear()} Sahneva — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}