(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Navbar.js
__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const serviceLinks = [
    {
        href: "/podyum-kiralama",
        label: "Podyum Kiralama",
        title: "Modüler podyum kiralama ve kurulum hizmeti - Sahneva",
        icon: "👑"
    },
    {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        title: "Yüksek çözünürlüklü LED ekran kiralama - Sahneva",
        icon: "🖥️"
    },
    {
        href: "/ses-isik-sistemleri",
        label: "Ses & Işık Sistemleri",
        title: "Profesyonel ses ve ışık sistemi kiralama - Sahneva",
        icon: "🎭"
    },
    {
        href: "/cadir-kiralama",
        label: "Çadır Kiralama",
        title: "Etkinlik çadırı kiralama ve kurulum - Sahneva",
        icon: "⛺"
    },
    {
        href: "/masa-sandalye-kiralama",
        label: "Masa Sandalye Kiralama",
        title: "Masa sandalye kiralama hizmeti - Sahneva",
        icon: "🪑"
    },
    {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        title: "Profesyonel sahne kiralama ve kurulum - Sahneva",
        icon: "🎪"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileServicesOpen, setMobileServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesBtnId = "nav-services-button";
    const servicesMenuId = "nav-services-menu";
    // ✅ DÜZELTİLDİ: Optimize edilmiş burst animasyonu
    const burst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[burst]": (e, colors = [
            "#6366f1",
            "#8b5cf6"
        ])=>{
            try {
                if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
                const x = e?.clientX ?? window.innerWidth / 2;
                const y = e?.clientY ?? 80;
                const n = 6;
                const life = 400;
                const fragment = document.createDocumentFragment();
                for(let i = 0; i < n; i++){
                    const el = document.createElement("span");
                    el.className = "burst-particle";
                    el.setAttribute("aria-hidden", "true");
                    el.setAttribute("role", "presentation");
                    const angle = Math.PI * 2 * i / n + Math.random() * 0.3;
                    const dist = 28 + Math.random() * 24;
                    el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
                    el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
                    el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
                    el.style.setProperty("--life", `${life}ms`);
                    el.style.setProperty("--burst-c1", colors[0]);
                    el.style.setProperty("--burst-c2", colors[1]);
                    const s = 4 + Math.random() * 4;
                    el.style.width = el.style.height = s + "px";
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    fragment.appendChild(el);
                    setTimeout({
                        "Navbar.useCallback[burst]": ()=>{
                            if (el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                        }
                    }["Navbar.useCallback[burst]"], life + 40);
                }
                document.body.appendChild(fragment);
            } catch  {}
        }
    }["Navbar.useCallback[burst]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let ticking = false;
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    if (ticking) return;
                    ticking = true;
                    requestAnimationFrame({
                        "Navbar.useEffect.onScroll": ()=>{
                            setScrolled(window.scrollY > 8);
                            ticking = false;
                        }
                    }["Navbar.useEffect.onScroll"]);
                }
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onKey = {
                "Navbar.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        setMobileOpen(false);
                        setServicesOpen(false);
                        setMobileServicesOpen(false);
                    }
                }
            }["Navbar.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMobileOpen(false);
            setServicesOpen(false);
            setMobileServicesOpen(false);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const prev = document.body.style.overflow;
            document.body.style.overflow = mobileOpen ? "hidden" : prev || "";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = prev || "";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function onClickOutside(e) {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                    setServicesOpen(false);
                }
            }
            if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", onClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        servicesOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            return ({
                "Navbar.useEffect": ()=>{
                    if (hoverTimer.current) clearTimeout(hoverTimer.current);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[active]": (href)=>pathname === href || href !== "/" && pathname?.startsWith(href)
    }["Navbar.useCallback[active]"], [
        pathname
    ]);
    const openNow = ()=>{
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        setServicesOpen(true);
    };
    const closeWithDelay = ()=>{
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(()=>setServicesOpen(false), 150);
    };
    // ✅ DÜZELTİLDİ: Sabit className değerleri
    const whatsappBtnClass = "ml-2 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px]";
    const mobileWhatsappBtnClass = "block text-center mt-4 rounded-xl px-6 py-4 text-white text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white min-h-[44px] flex items-center justify-center gap-3";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main",
                className: "jsx-7442f176c150580a" + " " + "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gradient-to-r focus:from-blue-600 focus:to-purple-600 focus:px-3 focus:py-2 focus:text-white focus:font-semibold",
                children: "Ana içeriğe atla"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                role: "banner",
                itemScope: true,
                itemType: "https://schema.org/Organization",
                className: "jsx-7442f176c150580a" + " " + ([
                    "fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b",
                    scrolled || mobileOpen ? "bg-white/95 backdrop-blur-xl border-neutral-200/60 shadow-lg" : "bg-white/80 backdrop-blur-md border-transparent"
                ].join(" ") || ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-7442f176c150580a" + " " + "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7442f176c150580a" + " " + "flex items-center justify-between h-16 lg:h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3 group",
                                "aria-label": "Sahneva - Profesyonel sahne ve etkinlik ekipmanları kiralama",
                                title: "Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama",
                                itemProp: "url",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/img/logo.png",
                                        alt: "Sahneva Logo - Profesyonel sahne, podyum, LED ekran kiralama",
                                        width: scrolled ? 140 : 160,
                                        height: scrolled ? 35 : 40,
                                        priority: pathname === "/",
                                        sizes: "(max-width: 768px) 120px, 160px",
                                        className: "transition-all duration-300 h-8 lg:h-10 w-auto",
                                        itemProp: "logo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    !scrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7442f176c150580a" + " " + "hidden lg:block h-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Ana menü",
                                className: "jsx-7442f176c150580a" + " " + "hidden lg:flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/hakkimizda",
                                        className: [
                                            "relative text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg",
                                            active("/hakkimizda") ? "text-blue-600 bg-blue-50/80" : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80"
                                        ].join(" "),
                                        "aria-current": active("/hakkimizda") ? "page" : undefined,
                                        title: "Sahneva Hakkında - Şirket bilgileri ve referanslar",
                                        children: "Hakkımızda"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: dropdownRef,
                                        onMouseEnter: openNow,
                                        onMouseLeave: closeWithDelay,
                                        onFocus: openNow,
                                        onBlur: closeWithDelay,
                                        className: "jsx-7442f176c150580a" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: servicesBtnId,
                                                type: "button",
                                                "aria-haspopup": "menu",
                                                "aria-expanded": servicesOpen,
                                                "aria-controls": servicesMenuId,
                                                onClick: ()=>setServicesOpen((s)=>!s),
                                                title: "Sahneva Hizmetler - Tüm ekipman kiralama hizmetlerimiz",
                                                className: "jsx-7442f176c150580a" + " " + ([
                                                    "relative text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 group",
                                                    active("/hizmetler") || servicesOpen ? "text-blue-600 bg-blue-50/80" : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80",
                                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                                                ].join(" ") || ""),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7442f176c150580a" + " " + "flex items-center gap-1",
                                                    children: [
                                                        "Hizmetler",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            "aria-hidden": "true",
                                                            className: "jsx-7442f176c150580a" + " " + `w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 9l-7 7-7-7",
                                                                className: "jsx-7442f176c150580a"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.js",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.js",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                onMouseEnter: openNow,
                                                className: "jsx-7442f176c150580a" + " " + "absolute left-0 right-0 top-full h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: servicesMenuId,
                                                role: "menu",
                                                "aria-labelledby": servicesBtnId,
                                                hidden: !servicesOpen,
                                                onMouseEnter: openNow,
                                                onMouseLeave: closeWithDelay,
                                                className: "jsx-7442f176c150580a" + " " + `absolute left-0 top-full mt-1 w-64 bg-white/95 backdrop-blur-xl border border-neutral-200/60 rounded-xl shadow-2xl z-[60] overflow-hidden
                              ${servicesOpen ? "animate-fadeIn" : "pointer-events-none"} `,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-7442f176c150580a" + " " + "p-2",
                                                    children: serviceLinks.map(({ href, label, title, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            role: "menuitem",
                                                            href: href,
                                                            className: "group flex items-center gap-3 px-3 py-3 text-sm text-neutral-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-200/60",
                                                            onClick: ()=>setServicesOpen(false),
                                                            "aria-current": active(href) ? "page" : undefined,
                                                            title: title,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7442f176c150580a" + " " + "text-lg opacity-70 group-hover:opacity-100 transition-opacity",
                                                                    children: icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.js",
                                                                    lineNumber: 311,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-7442f176c150580a" + " " + "flex-1 font-medium",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.js",
                                                                    lineNumber: 314,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-7442f176c150580a" + " " + "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7",
                                                                        className: "jsx-7442f176c150580a"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Navbar.js",
                                                                        lineNumber: 316,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.js",
                                                                    lineNumber: 315,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, href, true, {
                                                            fileName: "[project]/components/Navbar.js",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 300,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/iletisim",
                                        className: [
                                            "relative text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg",
                                            active("/iletisim") ? "text-blue-600 bg-blue-50/80" : "text-neutral-700 hover:text-blue-600 hover:bg-neutral-50/80"
                                        ].join(" "),
                                        "aria-current": active("/iletisim") ? "page" : undefined,
                                        title: "Sahneva İletişim - Bize ulaşın ve teklif alın",
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum.",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)",
                                        onClick: (e)=>burst(e, [
                                                "#10b981",
                                                "#059669"
                                            ]),
                                        title: "WhatsApp'tan anında teklif alın - Sahneva",
                                        className: "jsx-7442f176c150580a" + " " + (whatsappBtnClass || ""),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-7442f176c150580a" + " " + "text-lg",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7442f176c150580a",
                                                children: "WhatsApp Teklif"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileOpen((s)=>!s),
                                "aria-label": "Menüyü aç veya kapat",
                                "aria-expanded": mobileOpen,
                                "aria-controls": "mobile-menu",
                                title: "Mobil menü",
                                className: "jsx-7442f176c150580a" + " " + "lg:hidden inline-flex items-center justify-center p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200/60 hover:bg-white hover:border-neutral-300 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 min-h-[44px] min-w-[44px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7442f176c150580a" + " " + "relative w-6 h-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7442f176c150580a" + " " + `absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? 'rotate-45' : '-translate-y-2'}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7442f176c150580a" + " " + `absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7442f176c150580a" + " " + `absolute top-1/2 left-1/2 w-5 h-0.5 bg-neutral-700 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${mobileOpen ? '-rotate-45' : 'translate-y-2'}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.js",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Menüyü kapat",
                onClick: ()=>setMobileOpen(false),
                className: "jsx-7442f176c150580a" + " " + "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 373,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-menu",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Mobil menü",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setMobileOpen(false);
                },
                className: "jsx-7442f176c150580a" + " " + ([
                    "lg:hidden fixed z-50 left-0 right-0 top-16",
                    "bg-white/95 backdrop-blur-xl border-t border-neutral-200/60 rounded-b-2xl shadow-2xl",
                    "transition-all duration-500 will-change-transform overflow-hidden",
                    mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
                ].join(" ") || ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-7442f176c150580a" + " " + "px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/hakkimizda",
                            onClick: ()=>setMobileOpen(false),
                            className: "flex items-center gap-3 py-4 px-4 text-neutral-800 font-semibold text-base rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60",
                            "aria-current": active("/hakkimizda") ? "page" : undefined,
                            title: "Sahneva Hakkında",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7442f176c150580a" + " " + "text-lg",
                                    children: "👥"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this),
                                "Hakkımızda"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7442f176c150580a" + " " + "py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileServicesOpen((s)=>!s),
                                    "aria-expanded": mobileServicesOpen,
                                    "aria-controls": "mobile-services-list",
                                    title: "Sahneva Hizmetler Menüsü",
                                    className: "jsx-7442f176c150580a" + " " + "w-full flex items-center justify-between gap-3 py-4 px-4 text-base font-semibold text-neutral-900 rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60 min-h-[44px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-7442f176c150580a" + " " + "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7442f176c150580a" + " " + "text-lg",
                                                    children: "🎯"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7442f176c150580a",
                                                    children: "Hizmetler"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 420,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "aria-hidden": "true",
                                            className: "jsx-7442f176c150580a" + " " + `w-5 h-5 shrink-0 text-neutral-700 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 9l6 6 6-6",
                                                className: "jsx-7442f176c150580a"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "mobile-services-list",
                                    className: "jsx-7442f176c150580a" + " " + `overflow-hidden transition-all duration-500 ${mobileServicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7442f176c150580a" + " " + "ml-4 space-y-1 rounded-xl border border-neutral-200/60 bg-white/80 p-2",
                                        children: serviceLinks.map(({ href, label, title, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: href,
                                                onClick: ()=>setMobileOpen(false),
                                                className: "flex items-center gap-3 px-3 py-3 text-sm text-neutral-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-200/60 min-h-[44px]",
                                                "aria-current": active(href) ? "page" : undefined,
                                                title: title,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-7442f176c150580a" + " " + "text-base opacity-70",
                                                        children: icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.js",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-7442f176c150580a" + " " + "flex-1 font-medium",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.js",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, href, true, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/iletisim",
                            onClick: ()=>setMobileOpen(false),
                            className: "flex items-center gap-3 py-4 px-4 text-neutral-800 font-semibold text-base rounded-xl hover:bg-blue-50/80 hover:text-blue-600 transition-all duration-300 border border-transparent hover:border-blue-200/60",
                            "aria-current": active("/iletisim") ? "page" : undefined,
                            title: "Sahneva İletişim",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7442f176c150580a" + " " + "text-lg",
                                    children: "📞"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this),
                                "İletişim"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "WhatsApp Teklif - Sahneva WhatsApp iletişim (yeni sekmede açılır)",
                            onClick: (e)=>{
                                burst(e, [
                                    "#10b981",
                                    "#059669"
                                ]);
                                setMobileOpen(false);
                            },
                            title: "WhatsApp'tan teklif alın",
                            className: "jsx-7442f176c150580a" + " " + (mobileWhatsappBtnClass || ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "jsx-7442f176c150580a" + " " + "text-lg",
                                    children: "💬"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7442f176c150580a",
                                    children: "WhatsApp Teklif"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7442f176c150580a",
                children: ".burst-particle.jsx-7442f176c150580a{pointer-events:none;z-index:9999;background:linear-gradient(135deg,var(--burst-c1),var(--burst-c2));animation:burst-animation var(--life)ease-out forwards;border-radius:50%;position:fixed}@keyframes burst-animation{0%{opacity:1;transform:translate(0)rotate(0)}to{transform:translate(var(--dx),var(--dy))rotate(var(--dr));opacity:0}}@keyframes fadeIn{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn.jsx-7442f176c150580a{animation:.3s ease-out fadeIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(Navbar, "IbQbfkkuSWxan1lqQfAOaAYbzEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Footer.js
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    // ✅ PREMIUM: Optimize edilmiş burst efekti
    const burst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Footer.useCallback[burst]": (e)=>{
            try {
                if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
                const x = e?.clientX ?? window.innerWidth / 2;
                const y = e?.clientY ?? window.innerHeight - 80;
                const n = 6;
                const life = 400;
                const fragment = document.createDocumentFragment();
                for(let i = 0; i < n; i++){
                    const el = document.createElement("span");
                    el.className = "burst-particle";
                    el.setAttribute("aria-hidden", "true");
                    el.setAttribute("role", "presentation");
                    const angle = Math.PI * 2 * i / n + Math.random() * 0.2;
                    const dist = 25 + Math.random() * 20;
                    el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
                    el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
                    el.style.setProperty("--dr", `${(Math.random() * 40 - 20).toFixed(1)}deg`);
                    el.style.setProperty("--life", `${life}ms`);
                    el.style.setProperty("--burst-c1", i % 2 === 0 ? "#6366f1" : "#8b5cf6");
                    el.style.setProperty("--burst-c2", i % 2 === 0 ? "#8b5cf6" : "#06b6d4");
                    const s = 4 + Math.random() * 4;
                    el.style.width = el.style.height = `${s}px`;
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    fragment.appendChild(el);
                    setTimeout({
                        "Footer.useCallback[burst]": ()=>{
                            if (el.parentNode) el.parentNode.removeChild(el);
                        }
                    }["Footer.useCallback[burst]"], life + 30);
                }
                document.body.appendChild(fragment);
            } catch  {}
        }
    }["Footer.useCallback[burst]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        role: "contentinfo",
        itemScope: true,
        itemType: "https://schema.org/Organization",
        className: "jsx-39e029c263b9468" + " " + "relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-blue-900 border-t border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-39e029c263b9468" + " " + "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-39e029c263b9468" + " " + "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-39e029c263b9468" + " " + "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-39e029c263b9468" + " " + "relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "ft-brand",
                        itemProp: "brand",
                        itemScope: true,
                        itemType: "https://schema.org/Brand",
                        className: "jsx-39e029c263b9468",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "ft-brand",
                                className: "jsx-39e029c263b9468" + " " + "sr-only",
                                children: "Sahneva Hakkında"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-39e029c263b9468" + " " + "flex items-center gap-3 text-white font-bold text-2xl mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39e029c263b9468" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-39e029c263b9468" + " " + "relative bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        itemProp: "name",
                                        className: "jsx-39e029c263b9468" + " " + "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
                                        children: "SAHNEVA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                itemProp: "description",
                                className: "jsx-39e029c263b9468" + " " + "text-sm leading-6 text-gray-300 mb-6",
                                children: [
                                    "Profesyonel etkinlik prodüksiyon & ekipman kiralama hizmetleri.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-39e029c263b9468"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-39e029c263b9468" + " " + "text-blue-300 font-medium",
                                        children: "Türkiye geneli"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    " sahne, podyum, LED ekran ve ses-ışık sistemleri."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-39e029c263b9468" + " " + "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/sahnevaorganizasyon",
                                        target: "_blank",
                                        rel: "noopener noreferrer me",
                                        "aria-label": "Sahneva Instagram sayfası (yeni sekmede açılır)",
                                        title: "Sahneva Instagram - Etkinlik fotoğrafları ve projeler",
                                        onClick: burst,
                                        itemProp: "sameAs",
                                        className: "jsx-39e029c263b9468" + " " + "group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-39e029c263b9468" + " " + "absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-39e029c263b9468" + " " + "text-lg relative z-10",
                                                children: "📷"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.youtube.com/@sahneva",
                                        target: "_blank",
                                        rel: "noopener noreferrer me",
                                        "aria-label": "Sahneva YouTube kanalı (yeni sekmede açılır)",
                                        title: "Sahneva YouTube - Kurulum videoları ve referanslar",
                                        onClick: burst,
                                        itemProp: "sameAs",
                                        className: "jsx-39e029c263b9468" + " " + "group relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[40px] min-w-[40px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-39e029c263b9468" + " " + "absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-39e029c263b9468" + " " + "text-lg relative z-10",
                                                children: "▶"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-labelledby": "ft-services",
                        className: "jsx-39e029c263b9468",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "ft-services",
                                className: "jsx-39e029c263b9468" + " " + "text-white font-bold mb-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                children: "Hizmetlerimiz"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-39e029c263b9468" + " " + "space-y-3 text-sm",
                                children: [
                                    {
                                        href: "/podyum-kiralama",
                                        label: "Podyum Kiralama",
                                        title: "Modüler podyum kiralama ve kurulum hizmeti"
                                    },
                                    {
                                        href: "/led-ekran-kiralama",
                                        label: "LED Ekran Kiralama",
                                        title: "Yüksek çözünürlüklü LED ekran kiralama"
                                    },
                                    {
                                        href: "/ses-isik-sistemleri",
                                        label: "Ses & Işık Sistemleri",
                                        title: "Profesyonel ses ve ışık sistemi kiralama"
                                    },
                                    {
                                        href: "/sahne-kiralama",
                                        label: "Sahne Kiralama",
                                        title: "Profesyonel sahne kiralama ve kurulum"
                                    },
                                    {
                                        href: "/cadir-kiralama",
                                        label: "Çadır Kiralama",
                                        title: "Etkinlik çadırı kiralama ve kurulum hizmeti"
                                    }
                                ].map(({ href, label, title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-39e029c263b9468",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: href,
                                            className: "group text-gray-300 hover:text-white focus:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-blue-400 hover:pl-3",
                                            title: title,
                                            itemProp: "url",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-39e029c263b9468" + " " + "group-hover:text-blue-300 transition-colors",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, href, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-labelledby": "ft-quick",
                        className: "jsx-39e029c263b9468",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "ft-quick",
                                className: "jsx-39e029c263b9468" + " " + "text-white font-bold mb-6 text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",
                                children: "Hızlı Erişim"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-39e029c263b9468" + " " + "space-y-3 text-sm",
                                children: [
                                    {
                                        href: "/hakkimizda",
                                        label: "Hakkımızda",
                                        title: "Sahneva hakkında bilgi ve referanslar"
                                    },
                                    {
                                        href: "/hizmetler",
                                        label: "Hizmetler",
                                        title: "Tüm hizmetlerimiz ve çözümler"
                                    },
                                    {
                                        href: "/sss",
                                        label: "Sık Sorulan Sorular",
                                        title: "Sıkça sorulan sorular ve cevapları"
                                    },
                                    {
                                        href: "/kvkk",
                                        label: "KVKK / Gizlilik",
                                        title: "Gizlilik politikası ve KVKK bilgilendirmesi"
                                    }
                                ].map(({ href, label, title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-39e029c263b9468",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: href,
                                            className: "group text-gray-300 hover:text-white focus:text-white transition-all duration-200 block py-1 pl-2 border-l-2 border-transparent hover:border-purple-400 hover:pl-3",
                                            title: title,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-39e029c263b9468" + " " + "group-hover:text-purple-300 transition-colors",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.js",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    }, href, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "ft-contact",
                        className: "jsx-39e029c263b9468",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "ft-contact",
                                className: "jsx-39e029c263b9468" + " " + "text-white font-bold mb-6 text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
                                children: "İletişim Bilgileri"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                className: "jsx-39e029c263b9468" + " " + "not-italic space-y-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39e029c263b9468" + " " + "flex items-start gap-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: "jsx-39e029c263b9468" + " " + "relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm",
                                                        children: "📍"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-39e029c263b9468" + " " + "block text-white font-semibold",
                                                        children: "İstanbul / Türkiye"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-39e029c263b9468" + " " + "text-gray-300",
                                                        children: "Türkiye geneli hizmet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39e029c263b9468" + " " + "flex items-center gap-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur-sm opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 188,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: "jsx-39e029c263b9468" + " " + "relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm",
                                                        children: "📞"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+905453048671",
                                                "aria-label": "Hemen Ara – Telefon: +90 545 304 8671",
                                                title: "Sahneva telefon iletişim - Hemen arayın",
                                                itemProp: "telephone",
                                                className: "jsx-39e029c263b9468" + " " + "text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105",
                                                children: "+90 545 304 8671"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39e029c263b9468" + " " + "flex items-center gap-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-sm opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: "jsx-39e029c263b9468" + " " + "relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm",
                                                        children: "✉️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 205,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:info@sahneva.com",
                                                "aria-label": "E-posta: info@sahneva.com",
                                                title: "Sahneva e-posta iletişim",
                                                itemProp: "email",
                                                className: "jsx-39e029c263b9468" + " " + "text-gray-300 hover:text-white transition-all duration-300 hover:scale-105",
                                                children: "info@sahneva.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39e029c263b9468" + " " + "flex items-start gap-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg blur-sm opacity-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        className: "jsx-39e029c263b9468" + " " + "relative text-white text-base p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm",
                                                        children: "⏰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-39e029c263b9468",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-39e029c263b9468" + " " + "block text-white font-semibold",
                                                        children: "Hafta içi 09:00–19:00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-39e029c263b9468" + " " + "text-gray-300",
                                                        children: "7/24 acil destek"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.js",
                                                        lineNumber: 225,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-39e029c263b9468" + " " + "mt-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://g.page/r/CZhkMzkNOdgnEBI",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        "aria-label": "Google Haritalar'da Sahneva lokasyonu (yeni sekmede açılır)",
                                        title: "Google Haritalar'da Sahneva - İstanbul lokasyonu",
                                        className: "jsx-39e029c263b9468" + " " + "group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-39e029c263b9468" + " " + "group-hover:scale-110 transition-transform duration-300",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            "Google Haritalar'da bizi bulun"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-39e029c263b9468"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://g.page/r/CZhkMzkNOdgnEBI/review",
                                        target: "_blank",
                                        rel: "noopener noreferrer nofollow",
                                        "aria-label": "Google'da Sahneva için yorum yazın (yeni sekmede açılır)",
                                        title: "Google Yorum - Müşteri deneyiminizi paylaşın",
                                        className: "jsx-39e029c263b9468" + " " + "group inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-all duration-300 hover:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                className: "jsx-39e029c263b9468" + " " + "group-hover:scale-110 transition-transform duration-300",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.js",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            "Google'da yorum yazın"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-39e029c263b9468" + " " + "relative border-t border-white/10 text-center text-sm text-gray-300 py-6 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-blue-900/50 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-39e029c263b9468" + " " + "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-39e029c263b9468" + " " + "container mx-auto px-6 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-39e029c263b9468" + " " + "mb-3 text-gray-400",
                                children: "Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses-ışık sistemleri ve kurulum hizmetleri."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                suppressHydrationWarning: true,
                                itemProp: "copyrightYear",
                                className: "jsx-39e029c263b9468" + " " + "text-gray-400",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        itemProp: "name",
                                        className: "jsx-39e029c263b9468" + " " + "text-white font-semibold",
                                        children: "Sahneva"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 267,
                                        columnNumber: 42
                                    }, this),
                                    " — Tüm hakları saklıdır.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-39e029c263b9468" + " " + "mx-3 text-blue-400",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/kvkk",
                                        className: "text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors duration-200",
                                        title: "KVKK Aydınlatma Metni",
                                        children: "KVKK Aydınlatma Metni"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "39e029c263b9468",
                children: ".burst-particle.jsx-39e029c263b9468{pointer-events:none;z-index:9999;background:linear-gradient(135deg,var(--burst-c1),var(--burst-c2));animation:burst-animation var(--life)ease-out forwards;border-radius:50%;position:fixed}@keyframes burst-animation{0%{opacity:1;transform:translate(0)rotate(0)}to{transform:translate(var(--dx),var(--dy))rotate(var(--dr));opacity:0}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Footer, "lg2bKZv7CcLSWMIfiMPe23fK5i0=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UtilityBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/UtilityBar.jsx
__turbopack_context__.s([
    "default",
    ()=>UtilityBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ROUTES = [
    {
        href: "/",
        label: "Anasayfa",
        title: "Sahneva Ana Sayfa - Etkinlik ekipmanları kiralama",
        icon: "🏠"
    },
    {
        href: "/hakkimizda",
        label: "Hakkımızda",
        title: "Sahneva Hakkında - Şirket bilgileri ve referanslar",
        icon: "👥"
    },
    {
        href: "/iletisim",
        label: "İletişim",
        title: "Sahneva İletişim - Bize ulaşın ve teklif alın",
        icon: "📞"
    },
    {
        href: "/podyum-kiralama",
        label: "Podyum",
        title: "Podyum Kiralama - Modüler podyum sistemleri",
        icon: "👑"
    },
    {
        href: "/led-ekran-kiralama",
        label: "LED Ekran",
        title: "LED Ekran Kiralama - Yüksek çözünürlüklü ekranlar",
        icon: "🖥️"
    },
    {
        href: "/ses-isik-sistemleri",
        label: "Ses & Işık",
        title: "Ses ve Işık Sistemleri - Profesyonel ekipman",
        icon: "🎭"
    },
    {
        href: "/cadir-kiralama",
        label: "Çadır",
        title: "Çadır Kiralama - Açık hava etkinlik çözümleri",
        icon: "⛺"
    },
    {
        href: "/masa-sandalye-kiralama",
        label: "Masa Sandalye",
        title: "Masa Sandalye Kiralama - Oturma çözümleri",
        icon: "🪑"
    },
    {
        href: "/sahne-kiralama",
        label: "Sahne",
        title: "Sahne Kiralama - Profesyonel sahne kurulumu",
        icon: "🎪"
    }
];
function UtilityBar() {
    _s();
    const [openSearch, setOpenSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toolsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ✅ PREMIUM: ESC ile arama modalını kapat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UtilityBar.useEffect": ()=>{
            const onEsc = {
                "UtilityBar.useEffect.onEsc": (e)=>{
                    if (e.key === "Escape") {
                        setOpenSearch(false);
                        setActiveTool(null);
                    }
                }
            }["UtilityBar.useEffect.onEsc"];
            window.addEventListener("keydown", onEsc);
            return ({
                "UtilityBar.useEffect": ()=>window.removeEventListener("keydown", onEsc)
            })["UtilityBar.useEffect"];
        }
    }["UtilityBar.useEffect"], []);
    // ✅ PREMIUM: Dışarı tıklama ile araçları kapat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UtilityBar.useEffect": ()=>{
            const handleClickOutside = {
                "UtilityBar.useEffect.handleClickOutside": (e)=>{
                    if (toolsRef.current && !toolsRef.current.contains(e.target)) {
                        setActiveTool(null);
                    }
                }
            }["UtilityBar.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "UtilityBar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["UtilityBar.useEffect"];
        }
    }["UtilityBar.useEffect"], []);
    const filtered = query.trim().length === 0 ? ROUTES : ROUTES.filter((r)=>r.label.toLowerCase().includes(query.toLowerCase().trim()));
    // ✅ PREMIUM: Yazı boyutu kontrolü
    const bumpFont = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilityBar.useCallback[bumpFont]": (delta)=>{
            const root = document.documentElement;
            const current = parseFloat(getComputedStyle(root).getPropertyValue("--fs") || "100%");
            const pct = Number.isNaN(current) ? 100 : current;
            const next = Math.min(130, Math.max(85, Math.round(pct + delta)));
            root.style.setProperty("--fs", `${next}%`);
            // ✅ PREMIUM: Haptic feedback için sınıf ekle
            document.body.classList.add('font-change-active');
            setTimeout({
                "UtilityBar.useCallback[bumpFont]": ()=>document.body.classList.remove('font-change-active')
            }["UtilityBar.useCallback[bumpFont]"], 300);
        }
    }["UtilityBar.useCallback[bumpFont]"], []);
    // ✅ PREMIUM: Yüksek kontrast modu
    const toggleContrast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilityBar.useCallback[toggleContrast]": ()=>{
            document.documentElement.classList.toggle("hc");
            setActiveTool(null);
        }
    }["UtilityBar.useCallback[toggleContrast]"], []);
    // ✅ PREMIUM: En üste dön
    const scrollTopSmooth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilityBar.useCallback[scrollTopSmooth]": ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setActiveTool(null);
        }
    }["UtilityBar.useCallback[scrollTopSmooth]"], []);
    // ✅ PREMIUM: Optimize edilmiş burst efekti
    const burst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilityBar.useCallback[burst]": (e, colors = [
            "#6366f1",
            "#8b5cf6"
        ])=>{
            try {
                if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
                const x = e?.clientX ?? window.innerWidth / 2;
                const y = e?.clientY ?? window.innerHeight - 80;
                const n = 6;
                const life = 400;
                const fragment = document.createDocumentFragment();
                for(let i = 0; i < n; i++){
                    const el = document.createElement("span");
                    el.className = "burst-particle";
                    el.setAttribute("aria-hidden", "true");
                    el.setAttribute("role", "presentation");
                    const angle = Math.PI * 2 * i / n + Math.random() * 0.2;
                    const dist = 25 + Math.random() * 20;
                    el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
                    el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
                    el.style.setProperty("--dr", `${(Math.random() * 40 - 20).toFixed(1)}deg`);
                    el.style.setProperty("--life", `${life}ms`);
                    el.style.setProperty("--burst-c1", i % 2 === 0 ? colors[0] : colors[1]);
                    el.style.setProperty("--burst-c2", i % 2 === 0 ? colors[1] : colors[0]);
                    const s = 4 + Math.random() * 4;
                    el.style.width = el.style.height = `${s}px`;
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    fragment.appendChild(el);
                    setTimeout({
                        "UtilityBar.useCallback[burst]": ()=>{
                            if (el.parentNode) el.parentNode.removeChild(el);
                        }
                    }["UtilityBar.useCallback[burst]"], life + 30);
                }
                document.body.appendChild(fragment);
            } catch  {}
        }
    }["UtilityBar.useCallback[burst]"], []);
    // ✅ PREMIUM: Tool toggle fonksiyonu
    const toggleTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UtilityBar.useCallback[toggleTool]": (toolName, e)=>{
            burst(e, [
                "#06b6d4",
                "#8b5cf6"
            ]);
            setActiveTool(activeTool === toolName ? null : toolName);
        }
    }["UtilityBar.useCallback[toggleTool]"], [
        activeTool,
        burst
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: toolsRef,
                role: "region",
                "aria-label": "Erişilebilirlik araçları ve hızlı navigasyon",
                className: "jsx-87c4fd95b068748e" + " " + "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl pb-safe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-87c4fd95b068748e" + " " + "flex items-center gap-1 p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-87c4fd95b068748e" + " " + "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>toggleTool('accessibility', e),
                                    "aria-label": "Erişilebilirlik araçları",
                                    title: "Erişilebilirlik araçları - Yazı boyutu ve kontrast",
                                    className: "jsx-87c4fd95b068748e" + " " + `utility-btn group ${activeTool === 'accessibility' ? 'bg-blue-50 text-blue-600' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-87c4fd95b068748e" + " " + "text-lg",
                                            children: "♿"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-87c4fd95b068748e" + " " + "absolute -top-2 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                activeTool === 'accessibility' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "absolute bottom-12 left-0 mb-2 min-w-48 rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl p-3 shadow-xl z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-87c4fd95b068748e" + " " + "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-87c4fd95b068748e" + " " + "flex items-center justify-between gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-87c4fd95b068748e" + " " + "text-sm font-semibold text-gray-700",
                                                        children: "Yazı Boyutu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/UtilityBar.js",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-87c4fd95b068748e" + " " + "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>bumpFont(-5),
                                                                "aria-label": "Yazı boyutunu küçült",
                                                                className: "jsx-87c4fd95b068748e" + " " + "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold transition-colors",
                                                                children: "A-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/UtilityBar.js",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>bumpFont(+5),
                                                                "aria-label": "Yazı boyutunu büyüt",
                                                                className: "jsx-87c4fd95b068748e" + " " + "w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold transition-colors",
                                                                children: "A+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/UtilityBar.js",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/UtilityBar.js",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleContrast,
                                                "aria-label": "Yüksek kontrast modunu aç/kapat",
                                                className: "jsx-87c4fd95b068748e" + " " + "w-full rounded-lg px-3 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center",
                                                children: "🎨 Kontrast Modu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UtilityBar.js",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                burst(e, [
                                    "#10b981",
                                    "#06b6d4"
                                ]);
                                setOpenSearch(true);
                                setActiveTool(null);
                                setTimeout(()=>dialogRef.current?.querySelector("input")?.focus(), 60);
                            },
                            "aria-haspopup": "dialog",
                            "aria-expanded": openSearch,
                            "aria-controls": openSearch ? "site-search-dialog" : undefined,
                            title: "Site içi arama - Hızlı navigasyon",
                            className: "jsx-87c4fd95b068748e" + " " + "utility-btn group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-87c4fd95b068748e" + " " + "text-lg",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "absolute -top-2 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                burst(e, [
                                    "#f59e0b",
                                    "#ef4444"
                                ]);
                                scrollTopSmooth();
                            },
                            "aria-label": "Sayfanın en üstüne dön",
                            title: "En üste dön - Hızlı navigasyon",
                            className: "jsx-87c4fd95b068748e" + " " + "utility-btn group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-87c4fd95b068748e" + " " + "text-lg",
                                    children: "⬆️"
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "absolute -top-2 -right-1 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-87c4fd95b068748e" + " " + "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>toggleTool('contact', e),
                                    "aria-label": "Hızlı iletişim seçenekleri",
                                    title: "Hızlı iletişim - Telefon ve WhatsApp",
                                    className: "jsx-87c4fd95b068748e" + " " + `utility-btn group ${activeTool === 'contact' ? 'bg-green-50 text-green-600' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-87c4fd95b068748e" + " " + "text-lg",
                                            children: "📞"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-87c4fd95b068748e" + " " + "absolute -top-2 -right-1 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                activeTool === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "absolute bottom-12 right-0 mb-2 min-w-48 rounded-xl border border-white/20 bg-white/95 backdrop-blur-xl p-3 shadow-xl z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-87c4fd95b068748e" + " " + "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+905453048671",
                                                onClick: (e)=>burst(e, [
                                                        "#3b82f6",
                                                        "#8b5cf6"
                                                    ]),
                                                title: "Hemen arayın - Ücretsiz danışmanlık",
                                                className: "jsx-87c4fd95b068748e" + " " + "block rounded-lg px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center",
                                                children: "📞 Hemen Ara"
                                            }, void 0, false, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://wa.me/905453048671?text=Merhaba%2C+sahne+ve+etkinlik+ekipmanları+için+teklif+almak+istiyorum.",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                onClick: (e)=>burst(e, [
                                                        "#10b981",
                                                        "#059669"
                                                    ]),
                                                title: "WhatsApp'tan anında teklif alın",
                                                className: "jsx-87c4fd95b068748e" + " " + "block rounded-lg px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-center",
                                                children: "💬 WhatsApp Teklif"
                                            }, void 0, false, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UtilityBar.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UtilityBar.js",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/UtilityBar.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            openSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "site-search-dialog",
                ref: dialogRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Site içi arama - Hızlı sayfa navigasyonu",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setOpenSearch(false);
                },
                className: "jsx-87c4fd95b068748e" + " " + "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-87c4fd95b068748e" + " " + "w-full sm:max-w-2xl rounded-t-2xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm shadow-2xl border border-white/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-87c4fd95b068748e" + " " + "flex items-center gap-3 px-4 py-4 border-b border-gray-200/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-87c4fd95b068748e" + " " + "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "search",
                                            placeholder: "Ne aramıştınız? (örn: LED ekran, podyum, sahne...)",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            "aria-label": "Arama kutusu",
                                            title: "Site içi arama - Anahtar kelimeler girin",
                                            className: "jsx-87c4fd95b068748e" + " " + "w-full rounded-xl border border-gray-300/60 bg-white/80 pl-10 pr-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenSearch(false),
                                    "aria-label": "Arama modalını kapat",
                                    title: "Aramayı kapat",
                                    className: "jsx-87c4fd95b068748e" + " " + "ml-1 rounded-xl px-4 py-3 text-sm font-semibold bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-300 min-h-[44px] backdrop-blur-sm",
                                    children: "Kapat"
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-87c4fd95b068748e" + " " + "max-h-[60vh] overflow-y-auto p-3",
                            children: [
                                filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "px-3 py-8 text-center text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-87c4fd95b068748e" + " " + "text-4xl mb-3",
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 300,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-87c4fd95b068748e" + " " + "text-lg font-medium",
                                            children: "Sonuç bulunamadı"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 301,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-87c4fd95b068748e" + " " + "text-sm mt-1 text-gray-500",
                                            children: "Lütfen farklı bir anahtar kelime deneyin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-87c4fd95b068748e" + " " + "space-y-2",
                                    children: filtered.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-87c4fd95b068748e",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: r.href,
                                                className: "group flex items-center gap-3 rounded-xl px-4 py-3 text-base hover:bg-blue-50/80 hover:text-blue-700 transition-all duration-300 border border-transparent hover:border-blue-200/60 backdrop-blur-sm",
                                                onClick: ()=>setOpenSearch(false),
                                                title: r.title,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-87c4fd95b068748e" + " " + "text-lg opacity-60 group-hover:opacity-100 transition-opacity",
                                                        children: r.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/UtilityBar.js",
                                                        lineNumber: 314,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-87c4fd95b068748e" + " " + "flex-1",
                                                        children: r.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/UtilityBar.js",
                                                        lineNumber: 317,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-87c4fd95b068748e" + " " + "text-xs text-gray-400 group-hover:text-blue-400 transition-colors",
                                                        children: r.href
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/UtilityBar.js",
                                                        lineNumber: 318,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 308,
                                                columnNumber: 23
                                            }, this)
                                        }, r.href, false, {
                                            fileName: "[project]/components/UtilityBar.js",
                                            lineNumber: 307,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-87c4fd95b068748e" + " " + "mt-4 pt-4 border-t border-gray-200/60",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-87c4fd95b068748e" + " " + "text-xs text-gray-500 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "jsx-87c4fd95b068748e",
                                                children: "İpucu:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/UtilityBar.js",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this),
                                            ' "podyum", "led ekran", "ses sistemi" gibi anahtar kelimelerle arama yapabilirsiniz'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/UtilityBar.js",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/UtilityBar.js",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UtilityBar.js",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UtilityBar.js",
                    lineNumber: 272,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/UtilityBar.js",
                lineNumber: 261,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "87c4fd95b068748e",
                children: ".utility-btn.jsx-87c4fd95b068748e{cursor:pointer;background:0 0;border:none;border-radius:12px;justify-content:center;align-items:center;width:44px;height:44px;font-size:16px;transition:all .3s;display:flex;position:relative}.utility-btn.jsx-87c4fd95b068748e:hover{background:#6366f11a;transform:translateY(-2px)}.utility-btn.jsx-87c4fd95b068748e:active{transform:translateY(0)}.burst-particle.jsx-87c4fd95b068748e{pointer-events:none;z-index:9999;background:linear-gradient(135deg,var(--burst-c1),var(--burst-c2));animation:burst-animation var(--life)ease-out forwards;border-radius:50%;position:fixed}@keyframes burst-animation{0%{opacity:1;transform:translate(0)rotate(0)}to{transform:translate(var(--dx),var(--dy))rotate(var(--dr));opacity:0}}.font-change-active.jsx-87c4fd95b068748e{animation:.3s fontChangePulse}@keyframes fontChangePulse{0%{transform:scale(1)}50%{transform:scale(1.02)}to{transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(UtilityBar, "IUa0SAKrZqvQaYGGKnJRfbizFfk=");
_c = UtilityBar;
var _c;
__turbopack_context__.k.register(_c, "UtilityBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_dbfcbf79._.js.map