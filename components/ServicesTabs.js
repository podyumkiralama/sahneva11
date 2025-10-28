// components/ServicesTabs.js
"use client";

import { useId, useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

// Panel grid'i: <768px tek sütun; >=768px 2 sütun (gap-6 = 1.5rem)
// Container padding ≈ 2rem
// ≥1280px'de container sabit 1280px; görsel sütun genişliği ≈ (1280 - 2rem - 1.5rem)/2 ≈ 612px
const HIZMET_SIZES =
  "(max-width: 768px) calc(100vw - 2rem), " +
  "(max-width: 1280px) calc((100vw - 2rem - 1.5rem) / 2), " +
  "612px";

const tabs = [
  {
    key: "podyum",
    title: "Podyum Kiralama",
    img: "/img/hizmet-podyum.webp",
    alt: "Podyum Kiralama – hizmet görseli",
    href: "/podyum-kiralama",
    desc:
      "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri sunuyoruz. Kaymaz kaplama, korkuluk ve rampa seçenekleri; iç/dış mekân güvenli kurulum.",
    badge: "Modüler ölçüler, hızlı kurulum, güvenli taşıyıcı sistem.",
  },
  {
    key: "led",
    title: "LED Ekran Kiralama",
    img: "/img/galeri/led-ekran-kiralama-1.webp",
    alt: "LED Ekran Kiralama – hizmet görseli",
    href: "/led-ekran-kiralama",
    desc:
      "İç/dış mekân uygun pitch değerleri, yüksek parlaklık ve yayın yönetimi ile kesintisiz görüntü.",
    badge: "İç/dış mekân, yüksek parlaklık, canlı yayın.",
  },
  {
    key: "ses-isik",
    title: "Ses & Işık Sistemleri",
    img: "/img/ses-isik/ses-sistemi.webp",
    alt: "Ses ve Işık Sistemleri – hizmet görseli",
    href: "/ses-isik-sistemleri",
    desc:
      "Line array hoparlörler, robot ışıklar, DMX kontrol ile sahnenize uygun ses ve ışık tasarımı.",
    badge: "Line array, robot ışık, DMX kontrol.",
  },
  {
    key: "sahne",
    title: "Sahne Kurulumu",
    img: "/img/hizmet-sahne.webp",
    alt: "Sahne Kurulumu – hizmet görseli",
    href: "/sahne-kiralama",
    desc:
      "Etkinliğinize uygun ölçü ve yükseklikte güvenli sahne altyapısı; truss ve aksesuarlar.",
    badge: "Özel ölçüler, güvenli taşıyıcı, truss.",
  },
  {
    key: "cadir",
    title: "Çadır Kiralama",
    img: "/img/galeri/cadir-kiralama-1.webp",
    alt: "Çadır Kiralama – hizmet görseli",
    href: "/cadir-kiralama",
    desc:
      "Farklı ebat ve tiplerde etkinlik çadırları; hızlı kurulum, zemin çözümleri ve aydınlatma.",
    badge: "Hızlı kurulum, zemin, aydınlatma.",
  },
  {
    key: "masa-sandalye",
    title: "Masa & Sandalye Kiralama",
    img: "/img/hizmet-masa.webp",
    alt: "Masa ve Sandalye Kiralama – hizmet görseli",
    href: "/masa-sandalye-kiralama",
    desc:
      "Banket, kokteyl ve konferans tipinde oturma çözümleri; taşıma ve yerleşim dahil.",
    badge: "Banket/kokteyl, yerleşim, taşıma.",
  },
];

export default function ServicesTabs({ headingId: providedHeadingId, heading = "Hizmetlerimiz" }) {
  const rid = useId();
  const headingId = providedHeadingId ?? `${rid}-services-heading`;
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const liveRef = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      const last = tabs.length - 1;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = active === last ? 0 : active + 1;
        setActive(next);
        tabsRef.current[next]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = active === 0 ? last : active - 1;
        setActive(prev);
        tabsRef.current[prev]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
        tabsRef.current[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        setActive(last);
        tabsRef.current[last]?.focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive((v) => v);
      }
    },
    [active]
  );

  useEffect(() => {
    if (!liveRef.current) return;
    liveRef.current.textContent = `${tabs[active].title} sekmesi açık.`;
    const timer = setTimeout(() => {
      if (liveRef.current) liveRef.current.textContent = "";
    }, 800);
    return () => clearTimeout(timer);
  }, [active]);

  const burst = useCallback((e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const s = document.createElement("span");
      s.className = "burst-particle";
      s.setAttribute("aria-hidden", "true");
      s.setAttribute("role", "presentation");
      const size = Math.random() * 10 + 6;
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.6;
      const distance = 28 + Math.random() * 14;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      s.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      s.style.setProperty("--dr", `${(Math.random() - 0.5) * 90}deg`);
      s.style.setProperty("--life", `${450 + Math.random() * 250}ms`);
      s.style.setProperty("--burst-c1", "#6d28d9");
      s.style.setProperty("--burst-c2", "#22c55e");
      btn.appendChild(s);
      setTimeout(() => s.remove(), 700);
    }
  }, [active]);

  return (
    <section className="container py-10 md:py-14" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-center mb-8">
        {heading}
      </h2>

      <div
        role="tablist"
        aria-labelledby={headingId}
        aria-orientation="horizontal"
        className="no-scrollbar mb-6 flex gap-2 overflow-x-auto rounded-xl bg-neutral-50 p-2"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.key}
              ref={(el) => (tabsRef.current[i] = el)}
              role="tab"
              type="button"
              id={`${rid}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${rid}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition",
                selected
                  ? "bg-[#6d28d9] text-white"
                  : "bg-white text-neutral-800 hover:bg-neutral-100",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40",
              ].join(" ")}
            >
              {t.title}
            </button>
          );
        })}
      </div>

      <p ref={liveRef} aria-live="polite" className="sr-only" />

      {tabs.map((t, i) => {
        const isActive = i === active;
        const eager = i === 0;
        return (
          <div
            key={t.key}
            role="tabpanel"
            id={`${rid}-panel-${i}`}
            aria-labelledby={`${rid}-tab-${i}`}
            hidden={!isActive}
            className="rounded-2xl border bg-white p-5 md:p-7 shadow-sm"
          >
            {isActive && (
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div className="relative h-52 w-full md:h-72 rounded-xl overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.alt}
                    fill
                    sizes={HIZMET_SIZES}
                    loading={eager || isActive ? "eager" : "lazy"}
                    fetchPriority={eager ? "high" : "auto"}
                    decoding="async"
                    quality={70}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-neutral-700">{t.desc}</p>
                  <p className="mt-3 text-sm text-neutral-600">{t.badge}</p>

                  <div className="mt-5 flex gap-3">
                    <a
                      className="relative inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold text-white bg-[#6d28d9] hover:bg-[#5b21b6] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40"
                      href={t.href}
                      onClick={burst}
                      aria-label={`${t.title} – detaylı incele`}
                    >
                      Detaylı İncele
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
