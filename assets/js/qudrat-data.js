/**
 * moustaqbili | مستقبلي
 * Kuwait University Academic Aptitude Tests (اختبارات القدرات الأكاديمية / Qudrat)
 * Current cycle: First Opportunity, academic year 2026/2027.
 *
 * Collected 2026-10-11 from Kuwait University's official pages and PDFs
 * (ku.edu.kw, cem.ku.edu.kw). See `sources` below. Update this file when KU
 * announces the next cycle (expected in January for the Second Opportunity).
 */

const KUWAIT_QUDRAT = {
  lastVerified: "2026-10-11",

  currentCycle: {
    nameEn: "Academic Aptitude Tests - First Opportunity 2026/2027",
    nameAr: "اختبارات القدرات الأكاديمية - الفرصة الأولى 2026/2027",
    termEn: "Also called the Unified National Test. For grade 12 students and secondary-school graduates applying to Kuwait University, Abdullah Al-Salem University, and medicine or engineering scholarships.",
    termAr: "ويُسمى أيضاً الاختبار الوطني الموحد. لطلبة الصف الثاني عشر وخريجي الثانوية المتقدمين لجامعة الكويت وجامعة عبد الله السالم وبعثات الطب والهندسة.",

    // Overall window (first opening phase -> last registration deadline)
    registration: { start: "2026-10-06", end: "2026-11-25" },
    tests: { start: "2026-11-07", end: "2026-12-05" },
    results: null,
    resultsNoteEn: "About 2 weeks after each test (cemapp.ku.edu.kw/results or the Sahel app)",
    resultsNoteAr: "خلال أسبوعين تقريباً من كل اختبار (cemapp.ku.edu.kw/results أو تطبيق سهل)",

    // Each test date has its own registration deadline
    sessions: [
      { test: "2026-11-07", regClose: "2026-10-26" },
      { test: "2026-11-21", regClose: "2026-11-11" },
      { test: "2026-12-05", regClose: "2026-11-25" }
    ],

    openingPhases: [
      { date: "2026-10-06", whoEn: "Kuwaiti students registering for the first time (from 10:00 am)", whoAr: "الطلبة الكويتيون الذين يسجلون لأول مرة (من الساعة 10 صباحاً)" },
      { date: "2026-10-08", whoEn: "All Kuwaiti students (from 9:00 am)", whoAr: "جميع الطلبة الكويتيين (من الساعة 9 صباحاً)" },
      { date: "2026-10-12", whoEn: "All categories, including non-Kuwaitis (from 9:00 am)", whoAr: "جميع الفئات بما فيهم غير الكويتيين (من الساعة 9 صباحاً)" }
    ],

    registerUrl: "https://portal.ku.edu.kw/placement",

    eligibilityEn: [
      "Grade 12 students (or equivalent) and secondary-school graduates",
      "Applicants to Kuwait University, Abdullah Al-Salem University, or medicine / engineering scholarships (inside Kuwait and abroad)",
      "International and private-school students are eligible",
      "Current Kuwait University students cannot register (except the French test for a French major)"
    ],
    eligibilityAr: [
      "طلبة الصف الثاني عشر (أو ما يعادله) وخريجو الثانوية العامة",
      "المتقدمون لجامعة الكويت أو جامعة عبد الله السالم أو بعثات الطب والهندسة (الداخلية والخارجية)",
      "يحق لطلبة المدارس الخاصة والأجنبية التسجيل",
      "لا يحق لطلبة جامعة الكويت الحاليين التسجيل (باستثناء اختبار اللغة الفرنسية لتخصص الفرنسية)"
    ],

    stepsEn: [
      "Log in at portal.ku.edu.kw/placement: username = Civil ID number, password = last 5 digits of the Civil ID (new students use \"Create New User\")",
      "Check your phone, email, education system and school",
      "Choose the test(s), the Math test language (Arabic or English) and a test date",
      "Pay 10 KWD per test by K-Net (non-refundable, cannot be cancelled after payment)",
      "Print the admission ticket: it shows the date, time, building and room",
      "On test day bring official photo ID: Civil ID, passport, driving licence or Kuwait Mobile ID"
    ],
    stepsAr: [
      "الدخول إلى portal.ku.edu.kw/placement: اسم المستخدم = الرقم المدني، وكلمة المرور = آخر 5 أرقام من الرقم المدني (الطلبة الجدد عبر \"إنشاء مستخدم جديد\")",
      "التأكد من رقم الهاتف والبريد الإلكتروني والنظام التعليمي والمدرسة",
      "اختيار الاختبار/الاختبارات ولغة اختبار الرياضيات (عربي أو إنجليزي) وموعد الاختبار",
      "دفع 10 دنانير لكل اختبار عن طريق كي-نت (غير مستردة ولا يمكن الإلغاء بعد الدفع)",
      "طباعة بطاقة الدخول: تتضمن التاريخ والوقت والمبنى والقاعة",
      "إحضار إثبات شخصية رسمي بصورة يوم الاختبار: البطاقة المدنية أو الجواز أو رخصة القيادة أو هويتي"
    ],

    notesEn: [
      "Registration for each test date closes about 10 days before it. Late registration is not available.",
      "The test location is assigned on the admission ticket and cannot be changed.",
      "Absence or late arrival cannot be rescheduled."
    ],
    notesAr: [
      "يُغلق التسجيل لكل موعد قبل الاختبار بنحو 10 أيام، ولا يوجد تسجيل متأخر.",
      "يُحدد مكان الاختبار في بطاقة الدخول ولا يمكن تغييره.",
      "لا يمكن تعويض الغياب أو التأخر عن موعد الاختبار."
    ]
  },

  subjectsIntroEn: "Scores count toward the equivalent percentage only for colleges that list them. Chemistry is a placement test for students already admitted.",
  subjectsIntroAr: "تُحتسب الدرجات في المعدل المكافئ للكليات التي تشترطها فقط. اختبار الكيمياء اختبار تحديد مستوى للمقبولين.",

  subjects: [
    { code: "eng", nameEn: "English", nameAr: "اللغة الإنجليزية", requiredForEn: "Medicine, Dentistry, Pharmacy, Public Health, Allied Health, Engineering & Petroleum, Architecture, Life Sciences, Business, Education, Arts (English dept). Pass mark 60%.", requiredForAr: "الطب، طب الأسنان، الصيدلة، الصحة العامة، العلوم الطبية المساعدة، الهندسة والبترول، العمارة، علوم الحياة، العلوم الإدارية، التربية، الآداب (قسم اللغة الإنجليزية). درجة النجاح 60%." },
    { code: "math", nameEn: "Mathematics", nameAr: "الرياضيات", requiredForEn: "Medicine, Dentistry, Pharmacy, Public Health, Allied Health, Engineering & Petroleum, Architecture, Life Sciences, Business, Education (Science). Taken in Arabic or English. Pass mark 50%.", requiredForAr: "الطب، طب الأسنان، الصيدلة، الصحة العامة، العلوم الطبية المساعدة، الهندسة والبترول، العمارة، علوم الحياة، العلوم الإدارية، التربية (علمي). باللغة العربية أو الإنجليزية. درجة النجاح 50%." },
    { code: "arb", nameEn: "Arabic", nameAr: "اللغة العربية", requiredForEn: "Arts, Sharia & Islamic Studies, Social Sciences, Education. Pass mark 50%.", requiredForAr: "الآداب، الشريعة والدراسات الإسلامية، العلوم الاجتماعية، التربية. درجة النجاح 50%." },
    { code: "fr", nameEn: "French", nameAr: "اللغة الفرنسية", requiredForEn: "French department (College of Arts), minimum 50%. Offered twice a year.", requiredForAr: "قسم اللغة الفرنسية (كلية الآداب)، بحد أدنى 50%. يُطرح مرتين في السنة." },
    { code: "chem", nameEn: "Chemistry", nameAr: "الكيمياء", requiredForEn: "Placement only (not in the equivalent %): Allied Health, Engineering & Petroleum, Science, Education (Science).", requiredForAr: "تحديد مستوى فقط (لا يدخل في المعدل المكافئ): العلوم الطبية المساعدة، الهندسة والبترول، العلوم، التربية (علمي)." }
  ],

  facts: [
    { labelEn: "Fee", labelAr: "الرسوم", valueEn: "10 KWD per test (K-Net)", valueAr: "10 د.ك لكل اختبار (كي-نت)" },
    { labelEn: "Score validity", labelAr: "صلاحية الدرجة", valueEn: "2 years from the test date", valueAr: "سنتان من تاريخ الاختبار" },
    { labelEn: "Attempts", labelAr: "عدد المحاولات", valueEn: "Up to 3 per subject per academic year; the highest valid score counts", valueAr: "حتى 3 محاولات لكل مادة في السنة الأكاديمية، وتُحتسب أعلى درجة سارية" }
  ],

  // Official "Required Academic Aptitude Tests for KU Colleges 2026/2027" (weights sum to 1)
  formulaNoteEn: "Weights from Kuwait University's 2026/2027 college requirements. Meeting the minimum does not guarantee admission: seats are filled by rank.",
  formulaNoteAr: "الأوزان من متطلبات كليات جامعة الكويت للعام 2026/2027. تحقيق الحد الأدنى لا يضمن القبول، إذ يتم القبول حسب الترتيب التنافسي.",
  formulas: [
    { collegeEn: "Medicine", collegeAr: "الطب", weights: { hs: 0.75, eng: 0.15, math: 0.10 }, conditionEn: "High school 85% or more", conditionAr: "الثانوية 85% فأكثر" },
    { collegeEn: "Dentistry", collegeAr: "طب الأسنان", weights: { hs: 0.75, eng: 0.15, math: 0.10 }, conditionEn: "High school 85% or more", conditionAr: "الثانوية 85% فأكثر" },
    { collegeEn: "Pharmacy", collegeAr: "الصيدلة", weights: { hs: 0.70, eng: 0.15, math: 0.15 }, conditionEn: "High school 80% or more", conditionAr: "الثانوية 80% فأكثر" },
    { collegeEn: "Public Health", collegeAr: "الصحة العامة", weights: { hs: 0.70, eng: 0.15, math: 0.15 }, conditionEn: "High school 80% or more", conditionAr: "الثانوية 80% فأكثر" },
    { collegeEn: "Allied Health Sciences", collegeAr: "العلوم الطبية المساعدة", weights: { hs: 0.70, eng: 0.20, math: 0.10 }, conditionEn: "High school 80% or more; Chemistry placement test", conditionAr: "الثانوية 80% فأكثر؛ واختبار تحديد مستوى الكيمياء" },
    { collegeEn: "Engineering & Petroleum", collegeAr: "الهندسة والبترول", weights: { hs: 0.65, eng: 0.15, math: 0.20 }, conditionEn: "High school 80% or more; Chemistry placement test", conditionAr: "الثانوية 80% فأكثر؛ واختبار تحديد مستوى الكيمياء" },
    { collegeEn: "Architecture", collegeAr: "العمارة", weights: { hs: 0.70, eng: 0.15, math: 0.15 } },
    { collegeEn: "Life Sciences", collegeAr: "علوم الحياة", weights: { hs: 0.70, eng: 0.15, math: 0.15 }, conditionEn: "Interview after admission", conditionAr: "مقابلة بعد القبول" },
    { collegeEn: "Business Administration", collegeAr: "العلوم الإدارية", weights: { hs: 0.70, eng: 0.15, math: 0.15 }, conditionEn: "English test 40% or more", conditionAr: "اختبار الإنجليزي 40% فأكثر" },
    { collegeEn: "Education (Science)", collegeAr: "التربية (علمي)", weights: { hs: 0.80, eng: 0.075, math: 0.075, arb: 0.05 }, conditionEn: "Chemistry placement test; interview", conditionAr: "اختبار تحديد مستوى الكيمياء؛ ومقابلة" },
    { collegeEn: "Education (Arts)", collegeAr: "التربية (أدبي)", weights: { hs: 0.80, eng: 0.10, arb: 0.10 }, conditionEn: "Interview", conditionAr: "مقابلة" },
    { collegeEn: "Arts", collegeAr: "الآداب", weights: { hs: 0.85, arb: 0.15 }, conditionEn: "French department also needs the French test (50%+)", conditionAr: "قسم الفرنسية يتطلب اختبار الفرنسية (50% فأكثر)" },
    { collegeEn: "Arts - English Department", collegeAr: "الآداب - قسم اللغة الإنجليزية", weights: { hs: 0.85, eng: 0.15 } },
    { collegeEn: "Sharia & Islamic Studies", collegeAr: "الشريعة والدراسات الإسلامية", weights: { hs: 0.85, arb: 0.15 } },
    { collegeEn: "Social Sciences", collegeAr: "العلوم الاجتماعية", weights: { hs: 0.90, arb: 0.10 }, conditionEn: "Interview for the Social Service major", conditionAr: "مقابلة لتخصص الخدمة الاجتماعية" }
  ],

  rulesEn: [
    "College of Science uses English, Math and Chemistry for placement only; no equivalent percentage is calculated.",
    "College of Law does not require an aptitude test.",
    "An IELTS score can replace the English test using KU's conversion table (for example IELTS 6.5 = 81%, 7.0 = 89%, 8.0+ = 100%).",
    "Appeals on a score are accepted for one week after results are published.",
    "Cheating cancels the score."
  ],
  rulesAr: [
    "تستخدم كلية العلوم اختبارات الإنجليزي والرياضيات والكيمياء لتحديد المستوى فقط، ولا يُحتسب لها معدل مكافئ.",
    "لا تشترط كلية الحقوق اختبارات القدرات.",
    "يمكن استبدال اختبار الإنجليزي بدرجة IELTS وفق جدول معادلة الجامعة (مثلاً IELTS 6.5 = 81%، و7.0 = 89%، و8.0 فأكثر = 100%).",
    "تُقبل التظلمات على الدرجة خلال أسبوع من إعلان النتائج.",
    "الغش يؤدي إلى إلغاء الدرجة."
  ],

  nextCycleEn: "The Second Opportunity has not been announced yet. Last year it ran from late January to early April, with registration opening in early January.",
  nextCycleAr: "لم يُعلن بعد عن الفرصة الثانية. في العام الماضي أُقيمت من أواخر يناير حتى أوائل أبريل، وبدأ التسجيل في أوائل يناير.",

  contact: {
    phones: ["24983166", "24985178"],
    email: "cem.meas@ku.edu.kw",
    hoursEn: "Sunday - Thursday, 8:00 am - 1:00 pm",
    hoursAr: "الأحد - الخميس، 8:00 صباحاً - 1:00 ظهراً",
    helpUrl: "https://cemapp.ku.edu.kw/helpme",
    instagram: "https://www.instagram.com/cemvpaa/"
  },

  sources: [
    { label: "Kuwait University news: Qudrat registration dates for grade 12 (Arabic)", url: "https://www.ku.edu.kw/ar/media-center/news/jamt-alkwyt-tln-mwayd-altsjyl-lakhtbar-alqdrat-alakadymyt-ltlbt-alsf-althany-shr", date: "2026-09-29" },
    { label: "Center for Evaluation & Measurement: First Opportunity test dates", url: "https://cem.ku.edu.kw/ar/at", date: "2026-09-29" },
    { label: "Aptitude Tests Student Guide 2026 (PDF)", url: "https://www.ku.edu.kw/sites/default/files/2026-09/2026APTE.pdf", date: "2026-09-01" },
    { label: "Required aptitude tests for KU colleges 2026/2027 (PDF)", url: "https://www.ku.edu.kw/sites/default/files/2026-06/ku_colleges_rules%20%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A.pdf", date: "2026-06-01" },
    { label: "CEM frequently asked questions", url: "https://cem.ku.edu.kw/faqs", date: "2026-04-05" },
    { label: "IELTS to KU English test conversion (PDF)", url: "https://www.ku.edu.kw/sites/default/files/2025-06/english-ielts.pdf", date: "2025-06-01" }
  ]
};

if (typeof window !== 'undefined') {
  window.KUWAIT_QUDRAT = KUWAIT_QUDRAT;
}
