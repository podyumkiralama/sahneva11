// components/UtilityBar.js
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/** Sahneva UtilityBar (stable, no kill-switch)
 *  - FAB → yan panel + sekmeler
 *  - Profiller / İçerik / Renk / Oryantasyon / Arama
 *  - Kalıcı tercihler (localStorage: ub.*)
 *  - CSS sadece globals.css’te (hc, ub-*)
 */

// Site içi hızlı arama rotaları
const ROUTES = [
  { href: "/", label: "Anasayfa", icon: "🏠" },
  { href: "/hakkimizda", label: "Hakkımızda", icon: "👥" },
  { href: "/iletisim", label: "İletişim", icon: "📞" },
  { href: "/podyum-kiralama", label: "Podyum", icon: "👑" },
  { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🖥️" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık", icon: "🎭" },
  { href: "/cadir-kiralama", label: "Çadır", icon: "⛺" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", icon: "🪑" },
  { href: "/sahne-kiralama", label: "Sahne", icon: "🎪" },
];

// localStorage anahtarları
const LS = {
  POS: "ub.pos.v1",
  FS: "ub.fs.v1",
  HC: "ub.hc.v1",
  UL: "ub.ul.v1",
  READABLE: "ub.readable.v1",
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
  RM: "ub.rm.v1",
  FOCUS: "ub.focus.v1",
  HIDEIMG: "ub.hideimg.v1",
  READMODE: "ub.readmode.v1",
  BIGCUR_B: "ub.bigcur.b.v1",
  BIGCUR_W: "ub.bigcur.w.v1",
  FONT_READABLE: "ub.font.read.v1",
};

export default function UtilityBar() {
  // Görünüm
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profiles"); // profiles|content|color|orientation|search
  const [position, setPosition] = useState("right"); // right|left

  // İçerik/renk/oryantasyon durumları
  const [isHighContrast, setHC] = useState(false);
  const [underlineLinks, setUL] = useState(false);
  const [readableText, setReadable] = useState(false);
  const [fontReadable, setFontReadable] = useState(false);

  const [alignLeft, setLeft] = useState(false);
  const [alignCenter, setCenter] = useState(false);
  const [alignJust, setJust] = useState(false);

  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(false);
  const [gray, setGray] = useState(false);
  const [desat, setDesat] = useState(false);
  const [sat, setSat] = useState(false);
  const [invert, setInvert] = useState(false);

  const [headings, setHead] = useState(false);
  const [reduceMotion, setRM] = useState(false);
  const [focusMode, setFocus] = useState(false);
  const [hideImages, setHideImg] = useState(false);
  const [readMode, setReadMode] = useState(false);

  const [bigCurB, setBigCurB] = useState(false);
  const [bigCurW, setBigCurW] = useState(false);

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Refs
  const stopStyleRef = useRef(null);
  const bigCurStyleRef = useRef(null);

  // Yardımcılar
  const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const delLS = (k) => { try { localStorage.removeItem(k); } catch {} };
  const toggleClass = (cls, on) => document.documentElement.classList.toggle(cls, on);

  // Animasyonları durdur
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
    if (bigCurStyleRef.current) {
      bigCurStyleRef.current.remove();
      bigCurStyleRef.current = null;
    }
  }, []);

  // İlk yüklemede kalıcı tercihleri uygula
  useEffect(() => {
    const d = document.documentElement;

    const pos = localStorage.getItem(LS.POS); if (pos) setPosition(pos);
    const fs = Number(localStorage.getItem(LS.FS)); if (!Number.isNaN(fs)) d.style.fontSize = `${fs}px`;

    const hc = localStorage.getItem(LS.HC) === "1"; toggleClass("hc", hc); setHC(hc);
    const ul = localStorage.getItem(LS.UL) === "1"; toggleClass("ub-ul", ul); setUL(ul);
    const rd = localStorage.getItem(LS.READABLE) === "1"; toggleClass("ub-readable", rd); setReadable(rd);
    const rf = localStorage.getItem(LS.FONT_READABLE) === "1"; toggleClass("ub-font-readable", rf); setFontReadable(rf);

    const al = localStorage.getItem(LS.LEFT) === "1"; toggleClass("ub-left", al); setLeft(al);
    const ac = localStorage.getItem(LS.CENTER) === "1"; toggleClass("ub-center", ac); setCenter(ac);
    const aj = localStorage.getItem(LS.JUST) === "1"; toggleClass("ub-just", aj); setJust(aj);

    const dk = localStorage.getItem(LS.DARK) === "1"; toggleClass("ub-dark", dk); setDark(dk);
    const lt = localStorage.getItem(LS.LIGHT) === "1"; toggleClass("ub-light", lt); setLight(lt);
    const gy = localStorage.getItem(LS.GRAY) === "1"; toggleClass("ub-gray", gy); setGray(gy);
    const ds = localStorage.getItem(LS.DESAT) === "1"; toggleClass("ub-desat", ds); setDesat(ds);
    const st = localStorage.getItem(LS.SAT) === "1"; toggleClass("ub-sat", st); setSat(st);
    const iv = localStorage.getItem(LS.INV) === "1"; toggleClass("ub-invert", iv); setInvert(iv);

    const hd = localStorage.getItem(LS.HEAD) === "1"; toggleClass("ub-headings", hd); setHead(hd);
    const rm = localStorage.getItem(LS.RM) === "1"; if (rm) enableStopAnimations(); setRM(rm);
    const fc = localStorage.getItem(LS.FOCUS) === "1"; toggleClass("ub-focusmode", fc); setFocus(fc);
    const hi = localStorage.getItem(LS.HIDEIMG) === "1"; toggleClass("ub-hideimg", hi); setHideImg(hi);
    const rdmd = localStorage.getItem(LS.READMODE) === "1"; toggleClass("ub-readmode", rdmd); setReadMode(rdmd);

    const bb = localStorage.getItem(LS.BIGCUR_B) === "1"; if (bb) enableBigCursor("black"); setBigCurB(bb);
    const bw = localStorage.getItem(LS.BIGCUR_W) === "1"; if (bw) enableBigCursor("white"); setBigCurW(bw);
  }, [enableStopAnimations, enableBigCursor]);

  // ESC ile kapat
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (isSearchOpen) { setSearchOpen(false); return; }
        if (panelOpen) { setPanelOpen(false); return; }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen, isSearchOpen]);

  // Arama filtre
  const filtered = useMemo(() => {
    const t = query.trim().toLowerCase();
    if (!t) return ROUTES;
    return ROUTES.filter((r) => r.label.toLowerCase().includes(t));
  }, [query]);

  // Font boyutu
  const setBaseFont = useCallback((px) => {
    document.documentElement.style.fontSize = `${px}px`;
    setLS(LS.FS, String(px));
  }, []);
  const resetFont = useCallback(() => {
    document.documentElement.style.fontSize = "";
    delLS(LS.FS);
  }, []);

  // Genel toggle helper
  const toggle = (cls, key, setter, on) => {
    const v = typeof on === "boolean" ? on : !document.documentElement.classList.contains(cls);
    toggleClass(cls, v); setLS(key, v ? "1" : "0"); setter(v); return v;
  };

  // Tek tuşluk toggler’lar
  const doHC = () => toggle("hc", LS.HC, setHC);
  const doUL = () => toggle("ub-ul", LS.UL, setUL);
  const doReadable = () => toggle("ub-readable", LS.READABLE, setReadable);
  const doFontReadable = () => toggle("ub-font-readable", LS.FONT_READABLE, setFontReadable);

  const doLeft = () => toggle("ub-left", LS.LEFT, setLeft);
  const doCenter = () => toggle("ub-center", LS.CENTER, setCenter);
  const doJust = () => toggle("ub-just", LS.JUST, setJust);

  const doDark = () => toggle("ub-dark", LS.DARK, setDark);
  const doLight = () => toggle("ub-light", LS.LIGHT, setLight);
  const doGray = () => toggle("ub-gray", LS.GRAY, setGray);
  const doDesat = () => toggle("ub-desat", LS.DESAT, setDesat);
  const doSat = () => toggle("ub-sat", LS.SAT, setSat);
  const doInvert = () => toggle("ub-invert", LS.INV, setInvert);

  const doHead = () => toggle("ub-headings", LS.HEAD, setHead);
  const doFocus = () => toggle("ub-focusmode", LS.FOCUS, setFocus);
  const doHideImg = () => toggle("ub-hideimg", LS.HIDEIMG, setHideImg);
  const doReadMode = () => toggle("ub-readmode", LS.READMODE, setReadMode);

  const doReduceMotion = () => {
    const next = !reduceMotion;
    if (next) enableStopAnimations(); else disableStopAnimations();
    setLS(LS.RM, next ? "1" : "0");
    setRM(next);
  };

  const doBigCursorBlack = () => {
    const next = !bigCurB;
    if (next) { enableBigCursor("black"); setLS(LS.BIGCUR_B, "1"); delLS(LS.BIGCUR_W); setBigCurW(false); }
    else { disableBigCursor(); delLS(LS.BIGCUR_B); }
    setBigCurB(next);
  };
  const doBigCursorWhite = () => {
    const next = !bigCurW;
    if (next) { enableBigCursor("white"); setLS(LS.BIGCUR_W, "1"); delLS(LS.BIGCUR_B); setBigCurB(false); }
    else { disableBigCursor(); delLS(LS.BIGCUR_W); }
    setBigCurW(next);
  };

  // FAB konumu
  const fixedStyle = {
    [position]: "max(0.5rem, env(safe-area-inset-right))",
    bottom: "calc(env(safe-area-inset-bottom) + var(--rb-bottom, 0px) + 12px)",
  };
  const utilityBtn = "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";
  const iconCls = "text-2xl md:text-3xl";

  // A) FAB (panel kapalıyken)
  if (!panelOpen) {
    return (
      <div className="fixed z-[1000]" style={fixedStyle}>
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-white/95 p-3 text-slate-800 shadow-2xl outline outline-1 outline-black/5 backdrop-blur-lg">
          <div className="flex w-full items-center justify-between -mt-1 mb-1">
            <button
              onClick={() => { const next = position === "right" ? "left" : "right"; setPosition(next); setLS(LS.POS, next); }}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              aria-label={`Konumu ${position === "right" ? "sola" : "sağa"} al`}
              title="Konum değiştir (sağ/sol)"
            >↔</button>
          </div>

          <button className={utilityBtn} onClick={() => setPanelOpen(true)} title="Erişilebilirlik panelini aç" aria-haspopup="dialog"><span className={iconCls} aria-hidden>♿</span></button>
          <button className={utilityBtn} onClick={() => setSearchOpen(true)} title="Site içi arama" aria-haspopup="dialog"><span className={iconCls} aria-hidden>🔍</span></button>
          <button className={utilityBtn} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} title="En üste dön" aria-label="Sayfanın en üstüne git"><span className={iconCls} aria-hidden>⬆️</span></button>
          <button className={utilityBtn} onClick={() => setPanelOpen(true)} title="Hızlı ayarlar"><span className={iconCls} aria-hidden>⚙️</span></button>
        </div>

        {isSearchOpen && <SearchModal onClose={() => setSearchOpen(false)} routes={ROUTES} />}
      </div>
    );
  }

  // B) Yan panel + Tabs
  return (
    <>
      <div role="dialog" aria-modal="true" aria-label="Erişilebilirlik paneli" className="fixed inset-0 z-[10000] flex">
        <div className="flex-1 bg-black/40" onClick={() => setPanelOpen(false)} />
        <aside className="w-full max-w-md bg-white text-slate-800 shadow-2xl border-l border-black/10 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden>♿</span>
              <h2 className="text-lg font-semibold">Erişilebilirlik Ayarları</h2>
            </div>
            <button onClick={() => setPanelOpen(false)} className="rounded-lg px-3 py-1.5 bg-white/20 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Paneli kapat">Kapat</button>
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
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`p-3 border-b ${activeTab===t.id?"border-indigo-600 text-indigo-700 bg-indigo-50":"border-slate-200 hover:bg-slate-50"}`}>{t.label}</button>
            ))}
          </nav>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "profiles" && (
              <section className="space-y-3">
                <ProfileRow label="Seizure Safe" desc="Animasyonları azaltır" on={doReduceMotion} off={doReduceMotion} icon="⚡" />
                <ProfileRow label="Vision Impaired" desc="Kontrast + okunabilirlik" on={() => { doHC(); doReadable(); doUL(); setBaseFont(18); }} off={() => { doHC(); doReadable(); doUL(); resetFont(); }} icon="👁️" />
                <ProfileRow label="ADHD Friendly" desc="Daha az dikkat dağıtıcı" on={() => { doReduceMotion(); doFocus(); doHead(); }} off={() => { doReduceMotion(); doFocus(); doHead(); }} icon="🧠" />
                <ProfileRow label="Cognitive" desc="Okuma & odak desteği" on={() => { doReadable(); doHead(); doBigCursorBlack(); }} off={() => { doReadable(); doHead(); doBigCursorBlack(); }} icon="🎯" />
                <ProfileRow label="Keyboard Nav" desc="Klavye ile rahat kullanım" on={doFocus} off={doFocus} icon="⌨️" />
                <ProfileRow label="Screen Reader" desc="Ekran okuyucu dostu" on={() => { doHideImg(); doReadMode(); }} off={() => { doHideImg(); doReadMode(); }} icon="🔈" />
              </section>
            )}

            {activeTab === "content" && (
              <section className="space-y-4">
                <Group title="Metin Boyutu">
                  <div className="grid grid-cols-4 gap-2">
                    <Btn onClick={() => setBaseFont(14)}>A-</Btn>
                    <Btn onClick={resetFont}>A</Btn>
                    <Btn onClick={() => setBaseFont(16)}>A+</Btn>
                    <Btn onClick={() => setBaseFont(18)}>A++</Btn>
                  </div>
                </Group>
                <Group title="Hizalama">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle pressed={alignLeft} onToggle={doLeft} label="Sola" />
                    <Toggle pressed={alignCenter} onToggle={doCenter} label="Ortala" />
                    <Toggle pressed={alignJust} onToggle={doJust} label="İkiye Yan" />
                  </div>
                </Group>
                <Group title="Okunabilirlik">
                  <div className="grid grid-cols-2 gap-2">
                    <Toggle pressed={readableText} onToggle={doReadable} label="Okuma Rahatlığı" />
                    <Toggle pressed={underlineLinks} onToggle={doUL} label="Linkleri Vurgula" />
                    <Toggle pressed={headings} onToggle={doHead} label="Başlıkları Vurgula" />
                    <Toggle pressed={fontReadable} onToggle={doFontReadable} label="Readable Font" />
                  </div>
                </Group>
              </section>
            )}

            {activeTab === "color" && (
              <section className="space-y-4">
                <Group title="Kontrast & Doygunluk">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle pressed={dark} onToggle={doDark} label="Dark" />
                    <Toggle pressed={light} onToggle={doLight} label="Light" />
                    <Toggle pressed={isHighContrast} onToggle={doHC} label="High" />
                    <Toggle pressed={sat} onToggle={doSat} label="High Sat" />
                    <Toggle pressed={desat} onToggle={doDesat} label="Low Sat" />
                    <Toggle pressed={gray} onToggle={doGray} label="Monochrome" />
                    <Toggle pressed={invert} onToggle={doInvert} label="Invert" />
                  </div>
                </Group>
              </section>
            )}

            {activeTab === "orientation" && (
              <section className="space-y-4">
                <Group title="Odağı Artır">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle pressed={reduceMotion} onToggle={doReduceMotion} label="Stop Anim" />
                    <Toggle pressed={focusMode} onToggle={doFocus} label="Odak Modu" />
                    <Toggle pressed={readMode} onToggle={doReadMode} label="Read Mode" />
                  </div>
                </Group>
                <Group title="Medya & Görseller">
                  <div className="grid grid-cols-3 gap-2">
                    <Toggle pressed={hideImages} onToggle={doHideImg} label="Resimleri Gizle" />
                    <Toggle pressed={headings} onToggle={doHead} label="Başlıkları Vurgula" />
                  </div>
                </Group>
                <Group title="İmleç">
                  <div className="grid grid-cols-2 gap-2">
                    <Toggle pressed={bigCurB} onToggle={doBigCursorBlack} label="Big Black Cursor" />
                    <Toggle pressed={bigCurW} onToggle={doBigCursorWhite} label="Big White Cursor" />
                  </div>
                </Group>
              </section>
            )}

            {activeTab === "search" && (
              <section>
                <SearchPanel />
              </section>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-2 border-t border-slate-200 p-3 bg-slate-50">
            <button onClick={() => setPanelOpen(false)} className="rounded-lg px-4 py-2 bg-slate-700 text-white hover:bg-slate-600">Kapat</button>
            <div className="flex gap-2">
              <button onClick={() => { const next = position === "right" ? "left" : "right"; setPosition(next); setLS(LS.POS, next); }} className="rounded-lg px-3 py-2 border border-slate-300 hover:bg-slate-100">Sağ/Sol</button>
              <button onClick={resetAll} className="rounded-lg px-3 py-2 border border-red-200 bg-red-50 text-red-700 hover:bg-red-100">Sıfırla</button>
            </div>
          </div>
        </aside>
      </div>

      {isSearchOpen && <SearchModal onClose={() => setSearchOpen(false)} routes={ROUTES} />}
    </>
  );

  // Reset tüm tercihleri
  function resetAll() {
    Object.values(LS).forEach(delLS);
    const d = document.documentElement;
    d.removeAttribute("style");
    d.classList.remove(
      "hc","ub-ul","ub-readable","ub-font-readable",
      "ub-left","ub-center","ub-just",
      "ub-dark","ub-light","ub-gray","ub-desat","ub-sat","ub-invert",
      "ub-headings","ub-focusmode","ub-hideimg","ub-readmode"
    );
    disableBigCursor(); disableStopAnimations();
    setHC(false); setUL(false); setReadable(false); setFontReadable(false);
    setLeft(false); setCenter(false); setJust(false);
    setDark(false); setLight(false); setGray(false); setDesat(false); setSat(false); setInvert(false);
    setHead(false); setFocus(false); setHideImg(false); setReadMode(false);
    setBigCurB(false); setBigCurW(false); setRM(false);
  }
}

/* ------- Küçük UI parçaları ------- */
function Btn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >{children}</button>
  );
}
function Toggle({ pressed, onToggle, label }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={pressed}
      className={`rounded-lg px-3 py-2 text-sm font-medium border ${pressed ? "border-indigo-500 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700 hover:border-indigo-500 hover:bg-slate-100"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
    >{label}</button>
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
        <button onClick={on} className="rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold hover:bg-indigo-500">ON</button>
        <button onClick={off} className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 text-xs font-semibold hover:bg-slate-300">OFF</button>
      </div>
    </div>
  );
}
function SearchPanel() {
  const [q, setQ] = useState("");
  const results = useMemo(()=>{
    const t = q.trim().toLowerCase();
    if (!t) return ROUTES;
    return ROUTES.filter(r => r.label.toLowerCase().includes(t));
  },[q]);
  return (
    <div className="space-y-3">
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Ne aramıştınız? (sahne, led ekran…)"
        className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 text-base text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" />
      <div className="flex flex-col gap-2">
        {results.map((r)=>(
          <Link key={r.href} href={r.href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="w-6 text-lg" aria-hidden>{r.icon}</span>
            <span className="flex-1 font-medium">{r.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
function SearchModal({ onClose, routes }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(()=>{
    const t = q.trim().toLowerCase();
    if (!t) return routes;
    return routes.filter(r => r.label.toLowerCase().includes(t));
  }, [q, routes]);
  return (
    <div className="animate-overlay fixed inset-0 z-[10001] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center" role="dialog" aria-modal="true" aria-labelledby="search-title" onClick={onClose}>
      <div className="animate-modal w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl" onClick={(e)=>e.stopPropagation()}>
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center">
          <h2 id="search-title" className="sr-only">Site içi arama</h2>
          <div className="relative w-full flex-1">
            <input value={q} onChange={(e)=>setQ(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 text-base text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" placeholder="Ne arayalım?" />
          </div>
          <button onClick={onClose} className="w-full rounded-lg bg-slate-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 md:w-auto" aria-label="Arama penceresini kapat">Kapat</button>
        </div>
        <div className="max-h-[420px] overflow-y-auto p-4">
          <div className="flex flex-col gap-2">
            {filtered.map((r)=>(
              <Link key={r.href} href={r.href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="w-6 text-lg" aria-hidden>{r.icon}</span>
                <span className="flex-1 font-medium">{r.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} // dosya burada biter
