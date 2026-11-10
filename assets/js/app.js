/**
 * moustaqbili | مستقبلي
 * Application engine
 *
 * - Landing search + GPA converter (index.html)
 * - Approved programs: decluttered cards, Requirements modal, Salary & Benefits modal
 *   with a per-major currency calculator (results.html)
 * - Live exchange rates with an offline fallback (all currency figures)
 * - Qudrat current-cycle page + equivalent-score calculator (qudrat.html)
 * - Ministry contact directory (contact.html)
 * - Local universities directory (local-universities.html)
 */

document.addEventListener("DOMContentLoaded", () => {
  // The search page moved to the home page: keep old links (search.html?q=...) working
  if (currentPageFile() === "search.html") { location.replace(`index.html${location.search}${location.hash}`); return; }
  initCommonNav();
  loadLiveRates();

  const page = currentPageFile();
  if (page === "index.html") {
    initSearchPage();          // the home page is the search engine
    initLandingSearch();       // the folded-away filters
    initGpaCalculator();
  }
  if (page === "navigate.html") initSearchGuideVideo(); // "Start here" lives on the More info page
  if (page === "results.html") initResultsPage();
  if (page === "local-universities.html") initLocalUniversitiesPage();
  if (page === "qudrat.html") initQudratPage();
  if (page === "contact.html") initContactPage();
  if (page === "more-info.html") initMoreInfoPage();
  if (page === "clarifications.html") initClarificationsPage();
  if (page === "ask.html") initAskPage();
  if (page === "suggestions.html") initApplySteps();
  if (page === "navigate.html") initNavigatePage();
  if (page === "why.html") initWhyPage();
  if (page === "score.html") initScorePage();
  if (page === "resources.html") initResourcesPage();
  if (document.body.classList.contains("page-404")) init404Page(); // its address is whatever was mistyped
  initWhyLinks();
  initUpdateNote();
  initPageSidebar();
  revealHashTarget();
});

// =========================================================================
// 1. Shared helpers
// =========================================================================
function initCommonNav() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("hidden") === false;
      mobileBtn.setAttribute("aria-expanded", String(open));
    });
  }
}

// Translation lookup for dynamically rendered UI (falls back to English, then the key)
function t(key) {
  const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';
  const dict = window.MOUSTAQBILI_TRANSLATIONS || {};
  return dict[lang]?.[key] ?? dict.en?.[key] ?? key;
}

function isArabic() {
  return typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'ar';
}

// Bilingual records (qudrat-data.js, contact-data.js) store `fieldEn` / `fieldAr` pairs
function L(obj, field) {
  if (!obj) return "";
  return (isArabic() ? obj[`${field}Ar`] : obj[`${field}En`]) ?? obj[`${field}En`] ?? "";
}

function formatDate(iso) {
  if (!iso) return t('not_announced');
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(isArabic() ? 'ar-KW' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', numberingSystem: 'latn' });
}

function formatNumber(n, maxFractionDigits = 0) {
  return Number(n).toLocaleString('en-US', { maximumFractionDigits: maxFractionDigits });
}

const ICON_EXTERNAL = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;
const ICON_CHECK = `<svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`;

// Data-status label. "unconfirmed": no official source confirms it.
// "unverified": carried over from the previous edition, not yet checked against 2026/2027 sources.
function flag(kind) {
  return `<span class="flag flag-${kind}" title="${t(`flag_${kind}_tip`)}">${t(`flag_${kind}`)}</span>`;
}

// Data text can carry "{{unconfirmed}}" / "{{unverified}}" where a status label belongs
function withFlags(str) {
  return String(str ?? "").replace(/\s*\{\{(unconfirmed|unverified)\}\}/g, (m, kind) => ` ${flag(kind)}`);
}

// -------------------------------------------------------------------------
// Reveal cards: the front shows a question (highlighted) and its short bold answer;
// one click shows the details behind it. Styles: "Reveal cards" in styles.css.
// Pages call initRevealCards(root) after drawing, so each card fits the side showing.
// -------------------------------------------------------------------------
// `flip: true` turns the card over instead of fading (whatever the site-wide setting);
// `front` replaces the question / answer layout with your own front (e.g. a college name)
function revealCard({ question, answer, sub = "", tag = "", backTitle = "", back = "", id = "", flip = false, front = "" }) {
  return `
  <div class="reveal-card scroll-mt-24" ${id ? `id="${id}"` : ""} ${flip ? 'data-reveal="flip"' : ""}>
    <div class="reveal-inner">
      <button type="button" class="reveal-face reveal-front bg-white border border-slate-300" aria-expanded="false">
        <span class="reveal-body">
          ${front || `<span class="flex flex-wrap items-start justify-between gap-2"><span class="reveal-q">${question}</span>${tag}</span>
          <span class="reveal-answer">${answer}</span>
          ${sub ? `<span class="reveal-sub">${sub}</span>` : ""}`}
          <span class="reveal-more">${t('reveal_more')} <span class="flip-rtl inline-block" aria-hidden="true">&rarr;</span></span>
        </span>
      </button>
      <div class="reveal-face reveal-back bg-white border border-olive-200${!backTitle || backTitle === question ? " reveal-back-same" : ""}" role="region" aria-label="${escapeHtml(backTitle || question)}" inert>
        <div class="reveal-body text-sm text-slate-700">
          <div class="flex items-start justify-between gap-3 mb-2">
            <strong class="text-slate-900">${backTitle || question}</strong>
            <button type="button" class="reveal-close">${t('reveal_back')}</button>
          </div>
          ${back}
        </div>
      </div>
    </div>
  </div>`;
}

// Official documents a card's "Official source" link opens (`source` keys in the data files).
// The Ministry's own PDFs where it is the source; otherwise the body that publishes the rule.
const OFFICIAL = {
  mohe_guide: { url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485248.pdf", en: "Ministry: plan registration guide (PDF)", ar: "الوزارة: إرشادات التسجيل في خطة البعثات (PDF)" },
  mohe_majors: { url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485330.pdf", en: "Ministry: majors in the 2026/2027 plan (PDF)", ar: "الوزارة: تخصصات خطة 2026/2027 (PDF)" },
  mohe_merit_guide: { url: "https://www.mohe.edu.kw/site/assets/images/Uploads/20266149415.pdf", en: "Ministry: merit registration guide (PDF)", ar: "الوزارة: دليل التسجيل في برنامج التميز (PDF)" },
  mohe_allowances: { url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3", en: "Ministry: plan and allowance tables", ar: "الوزارة: الخطة وجداول المخصصات" },
  mohe_merit: { url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/6?PageID=3", en: "Ministry: merit programme and allowances", ar: "الوزارة: برنامج التميز ومخصصاته" },
  decree197: { url: "https://mesferlaw.com/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A-%D9%82%D8%B1%D8%A7%D8%B1-%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A/", en: "Decree 197/2025 (no official copy online; copy on mesferlaw.com)", ar: "القرار 197/2025 (لا توجد نسخة رسمية على الإنترنت؛ نسخة على mesferlaw.com)" },
  nbaq_search: { url: "https://nbaq.edu.kw/search/", en: "NBAQ: approved universities", ar: "الجهاز الوطني للاعتماد: الجامعات المعتمدة" },
  nbaq_merit: { url: "https://nbaq.edu.kw/website/merits", en: "NBAQ: merit university lists", ar: "الجهاز الوطني للاعتماد: قوائم جامعات التميز" },
  ku_dates: { url: "https://cem.ku.edu.kw/ar/at", en: "Kuwait University: Qudrat test dates", ar: "جامعة الكويت: مواعيد اختبارات القدرات" },
  ku_guide: { url: "https://www.ku.edu.kw/sites/default/files/2026-09/2026APTE.pdf", en: "Kuwait University: Qudrat student guide 2026 (PDF)", ar: "جامعة الكويت: دليل الطالب لاختبارات القدرات 2026 (PDF)" },
  ku_faq: { url: "https://cem.ku.edu.kw/faqs", en: "Kuwait University: Qudrat questions and answers", ar: "جامعة الكويت: أسئلة وأجوبة اختبارات القدرات" },
  ku_portal: { url: "https://portal.ku.edu.kw/placement", en: "Kuwait University: Qudrat registration portal", ar: "جامعة الكويت: بوابة التسجيل في القدرات" },
  ku_colleges: { url: "https://www.ku.edu.kw/sites/default/files/2026-06/ku_colleges_rules%20%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A.pdf", en: "Kuwait University: required tests by college (PDF)", ar: "جامعة الكويت: الاختبارات المطلوبة لكل كلية (PDF)" },
  ku_ielts: { url: "https://www.ku.edu.kw/sites/default/files/2025-06/english-ielts.pdf", en: "Kuwait University: IELTS conversion table (PDF)", ar: "جامعة الكويت: جدول معادلة IELTS (PDF)" },
  ku_prep: { url: "https://www.ku.edu.kw/ar/media-center/announcements/jamt-alkwyt-tln-n-qd-dwrat-altqwyt-lakhtbarat-alqdrat-alfrst-alawly", en: "Kuwait University: prep course announcement", ar: "جامعة الكويت: إعلان دورات التقوية" },
  ku_admission: { url: "https://www.ku.edu.kw/ar/media-center/news/jamt-alkwyt-tln-mwayd-tqdym-tlbat-alalthaq-llfsl-aldrasy-althany-2026-2027", en: "Kuwait University: admission announcement", ar: "جامعة الكويت: إعلان القبول" },
  aasu: { url: "https://aasu.edu.kw/pages/undergraduate-admissions", en: "AASU: undergraduate admissions", ar: "جامعة عبد الله السالم: القبول للبكالوريوس" },
  puc: { url: "https://www.puc.edu.kw", en: "Private Universities Council", ar: "مجلس الجامعات الخاصة" }
};

// "Official source: <document> ↗" under a card's main fact
function officialLink(key) {
  const o = OFFICIAL[key];
  if (!o) return "";
  return `<a href="${o.url}" target="_blank" rel="noopener noreferrer" class="reveal-source">${t('reveal_source')}: ${isArabic() ? o.ar : o.en} ${ICON_EXTERNAL}</a>`;
}

// The back of a card: one main fact, then the official link
function factBack(text, source) {
  return `<p class="reveal-fact">${withFlags(text)}</p>${officialLink(source)}`;
}

// Detail lines for the back of a card
function revealList(items) {
  return `<ul class="space-y-1.5">${items.map(i => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${withFlags(i)}</span></li>`).join("")}</ul>`;
}

let revealObserver = null;

function sizeRevealCard(card) {
  const open = card.classList.contains("is-open");
  const body = card.querySelector(open ? ".reveal-back .reveal-body" : ".reveal-front .reveal-body");
  const inner = card.querySelector(".reveal-inner");
  if (body && inner) inner.style.height = `${body.offsetHeight + 2}px`; // + the face's top and bottom border
}

function setRevealOpen(card, open) {
  if (!card) return;
  const front = card.querySelector(".reveal-front");
  const back = card.querySelector(".reveal-back");
  card.classList.toggle("is-open", open);
  front.setAttribute("aria-expanded", String(open));
  front.inert = open;
  back.inert = !open;
  sizeRevealCard(card);
  (open ? back.querySelector(".reveal-close") : front).focus({ preventScroll: true });
}

function initRevealCards(root = document) {
  if (!revealObserver) {
    revealObserver = new ResizeObserver(entries => entries.forEach(e => {
      const card = e.target.closest(".reveal-card");
      if (card) sizeRevealCard(card);
    }));
    document.addEventListener("click", e => {
      const front = e.target.closest(".reveal-front");
      if (front) return setRevealOpen(front.closest(".reveal-card"), true);
      const close = e.target.closest(".reveal-close");
      if (close) setRevealOpen(close.closest(".reveal-card"), false);
    });
    // Capture phase, so Escape closes the card before it closes a pop-up around it
    window.addEventListener("keydown", e => {
      const card = e.key === "Escape" && e.target.closest?.(".reveal-card.is-open");
      if (!card) return;
      e.stopPropagation();
      setRevealOpen(card, false);
    }, true);
  }
  root.querySelectorAll(".reveal-card").forEach(card => {
    card.querySelectorAll(".reveal-body").forEach(b => revealObserver.observe(b));
    sizeRevealCard(card);
  });
}

// =========================================================================
// 2. Exchange rates (live with offline fallback)
// =========================================================================
// Rates are always "units of currency per 1 KWD", matching CBK and open.er-api.com.
const FX_CACHE_KEY = "moustaqbili_fx_v1";
const FX_CACHE_HOURS = 12;

const FX = {
  rates: { ...(window.MOUSTAQBILI_FX_FALLBACK?.rates || { KWD: 1 }) },
  updated: window.MOUSTAQBILI_FX_FALLBACK?.date || null,
  live: false
};

function applyRates(rates, updated, live) {
  const wanted = Object.keys(window.MOUSTAQBILI_CURRENCIES || {});
  for (const code of wanted) {
    if (typeof rates[code] === "number" && rates[code] > 0) FX.rates[code] = rates[code];
  }
  FX.rates.KWD = 1;
  FX.updated = updated;
  FX.live = live;
  window.dispatchEvent(new CustomEvent("fxUpdated"));
}

async function loadLiveRates() {
  try {
    const cached = JSON.parse(localStorage.getItem(FX_CACHE_KEY) || "null");
    if (cached && Date.now() - cached.fetchedAt < FX_CACHE_HOURS * 3600 * 1000) {
      applyRates(cached.rates, cached.updated, true);
      return;
    }
  } catch (e) { /* storage unavailable: fall through to network */ }

  try {
    const res = await fetch("https://open.er-api.com/v6/latest/KWD");
    if (!res.ok) return;
    const data = await res.json();
    if (data.result !== "success" || !data.rates) return;
    const updated = new Date(data.time_last_update_unix * 1000).toISOString().slice(0, 10);
    applyRates(data.rates, updated, true);
    try {
      localStorage.setItem(FX_CACHE_KEY, JSON.stringify({ rates: data.rates, updated, fetchedAt: Date.now() }));
    } catch (e) { /* ignore */ }
  } catch (e) {
    // Offline or blocked: the fallback table from data.js stays in use
  }
}

/**
 * Convert `amount` from one currency to another.
 * `rates` maps currency code -> units per 1 KWD (so rates.KWD === 1, rates.USD ≈ 3.2).
 * Return a Number, or null when the conversion is impossible.
 */
function convertAmount(amount, from, to, rates) {
  if (typeof amount !== "number" || !Number.isFinite(amount)) return null;
  const fromRate = rates[from];
  const toRate = rates[to];
  if (!(fromRate > 0) || !(toRate > 0)) return null;
  // Pivot through KWD: amount / fromRate is the value in KWD
  return (amount / fromRate) * toRate;
}

function currencyLabel(code) {
  const c = window.MOUSTAQBILI_CURRENCIES?.[code];
  if (!c) return code;
  return `${code} - ${isArabic() ? c.nameAr : c.nameEn}`;
}

function money(amount, code) {
  if (typeof amount !== "number" || Number.isNaN(amount)) return "—";
  return `${formatNumber(amount, amount >= 100 ? 0 : 2)} ${code}`;
}

function fxNote() {
  const date = FX.updated ? formatDate(FX.updated) : "";
  return FX.live
    ? `${t('fx_live_note')} ${date} · <a class="underline" href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">Rates By Exchange Rate API</a>`
    : `${t('fx_fallback_note')} ${date}`;
}

// =========================================================================
// 3. GPA to percentage converter
// =========================================================================
function initGpaCalculator() {
  const gpaInput = document.getElementById("gpa-calc-input");
  const calcBtn = document.getElementById("gpa-calc-btn");
  const resultBox = document.getElementById("gpa-calc-result");
  const percentDisplay = document.getElementById("gpa-calc-percentage");
  const tierDisplay = document.getElementById("gpa-calc-tier");
  const applyBtn = document.getElementById("gpa-apply-btn");
  if (!gpaInput) return;

  let lastPercentage = null;

  function calculate() {
    const gpa = parseFloat(gpaInput.value);
    if (isNaN(gpa) || gpa < 1.0 || gpa > 4.0) {
      resultBox?.classList.add("hidden");
      lastPercentage = null;
      return;
    }

    let percentage;
    if (gpa >= 3.90) percentage = 98.0 + ((gpa - 3.90) / 0.10) * 2.0;
    else if (gpa >= 3.70) percentage = 93.0 + ((gpa - 3.70) / 0.20) * 4.9;
    else if (gpa >= 3.50) percentage = 88.0 + ((gpa - 3.50) / 0.20) * 4.9;
    else if (gpa >= 3.20) percentage = 82.0 + ((gpa - 3.20) / 0.30) * 5.9;
    else if (gpa >= 3.00) percentage = 77.0 + ((gpa - 3.00) / 0.20) * 4.9;
    else if (gpa >= 2.80) percentage = 72.0 + ((gpa - 2.80) / 0.20) * 4.9;
    else if (gpa >= 2.50) percentage = 67.0 + ((gpa - 2.50) / 0.30) * 4.9;
    else percentage = 60.0 + ((gpa - 2.0) / 0.50) * 6.9;
    percentage = Math.min(100.0, Math.max(60.0, percentage));
    lastPercentage = percentage;

    let tierKey = "gpa_tier_6";
    if (percentage >= 97.0) tierKey = "gpa_tier_1";
    else if (percentage >= 95.0) tierKey = "gpa_tier_2";
    else if (percentage >= 90.0) tierKey = "gpa_tier_3";
    else if (percentage >= 85.0) tierKey = "gpa_tier_4";
    else if (percentage >= 80.0) tierKey = "gpa_tier_5";

    if (percentDisplay) percentDisplay.textContent = `${percentage.toFixed(2)}%`;
    if (tierDisplay) tierDisplay.textContent = t(tierKey);
    resultBox?.classList.remove("hidden");
  }

  applyBtn?.addEventListener("click", () => {
    const select = document.getElementById("select-percentage");
    if (!select || lastPercentage === null) return;
    const ranges = getFilterConfig().percentageRanges;
    const match = ranges.find(r => lastPercentage >= r.minPct) || ranges[ranges.length - 1];
    select.value = match.value;
    select.dispatchEvent(new Event("change"));
    select.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  gpaInput.addEventListener("input", calculate);
  calcBtn?.addEventListener("click", calculate);
  window.addEventListener("languageChanged", () => { if (lastPercentage !== null) calculate(); });
}

// =========================================================================
// 4. Landing search
// =========================================================================
function getFilterConfig() {
  return window.MOUSTAQBILI_FILTERS || { countries: [], percentageRanges: [], majors: [] };
}

function populateLandingSelects() {
  const filters = getFilterConfig();
  const ar = isArabic();
  const fill = (select, items, toOption) => {
    if (!select) return;
    const keep = select.value;
    while (select.options.length > 1) select.remove(1);
    select.querySelectorAll("optgroup").forEach(g => g.remove());
    items.forEach(item => select.appendChild(toOption(item)));
    select.value = keep;
  };
  const opt = (value, label) => { const o = document.createElement("option"); o.value = value; o.textContent = label; return o; };
  const group = (label, options) => {
    const g = document.createElement("optgroup");
    g.label = label;
    options.forEach(o => g.appendChild(o));
    return g;
  };

  // Countries and majors under bold letter headings (A, B, C... / أ، ب، ت...)
  fill(document.getElementById("select-country"),
    groupByLetter(filters.countries, c => ar ? c.labelAr : c.label, ar),
    ([letter, items]) => group(letter, items.map(c => opt(c.value, ar ? c.labelAr : c.label))));

  fill(document.getElementById("select-percentage"), filters.percentageRanges, p => opt(p.value, p.label));

  // Levels: two bold groups; levels the plan doesn't offer are shown but can't be picked
  const levels = filters.levels || [];
  fill(document.getElementById("select-level"), [true, false], offered => {
    const items = levels.filter(l => !!l.offered === offered).map(l => {
      const o = opt(l.value, ar ? l.labelAr : l.label);
      o.disabled = !offered;
      return o;
    });
    return group(t(offered ? 'level_group_offered' : 'level_group_not_offered'), items);
  });

  // Every major in the 2026/2027 plan
  const majorSelect = document.getElementById("select-major");
  if (majorSelect && window.PLAN_MAJORS) {
    fill(majorSelect,
      groupByLetter(window.PLAN_MAJORS, m => ar ? m.ar : m.en, ar),
      ([letter, items]) => group(letter, items.map(m => opt(m.id, ar ? m.ar : m.en))));
  }
}

// Home page tour video ("Start here"). It sits in the page with preload="none", so nothing
// downloads until the student presses play. The source follows the page language.
function initSearchGuideVideo() {
  const video = document.getElementById("guide-video");
  if (!video) return;
  const load = () => {
    const src = `assets/video/search-guide-${isArabic() ? "ar" : "en"}.mp4`;
    video.setAttribute("aria-label", t('guide_video_title'));
    if (video.getAttribute("src") === src) return;
    video.poster = src.replace(".mp4", ".jpg");
    video.src = src;
  };
  load();
  window.addEventListener("languageChanged", load);
}

// Heading letter for a dropdown item. Arabic names mostly start with "ال", so it is skipped
// ("الطب" goes under ط), and أ / إ / آ count as ا.
function letterKey(name, ar) {
  let s = String(name || "").trim();
  if (ar) s = s.replace(/^ال/, "").replace(/^[أإآ]/, "ا");
  return s.charAt(0).toLocaleUpperCase(ar ? "ar" : "en");
}

// [[letter, items sorted by name], ...] in alphabetical order
function groupByLetter(items, nameOf, ar) {
  const locale = ar ? "ar" : "en";
  const sortName = item => ar ? nameOf(item).replace(/^ال/, "") : nameOf(item);
  const groups = new Map();
  [...items]
    .sort((a, b) => sortName(a).localeCompare(sortName(b), locale))
    .forEach(item => {
      const key = letterKey(nameOf(item), ar);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0], locale));
}

function planMajorById(id) {
  return (window.PLAN_MAJORS || []).find(m => m.id === id);
}

function initLandingSearch() {
  const form = document.getElementById("mohe-search-form");
  if (!form) return;

  const countrySelect = document.getElementById("select-country");
  const percentageSelect = document.getElementById("select-percentage");
  const levelSelect = document.getElementById("select-level");
  const majorSelect = document.getElementById("select-major");
  const meritCheckbox = document.getElementById("checkbox-merit-only");
  const validationAlert = document.getElementById("validation-alert");

  populateLandingSelects();
  window.addEventListener("languageChanged", populateLandingSelects);

  const bubbles = [
    { select: countrySelect, card: document.getElementById("bubble-country-card"), badge: document.getElementById("badge-country") },
    { select: percentageSelect, card: document.getElementById("bubble-percentage-card"), badge: document.getElementById("badge-percentage") },
    { select: levelSelect, card: document.getElementById("bubble-level-card"), badge: document.getElementById("badge-level") },
    { select: majorSelect, card: document.getElementById("bubble-major-card"), badge: document.getElementById("badge-major") }
  ];

  const anySelected = () => countrySelect?.value || percentageSelect?.value || levelSelect?.value || majorSelect?.value || meritCheckbox?.checked;

  bubbles.forEach(b => {
    b.select?.addEventListener("change", () => {
      b.card?.classList.toggle("has-value", !!b.select.value);
      if (b.badge) {
        b.badge.innerHTML = b.select.value
          ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`
          : b.badge.getAttribute("data-num");
      }
      if (anySelected()) validationAlert?.classList.add("hidden");
    });
  });

  const meritCard = document.getElementById("merit-option-card");
  meritCheckbox?.addEventListener("change", () => {
    meritCard?.classList.toggle("border-amber-500", meritCheckbox.checked);
    meritCard?.classList.toggle("bg-amber-50", meritCheckbox.checked);
    if (meritCheckbox.checked) validationAlert?.classList.add("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!anySelected()) {
      validationAlert?.classList.remove("hidden");
      validationAlert?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const params = new URLSearchParams();
    if (countrySelect?.value) params.set("country", countrySelect.value);
    if (percentageSelect?.value) params.set("percentage", percentageSelect.value);
    if (levelSelect?.value) params.set("level", levelSelect.value);
    if (majorSelect?.value) params.set("major", majorSelect.value);
    if (meritCheckbox?.checked) params.set("merit", "1");
    window.location.href = `results.html?${params.toString()}`;
  });
}

// =========================================================================
// 5. Results page: decluttered program cards
// =========================================================================
/**
 * Merge an Arabic overlay (from data-ar.js) onto a base English program object.
 * Anything missing from the overlay falls back to the English base value.
 * Must not mutate `base` - filtering still reads the original English data.
 */
function mergeTranslation(base, overlay) {
  if (overlay === undefined) return base;
  if (Array.isArray(base) && Array.isArray(overlay)) {
    return base.map((item, i) => mergeTranslation(item, overlay[i]));
  }
  if (base && typeof base === 'object' && overlay && typeof overlay === 'object') {
    const merged = { ...base };
    for (const key of Object.keys(overlay)) merged[key] = mergeTranslation(base[key], overlay[key]);
    return merged;
  }
  return overlay;
}

function localizeProgram(prog) {
  if (!isArabic()) return prog;
  const overlay = window.MOUSTAQBILI_PROGRAMS_AR?.[prog.id];
  return overlay ? mergeTranslation(prog, overlay) : prog;
}

// Card shows a shortened value: English strings are cut at a field-specific marker,
// Arabic strings in data-ar.js are written so the short form comes before "("
function shortText(str, enMarker = '(') {
  if (!str) return "";
  return (isArabic() ? str.split('(')[0] : str.split(enMarker)[0]).trim();
}

// Monthly allowance range in KWD across a program's stipend variants (e.g. London / outside London)
function stipendKwdRange(prog, tier) {
  const s = prog.stipend;
  if (!s) return null;
  const values = s.variants
    .filter(v => typeof v[tier] === "number")
    .map(v => convertAmount(v[tier], s.currency, "KWD", FX.rates))
    .filter(v => typeof v === "number" && !Number.isNaN(v));
  if (values.length === 0) return null;
  const min = Math.min(...values), max = Math.max(...values);
  return min === max ? `${formatNumber(min)} KWD` : `${formatNumber(min)} - ${formatNumber(max)} KWD`;
}

function stipendHostRange(prog, tier) {
  const s = prog.stipend;
  if (!s) return "";
  const values = s.variants.map(v => v[tier]).filter(v => typeof v === "number");
  if (values.length === 0) return "";
  const min = Math.min(...values), max = Math.max(...values);
  return min === max ? `${formatNumber(min)} ${s.currency}` : `${formatNumber(min)} - ${formatNumber(max)} ${s.currency}`;
}

// "All majors in the 2026/2027 plan" on the results page (plan-majors-data.js).
// Uses the same filters as the program cards; returns how many majors are shown.
function renderPlanMajors(f) {
  const section = document.getElementById("plan-majors-section");
  const box = document.getElementById("plan-majors");
  const countEl = document.getElementById("plan-majors-count");
  if (!section || !box || !window.PLAN_MAJORS) return 0;
  const ar = isArabic();

  // Merit status depends on the university, not the major, so the list cannot be filtered by it
  if (f.isMeritOnly) {
    box.innerHTML = `<p class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">${t('plan_majors_merit_note')}</p>`;
    if (countEl) countEl.textContent = "";
    return 0;
  }

  // The plan doesn't say which majors start with a foundation year, so that level hides the list
  const level = f.selectedLevel ? (getFilterConfig().levels || []).find(l => l.value === f.selectedLevel) : null;
  if (level && level.value === "foundation") {
    box.innerHTML = `<p class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">${t('plan_majors_foundation_note')}</p>`;
    if (countEl) countEl.textContent = "";
    return 0;
  }

  const range = f.selectedPercentage ? getFilterConfig().percentageRanges.find(r => r.value === f.selectedPercentage) : null;
  const query = (f.keywordQuery || "").toLowerCase();
  const countryName = c => ar ? (window.PLAN_COUNTRIES[c] || c) : c;

  const shown = window.PLAN_MAJORS.map(m => {
    if (f.selectedMajor && m.id !== f.selectedMajor) return null;
    if (level?.planMajors && !level.planMajors.includes(m.id)) return null;
    const countries = Object.entries(m.minPct).filter(([c, pct]) =>
      (!f.selectedCountry || c === f.selectedCountry) && (!range || pct <= range.maxPct));
    if (!countries.length) return null;
    if (query) {
      const disc = window.PLAN_DISCIPLINES.find(d => d.id === m.discipline);
      const text = `${m.en} ${m.ar} ${disc?.en} ${disc?.ar} ${countries.map(([c]) => `${c} ${window.PLAN_COUNTRIES[c]}`).join(" ")}`.toLowerCase();
      if (!text.includes(query)) return null;
    }
    return { m, countries };
  }).filter(Boolean);

  if (countEl) countEl.textContent = (shown.length === 1 ? t('plan_majors_count_one') : t('plan_majors_count').replace("{n}", shown.length));
  const anyFilter = !!(f.selectedMajor || f.selectedCountry || f.selectedPercentage || f.selectedLevel || query);

  box.innerHTML = window.PLAN_DISCIPLINES.map(d => {
    const rows = shown.filter(s => s.m.discipline === d.id)
      .sort((a, b) => (ar ? a.m.ar : a.m.en).localeCompare(ar ? b.m.ar : b.m.en, ar ? "ar" : "en"));
    if (!rows.length) return "";
    return `
      <details class="plan-group" ${anyFilter ? "open" : ""}>
        <summary>
          <span class="font-bold text-slate-900">${ar ? d.ar : d.en}</span>
          <span class="text-sm text-slate-500">${(rows.length === 1 ? t('plan_majors_count_one') : t('plan_majors_count').replace("{n}", rows.length))}</span>
        </summary>
        <div class="mt-3 space-y-2">
          ${rows.map(({ m, countries }) => `
            <div class="p-4 rounded-xl bg-white border border-slate-200">
              <div class="flex flex-wrap items-baseline justify-between gap-2">
                <h4 class="text-base font-bold text-slate-900">${ar ? m.ar : m.en}</h4>
                <span class="text-xs text-slate-500">${t(m.stream === "both" ? 'plan_stream_both' : 'plan_stream_science')}</span>
              </div>
              <div class="mt-2 flex flex-wrap items-center gap-1.5">
                ${countries.map(([c, pct]) => `
                  <span class="major-pill">
                    <span class="major-pill-name">${countryName(c)}</span>
                    <span class="major-pill-grade" dir="ltr">${pct}%</span>
                  </span>${m.unconfirmed.includes(c) ? flag('unconfirmed') : ''}`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </details>`;
  }).join("");

  return shown.length;
}

let rerenderResults = null;
let openModal = null; // { kind: 'requirements' | 'salary', prog }

function initResultsPage() {
  const container = document.getElementById("results-container");
  const emptyState = document.getElementById("empty-state");
  const countBadge = document.getElementById("results-count-badge");
  const activeFiltersContainer = document.getElementById("active-filters-chips");
  const keywordInput = document.getElementById("keyword-filter");
  const meritToggleBtn = document.getElementById("quick-merit-toggle");

  const urlParams = new URLSearchParams(window.location.search);
  let selectedCountry = urlParams.get("country") || "";
  let selectedPercentage = urlParams.get("percentage") || "";
  let selectedMajor = urlParams.get("major") || "";
  let selectedLevel = urlParams.get("level") || "";
  let isMeritOnly = urlParams.get("merit") === "1";
  let keywordQuery = "";
  // "pathway" (step by step, the default) or "cards" (every detailed program at once)
  let view = urlParams.get("view") === "cards" ? "cards" : "pathway";
  let step = parseInt(urlParams.get("step"), 10) || 0; // 0 = let the pathway choose

  function updateMeritToggleBtnUI() {
    if (!meritToggleBtn) return;
    meritToggleBtn.classList.toggle("bg-amber-500", isMeritOnly);
    meritToggleBtn.classList.toggle("border-amber-600", isMeritOnly);
    meritToggleBtn.classList.toggle("bg-white", !isMeritOnly);
    meritToggleBtn.setAttribute("aria-pressed", String(isMeritOnly));
    meritToggleBtn.querySelector("span").textContent = isMeritOnly ? t('merit_toggle_on') : t('merit_toggle_off');
  }

  meritToggleBtn?.addEventListener("click", () => {
    isMeritOnly = !isMeritOnly;
    step = 0;
    updateUrlParams();
    renderResults();
  });

  function labelFor(list, value, enKey = "label", arKey = "labelAr") {
    const item = list.find(i => i.value === value);
    if (!item) return value;
    return isArabic() ? (item[arKey] || item[enKey]) : item[enKey];
  }

  function renderFilterChips() {
    if (!activeFiltersContainer) return;
    activeFiltersContainer.innerHTML = "";
    const f = getFilterConfig();

    const chips = [];
    if (selectedCountry) chips.push({ type: "country", label: `${t('chip_country')}: ${labelFor(f.countries, selectedCountry)}` });
    if (selectedPercentage) chips.push({ type: "percentage", label: `${t('chip_percentage')}: ${labelFor(f.percentageRanges, selectedPercentage, "label", "label")}` });
    if (selectedLevel) chips.push({ type: "level", label: `${t('chip_level')}: ${labelFor(f.levels || [], selectedLevel)}` });
    if (selectedMajor) {
      const m = planMajorById(selectedMajor);
      chips.push({ type: "major", label: `${t('chip_major')}: ${m ? (isArabic() ? m.ar : m.en) : selectedMajor}` });
    }
    if (isMeritOnly) chips.push({ type: "merit", label: t('chip_merit') });

    if (chips.length === 0) {
      activeFiltersContainer.innerHTML = `<span class="text-xs text-slate-500">${t('chips_none')}</span>`;
      return;
    }

    chips.forEach(chip => {
      const chipEl = document.createElement("div");
      chipEl.className = `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md border ${chip.type === 'merit' ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-slate-100 text-slate-800 border-slate-300'}`;
      chipEl.innerHTML = `<span></span><button type="button" class="text-slate-500 hover:text-red-700 font-bold" aria-label="${t('chip_remove')}">&times;</button>`;
      // Labels can echo raw URL values (?country=...), so they go in as text, never as HTML
      chipEl.querySelector("span").textContent = chip.label;
      chipEl.querySelector("button").addEventListener("click", () => {
        if (chip.type === "country") selectedCountry = "";
        if (chip.type === "percentage") selectedPercentage = "";
        if (chip.type === "level") selectedLevel = "";
        if (chip.type === "major") selectedMajor = "";
        if (chip.type === "merit") isMeritOnly = false;
        step = 0;
        updateUrlParams();
        renderResults();
      });
      activeFiltersContainer.appendChild(chipEl);
    });

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "text-xs font-semibold text-red-700 hover:text-red-900 underline";
    clearBtn.textContent = t('btn_reset_criteria');
    clearBtn.addEventListener("click", () => {
      selectedCountry = selectedPercentage = selectedLevel = selectedMajor = "";
      isMeritOnly = false;
      step = 0;
      updateUrlParams();
      renderResults();
    });
    activeFiltersContainer.appendChild(clearBtn);
  }

  function updateUrlParams() {
    const params = new URLSearchParams();
    if (selectedCountry) params.set("country", selectedCountry);
    if (selectedPercentage) params.set("percentage", selectedPercentage);
    if (selectedLevel) params.set("level", selectedLevel);
    if (selectedMajor) params.set("major", selectedMajor);
    if (isMeritOnly) params.set("merit", "1");
    if (view === "cards") params.set("view", "cards");
    else if (step) params.set("step", String(step));
    window.history.replaceState(null, "", window.location.pathname + (params.toString() ? `?${params}` : ""));
  }

  function matches(prog) {
    if (isMeritOnly && !prog.isMerit) return false;
    if (selectedCountry && prog.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;

    if (selectedPercentage) {
      const range = getFilterConfig().percentageRanges.find(r => r.value === selectedPercentage);
      const reqMin = parseFloat(prog.schoolGradSplit?.publicSchool?.minScore) || 0;
      if (range && reqMin > range.maxPct) return false;
    }

    if (selectedLevel && !(prog.levels || []).includes(selectedLevel)) return false;

    // Majors are plan ids (plan-majors-data.js); each detailed program lists the ids it covers
    if (selectedMajor && !(prog.planMajors || []).includes(selectedMajor)) return false;

    if (keywordQuery) {
      const text = `${prog.title} ${prog.titleAr} ${prog.country} ${prog.countryAr} ${prog.category} ${prog.majors.join(" ")} ${prog.accreditedUniversities.join(" ")}`.toLowerCase();
      if (!text.includes(keywordQuery.toLowerCase())) return false;
    }
    return true;
  }

  function renderResults() {
    renderFilterChips();
    updateMeritToggleBtnUI();

    document.getElementById("pathway-view")?.classList.toggle("hidden", view !== "pathway");
    document.getElementById("cards-view")?.classList.toggle("hidden", view !== "cards");
    document.querySelectorAll("[data-view]").forEach(b => {
      b.classList.toggle("is-active", b.dataset.view === view);
      b.setAttribute("aria-pressed", String(b.dataset.view === view));
    });

    if (view === "pathway") {
      const go = () => { updateUrlParams(); renderResults(); document.getElementById("pathway-view")?.scrollIntoView({ block: "start", behavior: "smooth" }); };
      const shown = renderPathway({
        f: { selectedCountry, selectedPercentage, selectedLevel, selectedMajor, isMeritOnly, keywordQuery },
        step,
        setMajor: id => { selectedMajor = id; step = 0; go(); },
        setCountry: c => { selectedCountry = c; step = 3; go(); },
        setStep: n => { step = n; go(); },
        clearCountryFilter: () => { selectedCountry = ""; step = 1; go(); },
        restart: () => { selectedMajor = selectedCountry = ""; step = 0; go(); }
      });
      if (countBadge) countBadge.textContent = shown === 1 ? t('plan_majors_count_one') : t('plan_majors_count').replace("{n}", shown);
      emptyState?.classList.toggle("hidden", shown > 0 || !!selectedMajor);
      return;
    }

    const filtered = (window.MOUSTAQBILI_PROGRAMS || []).filter(matches);
    if (countBadge) countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? t('results_count_one') : t('results_count_many')}`;
    const planShown = renderPlanMajors({ selectedCountry, selectedPercentage, selectedLevel, selectedMajor, isMeritOnly, keywordQuery });
    if (!container) return;
    container.innerHTML = "";
    document.getElementById("detailed-heading")?.classList.toggle("hidden", filtered.length === 0);
    emptyState?.classList.toggle("hidden", filtered.length > 0 || planShown > 0);

    const isAr = isArabic();
    filtered.forEach(baseProg => {
      const prog = localizeProgram(baseProg);
      const standardKwd = stipendKwdRange(baseProg, "standard");
      const meritKwd = baseProg.isMerit ? stipendKwdRange(baseProg, "merit") : null;

      const card = document.createElement("article");
      card.className = `gov-program-card rounded-xl p-5 flex flex-col justify-between border ${prog.isMerit ? 'merit-card-accent' : ''}`;
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">${isAr ? prog.countryAr : prog.country}</span>
            ${prog.isMerit ? `<span class="px-2.5 py-1 rounded text-xs font-bold merit-tag">${t('card_merit_badge')}</span>` : ''}
          </div>

          <h3 class="text-base font-extrabold text-slate-900 leading-snug">${isAr ? prog.titleAr : prog.title}</h3>
          <p class="text-xs text-slate-500 mt-1 mb-4">${t('card_min_grade')}: <strong class="text-slate-800">${shortText(prog.schoolGradSplit.publicSchool.minScore).replace(/\s*(Minimum|كحد أدنى)$/, '')}</strong> &middot; ${shortText(prog.schoolGradSplit.publicSchool.stream)}</p>

          <div class="salary-badge rounded-lg p-3 mb-4">
            <span class="text-xs font-bold block text-emerald-900">${t('card_stipend_label')}</span>
            <span class="text-lg font-black text-emerald-950 block">${standardKwd ?? '—'}</span>
            <span class="text-xs font-semibold text-emerald-800 block">${stipendHostRange(baseProg, "standard")}</span>
            ${meritKwd ? `<span class="text-xs font-bold text-amber-800 block mt-1">${t('card_merit_amount')}: ${meritKwd}</span>` : ''}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
          <button type="button" class="btn-open-requirements px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold text-xs transition">${t('btn_card_requirements')}</button>
          <button type="button" class="btn-open-salary px-3 py-2.5 rounded-lg bg-olive-900 hover:bg-olive-800 text-white font-bold text-xs transition">${t('btn_card_salary')}</button>
        </div>
      `;

      card.querySelector(".btn-open-requirements").addEventListener("click", () => openRequirementsModal(baseProg));
      card.querySelector(".btn-open-salary").addEventListener("click", () => openSalaryModal(baseProg));
      container.appendChild(card);
    });
  }

  keywordInput?.addEventListener("input", (e) => {
    keywordQuery = e.target.value.trim();
    if (view === "pathway" && keywordQuery) step = 1; // searching means looking for a major
    renderResults();
  });

  document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => {
    view = b.dataset.view;
    updateUrlParams();
    renderResults();
  }));

  renderResults();
  initFeedbackWidget();
  initModalShell();
  rerenderResults = renderResults;
  window.addEventListener("fxUpdated", () => {
    renderResults();
    if (openModal?.kind === "salary") openSalaryModal(openModal.prog, true);
  });
}

// =========================================================================
// 5b. Results page: step-by-step pathway
//     1 major -> 2 country -> 3 requirements -> 4 money & universities
// =========================================================================
// The pathway's major and country are the page's major and country filters, so the
// filter chips, the URL and the home-page search all stay in step with it.
// Step 1 lists majors (respecting the country filter); step 2 lists every country
// for the chosen major, so the country can be changed there.

function detailedProgramFor(majorId, country) {
  return (window.MOUSTAQBILI_PROGRAMS || []).find(p => (p.planMajors || []).includes(majorId) && p.country === country) || null;
}

function countryAllowance(country) {
  return (window.MORE_INFO?.allowances || []).find(a => a.countryEn === country) || null;
}

// Plan rule 3: Qudrat for medicine, dentistry, veterinary, pharmacy and engineering
function qudratNeeded(m) {
  return ["medicine", "dentistry", "veterinary-medicine"].includes(m.id) || m.id.includes("pharm") || m.discipline === "engineering";
}

// Majors on offer after the page filters (grade, level, merit, keyword; country only when asked).
// Returns [{ m, countries: [[country, pct], ...] }].
function pathwayOptions(f, useCountry) {
  const cfg = getFilterConfig();
  const range = f.selectedPercentage ? cfg.percentageRanges.find(r => r.value === f.selectedPercentage) : null;
  const level = f.selectedLevel ? (cfg.levels || []).find(l => l.value === f.selectedLevel) : null;
  const okCountry = c => !useCountry || !f.selectedCountry || c === f.selectedCountry;
  const okPct = pct => !range || pct <= range.maxPct;
  const byId = new Map();
  const add = (m, c, pct) => {
    if (!okCountry(c) || !okPct(pct)) return;
    if (!byId.has(m.id)) byId.set(m.id, { m, countries: [] });
    const entry = byId.get(m.id);
    if (!entry.countries.some(([x]) => x === c)) entry.countries.push([c, pct]);
  };

  if (f.isMeritOnly || f.selectedLevel === "foundation") {
    // Merit status and the foundation year are only known for the detailed programs
    (window.MOUSTAQBILI_PROGRAMS || []).forEach(p => {
      if (f.isMeritOnly && !p.isMerit) return;
      if (f.selectedLevel && !(p.levels || []).includes(f.selectedLevel)) return;
      (p.planMajors || []).forEach(id => {
        const m = planMajorById(id);
        if (m) add(m, p.country, m.minPct[p.country] ?? (parseFloat(p.schoolGradSplit?.publicSchool?.minScore) || 0));
      });
    });
  } else {
    (window.PLAN_MAJORS || []).forEach(m => {
      if (level?.planMajors && !level.planMajors.includes(m.id)) return;
      Object.entries(m.minPct).forEach(([c, pct]) => add(m, c, pct));
    });
  }

  const query = (f.keywordQuery || "").toLowerCase();
  return [...byId.values()].filter(({ m, countries }) => {
    if (!query) return true;
    const disc = window.PLAN_DISCIPLINES.find(d => d.id === m.discipline);
    const text = `${m.en} ${m.ar} ${disc?.en} ${disc?.ar} ${countries.map(([c]) => `${c} ${window.PLAN_COUNTRIES[c]}`).join(" ")}`.toLowerCase();
    return text.includes(query);
  });
}

function pathwayStepper(step, major, country) {
  const ar = isArabic();
  const items = [
    { n: 1, label: t('pw_step1'), value: major ? (ar ? major.ar : major.en) : "" },
    { n: 2, label: t('pw_step2'), value: country ? (ar ? (window.PLAN_COUNTRIES[country] || country) : country) : "" },
    { n: 3, label: t('pw_step3'), value: "" },
    { n: 4, label: t('pw_step4'), value: "" }
  ];
  const reachable = n => n === 1 || (n === 2 && major) || (n >= 3 && major && country);
  return items.map(i => {
    const state = i.n === step ? "is-current" : (i.n < step ? "is-done" : "");
    return `
      <li>
        <button type="button" class="pw-step ${state}" data-step="${i.n}" ${reachable(i.n) ? "" : "disabled"} ${i.n === step ? 'aria-current="step"' : ""}>
          <span class="pw-step-num">${i.n}</span>
          <span class="min-w-0">
            <span class="pw-step-label">${i.label}</span>
            ${i.value ? `<span class="pw-step-value">${i.value}</span>` : ""}
          </span>
        </button>
      </li>`;
  }).join("");
}

function pathwayNav(backStep, backLabel, nextStep, nextLabel) {
  return `
    <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
      ${backStep ? `<button type="button" class="pw-go px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm font-bold text-slate-700" data-step="${backStep}"><span class="flip-rtl inline-block">&larr;</span> ${backLabel}</button>` : "<span></span>"}
      ${nextStep ? `<button type="button" class="pw-go px-4 py-2 rounded-lg bg-olive-900 hover:bg-olive-800 text-white text-sm font-bold" data-step="${nextStep}">${nextLabel} <span class="flip-rtl inline-block">&rarr;</span></button>` : ""}
    </div>`;
}

// Step 1: majors grouped by field
function pathwayMajorsHtml(options, f, major) {
  const ar = isArabic();
  const name = c => ar ? (window.PLAN_COUNTRIES[c] || c) : c;
  const openAll = !!(f.keywordQuery || f.selectedCountry || f.selectedPercentage || f.selectedLevel || f.isMeritOnly) || options.length <= 12;
  const groups = window.PLAN_DISCIPLINES.map(d => {
    const rows = options.filter(o => o.m.discipline === d.id)
      .sort((a, b) => (ar ? a.m.ar : a.m.en).localeCompare(ar ? b.m.ar : b.m.en, ar ? "ar" : "en"));
    if (!rows.length) return "";
    const hasSelected = major && rows.some(r => r.m.id === major.id);
    return `
      <details class="plan-group" ${openAll || hasSelected ? "open" : ""}>
        <summary>
          <span class="font-bold text-slate-900">${ar ? d.ar : d.en}</span>
          <span class="text-sm text-slate-500">${rows.length === 1 ? t('plan_majors_count_one') : t('plan_majors_count').replace("{n}", rows.length)}</span>
        </summary>
        <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          ${rows.map(({ m, countries }) => {
            const low = Math.min(...countries.map(([, p]) => p));
            const detailed = countries.some(([c]) => detailedProgramFor(m.id, c));
            return `
            <button type="button" class="pw-option ${major?.id === m.id ? "is-selected" : ""}" data-major="${m.id}">
              <span class="pw-option-title">${ar ? m.ar : m.en}</span>
              <span class="pw-option-meta">${countries.length === 1 ? t('pw_countries_one') : t('pw_countries_n').replace("{n}", countries.length)} &middot; ${t('pw_from').replace("{pct}", low)}</span>
              ${detailed ? `<span class="pw-badge">${t('pw_full_details')}</span>` : ""}
            </button>`;
          }).join("")}
        </div>
      </details>`;
  }).join("");

  const countryNote = f.selectedCountry
    ? `<p class="text-sm text-slate-600 mb-3">${t('pw_only_country').replace("{country}", `<strong>${escapeHtml(name(f.selectedCountry))}</strong>`)} <button type="button" class="pw-all-countries font-semibold text-olive-900 underline">${t('pw_show_all_countries')}</button></p>`
    : "";
  return `
    <h2 class="text-lg font-extrabold text-slate-900">${t('pw_step1_title')}</h2>
    <p class="text-sm text-slate-600 mt-0.5 mb-4">${t('pw_step1_desc')}</p>
    ${countryNote}
    <div class="space-y-3">${groups}</div>`;
}

// Step 2: countries for the chosen major
function pathwayCountriesHtml(m, countries, country) {
  const ar = isArabic();
  const name = c => ar ? (window.PLAN_COUNTRIES[c] || c) : c;
  const cards = [...countries].sort((a, b) => a[1] - b[1] || name(a[0]).localeCompare(name(b[0]), ar ? "ar" : "en")).map(([c, pct]) => {
    const prog = detailedProgramFor(m.id, c);
    const allowance = countryAllowance(c);
    const kwd = allowance ? convertAmount(allowance.standard, allowance.currency, "KWD", FX.rates) : null;
    return `
      <button type="button" class="pw-option ${country === c ? "is-selected" : ""}" data-country="${c}">
        <span class="pw-option-title">${name(c)}</span>
        <span class="mt-2 flex flex-wrap items-center gap-1.5">
          <span class="pw-pct" dir="ltr">${pct}%</span>${m.unconfirmed.includes(c) ? flag('unconfirmed') : ""}
          ${prog?.isMerit ? `<span class="px-2 py-0.5 rounded text-xs font-bold merit-tag">${t('card_merit_badge')}</span>` : ""}
          ${prog ? `<span class="pw-badge">${t('pw_full_details')}</span>` : ""}
        </span>
        ${typeof kwd === "number" ? `<span class="pw-option-meta mt-2">${t('pw_monthly')}: <strong class="text-slate-800">${formatNumber(kwd)} KWD</strong></span>` : ""}
      </button>`;
  }).join("");
  return `
    <h2 class="text-lg font-extrabold text-slate-900">${t('pw_step2_title').replace("{major}", ar ? m.ar : m.en)}</h2>
    <p class="text-sm text-slate-600 mt-0.5 mb-4">${t('pw_step2_desc')} ${t('pw_open_to').replace("{stream}", t(m.stream === "both" ? 'plan_stream_both' : 'plan_stream_science'))}</p>
    ${cards ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${cards}</div>` : `
    <div class="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50">
      <p class="text-sm text-slate-700">${t('pw_no_country')}</p>
      <a href="why.html" data-why-link class="inline-block mt-2 text-sm font-bold text-olive-900 underline">${t('why_btn')}</a>
    </div>`}`;
}

// Step 3: full requirements when a detailed program exists, otherwise the plan's rules
function pathwayRequirementsHtml(m, country, pct) {
  const ar = isArabic();
  const plan = window.MOHE_PLAN_2026;
  const prog = detailedProgramFor(m.id, country);
  const title = t('pw_step3_title').replace("{major}", ar ? m.ar : m.en).replace("{country}", ar ? (window.PLAN_COUNTRIES[country] || country) : country);
  if (prog) {
    const local = localizeProgram(prog);
    return `
      <h2 class="text-lg font-extrabold text-slate-900">${title}</h2>
      <p class="text-sm text-slate-600 mt-0.5 mb-4">${ar ? local.titleAr : local.title}</p>
      <div class="pw-panel rounded-xl border border-slate-200 overflow-hidden">${requirementsBodyHtml(prog, true)}</div>`;
  }
  const rules = plan?.ruleKeys || [];
  const rule = key => {
    const i = rules.indexOf(key);
    return i < 0 ? "" : (ar ? plan.rulesAr : plan.rulesEn)[i];
  };
  const picked = ["age", "english"];
  if (qudratNeeded(m)) picked.push("qudrat");
  if (country === "United Kingdom") picked.push("uk");
  return `
    <h2 class="text-lg font-extrabold text-slate-900">${title}</h2>
    <p class="text-sm text-slate-600 mt-0.5 mb-4">${t('pw_basic_note')}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
        <span class="text-xs font-bold text-slate-500 block mb-1">${t('pw_lowest')}</span>
        <span class="pw-pct" dir="ltr">${pct}%</span>${m.unconfirmed.includes(country) ? ` ${flag('unconfirmed')}` : ""}
      </div>
      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
        <span class="text-xs font-bold text-slate-500 block mb-1">${t('pw_stream')}</span>
        <span class="text-sm font-bold text-slate-900">${t(m.stream === "both" ? 'plan_stream_both' : 'plan_stream_science')}</span>
      </div>
    </div>
    <h3 class="text-sm font-bold text-slate-900 mb-2">${t('pw_plan_rules')}</h3>
    <ul class="space-y-2 text-sm text-slate-700">
      ${picked.map(k => rule(k)).filter(Boolean).map(r => `<li class="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">${ICON_CHECK}<span>${withFlags(r)}</span></li>`).join("")}
    </ul>
    <a href="${plan?.planUrl}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-olive-900 underline">${t('plan_majors_pdf')} ${ICON_EXTERNAL}</a>`;
}

// Step 4: the two subsets, money and universities
function pathwayMoneyHtml(m, country) {
  const ar = isArabic();
  const prog = detailedProgramFor(m.id, country);
  const title = t('pw_step4_title').replace("{major}", ar ? m.ar : m.en).replace("{country}", ar ? (window.PLAN_COUNTRIES[country] || country) : country);
  const a = countryAllowance(country);
  const amount = (value, currency) => `<span class="text-xl font-black text-slate-900 block">${money(convertAmount(value, currency, "KWD", FX.rates), "KWD")}</span><span class="text-xs text-slate-500">${formatNumber(value)} ${currency}</span>`;

  let moneyBody;
  if (prog) {
    const standard = stipendKwdRange(prog, "standard");
    const merit = prog.isMerit ? stipendKwdRange(prog, "merit") : null;
    moneyBody = `
      <div class="salary-badge rounded-lg p-3 mb-3">
        <span class="text-xs font-bold block text-emerald-900">${t('card_stipend_label')}</span>
        <span class="text-xl font-black text-emerald-950 block">${standard ?? "—"}</span>
        <span class="text-xs font-semibold text-emerald-800 block">${stipendHostRange(prog, "standard")}</span>
        ${merit ? `<span class="text-xs font-bold text-amber-800 block mt-1">${t('card_merit_amount')}: ${merit}</span>` : ""}
      </div>
      ${extrasCard(prog)}
      <button type="button" class="pw-calc mt-4 w-full px-4 py-2.5 rounded-lg bg-olive-900 hover:bg-olive-800 text-white text-sm font-bold">${t('pw_open_calc')}</button>`;
  } else if (a) {
    moneyBody = `
      <div class="grid grid-cols-2 gap-2 mb-3">
        <div class="p-3 rounded-lg bg-slate-50 border border-slate-200"><span class="text-xs font-bold text-slate-500 block mb-1">${t('stipend_standard')}</span>${amount(a.standard, a.currency)}</div>
        <div class="p-3 rounded-lg bg-amber-50/60 border border-amber-200"><span class="text-xs font-bold text-amber-900 block mb-1">${t('stipend_merit')}</span>${typeof a.merit === "number" ? amount(a.merit, a.currency) : (a.meritFlag ? flag(a.meritFlag) : `<span class="text-sm text-slate-600">${t('pw_no_merit')}</span>`)}</div>
      </div>
      <p class="text-sm text-slate-600">${t('pw_extra_note')} <a class="font-semibold text-olive-900 underline" href="${window.MOHE_PLAN_2026?.allowancesUrl}" target="_blank" rel="noopener noreferrer">${t('pw_extra_link')}</a></p>
      <p class="text-xs text-slate-400 mt-2">${fxNote()}</p>`;
  } else {
    moneyBody = `<p class="text-sm text-slate-600">${flag('unconfirmed')}</p>`;
  }

  const nbaqList = nbaqMajorFor(m.id, country);
  const unisBody = (prog
    ? universitiesHtml(prog)
    : nbaqList
    ? nbaqMajorUnisHtml(nbaqList, ar ? m.ar : m.en)
    : `<p class="text-sm text-slate-600 mb-3">${t('pw_unis_plan_note')}</p>
       <a href="https://nbaq.edu.kw/website/merits" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm font-bold text-olive-900">${t('pw_unis_link')} ${ICON_EXTERNAL}</a>`)
    + unlistedUniNote();

  return `
    <h2 class="text-lg font-extrabold text-slate-900 mb-4">${title}</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
      <section class="pw-panel rounded-xl border border-slate-200 bg-white p-5">
        <h3 class="text-base font-extrabold text-slate-900 mb-3">${t('pw_money_title')}</h3>
        ${moneyBody}
      </section>
      <section class="pw-panel rounded-xl border border-slate-200 bg-white p-5">
        ${prog || nbaqList ? "" : `<h3 class="text-base font-extrabold text-slate-900 mb-3">${t('pw_unis_title')}</h3>`}
        ${unisBody}
      </section>
    </div>`;
}

// Draws the stepper and the current step. ctx: { f, step, setMajor, setCountry, setStep, clearCountryFilter, restart }
// Returns how many majors step 1 offers (for the count badge and the empty state).
function renderPathway(ctx) {
  const stepsEl = document.getElementById("pw-steps");
  const body = document.getElementById("pw-body");
  if (!stepsEl || !body) return 0;
  const { f } = ctx;
  const options = pathwayOptions(f, true);
  const major = f.selectedMajor ? planMajorById(f.selectedMajor) : null;
  // Step 2 ignores the country filter, so every country for the major can be picked
  const majorEntry = major ? pathwayOptions({ ...f, keywordQuery: "" }, false).find(o => o.m.id === major.id) : null;
  const countries = majorEntry?.countries || [];
  const countryEntry = countries.find(([c]) => c === f.selectedCountry);
  const country = major && countryEntry ? countryEntry[0] : null;

  const maxStep = !major ? 1 : !country ? 2 : 4;
  // With no step asked for, open the furthest useful one (requirements once a country is picked)
  const wanted = ctx.step || (maxStep === 4 ? 3 : maxStep);
  const step = Math.min(wanted, maxStep);

  stepsEl.innerHTML = pathwayStepper(step, major, country);
  if (step === 1) {
    body.innerHTML = options.length ? pathwayMajorsHtml(options, f, major) : "";
  } else if (step === 2) {
    body.innerHTML = pathwayCountriesHtml(major, countries, country) + pathwayNav(1, t('pw_back_major'));
  } else if (step === 3) {
    body.innerHTML = pathwayRequirementsHtml(major, country, countryEntry[1]) + pathwayNav(2, t('pw_back_country'), 4, t('pw_next_money'));
    wireTabs(body);
  } else {
    body.innerHTML = pathwayMoneyHtml(major, country) + pathwayNav(3, t('pw_back_req'), null, "") +
      `<p class="mt-4 text-center"><button type="button" class="pw-restart text-sm font-semibold text-slate-500 hover:text-slate-800 underline">${t('pw_start_over')}</button></p>`;
    body.querySelector(".pw-calc")?.addEventListener("click", () => openSalaryModal(detailedProgramFor(major.id, country)));
  }

  stepsEl.querySelectorAll(".pw-step:not([disabled])").forEach(b => b.addEventListener("click", () => ctx.setStep(+b.dataset.step)));
  body.querySelectorAll(".pw-go").forEach(b => b.addEventListener("click", () => ctx.setStep(+b.dataset.step)));
  body.querySelectorAll("[data-major]").forEach(b => b.addEventListener("click", () => ctx.setMajor(b.dataset.major)));
  body.querySelectorAll("[data-country]").forEach(b => b.addEventListener("click", () => ctx.setCountry(b.dataset.country)));
  body.querySelector(".pw-all-countries")?.addEventListener("click", ctx.clearCountryFilter);
  body.querySelector(".pw-restart")?.addEventListener("click", ctx.restart);
  body.classList.toggle("hidden", !body.innerHTML.trim());
  initRevealCards(body);
  return options.length;
}

// =========================================================================
// 6. Modal shell (one overlay, two kinds of content)
// =========================================================================
function initModalShell() {
  const modal = document.getElementById("program-modal");
  if (!modal) return;
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close-modal]")) closeProgramModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openModal) closeProgramModal();
  });
}

function showProgramModal(html) {
  const modal = document.getElementById("program-modal");
  const content = document.getElementById("modal-dynamic-content");
  if (!modal || !content) return null;
  content.innerHTML = html;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
  return content;
}

function closeProgramModal() {
  const modal = document.getElementById("program-modal");
  modal?.classList.add("hidden");
  modal?.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
  openModal = null;
}

function modalHeader(prog, subtitleKey) {
  const isAr = isArabic();
  return `
    <div class="p-5 bg-olive-950 text-white flex items-start justify-between gap-4">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1.5">
          <span class="px-2 py-0.5 rounded text-xs font-semibold bg-olive-900 text-slate-200">${isAr ? prog.countryAr : prog.country}</span>
          <span class="text-xs font-bold text-amber-400">${t(subtitleKey)}</span>
        </div>
        <h2 class="text-lg sm:text-xl font-extrabold tracking-tight">${isAr ? prog.titleAr : prog.title}</h2>
      </div>
      <button type="button" data-close-modal class="text-slate-400 hover:text-white text-2xl font-bold leading-none p-1" aria-label="${t('modal_close')}">&times;</button>
    </div>`;
}

function modalFooter() {
  return `
    <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
      <a href="contact.html" class="text-xs font-semibold text-slate-600 hover:text-slate-900 underline">${t('modal_questions_contact')}</a>
      <button type="button" data-close-modal class="w-full sm:w-auto px-5 py-2 bg-olive-900 hover:bg-olive-800 text-white rounded-lg text-xs font-bold transition">${t('modal_close')}</button>
    </div>`;
}

function wireTabs(root) {
  const btns = root.querySelectorAll(".modal-tab-btn");
  const panes = root.querySelectorAll(".tab-pane");
  btns.forEach(btn => btn.addEventListener("click", () => {
    btns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
    panes.forEach(p => p.classList.add("hidden"));
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    root.querySelector(`#${btn.dataset.target}`)?.classList.remove("hidden");
  }));
}

// =========================================================================
// 7. Requirements modal (grades, exams, deadlines, visa)
// =========================================================================
function openRequirementsModal(baseProg) {
  openModal = { kind: "requirements", prog: baseProg };
  const prog = localizeProgram(baseProg);
  const content = showProgramModal(`
    ${modalHeader(prog, 'modal_requirements_subtitle')}
    ${requirementsBodyHtml(baseProg)}
    ${modalFooter()}
  `);
  if (content) wireTabs(content);
}

// Tabs (grades, tests, dates, visa) for one program: used by the pop-up and inline by the pathway.
// inline = true drops the pop-up's height limit.
function requirementsBodyHtml(baseProg, inline = false) {
  const prog = localizeProgram(baseProg);
  const g = prog.schoolGradSplit;
  const ex = prog.necessaryExams;
  const dl = prog.deadlines;

  // Details not in verifiedFields (data.js) were not re-checked and get a "Not checked yet" label
  const checked = new Set(baseProg.verifiedFields || []);
  const mark = (key) => checked.has(key) ? '' : ` ${flag('unverified')}`;

  const row = (label, value, key) => value && value !== 'N/A' && value !== 'غير متاح' ? `
    <div class="p-3 bg-slate-50 rounded border border-slate-200">
      <span class="text-xs font-bold text-slate-500 block mb-0.5">${label}</span>
      <span class="text-slate-800">${withFlags(value)}${mark(key)}</span>
    </div>` : '';

  return `
    <div class="flex border-b border-slate-200 bg-slate-100 text-xs font-bold overflow-x-auto" role="tablist">
      <button type="button" role="tab" aria-selected="true" class="modal-tab-btn active px-4 py-3 whitespace-nowrap" data-target="tab-grades">${t('modal_tab_grades')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-exams">${t('modal_tab_exams')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-deadlines">${t('modal_tab_deadlines')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-visa">${t('modal_tab_visa')}</button>
    </div>

    <div class="p-5 ${inline ? '' : 'max-h-[62vh] overflow-y-auto'} bg-white text-xs sm:text-sm">

      <p class="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded px-3 py-2 mb-4">${t('req_verified_note')}</p>

      <div id="tab-grades" class="tab-pane space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_public_school')}</span>
            <span class="text-base font-black text-emerald-800 block">${g.publicSchool.minScore}${mark('minScore')}</span>
            <span class="text-xs text-slate-600 font-semibold block mt-0.5">${g.publicSchool.stream}${mark('stream')}</span>
            <p class="text-xs text-slate-500 mt-2">${withFlags(g.publicSchool.notes)}${mark('publicNotes')}</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_us_diploma')}${mark('usDiploma')}</span>
            <span class="text-base font-black text-emerald-800 block">${g.usDiploma.minScore}</span>
            <p class="text-xs text-slate-500 mt-2">${withFlags(g.usDiploma.coursePrereqs)}</p>
          </div>
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_uk_system')}${mark('ukSystem')}</span>
            <span class="text-base font-black text-emerald-800 block">${g.ukSystem.minScore}</span>
            <p class="text-xs text-slate-500 mt-2">${withFlags(g.ukSystem.aLevelSubjects)}</p>
          </div>
        </div>
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${t('modal_floors_heading')}${mark('floors')}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${prog.courseSubjectFloors.map(c => `
            <div class="p-3 bg-slate-50 border border-slate-200 rounded text-xs">
              <span class="font-bold text-slate-800 block">${c.subject}</span>
              <span class="text-emerald-800 font-semibold">${c.minGrade}</span>
            </div>`).join("")}
        </div>
      </div>

      <div id="tab-exams" class="tab-pane hidden space-y-3 text-xs">
        <div class="p-4 rounded-xl border ${ex.ukviIeltsRequired ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-slate-50 border-slate-200 text-slate-700'}">
          <strong class="block mb-1">${t('modal_language_advisory')}</strong>
          <span>${ex.ukviIeltsNote}${mark('ukvi')}</span>
        </div>
        ${row(t('modal_english_heading'), ex.englishProficiency, 'english')}
        ${row(t('modal_other_exams'), ex.otherExams, 'otherExams')}
        ${row(t('modal_sat_heading'), ex.satActStatus, 'sat')}
        ${row(t('modal_platform'), prog.personalStatementReqs.platform, 'platform')}
        ${row(t('modal_word_count'), prog.personalStatementReqs.wordCount, 'wordCount')}
        ${row(t('modal_supplemental'), prog.personalStatementReqs.supplementalEssays, 'supplemental')}
      </div>

      <div id="tab-deadlines" class="tab-pane hidden space-y-3 text-xs">
        <div class="p-3 bg-emerald-50 rounded border border-emerald-200">
          <span class="text-xs font-bold text-emerald-900 block mb-0.5">${t('modal_mohe_window')}</span>
          <span class="text-emerald-950 font-semibold">${dl.mohePortalWindow}${mark('mohe')}</span>
        </div>
        ${row(t('modal_ea'), dl.earlyAction, 'ea')}
        ${row(t('modal_ed'), dl.earlyDecision, 'ed')}
        ${row(t('modal_rd'), dl.regularDecision, 'rd')}
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <span class="text-xs font-bold text-slate-500 block mb-0.5">${t('modal_pathway_heading')}${mark('pathway')}</span>
          <span class="text-slate-800 block">${prog.pathway.entryType}</span>
          <span class="font-bold block mt-1 ${prog.pathway.foundationNeeded ? 'text-amber-800' : 'text-emerald-800'}">${prog.pathway.foundationNeeded ? t('modal_foundation_yes') : t('modal_foundation_no')}</span>
          <p class="text-slate-600 mt-1">${prog.pathway.explanation}</p>
        </div>
      </div>

      <div id="tab-visa" class="tab-pane hidden space-y-3 text-xs">
        ${row(t('modal_visa_type'), prog.visaRequirements.visaType, 'visaType')}
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <span class="text-xs font-bold text-slate-500 block mb-1">${t('modal_visa_docs')}${mark('visaDocs')}</span>
          <ul class="space-y-1 list-disc ps-5 text-slate-700">${prog.visaRequirements.keyDocuments.map(d => `<li>${d}</li>`).join("")}</ul>
        </div>
        <div class="p-3 bg-amber-50 rounded border border-amber-300 text-amber-950">
          <strong class="block mb-0.5">${t('modal_guarantee_title')}</strong>
          ${t('modal_guarantee_desc')}
        </div>
      </div>
    </div>
  `;
}

// Allowance lines and university list for one program (money pop-up and pathway step 4)
function allowanceItemsHtml(baseProg) {
  const prog = localizeProgram(baseProg);
  return prog.monthlySalary.allowancesSummary.map((a, i) => `<div class="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800">${ICON_CHECK}<span>${a}${i >= (baseProg.verifiedAllowances ?? 1) ? ` ${flag('unverified')}` : ''}</span></div>`).join("");
}

// "What else is paid" card: the extra allowances behind one click (money pop-up and pathway step 4)
function extrasCard(baseProg) {
  const n = localizeProgram(baseProg).monthlySalary.allowancesSummary.length;
  return revealCard({
    question: t('salary_q_extras'),
    answer: t('salary_extras_answer'),
    sub: t('salary_extras_n').replace("{n}", n),
    tag: n > (baseProg.verifiedAllowances ?? 1) ? flag('unverified') : "", // some lines are not checked yet
    backTitle: t('modal_allowances_heading'),
    back: factBack(extraAllowancesLine(baseProg), "mohe_allowances")
  });
}

// The main extra-allowance line for a program (books, equipment...), shown on the "What else is paid?" card
function extraAllowancesLine(baseProg) {
  const lines = localizeProgram(baseProg).monthlySalary.allowancesSummary;
  return lines.find(l => /Extra allowances|مخصصات إضافية|المخصصات الإضافية/.test(l)) || lines[0] || "";
}

function universitiesHtml(baseProg, withHeading = true) {
  const prog = localizeProgram(baseProg);
  const majorId = baseProg.planMajors?.[0];
  const nbaqList = nbaqMajorFor(majorId, baseProg.country);
  if (nbaqList) {
    const m = (window.PLAN_MAJORS || []).find(x => x.id === majorId);
    return nbaqMajorUnisHtml(nbaqList, m ? (isArabic() ? m.ar : m.en) : (isArabic() ? prog.titleAr : prog.title), withHeading);
  }
  return `
    ${withHeading ? `<h3 class="text-sm font-extrabold text-slate-900 mb-1">${t('modal_institutions_heading')}${universitiesFlag(baseProg)}</h3>` : ''}
    <p class="text-xs text-slate-500 mb-2">${t('institutions_note')} <a class="underline" href="https://nbaq.edu.kw/website/merits" target="_blank" rel="noopener noreferrer">nbaq.edu.kw</a></p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-800">
      ${prog.accreditedUniversities.map(u => `<li class="p-2 bg-slate-50 border border-slate-200 rounded">${u}</li>`).join("")}
    </ul>`;
}

// Under every university list: what to do when your university is not on it
function unlistedUniNote() {
  return `<p class="text-sm text-slate-600 mt-4 pt-3 border-t border-slate-200"><strong class="text-slate-800">${t('unlisted_uni_q')}</strong> ${t('unlisted_uni_a')} <a class="font-semibold text-olive-900 underline" href="clarifications.html#university-not-listed">${t('unlisted_uni_link')}</a></p>`;
}

function universitiesFlag(baseProg) {
  return (baseProg.verifiedFields || []).includes('universities') ? '' : ` ${flag('unverified')}`;
}

// NBAQ's approved UK universities for a plan major (nbaq-uk-data.js), or null
// Universities with no approved degree level are ones NBAQ has suspended ("stopped") for Kuwaiti
// students, so they are left out: only approved universities are listed and counted.
function nbaqMajorFor(majorId, country) {
  const list = country === "United Kingdom" ? window.NBAQ_UK?.[majorId] : null;
  return list ? { ...list, unis: list.unis.filter(u => u[1]) } : null;
}

// Degree-level letters ("BMP" -> B M D tags). Hovering, tapping or tabbing to a letter
// shows its full name (data-tip, drawn by styles.css); screen readers read the name.
function nbaqLevelsHtml(levels) {
  return `<span class="nbaq-levels">${[...levels].map(l => {
    const name = t(`nbaq_level_${l}_name`);
    return `<span class="nbaq-level" tabindex="0" role="img" aria-label="${name}" data-tip="${name}">${t(`nbaq_level_${l}`)}</span>`;
  }).join("")}</span>`;
}

// Universities approved for one major: merit ones first, the rest folded away
function nbaqMajorUnisHtml(list, majorName, withHeading = true) {
  const row = ([name, levels, merit]) => `
    <li class="nbaq-program">
      <span>${name}${merit ? ` <span class="nbaq-star" title="${t('nbaq_merit')}">★</span>` : ''}</span>
      ${nbaqLevelsHtml(levels)}
    </li>`;
  const merit = list.unis.filter(u => u[2]);
  const other = list.unis.filter(u => !u[2]);
  const grid = rows => `<ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-800">${rows.map(row).join("")}</ul>`;

  return `
    ${withHeading ? `<h3 class="text-sm font-extrabold text-slate-900 mb-1">${t('modal_institutions_heading')}</h3>` : ''}
    <p class="text-sm text-slate-700 mb-1">${t('nbaq_major_intro').replace('{n}', list.unis.length).replace('{major}', majorName)}</p>
    ${list.unconfirmed ? `<p class="text-xs text-slate-600 mb-1">${t('nbaq_closest_subject').replace('{subject}', list.nbaq.join(' / '))} ${flag('unconfirmed')}</p>` : ''}
    <p class="text-[11px] text-slate-500 mb-3">${t('nbaq_levels_key')}</p>
    <h4 class="text-xs font-bold text-slate-900 mb-1">${t('nbaq_merit_group').replace('{n}', merit.length)}</h4>
    ${merit.length ? grid(merit) : `<p class="text-xs text-slate-500">${t('nbaq_no_merit')}</p>`}
    ${other.length ? `
      <details class="nbaq-uni mt-3">
        <summary><span class="font-bold text-slate-900">${t('nbaq_other_group').replace('{n}', other.length)}</span></summary>
        <div class="mt-2">${grid(other)}</div>
      </details>` : ''}
    ${nbaqRulesHtml()}`;
}

// UK merit-decree conditions, folded away under the university list
function nbaqRulesHtml() {
  const date = window.NBAQ_UK_CHECKED || "";
  return `
    <details class="nbaq-uni mt-3">
      <summary><span class="font-bold text-slate-900">${t('nbaq_rules_title')}</span></summary>
      <ul class="mt-2 space-y-1 list-disc ps-5 text-xs text-slate-700">
        ${[1, 2, 3, 4, 5, 6, 7].map(n => `<li>${t(`nbaq_rule_${n}`)}</li>`).join("")}
      </ul>
    </details>
    <p class="text-[11px] text-slate-500 mt-2">${t('nbaq_source').replace('{date}', date)} <a class="underline" href="https://nbaq.edu.kw/search/" target="_blank" rel="noopener noreferrer">nbaq.edu.kw/search</a></p>`;
}

// =========================================================================
// 8. Salary & Benefits modal with per-major currency calculator
// =========================================================================
function openSalaryModal(baseProg, keepInputs = false) {
  const prog = localizeProgram(baseProg);
  const s = baseProg.stipend;
  const currencies = Object.keys(window.MOUSTAQBILI_CURRENCIES || { KWD: {} });

  // Keep the calculator state when re-rendering for a language or rate change
  const prev = keepInputs && openModal?.calc ? openModal.calc : null;
  const calc = prev || { amount: s.variants[0].standard, from: s.currency, to: "KWD" };
  openModal = { kind: "salary", prog: baseProg, calc };

  const variantRows = s.variants.map(v => {
    const label = v.key === "all" ? t('stipend_variant_all') : t(`stipend_variant_${v.key}`);
    const cell = (amount, extra = '') => typeof amount !== "number"
      ? `<td class="p-3 ${extra}">${flag('unconfirmed')}</td>`
      : `
      <td class="p-3 ${extra}">
        <span class="font-black text-slate-900 block">${money(convertAmount(amount, s.currency, "KWD", FX.rates), "KWD")}</span>
        <span class="text-xs text-slate-500">${formatNumber(amount)} ${s.currency}</span>
      </td>`;
    return `
      <tr class="border-t border-slate-200">
        <th scope="row" class="p-3 text-start font-semibold text-slate-700">${label}</th>
        ${cell(v.standard)}
        ${baseProg.isMerit ? cell(v.merit, 'bg-amber-50/60') : ''}
      </tr>`;
  }).join("");

  const quickFill = s.variants.flatMap(v => {
    const label = v.key === "all" ? "" : ` (${t(`stipend_variant_${v.key}`)})`;
    const out = [{ amount: v.standard, text: `${t('stipend_standard')}${label}` }];
    if (baseProg.isMerit && typeof v.merit === "number") out.push({ amount: v.merit, text: `${t('stipend_merit')}${label}` });
    return out;
  });

  const options = (selected) => currencies.map(c => `<option value="${c}" ${c === selected ? 'selected' : ''}>${currencyLabel(c)}</option>`).join("");
  // A rate or language update redraws the pop-up: keep the same cards open
  const wasOpen = prev ? [...document.querySelectorAll("#modal-dynamic-content .reveal-card")].map(c => c.classList.contains("is-open")) : [];

  const content = showProgramModal(`
    ${modalHeader(prog, 'modal_salary_subtitle')}

    <div class="p-5 max-h-[66vh] overflow-y-auto bg-white text-xs sm:text-sm space-y-5">

      <section>
        <h3 class="text-sm font-extrabold text-slate-900 mb-2">${t('salary_monthly_heading')}</h3>
        <div class="overflow-x-auto rounded-lg border border-slate-200">
          <table class="w-full text-xs">
            <thead class="bg-slate-100 text-slate-600">
              <tr>
                <th class="p-3 text-start font-bold">${t('salary_col_location')}</th>
                <th class="p-3 text-start font-bold">${t('stipend_standard')}</th>
                ${baseProg.isMerit ? `<th class="p-3 text-start font-bold text-amber-900">${t('stipend_merit')}</th>` : ''}
              </tr>
            </thead>
            <tbody>${variantRows}</tbody>
          </table>
        </div>
        ${baseProg.isMerit ? `<p class="text-xs text-amber-900 mt-2">${t('salary_merit_short')}</p>` : ''}
        ${s.meritNoteKey ? `<p class="text-xs text-slate-500 mt-1">${t(s.meritNoteKey)}</p>` : ''}
        <p class="text-xs text-slate-400 mt-1">${t('salary_source_note')} <a class="underline" href="${window.MOHE_PLAN_2026?.allowancesUrl}" target="_blank" rel="noopener noreferrer">mohe.edu.kw</a></p>
      </section>

      <!-- Calculator, extras and universities each sit behind a card; an open card takes the whole row -->
      <div class="reveal-grid-expand grid grid-cols-1 sm:grid-cols-3 gap-3 items-start">
      ${revealCard({
        question: t('salary_q_convert'),
        answer: `1 ${s.currency} = ${formatNumber(convertAmount(1, s.currency, "KWD", FX.rates), 3)} KWD`,
        sub: t('salary_convert_sub'),
        backTitle: t('calc_heading'),
        back: `
        <p class="text-xs text-slate-600 mb-3">${t('calc_desc')}</p>

        <div class="flex flex-wrap gap-1.5 mb-3">
          ${quickFill.map(q => `<button type="button" class="calc-fill px-2.5 py-1 rounded border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700" data-amount="${q.amount}">${q.text}</button>`).join("")}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 items-end">
          <div>
            <label for="calc-amount" class="block text-xs font-bold text-slate-700 mb-1">${t('calc_amount')}</label>
            <div class="flex gap-1">
              <input id="calc-amount" type="number" min="0" step="any" value="${calc.amount}" class="w-full min-w-0 bg-white border border-slate-300 rounded px-2.5 py-2 text-sm font-bold focus:ring-2 focus:ring-olive-800 focus:outline-none">
              <select id="calc-from" class="bg-white border border-slate-300 rounded px-2 py-2 text-xs font-bold focus:ring-2 focus:ring-olive-800 focus:outline-none" aria-label="${t('calc_from')}">${options(calc.from)}</select>
            </div>
          </div>
          <button type="button" id="calc-swap" class="px-3 py-2 rounded border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700" aria-label="${t('calc_swap')}">&#8646;</button>
          <div>
            <label for="calc-to" class="block text-xs font-bold text-slate-700 mb-1">${t('calc_to')}</label>
            <select id="calc-to" class="w-full bg-white border border-slate-300 rounded px-2 py-2 text-xs font-bold focus:ring-2 focus:ring-olive-800 focus:outline-none">${options(calc.to)}</select>
          </div>
        </div>

        <div class="mt-3 p-3 rounded-lg bg-white border border-slate-200 flex items-baseline justify-between gap-3">
          <span class="text-xs font-bold text-slate-500">${t('calc_result')}</span>
          <output id="calc-result" class="text-xl font-black text-slate-900" aria-live="polite"></output>
        </div>
        <p id="calc-rate" class="text-xs text-slate-500 mt-2"></p>
        <p class="text-xs text-slate-400 mt-1">${fxNote()}</p>`
      })}
      ${extrasCard(baseProg)}
      ${revealCard({
        question: t('salary_q_unis'),
        answer: t('salary_unis_n').replace("{n}", nbaqMajorFor(baseProg.planMajors?.[0], baseProg.country)?.unis.length ?? prog.accreditedUniversities.length),
        sub: t('salary_unis_sub'),
        tag: nbaqMajorFor(baseProg.planMajors?.[0], baseProg.country) ? "" : universitiesFlag(baseProg),
        backTitle: t('modal_institutions_heading'),
        back: (() => {
          const nbaq = nbaqMajorFor(baseProg.planMajors?.[0], baseProg.country);
          return nbaq
            ? factBack(t('ans_unis_nbaq').replace("{n}", nbaq.unis.length).replace("{m}", nbaq.unis.filter(u => u[2]).length), "nbaq_search")
            : factBack(t('ans_unis_examples').replace("{list}", prog.accreditedUniversities.slice(0, 3).join(isArabic() ? "، " : ", ")), "nbaq_merit");
        })()
      })}
      </div>
    </div>

    ${modalFooter()}
  `);
  if (!content) return;
  initRevealCards(content);
  content.querySelectorAll(".reveal-card").forEach((card, i) => { if (wasOpen[i]) setRevealOpen(card, true); });

  const amountEl = content.querySelector("#calc-amount");
  const fromEl = content.querySelector("#calc-from");
  const toEl = content.querySelector("#calc-to");
  const resultEl = content.querySelector("#calc-result");
  const rateEl = content.querySelector("#calc-rate");

  function update() {
    calc.amount = parseFloat(amountEl.value);
    calc.from = fromEl.value;
    calc.to = toEl.value;
    const converted = Number.isFinite(calc.amount) ? convertAmount(calc.amount, calc.from, calc.to, FX.rates) : null;
    resultEl.textContent = money(converted, calc.to);
    const unit = convertAmount(1, calc.from, calc.to, FX.rates);
    rateEl.textContent = unit === null ? "" : `1 ${calc.from} = ${formatNumber(unit, 4)} ${calc.to}`;
  }

  amountEl.addEventListener("input", update);
  fromEl.addEventListener("change", update);
  toEl.addEventListener("change", update);
  content.querySelector("#calc-swap").addEventListener("click", () => {
    [fromEl.value, toEl.value] = [toEl.value, fromEl.value];
    update();
  });
  content.querySelectorAll(".calc-fill").forEach(btn => btn.addEventListener("click", () => {
    amountEl.value = btn.dataset.amount;
    fromEl.value = s.currency;
    update();
  }));
  update();
}

// =========================================================================
// 9. Qudrat (KU aptitude tests): status, home banner, page, calculator
// =========================================================================
function daysBetween(fromDate, toIso) {
  const to = new Date(`${toIso}T00:00:00`);
  const from = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  return Math.round((to - from) / 86400000);
}

// Where today sits in a cycle. Each session (test date) has its own registration deadline,
// so "registration open" counts down to the nearest deadline that has not passed yet.
function qudratStatus(cycle, today = new Date()) {
  const r = cycle.registration || {};
  const sessions = cycle.sessions || [];
  if (r.start && daysBetween(today, r.start) > 0) return { key: "upcoming", cls: "status-soon", days: daysBetween(today, r.start) };

  const openSession = sessions.find(s => daysBetween(today, s.regClose) >= 0);
  if (openSession) return { key: "reg_open", cls: "status-open", days: daysBetween(today, openSession.regClose), session: openSession };

  const nextTest = sessions.find(s => daysBetween(today, s.test) >= 0);
  if (nextTest) return { key: "reg_closed", cls: "status-soon", days: daysBetween(today, nextTest.test), session: nextTest };
  return { key: "finished", cls: "status-closed", days: 0 };
}

// Per-session row status for the dates table
function sessionStatus(session, today = new Date()) {
  if (daysBetween(today, session.regClose) >= 0) return { key: "session_open", cls: "status-open" };
  if (daysBetween(today, session.test) >= 0) return { key: "session_closed", cls: "status-soon" };
  return { key: "session_done", cls: "status-closed" };
}

function qudratStatusText(status) {
  return t(`qudrat_status_${status.key}`).replace("{days}", status.days);
}

function renderQudratHomeBanner() {
  const slot = document.getElementById("qudrat-home-banner");
  const data = window.KUWAIT_QUDRAT;
  if (!slot || !data) return;
  const c = data.currentCycle;
  const status = qudratStatus(c);

  slot.innerHTML = `
    <a href="qudrat.html" class="block bg-white rounded-xl border border-slate-300 p-5 shadow-sm hover:border-olive-900 transition">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">${t('qudrat_home_label')}</span>
            <span class="status-pill ${status.cls}">${qudratStatusText(status)}</span>
          </div>
          <h2 class="text-base font-extrabold text-slate-900">${L(c, 'name')}</h2>
        </div>
        <dl class="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
          <dt class="text-slate-500">${t('qudrat_registration')}</dt>
          <dd class="font-bold text-slate-900">${formatRange(c.registration)}</dd>
          <dt class="text-slate-500">${t('qudrat_tests')}</dt>
          <dd class="font-bold text-slate-900">${formatRange(c.tests)}</dd>
        </dl>
        <span class="text-xs font-bold text-olive-900 whitespace-nowrap">${t('qudrat_home_cta')} <span class="flip-rtl inline-block">&rarr;</span></span>
      </div>
    </a>`;
}

function formatRange(range) {
  if (!range || (!range.start && !range.end)) return t('not_announced');
  if (range.start && range.end && range.start !== range.end) return `${formatDate(range.start)} - ${formatDate(range.end)}`;
  return formatDate(range.start || range.end);
}

function initQudratPage() {
  renderQudratPage();
  window.addEventListener("languageChanged", renderQudratPage);
}

function renderQudratPage() {
  const data = window.KUWAIT_QUDRAT;
  const root = document.getElementById("qudrat-root");
  if (!data || !root) return;
  const c = data.currentCycle;
  const status = qudratStatus(c);
  const arr = (obj, field) => (isArabic() ? obj[`${field}Ar`] : obj[`${field}En`]) || obj[`${field}En`] || [];

  const steps = [
    { label: t('qudrat_registration'), value: formatRange(c.registration) },
    { label: t('qudrat_tests'), value: formatRange(c.tests) },
    { label: t('qudrat_results'), value: c.results ? formatDate(c.results) : `<span class="block text-sm font-semibold">${L(c, 'resultsNote')}</span> ${flag('unconfirmed')}` }
  ];

  // "Last day to register" card: the nearest deadline on the front, every date behind it
  const nextSession = (c.sessions || []).find(s => daysBetween(new Date(), s.regClose) >= 0);
  // Behind the deadline card: the tests still ahead (or the next round), then the official dates page
  const ahead = (c.sessions || []).filter(s => daysBetween(new Date(), s.regClose) >= 0);
  const datesBack = factBack(ahead.length
    ? `${t('qudrat_tests_left')} ${ahead.map(s => t('qudrat_test_by').replace("{test}", formatDate(s.test)).replace("{close}", formatDate(s.regClose))).join(" · ")}.`
    : `${L(data, 'nextCycle')} {{unconfirmed}}`, "ku_dates");
  const deadlineCard = revealCard({
    id: "dates",
    question: t('qudrat_q_deadline'),
    answer: nextSession ? formatDate(nextSession.regClose) : t('qudrat_closed_short'),
    sub: nextSession ? t('qudrat_for_test').replace("{date}", formatDate(nextSession.test)) : t('qudrat_see_next'),
    backTitle: t('qudrat_dates_title'),
    back: datesBack
  });

  root.innerHTML = `
    <!-- Current cycle -->
    <section id="current-cycle" class="bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden scroll-mt-24">
      <div class="p-6 bg-olive-950 text-white">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-400">${t('qudrat_current_label')}</span>
          <span class="status-pill ${status.cls}">${qudratStatusText(status)}</span>
        </div>
        <h2 class="text-xl font-extrabold">${L(c, 'name')}</h2>
        <p class="text-xs text-slate-300 mt-1">${L(c, 'term')}</p>
      </div>
      <ol class="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
        ${steps.map((s, i) => `
          <li class="p-4 ${i > 0 ? 'border-t sm:border-t-0 sm:border-s border-slate-200' : ''}">
            <span class="text-xs font-bold text-slate-500 block">${i + 1}. ${s.label}</span>
            <span class="text-sm font-extrabold text-slate-900">${s.value}</span>
          </li>`).join("")}
      </ol>
    </section>

    <!-- The basics: one short answer per card, the details behind it -->
    <section id="requirements" class="scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900">${t('qudrat_basics_title')}</h2>
      <p class="text-sm text-slate-600 mt-0.5 mb-4">${t('reveal_hint')}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        ${deadlineCard}
        ${(c.basics || []).map(b => revealCard({ question: L(b, 'question'), answer: L(b, 'answer'), sub: L(b, 'sub'), back: factBack(L(b, 'fact'), b.source) })).join("")}
      </div>
    </section>

    <!-- Which tests: one card per subject, the colleges that ask for it behind -->
    <section id="subjects" class="scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900">${t('qudrat_which_tests')}</h2>
      <p class="text-sm text-slate-600 mt-0.5 mb-4">${L(data, 'subjectsIntro')}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        ${data.subjects.map(s => {
          const colleges = arr(s, 'colleges');
          return revealCard({
            question: L(s, 'name'),
            answer: L(s, 'pass'),
            sub: (colleges.length === 1 ? t('qudrat_colleges_one') : t('qudrat_colleges_n')).replace("{n}", colleges.length),
            backTitle: t('qudrat_who_needs').replace("{test}", L(s, 'name')),
            back: factBack(colleges.join(isArabic() ? "، " : ", "), "ku_colleges")
          });
        }).join("")}
      </div>
    </section>

    <!-- How to register: a checklist grouped by when you do each step -->
    <section id="register" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 scroll-mt-24">
      <div class="flex flex-wrap items-end justify-between gap-2 mb-1">
        <h2 class="text-lg font-extrabold text-slate-900">${t('qudrat_how')}</h2>
        <p id="qreg-progress" class="text-sm font-semibold text-slate-600" aria-live="polite"></p>
      </div>
      <p class="text-sm text-slate-600 mb-3">${t('qudrat_how_desc')}</p>
      <div class="h-2 rounded-full bg-slate-200 overflow-hidden mb-6" aria-hidden="true"><div id="qreg-bar" class="h-full bg-olive-700 transition-all" style="width:0%"></div></div>
      <div id="qreg-phases" class="space-y-6"></div>
      <div class="mt-6 flex flex-wrap items-center gap-3">
        ${c.registerUrl ? `<a href="${c.registerUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 bg-olive-900 hover:bg-olive-800 text-white rounded-lg text-sm font-bold">${t('qudrat_register_btn')} ${ICON_EXTERNAL}</a>` : ''}
        <button type="button" id="qreg-reset" class="text-sm font-semibold text-slate-500 hover:text-slate-800 underline">${t('steps_reset')}</button>
      </div>
    </section>

    <!-- Equivalent score -->
    <section id="equivalent" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-1">${t('equiv_title')}</h2>
      <p class="text-xs text-slate-500 mb-4">${t('equiv_desc')}</p>
      <label for="equiv-college" class="block text-xs font-bold text-slate-700 mb-1">${t('equiv_college')}</label>
      <select id="equiv-college" class="w-full sm:w-auto bg-white border border-slate-300 rounded px-3 py-2 text-sm font-semibold mb-4 focus:ring-2 focus:ring-olive-800 focus:outline-none">
        ${data.formulas.map((f, i) => `<option value="${i}">${L(f, 'college')}</option>`).join("")}
      </select>
      <div id="equiv-inputs" class="grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="mt-4 p-4 rounded-lg bg-slate-100 border border-slate-300 flex flex-wrap items-baseline justify-between gap-2">
        <span id="equiv-formula" class="text-xs text-slate-600"></span>
        <output id="equiv-result" class="text-2xl font-black text-slate-900" aria-live="polite">—</output>
      </div>
      <p id="equiv-condition" class="text-xs font-semibold text-amber-800 mt-2"></p>
      <p class="text-xs text-slate-400 mt-2">${L(data, 'formulaNote')}</p>
    </section>

    <!-- Good to know: short answers, details behind -->
    <section id="rules" class="scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-4">${t('qudrat_rules_title')}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        ${(data.goodToKnow || []).map(g => revealCard({ question: L(g, 'question'), answer: L(g, 'answer'), sub: L(g, 'sub'), back: factBack(L(g, 'fact'), g.source) })).join("")}
      </div>
      ${L(data, 'warning') ? `<p class="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm font-semibold text-amber-900">${L(data, 'warning')}</p>` : ""}
    </section>

    <!-- CEM contact -->
    <section id="help" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 text-xs scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-1">${t('qudrat_help_title')}</h2>
      <p class="text-slate-500 mb-3">${L(data.contact, 'hours')}</p>
      <div class="flex flex-wrap gap-2">
        ${data.contact.phones.map(p => `<a href="tel:${p}" class="px-3 py-2 rounded-lg border border-slate-300 font-bold text-slate-900 hover:bg-slate-50" dir="ltr">${p}</a>`).join("")}
        <a href="mailto:${data.contact.email}" class="px-3 py-2 rounded-lg border border-slate-300 font-semibold text-olive-900 hover:bg-slate-50" dir="ltr">${data.contact.email}</a>
        <a href="${data.contact.helpUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-lg border border-slate-300 font-semibold text-olive-900 hover:bg-slate-50 inline-flex items-center gap-1">${t('qudrat_help_me')} ${ICON_EXTERNAL}</a>
        <a href="${data.contact.instagram}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-lg border border-slate-300 font-semibold text-olive-900 hover:bg-slate-50 inline-flex items-center gap-1" dir="ltr">Instagram @cemvpaa ${ICON_EXTERNAL}</a>
      </div>
    </section>

    <!-- Sources -->
    <section id="sources" class="text-xs text-slate-500 scroll-mt-24">
      <h2 class="text-xs font-bold text-slate-700 mb-1">${t('sources_title')} &middot; ${t('last_verified')} ${formatDate(data.lastVerified)}</h2>
      <ul class="space-y-0.5">
        ${data.sources.map(s => `<li><a class="underline hover:text-slate-800" href="${s.url}" target="_blank" rel="noopener noreferrer">${s.label}</a>${s.date ? ` (${formatDate(s.date)})` : ''}</li>`).join("")}
      </ul>
    </section>
  `;

  initEquivalentCalculator(data);
  renderQudratChecklist(c);
  initRevealCards(root);
  document.getElementById("qreg-reset")?.addEventListener("click", () => {
    saveTickedSteps(new Set(), QREG_KEY);
    renderQudratChecklist(c);
  });
}

// Qudrat registration checklist. Ticks are kept apart from the scholarship checklist.
const QREG_KEY = "moustaqbili_qudrat_steps";

function renderQudratChecklist(cycle) {
  const box = document.getElementById("qreg-phases");
  if (!box) return;
  const phases = cycle.registerPhases || [];
  const total = phases.reduce((n, p) => n + p.steps.length, 0);
  const ticked = loadTickedSteps(QREG_KEY);
  let num = 0;

  box.innerHTML = phases.map(p => `
    <div>
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">${L(p, 'title')}</h3>
      <ol class="space-y-2">
        ${p.steps.map(s => {
          num += 1;
          const done = ticked.has(s.id);
          return `
          <li class="step-item ${done ? 'is-done' : ''}">
            <label class="step-check" title="${t('steps_mark_done')}">
              <input type="checkbox" data-step="${s.id}" ${done ? 'checked' : ''} aria-label="${t('steps_mark_done')}: ${L(s, 'text')}">
              <span class="step-num" aria-hidden="true">${num}</span>
            </label>
            ${L(s, 'hint') ? `
            <details class="step-details" data-step="${s.id}">
              <summary><span class="step-title">${L(s, 'text')}</span></summary>
              <p class="mt-2 text-sm text-slate-700 leading-relaxed">${L(s, 'hint')}</p>
            </details>` : `
            <div class="flex-1 min-w-0 pt-0.5"><span class="step-title">${L(s, 'text')}</span></div>`}
          </li>`;
        }).join("")}
      </ol>
    </div>`).join("");

  const progress = () => {
    const done = loadTickedSteps(QREG_KEY).size;
    const label = document.getElementById("qreg-progress");
    const bar = document.getElementById("qreg-bar");
    if (label) label.textContent = t('steps_progress').replace("{done}", done).replace("{total}", total);
    if (bar) bar.style.width = `${total ? Math.round((done / total) * 100) : 0}%`;
  };

  box.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener("change", () => {
    const set = loadTickedSteps(QREG_KEY);
    if (input.checked) set.add(input.dataset.step); else set.delete(input.dataset.step);
    saveTickedSteps(set, QREG_KEY);
    input.closest(".step-item").classList.toggle("is-done", input.checked);
    progress();
  }));
  progress();
}

function initEquivalentCalculator(data) {
  const select = document.getElementById("equiv-college");
  const inputsBox = document.getElementById("equiv-inputs");
  const resultEl = document.getElementById("equiv-result");
  const formulaEl = document.getElementById("equiv-formula");
  if (!select || !inputsBox) return;

  const subjectName = (code) => {
    if (code === "hs") return t('equiv_hs');
    const s = data.subjects.find(x => x.code === code);
    return s ? L(s, 'name') : code;
  };

  function buildInputs() {
    const f = data.formulas[select.value];
    inputsBox.innerHTML = Object.keys(f.weights).map(code => `
      <div>
        <label for="equiv-${code}" class="block text-xs font-bold text-slate-700 mb-1">${subjectName(code)} (%)</label>
        <input id="equiv-${code}" data-code="${code}" type="number" min="0" max="100" step="0.01" class="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-2 text-sm font-semibold focus:ring-2 focus:ring-olive-800 focus:bg-white focus:outline-none">
      </div>`).join("");
    formulaEl.textContent = Object.entries(f.weights).map(([code, w]) => `${subjectName(code)} × ${+(w * 100).toFixed(1)}%`).join("  +  ");
    const condition = document.getElementById("equiv-condition");
    if (condition) condition.textContent = L(f, 'condition') ? `${t('equiv_condition')}: ${L(f, 'condition')}` : "";
    inputsBox.querySelectorAll("input").forEach(i => i.addEventListener("input", compute));
    compute();
  }

  function compute() {
    const f = data.formulas[select.value];
    let total = 0;
    for (const [code, w] of Object.entries(f.weights)) {
      const v = parseFloat(document.getElementById(`equiv-${code}`)?.value);
      if (!Number.isFinite(v) || v < 0 || v > 100) { resultEl.textContent = "—"; return; }
      total += v * w;
    }
    resultEl.textContent = `${total.toFixed(2)}%`;
  }

  select.addEventListener("change", buildInputs);
  buildInputs();
}

// =========================================================================
// 10. Contact the Ministry
// =========================================================================
function initContactPage() {
  renderContactPage();
  window.addEventListener("languageChanged", renderContactPage);
}

const CONTACT_ICONS = {
  phone: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>`,
  email: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
  url: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>`,
  text: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`
};

function contactIcon(type) {
  return `<span class="contact-bubble-icon" aria-hidden="true"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${CONTACT_ICONS[type] || CONTACT_ICONS.text}</svg></span>`;
}

// Short, readable form of a web address: "https://www.mohe.edu.kw/site/AR/..." -> "mohe.edu.kw"
function shortHost(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return url; }
}

// One contact item. Links (phone / email / website) are bubbles; plain facts are soft notes.
function contactLine(item) {
  const label = L(item, 'label');

  if (item.type === "text") {
    return `
      <div class="contact-note">
        ${contactIcon("text")}
        <div class="min-w-0">
          <span class="contact-note-label">${label}</span>
          <span class="contact-note-value">${L(item, 'value') || item.value}${item.flag ? ` ${flag(item.flag)}` : ''}</span>
        </div>
      </div>`;
  }

  const internal = item.type === "url" && !/^https?:/.test(item.value);
  const href = item.type === "phone" ? `tel:${item.value.replace(/[^\d+]/g, '')}`
    : item.type === "email" ? `mailto:${item.value}`
    : item.value;
  // Allow long emails to wrap only after "@" or "_", so the domain stays in one piece
  const shown = item.type === "url" ? (internal ? "" : shortHost(item.value))
    : item.type === "email" ? item.value.replace(/([@_])/g, "$1<wbr>")
    : item.value;
  const external = item.type === "url" && !internal;
  const copyable = item.type === "phone" || item.type === "email";

  return `
    <div class="contact-bubble">
      <a href="${href}" class="contact-bubble-link" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        ${contactIcon(item.type)}
        <span class="min-w-0">
          <span class="contact-bubble-label">${label}</span>
          ${shown ? `<span class="contact-bubble-value" dir="ltr">${shown}</span>` : ''}
        </span>
        ${external ? `<span class="contact-bubble-ext" aria-hidden="true">${ICON_EXTERNAL}</span>` : ''}
      </a>
      ${copyable ? `<button type="button" class="contact-copy" data-copy="${item.value}" aria-label="${t('contact_copy')}: ${item.value}">${t('contact_copy')}</button>` : ''}
    </div>`;
}

// Copy text, using the older textarea method when the Clipboard API is missing or refused
function copyText(text) {
  const legacy = () => {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    area.remove();
    return ok ? Promise.resolve() : Promise.reject(new Error("copy failed"));
  };
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text).catch(legacy);
  return legacy();
}

function initContactCopyButtons(root) {
  root.querySelectorAll(".contact-copy").forEach(btn => btn.addEventListener("click", () => {
    copyText(btn.dataset.copy).then(() => {
      btn.textContent = t('contact_copied');
      btn.classList.add("is-copied");
      setTimeout(() => { btn.textContent = t('contact_copy'); btn.classList.remove("is-copied"); }, 1800);
    }, () => {
      // Could not copy: select the address so the student can copy it by hand
      const value = btn.parentElement.querySelector(".contact-bubble-value");
      if (value) window.getSelection().selectAllChildren(value);
    });
  }));
}

function renderContactPage() {
  const data = window.MOHE_CONTACTS;
  const root = document.getElementById("contact-root");
  if (!data || !root) return;

  // Notes (plain facts) first, then the clickable bubbles
  const card = (entry) => {
    const notes = entry.items.filter(i => i.type === "text");
    const links = entry.items.filter(i => i.type !== "text");
    return `
    <article class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col gap-3">
      <div>
        <h3 class="text-base font-extrabold text-slate-900">${L(entry, 'name')}</h3>
        ${L(entry, 'desc') ? `<p class="text-sm text-slate-600 mt-1 leading-relaxed">${L(entry, 'desc')}</p>` : ''}
      </div>
      ${notes.length ? `<div class="space-y-2">${notes.map(contactLine).join("")}</div>` : ''}
      ${links.length ? `<div class="space-y-2">${links.map(contactLine).join("")}</div>` : ''}
    </article>`;
  };

  root.innerHTML = data.groups.map(group => `
    <section id="${group.id}" class="scroll-mt-24">
      <h2 class="text-xl font-extrabold text-slate-900 mb-1">${L(group, 'title')}</h2>
      ${L(group, 'desc') ? `<p class="text-sm text-slate-600 mb-5 max-w-3xl leading-relaxed">${L(group, 'desc')}</p>` : '<div class="mb-5"></div>'}
      <div class="grid grid-cols-1 ${group.entries.length > 1 ? 'md:grid-cols-2' : ''} gap-5 items-start">
        ${group.entries.map(card).join("")}
      </div>
    </section>`).join("") + `
    <section id="contact-sources" class="text-sm text-slate-500 border-t border-slate-200 pt-5">
      <h2 class="text-sm font-bold text-slate-700 mb-1">${t('sources_title')} &middot; ${t('last_verified')} ${formatDate(data.lastVerified)}</h2>
      <p class="leading-relaxed">${t('contact_disclaimer')}</p>
    </section>`;

  initContactCopyButtons(root);

  const toc = document.getElementById("contact-toc");
  if (toc) toc.innerHTML = data.groups.map(g => `<a href="#${g.id}">${L(g, 'title')}</a>`).join("");
}

// =========================================================================
// 10b. Scholarship plan 2026/2027 (used on the More info page)
// =========================================================================
function planHtml() {
  const plan = window.MOHE_PLAN_2026;
  if (!plan) return "";
  const rules = (isArabic() ? plan.rulesAr : plan.rulesEn) || [];

  return `
    <div class="p-5 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-950 leading-relaxed mb-8">${L(plan, 'status')}</div>

    <h3 class="text-base font-bold text-slate-900 mb-3">${t('plan_rules_title')}</h3>
    <ul class="space-y-3 text-sm text-slate-700 leading-relaxed mb-10">
      ${rules.map(r => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${withFlags(r)}</span></li>`).join("")}
    </ul>

    <h3 class="text-base font-bold text-slate-900 mb-1">${t('plan_floors_title')}</h3>
    <p class="text-sm text-slate-500 mb-4">${t('plan_floors_help')}</p>
    <div class="overflow-x-auto rounded-xl border border-slate-200 mb-3">
      <table class="w-full text-sm">
        <thead class="bg-slate-100 text-slate-600 text-xs">
          <tr>
            <th class="p-3 text-start">${t('plan_col_country')}</th>
            <th class="p-3 text-start">${t('plan_col_medicine')}</th>
            <th class="p-3 text-start">${t('plan_col_pharmacy')}</th>
            <th class="p-3 text-start">${t('plan_col_engineering')}</th>
            <th class="p-3 text-start">${t('plan_col_other')}</th>
          </tr>
        </thead>
        <tbody>
          ${plan.floors.map(f => `
            <tr class="border-t border-slate-200">
              <th scope="row" class="p-3 text-start font-bold text-slate-900 whitespace-nowrap">${L(f, 'country')}</th>
              <td class="p-3">${isArabic() && f.medicineAr ? f.medicineAr : f.medicine}</td>
              <td class="p-3">${f.pharmacy}</td>
              <td class="p-3">${f.engineering}</td>
              <td class="p-3 text-slate-600">${L(f, 'other')}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500">${t('plan_dash_help')}</p>`;
}

// =========================================================================
// 10c. More info page (content from more-info-data.js)
// =========================================================================
function initMoreInfoPage() {
  renderMoreInfoPage();
  window.addEventListener("languageChanged", renderMoreInfoPage);
  window.addEventListener("fxUpdated", renderMoreInfoPage);
}

function moreInfoBlock(block) {
  const ar = isArabic();
  const flagHtml = (item) => item.flag ? ` ${flag(item.flag)}` : '';
  switch (block.type) {
    case "text":
      return `<p class="text-sm text-slate-700 leading-7">${withFlags(ar ? block.ar : block.en)}</p>`;

    case "list":
      return `<ul class="space-y-3 text-sm text-slate-700 leading-7">${(ar ? block.ar : block.en).map(i => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${withFlags(i)}</span></li>`).join("")}</ul>`;

    case "reveal":
      // Short answers on cards, the details behind them (items: question/answer/sub/details, En + Ar)
      return `<div class="grid grid-cols-1 sm:grid-cols-${Math.min(block.items.length, 3)} gap-4 items-start">${block.items.map(i => revealCard({
        question: L(i, 'question'), answer: L(i, 'answer'), sub: L(i, 'sub'),
        back: i.factEn ? factBack(L(i, 'fact'), i.source) : revealList((ar ? i.detailsAr : i.detailsEn) || i.detailsEn || [])
      })).join("")}</div>`;

    case "terms":
      return `<dl class="grid grid-cols-1 md:grid-cols-2 gap-4">${block.items.map(i => `
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
          <dt class="text-sm font-bold text-slate-900">${L(i, 'term')}</dt>
          <dd class="text-sm text-slate-600 mt-1.5 leading-relaxed">${L(i, 'def')}</dd>
        </div>`).join("")}</dl>`;

    case "steps":
      return `<ol class="space-y-6">${block.items.map((s, n) => `
        <li class="flex gap-3">
          <span class="w-7 h-7 rounded-full bg-olive-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">${n + 1}</span>
          <div>
            <span class="text-xs font-bold text-slate-500 block mb-1">${L(s, 'when')}</span>
            <span class="text-sm text-slate-800 leading-relaxed">${L(s, 'what')}${flagHtml(s)}</span>
          </div>
        </li>`).join("")}</ol>`;

    case "cards":
      // A card with a `url` becomes a link to that page
      return `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${block.items.map(c => {
        const tag = c.url ? `a href="${c.url}"` : "div";
        const end = c.url ? "a" : "div";
        return `
        <${tag} class="block p-5 rounded-xl bg-slate-50 border border-slate-100 ${c.url ? 'hover:border-olive-700 hover:bg-white transition' : ''}">
          <h4 class="text-sm font-bold text-slate-900 mb-2">${L(c, 'title')}${flagHtml(c)}${c.url ? ` <span class="flip-rtl inline-block text-olive-900" aria-hidden="true">&rarr;</span>` : ''}</h4>
          <p class="text-sm text-slate-600 leading-relaxed">${withFlags(L(c, 'body'))}</p>
        </${end}>`;
      }).join("")}</div>`;

    case "links":
      // Only links to other websites open in a new tab
      return `<ul class="flex flex-wrap gap-3">${block.items.map(l => {
        const external = /^https?:/.test(l.url);
        return `
        <li><a href="${l.url}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm font-semibold text-olive-900">${L(l, 'label')}${external ? ` ${ICON_EXTERNAL}` : ''}</a></li>`;
      }).join("")}</ul>`;

    case "howto":
      // One line per page; tapping it opens short numbered steps and a link to that page
      return `<div class="space-y-2">${block.items.map(i => `
        <details class="faq-item howto-item rounded-xl border border-slate-200 bg-white">
          <summary class="howto-head cursor-pointer list-none flex items-center justify-between gap-3 text-slate-900">
            <span class="howto-title">${L(i, 'title')}</span>
            <svg class="faq-chevron w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </summary>
          <div class="howto-body">
            <ol class="list-decimal ps-5 space-y-1.5 text-slate-700">${(ar ? i.stepsAr : i.stepsEn).map(step => `<li>${step}</li>`).join("")}</ol>
            <a href="${i.url}" class="inline-flex items-center gap-1 mt-3 font-semibold text-olive-900 underline">${t('howto_open').replace("{page}", L(i, 'title'))} <span class="flip-rtl inline-block" aria-hidden="true">&rarr;</span></a>
          </div>
        </details>`).join("")}</div>`;

    case "plan":
      return planHtml();

    case "contacts":
      // Same email/phone bubbles as the Contact page (copy buttons wired after render)
      return `<div class="space-y-2">${block.items.map(contactLine).join("")}</div>`;

    case "allowances": {
      // One card per country: the monthly amount on the front, merit and a link to its majors behind
      const cards = (window.MORE_INFO?.allowances || []).map(a => {
        const both = (amount) => `<strong class="text-slate-900">${money(convertAmount(amount, a.currency, "KWD", FX.rates), "KWD")}</strong> (${formatNumber(amount)} ${a.currency})`;
        const merit = typeof a.merit === "number" ? both(a.merit) : (a.meritFlag ? flag(a.meritFlag) : t('allow_no_merit'));
        const country = L(a, 'country');
        return revealCard({
          question: country,
          answer: money(convertAmount(a.standard, a.currency, "KWD", FX.rates), "KWD"),
          sub: t('allow_per_month').replace("{amount}", `${formatNumber(a.standard)} ${a.currency}`),
          tag: typeof a.merit === "number" ? `<span class="px-2 py-0.5 rounded text-xs font-bold merit-tag whitespace-nowrap">${t('allow_merit_tag')}</span>` : "",
          backTitle: t('allow_back_title').replace("{country}", country),
          back: factBack(`${t('allow_col_merit')}: ${merit}`, typeof a.merit === "number" ? "mohe_merit" : "mohe_allowances")
        });
      }).join("");
      return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start mb-3">${cards}</div>
        <p class="text-xs text-slate-500 mb-4">${t('allow_kwd_note')} ${fxNote()}</p>`;
    }
    default:
      return "";
  }
}

function renderMoreInfoPage() {
  renderSectionPage(window.MORE_INFO, "more-root", "more-toc");
}

// Navigate Moustaqbili page (navigate-data.js), same layout as More Info
function initNavigatePage() {
  const render = () => renderSectionPage(window.NAVIGATE_GUIDE, "nav-root", "nav-toc");
  render();
  window.addEventListener("languageChanged", render);
}

// Shared renderer for pages built from { sections: [{ id, title, intro, blocks }] }
function renderSectionPage(data, rootId, tocId) {
  const root = document.getElementById(rootId);
  if (!data || !root) return;

  root.innerHTML = data.sections.map(s => `
    <section id="${s.id}" class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 scroll-mt-24">
      <h2 class="text-xl font-extrabold text-slate-900">${L(s, 'title')}${s.flag ? ` ${flag(s.flag)}` : ''}</h2>
      <p class="text-base text-slate-600 mt-2 mb-7 leading-relaxed">${L(s, 'intro')}</p>
      <div class="space-y-7">${s.blocks.map(moreInfoBlock).join("")}</div>
    </section>`).join("") + `
    <p class="text-xs text-slate-500">${t('last_verified_full')} ${formatDate(data.lastVerified)}.</p>`;

  initContactCopyButtons(root);
  initRevealCards(root);

  const toc = document.getElementById(tocId);
  if (toc) toc.innerHTML = data.sections.map(s => `<a href="#${s.id}">${L(s, 'title')}</a>`).join("");
}

// =========================================================================
// 10d. Questions page (common misconceptions, from clarifications-data.js)
// =========================================================================
/**
 * Does a question match what the student typed in the search box?
 * `item` has questionEn/questionAr/answerEn/answerAr; `query` is the raw
 * text from the box (may be Arabic or English, any case, extra spaces).
 */
function faqMatches(item, query) {
  // TODO(human): decide how a search query matches a question
  return true;
}

let faqTopic = "all";
let faqQuery = "";

function initClarificationsPage() {
  renderClarificationsPage();
  window.addEventListener("languageChanged", renderClarificationsPage);

  const search = document.getElementById("faq-search");
  search?.addEventListener("input", () => {
    faqQuery = search.value;
    renderFaqList();
  });
}

function renderClarificationsPage() {
  const data = window.CLARIFICATIONS;
  const topicsBox = document.getElementById("faq-topics");
  if (!data || !topicsBox) return;

  const topics = ["all", ...data.topics.map(tp => tp.id)];
  topicsBox.innerHTML = topics.map(id => {
    const label = id === "all" ? t('faq_topic_all') : L(data.topics.find(tp => tp.id === id), 'label');
    const active = faqTopic === id;
    return `<button type="button" data-topic="${id}" aria-pressed="${active}" class="px-3 py-1.5 rounded-full border text-sm font-semibold transition ${active ? 'bg-olive-900 text-white border-olive-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}">${label}</button>`;
  }).join("");
  topicsBox.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    faqTopic = b.dataset.topic;
    renderClarificationsPage();
  }));

  const meta = document.getElementById("faq-meta");
  if (meta) meta.textContent = `${t('last_verified_full')} ${formatDate(data.lastVerified)}.`;
  renderFaqList();
}

function renderFaqList() {
  const data = window.CLARIFICATIONS;
  const list = document.getElementById("faq-list");
  const empty = document.getElementById("faq-empty");
  if (!data || !list) return;

  const items = data.items.filter(i => (faqTopic === "all" || i.topic === faqTopic) && (!faqQuery.trim() || faqMatches(i, faqQuery)));
  empty?.classList.toggle("hidden", items.length > 0);

  list.innerHTML = items.map(i => `
    <details id="${i.id}" class="faq-item scroll-mt-24 bg-white rounded-xl border border-slate-300 shadow-sm group">
      <summary class="p-4 cursor-pointer list-none flex items-start justify-between gap-3">
        <span class="text-sm sm:text-base font-bold text-slate-900">${L(i, 'question')}</span>
        <span class="faq-chevron text-slate-400 flex-shrink-0 mt-0.5" aria-hidden="true">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </summary>
      <div class="px-4 pb-4 text-sm text-slate-700 leading-relaxed">
        <p>${withFlags(L(i, 'answer'))}${i.status === "unconfirmed" ? ` ${flag('unconfirmed')}` : ''}</p>
        ${i.sourceUrl ? `<p class="text-xs text-slate-500 mt-2">${t('faq_source')}: <a class="underline hover:text-slate-800" href="${i.sourceUrl}" target="_blank" rel="noopener noreferrer">${i.sourceLabel}</a></p>` : ''}
      </div>
    </details>`).join("");
}

// =========================================================================
// 10h. Check my score (score.html): where a student's % stands against
// the Ministry's minimums and last year's lowest accepted scores
// =========================================================================
const SCORE_WHERE = ["abroad", "ku", "aasu", "puc"];
const SCORE_UNI_IDS = { ku: "kuwait-university", aasu: "aasu", puc: "puc" };

function initScorePage() {
  const form = document.getElementById("score-form");
  if (!form) return;
  // Choices live in the address (score.html?hs=92&stream=arts&where=abroad,ku), so a result can be shared
  const p = new URLSearchParams(location.search);
  ["hs", "eng", "math", "arb"].forEach(n => { if (p.get(n)) form.elements[n].value = p.get(n); });
  if (p.get("stream") === "arts") form.querySelector('input[name="stream"][value="arts"]').checked = true;
  if (p.get("where")) {
    const where = p.get("where").split(",");
    form.querySelectorAll('input[name="where"]').forEach(b => { b.checked = where.includes(b.value); });
  }
  if (["eng", "math", "arb"].some(n => p.get(n))) document.getElementById("score-qudrat").open = true;
  fillScoreCountries(p.get("country") || "");

  form.addEventListener("input", () => renderScoreResults(true));
  form.addEventListener("change", () => renderScoreResults(true));
  form.addEventListener("submit", e => e.preventDefault());
  window.addEventListener("languageChanged", () => { fillScoreCountries(form.elements.country.value); renderScoreResults(false); });
  renderScoreResults(false);
}

function fillScoreCountries(selected) {
  const sel = document.getElementById("score-country");
  if (!sel) return;
  const names = window.PLAN_COUNTRIES || {};
  sel.innerHTML = `<option value="">${t('score_country_all')}</option>` + Object.keys(names).map(c =>
    `<option value="${escapeHtml(c)}"${c === selected ? " selected" : ""}>${escapeHtml(isArabic() ? names[c] : c)}</option>`).join("");
}

function readScoreForm() {
  const f = document.getElementById("score-form");
  const num = n => { const v = parseFloat(f.elements[n].value); return Number.isFinite(v) && v >= 0 && v <= 100 ? v : null; };
  return {
    hs: num("hs"), eng: num("eng"), math: num("math"), arb: num("arb"),
    hsRaw: f.elements.hs.value.trim(),
    stream: f.querySelector('input[name="stream"]:checked')?.value || "science",
    where: [...f.querySelectorAll('input[name="where"]:checked')].map(b => b.value),
    country: f.elements.country.value
  };
}

function renderScoreResults(updateUrl) {
  const box = document.getElementById("score-results");
  if (!box) return;
  const s = readScoreForm();
  document.getElementById("score-country-box")?.classList.toggle("hidden", !s.where.includes("abroad"));

  if (updateUrl) {
    const p = new URLSearchParams();
    ["hs", "eng", "math", "arb"].forEach(k => { if (s[k] != null) p.set(k, s[k]); });
    if (s.stream === "arts") p.set("stream", "arts");
    if (s.where.length < SCORE_WHERE.length) p.set("where", s.where.join(","));
    if (s.country) p.set("country", s.country);
    history.replaceState(null, "", location.pathname + (p.toString() ? `?${p}` : ""));
  }

  const badHs = s.hsRaw !== "" && (s.hs == null || s.hs < 50);
  document.getElementById("score-hs-error")?.classList.toggle("hidden", !badHs);
  if (s.hs == null || badHs) { box.innerHTML = `<p class="text-sm text-slate-600">${t('score_empty')}</p>`; return; }
  if (!s.where.length) { box.innerHTML = `<p class="text-sm text-slate-600">${t('score_pick_where')}</p>`; return; }

  const unis = window.KUWAIT_LOCAL_UNIVERSITIES || [];
  box.innerHTML = s.where.map(w => {
    if (w === "abroad") return scoreAbroadHtml(s);
    const u = unis.find(x => x.id === SCORE_UNI_IDS[w]);
    return u ? scoreLocalHtml(u, s) : "";
  }).join("");
}

// Above / Close / Below. "min": a minimum to apply (close = less than 3 points above it).
// "lowest": last year's lowest admitted score (close = within 1 point of it).
function scoreStatus(score, floor, kind) {
  if (kind === "min") return score < floor ? "below" : score < floor + 3 ? "close" : "above";
  return score >= floor + 1 ? "above" : score >= floor - 1 ? "close" : "below";
}

function scorePct(n) {
  return `${formatNumber(n, 2)}%`;
}

function scoreRow(name, url, meta, status) {
  const title = url ? `<a href="${url}" class="font-bold text-slate-900 hover:underline">${name}</a>` : `<span class="font-bold text-slate-900">${name}</span>`;
  return `<li class="score-row"><div class="min-w-0">${title}<p class="text-xs text-slate-600 mt-0.5">${meta}</p></div><span class="score-chip score-chip-${status}">${t('score_st_' + status)}</span></li>`;
}

function scoreSection(title, sub, body, foot) {
  return `
    <section class="bg-white border border-slate-300 rounded-xl p-5 shadow-sm mb-5">
      <h2 class="text-lg font-extrabold text-slate-900">${title}</h2>
      ${sub ? `<p class="text-sm text-slate-600 mt-1">${sub}</p>` : ""}
      <div class="mt-4">${body}</div>
      ${foot ? `<p class="text-xs text-slate-500 mt-4">${foot}</p>` : ""}
    </section>`;
}

// Rows grouped Above / Close / Below (and "science stream only"); the groups fold away
function scoreGroups(items, groupKey) {
  return ["above", "close", "below", "stream", "need"].map(st => {
    const list = items.filter(i => i.status === st);
    if (!list.length) return "";
    return `
      <details class="score-group"${st === "above" || st === "close" ? " open" : ""}>
        <summary><span class="font-bold text-slate-900">${t(`${groupKey}_${st}`).replace("{n}", list.length)}</span></summary>
        <ul class="mt-2 space-y-2">${list.map(i => i.html).join("")}</ul>
      </details>`;
  }).join("");
}

// Scholarships abroad: every plan major against its minimum, in one country or the lowest anywhere
function scoreAbroadHtml(s) {
  const ar = isArabic();
  const names = window.PLAN_COUNTRIES || {};
  const countryName = c => ar ? (names[c] || c) : c;
  const countries = s.country ? [s.country] : Object.keys(names);
  const items = (window.PLAN_MAJORS || []).map(m => {
    const offered = countries.filter(c => c in m.minPct);
    if (!offered.length) return null;
    const best = offered.reduce((a, c) => (m.minPct[c] < m.minPct[a] ? c : a));
    const min = m.minPct[best];
    const status = s.stream === "arts" && m.stream === "science" ? "stream" : scoreStatus(s.hs, min, "min");
    const meets = offered.filter(c => s.hs >= m.minPct[c]).length;
    const url = `results.html?major=${encodeURIComponent(m.id)}${s.country ? `&country=${encodeURIComponent(s.country)}&step=3` : ""}`;
    const meta = (s.country ? t('score_min').replace("{pct}", scorePct(min))
      : t('score_lowest_min').replace("{pct}", scorePct(min)).replace("{country}", countryName(best)))
      + (m.unconfirmed?.includes(best) ? ` ${flag('unconfirmed')}` : "")
      + (!s.country && status !== "stream" ? ` · ${t('score_meets_in').replace("{n}", meets).replace("{m}", offered.length)}` : "");
    return { status, html: scoreRow(escapeHtml(ar ? m.ar : m.en), url, meta, status) };
  }).filter(Boolean);
  const meetsCount = items.filter(i => i.status === "above" || i.status === "close").length;
  const sub = t('score_abroad_summary').replace("{n}", meetsCount).replace("{m}", items.length)
    .replace("{where}", s.country ? t('score_in_country').replace("{country}", countryName(s.country)) : "");
  return scoreSection(t('score_where_abroad'), sub, scoreGroups(items, 'score_group_min'),
    `${t('score_abroad_ranked')} ${t('score_source_plan')}`);
}

// "80% science / 85% arts" -> that stream's number; "65.38 - 76.56%" -> a range; "90%" -> one number
function scoreFloors(text, stream) {
  const str = String(text || "");
  const byStream = [...str.matchAll(/(\d+(?:\.\d+)?)%\s*(science|arts)/g)];
  if (byStream.length) {
    const m = byStream.find(x => x[2] === stream);
    return m ? { low: +m[1], high: +m[1] } : { streamOnly: true };
  }
  const nums = (str.match(/\d+(?:\.\d+)?/g) || []).map(Number);
  return nums.length ? { low: Math.min(...nums), high: Math.max(...nums) } : null;
}

// A Kuwait university: each college (or major) against its lowest admitted score or minimum.
// Kuwait University compares the equivalent average (school % + Qudrat, with each college's
// weights); AASU and PUC publish minimums to apply, which are high school percentages.
function scoreLocalHtml(u, s) {
  const ar = isArabic();
  const isKu = u.id === "kuwait-university";
  const kind = isKu ? "lowest" : "min";
  const formulas = window.KUWAIT_QUDRAT?.formulas || [];
  const testNames = { eng: t('score_eng'), math: t('score_math'), arb: t('score_arb') };
  const general = u.generalMin?.[s.stream];
  const items = [];

  u.colleges.forEach(c => {
    const cName = ar ? (c.collegeNameAr || c.collegeName) : c.collegeName;
    const formula = c.weights ? { weights: c.weights } : c.qudrat ? formulas.find(f => f.collegeEn === c.qudrat) : null;
    const usesQudrat = formula && c.scoring !== "hs-only" && c.scoring !== "no-qudrat";
    const missing = usesQudrat ? Object.keys(formula.weights).filter(k => k !== "hs" && formula.weights[k] > 0 && s[k] == null) : [];
    const equiv = usesQudrat && !missing.length
      ? Object.entries(formula.weights).reduce((sum, [k, w]) => sum + w * (k === "hs" ? s.hs : s[k]), 0) : null;
    // Kuwait University's own high school condition for the college ("High school 85% or more")
    const hsNeed = parseFloat((formula?.conditionEn || "").match(/^High school (\d+)%/)?.[1]);
    // The score this college is compared on
    const score = isKu && usesQudrat ? equiv : s.hs;
    const yours = equiv != null ? t('score_your_equiv').replace("{pct}", scorePct(equiv)) : t('score_your_hs').replace("{pct}", scorePct(s.hs));

    const rowsFor = [];
    const graded = (c.majors || []).filter(m => m.grade);
    if (graded.length) {
      graded.forEach(m => rowsFor.push({ name: `${cName}: ${ar ? (m.ar || m.en) : m.en}`, floors: scoreFloors(m.grade, s.stream) }));
      const all = scoreFloors(c.minThanawiya, s.stream);
      const lowestMajor = Math.min(...graded.map(m => parseFloat(m.grade)));
      if (all && all.low < lowestMajor) rowsFor.push({ name: `${cName}: ${t('score_other_majors')}`, floors: { low: all.low, high: all.low } });
    } else {
      rowsFor.push({ name: cName, floors: scoreFloors(c.minThanawiya, s.stream) }); // the English text says "science" / "arts"
    }

    rowsFor.forEach(r => {
      let status, meta;
      const f = r.floors;
      if (!f) return;
      const floorText = f.low === f.high ? scorePct(f.low) : t('score_range').replace("{low}", scorePct(f.low)).replace("{high}", scorePct(f.high));
      const floorLine = (kind === "lowest" ? t('score_lowest') : t('score_min')).replace("{pct}", floorText);
      if (f.streamOnly) { status = "stream"; meta = escapeHtml(ar ? (c.minThanawiyaAr || c.minThanawiya) : c.minThanawiya); }
      else if (general && s.hs < general) { status = "below"; meta = t('score_general_below').replace("{pct}", scorePct(general)); }
      else if (hsNeed && s.hs < hsNeed) { status = "below"; meta = t('score_hs_need').replace("{pct}", scorePct(hsNeed)); }
      else if (score == null) { status = "need"; meta = `${floorLine} · ${t('score_add_tests').replace("{tests}", missing.map(k => testNames[k]).join(ar ? " و" : " and "))}`; }
      else { status = scoreStatus(score, f.low, kind); meta = `${floorLine} · ${yours}`; }
      const cond = L(c, 'condition');
      if (cond) meta += `<br><span class="text-slate-500">${escapeHtml(cond)}</span>`;
      items.push({ status, html: scoreRow(escapeHtml(r.name), "local-universities.html", meta, status) });
    });
  });

  const sub = `${escapeHtml(L(u, 'floorLabel'))}${general ? ` · ${t('score_general_min').replace("{pct}", scorePct(general))}` : ""}`;
  return scoreSection(escapeHtml(ar ? u.nameAr : u.name), sub, scoreGroups(items, isKu ? 'score_group_lowest' : 'score_group_min'),
    escapeHtml(ar ? (u.sourceNoteAr || u.sourceNote) : u.sourceNote));
}

// =========================================================================
// 10i. Resources page (resources.html): official links, grouped
// =========================================================================
function initResourcesPage() {
  renderResourcesPage();
  window.addEventListener("languageChanged", renderResourcesPage);
  revealHashTarget();
}

function renderResourcesPage() {
  const root = document.getElementById("resources-root");
  const data = window.RESOURCES;
  if (!root || !data) return;
  const ar = isArabic();
  const host = url => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
  root.innerHTML = data.groups.map(g => `
    <section id="${g.id}" class="scroll-mt-24 bg-white border border-slate-300 rounded-xl p-5 shadow-sm">
      <h2 class="text-lg font-extrabold text-slate-900 mb-3">${escapeHtml(L(g, 'title'))}</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${g.items.map(i => {
          const url = ar ? (i.urlAr || i.url) : i.url;
          return `
          <li>
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="resource-link block h-full p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-olive-700 transition">
              <span class="flex items-center gap-1.5 font-bold text-olive-900">${escapeHtml(L(i, 'label'))} ${ICON_EXTERNAL}</span>
              <span class="block text-sm text-slate-600 mt-1">${escapeHtml(L(i, 'desc'))}</span>
              <span class="block text-xs text-slate-400 mt-1" dir="ltr">${escapeHtml(host(url))}</span>
            </a>
          </li>`;
        }).join("")}
      </ul>
    </section>`).join("");
  const meta = document.getElementById("resources-meta");
  if (meta) meta.textContent = `${t('last_verified_full')} ${formatDate(data.lastVerified)}.`;
}

// =========================================================================
// 10e. Ask us page
// =========================================================================
function initAskPage() {
  const form = document.getElementById("ask-form");
  if (!form) return;
  const email = window.SITE_CONFIG?.askEmail || "";
  const notice = document.getElementById("ask-email-notice");
  const status = document.getElementById("ask-status");
  const question = document.getElementById("ask-question");
  const topic = document.getElementById("ask-topic");
  const counter = document.getElementById("ask-counter");
  const MAX = 1500;

  notice?.classList.toggle("hidden", !!email);
  question?.setAttribute("maxlength", String(MAX));
  const fromSearch = new URLSearchParams(location.search).get("q");
  if (question && fromSearch && !question.value) question.value = fromSearch.slice(0, MAX);
  const updateCounter = () => { if (counter) counter.textContent = `${question.value.length} / ${MAX}`; };
  question?.addEventListener("input", updateCounter);
  updateCounter();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = question.value.trim();
    if (text.length < 10) {
      status.textContent = t('ask_too_short');
      status.className = "text-sm font-semibold text-amber-800";
      question.focus();
      return;
    }
    const topicLabel = topic.options[topic.selectedIndex]?.text || "";
    const body = `${t('ask_topic')}: ${topicLabel}\n\n${text}`;

    if (email) {
      const subject = `${t('ask_email_subject')} - ${topicLabel}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = t('ask_opened_email');
      status.className = "text-sm font-semibold text-emerald-800";
      return;
    }

    // No address yet: let the student keep their question
    copyText(body).then(
      () => { status.textContent = t('ask_copied'); status.className = "text-sm font-semibold text-emerald-800"; },
      () => { status.textContent = t('ask_not_ready'); status.className = "text-sm font-semibold text-amber-800"; }
    );
  });
}


// =========================================================================
// 10f. How to Apply: Ministry scholarship checklist (apply-steps-data.js)
// =========================================================================
const STEPS_KEY = "moustaqbili_apply_steps";

// Ticked step ids, kept in this browser only. Storage can be unavailable (private mode), so never fail.
function loadTickedSteps(key = STEPS_KEY) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); } catch (e) { return new Set(); }
}
function saveTickedSteps(set, key = STEPS_KEY) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch (e) { /* ignore */ }
}

function initApplySteps() {
  if (!window.APPLY_STEPS || !document.getElementById("apply-steps")) return;
  renderApplySteps();
  window.addEventListener("languageChanged", renderApplySteps);
  document.getElementById("steps-reset")?.addEventListener("click", () => {
    saveTickedSteps(new Set());
    renderApplySteps();
  });
}

function updateStepsProgress(ticked, total) {
  const done = ticked.size;
  const progress = document.getElementById("steps-progress");
  const bar = document.getElementById("steps-bar");
  if (progress) progress.textContent = t('steps_progress').replace("{done}", done).replace("{total}", total);
  if (bar) bar.style.width = `${Math.round((done / total) * 100)}%`;
}

function renderApplySteps() {
  const data = window.APPLY_STEPS;
  const list = document.getElementById("apply-steps");
  if (!data || !list) return;
  const ar = isArabic();
  const ticked = loadTickedSteps();
  // Remember which steps were open so a language switch does not collapse them
  const open = new Set([...list.querySelectorAll("details[open]")].map(d => d.dataset.step));

  list.innerHTML = data.steps.map((s, i) => {
    const done = ticked.has(s.id);
    return `
      <li class="step-item ${done ? 'is-done' : ''}">
        <label class="step-check" title="${t('steps_mark_done')}">
          <input type="checkbox" data-step="${s.id}" ${done ? 'checked' : ''} aria-label="${t('steps_mark_done')}: ${L(s, 'title')}">
          <span class="step-num" aria-hidden="true">${i + 1}</span>
        </label>
        <details class="step-details" data-step="${s.id}" ${open.has(s.id) ? 'open' : ''}>
          <summary>
            <span class="step-title">${L(s, 'title')}</span>
            <span class="step-summary">${L(s, 'summary')}</span>
          </summary>
          <ul class="mt-3 space-y-2.5 text-sm text-slate-700 leading-relaxed">
            ${s.points.map(p => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${withFlags(ar ? p.ar : p.en)}${p.flag ? ` ${flag(p.flag)}` : ''}</span></li>`).join("")}
          </ul>
          ${s.links.length ? `<div class="mt-4 flex flex-wrap gap-2">${s.links.map(l => {
            const external = /^https?:/.test(l.url);
            return `<a href="${l.url}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm font-semibold text-olive-900">${L(l, 'label')}${external ? ` ${ICON_EXTERNAL}` : ''}</a>`;
          }).join("")}</div>` : ''}
        </details>
      </li>`;
  }).join("");

  list.querySelectorAll('input[type="checkbox"]').forEach(box => box.addEventListener("change", () => {
    const set = loadTickedSteps();
    if (box.checked) set.add(box.dataset.step); else set.delete(box.dataset.step);
    saveTickedSteps(set);
    box.closest(".step-item").classList.toggle("is-done", box.checked);
    updateStepsProgress(set, data.steps.length);
  }));

  const merit = document.getElementById("steps-merit");
  if (merit) merit.innerHTML = withFlags(L(data, 'meritNote'));
  const meta = document.getElementById("steps-meta");
  if (meta) meta.textContent = `${t('steps_sources')} ${t('last_verified_full')} ${formatDate(data.lastVerified)}.`;
  updateStepsProgress(ticked, data.steps.length);
}

// =========================================================================
// 11. Local Kuwait universities
// =========================================================================
// Score weights for a college: Kuwait University's official Qudrat table (qudrat-data.js),
// or the college's own weights (PUC). Returns [{ code, weight }] or null.
function collegeWeights(c) {
  if (c.weights) return Object.entries(c.weights);
  const formula = c.qudrat && window.KUWAIT_QUDRAT?.formulas.find(f => f.collegeEn === c.qudrat);
  return formula ? Object.entries(formula.weights) : null;
}

function scorePartName(code) {
  if (code === "hs") return t('equiv_hs');
  const s = window.KUWAIT_QUDRAT?.subjects.find(x => x.code === code);
  return s ? L(s, 'name') : code;
}

// One college as a flip card: the name and lowest admitted grade on the front;
// how the score is counted, extra conditions and majors on the back
function collegeRow(c, floorLabel, source = "") {
  const ar = isArabic();
  const weights = collegeWeights(c);
  const formula = c.qudrat && window.KUWAIT_QUDRAT?.formulas.find(f => f.collegeEn === c.qudrat);
  // Extra requirements: KU's official table, or the college's own (e.g. AASU)
  const condition = (formula ? L(formula, 'condition') : "") || L(c, 'condition');

  let scoring = "";
  if (weights) {
    scoring = weights.map(([code, w]) => `<span class="req-chip"><span>${scorePartName(code)}</span><strong>${+(w * 100).toFixed(1)}%</strong></span>`).join("");
  } else if (c.scoring === "hs-only") {
    scoring = `<span class="req-chip"><span>${t('local_hs_only')}</span></span>`;
  } else if (c.scoring === "no-qudrat") {
    scoring = `<span class="req-chip"><span>${t('local_no_qudrat')}</span></span>`;
  }

  const majors = (c.majors || []).map(m => `
    <span class="major-pill">
      <span class="major-pill-name">${ar ? m.ar : m.en}</span>
      ${m.grade ? `<span class="major-pill-grade" dir="ltr">${m.grade}</span>` : ''}
    </span>`).join("");

  const line = (label, content, extra = "") => content ? `
    <div class="college-line">
      <span class="college-line-label">${label}</span>
      <div class="flex flex-wrap items-center gap-1.5">${content}${extra}</div>
    </div>` : "";

  const name = ar ? (c.collegeNameAr || c.collegeName) : c.collegeName;
  const details = [
    line(t('local_how_counted'), scoring),
    line(t('equiv_condition'), condition.split(/[;؛]/).map(s => s.trim()).filter(Boolean).map(s => `<span class="req-chip is-condition"><span>${s}</span></span>`).join("")),
    line(c.majors?.some(m => m.grade) ? t('local_majors_grades') : t('local_majors'), majors, c.majorsFlag ? ` ${flag(c.majorsFlag)}` : "")
  ].join("").trim();

  return revealCard({
    question: name,
    flip: true,
    front: `
      <span class="college-card-name">${name}</span>
      <span class="mt-3 flex flex-wrap items-center gap-2">
        <span class="grade-pill ${c.flag ? 'is-missing' : ''}">
          <span class="grade-pill-label">${floorLabel}</span>
          <span class="grade-pill-value" dir="auto">${ar ? (c.minThanawiyaAr || c.minThanawiya) : c.minThanawiya}</span>
        </span>
        ${c.flag ? flag(c.flag) : ''}
      </span>`,
    // Main fact: how the score is counted; everything else is in the university's own document
    back: factBack(weights ? `${t('local_how_counted')}: ${weights.map(([code, w]) => `${scorePartName(code)} ${+(w * 100).toFixed(1)}%`).join(" · ")}`
      : c.scoring === "hs-only" ? t('local_hs_only') : c.scoring === "no-qudrat" ? t('local_no_qudrat') : t('local_no_details'), source)
  });
}

// One fact about a university (who pays, how you get in, tests) as a flip card
function universityFactCard(title, text, source = "") {
  return revealCard({
    question: title,
    flip: true,
    front: `<span class="college-card-name">${title}</span>`,
    back: factBack(text, source)
  });
}

// =========================================================================
// 11b. Local Kuwait universities page
// =========================================================================
function initLocalUniversitiesPage() {
  const container = document.getElementById("local-unis-container");
  if (!container) return;

  const isAr = isArabic();
  container.innerHTML = "";

  (window.KUWAIT_LOCAL_UNIVERSITIES || []).forEach(uni => {
    const card = document.createElement("article");
    card.id = uni.id;
    card.className = "bg-white rounded-xl border border-slate-300 p-6 shadow-sm mb-6 scroll-mt-24";
    const pick = (en, ar) => isAr ? (uni[ar] || uni[en]) : uni[en];
    // The official page behind this university's cards
    const source = { "kuwait-university": "ku_admission", aasu: "aasu", puc: "puc" }[uni.id] || "";

    card.innerHTML = `
      <div class="border-b border-slate-200 pb-4 mb-4">
        <span class="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">${pick('typeEn', 'typeAr')}</span>
        <h2 class="text-xl font-black text-slate-900 mt-2">${pick('name', 'nameAr')}</h2>
        <p class="text-xs text-slate-600 mt-1">${pick('campusLocation', 'campusLocationAr')}</p>
      </div>

      <p class="text-sm text-slate-600 mb-3">${t('local_flip_hint')}</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 items-start mb-6">
        ${universityFactCard(t('local_funding'), pick('scholarshipFunding', 'scholarshipFundingAr'), source)}
        ${universityFactCard(t('local_admission'), pick('admissionSystem', 'admissionSystemAr'), uni.id === "kuwait-university" ? "ku_admission" : source)}
        ${universityFactCard(t('local_aptitude'), pick('aptitudeExams', 'aptitudeExamsAr'), uni.id === "kuwait-university" ? "ku_colleges" : source)}
      </div>

      <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">${t('local_colleges')}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
        ${uni.colleges.map(c => collegeRow(c, pick('floorLabelEn', 'floorLabelAr'), uni.id === "kuwait-university" ? "ku_colleges" : source)).join("")}
      </div>
      ${uni.sourceNote ? `<p class="text-xs text-slate-400 mt-3">${pick('sourceNote', 'sourceNoteAr')}</p>` : ''}
    `;
    container.appendChild(card);
  });
  initRevealCards(container);
}

// =========================================================================
// 12. Language change: re-render dynamic views
// =========================================================================
window.addEventListener("languageChanged", () => {
  const page = currentPageFile();
  if (page === "index.html") renderQudratHomeBanner();
  if (page === "results.html") {
    rerenderResults?.();
    if (openModal?.kind === "requirements") openRequirementsModal(openModal.prog);
    if (openModal?.kind === "salary") openSalaryModal(openModal.prog, true);
  }
  if (page === "local-universities.html") initLocalUniversitiesPage();
});

// =========================================================================
// 13. Feedback widget (results page)
// =========================================================================
function initFeedbackWidget() {
  const widget = document.getElementById("helpful-feedback-widget");
  if (!widget) return;

  const btnYes = document.getElementById("feedback-btn-yes");
  const btnNo = document.getElementById("feedback-btn-no");
  const commentSection = document.getElementById("feedback-comment-section");
  const submitCommentBtn = document.getElementById("feedback-submit-comment");
  const thankYouBox = document.getElementById("feedback-thankyou");
  const ratingPrompt = document.getElementById("feedback-prompt");
  let selectedVote = null;

  btnYes?.addEventListener("click", () => {
    selectedVote = "yes";
    btnYes.classList.add("bg-emerald-700", "text-white");
    btnNo?.classList.remove("bg-red-700", "text-white");
    commentSection?.classList.remove("hidden");
  });

  btnNo?.addEventListener("click", () => {
    selectedVote = "no";
    btnNo.classList.add("bg-red-700", "text-white");
    btnYes?.classList.remove("bg-emerald-700", "text-white");
    commentSection?.classList.remove("hidden");
  });

  submitCommentBtn?.addEventListener("click", () => {
    const record = { vote: selectedVote, comment: document.getElementById("feedback-text")?.value || "", timestamp: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem("moustaqbili_feedback") || "[]");
      existing.push(record);
      localStorage.setItem("moustaqbili_feedback", JSON.stringify(existing));
    } catch (e) { /* storage unavailable */ }
    ratingPrompt?.classList.add("hidden");
    commentSection?.classList.add("hidden");
    thankYouBox?.classList.remove("hidden");
  });
}

// =========================================================================
// 11. Site search (search.html)
// The search box in the header sends ?q= here. Every data file is loaded on this page,
// so one index covers majors, programs, countries, Kuwait, questions, guides and contacts.
// Each result links to the exact place: a filtered results page, or a page section (#id).
// =========================================================================
const SEARCH_GROUPS = ["majors", "programs", "countries", "kuwait", "questions", "topics", "resources", "contacts", "pages"];
const SEARCH_GROUP_LIMIT = 5; // results shown per group before "Show all"

// Everyday words students type, mapped to the words the site uses
const SEARCH_SYNONYMS = {
  doctor: ["medicine", "medical"], med: ["medicine", "medical"], dental: ["dentistry", "dental"],
  money: ["allowance", "stipend"], salary: ["allowance", "stipend"], stipend: ["allowance"], pay: ["allowance", "paid"],
  uni: ["university"], college: ["university", "college"], aptitude: ["qudrat"],
  uk: ["united kingdom", "britain"], britain: ["united kingdom"], england: ["united kingdom"],
  usa: ["united states"], america: ["united states"], us: ["united states"], uae: ["united arab emirates"],
  english: ["ielts", "toefl", "english"],
  "طبيب": ["طب"], "راتب": ["مخصص", "مكافاه"], "فلوس": ["مخصص"], "امريكا": ["الولايات المتحده"], "بريطانيا": ["المملكه المتحده"]
};

// Lower-case, and make Arabic spelling variants equal (أ/إ/آ = ا, ة = ه, ى = ي, no diacritics)
function normalizeSearch(str) {
  return String(str ?? "")
    .toLowerCase()
    .replace(/\{\{(unconfirmed|unverified)\}\}|\*\*/g, " ")
    .replace(/[ً-ْـ]/g, "")
    .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}%@.]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// All "...En" (or "...Ar") strings inside a data record, including nested blocks and lists
function collectText(value, suffix, out = []) {
  if (Array.isArray(value)) value.forEach(v => collectText(v, suffix, out));
  else if (value && typeof value === "object") {
    for (const [key, v] of Object.entries(value)) {
      if (key.endsWith(suffix) && typeof v === "string") out.push(v);
      else if (key.endsWith(suffix) && Array.isArray(v)) v.forEach(x => typeof x === "string" ? out.push(x) : collectText(x, suffix, out));
      else if (typeof v === "object") collectText(v, suffix, out);
    }
  }
  return out;
}

function buildSearchIndex() {
  const tr = (key, lang) => window.MOUSTAQBILI_TRANSLATIONS?.[lang]?.[key] ?? key;
  const entries = [];
  // Joins short pieces of text ("10 KWD", "per test") as sentences, so a direct answer stops where a card does
  const sentences = list => list.map(x => String(x).trim()).filter(Boolean).map(x => /[.!?؟:]$/.test(x) ? x : `${x}.`).join(" ");
  const add = (group, url, titleEn, titleAr, textEn, textAr, keywords = "") =>
    entries.push({ group, url, titleEn, titleAr: titleAr || titleEn, textEn: textEn || "", textAr: textAr || textEn || "", keywords });

  // Majors in the 2026/2027 plan -> results filtered to that major
  const countryAr = c => window.PLAN_COUNTRIES?.[c] || c;
  (window.PLAN_MAJORS || []).forEach(m => {
    const disc = (window.PLAN_DISCIPLINES || []).find(d => d.id === m.discipline);
    const list = Object.entries(m.minPct);
    add("majors", `results.html?major=${encodeURIComponent(m.id)}`, m.en, m.ar,
      `${disc?.en || ""}. Lowest % accepted: ${list.map(([c, p]) => `${c} ${p}%`).join(", ")}.`,
      `${disc?.ar || ""}. أقل نسبة مقبولة: ${list.map(([c, p]) => `${countryAr(c)} ${p}%`).join("، ")}.`);
  });

  // Detailed scholarship programs -> results for that country and major.
  // Everything behind the program's tabs and pop-ups (exams, deadlines, visa, money) is searchable too.
  const skipKeys = new Set(["id", "levels", "planMajors", "verifiedFields", "country", "countryAr", "title", "titleAr", "isMerit", "category"]);
  const leafText = (obj, out = []) => {
    if (typeof obj === "string") out.push(/[.!?؟:]$/.test(obj.trim()) ? obj.trim() : `${obj.trim()}.`);
    else if (Array.isArray(obj)) obj.forEach(v => leafText(v, out));
    else if (obj && typeof obj === "object") Object.entries(obj).forEach(([k, v]) => { if (!skipKeys.has(k)) leafText(v, out); });
    return out;
  };
  (window.MOUSTAQBILI_PROGRAMS || []).forEach(p => {
    const ar = window.MOUSTAQBILI_PROGRAMS_AR?.[p.id] || {};
    const params = new URLSearchParams({ country: p.country });
    if (p.planMajors?.[0]) params.set("major", p.planMajors[0]);
    const { accreditedUniversities, majors, ...details } = p;
    const { accreditedUniversities: arUnis, majors: arMajors, ...arDetails } = ar;
    add("programs", `results.html?${params}`, `${p.title} - ${p.country}`, `${p.titleAr || p.title} - ${p.countryAr || p.country}`,
      `${p.category}. ${majors.join(", ")}. ${accreditedUniversities.join(", ")}. ${leafText(details).join(" ")}`,
      `${(arMajors || majors).join("، ")}. ${(arUnis || accreditedUniversities).join("، ")}. ${leafText(arDetails).join(" ")}`);
  });

  // Monthly allowance per country (More Info table), used by countries and the money section
  const allowances = window.MORE_INFO?.allowances || [];
  const allowanceText = (a, lang) => !a ? "" : lang === "ar"
    ? `المخصص الشهري ${a.countryAr}: ${a.standard} ${a.currency}${a.merit ? `، التميز ${a.merit} ${a.currency}` : ""}.`
    : `Monthly allowance in ${a.countryEn}: ${a.standard} ${a.currency}${a.merit ? `, merit ${a.merit} ${a.currency}` : ""}.`;

  // Countries -> results for that country
  (getFilterConfig().countries || []).forEach(c => {
    const count = (window.PLAN_MAJORS || []).filter(m => c.value in m.minPct).length;
    const a = allowances.find(x => x.countryEn === c.value);
    add("countries", `results.html?country=${encodeURIComponent(c.value)}`, c.label, c.labelAr,
      `Scholarships in ${c.label}: ${count} majors in the 2026/2027 plan. ${allowanceText(a, "en")}`,
      `البعثات في ${c.labelAr}: ${count} تخصص في خطة 2026/2027. ${allowanceText(a, "ar")}`);
  });

  // Universities and colleges in Kuwait, with what is on the back of each card
  // (lowest admitted per major, conditions, how the score is counted)
  const weightText = (w, lang) => !w ? "" : Object.entries(w).map(([k, v]) =>
    `${lang === "ar" ? { hs: "الثانوية", eng: "الإنجليزي", math: "الرياضيات", arb: "العربي" }[k] : { hs: "high school", eng: "English", math: "Math", arb: "Arabic" }[k]} ${Math.round(v * 1000) / 10}%`).join(lang === "ar" ? " + " : " + ");
  (window.KUWAIT_LOCAL_UNIVERSITIES || []).forEach(u => {
    const url = `local-universities.html#${u.id}`;
    add("kuwait", url, u.name, u.nameAr,
      `${u.scholarshipFunding}. ${u.admissionSystem} ${u.aptitudeExams || ""} ${u.campusLocation ? `Campus: ${u.campusLocation}.` : ""} ${u.sourceNote || ""}`,
      `${u.scholarshipFundingAr || ""}. ${u.admissionSystemAr || ""} ${u.aptitudeExamsAr || ""} ${u.campusLocationAr ? `المقر: ${u.campusLocationAr}.` : ""} ${u.sourceNoteAr || ""}`);
    (u.colleges || []).forEach(c => {
      const majors = c.majors || [];
      const formula = c.weights || (window.KUWAIT_QUDRAT?.formulas || []).find(f => f.collegeEn === c.qudrat)?.weights;
      add("kuwait", url, `${c.collegeName} - ${u.name}`, `${c.collegeNameAr || c.collegeName} - ${u.nameAr}`,
        `${c.minThanawiya ? `${u.floorLabelEn || "Lowest admitted"}: ${c.minThanawiya}. ` : ""}${majors.map(m => typeof m === "string" ? m : `${m.en}${m.grade ? ` ${m.grade}` : ""}`).join(", ")}. ${formula ? `Score counted as ${weightText(formula, "en")}.` : ""} ${c.conditionEn || ""}`,
        `${c.minThanawiya ? `${u.floorLabelAr || "أدنى معدل مقبول"}: ${c.minThanawiyaAr || c.minThanawiya}. ` : ""}${majors.map(m => typeof m === "string" ? m : `${m.ar || m.en}${m.grade ? ` ${m.grade}` : ""}`).join("، ")}. ${formula ? `تُحسب الدرجة: ${weightText(formula, "ar")}.` : ""} ${c.conditionAr || ""}`);
    });
  });

  // Common questions -> that question, opened
  (window.CLARIFICATIONS?.items || []).forEach(i =>
    add("questions", `clarifications.html#${i.id}`, i.questionEn, i.questionAr, i.answerEn, i.answerAr));

  // Cards anywhere in the guides: a question with its answer (front) and details (back), a term with
  // its meaning, or a titled box. Each one is its own result, so its answer can be shown directly.
  const addCards = (value, url) => {
    if (Array.isArray(value)) return value.forEach(v => addCards(v, url));
    if (!value || typeof value !== "object") return;
    if (value.questionEn && (value.answerEn || value.factEn)) {
      const line = (x, lang) => [x[`answer${lang}`], x[`sub${lang}`]].filter(Boolean).join(" ") + ". " + (x[`fact${lang}`] || "");
      add("topics", url, value.questionEn, value.questionAr, line(value, "En"), line(value, "Ar"));
    } else if (value.termEn && value.defEn) {
      add("topics", url, value.termEn, value.termAr, value.defEn, value.defAr);
    } else if (value.titleEn && value.bodyEn && !value.blocks) {
      add("topics", url, value.titleEn, value.titleAr, value.bodyEn, value.bodyAr);
    }
    Object.values(value).forEach(v => { if (v && typeof v === "object") addCards(v, url); });
  };
  (window.MORE_INFO?.sections || []).forEach(s => addCards(s.blocks, `more-info.html#${s.id}`));
  if (window.KUWAIT_QUDRAT) {
    addCards([window.KUWAIT_QUDRAT.currentCycle?.basics, window.KUWAIT_QUDRAT.goodToKnow], "qudrat.html#current-cycle");
    // How Kuwait University counts each college's score
    (window.KUWAIT_QUDRAT.formulas || []).forEach(f => add("kuwait", "qudrat.html#equivalent",
      `${f.collegeEn}: equivalent average (Kuwait University)`, `${f.collegeAr}: المعدل المكافئ (جامعة الكويت)`,
      `${weightText(f.weights, "en")}. ${f.conditionEn || ""}`, `${weightText(f.weights, "ar")}. ${f.conditionAr || ""}`,
      "equivalent average weights المعدل المكافئ"));
  }

  // Official links (Resources page)
  (window.RESOURCES?.groups || []).forEach(g => (g.items || []).forEach(i => {
    add("resources", `resources.html#${g.id}`, i.labelEn, i.labelAr, i.descEn, i.descAr, `${g.keywords} ${i.url} link website official رابط موقع`);
    Object.assign(entries[entries.length - 1], { ext: i.url, extAr: i.urlAr || i.url }); // the answer links straight to it
  }));

  // Guides: More Info, Navigate, the application checklist, Qudrat
  (window.MORE_INFO?.sections || []).forEach(s => {
    const hasTable = (s.blocks || []).some(b => b.type === "allowances");
    add("topics", `more-info.html#${s.id}`, s.titleEn, s.titleAr,
      `${sentences(collectText(s, "En"))} ${hasTable ? allowances.map(a => allowanceText(a, "en")).join(" ") : ""}`,
      `${sentences(collectText(s, "Ar"))} ${hasTable ? allowances.map(a => allowanceText(a, "ar")).join(" ") : ""}`);
  });
  (window.NAVIGATE_GUIDE?.sections || []).forEach(s =>
    add("topics", `navigate.html#${s.id}`, s.titleEn, s.titleAr, sentences(collectText(s, "En")), sentences(collectText(s, "Ar"))));
  (window.APPLY_STEPS?.steps || []).forEach(s =>
    add("topics", "suggestions.html#scholarship-steps", s.titleEn, s.titleAr, sentences(collectText(s, "En")), sentences(collectText(s, "Ar")), "apply steps checklist"));
  const q = window.KUWAIT_QUDRAT;
  if (q) {
    add("topics", "qudrat.html#current-cycle", tr("nav_qudrat", "en"), tr("nav_qudrat", "ar"),
      sentences(collectText(q, "En")), sentences(collectText(q, "Ar")), "qudrat aptitude test dates register القدرات");
    add("topics", "qudrat.html#equivalent", tr("equiv_title", "en"), tr("equiv_title", "ar"),
      (q.formulas || []).map(f => f.collegeEn).join(", "), (q.formulas || []).map(f => f.collegeAr).join("، "), "equivalent score calculator weights المعدل المكافئ");
  }

  // Contacts -> that group on the Contact page
  (window.MOHE_CONTACTS?.groups || []).forEach(g => (g.entries || []).forEach(e => {
    // "Phone: +44 20 7761 8500." so the answer gives the number itself
    const pairs = lang => (e.items || []).map(it => `${it[`label${lang}`] || it.labelEn || ""}: ${it.value || ""}.`).join(" ");
    add("contacts", `contact.html#${g.id}`, `${e.nameEn} - ${g.titleEn}`, `${e.nameAr || e.nameEn} - ${g.titleAr || g.titleEn}`,
      `${e.descEn ? `${e.descEn}.` : ""} ${pairs("En")}`, `${e.descAr ? `${e.descAr}.` : ""} ${pairs("Ar")}`);
  }));

  // Pages, using the header names and the home-page descriptions (SITE_NAV / FOOTER_EXTRA are in layout.js)
  const pageDesc = { "score.html": "score_desc", "resources.html": "resources_desc", "results.html": "results_desc", "qudrat.html": "ql_qudrat_desc", "local-universities.html": "ql_local_desc", "suggestions.html": "ql_guide_desc", "clarifications.html": "ql_questions_desc", "more-info.html": "ql_more_desc", "contact.html": "ql_contact_desc", "navigate.html": "navigate_desc" };
  const pages = (typeof SITE_NAV !== "undefined" ? SITE_NAV : []).concat(typeof FOOTER_EXTRA !== "undefined" ? FOOTER_EXTRA : []);
  pages.forEach(p => {
    const d = pageDesc[p.href];
    const extra = { "resources.html": "resources links websites official useful مصادر روابط مواقع", "score.html": "chances competitive my score فرصتي نسبتي" }[p.href] || "";
    add("pages", p.href, tr(p.key, "en"), tr(p.key, "ar"), d ? tr(d, "en") : "", d ? tr(d, "ar") : "", extra);
  });

  // Normalised copies for matching, in both languages, so either language finds the result
  entries.forEach(e => {
    e._titles = [normalizeSearch(e.titleEn), normalizeSearch(e.titleAr)];
    e._hay = `${e._titles.join(" ")} ${normalizeSearch(e.textEn)} ${normalizeSearch(e.textAr)} ${normalizeSearch(e.keywords)}`;
  });
  return entries;
}

// Question and filler words. They are dropped, so a full question works like its key words.
const SEARCH_STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "am", "was", "be", "do", "does", "did", "i", "me", "my", "we", "you", "your",
  "it", "its", "to", "of", "in", "on", "at", "for", "from", "by", "with", "about", "and", "or", "if", "can", "could",
  "will", "would", "should", "how", "what", "which", "who", "when", "where", "why", "much", "many", "there", "this",
  "that", "these", "those", "get", "got", "want", "need", "know", "tell", "please", "any", "some", "into", "instead", "use",
  "study", "studying", "studies",
  "كم", "ما", "ماذا", "هل", "متى", "كيف", "اين", "لماذا", "في", "من", "الى", "على", "عن", "هي", "هو", "انا", "اريد",
  "ابي", "ابغى", "ممكن", "يمكن", "يمكنني", "لي", "او", "و", "مع", "هذا", "هذه", "التي", "الذي", "ان", "اذا", "عند", "بدل", "بدلا",
  "دراسة", "ادرس", "الدراسة"
].map(normalizeSearch));

// Words with the same meaning on this site, used on top of SEARCH_SYNONYMS
const SEARCH_MEANINGS = {
  cost: ["fee", "kwd", "cost"], price: ["fee", "kwd"], fee: ["fee", "kwd"], fees: ["fee", "kwd"], pay: ["fee", "allowance", "paid"],
  deadline: ["last day", "deadline", "register by", "closes"], last: ["last day", "deadline"], late: ["late", "deadline"],
  requirement: ["need", "requirement", "minimum"], requirements: ["need", "requirement", "minimum"],
  grade: ["grade", "percentage", "lowest"], grades: ["grade", "percentage", "lowest"], percentage: ["percentage", "lowest"], marks: ["grade", "percentage", "lowest"],
  register: ["register", "registration"], registration: ["register", "registration"], apply: ["apply", "register", "application"],
  exam: ["test", "exam"], test: ["test", "exam"],
  "شروط": ["شروط", "تحتاج", "متطلبات", "نسبه"], "رسوم": ["رسوم", "د.ك"], "سعر": ["رسوم", "د.ك"], "موعد": ["موعد", "اخر يوم"],
  "مخصص": ["مخصص", "مكافاه"], "جامعات": ["جامعه", "جامعات"], "تسجيل": ["تسجيل", "التسجيل"],
  airplane: ["flight"], ticket: ["flight", "ticket"], tickets: ["flight", "ticket"], "تذكره": ["تذكره", "طيران", "سفر"], "تذاكر": ["تذاكر", "طيران", "سفر"],
  defer: ["year later", "freeze", "delay"], postpone: ["year later", "freeze", "delay"], delay: ["year later", "freeze"],
  "تاجيل": ["بعد سنه", "تجميد"], "اجل": ["بعد سنه", "تجميد"]
};

// Rough word root, so "universities", "studies" or "tests" also find "university", "study", "test".
// Arabic: drop "ال" and "و/ب/ف/ل + ال" at the start ("والطب" finds "طب").
function searchStem(word) {
  if (/\p{Script=Arabic}/u.test(word)) return word.replace(/^(وال|بال|فال|لل|ال)(?=..)/, "");
  if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3);
  if (word.length > 5 && word.endsWith("ing")) return word.slice(0, -3);
  if (word.length > 4 && word.endsWith("ed")) return word.slice(0, -2);
  if (word.length > 4 && /(s|x|ch|sh)es$/.test(word)) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
}

// Letters to change to turn a into b, giving up once it passes `max` (for typo matching)
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, row[j]);
    }
    if (best > max) return max + 1;
    prev = row;
  }
  return prev[b.length];
}

// Does the text contain one of these forms at the start of a word? ("test" finds "tests",
// but "طب" does not find "تطبيق"). Symbols such as "%" can match anywhere.
function searchHas(text, alts) {
  const padded = ` ${text}`;
  return alts.some(a => /^[\p{L}\p{N}]/u.test(a) ? padded.includes(` ${a}`) : text.includes(a));
}

// The meaningful words of a query, each with the spellings that count as a match
function searchTerms(query, index) {
  const all = normalizeSearch(query).split(" ").filter(Boolean);
  const kept = all.filter(w => !SEARCH_STOPWORDS.has(w));
  const words = kept.length ? kept : all; // a query made only of small words still searches
  index._vocab = index._vocab || [...new Set(index.flatMap(e => e._hay.split(" ")).filter(w => w.length > 3))];
  const prefixes = ["ال", "وال", "بال", "فال", "لل", "و", "ب"];
  return words.map(w => {
    const stem = searchStem(w);
    const plain = w.replace(/\./g, ""); // "u.k." -> "uk"
    // Synonyms are looked up for the word, its root and its dot-free form ("الطبيب" uses the entry for "طبيب")
    const related = [w, stem, plain].flatMap(k => [...(SEARCH_SYNONYMS[k] || []), ...(SEARCH_MEANINGS[k] || [])]);
    const alts = new Set([w, stem, plain, ...related].map(normalizeSearch));
    // Arabic roots also match with their usual prefixes: "طب" finds "الطب" and "بالطب"
    [...alts].filter(a => /\p{Script=Arabic}/u.test(a) && !/^(ال|وال|بال|فال|لل)/.test(a))
      .forEach(a => prefixes.forEach(p => alts.add(p + a)));
    // Typos: a word found nowhere borrows the closest real words ("medcine" -> "medicine")
    if (w.length >= 5 && !index.some(e => searchHas(e._hay, [...alts]))) {
      const max = w.length >= 8 ? 2 : 1;
      index._vocab.filter(v => editDistance(w, v, max) <= max).slice(0, 5).forEach(v => alts.add(v));
    }
    return { word: w, alts: [...alts].filter(a => a.length > 1 || /\d|%/.test(a)) };
  });
}

function searchSite(query, index) {
  const phrase = normalizeSearch(query);
  if (!phrase) return [];
  const terms = searchTerms(query, index);
  const has = (text, t) => searchHas(text, t.alts);
  // Rare words count for more: "ireland" says more about what you want than "study"
  const weights = terms.map(t => {
    const found = index.filter(e => has(e._hay, t)).length;
    return found ? Math.log(1 + index.length / found) : 0;
  });
  const total = weights.reduce((s, w) => s + w, 0);
  if (!total) return [];

  return index.map(entry => {
    let matched = 0, score = 0;
    terms.forEach((t, i) => {
      if (!weights[i] || !has(entry._hay, t)) return;
      matched += weights[i];
      score += weights[i] * (entry._titles.some(title => has(title, t)) ? 3 : 1);
    });
    // Most of the meaning has to be there; the best covered results come first
    if (matched / total < 0.6) return { entry, score: 0 };
    for (const title of entry._titles) {
      if (title === phrase) score += 30;
      else if (title.includes(phrase)) score += 8;
    }
    return { entry, score: score * (matched / total) };
  })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score || SEARCH_GROUPS.indexOf(a.entry.group) - SEARCH_GROUPS.indexOf(b.entry.group));
}

// A short piece of text around the first matching word, with the matches highlighted
function searchSnippet(text, words) {
  const clean = String(text || "").replace(/\{\{(unconfirmed|unverified)\}\}|\*\*/g, "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  const lower = clean.toLowerCase();
  let at = -1;
  for (const w of words) { at = lower.indexOf(w); if (at >= 0) break; }
  const start = Math.max(0, at - 60);
  const piece = (start > 0 ? "…" : "") + clean.slice(start, start + 170) + (clean.length > start + 170 ? "…" : "");
  // Highlight in one pass on the plain text (longest words first), then make each part safe for HTML.
  // One pass means "ielts" is not marked again inside itself, and a search for "mark" can't break the tags.
  const marks = words.filter(w => w.length > 1).sort((a, b) => b.length - a.length)
    .map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!marks.length) return escapeHtml(piece);
  return piece.split(new RegExp(`(${marks.join("|")})`, "gi"))
    .map((part, i) => i % 2 ? `<mark>${escapeHtml(part)}</mark>` : escapeHtml(part))
    .join("");
}

let searchIndexCache = null;

function initSearchPage() {
  renderSearchPage();
  window.addEventListener("languageChanged", renderSearchPage);
}

function renderSearchPage() {
  const query = new URLSearchParams(window.location.search).get("q") || "";
  const ar = isArabic();
  const input = document.getElementById("search-page-input");
  const summary = document.getElementById("search-summary");
  const answerBox = document.getElementById("search-answer");
  const bestBox = document.getElementById("search-best");
  const home = currentPageFile() === "index.html";
  const box = document.getElementById("search-results");
  const suggest = document.getElementById("search-suggestions");
  if (!box) return;
  if (input && document.activeElement !== input) input.value = query;

  searchIndexCache = searchIndexCache || buildSearchIndex();
  const results = searchSite(query, searchIndexCache);
  // Highlight what actually matched (key words, their roots and their synonyms), not "how" or "do"
  const words = query.trim() ? [...new Set(searchTerms(query, searchIndexCache).flatMap(t => t.alts))].filter(w => w.length > 2) : [];
  const title = e => ar ? e.titleAr : e.titleEn;
  const text = e => ar ? e.textAr : e.textEn;

  renderHomeExamples();
  if (query || !home) document.title = query ? `${query} | ${t('search_title')} | moustaqbili` : `${t('search_title')} | moustaqbili`;
  if (summary) {
    summary.textContent = !query.trim() ? (home ? "" : t('search_empty_prompt'))
      : results.length ? t(results.length === 1 ? 'search_count_one' : 'search_count').replace("{n}", results.length).replace("{q}", query)
      : t('search_none').replace("{q}", query);
  }

  // Popular searches when the box is empty or nothing matched
  suggest?.classList.toggle("hidden", results.length > 0 || (home && !query.trim()));
  const chips = document.getElementById("search-suggestion-chips");
  if (chips) {
    const popular = ar ? ["الطب", "الأيلتس", "القدرات", "التميز", "المخصص الشهري", "بريطانيا", "التمريض", "الهندسة"]
                       : ["Medicine", "IELTS", "Qudrat", "Merit", "Allowance", "United Kingdom", "Nursing", "Engineering"];
    chips.innerHTML = popular.map(p => `<a href="index.html?q=${encodeURIComponent(p)}" class="px-3 py-1.5 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50">${escapeHtml(p)}</a>`).join("");
  }

  document.getElementById("search-why")?.classList.toggle("hidden", !query.trim() || results.length > 0);
  // Quick answer: a short, direct answer built from the site's data, above the results
  const answer = query.trim() ? searchAnswer(query, results) : null;
  if (answerBox) answerBox.innerHTML = answer ? answerCardHtml(answer) : "";
  if (!results.length) { box.innerHTML = ""; if (bestBox) bestBox.innerHTML = ""; return; }

  // Best match: the top result, shown large, linking straight to it (unless the answer already is it)
  const best = results[0].entry;
  if (bestBox) bestBox.innerHTML = "";
  if (bestBox && answer?.entry !== best) {
    bestBox.innerHTML = `
      <a href="${best.url}" class="block mb-8 p-5 rounded-xl bg-white border-2 border-olive-900 hover:bg-slate-50 transition">
        <span class="text-xs font-bold uppercase tracking-wider text-olive-900">${t('search_best')} &middot; ${t('search_group_' + best.group)}</span>
        <span class="block text-lg font-extrabold text-slate-900 mt-1">${escapeHtml(title(best))}</span>
        <span class="block text-sm text-slate-600 mt-1 leading-relaxed">${searchSnippet(text(best), words)}</span>
        <span class="inline-block mt-3 text-sm font-bold text-olive-900">${t('search_go')} <span class="flip-rtl inline-block" aria-hidden="true">&rarr;</span></span>
      </a>`;
  }

  box.innerHTML = SEARCH_GROUPS.map(group => {
    const rows = results.filter(r => r.entry.group === group && r.entry !== best);
    if (!rows.length) return "";
    const item = ({ entry }, i) => `
      <li class="${i >= SEARCH_GROUP_LIMIT ? 'hidden search-extra' : ''}">
        <a href="${entry.url}" class="block p-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition">
          <span class="block text-base font-bold text-slate-900">${escapeHtml(title(entry))}</span>
          <span class="block text-sm text-slate-600 mt-1 leading-relaxed">${searchSnippet(text(entry), words)}</span>
        </a>
      </li>`;
    return `
      <section>
        <h2 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">${t('search_group_' + group)} <span class="font-semibold">(${rows.length})</span></h2>
        <ul class="space-y-2">${rows.map(item).join("")}</ul>
        ${rows.length > SEARCH_GROUP_LIMIT ? `<button type="button" class="search-more mt-3 text-sm font-bold text-olive-900 underline">${t('search_show_all').replace("{n}", rows.length)}</button>` : ""}
      </section>`;
  }).join("");

  box.querySelectorAll(".search-more").forEach(btn => btn.addEventListener("click", () => {
    btn.closest("section").querySelectorAll(".search-extra").forEach(li => li.classList.remove("hidden"));
    btn.remove();
  }));
}

// =========================================================================
// 12. Side panel ("More on this page")
//     An arrow tab on the edge of the page opens a panel of single-line headings.
//     Each heading opens a short version of a section that used to sit in the page,
//     so the page itself keeps only what most students came for.
// =========================================================================
// Which sections move into the panel, per page (CSS selectors, in panel order).
// Every page gets the panel: it always lists the site's other pages first.
const PAGE_SIDEBAR = {
  "qudrat.html": ["#rules", "#help", "#sources"],
  "more-info.html": ["#words", "#entry", "#certificates", "#links"],
  "navigate.html": ["#howto", "#data", "#degrees", "#tools", "#privacy", "#contact"],
  "local-universities.html": ["#local-orientation"],
  "contact.html": ["#related", "#contact-sources"],
  "suggestions.html": ["#apply-websites", "#apply-tests", "#apply-gov"]
};

const sidebarState = { open: false, item: -1 };

function initPageSidebar() {
  if (currentPageFile() === "search.html") return; // it forwards to the home page
  buildPageSidebar();
  // "Show everything" only where something is folded away (cards or panel topics)
  if (document.querySelector(".reveal-card") || (PAGE_SIDEBAR[currentPageFile()] || []).length) addShowAllButton();
  // Pages redraw themselves when the language or exchange rates change; move the fresh
  // sections across once every redraw has run (a microtask runs before the next paint)
  const rebuild = () => queueMicrotask(buildPageSidebar);
  window.addEventListener("languageChanged", rebuild);
  window.addEventListener("fxUpdated", rebuild);
}

function sidebarShell() {
  let panel = document.getElementById("page-sidebar");
  if (panel) return panel;
  document.body.insertAdjacentHTML("beforeend", `
    <button type="button" id="page-sidebar-tab" class="page-sidebar-tab" aria-controls="page-sidebar" aria-expanded="false">
      <svg class="w-4 h-4 page-sidebar-tab-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
      <span class="page-sidebar-tab-text"></span>
      <span class="page-sidebar-tab-count"></span>
    </button>
    <div id="page-sidebar-backdrop" class="page-sidebar-backdrop"></div>
    <aside id="page-sidebar" class="page-sidebar bg-white border-slate-300" aria-labelledby="page-sidebar-title" inert>
      <div class="page-sidebar-top border-b border-slate-200">
        <div>
          <h2 id="page-sidebar-title" class="text-base font-extrabold text-slate-900"></h2>
          <p class="page-sidebar-hint text-xs text-slate-500"></p>
        </div>
        <button type="button" class="page-sidebar-close text-slate-500 hover:text-slate-900">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="page-sidebar-scroll">
        <nav class="page-sidebar-pages" aria-labelledby="page-sidebar-pages-title">
          <h3 id="page-sidebar-pages-title" class="page-sidebar-group"></h3>
          <ul class="page-sidebar-page-links"></ul>
        </nav>
        <h3 class="page-sidebar-group page-sidebar-onpage"></h3>
        <ul class="page-sidebar-list"></ul>
      </div>
    </aside>`);
  panel = document.getElementById("page-sidebar");
  document.getElementById("page-sidebar-tab").addEventListener("click", () => setSidebarOpen(!sidebarState.open));
  document.getElementById("page-sidebar-backdrop").addEventListener("click", () => setSidebarOpen(false));
  panel.querySelector(".page-sidebar-close").addEventListener("click", () => setSidebarOpen(false));
  panel.addEventListener("click", e => {
    const head = e.target.closest(".page-sidebar-head");
    if (head) setSidebarItem(sidebarState.item === +head.dataset.index ? -1 : +head.dataset.index);
    if (e.target.closest("[data-sidebar-close]")) setSidebarOpen(false);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && sidebarState.open) setSidebarOpen(false); });
  // Links to a section that now lives in the panel (the page menu, "#help"...) open the panel there
  document.addEventListener("click", e => {
    const link = e.target.closest("a[href*='#']");
    if (!link || link.closest("#page-sidebar")) return;
    const url = new URL(link.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target?.closest("#page-sidebar")) return;
    e.preventDefault();
    history.replaceState(null, "", url.hash);
    openSidebarAt(target, true);
  });
  return panel;
}

function buildPageSidebar() {
  const found = (PAGE_SIDEBAR[currentPageFile()] || []).map(sel => document.querySelector(sel)).filter(Boolean);
  const panel = sidebarShell();
  // Pages: everything that is not in the top menu (SITE_PAGES in layout.js)
  const here = currentPageFile();
  panel.querySelector("#page-sidebar-pages-title").textContent = t('sidebar_pages');
  panel.querySelector(".page-sidebar-page-links").innerHTML = (typeof SITE_PAGES !== "undefined" ? SITE_PAGES : []).map(p => `
    <li><a href="${p.href}" class="page-sidebar-link ${p.href === here ? "is-current" : ""}" ${p.href === here ? 'aria-current="page"' : ""}>${t(p.key)}</a></li>`).join("");
  panel.querySelector(".page-sidebar-onpage").textContent = t('sidebar_on_page');
  panel.querySelector(".page-sidebar-onpage").classList.toggle("hidden", !found.length);
  // The heading comes from the section's own title (read before the section is moved)
  const items = found.map(el => ({
    el,
    title: el.dataset.sidebarTitle ? t(el.dataset.sidebarTitle) : (el.querySelector("h2, h3")?.textContent || "").replace(/\s+/g, " ").trim()
  }));
  document.querySelector("#page-sidebar-tab .page-sidebar-tab-text").textContent = t('sidebar_tab');
  const count = document.querySelector("#page-sidebar-tab .page-sidebar-tab-count");
  count.textContent = items.length;
  count.classList.toggle("hidden", !items.length);
  document.getElementById("page-sidebar-tab").setAttribute("aria-label", `${t('sidebar_tab')}: ${t('sidebar_topics').replace("{n}", items.length)}`);
  document.getElementById("page-sidebar-title").textContent = t('sidebar_title');
  panel.querySelector(".page-sidebar-hint").textContent = t('sidebar_hint');
  panel.querySelector(".page-sidebar-close").setAttribute("aria-label", t('sidebar_close'));

  const list = document.querySelector(".page-sidebar-list");
  list.innerHTML = "";
  items.forEach(({ el, title }, i) => {
    const li = document.createElement("li");
    li.className = "page-sidebar-item border-b border-slate-200";
    li.innerHTML = `
      <button type="button" class="page-sidebar-head text-slate-900 hover:bg-slate-50" data-index="${i}" id="psh-${i}" aria-controls="psb-${i}" aria-expanded="false">
        <span class="page-sidebar-head-text"></span>
        <svg class="page-sidebar-chevron w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="page-sidebar-body" id="psb-${i}" role="region" aria-labelledby="psh-${i}" hidden></div>`;
    li.querySelector(".page-sidebar-head-text").textContent = title;
    li.querySelector(".page-sidebar-head").title = title;
    el.classList.add("in-sidebar");
    li.querySelector(".page-sidebar-body").appendChild(el);
    list.appendChild(li);
  });
  document.querySelectorAll("[data-sidebar-hide]").forEach(el => el.classList.add("hidden"));
  // Keep what the student had open across a redraw
  setSidebarItem(sidebarState.item < items.length ? sidebarState.item : -1, false);
  applyShowAll();
}

function setSidebarOpen(open, moveFocus = true) {
  const panel = document.getElementById("page-sidebar");
  const tab = document.getElementById("page-sidebar-tab");
  if (!panel || !tab) return;
  sidebarState.open = open;
  document.documentElement.classList.toggle("sidebar-open", open);
  panel.inert = !open;
  tab.setAttribute("aria-expanded", String(open));
  if (moveFocus) (open ? panel.querySelector(".page-sidebar-close") : tab).focus({ preventScroll: true });
}

// Open one heading (one at a time keeps the panel short); -1 closes them all
function setSidebarItem(index, scroll = true) {
  sidebarState.item = index;
  document.querySelectorAll("#page-sidebar .page-sidebar-item").forEach((li, i) => {
    const open = i === index;
    li.classList.toggle("is-open", open);
    li.querySelector(".page-sidebar-head").setAttribute("aria-expanded", String(open));
    li.querySelector(".page-sidebar-body").hidden = !open;
    if (open && scroll) li.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

// Open the panel at the heading that holds `el`
function openSidebarAt(el, moveFocus) {
  const li = el.closest(".page-sidebar-item");
  const items = [...document.querySelectorAll("#page-sidebar .page-sidebar-item")];
  setSidebarOpen(true, moveFocus);
  setSidebarItem(items.indexOf(li), false);
  li?.scrollIntoView({ block: "start" });
}

// -------------------------------------------------------------------------
// "Show everything": opens every card on the page and brings the panel's topics
// back into the page, all open, so students can see nothing is hidden.
// The choice is remembered on this device while they move between pages.
// -------------------------------------------------------------------------
const SHOW_ALL_KEY = "moustaqbili_show_all";
let showAllState = null; // null until read from this device

function showAllOn() {
  try { return localStorage.getItem(SHOW_ALL_KEY) === "1"; } catch (e) { return false; }
}

function addShowAllButton() {
  const title = document.querySelector("main h1");
  if (!title || document.getElementById("show-all-btn")) return;
  title.parentElement.insertAdjacentHTML("beforeend", `
    <button type="button" id="show-all-btn" class="show-all-btn" aria-pressed="false">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      <span></span>
    </button>`);
  document.getElementById("show-all-btn").addEventListener("click", () => {
    const next = !showAllState;
    try { localStorage.setItem(SHOW_ALL_KEY, next ? "1" : "0"); } catch (e) { /* storage blocked: still switch this page */ }
    applyShowAll(next);
  });
  window.addEventListener("languageChanged", () => applyShowAll());
  applyShowAll();
}

function applyShowAll(force) {
  if (force !== undefined) showAllState = force;
  if (showAllState === null) showAllState = showAllOn();
  const on = showAllState;
  const root = document.documentElement;
  // Switch every card at once, with no fade (dozens of cards fading together looks jumpy)
  root.classList.add("no-reveal-anim");
  root.classList.toggle("show-all", on);
  void root.offsetWidth;
  setTimeout(() => root.classList.remove("no-reveal-anim"), 50);
  const btn = document.getElementById("show-all-btn");
  if (btn) {
    btn.setAttribute("aria-pressed", String(on));
    btn.querySelector("span").textContent = t(on ? 'show_all_off' : 'show_all_on');
  }
  // Cards: details readable and clickable; the front no longer toggles
  document.querySelectorAll(".reveal-card").forEach(card => {
    card.querySelector(".reveal-back").inert = on ? false : !card.classList.contains("is-open");
    card.querySelector(".reveal-front").inert = on ? true : card.classList.contains("is-open");
    if (!on) sizeRevealCard(card);
  });
  // Panel topics: shown at the end of the page, all open (or put back in the panel)
  const list = document.querySelector(".page-sidebar-list");
  if (!list) return;
  let inline = document.getElementById("page-more-inline");
  if (on && list.children.length) {
    if (sidebarState.open) setSidebarOpen(false, false);
    if (!inline) {
      document.querySelector("main").insertAdjacentHTML("beforeend", `
        <section id="page-more-inline" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <h2 class="text-xl font-extrabold text-slate-900 mb-3"></h2>
        </section>`);
      inline = document.getElementById("page-more-inline");
    }
    inline.querySelector("h2").textContent = t('sidebar_title');
    inline.appendChild(list);
    list.querySelectorAll(".page-sidebar-item").forEach(li => {
      li.classList.add("is-open");
      li.querySelector(".page-sidebar-head").setAttribute("aria-expanded", "true");
      li.querySelector(".page-sidebar-body").hidden = false;
    });
  } else if (inline) {
    document.querySelector("#page-sidebar .page-sidebar-scroll")?.appendChild(list);
    inline.remove();
    setSidebarItem(sidebarState.item, false);
  }
}

// Pages are drawn by JavaScript, so a link like clarifications.html#some-question arrives before
// its target exists. Once the page is drawn, scroll to the target (and open it if it is a question).
function revealHashTarget() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  // The section now lives in the side panel: open the panel at that heading instead
  if (el.closest("#page-sidebar")) { openSidebarAt(el, false); return; }
  if (el.tagName === "DETAILS") el.open = true;
  // Instant, not smooth: this is a page-load jump, and smooth scrolling stalls in background tabs
  el.scrollIntoView({ block: "start", behavior: "instant" });
  el.classList.add("search-target");
  setTimeout(() => el.classList.remove("search-target"), 2500);
}

// =========================================================================
// 14. "Why no results?" page (why.html)
//     Reads the same search from the address bar as the results or search page,
//     explains what most likely emptied it, and offers one-click fixes.
// =========================================================================
// "Why no results?" links carry the current search along (the results page keeps it in the address bar)
function initWhyLinks() {
  document.addEventListener("click", e => {
    const link = e.target.closest("[data-why-link]");
    if (link) link.href = `why.html${location.search}`;
  });
}

// The reasons a search came back empty: [{ text, fix: { label, url } }]
function whyReasons(params) {
  const ar = isArabic();
  const cfg = getFilterConfig();
  const country = params.get("country") || "";
  const range = cfg.percentageRanges.find(r => r.value === params.get("percentage")) || null;
  const level = (cfg.levels || []).find(l => l.value === params.get("level")) || null;
  const major = params.get("major") ? planMajorById(params.get("major")) : null;
  const merit = params.get("merit") === "1";
  const q = params.get("q") || "";
  // English sentences need "the" before "United Kingdom", "United States" and "United Arab Emirates"
  const countryName = c => ar ? (window.PLAN_COUNTRIES?.[c] || c) : (/^United /.test(c) ? `the ${c}` : c);
  const majorName = m => ar ? m.ar : m.en;
  const without = (...keys) => {
    const next = new URLSearchParams(params);
    keys.forEach(k => next.delete(k));
    return `results.html${next.toString() ? `?${next}` : ""}`;
  };
  const lowest = list => list.reduce((best, x) => (best && best[1] <= x[1] ? best : x), null);
  const programs = window.MOUSTAQBILI_PROGRAMS || [];
  const reasons = [];

  if (q) {
    reasons.push({ text: t('why_site_search').replace("{q}", escapeHtml(q)), tips: [t('why_tip_spelling'), t('why_tip_language'), t('why_tip_topics')],
      fix: { label: t('why_fix_new_search'), url: "search.html" } });
  }
  if (merit) {
    reasons.push({ text: t('why_merit').replace("{n}", programs.filter(p => p.isMerit).length), fix: { label: t('why_fix_no_merit'), url: without("merit") } });
  }
  if (level?.value === "foundation") {
    reasons.push({ text: t('why_foundation').replace("{n}", programs.filter(p => (p.levels || []).includes("foundation")).length), fix: { label: t('why_fix_no_level'), url: without("level") } });
  }
  if (level?.planMajors && major && !level.planMajors.includes(major.id)) {
    reasons.push({ text: t('why_medical').replace("{major}", majorName(major)), fix: { label: t('why_fix_no_level'), url: without("level") } });
  }
  if (country && !(cfg.countries || []).some(c => c.value === country)) {
    reasons.push({ text: t('why_country_missing').replace("{country}", escapeHtml(countryName(country))), fix: { label: t('why_fix_no_country'), url: without("country") } });
  }
  if (major) {
    const offered = Object.entries(major.minPct);
    if (country && !(country in major.minPct)) {
      reasons.push({
        text: t('why_not_offered').replace("{major}", majorName(major)).replace("{country}", countryName(country))
          .replace("{list}", offered.map(([c]) => countryName(c)).join(ar ? "، " : ", ")),
        fix: { label: t('why_fix_all_countries').replace("{major}", majorName(major)), url: without("country") }
      });
    } else if (country && range && major.minPct[country] > range.maxPct) {
      reasons.push({
        text: t('why_pct_major_country').replace("{country}", countryName(country)).replace("{major}", majorName(major))
          .replace("{min}", major.minPct[country]).replace("{range}", range.label),
        fix: { label: t('why_fix_no_pct'), url: without("percentage") }
      });
    } else if (!country && range && offered.every(([, p]) => p > range.maxPct)) {
      const [c, p] = lowest(offered);
      reasons.push({
        text: t('why_pct_major').replace("{major}", majorName(major)).replace("{min}", p).replace("{country}", countryName(c)),
        fix: { label: t('why_fix_no_pct'), url: without("percentage") }
      });
    }
  } else if (country && range) {
    const inCountry = (window.PLAN_MAJORS || []).filter(m => country in m.minPct).map(m => [m, m.minPct[country]]);
    if (inCountry.length && inCountry.every(([, p]) => p > range.maxPct)) {
      reasons.push({
        text: t('why_pct_country').replace("{country}", countryName(country)).replace("{min}", Math.min(...inCountry.map(([, p]) => p))).replace("{range}", range.label),
        fix: { label: t('why_fix_no_pct'), url: without("percentage") }
      });
    }
  }
  return reasons;
}

function initWhyPage() {
  renderWhyPage();
  window.addEventListener("languageChanged", renderWhyPage);
}

function renderWhyPage() {
  const root = document.getElementById("why-root");
  if (!root) return;
  const ar = isArabic();
  const params = new URLSearchParams(location.search);
  const cfg = getFilterConfig();

  // The search being explained, as small chips
  const chips = [];
  const country = params.get("country");
  if (country) chips.push(ar ? (window.PLAN_COUNTRIES?.[country] || country) : country);
  const range = cfg.percentageRanges.find(r => r.value === params.get("percentage"));
  if (range) chips.push(range.label);
  const level = (cfg.levels || []).find(l => l.value === params.get("level"));
  if (level) chips.push(ar ? level.labelAr : level.label);
  const major = params.get("major") ? planMajorById(params.get("major")) : null;
  if (major) chips.push(ar ? major.ar : major.en);
  if (params.get("merit") === "1") chips.push(t('merit_toggle_off'));
  if (params.get("q")) chips.push(`"${params.get("q")}"`);

  const reasons = whyReasons(params);
  const missing = (window.NAVIGATE_GUIDE?.sections || []).find(s => s.id === "missing");
  const backUrl = params.get("q") ? `search.html?q=${encodeURIComponent(params.get("q"))}` : `results.html${location.search}`;

  root.innerHTML = !chips.length ? `
    <p class="text-base text-slate-700">${t('why_no_search')}</p>
    <a href="index.html#home-filters" class="inline-block px-4 py-2 rounded-lg bg-olive-900 hover:bg-olive-800 text-white text-sm font-bold">${t('home_search_title')}</a>` : `
    <section>
      <h2 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">${t('why_your_search')}</h2>
      <div class="flex flex-wrap gap-2">${chips.map(c => `<span class="px-3 py-1 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-800">${escapeHtml(c)}</span>`).join("")}</div>
      <a href="${backUrl}" class="inline-block mt-3 text-sm font-semibold text-olive-900 underline">${t('why_back')}</a>
    </section>

    <section>
      <h2 class="text-lg font-extrabold text-slate-900 mb-3">${t('why_happened')}</h2>
      ${reasons.length ? `<ol class="space-y-3">${reasons.map(r => `
        <li class="why-reason bg-white rounded-xl border border-slate-300 p-4">
          <p class="text-base text-slate-800 leading-relaxed">${r.text}</p>
          ${r.tips ? `<ul class="mt-2 space-y-1 text-sm text-slate-600 list-disc ps-5">${r.tips.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
          ${r.fix ? `<a href="${r.fix.url}" class="inline-flex items-center gap-1 mt-3 px-3 py-1.5 rounded-lg bg-olive-900 hover:bg-olive-800 text-white text-sm font-bold">${r.fix.label} <span class="flip-rtl inline-block" aria-hidden="true">&rarr;</span></a>` : ""}
        </li>`).join("")}</ol>` : `<p class="text-base text-slate-700">${t('why_none_found')}</p>`}
    </section>

    ${missing ? `<section>
      <h2 class="text-lg font-extrabold text-slate-900 mb-3">${t('why_common')}</h2>
      <div class="space-y-4">${missing.blocks.map(moreInfoBlock).join("")}</div>
    </section>` : ""}

    <section class="p-4 rounded-xl bg-slate-100 border border-slate-200">
      <h2 class="text-base font-extrabold text-slate-900">${t('why_stuck')}</h2>
      <p class="text-sm text-slate-600 mt-1">${t('why_stuck_desc')}</p>
      <a href="ask.html" class="inline-block mt-3 text-sm font-bold text-olive-900 underline">${t('nav_ask')}</a>
    </section>`;
}

// =========================================================================
// 15. Footer update note: "Next update: <date>" (every Thursday, 4:00 PM Kuwait time)
// =========================================================================
const UPDATE_WEEKDAY = 4;   // Thursday (Sunday = 0)
const UPDATE_HOUR_KW = 16;  // 4:00 PM in Kuwait

// The next update as an ISO date (yyyy-mm-dd) in Kuwait. Kuwait is UTC+3 all year.
function nextUpdateDate(now = new Date()) {
  const kw = new Date(now.getTime() + 3 * 3600 * 1000); // Kuwait clock, read with the UTC getters
  let days = (UPDATE_WEEKDAY - kw.getUTCDay() + 7) % 7;
  if (days === 0 && kw.getUTCHours() >= UPDATE_HOUR_KW) days = 7; // today's update has passed
  const next = new Date(Date.UTC(kw.getUTCFullYear(), kw.getUTCMonth(), kw.getUTCDate() + days));
  return next.toISOString().slice(0, 10);
}

function initUpdateNote() {
  const show = () => {
    const el = document.getElementById("footer-next-update");
    if (el) el.textContent = t('footer_next_update').replace("{date}", formatDate(nextUpdateDate()));
  };
  show();
  window.addEventListener("languageChanged", show);
}

// =========================================================================
// 16. Quick answers (home page search)
//     A short, direct answer above the results, built from the site's own data
//     files, so it stays right after every weekly update.
// =========================================================================
const ANSWER_WORDS = {
  money: ["money", "allowance", "allowances", "stipend", "salary", "pay", "paid", "monthly", "شهري", "شهريا", "مخصص", "المخصص", "راتب", "فلوس", "مكافاه", "المكافاه", "مبلغ", "المبلغ"],
  qudrat: ["qudrat", "aptitude", "قدرات", "القدرات"],
  when: ["deadline", "last day", "when", "date", "dates", "register", "registration", "موعد", "مواعيد", "متى", "اخر", "تسجيل", "التسجيل"],
  cost: ["cost", "fee", "fees", "price", "رسوم", "الرسوم", "سعر", "تكلفه"],
  merit: ["merit", "excellence", "تميز", "التميز", "متميز"]
};

// Short names students type for a major (the plan's own names are longer, e.g. "الطب البشري")
const MAJOR_ALIASES = {
  medicine: ["doctor", "md", "mbbs", "mbchb", "طب", "طبيب"],
  dentistry: ["dentist", "dental", "اسنان", "طبيب اسنان"],
  pharmacy: ["pharmacist", "صيدلي"],
  "veterinary-medicine": ["vet", "vet medicine", "veterinary", "بيطري"]
};

// Questions with one official answer (ids in clarifications-data.js): when a search matches one,
// that answer is shown first. Checked in this order, so specific ones come before general ones.
// exam: the search must also be about Qudrat or a test. need/any/also: it must contain a word
// from each list (words match whole words; Arabic "ال" is ignored).
const EXAM_WORDS = ["qudrat", "aptitude", "exam", "exams", "test", "tests", "قدرات", "اختبار", "اختبارات", "امتحان", "الامتحان"];
const NOT_QUDRAT = ["ielts", "toefl", "sat", "duolingo", "ايلتس", "الايلتس", "توفل", "التوفل"];
const RESULT_WORDS = ["result", "results", "score", "scores", "نتيجه", "نتيجتي", "نتائج", "درجه", "درجتي", "درجات"];
const UNI_WORDS = ["university", "universities", "uni", "college", "جامعه", "جامعتي", "جامعات"];
const RESOURCE_WORDS = ["resource", "resources", "link", "links", "website", "websites", "portal", "official site", "useful sites", "مصادر", "مصدر", "روابط", "رابط", "مواقع", "موقع", "بوابه"];
const LOWEST_WORDS = ["lowest", "minimum", "min", "cutoff", "cut off", "lowest accepted", "lowest admitted", "lowest percentage", "required percentage", "percentage needed", "اقل", "ادنى", "حد ادنى", "النسبه المطلوبه", "نسبه القبول", "نسب القبول"];
// Universities in Kuwait by the names students type (ids in KUWAIT_LOCAL_UNIVERSITIES, data.js)
const LOCAL_UNI_NAMES = {
  "kuwait-university": ["kuwait university", "ku", "kuniv", "جامعه الكويت"],
  aasu: ["aasu", "abdullah al salem", "abdullah alsalem", "abdullah al-salem university", "عبدالله السالم", "عبد الله السالم"],
  puc: ["puc", "private universities", "private university", "internal scholarship", "internal scholarships", "الجامعات الخاصه", "مجلس الجامعات", "البعثات الداخليه", "بعثه داخليه"]
};
const SCORE_WORDS = ["chance", "chances", "competitive", "my score", "my percentage", "my grade", "what can i study", "what can i get", "فرصتي", "فرصي", "فرص", "تنافسي", "نسبتي", "معدلي", "ماذا ادرس", "وش ادرس"];
const FAQ_INTENTS = [
  { id: "university-not-listed", need: UNI_WORDS, any: ["not on", "not listed", "not in", "unlisted", "not recommended", "not approved", "non nbaq", "appeal", "add", "added", "غير موصى", "غير مدرجه", "غير معتمده", "غير موجوده", "مو موجوده", "تظلم", "اضافه", "اضافتها"] },
  { id: "grant-countries", any: ["grant", "grants", "منحه", "منح"], also: ["country", "countries", "which", "دول", "دوله"] },
  { id: "grant-vs-scholarship", any: ["grant", "grants", "منحه", "منح"] },
  { id: "qudrat-equivalent-average", any: ["equivalent average", "equivalent score", "معدل مكافئ", "مكافئ"] },
  { id: "qudrat-same-as-national-test", any: ["national test", "unified test", "وطني موحد", "اختبار وطني"] },
  { id: "qudrat-appeal", exam: true, any: ["appeal", "regrade", "تظلم", "اعتراض"] },
  { id: "qudrat-pass-mark", exam: true, any: ["pass", "passing", "pass mark", "نجاح"] },
  { id: "qudrat-results-where", exam: true, not: SCORE_WORDS, any: RESULT_WORDS, also: ["how", "where", "see", "check", "view", "app", "sahel", "كيف", "وين", "اين", "اعرف", "سهل"] },
  { id: "qudrat-results-when", exam: true, not: SCORE_WORDS, any: RESULT_WORDS },
  { id: "qudrat-change-language", exam: true, any: ["language", "لغه"] },
  { id: "qudrat-fee-refund", exam: true, any: ["refund", "cancel", "money back", "استرجاع", "استرداد", "الغاء", "الغي"] },
  { id: "qudrat-late", exam: true, any: ["late", "miss", "missed", "absent", "تاخرت", "تاخر", "غياب", "غبت"] },
  { id: "qudrat-forgot-password", exam: true, any: ["password", "forgot", "login", "log in", "سر", "نسيت", "مرور"] },
  { id: "qudrat-what-to-bring", exam: true, any: ["bring", "allowed", "permitted", "calculator", "phone", "pencil", "id", "watch", "احضر", "احضار", "مسموح", "ممنوع", "حاسبه", "هاتف", "جوال", "هويه", "قلم"] },
  { id: "qudrat-arrive", exam: true, any: ["arrive", "arrival", "early", "وصول", "اوصل"] },
  { id: "qudrat-location", exam: true, any: ["location", "venue", "place", "hall", "room", "building", "مقر", "مكان", "قاعه", "مبنى"] },
  { id: "qudrat-how-register", exam: true, any: ["how to register", "how do i register", "how can i register", "steps", "sign up", "طريقه", "خطوات", "كيف اسجل"] },
  { id: "qudrat-samples", exam: true, any: ["sample", "samples", "past paper", "past papers", "practice", "نماذج", "نموذج"] },
  { id: "qudrat-courses", exam: true, any: ["course", "courses", "prep", "training", "دورات", "دوره", "تقويه"] },
  { id: "qudrat-retake-validity", exam: true, any: ["valid", "validity", "expire", "expires", "retake", "again", "how many times", "صلاحيه", "اعيد", "اعاده", "كم مره"] },
  { id: "qudrat-who-can-take", exam: true, any: ["who can", "eligible", "international school", "يحق", "مؤهلين", "اجنبيه"] },
  { id: "qudrat-change-details", exam: true, extra: "nextClose", any: ["change", "edit", "modify", "update", "تغيير", "لتغيير", "تعديل", "لتعديل", "اغير", "اعدل", "تحديث"] },
  { id: "qudrat-subjects", exam: true, any: ["subjects", "which tests", "what tests", "مواد"] }
];

// Lower-case words with Arabic "ال" taken off, padded with spaces for whole-word matching
function answerText(str) {
  return ` ${normalizeSearch(str).split(" ").map(w => w.replace(/^(وال|بال|فال|لل|ال)(?=..)/, "")).join(" ")} `;
}

function searchAnswer(query, results) {
  const ar = isArabic();
  const words = normalizeSearch(query).split(" ").filter(Boolean);
  // The question plus the site's synonyms ("uk" -> "united kingdom", "doctor" -> "medicine")
  // Misspelled words ("medcine") also count as the real word they are closest to
  const index0 = searchIndexCache || [];
  const fixes = searchTerms(query, index0).filter(tm => /\p{L}{3}/u.test(tm.word) && !index0.some(e => searchHas(e._hay, [tm.word, searchStem(tm.word)])))
    .flatMap(tm => tm.alts.filter(a => a !== tm.word));
  const q = answerText([query, ...words.flatMap(w => SEARCH_SYNONYMS[w] || []), ...fixes].join(" "));
  const has = key => ANSWER_WORDS[key].some(w => q.includes(answerText(w)));
  const longest = (list, names) => list.map(x => [x, Math.max(...names(x).map(n => q.includes(answerText(n)) ? n.length : 0))])
    .filter(([, len]) => len > 0).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

  const major = longest(window.PLAN_MAJORS || [], m => [m.en, m.ar, ...(MAJOR_ALIASES[m.id] || [])]);
  const country = longest(getFilterConfig().countries || [], c => [c.value, c.label, c.labelAr].filter(Boolean));
  // English sentences need "the" before "United Kingdom", "United States" and "United Arab Emirates"
  const countryName = c => ar ? (c.labelAr || c.label) : (/^United /.test(c.label) ? `the ${c.label}` : c.label);
  // A question from the Questions page, shown as the answer (by its id in clarifications-data.js)
  const faqAnswer = id => {
    const entry = (searchIndexCache || []).find(e => e.url === `clarifications.html#${id}`);
    return entry && { entry, title: ar ? entry.titleAr : entry.titleEn, lines: [withFlags(ar ? entry.textAr : entry.textEn)], url: entry.url, label: t('ans_read_answer') };
  };
  const majorName = m => ar ? m.ar : m.en;
  const both = (amount, cur) => `<strong>${money(convertAmount(amount, cur, "KWD", FX.rates), "KWD")}</strong> (${formatNumber(amount)} ${cur})`;
  const moneyLines = a => !a ? [] : [
    t('ans_allowance').replace("{amount}", both(a.standard, a.currency)),
    typeof a.merit === "number" ? t('ans_merit').replace("{amount}", both(a.merit, a.currency)) : ""
  ].filter(Boolean);

  // 0. A question with one official answer (FAQ_INTENTS), e.g. "when are qudrat results out"
  const qd = window.KUWAIT_QUDRAT;
  const hasAny = list => list.some(w => q.includes(answerText(w)));
  const aboutExam = !hasAny(NOT_QUDRAT) && (has("qudrat") || hasAny(EXAM_WORDS));
  const intent = FAQ_INTENTS.find(i => (!i.exam || aboutExam) && (!i.need || hasAny(i.need)) && (!i.not || !hasAny(i.not)) && hasAny(i.any) && (!i.also || hasAny(i.also)));
  const intentAnswer = intent && faqAnswer(intent.id);
  if (intentAnswer) {
    // "Last day to change": add the next real deadline from qudrat-data.js
    const next = intent.extra === "nextClose" && (qd?.currentCycle.sessions || []).find(s => daysBetween(new Date(), s.regClose) >= 0);
    if (next) intentAnswer.lines.push(t('ans_qudrat_next').replace("{date}", `<strong>${formatDate(next.regClose)}</strong>`).replace("{test}", formatDate(next.test)));
    return intentAnswer;
  }

  // 0b. Official links: "qudrat links", "ministry website", "resources"
  if (hasAny(RESOURCE_WORDS) && window.RESOURCES) {
    const groups = window.RESOURCES.groups;
    const g = groups.find(x => x.id !== "abroad" && hasAny(x.keywords.split(" "))) || groups.find(x => hasAny(x.keywords.split(" ")));
    const shown = g ? g.items.slice(0, 4) : groups.map(x => x.items[0]);
    return { title: g ? L(g, 'title') : t('ans_resources_title'),
      lines: [g ? t('ans_resources_group') : t('ans_resources_line'),
        shown.map(i => `<a class="underline font-semibold" href="${ar ? (i.urlAr || i.url) : i.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(L(i, 'label'))}</a>`).join(" · ")],
      url: `resources.html${g ? `#${g.id}` : ""}`, label: t('ans_resources_open') };
  }

  // The best result's own answer, used when a search asks something more specific than a rule covers
  const top = results[0]?.entry;
  // An Arabic search on the English site (or the other way round) is answered in the search's language
  const textAr = /\p{Script=Arabic}/u.test(query) ? true : /[a-z]/i.test(query) ? false : ar;
  // A word that is nowhere on the site was matched by its closest spelling: say the answer is the closest one
  const guessed = () => terms.some(tm => /\p{L}{3}/u.test(tm.word) && !(searchIndexCache || []).some(e => searchHas(e._hay, [tm.word, searchStem(tm.word)])));
  const fromTop = (list = results, note = "") => {
    const best = bestAnswer(list, query, textAr);
    if (!best) return null;
    const ext = textAr ? best.entry.extAr : best.entry.ext; // an official link: link to it directly
    return { entry: best.entry, title: textAr ? best.entry.titleAr : best.entry.titleEn,
      lines: [note || (guessed() ? t('ans_closest') : ""), withFlags(escapeHtml(best.line)),
        ext ? `<a class="underline font-semibold break-all" href="${ext}" target="_blank" rel="noopener noreferrer" dir="ltr">${escapeHtml(ext.replace(/^https?:\/\//, ""))}</a>` : ""].filter(Boolean),
      url: best.entry.url, label: t('ans_open_result') };
  };
  // "books allowance", "visa for the uk", "ucas deadline medicine": words a rule does not explain
  // ("books", "visa", "deadline") mean the student wants the detail, so the best result answers when it has them
  const terms = searchTerms(query, searchIndexCache || []);
  const specific = (...known) => {
    const vocab = answerText([...known.flat(), ...ANSWER_WORDS.money, ...LOWEST_WORDS,
      "scholarship scholarships plan accepted percentage majors major country countries university college بعثه بعثات خطه نسبه مقبوله تخصص تخصصات دوله جامعه كليه"].join(" "));
    const extra = terms.filter(tm => /\p{L}{2}/u.test(tm.word) && !tm.alts.some(alt => vocab.includes(answerText(alt))));
    if (!extra.length || !top) return null;
    const found = extra.filter(tm => searchHas(top._hay, tm.alts)).length;
    return found >= Math.ceil(extra.length / 2) ? fromTop() : null;
  };

  // 0c. A university in Kuwait: a college's lowest admitted grade, or every college's
  const localUni = (window.KUWAIT_LOCAL_UNIVERSITIES || []).find(u => hasAny(LOCAL_UNI_NAMES[u.id] || []));
  if (localUni) {
    const detail = specific(LOCAL_UNI_NAMES[localUni.id], localUni.colleges.flatMap(c => [c.collegeName, c.collegeNameAr || ""]));
    if (detail) return detail;
    // Full names, or the short form students type ("Engineering" for "Engineering & Petroleum")
    const college = longest(localUni.colleges || [], c => [c.collegeName, c.collegeNameAr, c.collegeName.split(/ & | \(/)[0],
      (c.collegeNameAr || "").split(" ")[0]].filter(n => n && n.length >= 4));
    const cName = c => ar ? (c.collegeNameAr || c.collegeName) : c.collegeName;
    const floor = c => ar ? (c.minThanawiyaAr || c.minThanawiya) : c.minThanawiya;
    const url = `local-universities.html#${localUni.id}`;
    if (college) {
      const graded = (college.majors || []).filter(m => m.grade);
      return { title: `${cName(college)} - ${ar ? localUni.nameAr : localUni.name}`,
        lines: [`${escapeHtml(L(localUni, 'floorLabel'))}: <strong>${escapeHtml(floor(college))}</strong>`,
          graded.length ? graded.map(m => `${escapeHtml(ar ? (m.ar || m.en) : m.en)} <strong>${m.grade}</strong>`).join(" · ") : "",
          escapeHtml(L(college, 'condition'))].filter(Boolean),
        url, label: t('ans_open_local') };
    }
    if (hasAny(LOWEST_WORDS)) {
      return { title: ar ? localUni.nameAr : localUni.name,
        lines: [`${escapeHtml(L(localUni, 'floorLabel'))}:`, localUni.colleges.map(c => `${escapeHtml(cName(c))} <strong>${escapeHtml(floor(c))}</strong>`).join(" · ")],
        url, label: t('ans_open_local') };
    }
  }

  // 1. Qudrat dates or fee
  if (qd && has("qudrat") && !major) {
    const c = qd.currentCycle;
    const next = (c.sessions || []).find(s => daysBetween(new Date(), s.regClose) >= 0);
    const cost = (c.basics || []).find(b => b.id === "cost");
    const lines = [
      next ? t('ans_qudrat_next').replace("{date}", `<strong>${formatDate(next.regClose)}</strong>`).replace("{test}", formatDate(next.test)) : qudratStatusText(qudratStatus(c)),
      cost ? t('ans_qudrat_fee').replace("{fee}", `<strong>${L(cost, 'answer')}</strong> ${L(cost, 'sub')}`) : ""
    ].filter(Boolean);
    if (has("cost") && !has("when")) lines.reverse();
    return { title: t('ans_qudrat_title'), lines, url: "qudrat.html", label: t('ans_open_qudrat') };
  }
  // 2. The merit programme: its deadline, or when the extra money starts
  if (has("merit") && !major && !country) {
    const detail = specific(ANSWER_WORDS.merit, ANSWER_WORDS.when, ["students", "student", "programme", "program", "طلبه", "طالب", "برنامج"]);
    if (detail) return detail;
    return faqAnswer(has("money") ? "merit-bonus-start" : "merit-deadline-separate") || null;
  }
  // 3. A major, in one country or everywhere
  const placeNames = [major ? [major.en, major.ar, ...(MAJOR_ALIASES[major.id] || [])] : [], country ? [country.value, country.label, country.labelAr || ""] : []];
  if ((major || country) && specific(...placeNames)) return specific(...placeNames);
  if (major) {
    const offered = Object.entries(major.minPct);
    if (country) {
      const pct = major.minPct[country.value];
      if (pct === undefined) {
        return { title: t('ans_major_country').replace("{major}", majorName(major)).replace("{country}", countryName(country)),
          lines: [t('why_not_offered').replace("{major}", majorName(major)).replace("{country}", countryName(country))
            .replace("{list}", offered.map(([c]) => ar ? (window.PLAN_COUNTRIES?.[c] || c) : c).join(ar ? "، " : ", "))],
          url: `results.html?major=${encodeURIComponent(major.id)}`, label: t('ans_choose_country') };
      }
      return { title: t('ans_major_country').replace("{major}", majorName(major)).replace("{country}", countryName(country)),
        lines: [t('ans_lowest').replace("{pct}", `<strong>${pct}%</strong>`) + (major.unconfirmed?.includes(country.value) ? ` ${flag('unconfirmed')}` : ""),
          ...moneyLines(countryAllowance(country.value))],
        url: `results.html?major=${encodeURIComponent(major.id)}&country=${encodeURIComponent(country.value)}&step=3`, label: t('ans_open_major_country') };
    }
    return { title: majorName(major),
      lines: [t('ans_by_country'), offered.sort((a, b) => a[1] - b[1]).map(([c, p]) => `${ar ? (window.PLAN_COUNTRIES?.[c] || c) : c} <strong>${p}%</strong>`).join(" · ")],
      url: `results.html?major=${encodeURIComponent(major.id)}`, label: t('ans_choose_country') };
  }
  // 4. A country: the lowest % accepted there (when asked), its monthly money and how many majors it offers
  if (country && hasAny(LOWEST_WORDS)) {
    const list = (window.PLAN_MAJORS || []).filter(m => country.value in m.minPct).sort((x, y) => x.minPct[country.value] - y.minPct[country.value]);
    if (list.length) {
      const lo = list[0], hi = list[list.length - 1];
      return { title: t('ans_lowest_country').replace("{country}", countryName(country)),
        lines: [t('ans_lowest_range').replace("{low}", `<strong>${lo.minPct[country.value]}%</strong>`).replace("{lowMajor}", majorName(lo))
          .replace("{high}", `<strong>${hi.minPct[country.value]}%</strong>`).replace("{highMajor}", majorName(hi)),
          t('ans_majors_in').replace("{n}", list.length)],
        url: `results.html?country=${encodeURIComponent(country.value)}`, label: t('allow_see_majors').replace("{country}", countryName(country)) };
    }
  }
  if (country) {
    const n = (window.PLAN_MAJORS || []).filter(m => country.value in m.minPct).length;
    return { title: t('ans_money_country').replace("{country}", countryName(country)),
      lines: [...moneyLines(countryAllowance(country.value)), t('ans_majors_in').replace("{n}", n)],
      url: `results.html?country=${encodeURIComponent(country.value)}`, label: t('allow_see_majors').replace("{country}", countryName(country)) };
  }
  // 5. A percentage ("what can I study with 85%?") or "how competitive is my score": the score checker
  const pctMatch = String(query).replace(/٪/g, "%").match(/(\d{2,3}(?:\.\d+)?)\s*%/);
  const pct = pctMatch ? parseFloat(pctMatch[1]) : null;
  if ((pct >= 50 && pct <= 100) || hasAny(SCORE_WORDS)) {
    const majors = window.PLAN_MAJORS || [];
    const meets = pct ? majors.filter(m => Object.values(m.minPct).some(v => pct >= v)).length : 0;
    return { title: t('ans_score_title'),
      lines: [pct ? t('ans_score_pct').replace("{pct}", `<strong>${pct}%</strong>`).replace("{n}", meets).replace("{m}", majors.length) : t('ans_score_line')],
      url: `score.html${pct ? `?hs=${pct}` : ""}`, label: t('ans_score_open') };
  }
  // 5b. "Lowest accepted %" in general (or for a field such as engineering): abroad and at Kuwait University
  if (hasAny(LOWEST_WORDS)) {
    const field = (window.PLAN_DISCIPLINES || []).find(d => hasAny([d.en.split(/ & |, /)[0], d.ar.split(" ")[0]].filter(n => n.length >= 3)));
    const pairs = (window.PLAN_MAJORS || []).filter(m => !field || m.discipline === field.id)
      .flatMap(m => Object.entries(m.minPct).map(([c, p]) => ({ m, c, p }))).sort((x, y) => x.p - y.p);
    const ku = (window.KUWAIT_LOCAL_UNIVERSITIES || []).find(u => u.id === "kuwait-university");
    const cname = c => ar ? (window.PLAN_COUNTRIES?.[c] || c) : c;
    if (pairs.length) {
      const lo = pairs[0], hi = pairs[pairs.length - 1];
      return { title: field ? `${t('ans_lowest_title')}: ${ar ? field.ar : field.en}` : t('ans_lowest_title'),
        lines: [t('ans_lowest_abroad').replace("{low}", `<strong>${lo.p}%</strong>`).replace("{lowWhat}", `${majorName(lo.m)}, ${cname(lo.c)}`)
          .replace("{high}", `<strong>${hi.p}%</strong>`).replace("{highWhat}", `${majorName(hi.m)}, ${cname(hi.c)}`),
          ku?.generalMin ? t('ans_lowest_ku').replace("{sci}", `<strong>${ku.generalMin.science}%</strong>`).replace("{arts}", `<strong>${ku.generalMin.arts}%</strong>`) : "",
          t('ans_lowest_more')].filter(Boolean),
        url: "score.html", label: t('ans_score_open') };
    }
  }
  // 6. Money in general: every country at a glance
  if (has("money")) {
    const detail = specific([]);
    if (detail) return detail;
    const all = window.MORE_INFO?.allowances || [];
    return { title: t('ans_money_all'),
      lines: [all.map(a => `${L(a, 'country')} <strong>${money(convertAmount(a.standard, a.currency, "KWD", FX.rates), "KWD")}</strong>`).join(" · "), t('home_read_2')],
      url: "more-info.html#money", label: t('ans_see_money') };
  }
  // 7. Otherwise, when the best match is a common question, show its answer
  if (top?.group === "questions") {
    return { entry: top, title: ar ? top.titleAr : top.titleEn, lines: [withFlags(ar ? top.textAr : top.textEn)], url: top.url, label: t('ans_read_answer') };
  }
  // 8. Anything else: the sentence that best answers the search, from the best results
  //    (wherever it sits on the site, including the backs of cards and folded sections)
  if (top) {
    const answer = fromTop();
    if (answer) return answer;
  }
  // 9. No result has all the key words: the closest match for the rarest word that is on the site
  const index = searchIndexCache || [];
  const singles = terms.map(tm => ({ tm, found: index.filter(e => searchHas(e._hay, tm.alts)).length }))
    .filter(x => x.found && x.tm.word.length >= 3).sort((x, y) => x.found - y.found);
  for (const { tm } of singles) {
    const closest = searchSite(tm.word, index);
    if (closest.length) return fromTop(closest, t('ans_closest'));
  }
  // 10. Nothing on the site matches: say so, and offer to send the question to us
  return { title: t('ans_none_title'), lines: [t('ans_none_line')], url: `ask.html?q=${encodeURIComponent(query)}`, label: t('ans_none_ask') };
}

// The best answering sentence among the first few results: the one with most of the search's
// key words (longer words count a little more), then the more informative one, then the higher result
function bestAnswer(results, query, ar) {
  let best = null;
  const terms = searchTerms(query, searchIndexCache || []);
  results.slice(0, 5).forEach(({ entry }, rank) => {
    const pick = bestSentences(entry, query, ar, true);
    if (!pick) return;
    // A result whose title is the question ("When does the allowance start?") answers it best
    const title = normalizeSearch(`${entry.titleEn} ${entry.titleAr}`);
    const titleScore = terms.filter(tm => searchHas(title, tm.alts)).length;
    const score = pick.score + titleScore * 0.7 + Math.min(pick.line.length, 160) / 1000 - rank * 0.08;
    if (!best || score > best.score) best = { entry, line: pick.line, score };
  });
  return best;
}

// The one or two sentences of a result that match the search best (most of its key words, rare
// words counting more). Short answers ("10 KWD per test.") take the next sentence too.
function bestSentences(entry, query, ar, withScore = false) {
  const text = String((ar ? entry.textAr : entry.textEn) || entry.textEn || "").replace(/\s+/g, " ").trim();
  if (!text) return ar ? entry.titleAr : entry.titleEn;
  const sentences = text.split(/(?<=[.!?؟])\s+/).map(s => s.trim()).filter(s => s.length > 1 && !/^[.،,]+$/.test(s));
  if (!sentences.length) return text.slice(0, 260);
  const terms = searchTerms(query, searchIndexCache || []);
  let best = 0, bestScore = -1;
  sentences.forEach((s, i) => {
    const n = normalizeSearch(s);
    const score = terms.reduce((sum, term) => sum + (searchHas(n, term.alts) ? 1 + Math.min(term.word.length, 8) / 8 : 0), 0);
    if (score > bestScore) { best = i; bestScore = score; }
  });
  let out = sentences[best];
  if (out.length < 70 && sentences[best + 1]) out += ` ${sentences[best + 1]}`;
  out = out.length > 320 ? `${out.slice(0, 317)}…` : out;
  return withScore ? { line: out, score: Math.max(bestScore, 0) } : out;
}

function answerCardHtml(a) {
  return `
    <section class="answer-card mb-6" aria-labelledby="answer-title">
      <span class="text-xs font-bold uppercase tracking-wider text-olive-900">${t('ans_label')}</span>
      <h2 id="answer-title" class="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">${a.title}</h2>
      <div class="mt-2 space-y-1.5 text-base text-slate-800 leading-relaxed">${a.lines.map(l => `<p>${l}</p>`).join("")}</div>
      <a href="${a.url}" class="inline-flex items-center gap-1 mt-4 px-4 py-2 rounded-lg bg-olive-900 hover:bg-olive-800 text-white text-sm font-bold">${a.label} <span class="flip-rtl inline-block" aria-hidden="true">&rarr;</span></a>
    </section>`;
}

// Example questions under the home search bar
// "Page not found" (404.html): list every page, and put the mistyped page name in the
// search bar (e.g. ".../qudrat-dates" becomes "qudrat dates") so one click searches for it
function init404Page() {
  const pages = document.getElementById("nf-pages");
  if (pages) {
    pages.innerHTML = SITE_PAGES.map(p =>
      `<a href="${p.href}" class="px-3 py-1.5 rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-100" data-i18n="${p.key}">${escapeHtml(t(p.key))}</a>`).join("");
  }
  const input = document.getElementById("nf-search-input");
  if (!input) return;
  let words = "";
  try { words = decodeURIComponent(location.pathname.split("/").filter(Boolean).pop() || ""); } catch (e) { /* a broken % code */ }
  words = words.replace(/\.[a-z]{2,4}$/i, "").replace(/[-_+.]+/g, " ").trim();
  if (/\p{L}{3}/u.test(words) && words.length <= 60) input.value = words;
}

function renderHomeExamples() {
  const box = document.getElementById("home-examples");
  if (!box) return;
  box.innerHTML = [1, 2, 3, 4].map(i => t(`home_ex_${i}`)).map(q =>
    `<a href="index.html?q=${encodeURIComponent(q)}" class="home-example">${escapeHtml(q)}</a>`).join("");
}
