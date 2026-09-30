/**
 * moustaqbili | مستقبلي
 * Internationalization (i18n) Engine - English / Arabic Translation Support
 */

const MOUSTAQBILI_TRANSLATIONS = {
  en: {
    // Header & Identity
    state_kuwait: "State of Kuwait",
    portal_subtitle: "Unified Foreign & Domestic Scholarships Gateway",
    nav_home: "Home",
    nav_courses: "Approved Courses",
    nav_guide: "Direct Application Guide",
    nav_local: "Local Universities",
    nav_faq: "Regulations & FAQ",
    nav_about: "About",
    btn_lang_toggle: "العربية",
    mobile_lang_toggle: "اللغة العربية",

    // Footer
    footer_app_name: "moustaqbili | مستقبلي",
    footer_desc: "Educational application moustaqbili",

    // Landing / Index Page
    hero_badge: "Official Academic Year 2026/2027 Directory • خطة البعثات الخارجية والداخلية",
    hero_title: "Moustaqbili For Your University Inquiries",
    hero_desc: "Your one stop shop for all your questions about where to go and if you can",
    search_card_title: "Personal Search Criteria",
    search_card_desc: "Select at least 1 of the 3 primary input bubbles below to generate your matches.",
    search_min_req: "Minimum 1 Requirement",
    validation_error_title: "Error:",
    validation_error_msg: "You must choose at least 1 criterion from the displayed inputs (Desired Country, High School Percentage, or Specialization).",
    
    bubble1_title: "Desired Country",
    bubble1_sub: "بلد الإيفاد",
    bubble1_desc: "Country of study.",
    bubble1_default: "-- All Approved Countries --",

    bubble2_title: "High School %",
    bubble2_sub: "النسبة",
    bubble2_desc: "High school percentage or 4.0 GPA.",
    bubble2_default: "-- Select Grade Bracket --",

    bubble3_title: "Specialization",
    bubble3_sub: "التخصص",
    bubble3_desc: "Target academic field approved under the annual scholarship quota.",
    bubble3_default: "-- All Sponsoring Disciplines --",

    merit_checkbox_label: "Filter by Merit Universities (قائمة جامعات التميز)",
    merit_checkbox_desc: "Filters exclusively for Merit Universities approved by the Ministry of Higher Education.",
    merit_rules_link: "Merit Regulations →",
    btn_query_sponsorships: "Query Eligible Sponsorships",

    // Tool 1: GPA Converter
    tool1_title: "GPA to Percentage Converter (4.0 Scale)",
    tool1_tag: "Private Education",
    tool1_desc: "Scale used to change the US school systems GPA to the Kuwaiti percentage (النسبة).",
    gpa_input_label: "Enter GPA on 4.00 Scale (e.g., 3.85):",
    btn_convert: "Convert",
    gpa_result_label: "Equated Percentage:",
    btn_apply_gpa: "Apply This To Search Filters ↑",
    gpa_ref_note: "Ref: Kuwait Ministry of Education Equivalency Decree No. 2026/8",

    // Tool 2: Equivalent Score Calculator
    tool2_title: "Equivalent Score Calculator (المعدل المكافئ)",
    tool2_tag: "Kuwait University",
    tool2_desc: "Computes the mandatory weighted composite score for competitive medical and engineering admissions:",
    sec_pct_label: "Secondary % (60 - 100):",
    apt_score_label: "Aptitude Exam % (0 - 100):",
    tool2_ref_note: "Mandatory for KU Medicine, Dentistry, Engineering, and GCC Direct Medical Seats",

    // Landing Quick Links
    card_guide_title: "Direct Application Websites",
    card_guide_desc: "Setup guide for CommonApp, BridgeU, UCAS, College Board, and Kuwait Sahel.",
    card_guide_btn: "Open Guide →",
    card_local_title: "Local Universities Directory",
    card_local_desc: "Admission rules for universities in Kuwait.",
    card_local_btn: "View Local Unis →",

    // Results Page
    results_breadcrumb_home: "Home",
    results_breadcrumb_current: "Approved Courses",
    results_title: "Approved Courses & Scholarships",
    results_desc: "Find approved university courses, required grades, and monthly living stipends for Kuwaiti scholarship students.",
    btn_quick_merit: "Show Merit Universities (+50% Stipend)",
    results_count_searching: "Searching...",
    active_filters_heading: "Active Filters:",
    search_placeholder: "Search major, country, exam, or uni...",
    empty_title: "No Matching Courses Found",
    empty_desc: "No courses match your selected filters. Try clearing some filters or turning off the Merit filter.",
    btn_view_all_courses: "View All Courses",
    btn_change_filters: "Change Filters",
    
    // Feedback Survey
    feedback_question: "Was this search helpful?",
    feedback_sub_ar: "هل ساعدك هذا البحث في معرفة التخصصات والرواتب والمواعيد؟",
    btn_feedback_yes: "Yes, Helpful",
    btn_feedback_no: "Needs Improvement",
    feedback_comment_label: "Optional Feedback:",
    feedback_comment_placeholder: "Tell us how we can improve...",
    btn_submit_feedback: "Submit Feedback",
    feedback_thankyou: "Thank you for your feedback.",

    // Suggestions Page
    suggestions_badge: "Direct Application",
    suggestions_title: "Direct Application Guide",
    suggestions_desc: "Recommended platforms for applying directly to universities worldwide.",
    sug_sec1_title: "1. University Application Platforms",
    sug_sec2_title: "2. Standardized Testing & Language Portals",
    sug_sec3_title: "3. Kuwait Authentication Portals",

    // Local Universities Page
    local_badge: "Kuwait Universities",
    local_title: "Kuwait Public & Private Universities",
    local_desc: "Admission requirements, grade floors, and scholarship options for universities in Kuwait.",
    local_btn_foreign: "Foreign Tracks",

    // Guidelines Page
    guidelines_badge: "Regulations & FAQ",
    guidelines_title: "Scholarship Regulations & FAQ",
    guidelines_desc: "Key rules, language requirements, grade conversions, and visa procedures.",
    guidelines_btn_merit: "Merit Universities",
    guidelines_cta_title: "Ready to search eligible programs?",
    guidelines_cta_desc: "Filter approved courses by country, percentage bracket, or merit university.",
    guidelines_cta_btn: "Search Courses →",

    // About Page
    about_badge: "About Moustaqbili",
    about_title: "One Place for All Your University Questions",
    about_desc: "Bringing together foreign and local scholarship information into one simple portal.",
    about_challenge_title: "The Challenge",
    about_challenge_desc: "Kuwaiti students previously had to check multiple websites and long PDF documents to get answers:",
    about_solution_title: "The Solution",
    about_solution_desc: "Moustaqbili puts everything in one easy-to-use place:"
  },

  ar: {
    // Header & Identity
    state_kuwait: "دولة الكويت",
    portal_subtitle: "بوابة مستقبلي الموحدة للبعثات الخارجية والداخلية",
    nav_home: "الرئيسية",
    nav_courses: "التخصصات المعتمدة",
    nav_guide: "دليل التقديم المباشر",
    nav_local: "الجامعات المحلية",
    nav_faq: "اللوائح والأسئلة الشائعة",
    nav_about: "عن الموقع",
    btn_lang_toggle: "English",
    mobile_lang_toggle: "English (الإنجليزية)",

    // Footer
    footer_app_name: "مستقبلي | moustaqbili",
    footer_desc: "تطبيق مستقبلي التعليمي لدعم الطلبة الكويتيين في الابتعاث والقبول الجامعي",

    // Landing / Index Page
    hero_badge: "دليل العام الدراسي 2026/2027 • خطة البعثات الخارجية والداخلية",
    hero_title: "موقع مستقبلي لاستفساراتك الجامعية",
    hero_desc: "وجهتك الموحدة لمعرفة كافة الشروط والنسب والجامعات المعتمدة والرواتب الشهرية للابتعاث",
    search_card_title: "معايير البحث الشخصية",
    search_card_desc: "اختر خياراً واحداً على الأقل من المدخلات الثلاثة أدناه لإظهار البعثات المتاحة لك.",
    search_min_req: "شرط واحد كحد أدنى",
    validation_error_title: "خطأ في البحث:",
    validation_error_msg: "يرجى اختيار عنصر واحد على الأقل (دولة الإيفاد، النسبة المئوية، أو التخصص المطلوب).",

    bubble1_title: "بلد الإيفاد",
    bubble1_sub: "Desired Country",
    bubble1_desc: "الدولة المراد الدراسة بها.",
    bubble1_default: "-- جميع الدول المعتمدة --",

    bubble2_title: "نسبة الثانوية %",
    bubble2_sub: "High School %",
    bubble2_desc: "نسبة الثانوية العامة أو المعدل من 4.00.",
    bubble2_default: "-- اختر فئة النسبة المئوية --",

    bubble3_title: "التخصص المطلوب",
    bubble3_sub: "Specialization",
    bubble3_desc: "المجال الأكاديمي المعتمد ضمن خطة البعثات السنوية.",
    bubble3_default: "-- جميع التخصصات المتاحة --",

    merit_checkbox_label: "تصفية حسب جامعات التميز فقط (قائمة جامعات التميز)",
    merit_checkbox_desc: "عرض التخصصات في الجامعات المتميزة فقط المعتمدة من وزارة التعليم العالي مع ميزة زيادة الراتب 50%.",
    merit_rules_link: "ضوابط التميز ←",
    btn_query_sponsorships: "البحث عن التخصصات المتاحة",

    // Tool 1: GPA Converter
    tool1_title: "حاسبة تحويل المعدل GPA إلى نسبة مئوية (النظام الأمريكي)",
    tool1_tag: "التعليم الخاص",
    tool1_desc: "حاسبة معتمدة تحول معدل GPA من 4.00 إلى النسبة المئوية حسب معادلة إدارة التعليم الخاص بوزارة التربية.",
    gpa_input_label: "أدخل المعدل من 4.00 (مثال: 3.85):",
    btn_convert: "تحويل",
    gpa_result_label: "النسبة المكافئة:",
    btn_apply_gpa: "تطبيق هذه النسبة على فلتر البحث ↑",
    gpa_ref_note: "مرجع: القرار الوزاري لمعادلة الشهادات الصادر من وزارة التربية والتعليم العالي",

    // Tool 2: Equivalent Score Calculator
    tool2_title: "حاسبة المعدل المكافئ (جامعة الكويت)",
    tool2_tag: "جامعة الكويت",
    tool2_desc: "تحسب المعدل المركب المعتمد للقبول في التخصصات الطبية والهندسية بجامعة الكويت:",
    sec_pct_label: "نسبة الثانوية % (60 - 100):",
    apt_score_label: "درجة اختبار القدرات % (0 - 100):",
    tool2_ref_note: "مطلوب إجباري للقبول في الهندسة والطب بجامعة الكويت ومقاعد الطب المباشر لدول الخليج",

    // Landing Quick Links
    card_guide_title: "مواقع التقديم المباشر للجامعات",
    card_guide_desc: "دليل الخطوات للتقديم عبر CommonApp و UCAS وتطبيقات سهل وهويتي.",
    card_guide_btn: "فتح الدليل ←",
    card_local_title: "دليل الجامعات داخل الكويت",
    card_local_desc: "شروط القبول والبعثات الداخلية في جامعة الكويت والجامعات الخاصة.",
    card_local_btn: "عرض الجامعات المحلية ←",

    // Results Page
    results_breadcrumb_home: "الرئيسية",
    results_breadcrumb_current: "التخصصات المعتمدة",
    results_title: "التخصصات والبعثات المعتمدة",
    results_desc: "استعرض التخصصات الجامعية المعتمدة، الشروط، والرواتب الشهرية لطلاب البعثات الخارجية.",
    btn_quick_merit: "عرض جامعات التميز فقط (+50% زيادة راتب)",
    results_count_searching: "جاري البحث...",
    active_filters_heading: "الفلاتر النشطة:",
    search_placeholder: "ابحث عن تخصص، دولة، اختبار، أو جامعة...",
    empty_title: "لم يتم العثور على تخصصات مطابقة",
    empty_desc: "لا توجد تخصصات تطابق خيارات البحث الحالية. جرب إلغاء بعض الفلاتر أو إيقاف تصفية جامعات التميز.",
    btn_view_all_courses: "عرض جميع التخصصات",
    btn_change_filters: "تغيير الفلاتر",

    // Feedback Survey
    feedback_question: "هل ساعدك هذا البحث في معرفة الشروط والرواتب؟",
    feedback_sub_ar: "هل ساعدك هذا البحث في التعرف على متطلبات البعثات والرواتب والمواعيد؟",
    btn_feedback_yes: "نعم، مفيد جداً",
    btn_feedback_no: "يحتاج إلى تحسين",
    feedback_comment_label: "ملاحظات إضافية (اختياري):",
    feedback_comment_placeholder: "اكتب ملاحظاتك لمساعدتنا في تحسين Portal مستقبلي...",
    btn_submit_feedback: "إرسال التقييم",
    feedback_thankyou: "شكراً لتقييمك وملاحظاتك القيمة.",

    // Suggestions Page
    suggestions_badge: "التقديم المباشر",
    suggestions_title: "دليل التقديم المباشر للجامعات",
    suggestions_desc: "المنصات الرقمية الموصى بها للتقديم المباشر للجامعات العالمية والجهات الحكومية.",
    sug_sec1_title: "1. منصات التقديم الجامعي الموحدة",
    sug_sec2_title: "2. منصات اختبارات اللغة والاختبارات المعيارية",
    sug_sec3_title: "3. التطبيقات الحكومية للتوثيق والمعادلات",

    // Local Universities Page
    local_badge: "الجامعات المحلية",
    local_title: "الجامعات الحكومية والخاصة داخل الكويت",
    local_desc: "دليل شروط ونسب القبول والبعثات الداخلية في كافة جامعات الكويت.",
    local_btn_foreign: "البعثات الخارجية",

    // Guidelines Page
    guidelines_badge: "اللوائح والأسئلة الشائعة",
    guidelines_title: "اللوائح التنظيمية والأسئلة الشائعة",
    guidelines_desc: "ضوابط الابتعاث، شروط اختبارات اللغة، تحويل النسب، وإجراءات الفيزا والكتاب المالي.",
    guidelines_btn_merit: "جامعات التميز",
    guidelines_cta_title: "جاهز للبحث عن التخصصات المناسبة؟",
    guidelines_cta_desc: "استعرض التخصصات حسب الدولة، النسبة المئوية، أو جامعات التميز.",
    guidelines_cta_btn: "البحث عن التخصصات ←",

    // About Page
    about_badge: "عن مستقبلي",
    about_title: "مكان واحد لجميع استفساراتك الجامعية",
    about_desc: "جمع بيانات البعثات الخارجية والداخلية وشروط القبول في منصة موحدة سهلة الاستخدام.",
    about_challenge_title: "التحدي السابق",
    about_challenge_desc: "كان على الطالب الكويتي التشتت بين عدة مواقع وملفات PDF متعددة لمعرفة الشروط:",
    about_solution_title: "الحل عبر مستقبلي",
    about_solution_desc: "يقدم مستقبلي كافة البيانات في مكان واحد موحد وضمن واجهة تفاعلية:"
  }
};

/**
 * Get current language setting ('en' or 'ar')
 */
function getCurrentLanguage() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('moustaqbili_lang');
    if (saved === 'ar' || saved === 'en') return saved;
  }
  return 'en';
}

/**
 * Set and apply language setting
 */
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') lang = 'en';
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('moustaqbili_lang', lang);
  }

  const html = document.documentElement;
  html.lang = lang;
  html.dir = (lang === 'ar' ? 'rtl' : 'ltr');

  // Update text of elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (MOUSTAQBILI_TRANSLATIONS[lang] && MOUSTAQBILI_TRANSLATIONS[lang][key]) {
      el.textContent = MOUSTAQBILI_TRANSLATIONS[lang][key];
    }
  });

  // Update placeholders
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (MOUSTAQBILI_TRANSLATIONS[lang] && MOUSTAQBILI_TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', MOUSTAQBILI_TRANSLATIONS[lang][key]);
    }
  });

  // Update language toggle buttons text
  const toggleBtnText = document.getElementById('lang-toggle-text');
  const mobileToggleBtnText = document.getElementById('mobile-lang-toggle-text');
  
  if (toggleBtnText) {
    toggleBtnText.textContent = MOUSTAQBILI_TRANSLATIONS[lang].btn_lang_toggle;
  }
  if (mobileToggleBtnText) {
    mobileToggleBtnText.textContent = MOUSTAQBILI_TRANSLATIONS[lang].mobile_lang_toggle;
  }

  // Fire custom event for dynamic re-renders in app.js
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = (current === 'en' ? 'ar' : 'en');
  setLanguage(next);
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
});

if (typeof window !== 'undefined') {
  window.getCurrentLanguage = getCurrentLanguage;
  window.setLanguage = setLanguage;
  window.toggleLanguage = toggleLanguage;
  window.MOUSTAQBILI_TRANSLATIONS = MOUSTAQBILI_TRANSLATIONS;
}
