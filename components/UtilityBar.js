// components/UtilityBar.js
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// Site rotaları
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

// LocalStorage anahtarları
const LS = {
  HC: "ub.hc.v1",
  COLLAPSED: "ub.collapsed.v1",
  UL: "ub.ul.v1",
  RM: "ub.rm.v1",
  READABLE: "ub.readable.v1",
  POS: "ub.pos.v1",
  FS: "ub.fs.v1",
  // Yeni özellikler için
  LEFT: "ub.left.v1",
  CENTER: "ub.center.v1",
  JUST: "ub.just.v1",
  DARK: "ub.dark.v1",
  LIGHT: "ub.light.v1",
  GRAY: "ub.gray.v1",
  DESAT: "ub.desat.v1",
  SAT: "ub.sat.v1",
  INV: "ub.inv.v1",
  HEAD: "ub.head.v1",
  FOCUS: "ub.focus.v1",
  HIDEIMG: "ub.hideimg.v1",
  READMODE: "ub.readmode.v1",
  BIGCUR_B: "ub.bigcur.b.v1",
  BIGCUR_W: "ub.bigcur.w.v1",
  FONT_READABLE: "ub.font.read.v1",
};

export default function UtilityBar() {
  // Ana durumlar
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profiles");

  // Temel durumlar
  const [isHighContrast, setHighContrast] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [readableText, setReadableText] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [position, setPosition] = useState("right");

  // Yeni durumlar
  const [fontReadable, setFontReadable] = useState(false);
  const [alignLeft, setAlignLeft] = useState(false);
  const [alignCenter, setAlignCenter] = useState(false);
  const [alignJust, setAlignJust] = useState(false);
  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(false);
  const [gray, setGray] = useState(false);
  const [desat, setDesat] = useState(false);
  const [sat, setSat] = useState(false);
  const [invert, setInvert] = useState(false);
  const [headings, setHeadings] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [readMode, setReadMode] = useState(false);
  const [bigCurB, setBigCurB] = useState(false);
  const [bigCurW, setBigCurW] = useState(false);

  // Refs
  const dialogRef = useRef(null);
  const toolsRef = useRef(null);
  const lastFocusRef = useRef(null);
  const stopStyleRef = useRef(null);
  const bigCurStyleRef = useRef(null);

  // Yardımcı fonksiyonlar
  const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const delLS = (k) => { try { localStorage.removeItem(k); } catch {} };
  const toggleClass = (cls, on) => document.documentElement.classList.toggle(cls, on);

  // Animasyon kontrolü
  const enableStopAnimations = useCallback(() => {
    if (stopStyleRef.current) return;
    const style = document.createElement("style");
    style.id = "ub-stop-anims";
    style.textContent = `*{animation:none !important;transition:none !important;scroll-behavior:auto !important}`;
    document.head.appendChild(style);
    stopStyleRef.current = style;
  }, []);

  const disableStopAnimations = useCallback(() => {
    stopStyleRef.current?.remove?.();
    stopStyleRef.current = null;
  }, []);

  // Büyük imleç
  const enableBigCursor = useCallback((color = "black") => {
    if (bigCurStyleRef.current) bigCurStyleRef.current.remove();
    const style = document.createElement("style");
    style.id = "ub-big-cursor";
    const fill = color === "white" ? "white" : "black";
    const stroke = color === "white" ? "black" : "white";
    const svg = encodeURIComponent(`<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <circle cx="8" cy="8" r="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
</svg>`);
    style.textContent = `html{cursor:url("data:image/svg+xml,${svg}") 8 8, auto}`;
    document.head.appendChild(style);
    bigCurStyleRef.current = style;
  }, []);

  const disableBigCursor = useCallback(() => {
    bigCurStyleRef.current?.remove?.();
    bigCurStyleRef.current = null;
  }, []);

  // Başlangıç yükleme
  useEffect(() => {
    const d = document.documentElement;

    // Temel ayarlar
    const savedHC = localStorage.getItem(LS.HC) === "1";
    if (savedHC) d.classList.add("hc");
    setHighContrast(savedHC);

    const savedUL = localStorage.getItem(LS.UL) === "1";
    if (savedUL) d.classList.add("ub-ul");
    setUnderlineLinks(savedUL);

    const savedRM = localStorage.getItem(LS.RM) === "1";
    if (savedRM) enableStopAnimations();
    setReduceMotion(savedRM);

    const savedReadable = localStorage.getItem(LS.READABLE) === "1";
    if (savedReadable) d.classList.add("ub-readable");
    setReadableText(savedReadable);

    const savedCol = localStorage.getItem(LS.COLLAPSED) === "1";
    setCollapsed(savedCol);

    const savedPos = localStorage.getItem(LS.POS);
    if (savedPos === "left" || savedPos === "right") setPosition(savedPos);

    const savedFs = Number(localStorage.getItem(LS.FS));
    if (!Number.isNaN(savedFs) && savedFs >= 12 && savedFs <= 20) {
      d.style.fontSize = `${savedFs}px`;
    }

    // Yeni ayarlar
    const savedFontReadable = localStorage.getItem(LS.FONT_READABLE) === "1";
    if (savedFontReadable) d.classList.add("ub-font-readable");
    setFontReadable(savedFontReadable);

    const savedLeft = localStorage.getItem(LS.LEFT) === "1";
    if (savedLeft) d.classList.add("ub-left");
    setAlignLeft(savedLeft);

    const savedCenter = localStorage.getItem(LS.CENTER) === "1";
    if (savedCenter) d.classList.add("ub-center");
    setAlignCenter(savedCenter);

    const savedJust = localStorage.getItem(LS.JUST) === "1";
    if (savedJust) d.classList.add("ub-just");
    setAlignJust(savedJust);

    const savedDark = localStorage.getItem(LS.DARK) === "1";
    if (savedDark) d.classList.add("ub-dark");
    setDark(savedDark);

    const savedLight = localStorage.getItem(LS.LIGHT) === "1";
    if (savedLight) d.classList.add("ub-light");
    setLight(savedLight);

    const savedGray = localStorage.getItem(LS.GRAY) === "1";
    if (savedGray) d.classList.add("ub-gray");
    setGray(savedGray);

    const savedDesat = localStorage.getItem(LS.DESAT) === "1";
    if (savedDesat) d.classList.add("ub-desat");
    setDesat(savedDesat);

    const savedSat = localStorage.getItem(LS.SAT) === "1";
    if (savedSat) d.classList.add("ub-sat");
    setSat(savedSat);

    const savedInvert = localStorage.getItem(LS.INV) === "1";
    if (savedInvert) d.classList.add("ub-invert");
    setInvert(savedInvert);

    const savedHead = localStorage.getItem(LS.HEAD) === "1";
    if (savedHead) d.classList.add("ub-headings");
    setHeadings(savedHead);

    const savedFocus = localStorage.getItem(LS.FOCUS) === "1";
    if (savedFocus) d.classList.add("ub-focusmode");
    setFocusMode(savedFocus);

    const savedHideImg = localStorage.getItem(LS.HIDEIMG) === "1";
    if (savedHideImg) d.classList.add("ub-hideimg");
    setHideImages(savedHideImg);

    const savedReadMode = localStorage.getItem(LS.READMODE) === "1";
    if (savedReadMode) d.classList.add("ub-readmode");
    setReadMode(savedReadMode);

    const savedBigCurB = localStorage.getItem(LS.BIGCUR_B) === "1";
    if (savedBigCurB) enableBigCursor("black");
    setBigCurB(savedBigCurB);

    const savedBigCurW = localStorage.getItem(LS.BIGCUR_W) === "1";
    if (savedBigCurW) enableBigCursor("white");
    setBigCurW(savedBigCurW);
  }, [enableStopAnimations, enableBigCursor]);

  // ESC ve dış tıklama
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setActiveTool(null);
        setPanelOpen(false);
        lastFocusRef.current?.focus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

  // Arama filtresi
  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return ROUTES;
    const lower = trimmed.toLowerCase();
    return ROUTES.filter((r) => r.label.toLowerCase().includes(lower));
  }, [query]);

  // Font işlemleri
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

  // Toggle helper
  const toggleSetting = (cls, key, setter) => {
    const willEnable = !document.documentElement.classList.contains(cls);
    toggleClass(cls, willEnable);
    setLS(key, willEnable ? "1" : "0");
    setter(willEnable);
  };

  // Temel toggle'lar
  const toggleContrast = () => toggleSetting("hc", LS.HC, setHighContrast);
  const toggleUnderline = () => toggleSetting("ub-ul", LS.UL, setUnderlineLinks);
  const toggleReadable = () => toggleSetting("ub-readable", LS.READABLE, setReadableText);
  const toggleFontReadable = () => toggleSetting("ub-font-readable", LS.FONT_READABLE, setFontReadable);

  // Yeni toggle'lar
  const toggleLeft = () => toggleSetting("ub-left", LS.LEFT, setAlignLeft);
  const toggleCenter = () => toggleSetting("ub-center", LS.CENTER, setAlignCenter);
  const toggleJust = () => toggleSetting("ub-just", LS.JUST, setAlignJust);
  const toggleDark = () => toggleSetting("ub-dark", LS.DARK, setDark);
  const toggleLight = () => toggleSetting("ub-light", LS.LIGHT, setLight);
  const toggleGray = () => toggleSetting("ub-gray", LS.GRAY, setGray);
  const toggleDesat = () => toggleSetting("ub-desat", LS.DESAT, setDesat);
  const toggleSat = () => toggleSetting("ub-sat", LS.SAT, setSat);
  const toggleInvert = () => toggleSetting("ub-invert", LS.INV, setInvert);
  const toggleHeadings = () => toggleSetting("ub-headings", LS.HEAD, setHeadings);
  const toggleFocusMode = () => toggleSetting("ub-focusmode", LS.FOCUS, setFocusMode);
  const toggleHideImages = () => toggleSetting("ub-hideimg", LS.HIDEIMG, setHideImages);
  const toggleReadMode = () => toggleSetting("ub-readmode", LS.READMODE, setReadMode);

  const toggleReduceMotion = useCallback(() => {
    const willEnable = !reduceMotion;
    if (willEnable) {
      enableStopAnimations();
      setLS(LS.RM, "1");
    } else {
      disableStopAnimations();
      setLS(LS.RM, "0");
    }
    setReduceMotion(willEnable);
  }, [reduceMotion, enableStopAnimations, disableStopAnimations]);

  const toggleBigCursorBlack = () => {
    const next = !bigCurB;
    if (next) {
      enableBigCursor("black");
      setLS(LS.BIGCUR_B, "1");
      delLS(LS.BIGCUR_W);
      setBigCurW(false);
    } else {
      disableBigCursor();
      delLS(LS.BIGCUR_B);
    }
    setBigCurB(next);
  };

  const toggleBigCursorWhite = () => {
    const next = !bigCurW;
    if (next) {
      enableBigCursor("white");
      setLS(LS.BIGCUR_W, "1");
      delLS(LS.BIGCUR_B);
      setBigCurB(false);
    } else {
      disableBigCursor();
      delLS(LS.BIGCUR_W);
    }
    setBigCurW(next);
  };

  // Profil fonksiyonları
  const applySeizureSafe = () => {
    toggleReduceMotion();
  };

  const applyVisionImpaired = () => {
    if (!isHighContrast) toggleContrast();
    if (!readableText) toggleReadable();
    if (!underlineLinks) toggleUnderline();
    setBaseFont(18);
  };

  const applyADHDFriendly = () => {
    if (!reduceMotion) toggleReduceMotion();
    if (!focusMode) toggleFocusMode();
    if (!headings) toggleHeadings();
  };

  const applyCognitive = () => {
    if (!readableText) toggleReadable();
    if (!headings) toggleHeadings();
    if (!bigCurB) toggleBigCursorBlack();
  };

  const applyKeyboardNav = () => {
    if (!focusMode) toggleFocusMode();
  };

  const applyScreenReader = () => {
    if (!hideImages) toggleHideImages();
    if (!readMode) toggleReadMode();
  };

  // Reset
  const resetAll = () => {
    Object.values(LS).forEach(delLS);
    const d = document.documentElement;
    d.removeAttribute("style");
    d.classList.remove(
      "hc", "ub-ul", "ub-readable", "ub-font-readable",
      "ub-left", "ub-center", "ub-just",
      "ub-dark", "ub-light", "ub-gray", "ub-desat", "ub-sat", "ub-invert",
      "ub-headings", "ub-focusmode", "ub-hideimg", "ub-readmode"
    );
    disableBigCursor();
    disableStopAnimations();
    
    // State'leri sıfırla
    setHighContrast(false);
    setUnderlineLinks(false);
    setReadableText(false);
    setFontReadable(false);
    setAlignLeft(false);
    setAlignCenter(false);
    setAlignJust(false);
    setDark(false);
    setLight(false);
    setGray(false);
    setDesat(false);
    setSat(false);
    setInvert(false);
    setHeadings(false);
    setFocusMode(false);
    setHideImages(false);
    setReadMode(false);
    setBigCurB(false);
    setBigCurW(false);
    setReduceMotion(false);
  };

  // UI işlevleri
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

  const handleCollapse = useCallback(() => {
    setCollapsed(true);
    setLS(LS.COLLAPSED, "1");
  }, []);

  const handleExpand = useCallback(() => {
    setCollapsed(false);
    setLS(LS.COLLAPSED, "0");
  }, []);

  const switchSide = useCallback(() => {
    const next = position === "right" ? "left" : "right";
    setPosition(next);
    setLS(LS.POS, next);
  }, [position]);

  const openPanel = useCallback(() => {
    setPanelOpen(true);
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
  }, []);

  // UI sabitleri
  const isAccessibilityOpen = activeTool === "accessibility";
  const isContactOpen = activeTool === "contact";
  const utilityButtonBase = "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 motion-reduce:transform-none motion-reduce:transition-none";
  const iconCls = "text-2xl md:text-3xl";

  // Konum
  const fixedStyle = {
    [position]: "max(0.5rem, env(safe-area-inset-right))",
    bottom: "calc(env(safe-area-inset-bottom) + var(--rb-bottom, 0px) + 12px)",
  };

  // Küçük açıcı (collapsed)
  if (collapsed) {
    return (
      <button
        onClick={handleExpand}
        className="fixed z-[1000] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl outline outline-1 outline-black/5 backdrop-blur-md h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:scale-105 transition-transform"
        style={fixedStyle}
        aria-label="Yardımcı araçları aç"
        title="Araçları aç"
      >
        ⋮
      </button>
    );
  }

  // Ana UI
  return (
    <>
      {/* Ana Toolbar */}
      <div
        ref={toolsRef}
        className="fixed z-[1000] flex max-w-[80px] flex-col items-center gap-3 rounded-3xl border border-white/20 bg-white/95 p-3 text-slate-800 shadow-2xl outline outline-1 outline-black/5 backdrop-blur-lg"
        style={fixedStyle}
        role="region"
        aria-label="Hızlı yardımcı araçlar"
      >
        {/* Üst çubuk */}
        <div className="flex w-full items-center justify-between -mt-1 mb-1">
          <button
            onClick={switchSide}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label={`Konumu ${position === "right" ? "sola" : "sağa"} al`}
          >
            ↔
          </button>
          <button
            onClick={handleCollapse}
            className="group flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label="Araçları gizle"
          >
            <span className="text-base leading-none group-hover:rotate-90 transition-transform">✕</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          {/* Erişilebilirlik Panel Butonu */}
          <div className="relative flex justify-center">
            <button
              className={utilityButtonBase}
              onClick={openPanel}
              title="Erişilebilirlik paneli"
              aria-label="Erişilebilirlik panelini aç"
            >
              <span className={iconCls} aria-hidden="true">♿</span>
            </button>
          </div>

          {/* Arama */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${activeTool === "search" ? "scale-105" : ""}`}
              onClick={openSearchModal}
              title="Site içi arama"
              aria-haspopup="dialog"
            >
              <span className={iconCls} aria-hidden="true">🔍</span>
            </button>
          </div>

          {/* Üste dön */}
          <div className="relative flex justify-center">
            <button
              className={utilityButtonBase}
              onClick={scrollTop}
              title="En üste dön"
            >
              <span className={iconCls} aria-hidden="true">⬆️</span>
            </button>
          </div>

          {/* İletişim */}
          <div className="relative flex justify-center">
            <button
              className={`${utilityButtonBase} ${isContactOpen ? "scale-105" : ""}`}
              onClick={() => toggleTool("contact")}
              title="Hızlı iletişim"
            >
              <span className={iconCls} aria-hidden="true">📞</span>
            </button>

            {isContactOpen && (
              <div
                className={`absolute ${position === "right" ? "right-full mr-2" : "left-full ml-2"} top-1/2 z-[1001] -translate-y-1/2`}
              >
                <div className="flex w-56 flex-col gap-2 rounded-2xl border border-black/10 bg-white/95 p-4 text-sm text-slate-700 shadow-xl">
                  <a
                    href="tel:+905453048671"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 font-medium text-white transition hover:bg-blue-500"
                    onClick={() => setActiveTool(null)}
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 font-medium text-white transition hover:bg-emerald-400"
                    onClick={() => setActiveTool(null)}
                  >
                    💬 WhatsApp'tan Yaz
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Erişilebilirlik Paneli */}
      {panelOpen && (
        <div className="fixed inset-0 z-[10001] flex">
          <div className="flex-1 bg-black/40" onClick={closePanel} />
          <aside className="w-full max-w-md bg-white text-slate-800 shadow-2xl border-l border-black/10 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>♿</span>
                <h2 className="text-lg font-semibold">Erişilebilirlik Ayarları</h2>
              </div>
              <button onClick={closePanel} className="rounded-lg px-3 py-1.5 bg-white/20 hover:bg-white/30">
                Kapat
              </button>
            </div>

            {/* Tabs */}
            <nav className="grid grid-cols-5 text-sm">
              {[
                { id: "profiles", label: "Profiller" },
                { id: "content", label: "İçerik" },
                { id: "color", label: "Renk" },
                { id: "orientation", label: "Oryantasyon" },
                { id: "search", label: "Arama" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`p-3 border-b ${activeTab === t.id ? "border-indigo-600 text-indigo-700 bg-indigo-50" : "border-slate-200 hover:bg-slate-50"}`}
                >
                  {t.label}
                </button>
              ))}
            </nav>

            {/* Panel İçeriği */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeTab === "profiles" && (
                <div className="space-y-3">
                  <ProfileRow label="Seizure Safe" desc="Animasyonları azaltır" on={applySeizureSafe} off={applySeizureSafe} icon="⚡" />
                  <ProfileRow label="Vision Impaired" desc="Kontrast + okunabilirlik" on={applyVisionImpaired} off={resetAll} icon="👁️" />
                  <ProfileRow label="ADHD Friendly" desc="Daha az dikkat dağıtıcı" on={applyADHDFriendly} off={resetAll} icon="🧠" />
                  <ProfileRow label="Cognitive" desc="Okuma & odak desteği" on={applyCognitive} off={resetAll} icon="🎯" />
                  <ProfileRow label="Keyboard Nav" desc="Klavye ile rahat kullanım" on={applyKeyboardNav} off={applyKeyboardNav} icon="⌨️" />
                  <ProfileRow label="Screen Reader" desc="Ekran okuyucu dostu" on={applyScreenReader} off={resetAll} icon="🔈" />
                </div>
              )}

              {activeTab === "content" && (
                <div className="space-y-4">
                  <Group title="Metin Boyutu">
                    <div className="grid grid-cols-4 gap-2">
                      <Btn onClick={() => bumpFont(-1)}>A-</Btn>
                      <Btn onClick={resetFont}>A</Btn>
                      <Btn onClick={() => bumpFont(1)}>A+</Btn>
                      <Btn onClick={() => setBaseFont(18)}>A++</Btn>
                    </div>
                  </Group>
                  <Group title="Hizalama">
                    <div className="grid grid-cols-3 gap-2">
                      <Toggle pressed={alignLeft} onToggle={toggleLeft} label="Sola" />
                      <Toggle pressed={alignCenter} onToggle={toggleCenter} label="Ortala" />
                      <Toggle pressed={alignJust} onToggle={toggleJust} label="İkiye Yan" />
                    </div>
                  </Group>
                  <Group title="Okunabilirlik">
                    <div className="grid grid-cols-2 gap-2">
                      <Toggle pressed={readableText} onToggle={toggleReadable} label="Okuma Rahatlığı" />
                      <Toggle pressed={underlineLinks} onToggle={toggleUnderline} label="Linkleri Vurgula" />
                      <Toggle pressed={headings} onToggle={toggleHeadings} label="Başlıkları Vurgula" />
                      <Toggle pressed={fontReadable} onToggle={toggleFontReadable} label="Readable Font" />
                    </div>
                  </Group>
                </div>
              )}

              {activeTab === "color" && (
                <div className="space-y-4">
                  <Group title="Kontrast & Doygunluk">
                    <div className="grid grid-cols-3 gap-2">
                      <Toggle pressed={dark} onToggle={toggleDark} label="Dark" />
                      <Toggle pressed={light} onToggle={toggleLight} label="Light" />
                      <Toggle pressed={isHighContrast} onToggle={toggleContrast} label="High" />
                      <Toggle pressed={sat} onToggle={toggleSat} label="High Sat" />
                      <Toggle pressed={desat} onToggle={toggleDesat} label="Low Sat" />
                      <Toggle pressed={gray} onToggle={toggleGray} label="Monochrome" />
                      <Toggle pressed={invert} onToggle={toggleInvert} label="Invert" />
                    </div>
                  </Group>
                </div>
              )}

              {activeTab === "orientation" && (
                <div className="space-y-4">
                  <Group title="Odağı Artır">
                    <div className="grid grid-cols-3 gap-2">
                      <Toggle pressed={reduceMotion} onToggle={toggleReduceMotion} label="Stop Anim" />
                      <Toggle pressed={focusMode} onToggle={toggleFocusMode} label="Odak Modu" />
                      <Toggle pressed={readMode} onToggle={toggleReadMode} label="Read Mode" />
                    </div>
                  </Group>
                  <Group title="Medya & Görseller">
                    <div className="grid grid-cols-3 gap-2">
                      <Toggle pressed={hideImages} onToggle={toggleHideImages} label="Resimleri Gizle" />
                    </div>
                  </Group>
                  <Group title="İmleç">
                    <div className="grid grid-cols-2 gap-2">
                      <Toggle pressed={bigCurB} onToggle={toggleBigCursorBlack} label="Big Black Cursor" />
                      <Toggle pressed={bigCurW} onToggle={toggleBigCursorWhite} label="Big White Cursor" />
                    </div>
                  </Group>
                </div>
              )}

              {activeTab === "search" && (
                <SearchPanel />
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-2 border-t border-slate-200 p-3 bg-slate-50">
              <button onClick={closePanel} className="rounded-lg px-4 py-2 bg-slate-700 text-white hover:bg-slate-600">
                Kapat
              </button>
              <div className="flex gap-2">
                <button onClick={switchSide} className="rounded-lg px-3 py-2 border border-slate-300 hover:bg-slate-100">
                  Sağ/Sol
                </button>
                <button onClick={resetAll} className="rounded-lg px-3 py-2 border border-red-200 bg-red-50 text-red-700 hover:bg-red-100">
                  Sıfırla
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Arama Modalı */}
      {isSearchOpen && (
        <SearchModal 
          onClose={() => {
            setSearchOpen(false);
            setActiveTool(null);
            lastFocusRef.current?.focus?.();
          }} 
          query={query}
          setQuery={setQuery}
          filtered={filtered}
          dialogRef={dialogRef}
        />
      )}
    </>
  );
}

// Yardımcı bileşenler
function Btn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      {children}
    </button>
  );
}

function Toggle({ pressed, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={pressed}
      className={`rounded-lg px-3 py-2 text-sm font-medium border ${pressed ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700 hover:border-indigo-500 hover:bg-slate-100"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
    >
      {label}
    </button>
  );
}

function Group({ title, children }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</div>
      {children}
    </div>
  );
}

function ProfileRow({ label, desc, on, off, icon }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
      <div className="flex items-center gap-3">
        <div className="text-xl" aria-hidden>{icon}</div>
        <div>
          <div className="font-semibold text-slate-800">{label}</div>
          <div className="text-xs text-slate-500">{desc}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={on} className="rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold hover:bg-indigo-500">
          ON
        </button>
        <button onClick={off} className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 text-xs font-semibold hover:bg-slate-300">
          OFF
        </button>
      </div>
    </div>
  );
}

function SearchPanel() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return ROUTES;
    return ROUTES.filter(r => r.label.toLowerCase().includes(t));
  }, [q]);

  return (
    <div className="space-y-3">
      <input 
        value={q} 
        onChange={(e) => setQ(e.target.value)} 
        placeholder="Ne aramıştınız? (sahne, led ekran…)"
        className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 text-base text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" 
      />
      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
        {results.map((r) => (
          <Link 
            key={r.href} 
            href={r.href} 
            className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <span className="w-6 text-lg" aria-hidden>{r.icon}</span>
            <span className="flex-1 font-medium">{r.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SearchModal({ onClose, query, setQuery, filtered, dialogRef }) {
  return (
    <div 
      className="animate-overlay fixed inset-0 z-[10000] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center" 
      role="dialog" 
      aria-modal="true" 
      onClick={onClose}
    >
      <div 
        ref={dialogRef}
        className="animate-modal w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
          <h2 className="sr-only">Site içi arama</h2>
          <div className="relative w-full flex-1">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-500" aria-hidden="true">🔍</div>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-3 text-base text-slate-700 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              placeholder="Ne aramıştınız? (sahne, led ekran, ses sistemi...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button
            className="w-full rounded-lg bg-slate-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 md:w-auto"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>

        <div className="max-h-[420px] overflow-y-auto p-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center text-slate-500">
              <div className="text-5xl opacity-50" aria-hidden="true">🔍</div>
              <div className="text-lg font-semibold text-slate-700">Sonuç bulunamadı</div>
              <div className="text-sm opacity-70">Farklı anahtar kelimeler deneyin</div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filtered.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={onClose}
                >
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
  );
}
