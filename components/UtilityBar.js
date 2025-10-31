/* components/UtilityBar.css */
:root {
  --fs: 100%;
}

/* ✅ Ana Utility Bar Container - SAĞ TARAFTA */
.utility-bar-container {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 12px 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  will-change: transform;
  contain: layout style paint;
}

.utility-bar-container.scrolled {
  transform: translateY(-60%);
}

.utility-bar-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.utility-tool-wrapper {
  position: relative;
}

/* ✅ Buton Stilleri */
.utility-btn {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 18px;
}

.utility-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.utility-btn-active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.utility-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 6px;
  height: 6px;
  background: #10b981;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.utility-btn-active .utility-dot {
  opacity: 1;
}

/* ✅ Tooltip Stilleri - SOLA AÇILAN */
.utility-tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  margin-right: 8px;
}

.utility-tooltip-content {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

/* ✅ Font Kontrol Stilleri */
.font-size-controls {
  margin-bottom: 12px;
}

.control-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.font-buttons {
  display: flex;
  gap: 8px;
}

.font-btn {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.font-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.contrast-btn {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contrast-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

/* ✅ İletişim Butonları */
.contact-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 8px;
}

.contact-btn:last-child {
  margin-bottom: 0;
}

.contact-btn.phone {
  background: #3b82f6;
  color: white;
}

.contact-btn.phone:hover {
  background: #2563eb;
}

.contact-btn.whatsapp {
  background: #22c55e;
  color: white;
}

.contact-btn.whatsapp:hover {
  background: #16a34a;
}

.whatsapp-icon {
  font-size: 16px;
}

/* ✅ Arama Modalı Stilleri */
.search-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.search-modal-container {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.search-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #f8fafc;
}

.search-input-wrapper {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-close-btn {
  padding: 10px 16px;
  background: #6b7280;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
}

.search-close-btn:hover {
  background: #4b5563;
}

.search-results {
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
}

.no-results {
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
}

.no-results-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.no-results-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #374151;
}

.no-results-description {
  font-size: 14px;
  opacity: 0.7;
}

.results-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.result-item:hover {
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.result-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.result-label {
  flex: 1;
  font-weight: 500;
}

.result-url {
  font-size: 12px;
  color: #6b7280;
  font-family: monospace;
}

.search-tips {
  margin-top: 20px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.tips-text {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}

/* ✅ Burst Particle Animasyonları */
.burst-particle {
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  border-radius: 50%;
  opacity: 0;
}

.font-change-active {
  transition: transform 0.3s ease !important;
}

/* ✅ Yüksek Kontrast Modu */
.hc .utility-bar-container {
  background: #000;
  border: 2px solid #fff;
}

.hc .utility-tooltip-content {
  background: #000;
  border: 2px solid #fff;
  color: #fff;
}

.hc .font-btn,
.hc .contrast-btn,
.hc .contact-btn {
  background: #000;
  border: 1px solid #fff;
  color: #fff;
}

.hc .font-btn:hover,
.hc .contrast-btn:hover {
  background: #333;
}

/* ✅ Mobile Responsive */
@media (max-width: 768px) {
  .utility-bar-container {
    right: 10px;
    padding: 8px 6px;
  }
  
  .utility-btn {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }
  
  .utility-tooltip {
    margin-right: 6px;
  }
  
  .utility-tooltip-content {
    min-width: 180px;
    padding: 12px;
  }
  
  .search-modal-overlay {
    padding: 20px;
    align-items: center;
  }
  
  .search-modal-container {
    width: 95%;
    max-height: 90vh;
  }
  
  .search-header {
    flex-direction: column;
    gap: 8px;
  }
  
  .search-input-wrapper {
    width: 100%;
  }
  
  .search-close-btn {
    width: 100%;
  }
}

/* ✅ Çok küçük ekranlar */
@media (max-width: 480px) {
  .utility-bar-container {
    right: 5px;
    padding: 6px 4px;
  }
  
  .utility-btn {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  
  .utility-tooltip-content {
    min-width: 160px;
    padding: 10px;
  }
  
  .font-buttons {
    flex-direction: column;
    gap: 4px;
  }
}
