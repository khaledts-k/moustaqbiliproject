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
  initCommonNav();
  loadLiveRates();

  const page = currentPageFile();
  if (page === "index.html") {
    initLandingSearch();
    initGpaCalculator();
    renderQudratHomeBanner();
  }
  if (page === "results.html") initResultsPage();
  if (page === "local-universities.html") initLocalUniversitiesPage();
  if (page === "qudrat.html") initQudratPage();
  if (page === "contact.html") initContactPage();
  if (page === "more-info.html") initMoreInfoPage();
  if (page === "clarifications.html") initClarificationsPage();
  if (page === "ask.html") initAskPage();
  if (page === "suggestions.html") initApplySteps();
  if (page === "navigate.html") initNavigatePage();
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

  fill(document.getElementById("select-country"), filters.countries, c => opt(c.value, ar ? c.labelAr : c.label));
  fill(document.getElementById("select-percentage"), filters.percentageRanges, p => opt(p.value, p.label));

  // Every major in the 2026/2027 plan, grouped by discipline and sorted by name
  const majorSelect = document.getElementById("select-major");
  if (majorSelect && window.PLAN_MAJORS) {
    const name = m => ar ? m.ar : m.en;
    fill(majorSelect, window.PLAN_DISCIPLINES, d => {
      const g = document.createElement("optgroup");
      g.label = ar ? d.ar : d.en;
      window.PLAN_MAJORS
        .filter(m => m.discipline === d.id)
        .sort((a, b) => name(a).localeCompare(name(b), ar ? "ar" : "en"))
        .forEach(m => g.appendChild(opt(m.id, name(m))));
      return g;
    });
  }
}

function planMajorById(id) {
  return (window.PLAN_MAJORS || []).find(m => m.id === id);
}

function initLandingSearch() {
  const form = document.getElementById("mohe-search-form");
  if (!form) return;

  const countrySelect = document.getElementById("select-country");
  const percentageSelect = document.getElementById("select-percentage");
  const majorSelect = document.getElementById("select-major");
  const meritCheckbox = document.getElementById("checkbox-merit-only");
  const validationAlert = document.getElementById("validation-alert");

  populateLandingSelects();
  window.addEventListener("languageChanged", populateLandingSelects);

  const bubbles = [
    { select: countrySelect, card: document.getElementById("bubble-country-card"), badge: document.getElementById("badge-country") },
    { select: percentageSelect, card: document.getElementById("bubble-percentage-card"), badge: document.getElementById("badge-percentage") },
    { select: majorSelect, card: document.getElementById("bubble-major-card"), badge: document.getElementById("badge-major") }
  ];

  const anySelected = () => countrySelect?.value || percentageSelect?.value || majorSelect?.value || meritCheckbox?.checked;

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

  const range = f.selectedPercentage ? getFilterConfig().percentageRanges.find(r => r.value === f.selectedPercentage) : null;
  const query = (f.keywordQuery || "").toLowerCase();
  const countryName = c => ar ? (window.PLAN_COUNTRIES[c] || c) : c;

  const shown = window.PLAN_MAJORS.map(m => {
    if (f.selectedMajor && m.id !== f.selectedMajor) return null;
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
  const anyFilter = !!(f.selectedMajor || f.selectedCountry || f.selectedPercentage || query);

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
  let isMeritOnly = urlParams.get("merit") === "1";
  let keywordQuery = "";

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
      chipEl.innerHTML = `<span>${chip.label}</span><button type="button" class="text-slate-500 hover:text-red-700 font-bold" aria-label="${t('chip_remove')}">&times;</button>`;
      chipEl.querySelector("button").addEventListener("click", () => {
        if (chip.type === "country") selectedCountry = "";
        if (chip.type === "percentage") selectedPercentage = "";
        if (chip.type === "major") selectedMajor = "";
        if (chip.type === "merit") isMeritOnly = false;
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
      selectedCountry = selectedPercentage = selectedMajor = "";
      isMeritOnly = false;
      updateUrlParams();
      renderResults();
    });
    activeFiltersContainer.appendChild(clearBtn);
  }

  function updateUrlParams() {
    const params = new URLSearchParams();
    if (selectedCountry) params.set("country", selectedCountry);
    if (selectedPercentage) params.set("percentage", selectedPercentage);
    if (selectedMajor) params.set("major", selectedMajor);
    if (isMeritOnly) params.set("merit", "1");
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

    const filtered = (window.MOUSTAQBILI_PROGRAMS || []).filter(matches);
    if (countBadge) countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? t('results_count_one') : t('results_count_many')}`;
    const planShown = renderPlanMajors({ selectedCountry, selectedPercentage, selectedMajor, isMeritOnly, keywordQuery });
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
    renderResults();
  });

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

  const content = showProgramModal(`
    ${modalHeader(prog, 'modal_requirements_subtitle')}

    <div class="flex border-b border-slate-200 bg-slate-100 text-xs font-bold overflow-x-auto" role="tablist">
      <button type="button" role="tab" aria-selected="true" class="modal-tab-btn active px-4 py-3 whitespace-nowrap" data-target="tab-grades">${t('modal_tab_grades')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-exams">${t('modal_tab_exams')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-deadlines">${t('modal_tab_deadlines')}</button>
      <button type="button" role="tab" aria-selected="false" class="modal-tab-btn px-4 py-3 whitespace-nowrap" data-target="tab-visa">${t('modal_tab_visa')}</button>
    </div>

    <div class="p-5 max-h-[62vh] overflow-y-auto bg-white text-xs sm:text-sm">

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

    ${modalFooter()}
  `);
  if (content) wireTabs(content);
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
        ${baseProg.isMerit ? `<p class="text-xs text-amber-900 mt-2">${t('salary_merit_note')}</p>` : ''}
        ${s.meritNoteKey ? `<p class="text-xs text-slate-500 mt-1">${t(s.meritNoteKey)}</p>` : ''}
        <p class="text-xs text-slate-400 mt-1">${t('salary_source_note')} <a class="underline" href="${window.MOHE_PLAN_2026?.allowancesUrl}" target="_blank" rel="noopener noreferrer">mohe.edu.kw</a></p>
      </section>

      <section class="p-4 rounded-xl border border-olive-200 bg-olive-50">
        <h3 class="text-sm font-extrabold text-slate-900">${t('calc_heading')}</h3>
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
        <p class="text-xs text-slate-400 mt-1">${fxNote()}</p>
      </section>

      <section>
        <h3 class="text-sm font-extrabold text-slate-900 mb-2">${t('modal_allowances_heading')}</h3>
        <div class="grid grid-cols-1 gap-2">
          ${prog.monthlySalary.allowancesSummary.map((a, i) => `<div class="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800">${ICON_CHECK}<span>${a}${i >= (baseProg.verifiedAllowances ?? 1) ? ` ${flag('unverified')}` : ''}</span></div>`).join("")}
        </div>
      </section>

      <section>
        <h3 class="text-sm font-extrabold text-slate-900 mb-1">${t('modal_institutions_heading')}${(baseProg.verifiedFields || []).includes('universities') ? '' : ` ${flag('unverified')}`}</h3>
        <p class="text-xs text-slate-500 mb-2">${t('institutions_note')} <a class="underline" href="https://nbaq.edu.kw/website/merits" target="_blank" rel="noopener noreferrer">nbaq.edu.kw</a></p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-800">
          ${prog.accreditedUniversities.map(u => `<li class="p-2 bg-slate-50 border border-slate-200 rounded">${u}</li>`).join("")}
        </ul>
      </section>
    </div>

    ${modalFooter()}
  `);
  if (!content) return;

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
  const list = (items) => `<ul class="space-y-1.5">${items.map(i => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${withFlags(i)}</span></li>`).join("")}</ul>`;
  const arr = (obj, field) => (isArabic() ? obj[`${field}Ar`] : obj[`${field}En`]) || obj[`${field}En`] || [];

  const steps = [
    { label: t('qudrat_registration'), value: formatRange(c.registration) },
    { label: t('qudrat_tests'), value: formatRange(c.tests) },
    { label: t('qudrat_results'), value: c.results ? formatDate(c.results) : `<span class="block text-sm font-semibold">${L(c, 'resultsNote')}</span> ${flag('unconfirmed')}` }
  ];

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
      <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
        <div>
          <h3 class="text-sm font-bold text-slate-900 mb-2">${t('qudrat_who')}</h3>
          ${list(arr(c, 'eligibility'))}
        </div>
        <div>
          <h3 class="text-sm font-bold text-slate-900 mb-2">${t('qudrat_how')}</h3>
          ${list(arr(c, 'steps'))}
          ${c.registerUrl ? `<a href="${c.registerUrl}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-olive-900 hover:bg-olive-800 text-white rounded-lg font-bold">${t('qudrat_register_btn')} ${ICON_EXTERNAL}</a>` : ''}
        </div>
      </div>
      ${arr(c, 'notes').length ? `<div class="px-6 pb-6 text-xs"><div class="p-3 rounded-lg bg-amber-50 border border-amber-300 text-amber-950">${list(arr(c, 'notes'))}</div></div>` : ''}
    </section>

    <!-- Test dates & registration deadlines -->
    <section id="dates" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-4">${t('qudrat_dates_title')}</h2>
      <div class="overflow-x-auto rounded-lg border border-slate-200 mb-5">
        <table class="w-full text-xs">
          <thead class="bg-slate-100 text-slate-600">
            <tr>
              <th class="p-3 text-start">${t('qudrat_col_test_date')}</th>
              <th class="p-3 text-start">${t('qudrat_col_reg_close')}</th>
              <th class="p-3 text-start">${t('qudrat_col_status')}</th>
            </tr>
          </thead>
          <tbody>
            ${(c.sessions || []).map(s => {
              const st = sessionStatus(s);
              return `
              <tr class="border-t border-slate-200">
                <th scope="row" class="p-3 text-start font-bold text-slate-900">${formatDate(s.test)}</th>
                <td class="p-3 text-slate-700">${formatDate(s.regClose)}</td>
                <td class="p-3"><span class="status-pill ${st.cls}">${t(`qudrat_${st.key}`)}</span></td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
      <h3 class="text-sm font-bold text-slate-900 mb-2">${t('qudrat_phases_title')}</h3>
      <ol class="space-y-2 text-xs">
        ${(c.openingPhases || []).map(p => `
          <li class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-lg border border-slate-200 ${daysBetween(new Date(), p.date) <= 0 ? 'bg-emerald-50/60' : 'bg-slate-50'}">
            <span class="font-bold text-slate-900 sm:w-40 flex-shrink-0">${formatDate(p.date)}</span>
            <span class="text-slate-700">${L(p, 'who')}</span>
          </li>`).join("")}
      </ol>
      <p class="text-xs text-slate-600 mt-4"><strong class="text-slate-800">${t('qudrat_next_cycle')}:</strong> ${L(data, 'nextCycle')} ${flag('unconfirmed')}</p>
    </section>

    <!-- Subjects & fees -->
    <section id="subjects" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-1">${t('qudrat_subjects_title')}</h2>
      <p class="text-xs text-slate-500 mb-4">${L(data, 'subjectsIntro')}</p>
      <div class="overflow-x-auto rounded-lg border border-slate-200">
        <table class="w-full text-xs">
          <thead class="bg-slate-100 text-slate-600">
            <tr>
              <th class="p-3 text-start">${t('qudrat_col_subject')}</th>
              <th class="p-3 text-start">${t('qudrat_col_required_for')}</th>
            </tr>
          </thead>
          <tbody>
            ${data.subjects.map(s => `
              <tr class="border-t border-slate-200">
                <th scope="row" class="p-3 text-start font-bold text-slate-900 whitespace-nowrap">${L(s, 'name')}</th>
                <td class="p-3 text-slate-700">${L(s, 'requiredFor')}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <dl class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
        ${data.facts.map(f => `
          <div class="p-3 bg-slate-50 rounded border border-slate-200">
            <dt class="text-xs font-bold text-slate-500">${L(f, 'label')}</dt>
            <dd class="font-bold text-slate-900 mt-0.5">${L(f, 'value')}</dd>
          </div>`).join("")}
      </dl>
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

    <!-- Rules -->
    <section id="rules" class="bg-white rounded-xl border border-slate-300 shadow-sm p-6 text-xs text-slate-700 scroll-mt-24">
      <h2 class="text-lg font-extrabold text-slate-900 mb-3">${t('qudrat_rules_title')}</h2>
      ${list(arr(data, 'rules'))}
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
    <section class="text-sm text-slate-500 border-t border-slate-200 pt-5">
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
      return `<ul class="space-y-3 text-sm text-slate-700 leading-7">${(ar ? block.ar : block.en).map(i => `<li class="flex items-start gap-2">${ICON_CHECK}<span>${i}</span></li>`).join("")}</ul>`;

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

    case "plan":
      return planHtml();

    case "contacts":
      // Same email/phone bubbles as the Contact page (copy buttons wired after render)
      return `<div class="space-y-2">${block.items.map(contactLine).join("")}</div>`;

    case "allowances": {
      const rows = (window.MORE_INFO?.allowances || []).map(a => {
        const kwd = (amount) => money(convertAmount(amount, a.currency, "KWD", FX.rates), "KWD");
        const merit = typeof a.merit === "number"
          ? `<span class="font-bold text-slate-900 block">${kwd(a.merit)}</span><span class="text-xs text-slate-500">${formatNumber(a.merit)} ${a.currency}</span>`
          : (a.meritFlag ? flag(a.meritFlag) : `<span class="text-slate-400">${t('allow_no_merit')}</span>`);
        return `
          <tr class="border-t border-slate-200">
            <th scope="row" class="p-3 text-start font-bold text-slate-900 whitespace-nowrap">${L(a, 'country')}</th>
            <td class="p-3"><span class="font-bold text-slate-900 block">${kwd(a.standard)}</span><span class="text-xs text-slate-500">${formatNumber(a.standard)} ${a.currency}</span></td>
            <td class="p-3">${merit}</td>
          </tr>`;
      }).join("");
      return `
        <div class="overflow-x-auto rounded-xl border border-slate-200 mb-3">
          <table class="w-full text-sm">
            <thead class="bg-slate-100 text-slate-600 text-xs">
              <tr>
                <th class="p-3 text-start">${t('plan_col_country')}</th>
                <th class="p-3 text-start">${t('allow_col_standard')}</th>
                <th class="p-3 text-start">${t('allow_col_merit')}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
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
    <details class="faq-item bg-white rounded-xl border border-slate-300 shadow-sm group">
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
function loadTickedSteps() {
  try { return new Set(JSON.parse(localStorage.getItem(STEPS_KEY) || "[]")); } catch (e) { return new Set(); }
}
function saveTickedSteps(set) {
  try { localStorage.setItem(STEPS_KEY, JSON.stringify([...set])); } catch (e) { /* ignore */ }
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

// One college: lowest admitted grade, how the score is counted, extra conditions, majors
function collegeRow(c, floorLabel) {
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

  return `
    <div class="p-4 rounded-xl border border-slate-200 bg-white">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h4 class="text-base font-bold text-slate-900">${ar ? (c.collegeNameAr || c.collegeName) : c.collegeName}</h4>
        <div class="flex flex-wrap items-center gap-2">
          <span class="grade-pill ${c.flag ? 'is-missing' : ''}">
            <span class="grade-pill-label">${floorLabel}</span>
            <span class="grade-pill-value" dir="auto">${ar ? (c.minThanawiyaAr || c.minThanawiya) : c.minThanawiya}</span>
          </span>
          ${c.flag ? flag(c.flag) : ''}
        </div>
      </div>
      ${(scoring || condition || majors) ? `<div class="mt-3 pt-3 border-t border-slate-100 space-y-2">
        ${line(t('local_how_counted'), scoring)}
        ${line(t('equiv_condition'), condition.split(/[;؛]/).map(s => s.trim()).filter(Boolean).map(s => `<span class="req-chip is-condition"><span>${s}</span></span>`).join(""))}
        ${line(c.majors?.some(m => m.grade) ? t('local_majors_grades') : t('local_majors'), majors, c.majorsFlag ? ` ${flag(c.majorsFlag)}` : "")}
      </div>` : ''}
    </div>`;
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
    card.className = "bg-white rounded-xl border border-slate-300 p-6 shadow-sm mb-6";
    const pick = (en, ar) => isAr ? (uni[ar] || uni[en]) : uni[en];

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
        <div>
          <span class="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">${pick('typeEn', 'typeAr')}</span>
          <h2 class="text-xl font-black text-slate-900 mt-2">${pick('name', 'nameAr')}</h2>
          <p class="text-xs text-slate-600 mt-1">${pick('campusLocation', 'campusLocationAr')}</p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs max-w-sm">
          <strong class="text-emerald-900 block mb-0.5">${t('local_funding')}</strong>
          <span class="text-emerald-800 font-semibold">${pick('scholarshipFunding', 'scholarshipFundingAr')}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-5">
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">${t('local_admission')}</strong>
          <span class="text-slate-600">${pick('admissionSystem', 'admissionSystemAr')}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">${t('local_aptitude')}</strong>
          <span class="text-slate-600">${pick('aptitudeExams', 'aptitudeExamsAr')}</span>
          ${uni.id === 'kuwait-university' ? `<a href="qudrat.html" class="block mt-1 font-semibold text-olive-900 underline">${t('local_qudrat_link')}</a>` : ''}
        </div>
      </div>

      <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">${t('local_colleges')}</h3>
      <div class="space-y-3">
        ${uni.colleges.map(c => collegeRow(c, pick('floorLabelEn', 'floorLabelAr'))).join("")}
      </div>
      ${uni.sourceNote ? `<p class="text-xs text-slate-400 mt-3">${pick('sourceNote', 'sourceNoteAr')}</p>` : ''}
    `;
    container.appendChild(card);
  });
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
