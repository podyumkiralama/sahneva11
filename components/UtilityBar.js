/* High Contrast */
html.hc {
  --hc-bg:#0b0f1a; --hc-fg:#fff; --hc-link:#7dd3fc; --hc-focus:#60a5fa;
  background:var(--hc-bg); color:var(--hc-fg);
}
html.hc a{color:var(--hc-link)!important;text-decoration:underline}
html.hc *:focus-visible{outline:3px solid var(--hc-focus)!important;outline-offset:2px!important}

/* Underline links */
html.ub-ul a{text-decoration:underline!important}

/* Readability */
html.ub-readable p, html.ub-readable li{ line-height:1.8; letter-spacing:.015em }

/* Alignments */
html.ub-left p, html.ub-left li{ text-align:left!important }
html.ub-center p, html.ub-center li{ text-align:center!important }
html.ub-just p, html.ub-just li{ text-align:justify!important }

/* Filters / contrast families (apply to #__next to avoid UI) */
html.ub-invert #__next{ filter: invert(1) hue-rotate(180deg) }
html.ub-gray   #__next{ filter: grayscale(1) }
html.ub-desat  #__next{ filter: saturate(.6) }
html.ub-sat    #__next{ filter: saturate(1.4) }
html.ub-dark   body{ background:#0b0f1a; color:#e5e7eb }
html.ub-light  body{ background:#ffffff; color:#111827 }

/* Headings highlight */
html.ub-headings h1,html.ub-headings h2,html.ub-headings h3,
html.ub-headings h4,html.ub-headings h5,html.ub-headings h6{
  outline:2px dashed #7c3aed; outline-offset:4px; background:linear-gradient(to right,#eef2ff,transparent);
}

/* Reading mask */
html.ub-mask #__next{ position:relative }
html.ub-mask #__next::before{
  content:""; position:fixed; inset:0; background:rgba(0,0,0,.5);
  pointer-events:none; z-index:998;
}

/* Focus mode overlay */
html.ub-focusmode #__next{ position:relative }
html.ub-focusmode #__next::after{
  content:""; position:fixed; inset:0; background:rgba(0,0,0,.25); pointer-events:none; z-index:998;
}

/* Hide images + mute (mute is up to your media usage) */
html.ub-hideimg img{ visibility:hidden!important }
html.ub-mute video, html.ub-mute audio{ volume:0!important }

/* Read mode */
html.ub-readmode main{ max-width:760px; margin-inline:auto; }

/* Readable font (ör. Atkinson/Inter dyslexia-friendly – fontu projeye ekleyince değiştir) */
html.ub-font-readable{ font-family: ui-sans-serif, system-ui, -apple-system, "Atkinson Hyperlegible", Inter, Arial, sans-serif }

/* Custom color variables */
:root{ --ub-text: inherit; --ub-title: inherit; --ub-bg: inherit }
html body{ color:var(--ub-text); background:var(--ub-bg) }
html h1,html h2,html h3,html h4,html h5,html h6{ color:var(--ub-title) }

/* Small animations used in modals */
.animate-overlay{animation:fadeIn .22s ease-out}
.animate-modal{animation:riseIn .24s cubic-bezier(.2,.8,.2,1)}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes riseIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@media (prefers-reduced-motion: reduce){ .animate-overlay,.animate-modal{animation:none!important} }
