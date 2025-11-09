// components/UtilityBar.js
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// ——— Site rotaları (arama için) ———
const ROUTES = [
  { href: "/", label: "Anasayfa", title: "Sahneva Ana Sayfa", icon: "🏠" },
  { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva Hakkında", icon: "👥" },
  { href: "/iletisim", label: "İletişim", title: "Sahneva İletişim", icon: "📞" },
  { href: "/podyum-kiralama", label: "Podyum", title: "Podyum Kiralama", icon: "👑" },
  { href: "/led-ekran-kiralama", label: "LED Ekran", title: "LED Ekran Kiralama", icon: "🖥️" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık", title: "Ses ve Işık Sistemleri", icon: "🎭" },
  { href: "/cadir-kiralama", label: "Çadır", title: "Çadır Kiralama", icon: "⛺" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", title: "Masa Sandalye Kiralama", icon: "🪑" },
  { href: "/sahne-kiralama", label: "Sahne", title: "Sahne Kiralama", icon: "🎪" },
];

// ——— LocalStorage anahtarları ———
const LS = {
  HC: "ub.hc.v1",
  COLLAPSED: "ub.collapsed.v1",
  UL: "ub.ul.v1",          // underline links
  RM: "ub.rm.v1",          // reduce motion (stop animations)
  READABLE: "ub.readable.v1", // line/letter spacing boost
  POS: "ub.pos.v1",        // right | left
  FS: "ub.fs.v1",          // base font size px
  LEFT: "ub.left.v1",      // text align left
  INV: "ub.inv.v1",        // invert colors
  GRAY: "ub.gray.v1",      // grayscale
  SAT: "ub.sat.v1",        // desaturate
  HEADINGS: "ub.headings.v1", // highlight headings
  GUIDE: "ub.guide.v1",    // reading guide
  BIGCUR: "ub.bigcur.v1",  // big cursor
  FOCUSMODE: "ub.focusmode.v1", // dim page, emphasize main
};

export default function UtilityBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null); // "accessibility" | "contact" | "search" | null

  // Durumlar
  const [isHighContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [readableText, setReadableText] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [position, setPosition] = useState("right"); // "right" | "left"
  const [textLeft, setTextLeft] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [desaturate, setDesaturate] = useState(false);
  const [headingsHL, setHeadingsHL] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  // Reading guide konumu
  const [guideY, setGuideY] = useState(0);

  // Dahili
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);
  const lastFocusRef = useRef(null);
  const stopStyleRef = useRef(null); // animasyon durdurma için <style> node
  const bigCurStyleRef = useRef(null); // büyük imleç için <style>

  // ——— Yardımcılar ———
  const addClass = (cls, enable) => {
    const d = document.documentElement;
    d.classList.toggle(cls, !!enable);
  };

  const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const delLS = (k) => { try { localStorage.removeItem(k); } catch {} };

  // ——— Persisted prefs yükle ———
  useEffect(() => {
    const d = document.documentElement;

    const savedHC = localStorage.getItem(LS.HC) === "1"; addClass("hc", savedHC); setHighContrast(savedHC);
    const savedUL = localStorage.getItem(LS.UL) === "1"; addClass("ub-ul", savedUL); setUnderlineLinks(savedUL);
    const savedRM = localStorage.getItem(LS.RM) === "1"; if (savedRM) enableStopAnimations(); setReduceMotion(savedRM);
    const savedReadable = localStorage.getItem(LS.READABLE) === "1"; addClass("ub-readable", savedReadable); setReadableText(savedReadable);
    const savedCol = localStorage.getItem(LS.COLLAPSED) === "1"; setCollapsed(savedCol);
    const savedPos = localStorage.getItem(LS.POS); if (savedPos === "left" || savedPos === "right") setPosition(savedPos);
    const savedFs = Number(localStorage.getItem(LS.FS)); if (!Number.isNaN(savedFs) && savedFs >= 12 && savedFs <= 20) { d.style.fontSize = `${savedFs}px`; }

    const savedLeft = localStorage.getItem(LS.LEFT) === "1"; addClass("ub-left", savedLeft); setTextLeft(savedLeft);
    const savedInv = localStorage.getItem(LS.INV) === "1"; addClass("ub-invert", savedInv); setInvertColors(savedInv);
    const savedGray = localStorage.getItem(LS.GRAY) === "1"; addClass("ub-gray", savedGray); setGrayscale(savedGray);
    const savedSat = localStorage.getItem(LS.SAT) === "1"; addClass("ub-desat", savedSat); setDesaturate(savedSat);
    const savedHead = localStorage.getItem(LS.HEADINGS) === "1"; addClass("ub-headings", savedHead); setHeadingsHL(savedHead);

    const savedGuide = localStorage.getItem(LS.GUIDE) === "1"; setReadingGuide(savedGuide);
    const savedBig = localStorage.getItem(LS.BIGCUR) === "1"; if (savedBig) enableBigCursor(); setBigCursor(savedBig);
    const savedFocus = localStorage.getItem(LS.FOCUSMODE) === "1"; addClass("ub-focusmode", savedFocus); setFocusMode(savedFocus);
  }, []);

  // ——— ESC ile kapatma ———
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setActiveTool(null);
        lastFocusRef.current?.focus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ——— Dış tıklama ———
  useEffect(() => {
    const onClick = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) setActiveTool(null);
      if (isSearchOpen && dialogRef.current && !dialogRef.current.contains(e.target)) {
        setSearchOpen(false);
        lastFocusRef.current?.focus?.();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isSearchOpen]);

  // ——— Reading Guide mouse takip ———
  useEffect(() => {
    if (!readingGuide) return;
    const onMove = (e) => { setGuideY(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [readingGuide]);

  // ——— Arama filtresi ———
  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return ROUTES;
    const lower = trimmed.toLowerCase();
    return ROUTES.filter((r) => r.label.toLowerCase().includes(lower));
  }, [query]);

  // ——— Aksiyonlar ———
  const setBaseFont = useCallback((px) => {
    const root = document.documentElement;
    root.style.fontSize = `${px}px`;
    setLS(LS.FS, String(px));
  }, []);

  const bumpFont = useCallback((delta) => {
    const root = document.documentElement;
    const current = parseFloat(getComputedStyle(root).fontSize) || 16;
    const next = Math.min(20, Math.max(12, current + delta));
    setBaseFont(next);
  }, [setBaseFont]);

  const resetFont = useCallback(() => {
    const root = document.documentElement;
    root.style.fontSize = "";
    delLS(LS.FS);
  }, []);

  const toggleClassLS = useCallback((cls, key, stateSetter) => {
    const el = document.documentElement;
    const willEnable = !el.classList.contains(cls);
    el.classList.toggle(cls);
    setLS(key, willEnable ? "1" : "0");
    stateSetter(willEnable);
  }, []);

  const toggleContrast = useCallback(() => toggleClassLS("hc", LS.HC, setHighContrast), [toggleClassLS]);
  const toggleUnderline = useCallback(() => toggleClassLS("ub-ul", LS.UL, setUnderlineLinks), [toggleClassLS]);
  const toggleReadable = useCallback(() => toggleClassLS("ub-readable", LS.READABLE, setReadableText), [toggleClassLS]);
  const toggleLeft = useCallback(() => toggleClassLS("ub-left", LS.LEFT, setTextLeft), [toggleClassLS]);
  const toggleInvert = useCallback(() => toggleClassLS("ub-invert", LS.INV, setInvertColors), [toggleClassLS]);
  const toggleGray = useCallback(() => toggleClassLS("ub-gray", LS.GRAY, setGrayscale), [toggleClassLS]);
  const toggleDesat = useCallback(() => toggleClassLS("ub-desat", LS.SAT, setDesaturate), [toggleClassLS]);
  const toggleHeadings = useCallback(() => toggleClassLS("ub-headings", LS.HEADINGS, setHeadingsHL), [toggleClassLS]);
  const toggleFocusMode = useCallback(() => toggleClassLS("ub-focusmode", LS.FOCUSMODE, setFocusMode), [toggleClassLS]);

  const enableStopAnimations = useCallback(() => {
    if (stopStyleRef.current) return;
    const el = document.createElement("style");
    el.id = "ub-stop-anims";
    el.textContent = `*{animation:none !important;transition:none !important;scroll-behavior:auto !important}`;
    document.head.appendChild(el);
    stopStyleRef.current = el;
  }, []);
  const disableStopAnimations = useCallback(() => {
    if (stopStyleRef.current) {
      stopStyleRef.current.remove();
      stopStyleRef.current = null;
    }
  }, []);

  const enableBigCursor = useCallback((color = "black") => {
    if (bigCurStyleRef.current) bigCurStyleRef.current.remove();
    const style = document.createElement("style");
    style.id = "ub-big-cursor";
    const fill = color === "white" ? "white" : "black";
    const stroke = color === "white" ? "black" : "white";
    const svg = encodeURIComponent(`<?xml version="1.0"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">\n  <circle cx="8" cy="8" r="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>\n</svg>`);
    style.textContent = `html{cursor:url("data:image/svg+xml,${svg}") 8 8, auto}`;
    document.head.appendChild(style);
    bigCurStyleRef.current = style;
  }, []);
  const disableBigCursor = useCallback(() => {
    if (bigCurStyleRef.current) {
      bigCurStyleRef.current.remove();
      bigCurStyleRef.current = null;
    }
  }, []);
    bigCurStyleRef.current = null;
  }, []);

  const toggleBigCursor = useCallback(() => {
    const willEnable = !bigCursor;
    if (willEnable) { enableBigCursor(); setLS(LS.BIGCUR, "1"); }
    else { disableBigCursor(); setLS(LS.BIGCUR, "0"); }
    setBigCursor(willEnable);
  }, [bigCursor, enableBigCursor, disableBigCursor]);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveTool(null);
  }, []);

  const toggleTool = useCallback((toolName) => {
    setActiveTool((prev) => (prev === toolName ? null : toolName));
    if (toolName !== "search") setSearchOpen(false);
  }, []);

  const openSearchModal = useCallback((e) => {
    lastFocusRef.current = e?.currentTarget || document.activeElement;
    setSearchOpen(true);
    setActiveTool("search");
    setTimeout(() => {
      const input = dialogRef.current?.querySelector("input");
      input?.focus();
      input?.select();
    }, 50);
  }, []);

  const handleCollapse = useCallback(() => { setCollapsed(true); setLS(LS.COLLAPSED, "1"); }, []);
  const handleExpand   = useCallback(() => { setCollapsed(false); setLS(LS.COLLAPSED, "0"); }, []);

  const switchSide = useCallback(() => {
    const next = position === "right" ? "left" : "right";
    setPosition(next); setLS(LS.POS, next);
  }, [position]);

  const resetAll = useCallback(() => {
    // LS temizle
    Object.values(LS).forEach((k) => delLS(k));
    // Classlar & stiller
    const d = document.documentElement;
    d.classList.remove("hc","ub-ul","ub-readable","ub-left","ub-invert","ub-gray","ub-desat","ub-headings","ub-focusmode");
    d.style.fontSize = "";
    disableStopAnimations();
    disableBigCursor();
    setHighContrast(false); setUnderlineLinks(false); setReduceMotion(false); setReadableText(false);
    setTextLeft(false); setInvertColors(false); setGrayscale(false); setDesaturate(false); setHeadingsHL(false);
    setReadingGuide(false); setBigCursor(false); setFocusMode(false);
  }, [disableStopAnimations, disableBigCursor]);

  const isAccessibilityOpen = activeTool === "accessibility";
  const isContactOpen = activeTool === "contact";

  // ——— UI class presetleri ———
  const utilityButtonBase =
    "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl " +
    "bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-xl " +
    "transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-indigo-500 motion-reduce:transform-none motion-reduce:transition-none";
  const iconCls = "text-2xl md:text-3xl";

  // ——— Konum ———
  const fixedStyle = {
    [position]: "max(0.5rem, env(safe-area-inset-right))",
    bottom: "calc(env(safe-area-inset-bottom) + var(--rb-bottom, 0px) + 12px)",
  };

  // ——— Küçük açıcı (collapsed) ———
  if (collapsed) {
    return (
      <button
        onClick={handleExpand}
        className="fixed z-[1000] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl outline outline-1 outline-black/5 backdrop-blur-md
                   h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:scale-105 transition-transform"
        style={fixedStyle}
        aria-label="Yardımcı araçları aç"
        title="Araçları aç"
      >
        ⋮
      </button>
    );
  }

  // ——— Geniş toolbar ———
  return (
    <>
      {/* Reading Guide overlay */}
      {readingGuide && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[999]"
          style={{
            background:
              `linear-gradient(to bottom, rgba(0,0,0,.55) 0, rgba(0,0,0,.55) ${Math.max(0, guideY - 60)}px, rgba(0,0,0,0) ${guideY - 60}px, rgba(0,0,0,0) ${guideY + 60}px, rgba(0,0,0,.55) ${guideY + 60}px)`,
            transition: "background 60ms linear",
          }}
        />
      )}

      <div
        ref={toolsRef}
        className="
          fixed
          z-[1000]
          flex
          max-w-[80px]
          flex-col
          items-center
          gap-3
          rounded-3xl
          border border-white/20
          bg-white/95
          p-3
          text-slate-800
          shadow-2xl
          outline outline-1 outline-black/5
          backdrop-blur-lg
        "
        style={fixedStyle}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        {/* Üst çubuk: gizle ve taraf değiştir */}
        <div className="flex w-full items-center justify-between -mt-1 mb-1">
          <button
            onClick={switchSide}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label={`Konumu ${position === "right" ? "sola" : "sağa"} al`}
            title="Konum değiştir (sağ/sol)"
          >
            ↔
          </button>
          <button
            onClick={handleCollapse}
            className="group flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label="Araçları gizle"
            title="Araçları gizle"
          >
            <span className="text-base leading-none group-hover:rotate-90 transition-transform">✕</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          {/* Erişilebilirlik */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${activeTool === "accessibility" ? "scale-105" : ""}`}
              onClick={() => setActiveTool((p)=> p === "accessibility" ? null : "accessibility")}
              title="Erişilebilirlik araçları"
              aria-expanded={activeTool === "accessibility"}
              aria-controls={activeTool === "accessibility" ? "utility-accessibility" : undefined}
            >
              <span className={iconCls} aria-hidden="true">♿</span>
              <span className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${activeTool === "accessibility" ? "opacity-100" : "opacity-0"}`} aria-hidden="true"/>
            </button>

            {activeTool === "accessibility" && (
              <div
                id="utility-accessibility"
                className={`absolute ${position === "right" ? "right-full mr-2" : "left-full ml-2"} top-1/2 z-[1001] -translate-y-1/2`}
                role="region"
                aria-labelledby="utility-accessibility-title"
              >
                <h2 id="utility-accessibility-title" className="sr-only">Erişilebilirlik araçları</h2>

                <div className="w-72 space-y-4 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
                  {/* Yazı boyutu */}
                  <div className="space-y-3">
                    <div className="text-center text-sm font-semibold text-slate-600">Yazı Boyutu</div>
                    <div className="grid grid-cols-4 gap-2">
                      <button onClick={() => setBaseFont(14)} className="btn-acc">A-</button>
                      <button onClick={() => resetFont()} className="btn-acc">A</button>
                      <button onClick={() => setBaseFont(16)} className="btn-acc">A+</button>
                      <button onClick={() => setBaseFont(18)} className="btn-acc">A++</button>
                    </div>
                  </div>

                  {/* Ana anahtarlar */}
                  <div className="grid grid-cols-1 gap-2">
                    <AccToggle onClick={toggleContrast} pressed={isHighContrast} label="🎨 Yüksek Kontrast" />
                    <AccToggle onClick={toggleUnderline} pressed={underlineLinks} label="🔗 Linklerin Altını Çiz" />
                    <AccToggle onClick={toggleReadable} pressed={readableText} label="📖 Okuma Rahatlığı" />
                    <AccToggle onClick={toggleLeft} pressed={textLeft} label="↤ Metni Sola Hizala" />
                    <AccToggle onClick={toggleReduceMotion} pressed={reduceMotion} label="⏸️ Animasyonları Durdur" />
                    <AccToggle onClick={toggleHeadings} pressed={headingsHL} label="# Başlıkları Vurgula" />
                    <AccToggle onClick={() => { const n=!readingGuide; setReadingGuide(n); setLS(LS.GUIDE, n?"1":"0"); }} pressed={readingGuide} label="📏 Okuma Cetveli" />
                    <AccToggle onClick={toggleBigCursor} pressed={bigCursor} label="🖱️ Büyük İmleç" />
                    <AccToggle onClick={toggleFocusMode} pressed={focusMode} label="🎯 Odak Modu" />
                  </div>

                  {/* Renk/filtreler */}
                  <div className="space-y-2">
                    <div className="text-center text-sm font-semibold text-slate-600">Renk / Görünüm</div>
                    <div className="grid grid-cols-3 gap-2">
                      <button onClick={toggleInvert} className={`btn-acc ${invertColors?"ring-2 ring-indigo-500":""}`}>Ters</button>
                      <button onClick={toggleGray} className={`btn-acc ${grayscale?"ring-2 ring-indigo-500":""}`}>Gri</button>
                      <button onClick={toggleDesat} className={`btn-acc ${desaturate?"ring-2 ring-indigo-500":""}`}>Doygun<sup className="ml-0.5">-</sup></button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button onClick={resetAll} className="w-full rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sıfırla</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Arama */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${activeTool === "search" ? "scale-105" : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
              aria-expanded={isSearchOpen}
              aria-controls={isSearchOpen ? "search-dialog" : undefined}
            >
              <span className={iconCls} aria-hidden="true">🔍</span>
              <span className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${activeTool === "search" ? "opacity-100" : "opacity-0"}`} aria-hidden="true"/>
            </button>
          </div>

          {/* Üste dön */}
          <div className="relative flex justify-center">
            <button className={utilityButtonBase} onClick={scrollTop} title="En üste dön" aria-label="Sayfanın en üstüne git">
              <span className={iconCls} aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${activeTool === "contact" ? "scale-105" : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
              aria-expanded={activeTool === "contact"}
              aria-controls={activeTool === "contact" ? "utility-contact" : undefined}
            >
              <span className={iconCls} aria-hidden="true">📞</span>
              <span className={`absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 transition-opacity duration-300 ${activeTool === "contact" ? "opacity-100" : "opacity-0"}`} aria-hidden="true"/>
            </button>

            {activeTool === "contact" && (
              <div
                id="utility-contact"
                className={`absolute ${position === "right" ? "right-full mr-2" : "left-full ml-2"} top-1/2 z-[1001] -translate-y-1/2`}
                role="region"
                aria-labelledby="utility-contact-title"
              >
                <h2 id="utility-contact-title" className="sr-only">Hızlı iletişim</h2>
                <div className="flex w-56 flex-col gap-2 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
                  <a href="tel:+905453048671" className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 font-medium text-white transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" onClick={() => setActiveTool(null)} aria-label="Telefon ile ara">📞 Hemen Ara</a>
                  <a href="https://wa.me/905453048671" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 font-medium text-white transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" onClick={() => setActiveTool(null)} aria-label="WhatsApp'tan mesaj gönder">💬 WhatsApp'tan Yaz</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arama Modalı */}
      {isSearchOpen && (
        <div
          id="search-dialog"
          className="animate-overlay fixed inset-0 z-[10000] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-title"
          onClick={() => { setSearchOpen(false); setActiveTool(null); lastFocusRef.current?.focus?.(); }}
        >
          <div ref={dialogRef} className="animate-modal w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
              <h2 id="search-title" className="sr-only">Site içi arama</h2>
              <div className="relative w-full flex-1">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-500" aria-hidden="true">🔍</div>
                <input type="text" className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-3 text-base text-slate-700 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" placeholder="Ne aramıştınız? (sahne, led ekran, ses sistemi...)" value={query} onChange={(e) => setQuery(e.target.value)} id="search-input" name="search" autoComplete="off" aria-describedby="search-results" />
              </div>
              <button className="w-full rounded-lg bg-slate-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 md:w-auto" onClick={() => { setSearchOpen(false); setActiveTool(null); lastFocusRef.current?.focus?.(); }} aria-label="Arama penceresini kapat">Kapat</button>
            </div>
            <div id="search-results" className="max-h-[420px] overflow-y-auto p-4">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center text-slate-500" role="status" aria-live="polite">
                  <div className="text-5xl opacity-50" aria-hidden="true">🔍</div>
                  <div className="text-lg font-semibold text-slate-700">Sonuç bulunamadı</div>
                  <div className="text-sm opacity-70">Farklı anahtar kelimeler deneyin</div>
                </div>
              ) : (
                <div className="flex flex-col gap-2" role="list">
                  {filtered.map((route) => (
                    <Link key={route.href} href={route.href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={() => { setSearchOpen(false); setActiveTool(null); lastFocusRef.current?.focus?.(); }} aria-label={`${route.label} sayfasına git`}>
                      <span className="w-6 text-lg" aria-hidden="true">{route.icon}</span>
                      <span className="flex-1 font-medium">{route.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p><strong>İpucu:</strong> "sahne", "led ekran", "ses sistemi" gibi anahtar kelimeler deneyin</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ——— Küçük yardımcı bileşenler ———
function AccToggle({ onClick, pressed, label }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      aria-pressed={pressed}
    >
      <span>{label}</span>
      <span className="text-xs opacity-60">{pressed ? "Açık" : "Kapalı"}</span>
    </button>
  );
}
