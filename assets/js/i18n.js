/**
 * moustaqbili | مستقبلي
 * Internationalization (i18n) - English / Arabic
 */

const MOUSTAQBILI_TRANSLATIONS = {
  en: {
    // Header, navigation, footer
    portal_subtitle: "Scholarships & Admissions Guide",
    nav_home: "Home",
    nav_courses: "Approved Courses",
    nav_qudrat: "Qudrat Tests",
    nav_local: "Local Universities",
    nav_guide: "Application Guide",
    nav_faq: "Regulations",
    nav_contact: "Contact MoHE",
    nav_about: "About",
    btn_lang_toggle: "العربية",
    footer_desc: "Independent student guide. Always confirm final decisions with the Ministry of Higher Education.",

    // Data-status labels
    flag_unconfirmed: "Not confirmed",
    flag_unconfirmed_tip: "No official source confirms this yet.",
    flag_unverified: "Not re-verified",
    flag_unverified_tip: "Carried over from the previous edition; not yet checked against 2026/2027 sources.",
    not_confirmed: "Not confirmed",
    not_announced: "Not announced yet",
    sources_title: "Sources",
    last_verified: "last checked",

    // Home
    hero_badge: "Academic Year 2026/2027",
    hero_title: "Find your scholarship, step by step",
    hero_desc: "Approved majors, monthly allowances, Qudrat dates and Ministry contacts in one place.",
    search_card_title: "Search approved programs",
    search_card_desc: "Choose at least one option below.",
    validation_error_title: "Choose at least one option",
    validation_error_msg: "Pick a country, a grade bracket, or a specialization to see matching programs.",
    bubble1_title: "Country",
    bubble1_default: "All countries",
    bubble2_title: "High School %",
    bubble2_default: "Any grade",
    bubble3_title: "Specialization",
    bubble3_default: "All specializations",
    merit_checkbox_label: "Merit universities only",
    merit_checkbox_desc: "Universities on the Ministry's merit list.",
    btn_query_sponsorships: "Show programs",

    tool1_title: "GPA to percentage",
    tool1_desc: "Convert an American-diploma GPA (4.0 scale) to the Kuwaiti percentage.",
    gpa_input_label: "GPA (1.00 - 4.00)",
    btn_convert: "Convert",
    gpa_result_label: "Percentage",
    btn_apply_gpa: "Use in search",
    gpa_ref_note: "Approximate guide only. The official equivalency is issued by the Ministry of Education.",
    gpa_tier_1: "Meets the 97% medicine floor (Ireland, Bahrain).",
    gpa_tier_2: "Meets the 95% medicine floor (UK, Australia, Malta).",
    gpa_tier_3: "Meets the 90% floor (US engineering, merit programme).",
    gpa_tier_4: "Meets the 85% floor used for most other majors.",
    gpa_tier_5: "Below most foreign-plan floors. See local universities.",
    gpa_tier_6: "See local universities and PUC internal scholarships.",

    qudrat_home_label: "Qudrat tests",
    qudrat_home_cta: "Dates & registration",
    ql_qudrat_title: "Qudrat tests",
    ql_qudrat_desc: "Current cycle dates, subjects, fees and the equivalent-score calculator.",
    ql_local_title: "Local universities",
    ql_local_desc: "Kuwait University, AASU and private-university scholarships.",
    ql_guide_title: "Application guide",
    ql_guide_desc: "Common App, UCAS, testing portals and Kuwaiti e-services.",
    ql_contact_title: "Contact the Ministry",
    ql_contact_desc: "Emails, appointments and cultural offices abroad.",

    // Results
    results_breadcrumb_home: "Home",
    results_breadcrumb_current: "Approved Courses",
    results_title: "Approved courses",
    results_desc: "Approved majors with their minimum grade and monthly allowance. Open a card for full requirements or the currency calculator.",
    results_plan_status: "Plan 2026/2027: general registration closed on 7 July 2026. Merit programme applications are open until 24 February 2027.",
    btn_quick_merit: "Merit universities only",
    merit_toggle_on: "Showing merit universities",
    merit_toggle_off: "Merit universities only",
    results_count_searching: "Searching...",
    results_count_one: "program",
    results_count_many: "programs",
    active_filters_heading: "Filters",
    search_placeholder: "Search major, country or university",
    chip_country: "Country",
    chip_percentage: "High school %",
    chip_major: "Specialization",
    chip_merit: "Merit universities",
    chip_remove: "Remove filter",
    chips_none: "Showing all programs in the Foreign Scholarship Plan 2026/2027.",
    btn_reset_criteria: "Clear all",
    empty_title: "No matching programs",
    empty_desc: "Try removing a filter or turning off the merit filter.",
    btn_view_all_courses: "View all programs",
    btn_change_filters: "Change filters",

    card_merit_badge: "Merit",
    card_min_grade: "Minimum",
    card_stipend_label: "Monthly allowance",
    card_merit_amount: "Merit",
    btn_card_requirements: "Requirements",
    btn_card_salary: "Allowance & calculator",

    // Requirements modal
    modal_requirements_subtitle: "Requirements",
    req_verified_note: "Minimum percentage and allowance are checked against Plan 2026/2027. Exam, deadline and visa details below are from the previous edition.",
    modal_tab_grades: "Grades",
    modal_tab_exams: "Exams",
    modal_tab_deadlines: "Deadlines",
    modal_tab_visa: "Visa",
    modal_public_school: "Kuwait public schools",
    modal_us_diploma: "American diploma",
    modal_uk_system: "British system (IGCSE / A-Levels)",
    modal_floors_heading: "Subject minimums",
    modal_language_advisory: "Language test",
    modal_english_heading: "English requirement",
    modal_other_exams: "Other exams",
    modal_sat_heading: "SAT / ACT",
    modal_platform: "Application platform",
    modal_word_count: "Personal statement",
    modal_supplemental: "Interviews & extra essays",
    modal_mohe_window: "Ministry registration",
    modal_ea: "Early Action",
    modal_ed: "Early Decision",
    modal_rd: "Regular / UCAS deadline",
    modal_pathway_heading: "Entry route",
    modal_foundation_yes: "Foundation year required for Thanawiya graduates",
    modal_foundation_no: "Direct entry, no foundation year",
    modal_visa_type: "Student visa",
    modal_visa_docs: "Documents usually required",
    modal_guarantee_title: "Ministry financial guarantee letter (الكتاب المالي)",
    modal_guarantee_desc: "Issued by the cultural office to confirm that tuition and the monthly allowance are covered. It replaces personal bank statements for the visa.",
    modal_questions_contact: "Questions? Contact the Ministry",
    modal_close: "Close",

    // Allowance modal
    modal_salary_subtitle: "Allowance & currency calculator",
    salary_monthly_heading: "Monthly allowance",
    salary_col_location: "Where",
    stipend_variant_all: "All cities",
    stipend_standard: "Standard",
    stipend_merit: "Merit",
    salary_merit_note: "Merit students get an extra 50% each month after the preparatory stage (Decree 197/2025, Art. 25).",
    stipend_merit_unconfirmed: "The Ministry's merit table lists the same amount as the standard rate for Australia, so the merit amount is not confirmed. Ask the Canberra cultural office.",
    salary_source_note: "Amounts from the Ministry's 2026/2027 allowance tables:",
    calc_heading: "Currency calculator",
    calc_desc: "Convert this allowance, or any amount, between currencies.",
    calc_amount: "Amount",
    calc_from: "From currency",
    calc_to: "To",
    calc_swap: "Swap currencies",
    calc_result: "Result",
    fx_live_note: "Live exchange rates, updated",
    fx_fallback_note: "Offline rates (Central Bank of Kuwait) from",
    modal_allowances_heading: "Other benefits",
    modal_institutions_heading: "Universities",
    institutions_note: "Merit university lists are kept by the National Bureau for Academic Accreditation and were last changed in November 2025. Check the current list at",

    // Qudrat page
    qudrat_badge: "Kuwait University",
    qudrat_title: "Qudrat aptitude tests",
    qudrat_desc: "Dates, registration and scoring for the current testing cycle.",
    toc_current: "Current cycle",
    toc_dates: "Test dates",
    toc_subjects: "Subjects & fees",
    toc_equivalent: "Equivalent score",
    toc_rules: "Rules",
    toc_help: "Help & contact",
    qudrat_current_label: "Current cycle",
    qudrat_registration: "Registration",
    qudrat_tests: "Tests",
    qudrat_results: "Results",
    qudrat_status_upcoming: "Registration opens in {days} days",
    qudrat_status_reg_open: "Registration open · next deadline in {days} days",
    qudrat_status_reg_closed: "Registration closed · next test in {days} days",
    qudrat_status_finished: "Cycle finished",
    qudrat_who: "Who can register",
    qudrat_how: "How to register",
    qudrat_register_btn: "Register on the KU portal",
    qudrat_dates_title: "Test dates and deadlines",
    qudrat_col_test_date: "Test date",
    qudrat_col_reg_close: "Registration closes",
    qudrat_col_status: "Status",
    qudrat_session_open: "Open",
    qudrat_session_closed: "Registration closed",
    qudrat_session_done: "Done",
    qudrat_phases_title: "When registration opens for you",
    qudrat_next_cycle: "Next cycle",
    qudrat_subjects_title: "Subjects and fees",
    qudrat_col_subject: "Test",
    qudrat_col_required_for: "Required for",
    equiv_title: "Equivalent score calculator",
    equiv_desc: "Kuwait University ranks applicants by an equivalent percentage. Choose a college and enter your scores.",
    equiv_college: "College",
    equiv_hs: "High school",
    equiv_condition: "Also required",
    qudrat_rules_title: "Good to know",
    qudrat_help_title: "Help with registration",
    qudrat_help_me: "Help Me service",

    // Contact page
    contact_badge: "Official channels",
    contact_title: "Contact the Ministry of Higher Education",
    contact_desc: "Where to send your question, how to book a visit, and the cultural office for each country.",
    contact_disclaimer: "Collected from mohe.edu.kw, puc.edu.kw, ku.edu.kw and aasu.edu.kw. Contact details change; if one does not work, use the Ministry's X account or the appointment service.",

    // Regulations page
    guidelines_badge: "Regulations",
    guidelines_title: "Scholarship rules",
    guidelines_desc: "The 2026/2027 plan, language tests, entry routes and visas.",
    guidelines_cta_title: "Ready to search?",
    guidelines_cta_desc: "Filter approved programs by country, grade or merit university.",
    guidelines_cta_btn: "Search programs",
    plan_title: "Foreign Scholarship Plan 2026/2027",
    plan_rules_title: "Main rules",
    plan_floors_title: "Minimum high-school % by country",
    plan_countries: "Countries in the plan",
    plan_col_country: "Country",
    plan_col_medicine: "Medicine / Dentistry",
    plan_col_pharmacy: "Pharmacy",
    plan_col_engineering: "Engineering",
    plan_col_other: "Other majors",
    plan_pdf_link: "Plan 2026/2027 (PDF)",
    plan_allowances_link: "Allowance tables",
    plan_registration_link: "Registration portal",

    // Local universities
    local_badge: "Kuwait",
    local_title: "Universities in Kuwait",
    local_desc: "Admission minimums and scholarships at public and private universities in Kuwait.",
    local_public_title: "Public universities",
    local_public_desc: "Kuwait University and Abdullah Al-Salem University. Free tuition for Kuwaiti students. Admission uses the Qudrat aptitude tests.",
    local_private_title: "Private universities (PUC internal scholarships)",
    local_private_desc: "Tuition paid by the government at approved private universities. 2026/2027 minimums: 78% science, 80% arts, 90% engineering and law.",
    local_funding: "Funding",
    local_admission: "Admission",
    local_aptitude: "Aptitude tests",
    local_qudrat_link: "Qudrat dates and calculator",
    local_colleges: "Colleges",

    // Application guide
    suggestions_badge: "Applying directly",
    suggestions_title: "Application guide",
    suggestions_desc: "Platforms for applying to universities, booking tests and using Kuwaiti e-services.",
    sug_sec1_title: "1. University application platforms",
    sug_sec2_title: "2. Testing and language portals",
    sug_sec3_title: "3. Kuwaiti e-services",

    // About
    about_badge: "About",
    about_title: "One place for your university questions",
    about_desc: "Foreign and local scholarship information in one simple guide.",
    about_challenge_title: "The problem",
    about_challenge_desc: "Students had to check many websites and long PDF files to find answers:",
    about_solution_title: "What Moustaqbili does",
    about_solution_desc: "It puts the essentials in one place:",

    // Feedback
    feedback_question: "Was this page helpful?",
    feedback_sub_ar: "هل كانت هذه الصفحة مفيدة؟",
    btn_feedback_yes: "Yes",
    btn_feedback_no: "Needs work",
    feedback_comment_label: "Comments (optional)",
    feedback_comment_placeholder: "What should we improve?",
    btn_submit_feedback: "Send",
    feedback_thankyou: "Thank you for your feedback."
  },

  ar: {
    // Header, navigation, footer
    portal_subtitle: "دليل البعثات والقبول",
    nav_home: "الرئيسية",
    nav_courses: "التخصصات المعتمدة",
    nav_qudrat: "اختبارات القدرات",
    nav_local: "الجامعات المحلية",
    nav_guide: "دليل التقديم",
    nav_faq: "اللوائح",
    nav_contact: "تواصل مع الوزارة",
    nav_about: "عن الموقع",
    btn_lang_toggle: "English",
    footer_desc: "دليل مستقل للطلبة. تأكد دائماً من القرارات النهائية مع وزارة التعليم العالي.",

    // Data-status labels
    flag_unconfirmed: "غير مؤكد",
    flag_unconfirmed_tip: "لا يوجد مصدر رسمي يؤكد هذه المعلومة حتى الآن.",
    flag_unverified: "لم يُعَد التحقق",
    flag_unverified_tip: "منقول من الإصدار السابق، ولم يُراجَع بعد مع مصادر 2026/2027.",
    not_confirmed: "غير مؤكد",
    not_announced: "لم يُعلن بعد",
    sources_title: "المصادر",
    last_verified: "آخر مراجعة",

    // Home
    hero_badge: "العام الأكاديمي 2026/2027",
    hero_title: "اعثر على بعثتك خطوة بخطوة",
    hero_desc: "التخصصات المعتمدة والمخصصات الشهرية ومواعيد القدرات ووسائل التواصل مع الوزارة في مكان واحد.",
    search_card_title: "ابحث في البرامج المعتمدة",
    search_card_desc: "اختر خياراً واحداً على الأقل.",
    validation_error_title: "اختر خياراً واحداً على الأقل",
    validation_error_msg: "اختر الدولة أو فئة النسبة أو التخصص لعرض البرامج المناسبة.",
    bubble1_title: "الدولة",
    bubble1_default: "جميع الدول",
    bubble2_title: "نسبة الثانوية",
    bubble2_default: "أي نسبة",
    bubble3_title: "التخصص",
    bubble3_default: "جميع التخصصات",
    merit_checkbox_label: "جامعات التميز فقط",
    merit_checkbox_desc: "الجامعات المدرجة في قائمة التميز لدى الوزارة.",
    btn_query_sponsorships: "اعرض البرامج",

    tool1_title: "تحويل المعدل إلى نسبة",
    tool1_desc: "حوّل معدل الدبلوما الأمريكية (من 4.0) إلى النسبة المئوية الكويتية.",
    gpa_input_label: "المعدل (1.00 - 4.00)",
    btn_convert: "تحويل",
    gpa_result_label: "النسبة",
    btn_apply_gpa: "استخدمها في البحث",
    gpa_ref_note: "تقدير تقريبي فقط. المعادلة الرسمية تصدر عن وزارة التربية.",
    gpa_tier_1: "تحقق الحد الأدنى للطب 97% (أيرلندا، البحرين).",
    gpa_tier_2: "تحقق الحد الأدنى للطب 95% (المملكة المتحدة، أستراليا، مالطا).",
    gpa_tier_3: "تحقق حد 90% (الهندسة في أمريكا، برنامج التميز).",
    gpa_tier_4: "تحقق حد 85% المعتمد لمعظم التخصصات الأخرى.",
    gpa_tier_5: "أقل من معظم حدود البعثات الخارجية. راجع الجامعات المحلية.",
    gpa_tier_6: "راجع الجامعات المحلية والبعثات الداخلية.",

    qudrat_home_label: "اختبارات القدرات",
    qudrat_home_cta: "المواعيد والتسجيل",
    ql_qudrat_title: "اختبارات القدرات",
    ql_qudrat_desc: "مواعيد الفترة الحالية والمواد والرسوم وحاسبة المعدل المكافئ.",
    ql_local_title: "الجامعات المحلية",
    ql_local_desc: "جامعة الكويت وجامعة عبد الله السالم والبعثات الداخلية.",
    ql_guide_title: "دليل التقديم",
    ql_guide_desc: "Common App وUCAS ومنصات الاختبارات والخدمات الحكومية.",
    ql_contact_title: "تواصل مع الوزارة",
    ql_contact_desc: "البريد الإلكتروني والمواعيد والمكاتب الثقافية في الخارج.",

    // Results
    results_breadcrumb_home: "الرئيسية",
    results_breadcrumb_current: "التخصصات المعتمدة",
    results_title: "التخصصات المعتمدة",
    results_desc: "التخصصات المعتمدة مع الحد الأدنى للنسبة والمخصص الشهري. افتح البطاقة للاطلاع على الشروط كاملة أو حاسبة العملات.",
    results_plan_status: "خطة 2026/2027: أُغلق التسجيل العام في 7 يوليو 2026. التقديم لبرنامج التميز مفتوح حتى 24 فبراير 2027.",
    btn_quick_merit: "جامعات التميز فقط",
    merit_toggle_on: "عرض جامعات التميز",
    merit_toggle_off: "جامعات التميز فقط",
    results_count_searching: "جارٍ البحث...",
    results_count_one: "برنامج",
    results_count_many: "برامج",
    active_filters_heading: "عوامل التصفية",
    search_placeholder: "ابحث عن تخصص أو دولة أو جامعة",
    chip_country: "الدولة",
    chip_percentage: "نسبة الثانوية",
    chip_major: "التخصص",
    chip_merit: "جامعات التميز",
    chip_remove: "إزالة",
    chips_none: "عرض جميع البرامج ضمن خطة البعثات الخارجية 2026/2027.",
    btn_reset_criteria: "مسح الكل",
    empty_title: "لا توجد برامج مطابقة",
    empty_desc: "جرّب إزالة أحد عوامل التصفية أو إلغاء خيار التميز.",
    btn_view_all_courses: "عرض جميع البرامج",
    btn_change_filters: "تغيير الخيارات",

    card_merit_badge: "تميز",
    card_min_grade: "الحد الأدنى",
    card_stipend_label: "المخصص الشهري",
    card_merit_amount: "التميز",
    btn_card_requirements: "الشروط",
    btn_card_salary: "المخصص والحاسبة",

    // Requirements modal
    modal_requirements_subtitle: "الشروط",
    req_verified_note: "تمت مراجعة الحد الأدنى للنسبة والمخصص مع خطة 2026/2027. تفاصيل الاختبارات والمواعيد والتأشيرة أدناه من الإصدار السابق.",
    modal_tab_grades: "النسب",
    modal_tab_exams: "الاختبارات",
    modal_tab_deadlines: "المواعيد",
    modal_tab_visa: "التأشيرة",
    modal_public_school: "المدارس الحكومية في الكويت",
    modal_us_diploma: "الدبلوما الأمريكية",
    modal_uk_system: "النظام البريطاني (IGCSE / A-Levels)",
    modal_floors_heading: "الحد الأدنى للمواد",
    modal_language_advisory: "اختبار اللغة",
    modal_english_heading: "متطلب اللغة الإنجليزية",
    modal_other_exams: "اختبارات أخرى",
    modal_sat_heading: "SAT / ACT",
    modal_platform: "منصة التقديم",
    modal_word_count: "الرسالة الشخصية",
    modal_supplemental: "المقابلات والمقالات الإضافية",
    modal_mohe_window: "التسجيل في الوزارة",
    modal_ea: "القبول المبكر (EA)",
    modal_ed: "القرار المبكر (ED)",
    modal_rd: "الموعد العادي / UCAS",
    modal_pathway_heading: "طريقة القبول",
    modal_foundation_yes: "السنة التأسيسية مطلوبة لخريجي الثانوية العامة",
    modal_foundation_no: "قبول مباشر دون سنة تأسيسية",
    modal_visa_type: "تأشيرة الدراسة",
    modal_visa_docs: "المستندات المطلوبة عادةً",
    modal_guarantee_title: "الكتاب المالي من الوزارة",
    modal_guarantee_desc: "يصدره المكتب الثقافي لتأكيد تغطية الرسوم الدراسية والمخصص الشهري، ويُغني عن كشف الحساب البنكي الشخصي للتأشيرة.",
    modal_questions_contact: "لديك سؤال؟ تواصل مع الوزارة",
    modal_close: "إغلاق",

    // Allowance modal
    modal_salary_subtitle: "المخصص وحاسبة العملات",
    salary_monthly_heading: "المخصص الشهري",
    salary_col_location: "المكان",
    stipend_variant_all: "جميع المدن",
    stipend_standard: "عادي",
    stipend_merit: "تميز",
    salary_merit_note: "يحصل طلبة التميز على زيادة 50% شهرياً بعد المرحلة التمهيدية (القرار 197/2025، المادة 25).",
    stipend_merit_unconfirmed: "يذكر جدول التميز لدى الوزارة المبلغ نفسه للمخصص العادي في أستراليا، لذلك مبلغ التميز غير مؤكد. استفسر من المكتب الثقافي في كانبرا.",
    salary_source_note: "المبالغ من جداول المخصصات لدى الوزارة للعام 2026/2027:",
    calc_heading: "حاسبة العملات",
    calc_desc: "حوّل هذا المخصص أو أي مبلغ بين العملات.",
    calc_amount: "المبلغ",
    calc_from: "من عملة",
    calc_to: "إلى",
    calc_swap: "تبديل العملتين",
    calc_result: "النتيجة",
    fx_live_note: "أسعار صرف مباشرة، آخر تحديث",
    fx_fallback_note: "أسعار احتياطية (بنك الكويت المركزي) بتاريخ",
    modal_allowances_heading: "مزايا أخرى",
    modal_institutions_heading: "الجامعات",
    institutions_note: "يحتفظ الجهاز الوطني للاعتماد الأكاديمي بقوائم جامعات التميز، وآخر تعديل عليها كان في نوفمبر 2025. راجع القائمة الحالية في",

    // Qudrat page
    qudrat_badge: "جامعة الكويت",
    qudrat_title: "اختبارات القدرات الأكاديمية",
    qudrat_desc: "المواعيد والتسجيل وطريقة الاحتساب للفترة الحالية.",
    toc_current: "الفترة الحالية",
    toc_dates: "مواعيد الاختبارات",
    toc_subjects: "المواد والرسوم",
    toc_equivalent: "المعدل المكافئ",
    toc_rules: "القواعد",
    toc_help: "المساعدة والتواصل",
    qudrat_current_label: "الفترة الحالية",
    qudrat_registration: "التسجيل",
    qudrat_tests: "الاختبارات",
    qudrat_results: "النتائج",
    qudrat_status_upcoming: "يبدأ التسجيل بعد {days} يوم",
    qudrat_status_reg_open: "التسجيل مفتوح · أقرب موعد إغلاق بعد {days} يوم",
    qudrat_status_reg_closed: "أُغلق التسجيل · الاختبار القادم بعد {days} يوم",
    qudrat_status_finished: "انتهت الفترة",
    qudrat_who: "من يحق له التسجيل",
    qudrat_how: "طريقة التسجيل",
    qudrat_register_btn: "التسجيل في بوابة الجامعة",
    qudrat_dates_title: "مواعيد الاختبارات وإغلاق التسجيل",
    qudrat_col_test_date: "موعد الاختبار",
    qudrat_col_reg_close: "إغلاق التسجيل",
    qudrat_col_status: "الحالة",
    qudrat_session_open: "مفتوح",
    qudrat_session_closed: "أُغلق التسجيل",
    qudrat_session_done: "انتهى",
    qudrat_phases_title: "متى يبدأ التسجيل لك",
    qudrat_next_cycle: "الفترة القادمة",
    qudrat_subjects_title: "المواد والرسوم",
    qudrat_col_subject: "الاختبار",
    qudrat_col_required_for: "مطلوب لـ",
    equiv_title: "حاسبة المعدل المكافئ",
    equiv_desc: "ترتب جامعة الكويت المتقدمين حسب المعدل المكافئ. اختر الكلية وأدخل درجاتك.",
    equiv_college: "الكلية",
    equiv_hs: "الثانوية",
    equiv_condition: "مطلوب أيضاً",
    qudrat_rules_title: "معلومات مهمة",
    qudrat_help_title: "المساعدة في التسجيل",
    qudrat_help_me: "خدمة ساعدني",

    // Contact page
    contact_badge: "القنوات الرسمية",
    contact_title: "التواصل مع وزارة التعليم العالي",
    contact_desc: "أين ترسل سؤالك، وكيف تحجز موعداً، والمكتب الثقافي لكل دولة.",
    contact_disclaimer: "جُمعت من mohe.edu.kw وpuc.edu.kw وku.edu.kw وaasu.edu.kw. قد تتغير بيانات التواصل؛ إن لم تنجح إحداها فاستخدم حساب الوزارة في إكس أو خدمة حجز المواعيد.",

    // Regulations page
    guidelines_badge: "اللوائح",
    guidelines_title: "لوائح البعثات",
    guidelines_desc: "خطة 2026/2027 واختبارات اللغة وطرق القبول والتأشيرات.",
    guidelines_cta_title: "جاهز للبحث؟",
    guidelines_cta_desc: "صفِّ البرامج المعتمدة حسب الدولة أو النسبة أو جامعات التميز.",
    guidelines_cta_btn: "ابحث في البرامج",
    plan_title: "خطة البعثات الخارجية 2026/2027",
    plan_rules_title: "أهم الشروط",
    plan_floors_title: "الحد الأدنى لنسبة الثانوية حسب الدولة",
    plan_countries: "الدول المشمولة في الخطة",
    plan_col_country: "الدولة",
    plan_col_medicine: "الطب / طب الأسنان",
    plan_col_pharmacy: "الصيدلة",
    plan_col_engineering: "الهندسة",
    plan_col_other: "تخصصات أخرى",
    plan_pdf_link: "خطة 2026/2027 (PDF)",
    plan_allowances_link: "جداول المخصصات",
    plan_registration_link: "بوابة التسجيل",

    // Local universities
    local_badge: "الكويت",
    local_title: "الجامعات في الكويت",
    local_desc: "الحدود الدنيا للقبول والبعثات في الجامعات الحكومية والخاصة داخل الكويت.",
    local_public_title: "الجامعات الحكومية",
    local_public_desc: "جامعة الكويت وجامعة عبد الله السالم. دراسة مجانية للطلبة الكويتيين، ويعتمد القبول على اختبارات القدرات.",
    local_private_title: "الجامعات الخاصة (البعثات الداخلية)",
    local_private_desc: "الرسوم على نفقة الحكومة في الجامعات الخاصة المعتمدة. الحد الأدنى 2026/2027: 78% علمي، 80% أدبي، 90% للهندسة والحقوق.",
    local_funding: "التمويل",
    local_admission: "القبول",
    local_aptitude: "اختبارات القدرات",
    local_qudrat_link: "مواعيد القدرات والحاسبة",
    local_colleges: "الكليات",

    // Application guide
    suggestions_badge: "التقديم المباشر",
    suggestions_title: "دليل التقديم",
    suggestions_desc: "منصات التقديم للجامعات وحجز الاختبارات والخدمات الحكومية الكويتية.",
    sug_sec1_title: "1. منصات التقديم للجامعات",
    sug_sec2_title: "2. منصات الاختبارات واللغة",
    sug_sec3_title: "3. الخدمات الحكومية الكويتية",

    // About
    about_badge: "عن الموقع",
    about_title: "مكان واحد لأسئلتك الجامعية",
    about_desc: "معلومات البعثات الخارجية والداخلية في دليل واحد بسيط.",
    about_challenge_title: "المشكلة",
    about_challenge_desc: "كان على الطلبة البحث في مواقع كثيرة وملفات PDF طويلة للعثور على الإجابات:",
    about_solution_title: "ما يقدمه مستقبلي",
    about_solution_desc: "يجمع الأساسيات في مكان واحد:",

    // Feedback
    feedback_question: "هل كانت هذه الصفحة مفيدة؟",
    feedback_sub_ar: "Was this page helpful?",
    btn_feedback_yes: "نعم",
    btn_feedback_no: "تحتاج إلى تحسين",
    feedback_comment_label: "ملاحظات (اختياري)",
    feedback_comment_placeholder: "ما الذي يمكننا تحسينه؟",
    btn_submit_feedback: "إرسال",
    feedback_thankyou: "شكراً لملاحظاتك."
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
