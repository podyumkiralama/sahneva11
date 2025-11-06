// components/Footer.js
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import ExternalLink from "@/components/ExternalLink";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-neutral-950 text-white border-t border-white/10"
    >
      <div className="container py-12 md:py-16">
        {/* Üst kısım */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Marka / açıklama */}
          <section aria-labelledby="footer-about-title">
            <h2 id="footer-about-title" className="sr-only">
              Hakkımızda
            </h2>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-black text-xl tracking-tight"
              title="Sahneva Anasayfa"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"
              >
                ★
              </span>
              SAHNEVA
            </Link>

            <p className="text-sm text-neutral-300 mt-4 max-w-xs leading-relaxed">
              Sahne, podyum, LED ekran ve ses-ışık sistemleri kiralama. Türkiye
              geneli hızlı kurulum ve profesyonel teknik ekip.
            </p>

            {/* Sosyal bağlantılar */}
            <nav
              className="mt-5 flex items-center gap-3"
              aria-label="Sosyal medya"
            >
              <ExternalLink
                href="https://www.instagram.com/sahnevaorganizasyon"
                title="Instagram (yeni sekmede açılır)"
                ariaLabel="Sahneva Instagram (yeni sekmede açılır)"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span aria-hidden="true">📷</span>
                <span className="sr-only">Instagram</span>
              </ExternalLink>

              <ExternalLink
                href="https://www.youtube.com/@sahneva"
                title="YouTube (yeni sekmede açılır)"
                ariaLabel="Sahneva YouTube (yeni sekmede açılır)"
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span aria-hidden="true">▶️</span>
                <span className="sr-only">YouTube</span>
              </ExternalLink>
            </nav>
          </section>

          {/* Hızlı menü */}
          <nav aria-labelledby="footer-menu-title">
            <h2
              id="footer-menu-title"
              className="text-sm font-semibold text-white/90 mb-4"
            >
              Menü
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                  title="Sahneva Hakkında"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                  title="İletişim"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="/sahne-kiralama"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  Sahne Kiralama
                </Link>
              </li>
              <li>
                <Link
                  href="/podyum-kiralama"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  Podyum Kiralama
                </Link>
              </li>
              <li>
                <Link
                  href="/led-ekran-kiralama"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  LED Ekran Kiralama
                </Link>
              </li>
              <li>
                <Link
                  href="/ses-isik-sistemleri"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  Ses-Işık Sistemleri
                </Link>
              </li>
            </ul>
          </nav>

          {/* İletişim */}
          <section aria-labelledby="footer-contact-title">
            <h2
              id="footer-contact-title"
              className="text-sm font-semibold text-white/90 mb-4"
            >
              İletişim
            </h2>

            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a
                  href="tel:+905453048671"
                  className="hover:text-white transition-colors"
                  title="Telefon et"
                >
                  📞 +90 545 304 86 71
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sahneva.com"
                  className="hover:text-white transition-colors"
                  title="E-posta gönder"
                >
                  ✉️ info@sahneva.com
                </a>
              </li>
              <li className="text-neutral-400">
                İstanbul / Türkiye – Türkiye geneli hizmet
              </li>
            </ul>

            {/* WhatsApp hızlı buton */}
            <div className="mt-4">
              <ExternalLink
                href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Sahne+kiralama+ve+LED+ekran+fiyatlar%C4%B1+hakk%C4%B1nda+detayl%C4%B1+teklif+almak+istiyorum."
                title="WhatsApp Teklif (yeni sekmede açılır)"
                ariaLabel="WhatsApp Teklif (yeni sekmede açılır)"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-xl transition-colors"
              >
                <span aria-hidden="true">💬</span>
                <span>WhatsApp Teklif</span>
              </ExternalLink>
            </div>
          </section>

          {/* Harita & Yorumlar */}
          <section aria-labelledby="footer-maps-title">
            <h2
              id="footer-maps-title"
              className="text-sm font-semibold text-white/90 mb-4"
            >
              Harita & Yorumlar
            </h2>

            <div className="flex items-center gap-3">
              <ExternalLink
                href="https://g.page/r/CZhkMzkNOdgnEBI"
                className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300"
                title="Google Haritalar (yeni sekmede açılır)"
                ariaLabel="Google Haritalar (yeni sekmede açılır)"
              >
                <span
                  className="group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  📍
                </span>
                <span>Google Haritalar'da bizi bulun</span>
              </ExternalLink>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <ExternalLink
                href="https://g.page/r/CZhkMzkNOdgnEBI/review"
                className="group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3"
                title="Google Yorum (yeni sekmede açılır)"
                ariaLabel="Google Yorum (yeni sekmede açılır)"
              >
                <span
                  className="group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  ⭐
                </span>
                <span>Google Yorum</span>
              </ExternalLink>
            </div>
          </section>
        </div>

        {/* Alt satır */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Sahneva. Tüm hakları saklıdır.
          </p>

          <nav aria-label="Yasal bağlantılar">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="/kvkk"
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  KVKK
                </Link>
              </li>
              <li>
                <Link
                  href="/cerez-politikasi"
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/kullanim-sartlari"
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}