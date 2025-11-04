/* GTM init – inline yerine harici dosya */
(function () {
  try {
    const current = document.currentScript;
    const containerId = current?.getAttribute("data-gtm-id");

    if (!containerId) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;

    if (current?.nonce) {
      script.nonce = current.nonce;
    }

    const firstScript = document.getElementsByTagName("script")[0];
    (firstScript?.parentNode || document.head || document.documentElement).insertBefore(
      script,
      firstScript || null,
    );
  } catch (error) {
    // Sessizce geç
  }
})();
