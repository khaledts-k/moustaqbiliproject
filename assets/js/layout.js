/**
 * moustaqbili | مستقبلي
 * Shared header & footer
 *
 * Every page has <div id="site-header"></div> and <div id="site-footer"></div>.
 * This script runs synchronously (scripts sit at the end of <body>), so the
 * markup exists before i18n.js translates [data-i18n] on DOMContentLoaded.
 */

// Site-wide settings
const SITE_CONFIG = {
  // Email address for the "Ask us" page. Leave empty until the address exists:
  // the form then lets students copy their question instead of sending it.
  askEmail: ""
};

const SITE_NAV = [
  { href: "index.html", key: "nav_home", label: "Home" },
  { href: "results.html", key: "nav_courses", label: "Scholarships" },
  { href: "qudrat.html", key: "nav_qudrat", label: "Qudrat Tests" },
  { href: "local-universities.html", key: "nav_local", label: "Study in Kuwait" },
  { href: "suggestions.html", key: "nav_guide", label: "How to Apply" },
  { href: "clarifications.html", key: "nav_questions", label: "Questions" },
  { href: "more-info.html", key: "nav_more", label: "More Info" },
  { href: "contact.html", key: "nav_contact", label: "Contact" }
];

// Footer-only links
const FOOTER_EXTRA = [
  { href: "ask.html", key: "nav_ask", label: "Ask Us" },
  { href: "about.html", key: "nav_about", label: "About" }
];

const LANG_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`;

function currentPageFile() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function renderSiteHeader() {
  const slot = document.getElementById("site-header");
  if (!slot) return;
  const page = currentPageFile();

  const desktopLinks = SITE_NAV.map(item => {
    const active = item.href === page;
    return `<a href="${item.href}" class="py-2 transition ${active ? 'text-white font-bold border-b-2 border-amber-400' : 'text-slate-300 hover:text-white'}" ${active ? 'aria-current="page"' : ''} data-i18n="${item.key}">${item.label}</a>`;
  }).join("");

  const mobileLinks = SITE_NAV.map(item => {
    const active = item.href === page;
    return `<a href="${item.href}" class="block px-3 py-2 rounded ${active ? 'text-white bg-olive-800' : 'text-slate-300 hover:text-white'}" data-i18n="${item.key}">${item.label}</a>`;
  }).join("");

  slot.outerHTML = `
  <header class="gov-header-gradient text-white sticky top-0 z-40 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-3 min-w-0">
        <div class="w-10 h-10 rounded bg-olive-950 border border-olive-800 flex items-center justify-center text-amber-400 flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
        </div>
        <div class="min-w-0">
          <span class="text-base font-extrabold tracking-tight block leading-tight">moustaqbili | مستقبلي</span>
          <span class="text-xs text-slate-300 font-medium block truncate" data-i18n="portal_subtitle">Scholarships &amp; Admissions Guide</span>
        </div>
      </a>

      <nav class="hidden xl:flex items-center gap-4 text-xs font-semibold" aria-label="Main">
        ${desktopLinks}
      </nav>

      <div class="flex items-center gap-2">
        <button type="button" onclick="toggleLanguage()" class="px-3 py-1.5 rounded bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition flex items-center gap-1.5 cursor-pointer" aria-label="Toggle language">
          ${LANG_ICON}
          <span id="lang-toggle-text" data-i18n="btn_lang_toggle">العربية</span>
        </button>
        <button id="mobile-menu-btn" type="button" class="xl:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-olive-800" aria-label="Toggle navigation" aria-expanded="false">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="hidden xl:hidden bg-olive-950 border-b border-olive-900 px-4 pt-2 pb-4 space-y-1 text-sm font-semibold">
      ${mobileLinks}
    </div>
  </header>`;
}

function renderSiteFooter() {
  const slot = document.getElementById("site-footer");
  if (!slot) return;

  const links = SITE_NAV.concat(FOOTER_EXTRA)
    .map(item => `<a href="${item.href}" class="hover:text-white transition" data-i18n="${item.key}">${item.label}</a>`)
    .join("");

  slot.outerHTML = `
  <footer class="bg-olive-950 text-slate-400 text-xs py-10 border-t border-olive-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div>
        <span class="text-white font-bold text-sm block">moustaqbili | مستقبلي</span>
        <span class="text-slate-400 text-xs block mt-1 max-w-sm" data-i18n="footer_desc">Independent student guide. Always confirm final decisions with the Ministry of Higher Education.</span>
        <div class="mt-4 space-y-1.5 text-xs max-w-md">
          <span class="text-slate-300 font-semibold block" data-i18n="footer_flags_title">What the small labels next to some information mean:</span>
          <div><span class="flag flag-unconfirmed" data-i18n="flag_unconfirmed">Not confirmed</span> <span data-i18n="footer_flag_unconfirmed">The information next to this label (for example a date, amount or phone number) is not on any official website. Treat it as uncertain and check with the Ministry.</span></div>
          <div><span class="flag flag-unverified" data-i18n="flag_unverified">Not checked yet</span> <span data-i18n="footer_flag_unverified">The information next to this label comes from an older version of this site and has not been checked against the 2026/2027 rules. It may be out of date.</span></div>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium">
        ${links}
        <a href="https://www.mohe.edu.kw" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-300 transition">mohe.edu.kw</a>
      </div>
    </div>
  </footer>`;
}

window.SITE_CONFIG = SITE_CONFIG;

renderSiteHeader();
renderSiteFooter();
