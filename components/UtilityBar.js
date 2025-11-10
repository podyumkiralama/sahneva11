// components/AccessibilityBar.js
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

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

// LocalStorage anahtarları
const LS_KEYS = {
  ACTIVE: "acc_active",
  FONT_SIZE: "acc_font_size",
  LINE_HEIGHT: "acc_line_height",
  LETTER_SPACING: "acc_letter_spacing",
  WORD_SPACING: "acc_word_spacing",
  HIGH_CONTRAST: "acc_high_contrast",
  INVERT_COLORS: "acc_invert_colors",
  GRAYSCALE: "acc_grayscale",
  SATURATION: "acc_saturation",
  UNDERLINE_LINKS: "acc_underline_links",
  TEXT_ALIGN: "acc_text_align",
  DYSLEXIC_FONT: "acc_dyslexic_font",
  BIG_CURSOR: "acc_big_cursor",
  READING_GUIDE: "acc_reading_guide",
  IMAGE_ALT: "acc_image_alt",
  STOP_ANIMATIONS: "acc_stop_animations",
  MUTE_SOUNDS: "acc_mute_sounds",
  HIDE_IMAGES: "acc_hide_images",
  HIGHLIGHT_HEADINGS: "acc_highlight_headings",
  HIGHLIGHT_LINKS: "acc_highlight_links",
  TOOLTIPS: "acc_tooltips",
  PAGE_STRUCTURE: "acc_page_structure",
  PANEL_POSITION: "acc_panel_position",
  // Profil durumları
  SEIZURE_SAFE: "acc_seizure_safe",
  VISION_IMPAIRED: "acc_vision_impaired",
  ADHD_FRIENDLY: "acc_adhd_friendly",
  COGNITIVE_DISABILITY: "acc_cognitive_disability",
  BLIND_USERS: "acc_blind_users",
  KEYBOARD_NAV: "acc_keyboard_nav",
};

export default function AccessibilityBar() {
  // Ana durumlar
  const [isActive, setIsActive] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [activeTab, setActiveTab] = useState("profiles");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [panelPosition, setPanelPosition] = useState("right");

  // Profil durumları
  const [seizureSafe, setSeizureSafe] = useState(false);
  const [visionImpaired, setVisionImpaired] = useState(false);
  const [adhdFriendly, setAdhdFriendly] = useState(false);
  const [cognitiveDisability, setCognitiveDisability] = useState(false);
  const [blindUsers, setBlindUsers] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(false);

  // Refs
  const styleRef = useRef(null);
  const guideRef = useRef(null);
  const animationStyleRef = useRef(null);
  const panelRef = useRef(null);

  // Yardımcı fonksiyonlar
  const setLS = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  };

  const getLS = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  };

  // CSS stilini uygula
  const applyStyles = useCallback(() => {
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }

    const styles = `
      .accessibility-active {
        --acc-font-size: ${fontSize}px;
        --acc-line-height: ${getLS(LS_KEYS.LINE_HEIGHT, 1.6)};
        --acc-letter-spacing: ${getLS(LS_KEYS.LETTER_SPACING, 0)}px;
        --acc-word-spacing: ${getLS(LS_KEYS.WORD_SPACING, 0)}px;
      }

      .accessibility-active body {
        font-size: var(--acc-font-size) !important;
        line-height: var(--acc-line-height) !important;
        letter-spacing: var(--acc-letter-spacing) !important;
        word-spacing: var(--acc-word-spacing) !important;
      }

      ${getLS(LS_KEYS.HIGH_CONTRAST, false) ? `
        .accessibility-active {
          --acc-bg: #000000 !important;
          --acc-text: #ffffff !important;
          --acc-primary: #ffff00 !important;
        }
        .accessibility-active * {
          background: var(--acc-bg) !important;
          color: var(--acc-text) !important;
          border-color: var(--acc-primary) !important;
        }
        .accessibility-active a {
          color: var(--acc-primary) !important;
          text-decoration: underline !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.INVERT_COLORS, false) ? `
        .accessibility-active {
          filter: invert(1) hue-rotate(180deg) !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.GRAYSCALE, false) ? `
        .accessibility-active {
          filter: grayscale(1) !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.UNDERLINE_LINKS, false) ? `
        .accessibility-active a {
          text-decoration: underline !important;
          text-decoration-skip-ink: none !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.DYSLEXIC_FONT, false) ? `
        .accessibility-active * {
          font-family: "OpenDyslexic", "Comic Sans MS", sans-serif !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.HIGHLIGHT_HEADINGS, false) ? `
        .accessibility-active h1,
        .accessibility-active h2,
        .accessibility-active h3,
        .accessibility-active h4,
        .accessibility-active h5,
        .accessibility-active h6 {
          background: yellow !important;
          color: black !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.HIGHLIGHT_LINKS, false) ? `
        .accessibility-active a {
          background: #ffff00 !important;
          color: #000000 !important;
          padding: 2px 4px !important;
          border-radius: 2px !important;
          text-decoration: underline !important;
        }
      ` : ''}

      ${getLS(LS_KEYS.BIG_CURSOR, false) ? `
        .accessibility-active {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="black" stroke="white" stroke-width="2"/></svg>') 16 16, auto !important;
        }
        .accessibility-active * {
          cursor: inherit !important;
        }
      ` : ''}

      .reading-guide {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 2px;
        background: red;
        z-index: 10000;
        pointer-events: none;
        display: none;
      }

      .accessibility-active .reading-guide {
        display: block;
      }
    `;

    styleRef.current.textContent = styles;
  }, [fontSize]);

  // Animasyonları durdur
  const stopAnimations = useCallback(() => {
    if (!animationStyleRef.current) {
      animationStyleRef.current = document.createElement('style');
      animationStyleRef.current.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(animationStyleRef.current);
    }
  }, []);

  const startAnimations = useCallback(() => {
    if (animationStyleRef.current) {
      animationStyleRef.current.remove();
      animationStyleRef.current = null;
    }
  }, []);

  // Başlangıç yükleme
  useEffect(() => {
    const active = getLS(LS_KEYS.ACTIVE, false);
    const savedFontSize = getLS(LS_KEYS.FONT_SIZE, 16);
    const savedPosition = getLS(LS_KEYS.PANEL_POSITION, "right");

    // Profil durumlarını yükle
    setSeizureSafe(getLS(LS_KEYS.SEIZURE_SAFE, false));
    setVisionImpaired(getLS(LS_KEYS.VISION_IMPAIRED, false));
    setAdhdFriendly(getLS(LS_KEYS.ADHD_FRIENDLY, false));
    setCognitiveDisability(getLS(LS_KEYS.COGNITIVE_DISABILITY, false));
    setBlindUsers(getLS(LS_KEYS.BLIND_USERS, false));
    setKeyboardNav(getLS(LS_KEYS.KEYBOARD_NAV, false));

    setIsActive(active);
    setFontSize(savedFontSize);
    setPanelPosition(savedPosition);

    if (active) {
      document.documentElement.classList.add('accessibility-active');
      applyStyles();
    }
  }, [applyStyles]);

  // Aktif durum değiştiğinde
  useEffect(() => {
    if (isActive) {
      document.documentElement.classList.add('accessibility-active');
      setLS(LS_KEYS.ACTIVE, true);
      applyStyles();
    } else {
      document.documentElement.classList.remove('accessibility-active');
      setLS(LS_KEYS.ACTIVE, false);
      startAnimations();
    }
  }, [isActive, applyStyles, startAnimations]);

  // Panel konumunu değiştir
  const togglePanelPosition = useCallback(() => {
    const newPosition = panelPosition === "right" ? "left" : "right";
    setPanelPosition(newPosition);
    setLS(LS_KEYS.PANEL_POSITION, newPosition);
  }, [panelPosition]);

  // Profil toggle fonksiyonları
  const toggleSeizureSafe = useCallback(() => {
    const newState = !seizureSafe;
    setSeizureSafe(newState);
    setLS(LS_KEYS.SEIZURE_SAFE, newState);
    
    if (newState) {
      setLS(LS_KEYS.STOP_ANIMATIONS, true);
      setLS(LS_KEYS.MUTE_SOUNDS, true);
      stopAnimations();
    } else {
      setLS(LS_KEYS.STOP_ANIMATIONS, false);
      setLS(LS_KEYS.MUTE_SOUNDS, false);
      startAnimations();
    }
    
    setIsActive(true);
    applyStyles();
  }, [seizureSafe, applyStyles, stopAnimations, startAnimations]);

  const toggleVisionImpaired = useCallback(() => {
    const newState = !visionImpaired;
    setVisionImpaired(newState);
    setLS(LS_KEYS.VISION_IMPAIRED, newState);
    
    if (newState) {
      setLS(LS_KEYS.HIGH_CONTRAST, true);
      setLS(LS_KEYS.UNDERLINE_LINKS, true);
      setLS(LS_KEYS.BIG_CURSOR, true);
      setFontSize(18);
      setLS(LS_KEYS.FONT_SIZE, 18);
    } else {
      setLS(LS_KEYS.HIGH_CONTRAST, false);
      setLS(LS_KEYS.UNDERLINE_LINKS, false);
      setLS(LS_KEYS.BIG_CURSOR, false);
      setFontSize(16);
      setLS(LS_KEYS.FONT_SIZE, 16);
    }
    
    setIsActive(true);
    applyStyles();
  }, [visionImpaired, applyStyles]);

  const toggleAdhdFriendly = useCallback(() => {
    const newState = !adhdFriendly;
    setAdhdFriendly(newState);
    setLS(LS_KEYS.ADHD_FRIENDLY, newState);
    
    if (newState) {
      setLS(LS_KEYS.STOP_ANIMATIONS, true);
      setLS(LS_KEYS.READING_GUIDE, true);
      stopAnimations();
    } else {
      setLS(LS_KEYS.STOP_ANIMATIONS, false);
      setLS(LS_KEYS.READING_GUIDE, false);
      startAnimations();
    }
    
    setIsActive(true);
    applyStyles();
  }, [adhdFriendly, applyStyles, stopAnimations, startAnimations]);

  const toggleCognitiveDisability = useCallback(() => {
    const newState = !cognitiveDisability;
    setCognitiveDisability(newState);
    setLS(LS_KEYS.COGNITIVE_DISABILITY, newState);
    
    if (newState) {
      setLS(LS_KEYS.DYSLEXIC_FONT, true);
      setLS(LS_KEYS.READING_GUIDE, true);
      setLS(LS_KEYS.HIGHLIGHT_HEADINGS, true);
      setLS(LS_KEYS.HIGHLIGHT_LINKS, true);
      setFontSize(18);
      setLS(LS_KEYS.FONT_SIZE, 18);
    } else {
      setLS(LS_KEYS.DYSLEXIC_FONT, false);
      setLS(LS_KEYS.READING_GUIDE, false);
      setLS(LS_KEYS.HIGHLIGHT_HEADINGS, false);
      setLS(LS_KEYS.HIGHLIGHT_LINKS, false);
      setFontSize(16);
      setLS(LS_KEYS.FONT_SIZE, 16);
    }
    
    setIsActive(true);
    applyStyles();
  }, [cognitiveDisability, applyStyles]);

  const toggleBlindUsers = useCallback(() => {
    const newState = !blindUsers;
    setBlindUsers(newState);
    setLS(LS_KEYS.BLIND_USERS, newState);
    
    if (newState) {
      setLS(LS_KEYS.IMAGE_ALT, true);
      setLS(LS_KEYS.PAGE_STRUCTURE, true);
      setLS(LS_KEYS.TOOLTIPS, true);
    } else {
      setLS(LS_KEYS.IMAGE_ALT, false);
      setLS(LS_KEYS.PAGE_STRUCTURE, false);
      setLS(LS_KEYS.TOOLTIPS, false);
    }
    
    setIsActive(true);
    applyStyles();
  }, [blindUsers, applyStyles]);

  const toggleKeyboardNav = useCallback(() => {
    const newState = !keyboardNav;
    setKeyboardNav(newState);
    setLS(LS_KEYS.KEYBOARD_NAV, newState);
    
    if (newState) {
      setLS(LS_KEYS.HIGHLIGHT_LINKS, true);
      setLS(LS_KEYS.TOOLTIPS, true);
    } else {
      setLS(LS_KEYS.HIGHLIGHT_LINKS, false);
      setLS(LS_KEYS.TOOLTIPS, false);
    }
    
    setIsActive(true);
    applyStyles();
  }, [keyboardNav, applyStyles]);

  // Ayarları sıfırla
  const resetAll = useCallback(() => {
    Object.values(LS_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    
    document.documentElement.classList.remove('accessibility-active');
    
    // Tüm state'leri sıfırla
    setSeizureSafe(false);
    setVisionImpaired(false);
    setAdhdFriendly(false);
    setCognitiveDisability(false);
    setBlindUsers(false);
    setKeyboardNav(false);
    setFontSize(16);
    setIsActive(false);
    setPanelPosition("right");
    startAnimations();
    
    if (guideRef.current) {
      guideRef.current.remove();
      guideRef.current = null;
    }
  }, [startAnimations]);

  // Font boyutu ayarla
  const setFontSizeWithSave = useCallback((size) => {
    setFontSize(size);
    setLS(LS_KEYS.FONT_SIZE, size);
    applyStyles();
  }, [applyStyles]);

  // Toggle ayar
  const toggleSetting = useCallback((key) => {
    const current = getLS(key, false);
    setLS(key, !current);
    applyStyles();
    
    if (key === LS_KEYS.STOP_ANIMATIONS) {
      if (!current) stopAnimations();
      else startAnimations();
    }
    
    setIsActive(true);
  }, [applyStyles, stopAnimations, startAnimations]);

  // Arama sonuçları
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return ROUTES;
    const query = searchQuery.toLowerCase();
    return ROUTES.filter(route => 
      route.label.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Ana bileşen - Sadece FAB butonu
  if (!isActive) {
    return (
      <div className={`fixed ${panelPosition === 'right' ? 'right-8' : 'left-8'} bottom-8 z-50 flex flex-col gap-3`}>
        {/* Ana Açma Butonu */}
        <button
          onClick={() => setIsActive(true)}
          className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Erişilebilirlik ayarlarını aç"
          title="Erişilebilirlik Panelini Aç"
        >
          <span className="group-hover:scale-110 transition-transform">♿</span>
        </button>

        {/* Konum Değiştir Butonu */}
        <button
          onClick={togglePanelPosition}
          className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
          aria-label={`Paneli ${panelPosition === 'right' ? 'sola' : 'sağa'} taşı`}
          title="Paneli Taşı"
        >
          {panelPosition === 'right' ? '◀' : '▶'}
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Ana Panel */}
      <div 
        ref={panelRef}
        className={`fixed top-0 ${panelPosition === 'right' ? 'right-0' : 'left-0'} z-[10000] w-full max-w-96 h-screen bg-white shadow-2xl border-l border-gray-200 flex flex-col`}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">♿</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">Erişilebilirlik</h2>
              <p className="text-blue-100 text-sm">Ayarlarınızı kişiselleştirin</p>
            </div>
          </div>
          
          {/* Header Butonları */}
          <div className="flex items-center gap-2">
            {/* Konum Değiştir Butonu */}
            <button
              onClick={togglePanelPosition}
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label={`Paneli ${panelPosition === 'right' ? 'sola' : 'sağa'} taşı`}
              title="Paneli Taşı"
            >
              {panelPosition === 'right' ? '◀' : '▶'}
            </button>

            {/* Kapat Butonu */}
            <button
              onClick={() => setIsActive(false)}
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Erişilebilirlik panelini kapat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {[
            { id: "profiles", label: "Profiller", icon: "👤" },
            { id: "content", label: "İçerik", icon: "📝" },
            { id: "color", label: "Renk", icon: "🎨" },
            { id: "orientation", label: "Yönlendirme", icon: "🎯" },
            { id: "tools", label: "Araçlar", icon: "🛠️" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-3 text-xs font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'text-blue-600 bg-white border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="text-lg mb-1">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4">
          
          {/* Profiller */}
          {activeTab === "profiles" && (
            <div className="space-y-6">
              <div className="text-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Sizin için doğru erişilebilirlik profilini seçin</h3>
                <p className="text-sm text-gray-600 mt-1">İhtiyaçlarınıza uygun ayarları otomatik olarak uygulayın</p>
              </div>

              <ProfileToggle
                icon="⚡"
                title="Epilepsi Güvenli Profili"
                description="Yanıp sönen efektleri temizler ve renkleri azaltır"
                isActive={seizureSafe}
                onToggle={toggleSeizureSafe}
              />
              
              <ProfileToggle
                icon="👁️"
                title="Görme Engelli Profili"
                description="Web sitesinin görsellerini geliştirir"
                isActive={visionImpaired}
                onToggle={toggleVisionImpaired}
              />
              
              <ProfileToggle
                icon="🧠"
                title="DEHB Dostu Profili"
                description="Daha fazla odaklanma ve daha az dikkat dağıtıcı öğe"
                isActive={adhdFriendly}
                onToggle={toggleAdhdFriendly}
              />
              
              <ProfileToggle
                icon="🎯"
                title="Bilişsel Engelli Profili"
                description="Okuma ve odaklanmaya yardımcı olur"
                isActive={cognitiveDisability}
                onToggle={toggleCognitiveDisability}
              />
              
              <ProfileToggle
                icon="⌨️"
                title="Klavye Navigasyonu (Motor)"
                description="Web sitesini klavye ile kullanın"
                isActive={keyboardNav}
                onToggle={toggleKeyboardNav}
              />
              
              <ProfileToggle
                icon="🔈"
                title="Görme Engelli Kullanıcılar (Ekran Okuyucu)"
                description="Web sitesini ekran okuyucular için optimize edin"
                isActive={blindUsers}
                onToggle={toggleBlindUsers}
              />
            </div>
          )}

          {/* Diğer sekmeler aynı kalacak... */}
          {activeTab === "content" && (
            <div className="space-y-6">
              <Section title="Yazı Boyutu">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSizeWithSave(Math.max(12, fontSize - 2))}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-lg transition-colors"
                  >
                    A-
                  </button>
                  <div className="flex-1 text-center py-3 bg-blue-50 text-blue-700 rounded-lg font-bold">
                    {fontSize}px
                  </div>
                  <button
                    onClick={() => setFontSizeWithSave(Math.min(24, fontSize + 2))}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold text-lg transition-colors"
                  >
                    A+
                  </button>
                </div>
              </Section>

              <Section title="Okunabilirlik">
                <Toggle
                  label="Disleksi Yazı Tipi"
                  checked={getLS(LS_KEYS.DYSLEXIC_FONT, false)}
                  onChange={() => toggleSetting(LS_KEYS.DYSLEXIC_FONT)}
                />
                <Toggle
                  label="Başlıkları Vurgula"
                  checked={getLS(LS_KEYS.HIGHLIGHT_HEADINGS, false)}
                  onChange={() => toggleSetting(LS_KEYS.HIGHLIGHT_HEADINGS)}
                />
                <Toggle
                  label="Bağlantıları Vurgula"
                  checked={getLS(LS_KEYS.HIGHLIGHT_LINKS, false)}
                  onChange={() => toggleSetting(LS_KEYS.HIGHLIGHT_LINKS)}
                />
              </Section>
            </div>
          )}

          {activeTab === "color" && (
            <div className="space-y-4">
              <Toggle
                label="Yüksek Kontrast"
                checked={getLS(LS_KEYS.HIGH_CONTRAST, false)}
                onChange={() => toggleSetting(LS_KEYS.HIGH_CONTRAST)}
              />
              <Toggle
                label="Renkleri Ters Çevir"
                checked={getLS(LS_KEYS.INVERT_COLORS, false)}
                onChange={() => toggleSetting(LS_KEYS.INVERT_COLORS)}
              />
              <Toggle
                label="Siyah-Beyaz"
                checked={getLS(LS_KEYS.GRAYSCALE, false)}
                onChange={() => toggleSetting(LS_KEYS.GRAYSCALE)}
              />
            </div>
          )}

          {activeTab === "orientation" && (
            <div className="space-y-4">
              <Toggle
                label="Büyük İmleç"
                checked={getLS(LS_KEYS.BIG_CURSOR, false)}
                onChange={() => toggleSetting(LS_KEYS.BIG_CURSOR)}
              />
              <Toggle
                label="Animasyonları Durdur"
                checked={getLS(LS_KEYS.STOP_ANIMATIONS, false)}
                onChange={() => toggleSetting(LS_KEYS.STOP_ANIMATIONS)}
              />
              <Toggle
                label="Sesleri Kapat"
                checked={getLS(LS_KEYS.MUTE_SOUNDS, false)}
                onChange={() => toggleSetting(LS_KEYS.MUTE_SOUNDS)}
              />
            </div>
          )}

          {activeTab === "tools" && (
            <div className="space-y-4">
              <ToolButton
                icon="🔍"
                label="Site İçi Arama"
                onClick={() => setIsSearchOpen(true)}
              />
              <ToolButton
                icon="📞"
                label="Hızlı İletişim"
                onClick={() => window.open('tel:+905453048671')}
              />
              <ToolButton
                icon="💬"
                label="WhatsApp"
                onClick={() => window.open('https://wa.me/905453048671')}
              />
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={resetAll}
                  className="w-full py-3 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition-colors"
                >
                  ↻ Tüm Ayarları Sıfırla
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 p-3">
          <div className="flex justify-between gap-2">
            <button
              onClick={() => setIsActive(false)}
              className="flex-1 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors text-sm"
            >
              Kapat
            </button>
            <button
              onClick={togglePanelPosition}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              title="Paneli Taşı"
            >
              {panelPosition === 'right' ? '◀' : '▶'}
            </button>
          </div>
        </div>
      </div>

      {/* Arama Modalı */}
      {isSearchOpen && (
        <SearchModal
          query={searchQuery}
          setQuery={setSearchQuery}
          results={searchResults}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}

// Yeni ProfileToggle Bileşeni - accessiBe stili
function ProfileToggle({ icon, title, description, isActive, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors">
      <div className="flex items-start gap-3 flex-1">
        <span className="text-2xl mt-1">{icon}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 ml-4">
        <span className={`text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
          {isActive ? 'AÇIK' : 'KAPALI'}
        </span>
        <button
          onClick={onToggle}
          className={`w-14 h-7 rounded-full transition-colors relative ${
            isActive ? 'bg-green-500' : 'bg-gray-300'
          }`}
          aria-pressed={isActive}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white transform transition-transform absolute top-1 ${
              isActive ? 'translate-x-8' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

// Diğer bileşenler aynı kalacak...
function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-700 font-medium">{label}</span>
      <button
        onClick={onChange}
        className={`w-12 h-6 rounded-full transition-colors relative ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        aria-pressed={checked}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transform transition-transform absolute top-1 ${
            checked ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

function ToolButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-left"
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium text-gray-700">{label}</span>
    </button>
  );
}

function SearchModal({ query, setQuery, results, onClose }) {
  return (
    <div className="fixed inset-0 z-[10001] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sayfalarda arama yapın..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <div className="text-4xl mb-4">🔍</div>
              <div className="text-lg font-semibold">Sonuç bulunamadı</div>
              <div className="text-sm mt-2">Farklı bir anahtar kelime deneyin</div>
            </div>
          ) : (
            results.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={onClose}
                className="flex items-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <span className="text-xl">{route.icon}</span>
                <span className="font-medium text-gray-700">{route.label}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
