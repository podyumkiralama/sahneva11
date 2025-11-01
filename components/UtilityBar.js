/* ========================================================================== */
/* ✅ UTILITY BAR STYLES - ALT TARAFTA MODERN TASARIM */
/* ========================================================================== */

.utility-bar-container {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 12px 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.utility-bar-container.scrolled {
  transform: translateX(-50%) translateY(-10px);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.utility-bar-content {
  display: flex;
  gap: 8px;
  align-items: center;
}

.utility-tool-wrapper {
  position: relative;
}

.utility-btn {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  box-shadow: 
    0 8px 20px rgba(102, 126, 234, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.utility-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 12px 30px rgba(102, 126, 234, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.utility-btn-active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  transform: scale(1.1);
  box-shadow: 
    0 10px 25px rgba(245, 87, 108, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.utility-dot {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.utility-btn-active .utility-dot {
  opacity: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* ✅ Tooltip Stilleri - YUKARI AÇILAN */
.utility-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  margin-bottom: 12px;
  animation: tooltipSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes tooltipSlideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.utility-tooltip-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 220px;
}

/* ✅ Font Kontrol Stilleri - MODERN */
.font-size-controls {
  margin-bottom: 20px;
}

.control-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #6b7280;
  margin-bottom: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.font-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.font-btn {
  flex: 1;
  padding: 10px 16px;
  border: 2px solid #f1f5f9;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 15px;
  color: #374151;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.font-btn:hover {
  background: #f8fafc;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.contrast-btn {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #f1f5f9;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contrast-btn:hover {
  background: #f8fafc;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

/* ✅ İletişim Butonları - MODERN */
.contact-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 10px;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-btn:last-child {
  margin-bottom: 0;
}

.contact-btn.phone {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.contact-btn.phone:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.contact-btn.whatsapp {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}

.contact-btn.whatsapp:hover {
  background: linear-gradient(135deg, #16a34a, #15803d);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
}

.whatsapp-icon {
  font-size: 16px;
}

/* ✅ Arama Modalı Stilleri - MODERN */
.search-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 120px;
  animation: overlayFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.search-modal-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  width: 90%;
  max-width: 600px;
  max-height: 70vh;
  overflow: hidden;
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.search-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(248, 250, 252, 0.8);
}

.search-input-wrapper {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  font-size: 18px;
}

.search-input {
  width: 100%;
  padding: 16px 16px 16px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  font-weight: 500;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.search-close-btn {
  padding: 12px 20px;
  background: linear-gradient(135deg, #6b7280, #4b5563);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.search-close-btn:hover {
  background: linear-gradient(135deg, #4b5563, #374151);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.search-results {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
}

.no-results {
  text-align: center;
  padding: 50px 20px;
  color: #6b7280;
}

.no-results-icon {
  font-size: 56px;
  margin-bottom: 20px;
  opacity: 0.6;
}

.no-results-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #374151;
}

.no-results-description {
  font-size: 15px;
  opacity: 0.8;
  line-height: 1.5;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-decoration: none;
  color: #374151;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.6);
}

.result-item:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.result-icon {
  font-size: 20px;
  width: 28px;
  text-align: center;
}

.result-label {
  flex: 1;
  font-weight: 600;
  font-size: 15px;
}

.result-url {
  font-size: 12px;
  color: #6b7280;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 4px 8px;
  border-radius: 6px;
}

.search-tips {
  margin-top: 20px;
  padding: 20px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  margin: 20px;
}

.tips-text {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  font-weight: 500;
}

/* ✅ Yüksek Kontrast Modu - GÜNCELLENMİŞ */
.hc .utility-bar-container {
  background: #000;
  border: 3px solid #fff;
  box-shadow: 0 20px 60px rgba(255, 255, 255, 0.1);
}

.hc .utility-tooltip-content {
  background: #000;
  border: 3px solid #fff;
  color: #fff;
}

.hc .font-btn,
.hc .contrast-btn {
  background: #000;
  border: 2px solid #fff;
  color: #fff;
}

.hc .font-btn:hover,
.hc .contrast-btn:hover {
  background: #333;
}

.hc .contact-btn {
  border: 2px solid #fff;
}

/* ✅ Mobile Responsive - GÜNCELLENMİŞ */
@media (max-width: 768px) {
  .utility-bar-container {
    bottom: 20px;
    padding: 10px 16px;
    border-radius: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: 90%;
  }
  
  .utility-bar-container.scrolled {
    transform: translateX(-50%) translateY(-5px);
  }
  
  .utility-bar-content {
    gap: 6px;
  }
  
  .utility-btn {
    width: 48px;
    height: 48px;
    font-size: 18px;
    border-radius: 14px;
  }
  
  .utility-tooltip {
    margin-bottom: 10px;
  }
  
  .utility-tooltip-content {
    min-width: 200px;
    padding: 16px;
  }
  
  .search-modal-overlay {
    padding: 80px 20px 20px;
    align-items: flex-start;
  }
  
  .search-modal-container {
    width: 95%;
    max-height: 80vh;
  }
  
  .search-header {
    flex-direction: column;
    gap: 12px;
    padding: 20px;
  }
  
  .search-input-wrapper {
    width: 100%;
  }
  
  .search-close-btn {
    width: 100%;
  }
  
  .font-buttons {
    gap: 8px;
  }
  
  .font-btn {
    padding: 8px 12px;
    font-size: 14px;
  }
}

/* ✅ Çok küçük ekranlar */
@media (max-width: 480px) {
  .utility-bar-container {
    bottom: 15px;
    padding: 8px 12px;
    border-radius: 18px;
  }
  
  .utility-btn {
    width: 44px;
    height: 44px;
    font-size: 16px;
    border-radius: 12px;
  }
  
  .utility-tooltip-content {
    min-width: 180px;
    padding: 14px;
  }
  
  .search-modal-overlay {
    padding: 60px 15px 15px;
  }
  
  .search-header {
    padding: 16px;
  }
  
  .search-input {
    padding: 14px 14px 14px 44px;
    font-size: 15px;
  }
}

/* ✅ Reduced motion için UtilityBar stilleri */
@media (prefers-reduced-motion: reduce) {
  .utility-bar-container,
  .utility-btn,
  .utility-dot,
  .utility-tooltip,
  .font-btn,
  .contrast-btn,
  .contact-btn,
  .search-input,
  .search-close-btn,
  .result-item {
    transition: none !important;
    animation: none !important;
  }
  
  .utility-btn:hover,
  .contact-btn:hover {
    transform: none !important;
  }
  
  .utility-dot {
    animation: none !important;
  }
  
  .burst-particle {
    animation: none !important;
    opacity: 0 !important;
  }
}

/* ✅ Koyu tema desteği */
@media (prefers-color-scheme: dark) {
  .utility-bar-container {
    background: rgba(30, 30, 30, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05);
  }
  
  .utility-tooltip-content {
    background: rgba(30, 30, 30, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  
  .font-btn,
  .contrast-btn {
    background: rgba(50, 50, 50, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  
  .font-btn:hover,
  .contrast-btn:hover {
    background: rgba(70, 70, 70, 0.8);
  }
}
