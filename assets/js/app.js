/**
 * moustaqbili | مستقبلي
 * The Official Kuwait Higher Education Portal Engine
 * بوابة مستقبلي الموحدة للبعثات الخارجية والجامعات
 *
 * Core Engine Features:
 * - Direct UI Course Cards (Major + Monthly Stipend in KWD + 2 Action Buttons)
 * - Requirements Modal (IELTS Subsections, Qudrat Floor, GPA, Ministry Bylaws)
 * - Salary & Benefits Modal with Interactive Multi-Currency Converter
 * - Show Merit Option (+50% Stipend & Academic Differences)
 * - National Aptitude Test (Qudrat) Synchronized Schedule Renderer
 * - Direct Contact MoHE Inquiry Dispatch Engine
 * - Zero Emojis Across Entire Platform
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
      link.classList.add("text-white", "font-bold", "border-b-2", "border-olive-500");
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
      equivalentResultBox.textContent = `Calculated Equivalent Score: ${equiv.toFixed(2)}% (Thanawiya 70% + Aptitude 30%)`;
      equivalentResultBox.classList.remove("hidden");
    } else {
      equivalentResultBox.classList.add("hidden");
    }
  }

  inputExactPct?.addEventListener("input", calculateEquivalentScore);
  inputAptitude?.addEventListener("input", calculateEquivalentScore);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const countryVal = countrySelect?.value || "";
    const pctVal = percentageSelect?.value || "";
    const majorVal = majorSelect?.value || "";
    const isMeritVal = meritCheckbox?.checked || false;

    if (!countryVal && !pctVal && !majorVal && !isMeritVal) {
      if (validationAlert) {
        validationAlert.classList.remove("hidden");
        validationAlert.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const params = new URLSearchParams();
    if (countryVal) params.set("country", countryVal);
    if (pctVal) params.set("percentage", pctVal);
    if (majorVal) params.set("major", majorVal);
    if (isMeritVal) params.set("merit", "1");

    const exactPct = parseFloat(inputExactPct?.value);
    if (!isNaN(exactPct) && exactPct >= 60) params.set("exactPct", exactPct);

    const aptScore = parseFloat(inputAptitude?.value);
    if (!isNaN(aptScore) && aptScore >= 0) params.set("aptitude", aptScore);

    window.location.href = `results.html?${params.toString()}`;
  });
}

// =========================================================================
// 4. Approved Courses Page (Clean UI: Major + KWD Salary + 2 Action Buttons)
// =========================================================================
function initResultsPage() {
  const container = document.getElementById("results-container");
  const emptyState = document.getElementById("empty-state");
  const countBadge = document.getElementById("results-count-badge");
  const activeFiltersContainer = document.getElementById("active-filters-chips");
  const keywordInput = document.getElementById("keyword-filter");
  const meritToggleBtn = document.getElementById("quick-merit-toggle");
  const meritBanner = document.getElementById("merit-banner");
  const closeMeritBannerBtn = document.getElementById("close-merit-banner-btn");

  const urlParams = new URLSearchParams(window.location.search);
  let selectedCountry = urlParams.get("country") || "";
  let selectedPercentage = urlParams.get("percentage") || "";
  let selectedMajor = urlParams.get("major") || "";
  let isMeritOnly = urlParams.get("merit") === "1";
  let showMeritOption = isMeritOnly; // Controls +50% merit stipend view on cards
  let exactPct = parseFloat(urlParams.get("exactPct")) || null;
  let aptitudeScore = parseFloat(urlParams.get("aptitude")) || null;
  let keywordQuery = "";

  function updateMeritToggleBtnUI() {
    if (!meritToggleBtn) return;
    const label = document.getElementById("merit-toggle-label");
    if (showMeritOption) {
      meritToggleBtn.classList.add("bg-amber-500", "text-slate-950", "border-amber-600");
      meritToggleBtn.classList.remove("bg-white", "text-slate-800", "border-slate-300");
      if (label) label.textContent = window.getActiveLanguage?.() === "ar" ? "عرض التميز مفعّل (+50% مخصصات)" : "Merit View Active (+50% Allowance)";
      if (meritBanner) meritBanner.classList.remove("hidden");
    } else {
      meritToggleBtn.classList.remove("bg-amber-500", "text-slate-950", "border-amber-600");
      meritToggleBtn.classList.add("bg-white", "text-slate-800", "border-slate-300");
      if (label) label.textContent = window.getActiveLanguage?.() === "ar" ? "تفعيل خيار التميز (+50% مخصصات)" : "Show Merit Option (+50% Allowance)";
      if (meritBanner) meritBanner.classList.add("hidden");
    }
  }

  meritToggleBtn?.addEventListener("click", () => {
    showMeritOption = !showMeritOption;
    isMeritOnly = showMeritOption;
    updateMeritToggleBtnUI();
    updateUrlParams();
    renderResults();
  });

  closeMeritBannerBtn?.addEventListener("click", () => {
    meritBanner?.classList.add("hidden");
  });

  function renderFilterChips() {
    if (!activeFiltersContainer) return;
    activeFiltersContainer.innerHTML = "";

    const chips = [];
    if (selectedCountry) chips.push({ type: "country", label: `Country: ${selectedCountry}` });
    if (selectedPercentage) chips.push({ type: "percentage", label: `Grade: ${selectedPercentage}%` });
    if (selectedMajor) chips.push({ type: "major", label: `Field: ${selectedMajor}` });
    if (showMeritOption) chips.push({ type: "merit", label: `Merit Option (+50% Allowance)` });

    if (chips.length === 0) {
      activeFiltersContainer.innerHTML = `<span class="text-xs text-slate-500 italic">Showing all accredited programs under the Kuwait MoHE Foreign Scholarship Plan 2025/2026.</span>`;
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
        <button type="button" class="text-slate-500 hover:text-red-700 ml-1 font-bold focus:outline-none" aria-label="Remove filter">&times;</button>
      `;

      chipEl.querySelector("button").addEventListener("click", () => {
        if (chip.type === "country") selectedCountry = "";
        if (chip.type === "percentage") selectedPercentage = "";
        if (chip.type === "major") selectedMajor = "";
        if (chip.type === "merit") {
          showMeritOption = false;
          isMeritOnly = false;
        }
        updateMeritToggleBtnUI();
        updateUrlParams();
        renderResults();
      });

      activeFiltersContainer.appendChild(chipEl);
    });

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "text-xs font-semibold text-red-700 hover:text-red-900 underline ml-2 transition";
    clearBtn.textContent = "Reset Filters";
    clearBtn.addEventListener("click", () => {
      selectedCountry = "";
      selectedPercentage = "";
      selectedMajor = "";
      showMeritOption = false;
      isMeritOnly = false;
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
    if (showMeritOption) params.set("merit", "1");
    const newRelativePathQuery = window.location.pathname + (params.toString() ? `?${params.toString()}` : "");
    window.history.replaceState(null, "", newRelativePathQuery);
  }

  function renderResults() {
    renderFilterChips();
    updateMeritToggleBtnUI();

    const allPrograms = window.MOUSTAQBILI_PROGRAMS || [];
    const filtered = allPrograms.filter(prog => {
      if (isMeritOnly && !prog.isMerit) return false;
      if (selectedCountry && prog.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;

      if (selectedPercentage) {
        const reqMin = parseFloat(prog.requirements?.gpa?.thanawiya) || 0;
        if (selectedPercentage === "80.0-84.9" && reqMin > 84.9) return false;
        if (selectedPercentage === "85.0-89.9" && reqMin > 89.9) return false;
        if (selectedPercentage === "90.0-94.9" && reqMin > 94.9) return false;
        if (selectedPercentage === "95.0-96.9" && reqMin > 96.9) return false;
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
      countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Approved Major' : 'Approved Majors'}`;
    }

    if (!container) return;
    container.innerHTML = "";

    if (filtered.length === 0) {
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    } else {
      if (emptyState) emptyState.classList.add("hidden");
    }

    filtered.forEach(prog => {
      const card = document.createElement("div");
      card.className = `gov-program-card rounded-xl p-6 flex flex-col justify-between border bg-white shadow-sm transition hover:shadow-md ${
        prog.isMerit ? 'border-amber-300' : 'border-slate-200'
      }`;

      // Calculate displayed stipend in KWD based on Merit Option toggle
      const isDisplayingMerit = showMeritOption && prog.isMerit;
      const salaryKwdAmount = isDisplayingMerit ? prog.salary.meritKwd : prog.salary.standardKwd;
      const salaryDisplayLabel = `${salaryKwdAmount} KWD / month`;

      card.innerHTML = `
        <div>
          <!-- Header Badges: Country + Merit Status -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>${prog.country} (${prog.countryAr})</span>
            </span>

            ${prog.isMerit ? `
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wide">
                ${isDisplayingMerit ? 'Merit Tier (+50%)' : 'Merit Eligible'}
              </span>
            ` : `
              <span class="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Standard Scholarship
              </span>
            `}
          </div>

          <!-- Direct UI: MAJOR TITLE -->
          <h3 class="text-lg font-extrabold text-slate-900 leading-snug mb-1">
            ${prog.title}
          </h3>
          <h4 class="text-xs font-semibold text-slate-500 mb-4" dir="rtl">
            ${prog.titleAr}
          </h4>

          <!-- Direct UI: SALARY IN KWD (Clean, Uncluttered) -->
          <div class="rounded-xl p-3.5 mb-5 border ${isDisplayingMerit ? 'bg-amber-50/80 border-amber-300' : 'bg-emerald-50/80 border-emerald-200'}">
            <div class="flex items-baseline justify-between">
              <span class="text-xs font-bold text-slate-700">MoHE Monthly Living Allowance:</span>
              <span class="text-xl font-black ${isDisplayingMerit ? 'text-amber-950' : 'text-emerald-950'}">
                ${salaryDisplayLabel}
              </span>
            </div>
            <div class="flex items-center justify-between text-[11px] mt-1 text-slate-500">
              <span>Standard: ${prog.salary.standardKwd} KWD</span>
              ${prog.isMerit ? `<span class="font-semibold text-amber-800">Merit (+50%): ${prog.salary.meritKwd} KWD</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Direct UI: Two Side-by-Side Action Buttons -->
        <div class="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
          <button type="button" class="btn-open-requirements px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
            <svg class="w-3.5 h-3.5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            <span data-i18n="btn_card_requirements">Requirements</span>
          </button>

          <button type="button" class="btn-open-salary px-3 py-2.5 rounded-lg bg-olive-900 hover:bg-olive-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span data-i18n="btn_card_salary">Salary & Benefits</span>
          </button>
        </div>
      `;

      card.querySelector(".btn-open-requirements")?.addEventListener("click", () => openRequirementsModal(prog));
      card.querySelector(".btn-open-salary")?.addEventListener("click", () => openSalaryBenefitsModal(prog));

      container.appendChild(card);
    });
  }

  if (keywordInput) {
    keywordInput.addEventListener("input", (e) => {
      keywordQuery = e.target.value.trim();
      renderResults();
    });
  }

  // Listen for language toggles
  window.addEventListener("moustaqbili:langchange", () => {
    renderResults();
    renderQudratSchedule();
  });

  renderResults();
  renderQudratSchedule();
  initDirectInquiryForm();
  initFeedbackWidget();
}

// =========================================================================
// 5. Requirements Modal Dialog (Organized & Uncluttered)
// =========================================================================
function openRequirementsModal(prog) {
  const modal = document.getElementById("requirements-modal");
  const content = document.getElementById("requirements-modal-content");
  if (!modal || !content) return;

  const req = prog.requirements;

  content.innerHTML = `
    <!-- Header -->
    <div class="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 uppercase tracking-wider">${prog.country}</span>
          <span class="text-xs text-amber-400 font-bold">${prog.track}</span>
        </div>
        <h2 class="text-xl font-extrabold tracking-tight">${prog.title}</h2>
        <h3 class="text-xs text-slate-400 font-medium mt-0.5" dir="rtl">${prog.titleAr}</h3>
      </div>
      <button id="close-req-btn-x" class="text-slate-400 hover:text-white text-2xl font-bold p-1 leading-none">&times;</button>
    </div>

    <!-- Body -->
    <div class="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-xs bg-slate-50/50">

      <!-- 1. Minimum IELTS Requirements -->
      <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <strong class="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-olive-900 text-white flex items-center justify-center text-[10px] font-bold">1</span>
            <span>Minimum IELTS Requirements</span>
          </strong>
          <span class="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Overall Band: ${req.ielts.minOverall}
          </span>
        </div>

        <div class="grid grid-cols-4 gap-2 text-center">
          <div class="p-2 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 block uppercase font-bold">Listening</span>
            <span class="text-sm font-black text-slate-900">${req.ielts.subsections.listening}</span>
          </div>
          <div class="p-2 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 block uppercase font-bold">Reading</span>
            <span class="text-sm font-black text-slate-900">${req.ielts.subsections.reading}</span>
          </div>
          <div class="p-2 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 block uppercase font-bold">Writing</span>
            <span class="text-sm font-black text-slate-900">${req.ielts.subsections.writing}</span>
          </div>
          <div class="p-2 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 block uppercase font-bold">Speaking</span>
            <span class="text-sm font-black text-slate-900">${req.ielts.subsections.speaking}</span>
          </div>
        </div>

        <div class="p-2.5 rounded bg-slate-50 border border-slate-200 text-[11px] leading-relaxed text-slate-700">
          <strong class="text-slate-900 block mb-0.5">Language Testing Advisory:</strong>
          <span>${req.ielts.note}</span>
        </div>
      </div>

      <!-- 2. Optimal National Aptitude (Qudrat) Score -->
      <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2.5">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <strong class="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-olive-900 text-white flex items-center justify-center text-[10px] font-bold">2</span>
            <span>Optimal National Aptitude (Qudrat) Score</span>
          </strong>
          <span class="px-2.5 py-0.5 rounded text-[11px] font-bold ${req.qudrat.applies ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-slate-100 text-slate-700 border border-slate-300'}">
            ${req.qudrat.applies ? 'Mandatory for this Track' : 'Not Required for Overseas'}
          </span>
        </div>
        <div class="p-3 rounded-lg ${req.qudrat.applies ? 'bg-emerald-50/70 border border-emerald-200' : 'bg-slate-50 border border-slate-200'}">
          <strong class="text-slate-900 block font-bold text-xs mb-1">${req.qudrat.optimalScore}</strong>
          <p class="text-[11px] text-slate-600 leading-relaxed">${req.qudrat.note}</p>
        </div>
      </div>

      <!-- 3. Minimum Required GPA & Thanawiya % -->
      <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <strong class="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-olive-900 text-white flex items-center justify-center text-[10px] font-bold">3</span>
            <span>Minimum Required GPA & Secondary Floor</span>
          </strong>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 uppercase font-bold block mb-1">Kuwait Thanawiya</span>
            <span class="text-sm font-black text-emerald-800">${req.gpa.thanawiya}</span>
          </div>
          <div class="p-3 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 uppercase font-bold block mb-1">American Diploma</span>
            <span class="text-sm font-black text-emerald-800">${req.gpa.usGpa}</span>
          </div>
          <div class="p-3 bg-slate-50 rounded border border-slate-200">
            <span class="text-[10px] text-slate-500 uppercase font-bold block mb-1">British A-Levels</span>
            <span class="text-sm font-black text-emerald-800">${req.gpa.ukSystem}</span>
          </div>
        </div>
      </div>

      <!-- 4. Most Updated Ministry Regulations -->
      <div class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
          <strong class="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-olive-900 text-white flex items-center justify-center text-[10px] font-bold">4</span>
            <span>Most Updated Ministry of Higher Education Regulations</span>
          </strong>
          <span class="text-[11px] font-semibold text-slate-500">Plan 2025/2026</span>
        </div>

        <div class="space-y-2">
          <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
            <strong class="text-slate-900 block font-bold mb-0.5">Approved Stream:</strong>
            <span class="text-slate-700">${req.ministryUpdated.stream}</span>
          </div>

          <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
            <strong class="text-slate-900 block font-bold mb-1.5">Mandatory Prerequisite Subject Minimums:</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${req.ministryUpdated.courseFloors.map(c => `
                <div class="p-2 bg-white rounded border border-slate-200 flex items-center justify-between text-[11px]">
                  <span class="font-bold text-slate-800">${c.subject}</span>
                  <span class="font-bold text-emerald-800">${c.minGrade}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="p-2.5 bg-slate-50 rounded border border-slate-200 text-[11px] leading-relaxed text-slate-700">
            <strong class="text-slate-900 block mb-0.5">Foundation Year Policy:</strong>
            <span>${req.ministryUpdated.foundationRule}</span>
          </div>

          <div class="p-2.5 bg-slate-50 rounded border border-slate-200 text-[11px] leading-relaxed text-slate-700">
            <strong class="text-slate-900 block mb-0.5">Admissions & Deadlines:</strong>
            <span>${req.ministryUpdated.additionalNotes}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-end">
      <button id="close-req-btn" class="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition shadow-sm">
        Close Window
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const close = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  };

  document.getElementById("close-req-btn-x")?.addEventListener("click", close);
  document.getElementById("close-req-btn")?.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
}

// =========================================================================
// 6. Salary & Benefits Modal with Interactive Multi-Currency Converter
// =========================================================================
function openSalaryBenefitsModal(prog) {
  const modal = document.getElementById("salary-modal");
  const content = document.getElementById("salary-modal-content");
  if (!modal || !content) return;

  const rates = window.KWD_CONVERSION_RATES || {
    KWD: { rate: 1.0, symbol: "KWD", name: "Kuwaiti Dinar (د.ك)" },
    USD: { rate: 3.25, symbol: "$", name: "US Dollar ($)" },
    GBP: { rate: 2.50, symbol: "£", name: "British Pound (£)" },
    EUR: { rate: 2.98, symbol: "€", name: "Euro (€)" },
    AUD: { rate: 4.80, symbol: "A$", name: "Australian Dollar (A$)" },
    CAD: { rate: 4.40, symbol: "C$", name: "Canadian Dollar (C$)" },
    BHD: { rate: 1.22, symbol: "BD", name: "Bahraini Dinar (د.ب)" }
  };

  // Default target currency matches country or USD
  let selectedCurrencyCode = prog.hostCurrency || "USD";
  if (!rates[selectedCurrencyCode]) selectedCurrencyCode = "USD";

  function renderModalBody() {
    const cur = rates[selectedCurrencyCode] || rates.USD;
    const standardConverted = (prog.salary.standardKwd * cur.rate).toLocaleString(undefined, { maximumFractionDigits: 0 });
    const meritConverted = (prog.salary.meritKwd * cur.rate).toLocaleString(undefined, { maximumFractionDigits: 0 });

    content.innerHTML = `
      <!-- Header -->
      <div class="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 uppercase tracking-wider">${prog.country}</span>
            <span class="text-xs text-amber-400 font-bold">Ministerial Stipend Schedule</span>
          </div>
          <h2 class="text-xl font-extrabold tracking-tight">${prog.title}</h2>
          <h3 class="text-xs text-slate-400 font-medium mt-0.5" dir="rtl">${prog.titleAr}</h3>
        </div>
        <button id="close-salary-btn-x" class="text-slate-400 hover:text-white text-2xl font-bold p-1 leading-none">&times;</button>
      </div>

      <!-- Body -->
      <div class="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-xs bg-slate-50/50">

        <!-- 1. Base KWD Allowance & Interactive Converter -->
        <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <strong class="text-sm font-bold text-slate-900 block">Monthly Living Stipend (in KWD)</strong>
              <span class="text-[11px] text-slate-500">Official Kuwait Ministry of Higher Education Allowance</span>
            </div>

            <!-- Currency Selector Dropdown -->
            <div class="flex items-center gap-2">
              <label for="currency-selector" class="text-[11px] font-bold text-slate-700 whitespace-nowrap">Convert To:</label>
              <select id="currency-selector" class="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-olive-800 focus:outline-none cursor-pointer">
                ${Object.entries(rates).map(([code, c]) => `
                  <option value="${code}" ${code === selectedCurrencyCode ? 'selected' : ''}>${c.name}</option>
                `).join("")}
              </select>
            </div>
          </div>

          <!-- Dual Display: Standard vs Merit -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Standard Allowance Box -->
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span class="text-[11px] font-bold text-slate-600 block uppercase tracking-wider mb-1">Standard Scholarship</span>
              <div class="flex items-baseline justify-between mb-1">
                <span class="text-2xl font-black text-slate-900">${prog.salary.standardKwd} KWD</span>
                <span class="text-xs font-bold text-slate-500">per month</span>
              </div>
              <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span class="text-slate-500">Converted Amount:</span>
                <span class="font-extrabold text-slate-800">${cur.symbol} ${standardConverted} ${selectedCurrencyCode}</span>
              </div>
            </div>

            <!-- Merit Allowance Box (+50%) -->
            <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/70">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-black text-amber-900 uppercase tracking-wider">Merit Scholarship (+50%)</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-200 text-amber-950">Bonus Active</span>
              </div>
              <div class="flex items-baseline justify-between mb-1">
                <span class="text-2xl font-black text-amber-950">${prog.salary.meritKwd} KWD</span>
                <span class="text-xs font-bold text-amber-800">per month</span>
              </div>
              <div class="pt-2 border-t border-amber-200 flex items-center justify-between text-xs">
                <span class="text-amber-900 font-medium">Converted Amount:</span>
                <span class="font-extrabold text-amber-950">${cur.symbol} ${meritConverted} ${selectedCurrencyCode}</span>
              </div>
            </div>

          </div>

          <div class="text-[11px] text-slate-400 italic">
            Reference: CBK Standard Exchange Rates (1 KWD ≈ ${cur.rate} ${cur.symbol} ${selectedCurrencyCode}). Paid monthly on the 25th directly into the student bank account.
          </div>
        </div>

        <!-- 2. Changes Applied Under Merit Scholarship -->
        <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <strong class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">★</span>
              <span>Changes Under Merit Scholarship (${prog.meritChanges?.tierName || 'Merit Tier'})</span>
            </strong>
          </div>

          <div class="space-y-2">
            <div class="p-2.5 bg-amber-50/60 rounded border border-amber-200 text-xs font-semibold text-amber-950">
              ${prog.meritChanges?.stipendDiff || '+50% increase in monthly living stipend.'}
            </div>
            <ul class="space-y-1.5 list-disc list-inside text-slate-700 text-[11px] leading-relaxed">
              ${(prog.meritChanges?.benefitsDiff || [
                "Increases monthly living allowance by +50% in KWD and local currency.",
                "Priority approval for top global universities sanctioned under Ministerial Decree.",
                "Direct tuition payment and exemption from country enrollment caps."
              ]).map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>

        <!-- 3. Full Statutory Benefits Covered by MoHE -->
        <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div class="border-b border-slate-100 pb-2">
            <strong class="text-sm font-bold text-slate-900 block">Full Statutory Benefits Provided by Ministry of Higher Education:</strong>
            <span class="text-[11px] text-slate-500">Covered in addition to the monthly living allowance</span>
          </div>

          <div class="grid grid-cols-1 gap-2">
            ${prog.salary.allowancesSummary.map(a => `
              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded text-slate-800 text-[11px] flex items-start gap-2">
                <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${a}</span>
              </div>
            `).join("")}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-end">
        <button id="close-salary-btn" class="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition shadow-sm">
          Close Window
        </button>
      </div>
    `;

    // Attach currency change listener
    const curSelector = document.getElementById("currency-selector");
    curSelector?.addEventListener("change", (e) => {
      selectedCurrencyCode = e.target.value;
      renderModalBody();
    });

    const close = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    };

    document.getElementById("close-salary-btn-x")?.addEventListener("click", close);
    document.getElementById("close-salary-btn")?.addEventListener("click", close);
  }

  renderModalBody();
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
}

// =========================================================================
// 7. National Aptitude Test (Qudrat) Testing Dates Schedule Renderer
// =========================================================================
function renderQudratSchedule() {
  const container = document.getElementById("qudrat-cycles-container");
  if (!container) return;

  const data = window.KUWAIT_QUDRAT_SCHEDULE;
  if (!data || !data.testingCycles) {
    container.innerHTML = `<span class="text-xs text-slate-500 italic">Testing schedule currently being synchronized with Kuwait University CEM...</span>`;
    return;
  }

  container.innerHTML = `
    <table class="w-full text-xs text-left border border-slate-200 rounded-lg overflow-hidden">
      <thead class="bg-slate-100 text-slate-800 font-bold uppercase text-[10px] border-b border-slate-200">
        <tr>
          <th class="p-3" data-i18n="qudrat_col_cycle">Test Round / Cycle</th>
          <th class="p-3" data-i18n="qudrat_col_reg">Registration Period</th>
          <th class="p-3" data-i18n="qudrat_col_test">Test Date</th>
          <th class="p-3" data-i18n="qudrat_col_results">Results Announcement</th>
          <th class="p-3" data-i18n="qudrat_col_status">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100 text-slate-700 bg-white">
        ${data.testingCycles.map(c => `
          <tr class="hover:bg-slate-50/60 transition">
            <td class="p-3 font-bold text-slate-900">
              <div>${c.cycleName}</div>
              <div class="text-[11px] text-slate-500 font-normal" dir="rtl">${c.cycleNameAr}</div>
            </td>
            <td class="p-3 font-medium">
              <span class="font-bold text-slate-800">${c.registrationStart}</span> &rarr; <span class="font-bold text-slate-800">${c.registrationDeadline}</span>
            </td>
            <td class="p-3 font-bold text-olive-900">
              ${c.testDate}
            </td>
            <td class="p-3 font-semibold text-slate-800">
              ${c.resultsDate}
            </td>
            <td class="p-3">
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${
                c.status.includes('Upcoming') 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                  : c.status.includes('Open') 
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-slate-100 text-slate-700 border border-slate-300'
              }">
                ${c.status}
              </span>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <div class="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
      <div>
        <strong>Registration Fee:</strong> ${data.feePerSubject} &bull; <strong>Late Fee:</strong> ${data.lateFee}
      </div>
      <div>
        <strong>Source:</strong> ${data.organization} (${data.syncMethod || 'Decree Calendar'})
      </div>
    </div>
  `;
}

// =========================================================================
// 8. Direct Contact MoHE Inquiry Dispatch Engine
// =========================================================================
function initDirectInquiryForm() {
  const form = document.getElementById("direct-inquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inquiry-name")?.value.trim() || "";
    const civilId = document.getElementById("inquiry-civilid")?.value.trim() || "";
    const dept = document.getElementById("inquiry-dept")?.value || "foreign-scholarships@mohe.edu.kw";
    const message = document.getElementById("inquiry-message")?.value.trim() || "";

    const subject = encodeURIComponent(`Student Inquiry: ${name} (Civil ID: ${civilId})`);
    const body = encodeURIComponent(
      `To: Ministry of Higher Education Kuwait\n` +
      `From: ${name}\n` +
      `Civil ID: ${civilId}\n\n` +
      `Inquiry Message:\n${message}\n\n` +
      `Dispatched via moustaqbili Portal (Academic Year 2026/2027)`
    );

    window.location.href = `mailto:${dept}?subject=${subject}&body=${body}`;
  });
}

// =========================================================================
// 9. Local Kuwait Universities Renderer (KU, AASU, Private PUC Scholarships)
// =========================================================================
function initLocalUniversitiesPage() {
  const container = document.getElementById("local-unis-container");
  if (!container) return;

  const data = window.KUWAIT_LOCAL_UNIVERSITIES || [];
  container.innerHTML = "";

  data.forEach(uni => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl border border-slate-300 p-6 shadow-sm mb-8";

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
        <div>
          <span class="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">
            ${uni.type}
          </span>
          <h2 class="text-xl font-black text-slate-900 mt-2">${uni.name}</h2>
          <h3 class="text-xs font-bold text-slate-500 mt-0.5" dir="rtl">${uni.nameAr}</h3>
          <p class="text-xs text-slate-600 mt-1">${uni.campusLocation}</p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs max-w-sm">
          <strong class="text-emerald-900 block mb-0.5">Scholarship & Allowance Funding:</strong>
          <span class="text-emerald-800 font-semibold">${uni.scholarshipFunding}</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-6">
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">Admission Portal & Mechanism:</strong>
          <span class="text-slate-600">${uni.admissionSystem}</span>
        </div>
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <strong class="text-slate-900 block mb-1">Aptitude Testing (اختبارات القدرات):</strong>
          <span class="text-slate-600">${uni.aptitudeExams}</span>
          <span class="text-[11px] text-slate-500 block mt-1">${uni.equivalentFormula}</span>
        </div>
      </div>

      <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Colleges & Admission Percentage Floors:</h4>
      <div class="space-y-2">
        ${uni.colleges.map(c => `
          <div class="p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <strong class="text-slate-900 block text-xs">${c.collegeName}</strong>
              <span class="text-[11px] text-slate-500">${c.seatsNotes}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-2.5 py-1 bg-slate-100 rounded text-slate-800 font-bold text-[11px] border border-slate-200 whitespace-nowrap">
                Min: ${c.minThanawiya}
              </span>
              <span class="px-2.5 py-1 bg-emerald-50 rounded text-emerald-800 font-bold text-[11px] border border-emerald-200 whitespace-nowrap">
                ${c.equivalentFloor}
              </span>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

// =========================================================================
// 10. Feedback Widget Logic
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
    ratingPrompt?.classList.add("hidden");
    commentSection?.classList.add("hidden");
    thankYouBox?.classList.remove("hidden");
  });
}
