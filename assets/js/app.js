/**
 * moustaqbili | مستقبلي
 * The Official Kuwait Higher Education Portal
 * بوابة مستقبلي الموحدة للبعثات الخارجية والاعتماد الأكاديمي
 *
 * Core Application Engine:
 * - Real 2025/2026 Kuwait MoHE Scholarship Search & Decree 16/2025 Merit Verification
 * - Interactive 4.0 GPA to Percentage Converter (Kuwait Private Education Department Curve)
 * - School Graduate Split (Public Thanawiya %, US Diploma GPA, UK IGCSE/A-Levels)
 * - Multi-Tab Enriched Program Modal (Salaries, Exams, Deadlines, Visa, Personal Statements)
 * - Local Kuwait Universities Directory (Kuwait University, AASU, and Private PUC Scholarships)
 */

document.addEventListener("DOMContentLoaded", () => {
  initCommonNav();

  const path = window.location.pathname;
  if (path.endsWith("index.html") || path.endsWith("/") || !path.includes(".html")) {
    initLandingSearch();
    initGpaCalculator();
  }
  if (path.endsWith("results.html")) {
    initResultsPage();
  }
  if (path.endsWith("local-universities.html")) {
    initLocalUniversitiesPage();
  }
});

// =========================================================================
// 1. Navigation & Institutional Header
// =========================================================================
function initCommonNav() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".gov-nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("text-white", "font-bold", "border-b-2", "border-emerald-500");
      link.classList.remove("text-slate-300");
    }
  });
}

// =========================================================================
// 2. Official Kuwait 4.0 GPA to Percentage Calculator (إدارة التعليم الخاص)
// =========================================================================
function initGpaCalculator() {
  const gpaInput = document.getElementById("gpa-calc-input");
  const calcBtn = document.getElementById("gpa-calc-btn");
  const resultBox = document.getElementById("gpa-calc-result");
  const percentDisplay = document.getElementById("gpa-calc-percentage");
  const tierDisplay = document.getElementById("gpa-calc-tier");
  const applyBtn = document.getElementById("gpa-apply-btn");

  if (!gpaInput) return;

  function calculate() {
    const gpa = parseFloat(gpaInput.value);
    if (isNaN(gpa) || gpa < 1.0 || gpa > 4.0) {
      if (resultBox) resultBox.classList.add("hidden");
      return;
    }

    let percentage = 0;
    if (gpa >= 3.90) {
      percentage = 98.0 + ((gpa - 3.90) / 0.10) * 2.0;
    } else if (gpa >= 3.70) {
      percentage = 93.0 + ((gpa - 3.70) / 0.20) * 4.9;
    } else if (gpa >= 3.50) {
      percentage = 88.0 + ((gpa - 3.50) / 0.20) * 4.9;
    } else if (gpa >= 3.20) {
      percentage = 82.0 + ((gpa - 3.20) / 0.30) * 5.9;
    } else if (gpa >= 3.00) {
      percentage = 77.0 + ((gpa - 3.00) / 0.20) * 4.9;
    } else if (gpa >= 2.80) {
      percentage = 72.0 + ((gpa - 2.80) / 0.20) * 4.9;
    } else if (gpa >= 2.50) {
      percentage = 67.0 + ((gpa - 2.50) / 0.30) * 4.9;
    } else {
      percentage = 60.0 + ((gpa - 2.0) / 0.50) * 6.9;
    }

    percentage = Math.min(100.0, Math.max(60.0, percentage));

    let tierLabel = "";
    let tierColor = "";
    if (percentage >= 97.0) {
      tierLabel = "Qualifies for Ireland & Bahrain Clinical Medicine (97.0% floor) & UK/US Medicine";
      tierColor = "text-emerald-700";
    } else if (percentage >= 95.0) {
      tierLabel = "Qualifies for UK, US, Australia, New Zealand & Malta Medicine (95.0% floor)";
      tierColor = "text-emerald-700";
    } else if (percentage >= 90.0) {
      tierLabel = "Qualifies for US Engineering (GPA 3.50), UK Pharmacy & Radiography";
      tierColor = "text-emerald-700";
    } else if (percentage >= 85.0) {
      tierLabel = "Qualifies for US Computer Science (GPA 3.25), UK AI & Cyber Security";
      tierColor = "text-amber-700";
    } else if (percentage >= 80.0) {
      tierLabel = "Qualifies for US Basic Sciences (GPA 3.00), English Literature, and Business";
      tierColor = "text-slate-800";
    } else {
      tierLabel = "Qualifies for select Private University PUC Internal Scholarships in Kuwait (60-70%)";
      tierColor = "text-slate-600";
    }

    if (percentDisplay) percentDisplay.textContent = `${percentage.toFixed(2)}%`;
    if (tierDisplay) {
      tierDisplay.textContent = tierLabel;
      tierDisplay.className = `text-xs font-semibold ${tierColor} block mt-1`;
    }
    if (resultBox) resultBox.classList.remove("hidden");

    if (applyBtn) {
      applyBtn.onclick = () => {
        const selectPercentage = document.getElementById("select-percentage");
        if (selectPercentage) {
          if (percentage >= 97.0) selectPercentage.value = "97.0+";
          else if (percentage >= 95.0) selectPercentage.value = "95.0-96.9";
          else if (percentage >= 90.0) selectPercentage.value = "90.0-94.9";
          else if (percentage >= 85.0) selectPercentage.value = "85.0-89.9";
          else selectPercentage.value = "80.0-84.9";

          selectPercentage.dispatchEvent(new Event("change"));
          selectPercentage.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      };
    }
  }

  gpaInput.addEventListener("input", calculate);
  calcBtn?.addEventListener("click", calculate);
}

// =========================================================================
// 3. Landing Search Screen & Validation
// =========================================================================
function initLandingSearch() {
  const form = document.getElementById("mohe-search-form");
  if (!form) return;

  const countrySelect = document.getElementById("select-country");
  const percentageSelect = document.getElementById("select-percentage");
  const majorSelect = document.getElementById("select-major");
  const meritCheckbox = document.getElementById("checkbox-merit-only");
  const validationAlert = document.getElementById("validation-alert");

  const filters = window.MOUSTAQBILI_FILTERS || window.MOHE_KUWAIT_FILTERS;

  if (filters && countrySelect && countrySelect.options.length <= 1) {
    filters.countries.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.value;
      opt.textContent = `${c.label}`;
      countrySelect.appendChild(opt);
    });
  }

  if (filters && percentageSelect && percentageSelect.options.length <= 1) {
    filters.percentageRanges.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.value;
      opt.textContent = `${p.label}`;
      percentageSelect.appendChild(opt);
    });
  }

  if (filters && majorSelect && majorSelect.options.length <= 1) {
    const categories = {};
    filters.majors.forEach(m => {
      if (!categories[m.category]) categories[m.category] = [];
      categories[m.category].push(m);
    });

    for (const [cat, majors] of Object.entries(categories)) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = cat.toUpperCase();
      majors.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.value;
        opt.textContent = m.label;
        optgroup.appendChild(opt);
      });
      majorSelect.appendChild(optgroup);
    }
  }

  const bubbles = [
    { select: countrySelect, card: document.getElementById("bubble-country-card"), badge: document.getElementById("badge-country") },
    { select: percentageSelect, card: document.getElementById("bubble-percentage-card"), badge: document.getElementById("badge-percentage") },
    { select: majorSelect, card: document.getElementById("bubble-major-card"), badge: document.getElementById("badge-major") }
  ];

  bubbles.forEach(b => {
    if (!b.select) return;
    b.select.addEventListener("change", () => {
      if (b.select.value) {
        b.card?.classList.add("has-value");
        if (b.badge) {
          b.badge.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
        }
      } else {
        b.card?.classList.remove("has-value");
        if (b.badge) {
          b.badge.innerHTML = b.badge.getAttribute("data-num");
        }
      }
      if (countrySelect?.value || percentageSelect?.value || majorSelect?.value || meritCheckbox?.checked) {
        validationAlert?.classList.add("hidden");
      }
    });
  });

  const meritCard = document.getElementById("merit-option-card");
  if (meritCheckbox && meritCard) {
    meritCheckbox.addEventListener("change", () => {
      if (meritCheckbox.checked) {
        meritCard.classList.add("border-amber-500", "bg-amber-50/50");
        validationAlert?.classList.add("hidden");
      } else {
        meritCard.classList.remove("border-amber-500", "bg-amber-50/50");
      }
    });
  }

  // Real-time Equivalent Score Calculator (المعدل المكافئ)
  const inputExactPct = document.getElementById("input-exact-pct");
  const inputAptitude = document.getElementById("input-aptitude-score");
  const equivalentResultBox = document.getElementById("equivalent-score-display");

  function calculateEquivalentScore() {
    if (!equivalentResultBox) return;
    const pct = parseFloat(inputExactPct?.value) || 0;
    const apt = parseFloat(inputAptitude?.value) || 0;

    if (pct > 0 && apt > 0) {
      const equiv = (pct * 0.70) + (apt * 0.30);
      equivalentResultBox.textContent = `المعدل المكافئ المحسوب: ${equiv.toFixed(2)}% (ثانوية 70% + قدرات 30%)`;
      equivalentResultBox.classList.remove("hidden");
    } else {
      equivalentResultBox.classList.add("hidden");
    }
  }

  inputExactPct?.addEventListener("input", calculateEquivalentScore);
  inputAptitude?.addEventListener("input", calculateEquivalentScore);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const country = countrySelect?.value.trim() || "";
    const percentage = percentageSelect?.value.trim() || "";
    const major = majorSelect?.value.trim() || "";
    const meritOnly = meritCheckbox?.checked ? "1" : "0";
    const exactPct = inputExactPct?.value.trim() || "";
    const aptitude = inputAptitude?.value.trim() || "";

    const hasAtLeastOne = country !== "" || percentage !== "" || major !== "" || meritOnly === "1";

    if (!hasAtLeastOne) {
      if (validationAlert) {
        validationAlert.classList.remove("hidden");
        validationAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      bubbles.forEach(b => {
        b.card?.classList.add("border-amber-500", "ring-2", "ring-amber-200");
        setTimeout(() => b.card?.classList.remove("border-amber-500", "ring-2", "ring-amber-200"), 2000);
      });
      return;
    }

    const params = new URLSearchParams();
    if (country) params.set("country", country);
    if (percentage) params.set("percentage", percentage);
    if (major) params.set("major", major);
    if (meritOnly === "1") params.set("merit", "1");
    if (exactPct) params.set("exactPct", exactPct);
    if (aptitude) params.set("aptitude", aptitude);

    window.location.href = `results.html?${params.toString()}`;
  });
}

// =========================================================================
// 4. Results Page Directory & Multi-Dimension Filtering
// =========================================================================

// Translation lookup for dynamically rendered UI (falls back to English, then the key)
function t(key) {
  const lang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'en';
  const dict = window.MOUSTAQBILI_TRANSLATIONS || {};
  return dict[lang]?.[key] ?? dict.en?.[key] ?? key;
}

function isArabic() {
  return typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'ar';
}

/**
 * Merge an Arabic overlay (from data-ar.js) onto a base English program object.
 * The overlay mirrors the program's shape but only contains translated fields;
 * anything missing from the overlay must fall back to the English base value.
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

// Returns the program in the current display language (English base is never modified)
function localizeProgram(prog) {
  if (!isArabic()) return prog;
  const overlay = window.MOUSTAQBILI_PROGRAMS_AR?.[prog.id];
  return overlay ? mergeTranslation(prog, overlay) : prog;
}

// Set once the results page is initialised, so language changes re-render instead of re-binding listeners
let rerenderResults = null;
let openModalProgram = null;

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
  let exactPct = parseFloat(urlParams.get("exactPct")) || null;
  let aptitudeScore = parseFloat(urlParams.get("aptitude")) || null;
  let keywordQuery = "";

  function updateMeritToggleBtnUI() {
    if (!meritToggleBtn) return;
    if (isMeritOnly) {
      meritToggleBtn.classList.add("bg-amber-500", "text-slate-900", "border-amber-600");
      meritToggleBtn.classList.remove("bg-white", "text-slate-700", "border-slate-300");
      meritToggleBtn.innerHTML = `
        <svg class="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <span>${t('merit_toggle_on')}</span>
      `;
    } else {
      meritToggleBtn.classList.remove("bg-amber-500", "text-slate-900", "border-amber-600");
      meritToggleBtn.classList.add("bg-white", "text-slate-700", "border-slate-300");
      meritToggleBtn.innerHTML = `
        <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
        <span>${t('merit_toggle_off')}</span>
      `;
    }
  }

  meritToggleBtn?.addEventListener("click", () => {
    isMeritOnly = !isMeritOnly;
    updateMeritToggleBtnUI();
    updateUrlParams();
    renderResults();
  });

  function renderFilterChips() {
    if (!activeFiltersContainer) return;
    activeFiltersContainer.innerHTML = "";

    const chips = [];
    if (selectedCountry) chips.push({ type: "country", label: `${t('chip_country')}: ${selectedCountry}` });
    if (selectedPercentage) chips.push({ type: "percentage", label: `${t('chip_percentage')}: ${selectedPercentage}` });
    if (selectedMajor) chips.push({ type: "major", label: `${t('chip_major')}: ${selectedMajor}` });
    if (isMeritOnly) chips.push({ type: "merit", label: t('chip_merit') });
    if (exactPct) chips.push({ type: "exactPct", label: `${t('chip_exact_pct')}: ${exactPct.toFixed(2)}%` });
    if (aptitudeScore) chips.push({ type: "aptitude", label: `${t('chip_aptitude')}: ${aptitudeScore}%` });

    if (chips.length === 0) {
      activeFiltersContainer.innerHTML = `<span class="text-xs text-slate-500 italic">${t('chips_none')}</span>`;
      return;
    }

    chips.forEach(chip => {
      const chipEl = document.createElement("div");
      chipEl.className = `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md border ${
        chip.type === 'merit' 
          ? 'bg-amber-100 text-amber-900 border-amber-300' 
          : 'bg-slate-100 text-slate-800 border-slate-300'
      }`;
      chipEl.innerHTML = `
        <span>${chip.label}</span>
        <button type="button" class="text-slate-500 hover:text-red-700 ml-1 font-bold focus:outline-none" aria-label="${t('chip_remove')}">&times;</button>
      `;

      chipEl.querySelector("button").addEventListener("click", () => {
        if (chip.type === "country") selectedCountry = "";
        if (chip.type === "percentage") selectedPercentage = "";
        if (chip.type === "major") selectedMajor = "";
        if (chip.type === "merit") isMeritOnly = false;
        if (chip.type === "exactPct") exactPct = null;
        if (chip.type === "aptitude") aptitudeScore = null;
        updateMeritToggleBtnUI();
        updateUrlParams();
        renderResults();
      });

      activeFiltersContainer.appendChild(chipEl);
    });

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "text-xs font-semibold text-red-700 hover:text-red-900 underline ml-2 transition";
    clearBtn.textContent = t('btn_reset_criteria');
    clearBtn.addEventListener("click", () => {
      selectedCountry = "";
      selectedPercentage = "";
      selectedMajor = "";
      isMeritOnly = false;
      exactPct = null;
      aptitudeScore = null;
      updateMeritToggleBtnUI();
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
    if (exactPct) params.set("exactPct", exactPct);
    if (aptitudeScore) params.set("aptitude", aptitudeScore);
    const newRelativePathQuery = window.location.pathname + (params.toString() ? `?${params.toString()}` : "");
    window.history.replaceState(null, "", newRelativePathQuery);
  }

  function renderResults() {
    renderFilterChips();
    updateMeritToggleBtnUI();

    const allPrograms = window.MOUSTAQBILI_PROGRAMS || window.MOHE_KUWAIT_PROGRAMS || [];
    const filtered = allPrograms.filter(prog => {
      if (isMeritOnly && !prog.isMerit) return false;
      if (selectedCountry && prog.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;

      if (selectedPercentage) {
        const rangeObj = (window.MOUSTAQBILI_FILTERS || window.MOHE_KUWAIT_FILTERS)?.percentageRanges.find(r => r.value === selectedPercentage);
        if (rangeObj) {
          const minScoreStr = prog.schoolGradSplit?.publicSchool?.minScore || "";
          const reqMin = parseFloat(minScoreStr) || 0;
          if (selectedPercentage === "80.0-84.9" && reqMin > 84.9) return false;
          if (selectedPercentage === "85.0-89.9" && reqMin > 89.9) return false;
          if (selectedPercentage === "90.0-94.9" && reqMin > 94.9) return false;
          if (selectedPercentage === "95.0-96.9" && reqMin > 96.9) return false;
        }
      }

      if (exactPct !== null) {
        const minScoreStr = prog.schoolGradSplit?.publicSchool?.minScore || "";
        const reqMin = parseFloat(minScoreStr) || 0;
        if (reqMin > exactPct) return false;
      }

      if (selectedMajor) {
        const matchesMajor = prog.majors.some(m => 
          m.toLowerCase().includes(selectedMajor.toLowerCase()) || 
          selectedMajor.toLowerCase().includes(m.toLowerCase())
        );
        if (!matchesMajor) return false;
      }

      if (keywordQuery) {
        const fullText = `${prog.title} ${prog.titleAr} ${prog.country} ${prog.countryAr} ${prog.category} ${prog.majors.join(" ")} ${prog.accreditedUniversities.join(" ")}`.toLowerCase();
        if (!fullText.includes(keywordQuery.toLowerCase())) return false;
      }

      return true;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? t('results_count_one') : t('results_count_many')}`;
    }

    if (!container) return;
    container.innerHTML = "";

    if (filtered.length === 0) {
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    } else {
      if (emptyState) emptyState.classList.add("hidden");
    }

    const isAr = isArabic();
    // Card shows a shortened value: English strings are cut at a field-specific marker,
    // Arabic strings in data-ar.js are written so the short form comes before "("
    const short = (str, enMarker = '(') => (isAr ? str.split('(')[0] : str.split(enMarker)[0]).trim();

    filtered.forEach(baseProg => {
      const prog = localizeProgram(baseProg);
      const card = document.createElement("div");
      card.className = `gov-program-card rounded-xl p-6 flex flex-col justify-between border ${
        prog.isMerit ? 'merit-card-accent' : ''
      }`;

      card.innerHTML = `
        <div>
          <!-- Header Badges -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>${isAr ? `${prog.countryAr} (${prog.country})` : `${prog.country} (${prog.countryAr})`}</span>
            </span>

            ${prog.isMerit ? `
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold merit-tag uppercase tracking-wide">
                <svg class="w-3.5 h-3.5 text-amber-700" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>${t('card_merit_badge')}</span>
              </span>
            ` : `
              <span class="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                ${t('card_plan_badge')}
              </span>
            `}
          </div>

          <!-- Titles -->
          <h3 class="text-lg font-extrabold text-slate-900 leading-snug mb-1">
            ${isAr ? prog.titleAr : prog.title}
          </h3>
          <h4 class="text-xs font-semibold text-slate-500 mb-3" dir="${isAr ? 'ltr' : 'rtl'}">
            ${isAr ? prog.title : prog.titleAr}
          </h4>

          <!-- Monthly Ministerial Salary Badge -->
          <div class="salary-badge rounded-lg p-2.5 mb-3 flex items-center justify-between text-xs">
            <div class="flex items-center gap-1.5">
              <span class="font-bold">${t('card_stipend_label')}</span>
              <span class="font-extrabold">${prog.monthlySalary.meritAmount !== 'N/A' && prog.isMerit ? prog.monthlySalary.meritAmount : prog.monthlySalary.standardAmount}</span>
            </div>
            <span class="text-[11px] text-emerald-800 font-semibold">${prog.monthlySalary.kwdEquivalent.split('|')[0].trim()}</span>
          </div>

          <!-- Exam & Curriculum Overview -->
          <div class="bg-slate-50 rounded-lg p-3 border border-slate-200 mb-4 text-xs space-y-2">
            <div class="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
              <span class="text-slate-500 font-medium">${t('card_public_floor')}</span>
              <span class="font-bold text-slate-900">${short(prog.schoolGradSplit.publicSchool.minScore)} (${short(prog.schoolGradSplit.publicSchool.stream)})</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
              <span class="text-slate-500 font-medium">${t('card_us_uk')}</span>
              <span class="font-bold text-slate-900">${short(prog.schoolGradSplit.usDiploma.minScore, 'Cumulative')} | ${short(prog.schoolGradSplit.ukSystem.minScore, 'with')}</span>
            </div>
            <div class="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
              <span class="text-slate-500 font-medium">${t('card_ukvi_question')}</span>
              <span class="font-bold ${prog.necessaryExams.ukviIeltsRequired ? 'text-amber-700' : 'text-slate-700'}">
                ${prog.necessaryExams.ukviIeltsRequired ? t('card_ukvi_yes') : t('card_ukvi_no')}
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500 font-medium">${t('card_deadlines')}</span>
              <span class="font-semibold text-slate-800 text-[11px] truncate max-w-[200px]" title="${prog.deadlines.earlyAction || prog.deadlines.regularDecision}">
                ${prog.deadlines.earlyAction ? short(prog.deadlines.earlyAction) : short(prog.deadlines.regularDecision)}
              </span>
            </div>
          </div>

          <!-- Prerequisite Subject Floors -->
          <div class="mb-4">
            <span class="text-[11px] font-bold text-slate-600 block uppercase tracking-wider mb-1.5">${t('card_course_minimums')}</span>
            <div class="flex flex-wrap gap-1">
              ${prog.courseSubjectFloors.map(c => `
                <span class="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 rounded text-[11px] font-semibold">
                  ${short(c.subject)}: ${short(c.minGrade)}
                </span>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
          <span class="text-[11px] text-slate-500 font-medium">
            ${t('card_ref')}
          </span>
          <button class="px-3.5 py-2 bg-olive-900 hover:bg-olive-800 text-white rounded-lg text-xs font-bold tracking-wide transition flex items-center gap-1.5 shadow-sm">
            <span>${t('card_view_full')}</span>
            <svg class="w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      `;

      card.addEventListener("click", () => openEnrichedProgramModal(baseProg));
      container.appendChild(card);
    });
  }

  if (keywordInput) {
    keywordInput.addEventListener("input", (e) => {
      keywordQuery = e.target.value.trim();
      renderResults();
    });
  }

  renderResults();
  initFeedbackWidget();
  rerenderResults = renderResults;
}

// =========================================================================
// 5. Enriched Multi-Tab Program Details Modal
// =========================================================================
function openEnrichedProgramModal(baseProg) {
  const modal = document.getElementById("program-modal");
  if (!modal) return;

  const content = document.getElementById("modal-dynamic-content");
  if (!content) return;

  openModalProgram = baseProg;
  const prog = localizeProgram(baseProg);
  const isAr = isArabic();

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 bg-olive-950 text-white border-b border-olive-900 flex items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="gov-seal-badge">moustaqbili | مستقبلي</span>
          ${prog.isMerit ? `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-slate-950 uppercase">${t('card_merit_badge')}</span>` : ''}
          <span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-olive-900 text-slate-200">${isAr ? prog.countryAr : prog.country}</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight">${isAr ? prog.titleAr : prog.title}</h2>
        <h3 class="text-xs text-slate-300 font-medium mt-1" dir="${isAr ? 'ltr' : 'rtl'}">${isAr ? prog.title : prog.titleAr}</h3>
      </div>
      <button id="close-modal-btn" class="text-slate-400 hover:text-white text-2xl font-bold p-1 leading-none">&times;</button>
    </div>

    <!-- Modal Tabs Navigation -->
    <div class="flex border-b border-slate-200 bg-slate-100 text-xs font-bold overflow-x-auto">
      <button class="modal-tab-btn active px-4 py-3" data-target="tab-salary">${t('modal_tab_salary')}</button>
      <button class="modal-tab-btn px-4 py-3 text-slate-600" data-target="tab-curriculum">${t('modal_tab_curriculum')}</button>
      <button class="modal-tab-btn px-4 py-3 text-slate-600" data-target="tab-exams">${t('modal_tab_exams')}</button>
      <button class="modal-tab-btn px-4 py-3 text-slate-600" data-target="tab-deadlines">${t('modal_tab_deadlines')}</button>
      <button class="modal-tab-btn px-4 py-3 text-slate-600" data-target="tab-visa">${t('modal_tab_visa')}</button>
    </div>

    <!-- Modal Tab Contents -->
    <div class="p-6 max-h-[65vh] overflow-y-auto bg-white text-xs sm:text-sm space-y-6">
      
      <!-- TAB 1: SALARY & BENEFITS -->
      <div id="tab-salary" class="tab-pane space-y-4">
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">${t('modal_stipend_heading')}</span>
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span class="text-2xl font-black text-emerald-950">${prog.monthlySalary.meritAmount !== 'N/A' && prog.isMerit ? prog.monthlySalary.meritAmount : prog.monthlySalary.standardAmount}</span>
            <span class="text-sm font-bold text-emerald-800">${prog.monthlySalary.kwdEquivalent}</span>
          </div>
          <p class="text-xs text-emerald-900 mt-2">${t('modal_stipend_note')}</p>
        </div>

        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${t('modal_allowances_heading')}</h4>
        <div class="grid grid-cols-1 gap-2">
          ${prog.monthlySalary.allowancesSummary.map(a => `
            <div class="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800">
              <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              <span>${a}</span>
            </div>
          `).join("")}
        </div>

        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mt-4">${t('modal_institutions_heading')}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${prog.accreditedUniversities.map(u => `
            <div class="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs font-semibold text-slate-800 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>${u}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- TAB 2: SCHOOL GRAD SPLIT & COURSES -->
      <div id="tab-curriculum" class="tab-pane hidden space-y-4">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${t('modal_curriculum_heading')}</h4>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_public_school')}</span>
            <span class="text-base font-black text-emerald-800 block">${prog.schoolGradSplit.publicSchool.minScore}</span>
            <span class="text-xs text-slate-600 font-semibold block mt-0.5">${prog.schoolGradSplit.publicSchool.stream}</span>
            <p class="text-[11px] text-slate-500 mt-2">${prog.schoolGradSplit.publicSchool.notes}</p>
          </div>

          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_us_diploma')}</span>
            <span class="text-base font-black text-emerald-800 block">${prog.schoolGradSplit.usDiploma.minScore}</span>
            <span class="text-xs text-slate-600 font-semibold block mt-0.5">${prog.schoolGradSplit.usDiploma.coursePrereqs}</span>
            <p class="text-[11px] text-slate-500 mt-2">${prog.schoolGradSplit.usDiploma.standardizedRequirement}</p>
          </div>

          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_uk_system')}</span>
            <span class="text-base font-black text-emerald-800 block">${prog.schoolGradSplit.ukSystem.minScore}</span>
            <span class="text-xs text-slate-600 font-semibold block mt-0.5">${prog.schoolGradSplit.ukSystem.igcseReqs}</span>
            <p class="text-[11px] text-slate-500 mt-2">${prog.schoolGradSplit.ukSystem.aLevelSubjects}</p>
          </div>
        </div>

        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mt-4">${t('modal_floors_heading')}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${prog.courseSubjectFloors.map(c => `
            <div class="p-3 bg-slate-50 border border-slate-200 rounded text-xs flex items-center justify-between">
              <span class="font-bold text-slate-800">${c.subject}</span>
              <span class="font-bold text-emerald-800">${c.minGrade}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- TAB 3: EXAMS & ESSAYS -->
      <div id="tab-exams" class="tab-pane hidden space-y-4">
        <div class="p-4 rounded-xl border ${prog.necessaryExams.ukviIeltsRequired ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-300'}">
          <div class="flex items-center gap-2 font-bold ${prog.necessaryExams.ukviIeltsRequired ? 'text-amber-900' : 'text-slate-900'} text-xs mb-1">
            <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${t('modal_language_advisory')}</span>
          </div>
          <p class="text-xs ${prog.necessaryExams.ukviIeltsRequired ? 'text-amber-800' : 'text-slate-600'} leading-relaxed">
            ${prog.necessaryExams.ukviIeltsNote}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-3.5 bg-slate-50 rounded border border-slate-200">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_sat_heading')}</span>
            <p class="text-xs text-slate-700">${prog.necessaryExams.satActStatus}</p>
            ${baseProg.necessaryExams.satTargetScore !== 'N/A' ? `<span class="text-[11px] font-semibold text-emerald-800 block mt-1">${t('modal_sat_target')}: ${prog.necessaryExams.satTargetScore} | ACT: ${prog.necessaryExams.actTargetScore}</span>` : ''}
          </div>

          <div class="p-3.5 bg-slate-50 rounded border border-slate-200">
            <span class="text-xs font-bold text-slate-900 block mb-1">${t('modal_english_heading')}</span>
            <p class="text-xs text-slate-700">${prog.necessaryExams.englishProficiency}</p>
            <span class="text-[11px] text-slate-500 block mt-1">${prog.necessaryExams.otherExams}</span>
          </div>
        </div>

        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mt-4">${t('modal_essay_heading')}</h4>
        <div class="p-4 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
          <div>
            <strong class="text-slate-900">${t('modal_platform')}</strong> <span>${prog.personalStatementReqs.platform}</span>
          </div>
          <div>
            <strong class="text-slate-900">${t('modal_word_count')}</strong> <span>${prog.personalStatementReqs.wordCount}</span>
          </div>
          <div>
            <strong class="text-slate-900">${t('modal_supplemental')}</strong> <span>${prog.personalStatementReqs.supplementalEssays}</span>
          </div>
          <div>
            <strong class="text-slate-900">${t('modal_mohe_form')}</strong> <span>${prog.personalStatementReqs.moheLetter}</span>
          </div>
        </div>
      </div>

      <!-- TAB 4: DEADLINES & DIRECT ENTRY -->
      <div id="tab-deadlines" class="tab-pane hidden space-y-4">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${t('modal_deadlines_heading')}</h4>

        <div class="space-y-2 text-xs">
          <div class="p-3 bg-slate-50 rounded border border-slate-200 flex justify-between items-center">
            <div>
              <strong class="text-slate-900 block">${t('modal_ea')}</strong>
              <span class="text-slate-500 text-[11px]">${t('modal_ea_desc')}</span>
            </div>
            <span class="font-bold text-slate-800">${prog.deadlines.earlyAction || t('modal_na_region')}</span>
          </div>

          <div class="p-3 bg-slate-50 rounded border border-slate-200 flex justify-between items-center">
            <div>
              <strong class="text-slate-900 block">${t('modal_ed')}</strong>
              <span class="text-slate-500 text-[11px]">${t('modal_ed_desc')}</span>
            </div>
            <span class="font-bold text-slate-800">${prog.deadlines.earlyDecision || t('modal_na_region')}</span>
          </div>

          <div class="p-3 bg-slate-50 rounded border border-slate-200 flex justify-between items-center">
            <div>
              <strong class="text-slate-900 block">${t('modal_rd')}</strong>
              <span class="text-slate-500 text-[11px]">${t('modal_rd_desc')}</span>
            </div>
            <span class="font-bold text-slate-800">${prog.deadlines.regularDecision}</span>
          </div>

          <div class="p-3 bg-emerald-50 rounded border border-emerald-200 flex justify-between items-center">
            <div>
              <strong class="text-emerald-950 block">${t('modal_mohe_window')}</strong>
              <span class="text-emerald-800 text-[11px]">${prog.deadlines.mohePortalWindow}</span>
            </div>
            <span class="font-bold text-emerald-900">${prog.deadlines.moheRegularIntake}</span>
          </div>
        </div>

        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mt-4">${t('modal_pathway_heading')}</h4>
        <div class="p-4 bg-slate-50 rounded border border-slate-200 text-xs space-y-1.5">
          <div><strong class="text-slate-900">${t('modal_entry_type')}</strong> <span>${prog.pathway.entryType}</span></div>
          <div><strong class="text-slate-900">${t('modal_foundation_question')}</strong> <span class="font-bold ${prog.pathway.foundationNeeded ? 'text-amber-800' : 'text-emerald-800'}">${prog.pathway.foundationNeeded ? t('modal_foundation_yes') : t('modal_foundation_no')}</span></div>
          <p class="text-slate-600 mt-2 leading-relaxed">${prog.pathway.explanation}</p>
        </div>
      </div>

      <!-- TAB 5: VISA GUIDE -->
      <div id="tab-visa" class="tab-pane hidden space-y-4">
        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-3">
          <div class="flex items-center justify-between border-b border-slate-200 pb-2">
            <span class="font-bold text-slate-900">${t('modal_visa_type')}</span>
            <span class="font-extrabold text-slate-800 bg-white px-3 py-1 rounded border border-slate-300">${prog.visaRequirements.visaType}</span>
          </div>
          
          <h5 class="font-bold text-slate-900 uppercase text-[11px] tracking-wider">${t('modal_visa_docs')}</h5>
          <ul class="space-y-1.5 list-disc list-inside text-slate-700">
            ${prog.visaRequirements.keyDocuments.map(d => `<li>${d}</li>`).join("")}
          </ul>
        </div>

        <div class="p-3.5 bg-amber-50 rounded border border-amber-300 text-xs text-amber-950">
          <strong>${t('modal_guarantee_title')}</strong>
          ${t('modal_guarantee_desc')}
        </div>
      </div>

    </div>

    <!-- Modal Footer -->
    <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span class="text-xs text-slate-500 font-medium">moustaqbili | مستقبلي &bull; ${t('modal_footer_ref')}</span>
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button id="modal-close-btn2" class="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition w-full sm:w-auto">
          ${t('modal_close')}
        </button>
        <a href="https://www.mohe.edu.kw" target="_blank" rel="noopener noreferrer" class="px-5 py-2 bg-olive-900 hover:bg-olive-800 text-white rounded-lg text-xs font-bold transition shadow-sm w-full sm:w-auto flex items-center justify-center gap-1.5">
          <span>${t('modal_mohe_portal')}</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const tabBtns = content.querySelectorAll(".modal-tab-btn");
  const tabPanes = content.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => {
        b.classList.remove("active", "text-slate-900");
        b.classList.add("text-slate-600");
      });
      tabPanes.forEach(p => p.classList.add("hidden"));

      btn.classList.add("active", "text-slate-900");
      btn.classList.remove("text-slate-600");
      const targetId = btn.getAttribute("data-target");
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.remove("hidden");
    });
  });

  const closeBtn1 = document.getElementById("close-modal-btn");
  const closeBtn2 = document.getElementById("modal-close-btn2");
  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    openModalProgram = null;
  };

  closeBtn1?.addEventListener("click", close);
  closeBtn2?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}

// =========================================================================
// 6. Local Kuwait Universities Renderer (KU, AASU, Private PUC Scholarships)
// =========================================================================
function initLocalUniversitiesPage() {
  const container = document.getElementById("local-unis-container");
  if (!container) return;

  const data = window.KUWAIT_LOCAL_UNIVERSITIES || [];
  const isAr = (typeof getCurrentLanguage === 'function' && getCurrentLanguage() === 'ar');
  container.innerHTML = "";

  data.forEach(uni => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl border border-slate-300 p-6 shadow-sm mb-8";

    const name = isAr ? uni.nameAr : uni.name;
    const nameSub = isAr ? uni.name : uni.nameAr;
    const type = isAr ? uni.typeAr : uni.typeEn;
    const campus = isAr ? uni.campusLocationAr : uni.campusLocation;
    const funding = isAr ? uni.scholarshipFundingAr : uni.scholarshipFunding;
    const system = isAr ? uni.admissionSystemAr : uni.admissionSystem;
    const exams = isAr ? uni.aptitudeExamsAr : uni.aptitudeExams;
    const formula = isAr ? uni.equivalentFormulaAr : uni.equivalentFormula;

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
        <div>
          <span class="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">
            ${type}
          </span>
          <h2 class="text-xl font-black text-slate-900 mt-2">${name}</h2>
          <h3 class="text-xs font-bold text-slate-500 mt-0.5">${nameSub}</h3>
          <p class="text-xs text-slate-600 mt-1">${campus}</p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs max-w-sm">
          <strong class="text-emerald-900 block mb-0.5">${isAr ? '💰 تمويل البعثات والمكافآت:' : '💰 Scholarship & Allowance Funding:'}</strong>
          <span class="text-emerald-800 font-semibold">${funding}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">${isAr ? 'بوابة ونظام التقديم:' : 'Admission Portal & Mechanism:'}</strong>
          <span class="text-slate-600">${system}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">${isAr ? 'اختبارات القدرات والأكاديميا:' : 'Aptitude Testing (اختبارات القدرات):'}</strong>
          <span class="text-slate-600">${exams}</span>
          <span class="text-[11px] text-slate-500 block mt-1">${formula}</span>
        </div>
      </div>

      <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">${isAr ? 'الكليات والحد الأدنى للقبول:' : 'Colleges & Admission Percentage Floors:'}</h4>
      <div class="space-y-2">
        ${uni.colleges.map(c => `
          <div class="p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <strong class="text-slate-900 block text-xs">${c.collegeName}</strong>
              <span class="text-[11px] text-slate-500">${c.seatsNotes}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-bold text-[11px] border border-slate-200 whitespace-nowrap">
                ${isAr ? 'الحد الأدنى:' : 'Min:'} ${c.minThanawiya}
              </span>
              <span class="px-2.5 py-1 bg-emerald-50 rounded text-emerald-800 font-bold text-[11px] border border-emerald-200 whitespace-nowrap">
                ${isAr ? (c.equivalentFloorAr || c.equivalentFloor) : c.equivalentFloor}
              </span>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

// Global language change listener to refresh view
window.addEventListener("languageChanged", () => {
  const path = window.location.pathname;
  if (path.endsWith("index.html") || path.endsWith("/") || !path.includes(".html")) {
    // re-initialize or trigger calculation if needed
  }
  if (path.endsWith("results.html")) {
    // Re-render only; initResultsPage() binds listeners and must run once (on DOMContentLoaded)
    rerenderResults?.();
    if (openModalProgram) openEnrichedProgramModal(openModalProgram);
  }
  if (path.endsWith("local-universities.html")) {
    initLocalUniversitiesPage();
  }
});

// =========================================================================
// 7. Feedback Survey Logic
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
    const comment = document.getElementById("feedback-text")?.value || "";
    const feedbackRecord = {
      vote: selectedVote,
      comment: comment,
      timestamp: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem("moustaqbili_feedback") || "[]");
      existing.push(feedbackRecord);
      localStorage.setItem("moustaqbili_feedback", JSON.stringify(existing));
    } catch (e) {
      console.log("Feedback recorded");
    }

    ratingPrompt?.classList.add("hidden");
    commentSection?.classList.add("hidden");
    thankYouBox?.classList.remove("hidden");
  });
}

