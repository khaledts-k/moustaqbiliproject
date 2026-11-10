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
  askEmail: "meshoabul@gmail.com"
};

// The top menu: the search (home page) and the More info page
const SITE_NAV = [
  { href: "index.html", key: "nav_home", label: "Search" },
  { href: "navigate.html", key: "nav_navigate", label: "More info" }
];

// Every other page: listed in the "More info" side panel on every page, and in the footer
const SITE_PAGES = [
  { href: "results.html", key: "nav_courses", label: "Scholarships" },
  { href: "score.html", key: "nav_score", label: "Check my score" },
  { href: "qudrat.html", key: "nav_qudrat", label: "Qudrat Tests" },
  { href: "local-universities.html", key: "nav_local", label: "Study in Kuwait" },
  { href: "suggestions.html", key: "nav_guide", label: "How to Apply" },
  { href: "clarifications.html", key: "nav_questions", label: "Questions" },
  { href: "more-info.html", key: "nav_more", label: "Rules, money & visas" },
  { href: "resources.html", key: "nav_resources", label: "Resources" },
  { href: "contact.html", key: "nav_contact", label: "Contact" },
  { href: "ask.html", key: "nav_ask", label: "Ask Us" },
  { href: "about.html", key: "nav_about", label: "About" }
];
const FOOTER_EXTRA = SITE_PAGES; // older name, still read by the site search

const LANG_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`;

const MOON_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
const SUN_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
const SEARCH_ICON = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/></svg>`;

function currentPageFile() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function renderSiteHeader() {
  const slot = document.getElementById("site-header");
  if (!slot) return;
  const page = currentPageFile();
  // On the search page the header box keeps what the student searched for
  const query = (page === "index.html" || page === "search.html") ? (new URLSearchParams(window.location.search).get("q") || "") : "";

  const desktopLinks = SITE_NAV.map(item => {
    const active = item.href === page;
    return `<a href="${item.href}" class="py-2 transition ${active ? 'text-white font-bold border-b-2 border-amber-400' : 'text-slate-300 hover:text-white'}" ${active ? 'aria-current="page"' : ''} data-i18n="${item.key}">${item.label}</a>`;
  }).join("");

  const mobileLinks = SITE_NAV.concat(SITE_PAGES).map(item => {
    const active = item.href === page;
    return `<a href="${item.href}" class="block px-3 py-2 rounded ${active ? 'text-white bg-olive-800' : 'text-slate-300 hover:text-white'}" data-i18n="${item.key}">${item.label}</a>`;
  }).join("");

  slot.outerHTML = `
  <header class="gov-header-gradient text-white sticky top-0 z-40 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-3 min-w-0">
        <div class="w-10 h-10 rounded bg-olive-950 border border-olive-800 flex items-center justify-center text-amber-400 flex-shrink-0">
          <img src="assets/img/logo-mark.svg" alt="" class="w-8 h-8">
        </div>
        <div class="min-w-0">
          <span class="text-base font-extrabold tracking-tight block leading-tight">moustaqbili | مستقبلي</span>
          <span class="text-xs text-slate-300 font-medium block truncate" data-i18n="portal_subtitle">Scholarships &amp; Admissions Guide</span>
        </div>
      </a>

      <nav class="hidden sm:flex items-center gap-5 text-sm font-semibold" aria-label="Main">
        ${desktopLinks}
      </nav>

      <div class="flex items-center gap-2">
        <button type="button" data-theme-toggle class="theme-toggle" title="Dark / light mode">
          <span class="theme-when-light" aria-hidden="true">${MOON_ICON}</span>
          <span class="theme-when-dark" aria-hidden="true">${SUN_ICON}</span>
          <span class="sr-only theme-when-light" data-i18n="theme_dark">Dark mode</span>
          <span class="sr-only theme-when-dark" data-i18n="theme_light">Light mode</span>
        </button>
        <button type="button" data-lang-toggle class="px-3 py-1.5 rounded bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition flex items-center gap-1.5 cursor-pointer" aria-label="Toggle language">
          ${LANG_ICON}
          <span id="lang-toggle-text" data-i18n="btn_lang_toggle">العربية</span>
        </button>
        <button id="mobile-menu-btn" type="button" class="sm:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-olive-800" aria-label="Toggle navigation" aria-expanded="false">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="hidden sm:hidden bg-olive-950 border-b border-olive-900 px-4 pt-2 pb-4 space-y-1 text-sm font-semibold">
      ${mobileLinks}
    </div>

    <div class="site-search-bar">
      <form action="index.html" method="get" role="search" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2">
        <label for="site-search-input" class="sr-only" data-i18n="site_search_label">Search the site</label>
        <div class="relative flex-1 min-w-0">
          <span class="site-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
          <input id="site-search-input" name="q" type="search" autocomplete="off" value="${escapeAttr(query)}"
            placeholder="Search majors, countries, Qudrat, questions..." data-i18n-placeholder="site_search_placeholder"
            class="site-search-input">
        </div>
        <button type="submit" class="site-search-btn" data-i18n="site_search_btn">Search</button>
      </form>
    </div>
  </header>`;

  // Clicks are wired here, not with onclick="...", because the pages' security policy blocks inline code
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", toggleTheme);
  document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => toggleLanguage());

  // "/" jumps to the search box from anywhere (unless already typing somewhere)
  document.addEventListener("keydown", e => {
    if (e.key !== "/" || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (document.activeElement?.tagName || "").toLowerCase();
    if (["input", "textarea", "select"].includes(tag) || document.activeElement?.isContentEditable) return;
    e.preventDefault();
    document.getElementById("site-search-input")?.focus();
  });
}

function escapeAttr(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

// Dark mode. theme.js (in each page's <head>) applies the saved choice before the page is drawn;
// the button only flips the class and remembers the choice on this device.
function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark");
  try { localStorage.setItem("moustaqbili_theme", dark ? "dark" : "light"); } catch (e) { /* private mode: still switches for this page */ }
}

function renderSiteFooter() {
  const slot = document.getElementById("site-footer");
  if (!slot) return;

  const links = SITE_NAV.concat(SITE_PAGES)
    .map(item => `<a href="${item.href}" class="hover:text-white transition" data-i18n="${item.key}">${item.label}</a>`)
    .join("");

  slot.outerHTML = `
  <footer class="bg-olive-950 text-slate-400 text-xs py-10 border-t border-olive-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div>
        <span class="text-white font-bold text-sm block">moustaqbili | مستقبلي</span>
        <span class="text-slate-400 text-xs block mt-1 max-w-sm" data-i18n="footer_desc">Independent student guide. Always confirm final decisions with the Ministry of Higher Education.</span>
        <!-- Update schedule; the next date is filled in by app.js (initUpdateNote) -->
        <p class="mt-3 inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 py-1.5 rounded-lg bg-olive-900 border border-olive-800 text-slate-200 text-xs">
          <svg class="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke-width="2"/><path stroke-linecap="round" stroke-width="2" d="M12 7v5l3 2"/></svg>
          <span data-i18n="footer_update_schedule">Updated every week on Thursday at 4:00 PM (Kuwait time).</span>
          <span id="footer-next-update" class="text-amber-300 font-semibold"></span>
        </p>
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

// Uncoloured potato icon for the "Navigate Moustaqbili" page: outline only, takes the text colour
const POTATO_ICON = `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M7.5 27.5c-1.6-6.6 2.6-12.9 9.6-14.9 4.4-1.3 7.4.6 11.2-.4 5.9-1.6 12.5 1.7 13.9 7.9 1 4.5-1.4 6.6-1.2 10.2.4 6.5-5.4 10.6-12.4 10.4-4.6-.1-6.6-2.3-10.9-2.2-5 .1-9-4.5-10.2-11z"/>
  <path d="M15.5 22.5l1.6.9"/>
  <path d="M26.5 18.8l1.7-.5"/>
  <path d="M34.8 25.6l.8 1.6"/>
  <path d="M21.5 31.2l1.8-.2"/>
  <path d="M12.6 30.4h.01"/>
  <path d="M30.6 33.2h.01"/>
</svg>`;

// Help button in the bottom corner of every page, linking to the Navigate page.
// On the home page a "Having trouble?" prompt points at it.
function renderHelpButton() {
  const page = currentPageFile();
  document.querySelectorAll("[data-potato]").forEach(el => { el.innerHTML = POTATO_ICON; });
  if (page === "navigate.html") return; // already on the help page

  const prompt = page === "index.html" ? `
    <a href="navigate.html" class="help-callout">
      <span data-i18n="help_trouble">Having trouble?</span>
      <span class="help-callout-arrow flip-rtl" aria-hidden="true">&rarr;</span>
    </a>` : "";

  document.body.insertAdjacentHTML("beforeend", `
  <div class="help-fab-wrap">
    ${prompt}
    <a href="navigate.html" class="potato-fab" title="How this site works">
      ${POTATO_ICON}
      <span class="sr-only" data-i18n="nav_navigate">How this site works</span>
    </a>
  </div>`);
}

window.SITE_CONFIG = SITE_CONFIG;
window.toggleTheme = toggleTheme;

renderSiteHeader();
renderSiteFooter();
renderHelpButton();
