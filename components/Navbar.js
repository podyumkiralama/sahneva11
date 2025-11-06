// components/Navbar.js (sadece değişen kısımlar)

// Hizmetler dropdown menüsü - DÜZELTİLDİ
<div
  id={servicesMenuId}
  role="menu"
  aria-labelledby={servicesBtnId}
  hidden={!servicesOpen}
  className={`absolute left-0 top-full mt-2 w-80 bg-white/95 backdrop-blur-xl border border-neutral-200/60 rounded-xl shadow-lg z-[60] overflow-hidden ${
    servicesOpen ? "animate-fadeIn" : "pointer-events-none"
  }`}
  onMouseEnter={openNow}
  onMouseLeave={closeWithDelay}
>
  <div className="flex flex-col p-2 max-h-96 overflow-y-auto">
    {serviceLinks.map(({ href, label, title, icon, description }) => (
      <Link
        key={href}
        role="menuitem"
        href={href}
        className="group flex items-start gap-3 px-3 py-3 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 w-full"
        onClick={() => setServicesOpen(false)}
        aria-current={active(href) ? "page" : undefined}
        title={title}
      >
        <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity mt-0.5 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-neutral-800 group-hover:text-blue-600">{label}</div>
          <div className="text-xs text-neutral-500 mt-1">{description}</div>
        </div>
      </Link>
    ))}
  </div>
</div>

// Mobil hizmetler menüsü - DÜZELTİLDİ
<div
  id="mobile-services-list"
  className={mobileServicesListClass}
>
  <div className="ml-4 space-y-1 rounded-lg border border-neutral-200/60 bg-white/80 p-2">
    {serviceLinks.map(({ href, label, title, icon, description }) => (
      <Link
        key={href}
        href={href}
        onClick={() => setMobileOpen(false)}
        className="flex items-start gap-3 px-3 py-2 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all duration-200 w-full"
        aria-current={active(href) ? "page" : undefined}
        title={title}
      >
        <span className="text-base opacity-70 mt-0.5 flex-shrink-0" aria-hidden="true">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-neutral-800">{label}</div>
          <div className="text-xs text-neutral-500 mt-1">{description}</div>
        </div>
      </Link>
    ))}
  </div>
</div>
