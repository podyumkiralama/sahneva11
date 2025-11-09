// components/UtilityBar.js "use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react"; import Link from "next/link";

/**

Sahneva – Accessibility Utility Bar (v2 – Panel + Tabs)


---

• Floating FAB (A-şık: minimal) + Geniş Yan Panel (B-şık: accessiBe benzeri)

• Tabs: Profiles, Content, Color, Orientation

• Tamamen class toggle + CSS var değişkenleri

• Tüm tercihler localStorage ile kalıcı

• A11y: aria-* ve odak yönetimi */


// ——— Arama için site rotaları ——— const ROUTES = [ { href: "/", label: "Anasayfa", title: "Sahneva Ana Sayfa", icon: "🏠" }, { href: "/hakkimizda", label: "Hakkımızda", title: "Sahneva Hakkında", icon: "👥" }, { href: "/iletisim", label: "İletişim", title: "Sahneva İletişim", icon: "📞" }, { href: "/podyum-kiralama", label: "Podyum", title: "Podyum Kiralama", icon: "👑" }, { href: "/led-ekran-kiralama", label: "LED Ekran", title: "LED Ekran Kiralama", icon: "🖥️" }, { href: "/ses-isik-sistemleri", label: "Ses & Işık", title: "Ses ve Işık Sistemleri", icon: "🎭" }, { href: "/cadir-kiralama", label: "Çadır", title: "Çadır Kiralama", icon: "⛺" }, { href: "/masa-sandalye-kiralama", label: "Masa Sandalye", title: "Masa Sandalye Kiralama", icon: "🪑" }, { href: "/sahne-kiralama", label: "Sahne", title: "Sahne Kiralama", icon: "🎪" }, ];

// ——— LocalStorage Keyleri ——— const LS = { HC: "ub.hc.v1", COLLAPSED: "ub.collapsed.v1", POS: "ub.pos.v1", FS: "ub.fs.v1", UL: "ub.ul.v1", READABLE: "ub.readable.v1", RM: "ub.rm.v1", LEFT: "ub.left.v1", CENTER: "ub.center.v1", JUST: "ub.just.v1", INV: "ub.inv.v1", GRAY: "ub.gray.v1", DESAT: "ub.desat.v1", SAT: "ub.sat.v1", DARK: "ub.dark.v1", LIGHT: "ub.light.v1", HEAD: "ub.head.v1", GUIDE: "ub.guide.v1", MASK: "ub.mask.v1", BIGCUR_B: "ub.bigcur.b.v1", BIGCUR_W: "ub.bigcur.w.v1", FOCUS: "ub.focus.v1", HIDEIMG: "ub.hideimg.v1", MUTE: "ub.mute.v1", READMODE: "ub.readmode.v1", TXTCLR: "ub.txtclr.v1", TTLCLR: "ub.ttlclr.v1", BGCLR: "ub.bgclr.v1", FONT_READABLE: "ub.font.readable.v1", };

const TABS = ["profiles", "content", "color", "orientation", "search"];

export default function UtilityBar() { // ——— Görünüm/konum ——— const [collapsed, setCollapsed] = useState(false); const [position, setPosition] = useState("right"); // right | left const [panelOpen, setPanelOpen] = useState(false); const [activeTab, setActiveTab] = useState("profiles");

// ——— Ayar durumları ——— const [isHighContrast, setHighContrast] = useState(false); const [underlineLinks, setUnderlineLinks] = useState(false); const [readableText, setReadableText] = useState(false); const [reduceMotion, setReduceMotion] = useState(false); const [alignLeft, setAlignLeft] = useState(false); const [alignCenter, setAlignCenter] = useState(false); const [alignJust, setAlignJust] = useState(false); const [invertColors, setInvertColors] = useState(false); const [gray, setGray] = useState(false); const [desat, setDesat] = useState(false); const [sat, setSat] = useState(false); const [dark, setDark] = useState(false); const [light, setLight] = useState(false); const [headings, setHeadings] = useState(false); const [guide, setGuide] = useState(false); const [mask, setMask] = useState(false); const [bigCurB, setBigCurB] = useState(false); const [bigCurW, setBigCurW] = useState(false); const [focusMode, setFocusMode] = useState(false); const [hideImages, setHideImages] = useState(false); const [muteSounds, setMuteSounds] = useState(false); const [readMode, setReadMode] = useState(false); const [fontReadable, setFontReadable] = useState(false);

const [query, setQuery] = useState(""); const [isSearchOpen, setSearchOpen] = useState(false);

// Dahili referanslar const lastFocusRef = useRef(null); const toolsRef = useRef(null); const panelRef = useRef(null); const dialogRef = useRef(null); const stopStyleRef = useRef(null); // reduce motion const bigCurStyleRef = useRef(null); // big cursor

// ——— Yardımcılar ——— const setLS = (k, v) => { try { localStorage.setItem(k, v); } catch {} }; const delLS = (k) => { try { localStorage.removeItem(k); } catch {} }; const toggleClass = (cls, on) => document.documentElement.classList.toggle(cls, on);

const enableStopAnimations = useCallback(() => { if (stopStyleRef.current) return; const el = document.createElement("style"); el.id = "ub-stop-anims"; el.textContent = *{animation:none !important;transition:none !important;scroll-behavior:auto !important}; document.head.appendChild(el); stopStyleRef.current = el; }, []); const disableStopAnimations = useCallback(() => { stopStyleRef.current?.remove?.(); stopStyleRef.current = null; }, []);

const enableBigCursor = useCallback((color = "black") => { if (bigCurStyleRef.current) bigCurStyleRef.current.remove(); const style = document.createElement("style"); style.id = "ub-big-cursor"; const fill = color === "white" ? "white" : "black"; const stroke = color === "white" ? "black" : "white"; const svg = encodeURIComponent(<?xml version='1.0'?> <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'> <circle cx='8' cy='8' r='8' fill='${fill}' stroke='${stroke}' stroke-width='2'/> </svg>); style.textContent = html{cursor:url("data:image/svg+xml,${svg}") 8 8, auto}; document.head.appendChild(style); bigCurStyleRef.current = style; }, []); const disableBigCursor = useCallback(() => { bigCurStyleRef.current?.remove?.(); bigCurStyleRef.current = null; }, []);

// ——— Persisted yükleme ——— useEffect(() => { const d = document.documentElement; setCollapsed(localStorage.getItem(LS.COLLAPSED) === "1"); const pos = localStorage.getItem(LS.POS); if (pos) setPosition(pos);

const fs = Number(localStorage.getItem(LS.FS)); if (!Number.isNaN(fs)) d.style.fontSize = `${fs}px`;

const hc = localStorage.getItem(LS.HC) === "1"; toggleClass("hc", hc); setHighContrast(hc);
const ul = localStorage.getItem(LS.UL) === "1"; toggleClass("ub-ul", ul); setUnderlineLinks(ul);
const rd = localStorage.getItem(LS.READABLE) === "1"; toggleClass("ub-readable", rd); setReadableText(rd);
const rm = localStorage.getItem(LS.RM) === "1"; if (rm) enableStopAnimations(); setReduceMotion(rm);

const al = localStorage.getItem(LS.LEFT) === "1"; toggleClass("ub-left", al); setAlignLeft(al);
const ac = localStorage.getItem(LS.CENTER) === "1"; toggleClass("ub-center", ac); setAlignCenter(ac);
const aj = localStorage.getItem(LS.JUST) === "1"; toggleClass("ub-just", aj); setAlignJust(aj);

const inv = localStorage.getItem(LS.INV) === "1"; toggleClass("ub-invert", inv); setInvertColors(inv);
const g = localStorage.getItem(LS.GRAY) === "1"; toggleClass("ub-gray", g); setGray(g);
const ds = localStorage.getItem(LS.DESAT) === "1"; toggleClass("ub-desat", ds); setDesat(ds);
const st = localStorage.getItem(LS.SAT) === "1"; toggleClass("ub-sat", st); setSat(st);
const dk = localStorage.getItem(LS.DARK) === "1"; toggleClass("ub-dark", dk); setDark(dk);
const lt = localStorage.getItem(LS.LIGHT) === "1"; toggleClass("ub-light", lt); setLight(lt);

const hd = localStorage.getItem(LS.HEAD) === "1"; toggleClass("ub-headings", hd); setHeadings(hd);
const gd = localStorage.getItem(LS.GUIDE) === "1"; setGuide(gd);
const mk = localStorage.getItem(LS.MASK) === "1"; toggleClass("ub-mask", mk); setMask(mk);
const bb = localStorage.getItem(LS.BIGCUR_B) === "1"; if (bb) enableBigCursor("black"); setBigCurB(bb);
const bw = localStorage.getItem(LS.BIGCUR_W) === "1"; if (bw) enableBigCursor("white"); setBigCurW(bw);
const foc = localStorage.getItem(LS.FOCUS) === "1"; toggleClass("ub-focusmode", foc); setFocusMode(foc);
const hi = localStorage.getItem(LS.HIDEIMG) === "1"; toggleClass("ub-hideimg", hi); setHideImages(hi);
const mt = localStorage.getItem(LS.MUTE) === "1"; toggleClass("ub-mute", mt); setMuteSounds(mt);
const rmde = localStorage.getItem(LS.READMODE) === "1"; toggleClass("ub-readmode", rmde); setReadMode(rmde);

const txt = localStorage.getItem(LS.TXTCLR); if (txt) d.style.setProperty("--ub-text", txt);
const ttl = localStorage.getItem(LS.TTLCLR); if (ttl) d.style.setProperty("--ub-title", ttl);
const bg = localStorage.getItem(LS.BGCLR); if (bg) d.style.setProperty("--ub-bg", bg);

const rf = localStorage.getItem(LS.FONT_READABLE) === "1"; toggleClass("ub-font-readable", rf); setFontReadable(rf);

}, [enableStopAnimations, enableBigCursor]);

// ——— Global ESC ——— useEffect(() => { const onKey = (e) => { if (e.key === "Escape") { if (isSearchOpen) { setSearchOpen(false); return; } if (panelOpen) { setPanelOpen(false); return; } } }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [panelOpen, isSearchOpen]);

// ——— Arama ——— const filtered = useMemo(() => { const t = query.trim().toLowerCase(); if (!t) return ROUTES; return ROUTES.filter((r) => r.label.toLowerCase().includes(t)); }, [query]);

// ——— Boyutlandırma ——— const setBaseFont = useCallback((px) => { document.documentElement.style.fontSize = ${px}px; setLS(LS.FS, String(px)); }, []); const resetFont = useCallback(() => { document.documentElement.style.fontSize = ""; delLS(LS.FS); }, []);

// ——— Generic toggler ——— const toggle = (cls, key, stateSetter, on) => { const val = typeof on === "boolean" ? on : !document.documentElement.classList.contains(cls); toggleClass(cls, val); setLS(key, val ? "1" : "0"); stateSetter(val); return val; };

// ——— Tek tek aksiyonlar ——— const doHC = (on) => toggle("hc", LS.HC, setHighContrast, on); const doUL = (on) => toggle("ub-ul", LS.UL, setUnderlineLinks, on); const doReadable = (on) => toggle("ub-readable", LS.READABLE, setReadableText, on); const doLeft = (on) => toggle("ub-left", LS.LEFT, setAlignLeft, on); const doCenter = (on) => toggle("ub-center", LS.CENTER, setAlignCenter, on); const doJust = (on) => toggle("ub-just", LS.JUST, setAlignJust, on); const doInvert = (on) => toggle("ub-invert", LS.INV, setInvertColors, on); const doGray = (on) => toggle("ub-gray", LS.GRAY, setGray, on); const doDesat = (on) => toggle("ub-desat", LS.DESAT, setDesat, on); const doSat = (on) => toggle("ub-sat", LS.SAT, setSat, on); const doDark = (on) => toggle("ub-dark", LS.DARK, setDark, on); const doLight = (on) => toggle("ub-light", LS.LIGHT, setLight, on); const doHead = (on) => toggle("ub-headings", LS.HEAD, setHeadings, on); const doMask = (on) => toggle("ub-mask", LS.MASK, setMask, on); const doFocus = (on) => toggle("ub-focusmode", LS.FOCUS, setFocusMode, on); const doHideImg = (on) => toggle("ub-hideimg", LS.HIDEIMG, setHideImages, on); const doMute = (on) => toggle("ub-mute", LS.MUTE, setMuteSounds, on); const doReadMode = (on) => toggle("ub-readmode", LS.READMODE, setReadMode, on); const doFontReadable = (on) => toggle("ub-font-readable", LS.FONT_READABLE, setFontReadable, on);

const doReduceMotion = (on) => { const val = typeof on === "boolean" ? on : !reduceMotion; if (val) enableStopAnimations(); else disableStopAnimations(); setLS(LS.RM, val ? "1" : "0"); setReduceMotion(val); };

const doBigCursorBlack = (on) => { const val = typeof on === "boolean" ? on : !bigCurB; if (val) { enableBigCursor("black"); setLS(LS.BIGCUR_B, "1"); setLS(LS.BIGCUR_W, "0"); setBigCurW(false); } else { disableBigCursor(); delLS(LS.BIGCUR_B); } setBigCurB(val); }; const doBigCursorWhite = (on) => { const val = typeof on === "boolean" ? on : !bigCurW; if (val) { enableBigCursor("white"); setLS(LS.BIGCUR_W, "1"); setLS(LS.BIGCUR_B, "0"); setBigCurB(false); } else { disableBigCursor(); delLS(LS.BIGCUR_W); } setBigCurW(val); };

// ——— Renk seçiciler ——— const setVarColor = (key, varName, val) => { document.documentElement.style.setProperty(varName, val); setLS(key, val); };

// ——— Profiller ——— const applyProfile = (name, on) => { const v = on ?? true; // ON varsayılan switch (name) { case "seizure-safe": doReduceMotion(v); doDesat(v); doInvert(false); break; case "vision": doHC(v); doReadable(v); doUL(v); setBaseFont(v ? 18 : 16); break; case "adhd": doReduceMotion(v); doFocus(v); doHead(v); break; case "cognitive": doReadable(v); doHead(v); doBigCursorBlack(v); break; case "keyboard": // Odak halkaları belirgin; zaten CSS ile güçlendirdik doFocus(v); break; case "screenreader": doHideImg(v); doReadMode(v); break; } };

// ——— FAB ——— const fixedStyle = { [position]: "max(0.5rem, env(safe-area-inset-right))", bottom: "calc(env(safe-area-inset-bottom) + var(--rb-bottom, 0px) + 12px)" };

const utilityButtonBase = "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-purple-600 text-white shadow-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

// ——— A: Minimal Toolbar (kısa görünüm) ——— if (!panelOpen) { return ( <div className="fixed z-[1000]" style={fixedStyle}> <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-white/95 p-3 text-slate-800 shadow-2xl outline outline-1 outline-black/5 backdrop-blur-lg"> <div className="flex w-full items-center justify-between -mt-1 mb-1"> <button onClick={() => { const next = position === "right" ? "left" : "right"; setPosition(next); setLS(LS.POS, next); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" aria-label={Konumu ${position === "right" ? "sola" : "sağa"} al} title="Konum değiştir (sağ/sol)">↔</button> <button onClick={() => { setCollapsed(true); setLS(LS.COLLAPSED, "1"); }} className="group flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" aria-label="Araçları gizle" title="Araçları gizle"><span className="text-base leading-none group-hover:rotate-90 transition-transform">✕</span></button> </div>

<button className={utilityButtonBase} onClick={() => setPanelOpen(true)} title="Erişilebilirlik panelini aç" aria-haspopup="dialog"><span className="text-2xl md:text-3xl" aria-hidden>♿</span></button>

      <button className={utilityButtonBase} onClick={() => setSearchOpen(true)} title="Site içi arama" aria-haspopup="dialog"><span className="text-2xl md:text-3xl" aria-hidden>🔍</span></button>

      <button className={utilityButtonBase} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} title="En üste dön" aria-label="Sayfanın en üstüne git"><span className="text-2xl md:text-3xl" aria-hidden>⬆️</span></button>

      <button className={utilityButtonBase} onClick={() => setPanelOpen(true)} title="Hızlı iletişim"><span className="text-2xl md:text-3xl" aria-hidden>📞</span></button>
    </div>

    {/* Collapsed opener */}
    {collapsed && (
      <button onClick={() => { setCollapsed(false); setLS(LS.COLLAPSED, "0"); }} className="fixed z-[1000] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl outline outline-1 outline-black/5 backdrop-blur-md h-12 w-12 md:h-14 md:w-14 flex items-center justify-center hover:scale-105 transition-transform" style={fixedStyle} aria-label="Yardımcı araçları aç" title="Araçları aç">⋮</button>
    )}

    {/* Arama Modalı (A) */}
    {isSearchOpen && (
      <SearchModal onClose={() => setSearchOpen(false)} routes={ROUTES} />
    )}
  </div>
);

}

// ——— B: Yan Panel (accessiBe benzeri) ——— return ( <> <div role="dialog" aria-modal="true" aria-label="Erişilebilirlik paneli" className="fixed inset-0 z-[10000] flex"> <div className="flex-1 bg-black/40" onClick={() => setPanelOpen(false)} /> <aside ref={panelRef} className="w-full max-w-md bg-white text-slate-800 shadow-2xl border-l border-black/10 flex flex-col"> {/* Header */} <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"> <div className="flex items-center gap-2"> <span className="text-2xl" aria-hidden>♿</span> <h2 className="text-lg font-semibold">Erişilebilirlik Ayarları</h2> </div> <button onClick={() => setPanelOpen(false)} className="rounded-lg px-3 py-1.5 bg-white/20 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label="Paneli kapat">Kapat</button> </div>

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
            <ProfileRow label="Seizure Safe" desc="Animasyonları ve flaşları azaltır" on={() => applyProfile("seizure-safe", true)} off={() => applyProfile("seizure-safe", false)} icon="⚡" />
            <ProfileRow label="Vision Impaired" desc="Görsel kontrast ve okunabilirlik" on={() => applyProfile("vision", true)} off={() => applyProfile("vision", false)} icon="👁️" />
            <ProfileRow label="ADHD Friendly" desc="Daha az dikkat dağıtıcı" on={() => applyProfile("adhd", true)} off={() => applyProfile("adhd", false)} icon="🧠" />
            <ProfileRow label="Cognitive Disability" desc="Okuma ve odak desteği" on={() => applyProfile("cognitive", true)} off={() => applyProfile("cognitive", false)} icon="🎯" />
            <ProfileRow label="Keyboard Navigation" desc="Klavye ile rahat kullanım" on={() => applyProfile("keyboard", true)} off={() => applyProfile("keyboard", false)} icon="⌨️" />
            <ProfileRow label="Screen Reader" desc="Ekran okuyucu dostu" on={() => applyProfile("screenreader", true)} off={() => applyProfile("screenreader", false)} icon="🔈" />
          </section>
        )}

        {activeTab === "content" && (
          <section className="space-y-4">
            <Group title="Metin Boyutu">
              <div className="grid grid-cols-4 gap-2">
                <Btn onClick={() => setBaseFont(14)}>A-</Btn>
                <Btn onClick={() => resetFont()}>A</Btn>
                <Btn onClick={() => setBaseFont(16)}>A+</Btn>
                <Btn onClick={() => setBaseFont(18)}>A++</Btn>
              </div>
            </Group>
            <Group title="Hizalama">
              <div className="grid grid-cols-3 gap-2">
                <Toggle pressed={alignLeft} onToggle={() => doLeft()} label="Sola" />
                <Toggle pressed={alignCenter} onToggle={() => doCenter()} label="Ortala" />
                <Toggle pressed={alignJust} onToggle={() => doJust()} label="İkiye Yan" />
              </div>
            </Group>
            <Group title="Okunabilirlik">
              <div className="grid grid-cols-2 gap-2">
                <Toggle pressed={readableText} onToggle={() => doReadable()} label="Okuma Rahatlığı" />
                <Toggle pressed={underlineLinks} onToggle={() => doUL()} label="Linkleri Vurgula" />
                <Toggle pressed={headings} onToggle={() => doHead()} label="Başlıkları Vurgula" />
                <Toggle pressed={fontReadable} onToggle={() => doFontReadable()} label="Readable Font" />
              </div>
            </Group>
          </section>
        )}

        {activeTab === "color" && (
          <section className="space-y-4">
            <Group title="Kontrast & Doygunluk">
              <div className="grid grid-cols-3 gap-2">
                <Toggle pressed={dark} onToggle={() => doDark()} label="Dark" />
                <Toggle pressed={light} onToggle={() => doLight()} label="Light" />
                <Toggle pressed={isHighContrast} onToggle={() => doHC()} label="High" />
                <Toggle pressed={sat} onToggle={() => doSat()} label="High Sat" />
                <Toggle pressed={desat} onToggle={() => doDesat()} label="Low Sat" />
                <Toggle pressed={gray} onToggle={() => doGray()} label="Monochrome" />
                <Toggle pressed={invertColors} onToggle={() => doInvert()} label="Invert" />
              </div>
            </Group>
            <Group title="Özel Renkler">
              <div className="space-y-3">
                <ColorRow label="Metin" onPick={(c)=>setVarColor(LS.TXTCLR, "--ub-text", c)} />
                <ColorRow label="Başlık" onPick={(c)=>setVarColor(LS.TTLCLR, "--ub-title", c)} />
                <ColorRow label="Arkaplan" onPick={(c)=>setVarColor(LS.BGCLR, "--ub-bg", c)} />
              </div>
            </Group>
          </section>
        )}

        {activeTab === "orientation" && (
          <section className="space-y-4">
            <Group title="Odağı Artır">
              <div className="grid grid-cols-3 gap-2">
                <Toggle pressed={reduceMotion} onToggle={() => doReduceMotion()} label="Stop Anim" />
                <Toggle pressed={focusMode} onToggle={() => doFocus()} label="Odak Modu" />
                <Toggle pressed={guide} onToggle={() => { const n = !guide; setGuide(n); setLS(LS.GUIDE, n?"1":"0"); }} label="Okuma Cetveli" />
                <Toggle pressed={mask} onToggle={() => doMask()} label="Reading Mask" />
              </div>
            </Group>
            <Group title="Medya & Görseller">
              <div className="grid grid-cols-3 gap-2">
                <Toggle pressed={muteSounds} onToggle={() => doMute()} label="Mute" />
                <Toggle pressed={hideImages} onToggle={() => doHideImg()} label="Resimleri Gizle" />
                <Toggle pressed={readMode} onToggle={() => doReadMode()} label="Read Mode" />
              </div>
            </Group>
            <Group title="İmleç">
              <div className="grid grid-cols-2 gap-2">
                <Toggle pressed={bigCurB} onToggle={() => doBigCursorBlack()} label="Big Black Cursor" />
                <Toggle pressed={bigCurW} onToggle={() => doBigCursorWhite()} label="Big White Cursor" />
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
          <button onClick={() => resetAll()} className="rounded-lg px-3 py-2 border border-red-200 bg-red-50 text-red-700 hover:bg-red-100">Sıfırla</button>
        </div>
      </div>
    </aside>
  </div>

  {/* Okuma Cetveli Overlay */}
  {guide && <ReadingGuide />}

  {/* Arama Modalı (B içinden kısa yol)*/}
  {isSearchOpen && (<SearchModal onClose={() => setSearchOpen(false)} routes={ROUTES} />)}
</>

);

function resetAll(){ Object.values(LS).forEach(delLS); const d = document.documentElement; d.removeAttribute("style"); d.classList.remove( "hc","ub-ul","ub-readable","ub-left","ub-center","ub-just","ub-invert","ub-gray","ub-desat","ub-sat","ub-dark","ub-light","ub-headings","ub-mask","ub-focusmode","ub-hideimg","ub-mute","ub-readmode","ub-font-readable" ); disableBigCursor(); disableStopAnimations(); setHighContrast(false); setUnderlineLinks(false); setReadableText(false); setReduceMotion(false); setAlignLeft(false); setAlignCenter(false); setAlignJust(false); setInvertColors(false); setGray(false); setDesat(false); setSat(false); setDark(false); setLight(false); setHeadings(false); setGuide(false); setMask(false); setBigCurB(false); setBigCurW(false); setFocusMode(false); setHideImages(false); setMuteSounds(false); setReadMode(false); setFontReadable(false); } }

// ——— Yardımcı UI bileşenleri ——— function Btn({ children, onClick }){ return <button onClick={onClick} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-indigo-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{children}</button>; } function Toggle({ pressed, onToggle, label }){ return ( <button onClick={onToggle} aria-pressed={pressed} className={rounded-lg px-3 py-2 text-sm font-medium border ${pressed?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-slate-200 text-slate-700 hover:border-indigo-500 hover:bg-slate-100"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500}>{label}</button> ); } function Group({ title, children }){ return ( <div> <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</div> {children} </div> ); } function ProfileRow({ label, desc, on, off, icon }){ return ( <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3"> <div className="flex items-center gap-3"> <div className="text-xl" aria-hidden>{icon}</div> <div> <div className="font-semibold text-slate-800">{label}</div> <div className="text-xs text-slate-500">{desc}</div> </div> </div> <div className="flex gap-2"> <button onClick={on} className="rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold hover:bg-indigo-500">ON</button> <button onClick={off} className="rounded-full bg-slate-200 text-slate-700 px-3 py-1 text-xs font-semibold hover:bg-slate-300">OFF</button> </div> </div> ); } function ColorRow({ label, onPick }){ const palette = ["#1e3a8a","#0ea5e9","#7c3aed","#ef4444","#a16207","#0ea5a2","#16a34a","#111827","#ffffff"]; return ( <div className="flex items-center gap-3"> <div className="w-24 text-sm text-slate-600">{label}</div> <div className="flex flex-wrap gap-2"> {palette.map((c)=> ( <button key={c} onClick={()=>onPick(c)} className="h-6 w-6 rounded-full border border-slate-300" style={{ background:c }} aria-label={${label} rengini ayarla}/> ))} <input type="color" onChange={(e)=>onPick(e.target.value)} aria-label={${label} özel renk seç} className="h-6 w-10 rounded border border-slate-300"/> </div> </div> ); }

function ReadingGuide(){ const ref = useRef(0); const [y, setY] = useState(0); useEffect(()=>{ const onMove = (e)=> setY(e.clientY); window.addEventListener("mousemove", onMove); return ()=> window.removeEventListener("mousemove", onMove); },[]); return ( <div aria-hidden className="pointer-events-none fixed inset-0 z-[999]" style={{ background:linear-gradient(to bottom, rgba(0,0,0,.55) 0, rgba(0,0,0,.55) ${Math.max(0, y-60)}px, rgba(0,0,0,0) ${y-60}px, rgba(0,0,0,0) ${y+60}px, rgba(0,0,0,.55) ${y+60}px) }}/> ); }

function SearchPanel(){ const [query, setQuery] = useState(""); const results = useMemo(()=>{ const t = query.trim().toLowerCase(); if (!t) return ROUTES; return ROUTES.filter(r => r.label.toLowerCase().includes(t)); }, [query]); return ( <div className="space-y-3"> <div className="relative"> <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Ne aramıştınız? (sahne, led ekran…)" className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-3 pr-3 text-base text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" /> </div> <div className="flex flex-col gap-2"> {results.map((r)=> ( <Link key={r.href} href={r.href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> <span className="w-6 text-lg" aria-hidden>{r.icon}</span> <span className="flex-1 font-medium">{r.label}</span> </Link> ))} </div> </div> ); }

function SearchModal({ onClose, routes }){ const [q, setQ] = useState(""); const filtered = useMemo(()=>{ const t = q.trim().toLowerCase(); if (!t) return routes; return routes.filter(r => r.label.toLowerCase().includes(t)); }, [q, routes]); return ( <div className="animate-overlay fixed inset-0 z-[10001] flex items-start justify-center bg-black/60 px-4 pt-24 pb-6 backdrop-blur-sm md:items-center" role="dialog" aria-modal="true" aria-labelledby="search-title" onClick={onClose}> <div className="animate-modal w-full max-w-2xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl" onClick={(e)=>e.stopPropagation()}> <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center"> <h2 id="search-title" className="sr-only">Site içi arama</h2> <div className="relative w-full flex-1"> <input value={q} onChange={(e)=>setQ(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-3 pr-3 text-base text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20" placeholder="Ne arayalım?" /> </div> <button onClick={onClose} className="w-full rounded-lg bg-slate-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 md:w-auto" aria-label="Arama penceresini kapat">Kapat</button> </div> <div className="max-h-[420px] overflow-y-auto p-4"> <div className="flex flex-col gap-2"> {filtered.map((r)=> ( <Link key={r.href} href={r.href} className="flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-slate-700 transition hover:-translate-x-0.5 hover:border-slate-200 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> <span className="w-6 text-lg" aria-hidden>{r.icon}</span> <span className="flex-1 font-medium">{r.label}</span> </Link> ))} </div> </div> </div> </div> ); }