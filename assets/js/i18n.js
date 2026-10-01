/**
 * moustaqbili | مستقبلي
 * Comprehensive Bilingual Localization Engine (English & Arabic)
 * Handles instant language switching, RTL/LTR layout transitions, and element updates.
 */

const MOUSTAQBILI_TRANSLATIONS = {
  en: {
    // Brand & Header
    state_kuwait: "State of Kuwait",
    portal_name: "moustaqbili | مستقبلي",
    portal_subtitle: "Unified Directory for Foreign & Domestic Scholarships",
    btn_lang_toggle: "العربية",
    mobile_lang_toggle: "اللغة العربية",

    // Navigation
    nav_home: "Home",
    nav_courses: "Approved Courses",
    nav_guide: "Application Guide",
    nav_local: "Local Universities",
    nav_faq: "Regulations & FAQ",
    nav_about: "About",
    nav_contact: "Contact MoHE",

    // Hero
    hero_badge: "Academic Year 2026/2027 • Unified Scholarship Directory",
    hero_title: "Where To Go & Admission Eligibility",
    hero_desc: "Clear admissions requirements, monthly living stipends, and testing dates for Kuwaiti students.",

    // Search Card
    search_card_title: "Personal Search Criteria",
    search_card_desc: "Select your criteria to view matching approved university programs.",
    search_min_req: "Select at least 1 criterion",
    bubble1_title: "Desired Country",
    bubble1_sub: "Country of Study",
    bubble1_desc: "Select destination country.",
    bubble1_default: "-- All Approved Countries --",
    bubble2_title: "High School % / GPA",
    bubble2_sub: "Academic Grade",
    bubble2_desc: "Secondary percentage or 4.0 GPA.",
    bubble2_default: "-- Select Grade Bracket --",
    bubble3_title: "Specialization",
    bubble3_sub: "Field of Study",
    bubble3_desc: "Approved academic discipline.",
    bubble3_default: "-- All Sponsoring Disciplines --",
    merit_checkbox_label: "Filter by Merit Universities (Decree 16/2025)",
    merit_checkbox_desc: "Exclusive list of prestigious world universities receiving +50% monthly living allowance.",
    merit_rules_link: "Merit Regulations",
    btn_query_sponsorships: "Query Approved Programs",
    validation_error_title: "Selection Needed:",
    validation_error_msg: "Please select at least 1 filter criterion to generate matching sponsorships.",

    // Tools
    tool1_title: "GPA to Percentage Converter (4.0 Scale)",
    tool1_tag: "Private Education",
    tool1_desc: "Kuwait Private Education Department equivalency curve for American Diploma graduates.",
    gpa_input_label: "Enter GPA on 4.00 Scale (e.g., 3.85):",
    btn_convert: "Convert",
    gpa_result_label: "Equated Percentage:",
    btn_apply_gpa: "Apply to Search Filters",
    gpa_ref_note: "Ref: Kuwait Ministry of Education Equivalency Curve Decree",

    tool2_title: "Equivalent Score Calculator (المعدل المكافئ)",
    tool2_tag: "Kuwait University",
    tool2_desc: "Calculates the weighted composite admission score for competitive medical & engineering seats.",
    sec_pct_label: "Secondary % (60 - 100):",
    apt_score_label: "Aptitude Exam % (0 - 100):",
    tool2_ref_note: "Mandatory for KU Medicine, Dentistry, Engineering, and GCC Seats",

    // Results Page
    results_breadcrumb_home: "Home",
    results_breadcrumb_current: "Approved Courses",
    results_title: "Approved Courses & Living Allowances",
    results_desc: "Browse approved majors and ministerial living allowances in Kuwaiti Dinars (KWD) and local currency.",
    btn_show_merit: "Show Merit Option (+50% Allowance)",
    btn_merit_active: "Merit View Active (+50% Allowance)",
    results_count_searching: "Searching...",
    active_filters_heading: "Active Filters:",
    search_placeholder: "Search major, country, or university...",
    empty_title: "No Matching Programs Found",
    empty_desc: "No approved majors match your selected filters. Try clearing some criteria.",
    btn_view_all_courses: "View All Programs",
    btn_change_filters: "Change Filters",

    // Cards
    card_stipend_label: "Monthly Living Allowance:",
    btn_card_requirements: "Requirements",
    btn_card_salary: "Salary & Benefits",
    merit_badge: "Decree 16/2025 Merit",
    standard_badge: "Standard Track",

    // Modals
    modal_close: "Close",
    modal_req_title: "Admission Requirements",
    modal_salary_title: "Scholarship Salary & Statutory Benefits",
    req_ielts_heading: "1. Minimum IELTS Score (Overall & Subsections)",
    req_qudrat_heading: "2. Optimal National Aptitude (Qudrat) Score",
    req_gpa_heading: "3. Minimum Grade & GPA Requirements",
    req_ministry_heading: "4. Latest Ministry of Higher Education Regulations",
    salary_breakdown_heading: "Monthly Living Stipend Breakdown",
    salary_kwd_label: "Kuwaiti Dinars (KWD):",
    salary_host_label: "Host Country Currency:",
    merit_difference_heading: "Changes Applied Under Merit Scholarship",
    statutory_benefits_heading: "Full Statutory Allowances & Benefits Paid by MoHE",

    // Contact MoHE
    contact_section_title: "Contact Ministry of Higher Education",
    contact_section_desc: "Direct official inquiry channels, hotline, cultural attachés, and the Kuwait Sahel government platform.",
    contact_hotline_title: "Official MoHE Call Center",
    contact_hotline_num: "1882020",
    contact_hotline_sub: "Sunday - Thursday: 8:00 AM - 2:00 PM",
    contact_sahel_title: "Kuwait Sahel App (سهل)",
    contact_sahel_desc: "Direct submission of scholarship files, certificates, and financial undertakings.",
    contact_sahel_btn: "Open Sahel Portal",
    contact_cultural_title: "Overseas Cultural Bureaus Directory",
    contact_form_title: "Send Direct Inquiry to MoHE",
    contact_form_desc: "Compose your inquiry and dispatch directly to the relevant scholarship department.",
    form_student_name: "Student Name",
    form_civil_id: "Civil ID (الرقم المدني)",
    form_department: "Target Department / Cultural Office",
    form_message: "Your Inquiry Message",
    form_btn_send: "Dispatch Inquiry",

    // Qudrat Section
    qudrat_section_title: "National Aptitude Test (Qudrat) Testing Dates",
    qudrat_section_desc: "Official dates from Kuwait University Center for Evaluation & Measurement (CEM) for Academic Year 2026/2027.",
    qudrat_col_cycle: "Test Cycle",
    qudrat_col_reg: "Registration Window",
    qudrat_col_test: "Exam Date",
    qudrat_col_results: "Results Date",
    qudrat_col_status: "Status",
    btn_qudrat_portal: "Open KU Registration Portal (portal.ku.edu.kw)",

    // Footer
    footer_app_name: "moustaqbili | مستقبلي",
    footer_desc: "Educational digital directory for Kuwait higher education and scholarships.",
    feedback_question: "Was this search helpful?",
    feedback_sub_ar: "Help us improve this portal for Kuwaiti students.",
    btn_feedback_yes: "Yes, Helpful",
    btn_feedback_no: "Needs Improvement",
    feedback_thankyou: "Thank you for your feedback."
  },

  ar: {
    // Brand & Header
    state_kuwait: "دولة الكويت",
    portal_name: "مستقبلي | moustaqbili",
    portal_subtitle: "البوابة الموحدة للبعثات الخارجية والجامعات داخل الكويت",
    btn_lang_toggle: "English",
    mobile_lang_toggle: "English",

    // Navigation
    nav_home: "الرئيسية",
    nav_courses: "التخصصات المعتمدة",
    nav_guide: "دليل التقديم المباشر",
    nav_local: "الجامعات داخل الكويت",
    nav_faq: "اللائحة والأسئلة الشائعة",
    nav_about: "عن البوابة",
    nav_contact: "تواصل مع الوزارة",

    // Hero
    hero_badge: "العام الجامعي 2026/2027 • الدليل الموحد للبعثات",
    hero_title: "دليلك لمعرفة التخصصات والقبول والمخصصات",
    hero_desc: "شروط القبول التفصيلية، المخصصات الشهرية بالدينار والعملة الأجنبية، ومواعيد اختبارات القدرات للطلبة الكويتيين.",

    // Search Card
    search_card_title: "معايير البحث الشخصية",
    search_card_desc: "حدد معاييرك للاطلاع على التخصصات والجامعات المعتمدة المتوافقة معك.",
    search_min_req: "اختر معياراً واحداً على الأقل",
    bubble1_title: "بلد الإيفاد",
    bubble1_sub: "دولة الدراسة",
    bubble1_desc: "اختر دولة الابتعاث.",
    bubble1_default: "-- جميع الدول المعتمدة --",
    bubble2_title: "نسبة الثانوية / المعدل",
    bubble2_sub: "المعدل الدراسي",
    bubble2_desc: "النسبة المئوية أو معدل 4.0.",
    bubble2_default: "-- اختر شريحة النسبة --",
    bubble3_title: "التخصص المطلوب",
    bubble3_sub: "المجال الأكاديمي",
    bubble3_desc: "المجال المعتمد في خطة البعثات.",
    bubble3_default: "-- جميع التخصصات المعتمدة --",
    merit_checkbox_label: "فرز بجامعات التميز فقط (قرار وزاري 16/2025)",
    merit_checkbox_desc: "قائمة الجامعات العالمية المتميزة الممنوحة زيادة +50% بالمخصص الشهري.",
    merit_rules_link: "ضوابط التميز",
    btn_query_sponsorships: "عرض التخصصات المطابقة",
    validation_error_title: "تنبيه:",
    validation_error_msg: "يرجى اختيار معيار بحث واحد على الأقل لعرض النتائج.",

    // Tools
    tool1_title: "محول معدل 4.0 إلى النسبة المئوية",
    tool1_tag: "التعليم الخاص",
    tool1_desc: "منحنى معادلة خريجي الدبلومة الأمريكية المعتمد من إدارة التعليم الخاص بدولة الكويت.",
    gpa_input_label: "أدخل المعدل من 4.00 (مثال: 3.85):",
    btn_convert: "تحويل النسبة",
    gpa_result_label: "النسبة المعادلة:",
    btn_apply_gpa: "تطبيق على فلاتر البحث",
    gpa_ref_note: "مرجع: قرار معادلة الشهادات الأجنبية - وزارة التربية والتعليم العالي",

    tool2_title: "حاسبة المعدل المكافئ لجامعة الكويت",
    tool2_tag: "جامعة الكويت",
    tool2_desc: "حساب المعدل المركب الموزون المعتمد للقبول التنافسي في كليات الطب والهندسة.",
    sec_pct_label: "نسبة الثانوية العامة (60 - 100):",
    apt_score_label: "نتيجة اختبار القدرات (0 - 100):",
    tool2_ref_note: "إلزامي لكليات الطب، الأسنان، الصيدلة، الهندسة ومقاعد دول الخليج",

    // Results Page
    results_breadcrumb_home: "الرئيسية",
    results_breadcrumb_current: "التخصصات المعتمدة",
    results_title: "التخصصات المعتمدة والمخصصات الشهرية",
    results_desc: "استعراض التخصصات المعتمدة والمخصصات الشهرية المعتمدة بالدينار الكويتي وعملة دولة الابتعاث.",
    btn_show_merit: "تفعيل خيار التميز (+50% مخصصات)",
    btn_merit_active: "عرض التميز مفعّل (+50% مخصصات)",
    results_count_searching: "جاري البحث...",
    active_filters_heading: "الفلاتر النشطة:",
    search_placeholder: "ابحث عن تخصص، دولة، أو جامعة...",
    empty_title: "لم يتم العثور على تخصصات مطابقة",
    empty_desc: "لا توجد تخصصات مطابقة للشروط المحددة. جرب إزالة بعض الفلاتر.",
    btn_view_all_courses: "عرض كافة التخصصات",
    btn_change_filters: "تغيير شروط البحث",

    // Cards
    card_stipend_label: "المخصص الشهري للطالب:",
    btn_card_requirements: "الشروط",
    btn_card_salary: "المخصصات والمزايا",
    merit_badge: "جامعة تميز (قرار 16/2025)",
    standard_badge: "الابتعاث العام",

    // Modals
    modal_close: "إغلاق",
    modal_req_title: "شروط القبول والتسجيل بالتخصص",
    modal_salary_title: "المخصص المالي والبدلات المعتمدة",
    req_ielts_heading: "1. الحد الأدنى لاختبار الآيلتس (الدرجة الإجمالية والأجزاء الأربعة)",
    req_qudrat_heading: "2. درجة اختبار القدرات الوطنية المطلوبة",
    req_gpa_heading: "3. النسبة المئوية ومعدل GPA المطلوب",
    req_ministry_heading: "4. أحدث شروط وضوابط وزارة التعليم العالي",
    salary_breakdown_heading: "تفاصيل المخصص الشهري للمبتعث",
    salary_kwd_label: "بالدينار الكويتي (KWD):",
    salary_host_label: "بعملة دولة الابتعاث:",
    merit_difference_heading: "الفروقات والمزايا عند التقديم عبر بعثة التميز",
    statutory_benefits_heading: "البدلات والمزايا القانونية التي تدفعها الوزارة بالكامل",

    // Contact MoHE
    contact_section_title: "قنوات التواصل المباشر مع وزارة التعليم العالي",
    contact_section_desc: "القنوات الرسمية المعتمدة للاستفسارات، مركز الاتصال، المكاتب الثقافية بالخارج، وتطبيق سهل الحكومي.",
    contact_hotline_title: "مركز الاتصال الموحد للوزارة",
    contact_hotline_num: "1882020",
    contact_hotline_sub: "الأحد - الخميس: 8:00 صباحاً - 2:00 ظهراً",
    contact_sahel_title: "تطبيق سهل الحكومي الموحد",
    contact_sahel_desc: "التقديم المباشر للبعثات الخارجية وإصدار الضمان المالي ومتابعة الملف الطلابي.",
    contact_sahel_btn: "فتح منصة سهل",
    contact_cultural_title: "دليل المكاتب الثقافية وسفارات دولة الكويت بالخارج",
    contact_form_title: "إرسال استفسار مباشر للوزارة",
    contact_form_desc: "قم بصياغة استفسارك لإرساله مباشرة إلى الإدارة المختصة.",
    form_student_name: "اسم الطالب الثلاثي",
    form_civil_id: "الرقم المدني",
    form_department: "الجهة المختصة / المكتب الثقافي",
    form_message: "نص الاستفسار",
    form_btn_send: "إرسال الاستفسار عبر البريد",

    // Qudrat Section
    qudrat_section_title: "مواعيد اختبارات القدرات الأكاديمية (جامعة الكويت)",
    qudrat_section_desc: "المواعيد المعتمدة الصادرة عن مركز التقييم والقياس بجامعة الكويت للعام الجامعي 2026/2027.",
    qudrat_col_cycle: "الدورة / الاختبار",
    qudrat_col_reg: "فترة التسجيل الإلكتروني",
    qudrat_col_test: "تاريخ عقد الاختبار",
    qudrat_col_results: "إعلان النتائج",
    qudrat_col_status: "الحالة",
    btn_qudrat_portal: "بوابة نظام التسجيل بالقدرات (portal.ku.edu.kw)",

    // Footer
    footer_app_name: "مستقبلي | moustaqbili",
    footer_desc: "البوابة الرقمية الموحدة لبيانات التعليم العالي والابتعاث بدولة الكويت.",
    feedback_question: "هل ساعدك هذا البحث؟",
    feedback_sub_ar: "رأيك يساعدنا في تحسين تجربة الطلبة الكويتيين.",
    btn_feedback_yes: "نعم، مفيد جداً",
    btn_feedback_no: "يحتاج تحسين",
    feedback_thankyou: "شكراً لمشاركتك معنا."
  }
};

/**
 * Get the active language (stored in localStorage or defaulted to English)
 */
function getActiveLanguage() {
  return localStorage.getItem("moustaqbili_lang") || "en";
}

/**
 * Set the active language, apply RTL/LTR, update DOM elements
 */
function setLanguage(lang) {
  if (lang !== "ar" && lang !== "en") lang = "en";
  localStorage.setItem("moustaqbili_lang", lang);

  const html = document.documentElement;
  const isArabic = lang === "ar";

  html.setAttribute("lang", lang);
  html.setAttribute("dir", isArabic ? "rtl" : "ltr");

  // Apply or remove Arabic font adjustments if needed
  if (isArabic) {
    document.body.classList.add("font-arabic");
  } else {
    document.body.classList.remove("font-arabic");
  }

  // Update all elements with data-i18n
  const trans = MOUSTAQBILI_TRANSLATIONS[lang] || MOUSTAQBILI_TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (trans[key]) {
      el.setAttribute("placeholder", trans[key]);
    }
  });

  // Update toggle button text
  const toggleBtnText = document.getElementById("lang-toggle-text");
  if (toggleBtnText) {
    toggleBtnText.textContent = isArabic ? "English" : "العربية";
  }
  const mobileToggleText = document.getElementById("mobile-lang-toggle-text");
  if (mobileToggleText) {
    mobileToggleText.textContent = isArabic ? "English" : "اللغة العربية";
  }

  // Dispatch custom event so app.js can re-render dynamic cards
  window.dispatchEvent(new CustomEvent("moustaqbili:langchange", { detail: { lang } }));
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
  const current = getActiveLanguage();
  const next = current === "en" ? "ar" : "en";
  setLanguage(next);
}

// Auto-initialize localization on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getActiveLanguage();
  setLanguage(currentLang);

  // Attach click listeners to language toggle buttons
  const mainToggle = document.getElementById("lang-toggle-btn");
  if (mainToggle) {
    mainToggle.onclick = (e) => {
      e.preventDefault();
      toggleLanguage();
    };
  }
});

if (typeof window !== "undefined") {
  window.MOUSTAQBILI_TRANSLATIONS = MOUSTAQBILI_TRANSLATIONS;
  window.getActiveLanguage = getActiveLanguage;
  window.setLanguage = setLanguage;
  window.toggleLanguage = toggleLanguage;
}
