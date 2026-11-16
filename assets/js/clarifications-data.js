/**
 * moustaqbili | مستقبلي
 * Questions page: common misconceptions, answered in plain language.
 *
 * Questions are ones students and parents actually raise (official FAQs of the
 * Ministry, Kuwait University and the Kuwait Cultural Office in London, news
 * reports). Answers come from official sources, checked 2026-10-12. Added 2026-11-10: Kuwait
 * University's Qudrat FAQ and student guide, NBAQ's FAQ, and the Ministry FAQ (scholarships,
 * grants, degree equivalency).
 * Decree 197/2025 (the scholarship regulation) has no official copy online;
 * its text was read from a legal publisher's copy (mesferlaw.com).
 *
 * status: "confirmed" | "unconfirmed" (shows a "Not confirmed" label)
 */

const DECREE_197 = {
  label: "Decree 197/2025 (scholarship regulation, official copy on kcouk.org)",
  url: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
};
const PLAN_PAGE = { label: "Ministry: Plan 2026/2027 conditions", url: "https://www.mohe.edu.kw/site/ar/eServices/ServiceDetails/1?PageID=3" };
const PLAN_GUIDE = { label: "Ministry: Plan 2026/2027 registration guide (PDF, pages 35-39)", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485248.pdf" };
const KU_FAQ = { label: "Kuwait University, Qudrat FAQ", url: "https://cem.ku.edu.kw/faqs" };
const MOHE_FAQ = { label: "Ministry FAQ", url: "https://www.mohe.edu.kw/site/AR/FAQ?PageID=8" };
const KU_GUIDE = { label: "Kuwait University, Qudrat student guide 2026 (PDF)", url: "https://www.ku.edu.kw/sites/default/files/2026-09/2026APTE.pdf" };
const KU_DATES = { label: "Kuwait University, Qudrat dates", url: "https://cem.ku.edu.kw/ar/at" };
const NBAQ_FAQ = { label: "NBAQ FAQ", url: "https://nbaq.edu.kw/website/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7" };
const NBAQ_CONTACT = { label: "NBAQ complaints and suggestions", url: "https://nbaq.edu.kw/website/%d9%84%d9%84%d8%b4%d9%83%d8%a7%d9%88%d9%8a-%d9%88%d8%a7%d9%84%d8%a5%d9%82%d8%aa%d8%b1%d8%a7%d8%ad%d8%a7%d8%aa" };

const CLARIFICATIONS = {
  lastVerified: "2026-11-16",

  topics: [
    { id: "scholarships", labelEn: "Applying", labelAr: "التقديم" },
    { id: "english", labelEn: "English tests", labelAr: "اختبارات اللغة" },
    { id: "qudrat", labelEn: "Qudrat", labelAr: "القدرات" },
    { id: "qudrat-register", labelEn: "Qudrat: registering", labelAr: "القدرات: التسجيل" },
    { id: "qudrat-day", labelEn: "Qudrat: test day", labelAr: "القدرات: يوم الاختبار" },
    { id: "qudrat-results", labelEn: "Qudrat: results", labelAr: "القدرات: النتائج" },
    { id: "merit", labelEn: "Merit programme", labelAr: "برنامج التميز" },
    { id: "allowance", labelEn: "Money", labelAr: "المخصصات" },
    { id: "after-acceptance", labelEn: "After you are accepted", labelAr: "بعد القبول" },
    { id: "guardians", labelEn: "For parents", labelAr: "لأولياء الأمور" },
    { id: "universities", labelEn: "Universities abroad", labelAr: "الجامعات في الخارج" },
    { id: "aviation", labelEn: "Aviation", labelAr: "الطيران" },
    { id: "living", labelEn: "Living abroad", labelAr: "الحياة في الخارج" },
    { id: "grants", labelEn: "Grants", labelAr: "المنح الدراسية" },
    { id: "equivalency", labelEn: "Certificates", labelAr: "الشهادات" }
  ],

  items: [
    {
      id: "american-diploma", topic: "equivalency",
      questionEn: "Can I apply with an American high school diploma?",
      questionAr: "هل يمكنني التقديم بشهادة الثانوية الأمريكية؟",
      answerEn: "Yes, with an equivalency letter from the Ministry of Education's Private Education Department.",
      answerAr: "نعم، مع إفادة معادلة من إدارة التعليم الخاص بوزارة التربية.",
      detailsEn: "You count as science stream if you passed Biology, Chemistry, Physics, Algebra 2 and Calculus or Pre-calculus over two regular semesters (not an intensive course). To study in the UAE, US and Canadian school graduates also need a UAE equivalency and the SAT.",
      detailsAr: "تُصنَّف من القسم العلمي إذا اجتزت الأحياء والكيمياء والفيزياء والجبر 2 والتفاضل والتكامل أو التمهيدي له خلال فصلين دراسيين اعتياديين (وليس فصلاً مكثفاً). وللدراسة في الإمارات يحتاج خريجو الثانوية الأمريكية والكندية أيضاً إلى معادلة إماراتية واختبار SAT.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "british-ib-certificate", topic: "equivalency",
      questionEn: "Can I apply with a British (IGCSE, A-Level) or IB certificate?",
      questionAr: "هل يمكنني التقديم بالشهادة البريطانية (IGCSE وA-Level) أو البكالوريا الدولية؟",
      answerEn: "Yes, with an equivalency letter from the Ministry of Education's Private Education Department, if you meet the subject rules.",
      answerAr: "نعم، مع إفادة معادلة من إدارة التعليم الخاص بوزارة التربية، إذا استوفيت شروط المواد.",
      detailsEn: "British: at least 8 subjects, two or more at AS or A-Level, passed within 36 months; the science stream needs Math, Physics, Chemistry and Biology. IB: the full diploma with at least 6 subjects, 3 at Higher Level, including Math and English, plus TOK and the Extended Essay.",
      detailsAr: "البريطانية: 8 مواد على الأقل، منها مادتان أو أكثر بمستوى AS أو A-Level، خلال 36 شهراً، ويُشترط للقسم العلمي الرياضيات والفيزياء والكيمياء والأحياء. البكالوريا الدولية: الشهادة النهائية بست مواد على الأقل، منها ثلاث بالمستوى العالي، وتشمل الرياضيات والإنجليزي، مع نظرية المعرفة والمقالة الموسعة.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "gpa-convert", topic: "scholarships",
      questionEn: "How do I convert my American GPA to a percentage?",
      questionAr: "كيف أحوّل معدلي الأمريكي (GPA) إلى نسبة مئوية؟",
      answerEn: "Use the GPA converter on the home page: open \"Prefer filters?\" under the search bar.",
      answerAr: "استخدم أداة تحويل المعدل في الصفحة الرئيسية: افتح \"تفضّل الفلاتر؟\" تحت شريط البحث.",
      detailsEn: "Then use that % in \"Check my score\" to compare it with each major's minimum.",
      detailsAr: "ثم استخدم النسبة في صفحة \"تحقق من نسبتي\" لمقارنتها بالحد الأدنى لكل تخصص.",
      status: "confirmed", sourceLabel: "Moustaqbili: GPA converter", sourceUrl: "index.html#home-filters"
    },
    {
      id: "ministry-contact", topic: "scholarships",
      questionEn: "How do I contact the Ministry of Higher Education?",
      questionAr: "كيف أتواصل مع وزارة التعليم العالي؟",
      answerEn: "The Ministry does not publish a public phone number {{unconfirmed}}; book an appointment (also in the Sahel app) or use its video-call service.",
      answerAr: "لا تنشر الوزارة رقم هاتف عاماً {{unconfirmed}}، فاحجز موعداً (متاح أيضاً في تطبيق سهل) أو استخدم خدمة الاتصال المرئي.",
      detailsEn: "Video calls through the Skiplino app run Sunday to Thursday, 8:30 am to 12:30 pm. Each department's email is on the Contact page.",
      detailsAr: "خدمة الاتصال المرئي عبر تطبيق Skiplino من الأحد إلى الخميس، من 8:30 صباحاً حتى 12:30 ظهراً، وبريد كل إدارة في صفحة التواصل.",
      status: "confirmed", sourceLabel: "Ministry website", sourceUrl: "https://www.mohe.edu.kw/site/"
    },
    // ---------------- Applying ----------------
    {
      id: "apply-when", topic: "scholarships",
      questionEn: "When can I apply for the scholarship?",
      questionAr: "متى يمكنني التقديم على البعثة؟",
      answerEn: "Registration for 2026/2027 ran 14 June to 7 July 2026 and is closed. Merit applications are open until 24 February 2027.",
      answerAr: "سجّل الطلبة في خطة 2026/2027 من 14 يونيو إلى 7 يوليو 2026 وقد أُغلق التسجيل. والتقديم على برنامج التميز مفتوح حتى 24 فبراير 2027.",
      detailsEn: "Registration opens after the school year ends, for graduates of public and private schools. The Ministry has not announced the 2027/2028 dates yet.",
      detailsAr: "يبدأ التسجيل بعد انتهاء العام الدراسي لخريجي التعليم العام والخاص، ولم تعلن الوزارة مواعيد 2027/2028 بعد.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "apply-how", topic: "scholarships",
      questionEn: "How do I apply for the scholarship?",
      questionAr: "كيف أقدّم على البعثة؟",
      answerEn: "Online, on the Ministry's registration system: log in with your Civil ID and confirm with the Hawiyati (Kuwait Mobile ID) app.",
      answerAr: "إلكترونياً عبر نظام التسجيل في موقع الوزارة: ادخل بالرقم المدني وصادق عبر تطبيق هويتي.",
      detailsEn: "Enter your details, your choices and your documents, then send the application after confirming in Hawiyati. Applications with missing information or documents are excluded.",
      detailsAr: "أدخل بياناتك ورغباتك ومستنداتك، ثم أرسل الطلب بعد المصادقة عبر هويتي. وتُستبعد الطلبات الناقصة البيانات أو المستندات.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "apply-documents", topic: "scholarships",
      questionEn: "What documents do I need to apply for the scholarship?",
      questionAr: "ما المستندات المطلوبة للتقديم على البعثة؟",
      answerEn: "Your final high school transcript, your IELTS or TOEFL result, and copies of your Civil ID, your guardian's Civil ID and your passport.",
      answerAr: "كشف درجات الثانوية النهائي المعتمد، ونتيجة الآيلتس أو التوفل، ونسخة من بطاقتك المدنية والبطاقة المدنية لولي الأمر وجواز سفرك.",
      detailsEn: "Graduates of foreign (international) schools also need an equivalency letter from the Ministry of Education's Private Education Department. Saudi high school graduates add their Qudrat and Tahsili certificates.",
      detailsAr: "ويحتاج خريجو المدارس الأجنبية إلى إفادة معادلة من إدارة التعليم الخاص بوزارة التربية، ويضيف حملة الثانوية السعودية شهادتي القدرات والتحصيلي.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "apply-who", topic: "scholarships",
      questionEn: "Who can apply for a scholarship abroad?",
      questionAr: "من يحق له التقديم على البعثة الخارجية؟",
      answerEn: "Kuwaiti citizens aged 16 to 23, with a high school certificate from 2024/2025 or 2025/2026 and IELTS 5.5 or TOEFL 47 taken in Kuwait.",
      answerAr: "الكويتيون من عمر 16 إلى 23 سنة، الحاصلون على الثانوية في 2024/2025 أو 2025/2026، مع آيلتس 5.5 أو توفل 47 من مركز داخل الكويت.",
      detailsEn: "You must not already have a bachelor's degree, must not have had a scholarship that ended in dismissal or withdrawal after starting, cannot hold a scholarship and a grant at the same time, and must not work for a government body.",
      detailsAr: "ويُشترط ألا تكون حاصلاً على البكالوريوس، وألا تكون قد حصلت على بعثة انتهت بالفصل أو الانسحاب بعد الالتحاق، وألا تجمع بين بعثة ومنحة، وألا تكون موظفاً في جهة حكومية.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "apply-arts-stream", topic: "scholarships",
      questionEn: "Can arts-stream students get a scholarship abroad?",
      questionAr: "هل يحق لطلبة القسم الأدبي الحصول على بعثة خارجية؟",
      answerEn: "Yes, but only in majors open to both streams; most majors in the 2026/2027 plan are for the science stream.",
      answerAr: "نعم، لكن في التخصصات المتاحة للقسمين فقط، ومعظم تخصصات خطة 2026/2027 للقسم العلمي.",
      detailsEn: "Use \"Check my score\" and choose the arts stream to see which majors accept you.",
      detailsAr: "استخدم صفحة \"تحقق من نسبتي\" واختر القسم الأدبي لترى التخصصات المتاحة لك.",
      status: "confirmed", sourceLabel: "Ministry: majors and minimum percentages 2026/2027 (PDF)", sourceUrl: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485330.pdf"
    },
    {
      id: "apply-results", topic: "scholarships",
      questionEn: "When are scholarship results announced?",
      questionAr: "متى تُعلن نتائج البعثات؟",
      answerEn: "After registration closes. For 2026/2027 the Ministry announced the results on 11 July 2026 and accepted 2,704 students.",
      answerAr: "بعد إغلاق التسجيل. ففي خطة 2026/2027 أعلنت الوزارة النتائج في 11 يوليو 2026 وقُبل 2,704 طلاب وطالبات.",
      detailsEn: "Students list up to 8 choices. Medicine and engineering are ranked by the equivalent average, and other majors by the high school %. After acceptance, the guardian approves the pledge and medical form in the Sahel app.",
      detailsAr: "يختار الطالب حتى 8 رغبات، ويُرتب المتقدمون للطب والهندسة حسب المعدل المكافئ، وبقية التخصصات حسب نسبة الثانوية. وبعد القبول يصادق ولي الأمر على التعهد ونموذج الفحص الطبي عبر تطبيق سهل.",
      status: "confirmed", sourceLabel: "Al-Jarida, 11 July 2026 (Ministry results announcement)", sourceUrl: "https://www.aljarida.com/article/137333"
    },
    {
      id: "apply-choices", topic: "scholarships",
      questionEn: "How many choices can I list, and can I choose my university?",
      questionAr: "كم رغبة يمكنني اختيارها؟ وهل أختار جامعتي؟",
      answerEn: "You list up to 8 choices of major and country. You then apply to universities yourself; the Ministry only pays for universities and programmes NBAQ recommends.",
      answerAr: "تختار حتى 8 رغبات من التخصص والدولة، ثم تقدّم بنفسك على الجامعات، ولا تتكفل الوزارة إلا بالجامعات والبرامج الموصى بها من الجهاز الوطني للاعتماد.",
      detailsEn: "Your admission is then certified through the Kuwait cultural office for the country you study in.",
      detailsAr: "ثم يُصدّق قبولك عن طريق المكتب الثقافي في بلد الدراسة.",
      status: "confirmed", sourceLabel: "Al-Jarida, 11 July 2026 (Ministry results announcement)", sourceUrl: "https://www.aljarida.com/article/137333"
    },
    {
      id: "merit-what", topic: "scholarships",
      questionEn: "What is the merit programme?",
      questionAr: "ما هو برنامج البعثات المتميزة؟",
      answerEn: "A scholarship for students accepted at a university on the merit list, with 50% more monthly allowance after the preparatory stage.",
      answerAr: "بعثة للطلبة المقبولين في جامعة من قائمة التميز، مع زيادة 50% في المخصص الشهري بعد المرحلة التمهيدية.",
      detailsEn: "You need 95% for medicine, dentistry and pharmacy; for other majors the Ministry's merit guide says 90% {{unconfirmed}}. Applications for 2026/2027 are open until 24 February 2027. The merit lists are on NBAQ's website.",
      detailsAr: "تحتاج إلى 95% للطب وطب الأسنان والصيدلة، ولبقية التخصصات يذكر دليل التميز 90% {{unconfirmed}}. والتقديم لعام 2026/2027 مفتوح حتى 24 فبراير 2027، وقوائم التميز في موقع الجهاز الوطني للاعتماد.",
      status: "confirmed", sourceLabel: "Ministry: merit programme 2026/2027", sourceUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/6?PageID=3"
    },
    {
      id: "tuition-paid", topic: "scholarships",
      questionEn: "Does the scholarship pay my tuition fees?",
      questionAr: "هل تدفع البعثة رسومي الدراسية؟",
      answerEn: "Yes. The Ministry pays your tuition directly to the university, and you also get a monthly allowance to live on.",
      answerAr: "نعم. تدفع الوزارة رسومك الدراسية للجامعة مباشرة، وتحصل أيضاً على مخصص شهري للمعيشة.",
      detailsEn: "On top of the monthly allowance there are yearly amounts for books, equipment, clothing and clinical training, which depend on the country and major.",
      detailsAr: "وفوق المخصص الشهري تُصرف مبالغ سنوية للكتب والأدوات والملابس والتدريب السريري، وتختلف حسب الدولة والتخصص.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "housing-paid", topic: "scholarships",
      questionEn: "Does the Ministry pay for my housing?",
      questionAr: "هل تدفع الوزارة إيجار سكني؟",
      answerEn: "There is no separate housing payment: the Ministry's allowance table has no housing item, so rent comes from your monthly allowance.",
      answerAr: "لا يوجد بدل سكن مستقل في جدول مخصصات الوزارة، فيُدفع الإيجار من المخصص الشهري.",
      detailsEn: "The table lists the monthly allowance, a pre-travel allowance, and yearly amounts for books, equipment, clothing and clinical training.",
      detailsAr: "يتضمن الجدول المخصص الشهري ومخصصات ما قبل السفر ومبالغ سنوية للكتب والأدوات والملابس والتدريب السريري.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "qudrat-what", topic: "scholarships",
      questionEn: "What is Qudrat?",
      questionAr: "ما هي اختبارات القدرات؟",
      answerEn: "Kuwait University's academic aptitude tests in Math, English and Arabic, also called the Unified National Test.",
      answerAr: "اختبارات القدرات الأكاديمية في جامعة الكويت في الرياضيات والإنجليزي والعربي، وتُسمى أيضاً الاختبار الوطني الموحد.",
      detailsEn: "You need them for most Kuwait University colleges, for Abdullah Al-Salem University, and for medicine, dentistry, veterinary medicine, pharmacy and engineering scholarships.",
      detailsAr: "وتحتاجها لمعظم كليات جامعة الكويت، ولجامعة عبدالله السالم، وللبعثات في الطب وطب الأسنان والطب البيطري والصيدلة والهندسة.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-good-score", topic: "scholarships",
      questionEn: "What is a good Qudrat score?",
      questionAr: "ما الدرجة الجيدة في القدرات؟",
      answerEn: "The passing score is 60% in English and 50% in Math and Arabic, but colleges compare your equivalent average, so a higher score helps.",
      answerAr: "درجة النجاح 60% في الإنجليزي و50% في الرياضيات والعربي، لكن الكليات تقارن معدلك المكافئ، فكلما ارتفعت درجتك كان أفضل.",
      detailsEn: "Use \"Check my score\" to see your equivalent average next to last year's lowest admitted for each Kuwait University college.",
      detailsAr: "استخدم صفحة \"تحقق من نسبتي\" لترى معدلك المكافئ مقارنة بأدنى معدل مقبول في كل كلية بجامعة الكويت العام الماضي.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "not-accepted", topic: "scholarships",
      questionEn: "What can I do if I am not accepted for a scholarship?",
      questionAr: "ماذا أفعل إذا لم أُقبل في البعثة؟",
      answerEn: "You can still apply to the merit programme (until 24 February 2027) or study in Kuwait: Kuwait University, AASU or a PUC internal scholarship.",
      answerAr: "يمكنك التقديم على برنامج التميز (حتى 24 فبراير 2027) أو الدراسة في الكويت: جامعة الكويت أو جامعة عبدالله السالم أو بعثة داخلية من مجلس الجامعات الخاصة.",
      detailsEn: "In 2025 the Ministry also opened an appeals window by email after the results {{unconfirmed}}.",
      detailsAr: "وفي 2025 فتحت الوزارة باب التظلم عبر البريد الإلكتروني بعد النتائج {{unconfirmed}}.",
      status: "confirmed", sourceLabel: "Al-Jarida: appeals for the 2025-2026 plan", sourceUrl: "https://www.aljarida.com/article/102705"
    },
    {
      id: "register-early-no-advantage", topic: "scholarships",
      questionEn: "If I register on the first day, do I have a better chance?",
      questionAr: "إذا سجلت في أول يوم، هل تزيد فرصتي؟",
      answerEn: "No. Places do not depend on who registers first. They depend on meeting the conditions, entering correct information and uploading all documents. For medicine and engineering, students are ranked by their equivalent average (school grade plus Qudrat). For other majors, they are ranked by their school percentage.",
      answerAr: "لا. المقاعد لا تعتمد على أسبقية التسجيل، بل على استيفاء الشروط وصحة البيانات واكتمال المستندات. ويُرتب المتقدمون للطب والهندسة حسب المعدل المكافئ (نسبة الثانوية مع القدرات)، وبقية التخصصات حسب نسبة الثانوية.",
      status: "confirmed",
      sourceLabel: "Ministry official quoted in Al-Jarida, 14 June 2026", sourceUrl: "https://www.aljarida.com/article/134518"
    },
    {
      id: "old-certificate-age", topic: "scholarships",
      questionEn: "I finished school in 2023/2024. Can I still apply for 2026/2027?",
      questionAr: "تخرجت في 2023/2024، هل يمكنني التقديم على خطة 2026/2027؟",
      answerEn: "No. The 2026/2027 plan only accepts certificates from 2024/2025 or 2025/2026, because a certificate is valid for two school years. You must also be between 16 and 23 years old.",
      answerAr: "لا. تقبل خطة 2026/2027 شهادات 2024/2025 أو 2025/2026 فقط، لأن صلاحية الشهادة عامان دراسيان. ويجب أن يكون عمرك بين 16 و23 سنة.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "government-job", topic: "scholarships",
      questionEn: "Can I keep my government job and still get a scholarship?",
      questionAr: "هل يمكنني الاحتفاظ بوظيفتي الحكومية والحصول على بعثة؟",
      answerEn: "No. You cannot apply if you work for a government body. While you study, you must study full-time, though the Ministry may allow training linked to your major {{unconfirmed}}.",
      answerAr: "لا. لا يحق التقديم لمن يعمل في جهة حكومية، ويجب التفرغ الكامل للدراسة، وقد تسمح الوزارة بتدريب مرتبط بالتخصص {{unconfirmed}}.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "withdraw-reapply", topic: "scholarships",
      questionEn: "If I withdraw from the scholarship, can I apply again next year?",
      questionAr: "إذا انسحبت من البعثة، هل يمكنني التقديم في السنة القادمة؟",
      answerEn: "It depends on when. Before you travel: yes, if you still meet the age and certificate rules, but you cannot undo the withdrawal. After you have started studying abroad: no. A scholarship that ended by withdrawal or dismissal stops you from getting a new one.",
      answerAr: "يعتمد على التوقيت. قبل السفر: نعم، إذا كنت ما زلت تستوفي شروط العمر والشهادة، لكن لا يمكنك التراجع عن الانسحاب. بعد بدء الدراسة في الخارج: لا، فالبعثة المنتهية بالانسحاب أو الفصل تمنع الحصول على بعثة جديدة.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },

    {
      id: "how-register-scholarship", topic: "scholarships",
      questionEn: "How do I register for the Ministry's scholarship plan, and where are the majors and percentages?",
      questionAr: "كيف أسجل في خطة بعثات الوزارة؟ وأين أجد التخصصات والنسب؟",
      answerEn: "When the plan is announced: go to mohe.edu.kw, choose E-services, then scholarship registration, then the plan you want. The majors, minimum percentages and conditions are in the same E-services section. You can also check them on this site's search.",
      answerAr: "عند إعلان الخطة: ادخل إلى mohe.edu.kw واختر الخدمات الإلكترونية ثم التسجيل في البعثات ثم الخطة المطلوبة. وتجد التخصصات ونسب القبول والشروط في خانة الخدمات الإلكترونية نفسها، ويمكنك أيضاً البحث عنها في هذا الموقع.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "certify-university-admission", topic: "scholarships",
      questionEn: "How do I get my university admission certified?",
      questionAr: "كيف أصدّق قبولي الجامعي؟",
      answerEn: "Open an account on the website of the Kuwait cultural office for the country you will study in, and upload all the required documents there.",
      answerAr: "افتح حساباً في الموقع الإلكتروني للمكتب الثقافي التابع لبلد الدراسة، وأرفق جميع المستندات المطلوبة.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "self-funded-join", topic: "scholarships",
      questionEn: "I study abroad at my own expense. Can I join the Ministry scholarship?",
      questionAr: "أدرس على نفقتي الخاصة، هل يمكنني الضم لبعثة الوزارة؟",
      answerEn: "Possibly. The Ministry's FAQ says the conditions for joining (for self-funded students and applied-college diploma holders) are in Article 10 of the scholarship regulation, under Ministerial decisions on mohe.edu.kw.",
      answerAr: "ربما. تذكر الأسئلة الشائعة للوزارة أن شروط الضم للطلبة الدارسين على نفقتهم الخاصة وحملة دبلوم الكليات التطبيقية موجودة في المادة (10) من لائحة البعثات، في خانة القرارات الوزارية بموقع الوزارة.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },

    // ---------------- English tests ----------------
    {
      id: "ielts-before-registration", topic: "english",
      questionEn: "Can I register for the scholarship now and take IELTS later?",
      questionAr: "هل يمكنني التسجيل في البعثة الآن وأداء اختبار IELTS لاحقاً؟",
      answerEn: "No. You need the result when you register: IELTS Academic (not General) with 5.5 overall and 5.5 in every part, or TOEFL 47. You upload the original result. After you are accepted, you have one calendar year to reach the score your university asks for.",
      answerAr: "لا. تحتاج النتيجة وقت التسجيل: IELTS أكاديمي (وليس العام) بدرجة 5.5 كمعدل وفي كل قسم، أو TOEFL بدرجة 47، وترفع النتيجة الأصلية. وبعد القبول لديك سنة ميلادية لتحقيق الدرجة التي تطلبها جامعتك.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "ielts-taken-abroad", topic: "english",
      questionEn: "I took IELTS outside Kuwait. Will the Ministry accept it?",
      questionAr: "أديت اختبار IELTS خارج الكويت، هل تقبله الوزارة؟",
      answerEn: "Usually no. The test must be taken at an approved centre inside Kuwait. The only exception: a student who finished high school in that same country, and took the test at a centre approved by the Kuwaiti cultural office or embassy there.",
      answerAr: "غالباً لا. يجب أداء الاختبار في مركز معتمد داخل الكويت. والاستثناء الوحيد: الطالب الذي أنهى الثانوية في الدولة نفسها وأدى الاختبار في مركز معتمد لدى المكتب الثقافي أو السفارة الكويتية هناك.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "ukvi-for-uk", topic: "english",
      questionEn: "Is the normal IELTS enough to study in the UK?",
      questionAr: "هل يكفي اختبار IELTS العادي للدراسة في بريطانيا؟",
      answerEn: "No. For the UK, the Ministry asks for IELTS Academic for UKVI. It is the version the UK government accepts for student visas. Your university decides the score.",
      answerAr: "لا. تطلب الوزارة للدراسة في بريطانيا اختبار IELTS الأكاديمي بنسخة UKVI، وهي النسخة التي تعتمدها الحكومة البريطانية للتأشيرة، وتحدد جامعتك الدرجة المطلوبة.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },

    // ---------------- Qudrat ----------------
    {
      id: "qudrat-not-all-scholarships", topic: "qudrat",
      questionEn: "Do I need Qudrat for every scholarship abroad?",
      questionAr: "هل اختبارات القدرات مطلوبة لكل البعثات الخارجية؟",
      answerEn: "No. You only need it for medicine, dentistry, veterinary medicine, pharmacy or engineering. For these majors, your IELTS or TOEFL score is converted and counts as the English part of your equivalent average.",
      answerAr: "لا. تحتاجها فقط للطب البشري وطب الأسنان والطب البيطري والصيدلة والهندسة. ولهذه التخصصات تُحوَّل درجة IELTS أو TOEFL لتُحتسب بدلاً من اختبار اللغة الإنجليزية في المعدل المكافئ.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "ku-without-qudrat", topic: "qudrat",
      questionEn: "Can I get into Kuwait University without Qudrat?",
      questionAr: "هل يمكنني دخول جامعة الكويت دون اختبارات القدرات؟",
      answerEn: "Only the College of Science or the College of Law, if your school grade is high enough. Every other college, including arts majors, needs Qudrat.",
      answerAr: "فقط في كلية العلوم أو كلية الحقوق إذا كانت نسبتك كافية. وجميع الكليات الأخرى، حتى التخصصات الأدبية، تشترط القدرات.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-retake-validity", topic: "qudrat",
      questionEn: "If I do badly in Qudrat, have I lost my chance?",
      questionAr: "إذا لم أوفق في اختبار القدرات، هل ضاعت فرصتي؟",
      answerEn: "No. You can take each test up to 3 times in one academic year. Your highest score counts, and a score stays valid for 2 years from the test date.",
      answerAr: "لا. يمكنك أداء كل اختبار حتى 3 مرات في السنة الدراسية، وتُحتسب أعلى درجة، وتبقى الدرجة صالحة سنتين من تاريخ الاختبار.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },

    {
      id: "qudrat-same-as-national-test", topic: "qudrat",
      questionEn: "Is the Unified National Test the same as Qudrat?",
      questionAr: "هل الاختبار الوطني الموحد هو نفسه اختبار القدرات؟",
      answerEn: "Yes. The Unified National Test is the Academic Aptitude Test (Qudrat).",
      answerAr: "نعم. الاختبار الوطني الموحد هو اختبار القدرات الأكاديمية.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-who-can-take", topic: "qudrat",
      questionEn: "Who can take Qudrat? Can international-school students take it?",
      questionAr: "من يحق له دخول اختبار القدرات؟ وهل يحق لطلبة المدارس الأجنبية؟",
      answerEn: "Grade 12 students (or the equivalent) and high school graduates who want Kuwait University, Abdullah Al Salem University, or a medicine or engineering scholarship (inside or outside Kuwait). International-school students can take it too. Students already enrolled at Kuwait University cannot, except the French test for those who want to major in French.",
      answerAr: "طلبة الصف الثاني عشر أو ما يعادله وخريجو الثانوية الراغبون في جامعة الكويت أو جامعة عبدالله السالم أو التخصصات الطبية والهندسية في البعثات الداخلية والخارجية. ويحق لطلبة المدارس الأجنبية التقديم. ولا يحق للطالب المقيد في جامعة الكويت التسجيل، إلا في اختبار اللغة الفرنسية لمن يرغب في التخصص فيها.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-pass-mark", topic: "qudrat",
      questionEn: "What is the passing score in Qudrat?",
      questionAr: "ما هي نسبة النجاح في اختبارات القدرات؟",
      answerEn: "60% in the English test. 50% in the Math, Arabic, French and Chemistry tests.",
      answerAr: "60% في اختبار اللغة الإنجليزية، و50% في اختبارات الرياضيات واللغة العربية واللغة الفرنسية والكيمياء.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-subjects", topic: "qudrat",
      questionEn: "Which Qudrat tests can I register for?",
      questionAr: "ما هي اختبارات القدرات المتاحة للتسجيل؟",
      answerEn: "Math, English and Arabic. French is offered twice a year. Chemistry is only a placement test for students already admitted to Kuwait University programmes that need it.",
      answerAr: "الرياضيات واللغة الإنجليزية واللغة العربية، واللغة الفرنسية مرتين في السنة. أما الكيمياء فهي اختبار تحديد مستوى فقط للطلبة المقبولين في جامعة الكويت في تخصصات تتطلبه.",
      status: "confirmed", sourceLabel: KU_GUIDE.label, sourceUrl: KU_GUIDE.url
    },
    {
      id: "qudrat-equivalent-average", topic: "qudrat",
      questionEn: "What is the equivalent average, and how is it calculated?",
      questionAr: "ما هو المعدل المكافئ وكيف يُحسب؟",
      answerEn: "It is your high school percentage combined with your Qudrat scores. Each college uses its own weights. Example from Kuwait University's guide, College of Medicine: 75% of the school grade + 15% of English + 10% of Math. A student with 98% at school, 90% in English and 80% in Math gets 73.5 + 13.5 + 8 = 95%.",
      answerAr: "هو نسبة الثانوية مضافاً إليها نتائج اختبارات القدرات، ولكل كلية أوزانها. مثال من دليل جامعة الكويت لكلية الطب: 75% من نسبة الثانوية + 15% من اختبار الإنجليزي + 10% من اختبار الرياضيات. طالب نسبته 98% وحصل على 90% في الإنجليزي و80% في الرياضيات: 73.5 + 13.5 + 8 = 95%.",
      status: "confirmed", sourceLabel: KU_GUIDE.label, sourceUrl: KU_GUIDE.url
    },
    {
      id: "qudrat-samples", topic: "qudrat",
      questionEn: "Are there sample tests or past papers for Qudrat?",
      questionAr: "هل توجد نماذج لاختبارات القدرات السابقة؟",
      answerEn: "Yes. Kuwait University posts the topics and sample tests for Math, English and Arabic in the \"Test Samples\" section of its Evaluation and Measurement website (cem.ku.edu.kw).",
      answerAr: "نعم. تنشر جامعة الكويت موضوعات الاختبارات ونماذج سابقة للرياضيات والإنجليزي والعربي في قسم \"نماذج اختبارات\" بموقع مكتب التقييم والقياس (cem.ku.edu.kw).",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-courses", topic: "qudrat",
      questionEn: "Does Kuwait University run Qudrat prep courses?",
      questionAr: "هل تقدم جامعة الكويت دورات لاختبارات القدرات؟",
      answerEn: "The Qudrat testing office itself does not run training courses. Kuwait University does announce separate paid prep rounds from time to time; the latest are on the Qudrat page.",
      answerAr: "مكتب التقييم والقياس نفسه لا يقدم دورات للاختبارات، لكن جامعة الكويت تعلن أحياناً عن دورات تقوية منفصلة برسوم، وتجد آخرها في صفحة القدرات.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-how-register", topic: "qudrat-register",
      questionEn: "How do I register for Qudrat?",
      questionAr: "كيف أسجل في اختبار القدرات؟",
      answerEn: "On Kuwait University's Qudrat portal: log in with your full Civil ID number as the username and its last 5 digits as the password. Check your details (phone, email, school), choose your tests, the Math test language and a date with free seats, accept the rules, then pay by K-Net. After \"Payment Successful\", print your admission ticket. If you see \"No Compatible Tests\", try another date.",
      answerAr: "عبر بوابة القدرات في جامعة الكويت: ادخل بالرقم المدني كاملاً كاسم مستخدم وآخر 5 أرقام منه ككلمة سر، وتأكد من بياناتك (الهاتف والبريد والمدرسة)، ثم اختر الاختبارات ولغة اختبار الرياضيات وتاريخاً فيه مقاعد، ووافق على الضوابط وادفع عبر كي-نت. بعد ظهور \"تمت عملية الدفع\" اطبع بطاقة الدخول. وإذا ظهرت \"لا توجد اختبارات متوافقة\" جرّب تاريخاً آخر.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-fee-refund", topic: "qudrat-register",
      questionEn: "How much is Qudrat, and can I cancel and get a refund?",
      questionAr: "كم رسوم القدرات؟ وهل يمكنني الإلغاء واسترجاع المبلغ؟",
      answerEn: "10 KWD per test, paid by K-Net only. Once you have paid, you cannot cancel and the fee is not refunded.",
      answerAr: "10 د.ك لكل اختبار، تُدفع عبر كي-نت فقط. وبعد الدفع لا يمكن إلغاء التسجيل ولا تُسترجع الرسوم.",
      status: "confirmed", sourceLabel: KU_GUIDE.label, sourceUrl: KU_GUIDE.url
    },
    {
      id: "qudrat-registration-complete", topic: "qudrat-register",
      questionEn: "How do I know my Qudrat registration is complete?",
      questionAr: "كيف أعرف أن تسجيلي في القدرات اكتمل؟",
      answerEn: "When the \"Payment Successful\" page appears. Click \"Continue Registration\" to see your admission ticket, or log in again later to print it.",
      answerAr: "عند ظهور صفحة \"تمت عملية الدفع\". اضغط \"استكمال عملية التسجيل\" لتظهر بطاقة الدخول، أو ادخل لاحقاً لطباعتها.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-change-language", topic: "qudrat-register",
      questionEn: "How do I change the language of my Math test?",
      questionAr: "كيف أغيّر لغة اختبار الرياضيات؟",
      answerEn: "During the registration period: log in to your account, click \"Edit\", then \"Change Test Language\". Registration for each test closes 10 days before it, so that is your last day to change it.",
      answerAr: "خلال فترة التسجيل: ادخل إلى حسابك واضغط \"تعديل\" ثم \"تغيير لغة الاختبار\". ويُغلق التسجيل لكل اختبار قبل موعده بعشرة أيام، وهذا آخر يوم للتغيير.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-change-details", topic: "qudrat-register",
      questionEn: "What is the last day to change my Qudrat test details?",
      questionAr: "ما هو آخر يوم لتعديل بيانات اختبار القدرات؟",
      answerEn: "The day registration closes for your test: 10 days before the test date. Until then you can change the Math test language yourself (\"Edit\"). You cannot choose or change the test location. For wrong personal details, email cem.meas@ku.edu.kw or use the \"Help Me\" service. Kuwait University does not say whether you can move to another date after paying {{unconfirmed}}.",
      answerAr: "يوم إغلاق التسجيل لاختبارك، أي قبل موعد الاختبار بعشرة أيام. وحتى ذلك اليوم يمكنك تغيير لغة اختبار الرياضيات بنفسك (\"تعديل\"). ولا يمكن اختيار مقر الاختبار أو تغييره. ولتصحيح البيانات الشخصية راسل cem.meas@ku.edu.kw أو استخدم \"خدمة ساعدني\". ولم توضح الجامعة إمكانية نقل الاختبار إلى تاريخ آخر بعد الدفع {{unconfirmed}}.",
      status: "confirmed", sourceLabel: KU_DATES.label, sourceUrl: KU_DATES.url
    },
    {
      id: "qudrat-wrong-info", topic: "qudrat-register",
      questionEn: "I entered wrong information when I registered for Qudrat. What do I do?",
      questionAr: "أدخلت بيانات خاطئة عند التسجيل في القدرات، ماذا أفعل؟",
      answerEn: "Email the Evaluation and Measurement office at cem.meas@ku.edu.kw, or use the \"Help Me\" service on its website.",
      answerAr: "راسل مكتب التقييم والقياس على cem.meas@ku.edu.kw أو استخدم \"خدمة ساعدني\" في موقعه.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-forgot-password", topic: "qudrat-register",
      questionEn: "I forgot my Qudrat portal password. How do I get back in?",
      questionAr: "نسيت كلمة السر لبوابة القدرات، كيف أدخل؟",
      answerEn: "Click \"Forgot Password\", enter your Civil ID number and email, then click Reset to get a new password. To update your account details, click \"Create New User\" on the registration page and edit your information.",
      answerAr: "اضغط \"نسيان كلمة السر\" وأدخل الرقم المدني والبريد الإلكتروني ثم اضغط استرجاع كلمة السر. ولتحديث بياناتك اضغط أيقونة \"إنشاء مستخدم جديد\" في صفحة التسجيل وعدّل بياناتك.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-dates-where", topic: "qudrat-register",
      questionEn: "Where are Qudrat dates announced?",
      questionAr: "أين يتم الإعلان عن مواعيد القدرات؟",
      answerEn: "On the Evaluation and Measurement office's Instagram (@cemvpaa) and its dates page. Registration for each test closes 10 days before it. The next dates are on the Qudrat page.",
      answerAr: "عبر حساب انستقرام مكتب التقييم والقياس (@cemvpaa) وصفحة المواعيد في موقعه. ويُغلق التسجيل لكل اختبار قبل موعده بعشرة أيام. وتجد المواعيد القادمة في صفحة القدرات.",
      status: "confirmed", sourceLabel: KU_DATES.label, sourceUrl: KU_DATES.url
    },
    {
      id: "qudrat-location", topic: "qudrat-register",
      questionEn: "Where is my Qudrat test, and can I choose the place?",
      questionAr: "أين مقر اختبار القدرات؟ وهل يمكنني اختياره؟",
      answerEn: "Your admission ticket shows the date, time, building and room, with a map link to the building. You cannot choose or change the test location.",
      answerAr: "تظهر في بطاقة الدخول تفاصيل الاختبار (التاريخ والوقت والمقر ورقم القاعة) مع رابط لموقع المبنى. ولا يمكن اختيار مقر الاختبار أو تغييره.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-arrive", topic: "qudrat-day",
      questionEn: "When should I arrive for the Qudrat test?",
      questionAr: "متى يجب أن أصل إلى مقر اختبار القدرات؟",
      answerEn: "One hour before the test starts. Do not leave the room without the proctor's permission.",
      answerAr: "قبل بدء الاختبار بساعة. ولا تغادر القاعة دون إذن المسؤول عنها.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-what-to-bring", topic: "qudrat-day",
      questionEn: "What do I bring to Qudrat, and what is not allowed?",
      questionAr: "ماذا أحضر لاختبار القدرات؟ وما الممنوع؟",
      answerEn: "Bring an official ID with a recent photo (Civil ID, passport, driving licence or the Kuwait Mobile ID app) and your admission ticket. Only a pencil and an eraser are allowed in the room. All smart devices are banned (phone, watch, earphones, Wi-Fi devices), and it is best not to bring personal items.",
      answerAr: "أحضر هوية رسمية أصلية بصورة حديثة (البطاقة المدنية أو جواز السفر أو رخصة القيادة أو تطبيق هويتي) وبطاقة دخول الاختبار. المسموح في القاعة قلم رصاص وممحاة فقط، وجميع الأجهزة الذكية ممنوعة (الهاتف والساعة والسماعة وجهاز الواي فاي)، ويفضّل عدم إحضار أغراض شخصية.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-late", topic: "qudrat-day",
      questionEn: "What happens if I am late or miss my Qudrat test?",
      questionAr: "ماذا يحدث إذا تأخرت أو غبت عن اختبار القدرات؟",
      answerEn: "You will not be let in after the time on your admission ticket, and the test cannot be moved or retaken. The fee is not refunded.",
      answerAr: "يُمنع دخول المتأخر بعد الموعد المحدد في بطاقة الدخول، ولا يمكن إعادة الاختبار أو تأجيله، ولا تُسترجع الرسوم.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-cheating", topic: "qudrat-day",
      questionEn: "Can my Qudrat score be cancelled?",
      questionAr: "هل يمكن إلغاء نتيجتي في القدرات؟",
      answerEn: "Yes. Any case of cheating cancels the test score.",
      answerAr: "نعم. جميع حالات الغش تؤدي إلى إلغاء نتيجة الاختبار.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-results-when", topic: "qudrat-results",
      questionEn: "When are Qudrat results released?",
      questionAr: "متى تصدر نتائج القدرات؟",
      answerEn: "Within two weeks of the test date.",
      answerAr: "خلال أسبوعين من تاريخ الاختبار.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-results-where", topic: "qudrat-results",
      questionEn: "How do I see my Qudrat results?",
      questionAr: "كيف أعرف نتيجتي في القدرات؟",
      answerEn: "In the \"Test results\" section of Kuwait University's Evaluation and Measurement website, or in the Sahel app.",
      answerAr: "عبر قسم \"نتائج الاختبارات\" في موقع مكتب التقييم والقياس بجامعة الكويت، أو عبر تطبيق سهل.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },
    {
      id: "qudrat-appeal", topic: "qudrat-results",
      questionEn: "Can I appeal my Qudrat score?",
      questionAr: "هل يمكنني التظلم على نتيجتي في القدرات؟",
      answerEn: "Yes, but only within one week after the results are published.",
      answerAr: "نعم، ويفتح باب التظلمات بعد إعلان النتائج لمدة أسبوع واحد فقط.",
      status: "confirmed", sourceLabel: KU_FAQ.label, sourceUrl: KU_FAQ.url
    },

    // ---------------- Merit ----------------
    {
      id: "merit-deadline-separate", topic: "merit",
      questionEn: "Registration closed in July. Did I miss the merit programme?",
      questionAr: "أُغلق التسجيل في يوليو، هل فاتني برنامج التميز؟",
      answerEn: "No. Merit registration for 2026/2027 stays open until 24 February 2027. You need an offer from a university or programme on the merit list, and 95% for medicine, dentistry and pharmacy. For other majors the Ministry's merit registration guide says 90%, but the Ministry's merit page only says \"the plan minimum\" {{unconfirmed}}.",
      answerAr: "لا. التسجيل في برنامج التميز للعام 2026/2027 مفتوح حتى 24 فبراير 2027. تحتاج إلى قبول في جامعة أو برنامج من قائمة التميز، و95% للطب وطب الأسنان والصيدلة. ولبقية التخصصات يذكر دليل التسجيل في برنامج التميز 90%، بينما تذكر صفحة التميز \"الحد الأدنى للخطة\" فقط {{unconfirmed}}.",
      status: "confirmed", sourceLabel: "Ministry announcement reported by Al-Rai", sourceUrl: "https://www.alraimedia.com/article/1769447"
    },
    {
      id: "merit-bonus-start", topic: "merit",
      questionEn: "Does the extra 50% merit money start from day one?",
      questionAr: "هل تبدأ زيادة الـ50% للتميز من أول يوم؟",
      answerEn: "No. It starts only after you pass the foundation (preparatory) stage and actually begin the first year of your degree.",
      answerAr: "لا. تبدأ فقط بعد اجتياز المرحلة التمهيدية (التأسيسية) والبدء فعلياً في السنة الأولى من الدراسة الجامعية.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },
    {
      id: "merit-gpa-drop", topic: "merit",
      questionEn: "If my GPA drops below 2.67, do I lose my scholarship?",
      questionAr: "إذا نزل معدلي عن 2.67، هل تُلغى بعثتي؟",
      answerEn: "No. You move to a regular scholarship and lose the extra 50%. If you bring your GPA back to 2.67 or more, you can return to merit. In the UK grading system, the line is 60%.",
      answerAr: "لا. تتحول بعثتك إلى بعثة عادية وتفقد زيادة الـ50%. وإذا رفعت معدلك إلى 2.67 فأكثر تعود إلى التميز. وفي النظام البريطاني يكون الحد 60%.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },
    {
      id: "regular-to-merit", topic: "merit",
      questionEn: "I am on a regular scholarship. Can I switch to merit later?",
      questionAr: "بعثتي عادية، هل يمكنني التحول إلى التميز لاحقاً؟",
      answerEn: "Yes. If you get an offer from a university or programme on the merit list, your scholarship becomes a merit scholarship from the second semester.",
      answerAr: "نعم. إذا حصلت على قبول في جامعة أو برنامج من قائمة التميز، تتحول بعثتك إلى بعثة تميز من الفصل الثاني.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },

    // ---------------- Money ----------------
    {
      id: "allowance-start", topic: "allowance",
      questionEn: "Does my monthly allowance start once I am accepted?",
      questionAr: "هل يبدأ المخصص الشهري من يوم القبول؟",
      answerEn: "No. It starts from the day you arrive in your country of study, and at most two weeks before classes begin. Before you travel, you get one-off travel payments instead.",
      answerAr: "لا. يبدأ من تاريخ وصولك إلى بلد الدراسة، وبحد أقصى أسبوعين قبل بدء الدراسة. وقبل السفر تُصرف لك مبالغ السفر لمرة واحدة.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office London, FAQ", sourceUrl: "https://www.kcouk.org/faqs/"
    },
    {
      id: "allowance-cuts", topic: "allowance",
      questionEn: "Can failing or missing classes cost me money?",
      questionAr: "هل يؤثر الرسوب أو الغياب على المخصص؟",
      answerEn: "Yes. If you fail a year, the Ministry takes back your summer allowance at 25% a month. Missing more than 20% of classes, or more than 14 days in a row, means the missed days are taken off. Each academic warning also takes 15% to 25% off one month's allowance.",
      answerAr: "نعم. إذا رسبت في سنة تسترد الوزارة مخصصات الصيف بخصم 25% شهرياً. والغياب أكثر من 20% من المحاضرات، أو أكثر من 14 يوماً متصلة، يُخصم من المخصص. وكل إنذار أكاديمي يخصم من 15% إلى 25% من مخصص شهر.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },

    // ---------------- After you are accepted ----------------
    {
      id: "sixty-day-deadline", topic: "after-acceptance",
      questionEn: "I got accepted. Is there a deadline to finish my paperwork?",
      questionAr: "قُبلت في البعثة، هل هناك مهلة لإكمال الإجراءات؟",
      answerEn: "Yes. Within 60 days of the results you must go to the Ministry so it can match your original school certificate. If you miss this, the scholarship is cancelled. Your guardian approves the pledge (a written promise about your studies) in the Sahel app; merit students must have it approved within 60 days too. You then have one full calendar year from your acceptance to reach the IELTS or TOEFL score your university needs.",
      answerAr: "نعم. خلال 60 يوماً من إعلان النتائج يجب أن تراجع الوزارة لمطابقة شهادة الثانوية الأصلية، وإلا تُلغى البعثة. ويصادق ولي الأمر على التعهد المالي والأكاديمي عبر تطبيق سهل، وعلى طلبة التميز المصادقة عليه خلال 60 يوماً أيضاً. ثم لديك عام ميلادي كامل من تاريخ قبولك لتحقيق درجة IELTS أو TOEFL التي تطلبها جامعتك.",
      status: "confirmed", sourceLabel: PLAN_GUIDE.label, sourceUrl: PLAN_GUIDE.url
    },
    {
      id: "change-major-before-travel", topic: "after-acceptance",
      questionEn: "Can I change my major before I travel?",
      questionAr: "هل يمكنني تغيير تخصصي قبل السفر؟",
      answerEn: "No. You can only ask after you start studying: after the foundation year, or after 12 credits with a GPA of 2.00 or more. You can change only once, to a major in your year's plan in the same country, and not after the halfway point of your degree.",
      answerAr: "لا. يكون تغيير التخصص بعد بدء الدراسة فقط: بعد السنة التمهيدية، أو بعد اجتياز 12 وحدة بمعدل 2.00 فأكثر. ويُسمح بالتغيير مرة واحدة، إلى تخصص في خطة سنتك وفي الدولة نفسها، وليس بعد منتصف مدة الدراسة.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },
    {
      id: "change-country", topic: "after-acceptance",
      questionEn: "Can I move my scholarship to another country?",
      questionAr: "هل يمكنني نقل بعثتي إلى دولة أخرى؟",
      answerEn: "Only once, after you start studying, and only for set reasons: your visa was refused or delayed 3 months or more, a brother or sister studies there, you got a medical offer there, or you got an offer on the merit list. Your major must be offered in that country, and your grade must meet its minimum.",
      answerAr: "مرة واحدة فقط بعد بدء الدراسة، ولأسباب محددة: رفض التأشيرة أو تأخرها 3 أشهر فأكثر، أو وجود أحد إخوتك هناك، أو قبول في الطب، أو قبول في قائمة التميز. ويجب أن يكون تخصصك مطروحاً هناك وأن تحقق نسبتك الحد الأدنى.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },
    {
      id: "defer-a-year", topic: "after-acceptance",
      questionEn: "Can I accept now and start a year later?",
      questionAr: "هل يمكنني قبول البعثة الآن والبدء بعد سنة؟",
      answerEn: "Only for set reasons: no visa, a health reason with a Ministry of Health report, or another exceptional reason the Ministry accepts. Even then, it is one academic year at most. You cannot freeze the scholarship before you actually start studying.",
      answerAr: "فقط لأسباب محددة: عدم صدور التأشيرة، أو سبب صحي بتقرير من وزارة الصحة، أو سبب استثنائي تقبله الوزارة، وبحد أقصى سنة دراسية. ولا يجوز تجميد البعثة قبل بدء الدراسة فعلياً.",
      status: "confirmed", sourceLabel: DECREE_197.label, sourceUrl: DECREE_197.url
    },

    // ---------------- For parents (researched 2026-11-15) ----------------
    {
      id: "guardian-approves-pledge-sahel", topic: "guardians",
      questionEn: "What does the guardian have to do after the student is accepted?",
      questionAr: "ما المطلوب من ولي الأمر بعد قبول الطالب؟",
      answerEn: "Approve the student's financial and academic pledge (a signed promise to follow the rules) and medical form in the Sahel app.",
      answerAr: "المصادقة على التعهد المالي والأكاديمي للطالب ونموذج الفحص الطبي إلكترونياً عبر تطبيق سهل.",
      detailsEn: "The regulation requires the student and guardian to sign the pledge within 60 days of the acceptance results. No visit to the Ministry is needed; documents are uploaded online. The Ministry page also mentions approving through the Hawiyati (My Identity) app, so check which app the Ministry's message asks you to use.",
      detailsAr: "تشترط اللائحة أن يوقع الطالب وولي أمره على التعهد خلال ستين يوماً من إعلان نتائج القبول. لا حاجة لمراجعة الوزارة، إذ تُرفق المستندات إلكترونياً. وتذكر صفحة الوزارة أيضاً المصادقة عبر تطبيق هويتي، لذا تأكد من التطبيق المذكور في رسالة الوزارة.",
      status: "confirmed", sourceLabel: "MOHE 2026/2027 plan conditions page; Decree 197/2025, Article 2(13) (official copy on kcouk.org)", sourceUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3"
    },
    {
      id: "custody-mother-court-ruling", topic: "guardians",
      questionEn: "The mother has custody of the student. Can she sign the pledge?",
      questionAr: "الأم حاضنة للطالب، فهل يمكنها التوقيع على التعهد؟",
      answerEn: "She must first get a court ruling giving her educational guardianship for study outside Kuwait.",
      answerAr: "يجب عليها أولاً الحصول على حكم من المحكمة المختصة بالولاية التعليمية للدراسة خارج الكويت.",
      detailsEn: "The ruling must be submitted to the Ministry within 60 days of the date the acceptance results are announced.",
      detailsAr: "يجب تقديم الحكم إلى الوزارة خلال ستين يوماً من تاريخ إعلان نتائج القبول في خطة البعثات.",
      status: "confirmed", sourceLabel: "MOHE 2026/2027 plan conditions page (application steps, item 4)", sourceUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3"
    },
    {
      id: "guardian-liability-for-debt", topic: "guardians",
      questionEn: "Is the guardian personally responsible for paying back scholarship money?",
      questionAr: "هل ولي الأمر مسؤول شخصياً عن سداد مبالغ البعثة؟",
      answerEn: "Not clearly stated: the guardian signs a financial pledge, but the regulation says money is recovered from the student.",
      answerAr: "غير محدد بوضوح: يوقع ولي الأمر تعهداً مالياً، لكن اللائحة تنص على الاسترداد من الطالب.",
      detailsEn: "Article 2 requires the student and guardian to sign a pledge covering the academic and financial rules, and Article 30 lets the student and guardian together ask to suspend a debt. The regulation does not spell out the guardian's own share of the debt. Ask the Ministry before signing if this matters to you.",
      detailsAr: "تُلزم المادة (2) الطالب وولي أمره بالتوقيع على تعهد بالالتزام بأحكام البعثة أكاديمياً ومالياً، وتجيز المادة (30) للطالب وولي أمره طلب تعليق المديونية. لكن اللائحة لا تحدد صراحةً مسؤولية ولي الأمر عن المديونية. استفسر من الوزارة قبل التوقيع إن كان ذلك يهمك.",
      status: "unconfirmed", sourceLabel: "Decree 197/2025, Articles 2(13) and 30 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "repay-if-dismissed-or-withdraws", topic: "guardians",
      questionEn: "If the student is dismissed or drops out, must the costs be repaid?",
      questionAr: "إذا فُصل الطالب أو انسحب من الدراسة، فهل يجب سداد التكاليف؟",
      answerEn: "Yes. Half (50%) of all amounts paid for the student is recovered after dismissal or withdrawal during studies.",
      answerAr: "نعم، يُسترد 50% من جميع المبالغ التي صُرفت للطالب عند فصله أو انسحابه أثناء الدراسة.",
      detailsEn: "This applies to dismissal under Article 12 and withdrawal under Article 14 (also at master's level). Within one year of the decision, the student and guardian may ask to suspend the debt by proving the student is still studying.",
      detailsAr: "ينطبق ذلك على الفصل وفق المادة (12) والانسحاب وفق المادة (14)، وكذلك في مرحلة الماجستير. ويجوز للطالب وولي أمره طلب تعليق المديونية خلال سنة من صدور القرار بعد تقديم ما يثبت استمرار الطالب في الدراسة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 14 and 30 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "debt-reduced-or-cancelled", topic: "guardians",
      questionEn: "Can the repayment be reduced or cancelled?",
      questionAr: "هل يمكن تخفيض المديونية أو إلغاؤها؟",
      answerEn: "Yes, it is halved or cancelled if the student keeps studying and earns a degree within set time limits.",
      answerAr: "نعم، تُخفض إلى النصف أو تُلغى إذا واصل الطالب دراسته وحصل على مؤهل خلال مدد محددة.",
      detailsEn: "Halved: a diploma within 3 years, or a master's in the same field within 1 year, of the decision. Cancelled: the student is re-admitted to the scholarship, or earns a bachelor's within 4 years. Nothing is recovered if the student dies or has a health or mental disability, certified in Kuwait, that stops study.",
      detailsAr: "تُخفض بنسبة 50%: عند الحصول على الدبلوم خلال 3 سنوات، أو الماجستير بذات التخصص خلال سنة من القرار. وتُلغى: عند إعادة ضم الطالب، أو حصوله على البكالوريوس خلال 4 سنوات. ولا يُسترد شيء في حال وفاة الطالب أو عجزه الصحي أو العقلي المعتمد من جهات الكويت المختصة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 30 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "dismissal-reasons", topic: "guardians",
      questionEn: "What can get a student dismissed from the scholarship?",
      questionAr: "ما الأسباب التي قد تؤدي إلى فصل الطالب من البعثة؟",
      answerEn: "Repeated academic failure or warnings, breaking scholarship rules, a criminal conviction, or stopping study without an accepted reason.",
      answerAr: "الرسوب أو الإنذارات المتكررة، أو مخالفة أحكام البعثة، أو الإدانة بجريمة، أو الانقطاع دون عذر مقبول.",
      detailsEn: "The full list: breaking the conditions or duties in Articles 2 and 4; stopping or withdrawing without a reason the Ministry accepts; no admission during a freeze; not graduating within a one-year freeze; any criminal conviction in Kuwait or abroad; failing years; 3 consecutive or 4 total academic warnings; two disciplinary warnings.",
      detailsAr: "القائمة الكاملة: الإخلال بشروط وواجبات المادتين (2) و(4)؛ الانقطاع أو الانسحاب دون أسباب تقبلها الوزارة؛ عدم الحصول على قبول خلال التجميد؛ عدم التخرج خلال عام التجميد؛ الإدانة بأي جريمة داخل الكويت أو خارجها؛ الرسوب؛ ثلاثة إنذارات أكاديمية متتالية أو أربعة متفرقة؛ إنذاران تأديبيان.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 12 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "withdraw-during-studies", topic: "guardians",
      questionEn: "Can the student withdraw from the scholarship after starting university?",
      questionAr: "هل يمكن للطالب الانسحاب من البعثة بعد بدء الدراسة؟",
      answerEn: "Yes, but the student must pay the money the Ministry claims back because of the withdrawal.",
      answerAr: "نعم، مع دفع المطالبة المالية المترتبة على قرار الانسحاب.",
      detailsEn: "That claim is 50% of all amounts paid (Article 30). A withdrawal decision (including one made before travel) cannot be reversed once issued. A student who withdrew after enrolling abroad cannot apply to a new scholarship plan later, but may ask once for re-admission.",
      detailsAr: "تبلغ المطالبة 50% من جميع المبالغ المصروفة (المادة 30). ولا يجوز العدول عن قرار الانسحاب بعد صدوره، ولو كان قبل السفر. ولا يحق لمن انسحب بعد الالتحاق ببلد الإيفاد التسجيل في خطة بعثات جديدة، لكن يجوز له طلب إعادة الضم مرة واحدة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 2(7), 14, 16 and 30 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "readmission-after-dismissal", topic: "guardians",
      questionEn: "If the student is dismissed or withdraws, can they get the scholarship back?",
      questionAr: "إذا فُصل الطالب أو انسحب، فهل يمكنه العودة إلى البعثة؟",
      answerEn: "Yes, once, by applying within two years of the decision and meeting academic conditions.",
      answerAr: "نعم، لمرة واحدة فقط، بتقديم طلب إعادة الضم خلال عامين من القرار واستيفاء الشروط الأكاديمية.",
      detailsEn: "Not if the dismissal was disciplinary (unless cancelled). Meanwhile the student must pass at least 27 credits (42 quarter), including two major courses, with a GPA of at least 2.5 at a recommended institution, not stop studying more than a year, and not be a government employee. Re-admission cancels the debt.",
      detailsAr: "لا يجوز إذا كان الفصل تأديبياً ما لم يُلغَ القرار. ويشترط أن يجتاز خلال فترة الفصل 27 وحدة (42 بنظام الفصول الثلاثة) منها مادتان في التخصص، بمعدل لا يقل عن 2.5 من مؤسسة موصى بها، وألا ينقطع أكثر من عام، وألا يكون موظفاً حكومياً. وإعادة الضم تُعفي من المديونية.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 16 and 30 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "family-flight-tickets", topic: "guardians",
      questionEn: "Are flight tickets paid for family members?",
      questionAr: "هل تُصرف تذاكر سفر لأفراد الأسرة؟",
      answerEn: "Annual tickets are paid for the student's spouse and up to three children who live with them abroad.",
      answerAr: "تُصرف تذاكر سنوية للزوج أو الزوجة وثلاثة أبناء كحد أقصى من المرافقين للطالب.",
      detailsEn: "The spouse also gets a one-way joining ticket, but no annual ticket until six months after it. Companions get tickets if a first-degree relative dies or if the student dies. The regulation does not mention annual tickets for parents. Claims lapse after one year.",
      detailsAr: "ويستحق الزوج أو الزوجة تذكرة ذهاب عند الالتحاق، ولا تُصرف التذكرة السنوية قبل مضي ستة أشهر عليها. وتُصرف تذاكر للمرافقين عند وفاة أحد الأقارب من الدرجة الأولى أو وفاة الطالب. ولا تذكر اللائحة تذاكر سنوية للوالدين. ويسقط حق المطالبة بعد سنة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 27 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "under-18-companion", topic: "guardians",
      questionEn: "Must a parent travel with a student who is under 18?",
      questionAr: "هل يجب أن يرافق أحد الوالدين الطالب الذي يقل عمره عن 18 سنة؟",
      answerEn: "It depends on the country: Ireland requires a parent, Australia a companion or homestay, and the UK office says none is needed.",
      answerAr: "يختلف حسب الدولة: إيرلندا تشترط مرافقة أحد الوالدين، وأستراليا مرافقاً أو سكناً عائلياً، ومكتب بريطانيا لا يشترط مرافقاً.",
      detailsEn: "Ireland: a parent must accompany a student under 18 at the start of studies. Australia: travel with a father, mother, brother or sister aged 21+, or live in an arranged homestay (host family), usually from two weeks before classes. For other countries, ask the cultural office.",
      detailsAr: "إيرلندا: يجب أن يرافق أحد الوالدين الطالب الذي لم يبلغ 18 عاماً قبل بدء الدراسة. أستراليا: الحضور مع مرافق (الأب أو الأم أو الأخ أو الأخت) لا يقل عمره عن 21 سنة، أو السكن العائلي الذي يبدأ عادة قبل الدراسة بأسبوعين. وللدول الأخرى استفسر من المكتب الثقافي.",
      status: "confirmed", sourceLabel: "MOHE 2026/2027 plan conditions page (country requirements); Kuwait Cultural Office London FAQ", sourceUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3"
    },
    {
      id: "parent-companion-allowance", topic: "guardians",
      questionEn: "Is there an allowance for a parent who accompanies the student?",
      questionAr: "هل يوجد مخصص لولي الأمر الذي يرافق الطالب؟",
      answerEn: "We found none: the regulation's companion allowances only mention a spouse and children.",
      answerAr: "لم نجد ذلك: مخصصات المرافقين في اللائحة تذكر الزوج أو الزوجة والأبناء فقط.",
      detailsEn: "Article 26 gives a social allowance for a spouse who has no scholarship and no job, and an allowance per child for up to three children. Nothing in the regulation covers a parent or sibling companion. Ask the Ministry or cultural office before travel.",
      detailsAr: "تمنح المادة (26) علاوة اجتماعية عن الزوج أو الزوجة غير المبتعث وغير الموظف، وعلاوة عن كل ابن بحد أقصى ثلاثة أبناء. ولا يرد في اللائحة ما يخص مرافقة أحد الوالدين أو الإخوة. استفسر من الوزارة أو المكتب الثقافي قبل السفر.",
      status: "unconfirmed", sourceLabel: "Decree 197/2025, Article 26 (official copy on kcouk.org); no explicit rule found", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "students-with-disabilities", topic: "guardians",
      questionEn: "Are there special rules, such as a companion, for students with disabilities?",
      questionAr: "هل توجد أحكام خاصة، مثل المرافق، للطلبة من ذوي الإعاقة؟",
      answerEn: "The Ministry's regulation has no specific rule; a separate study-abroad scholarship is run by the Public Authority for Disability Affairs.",
      answerAr: "لا تتضمن لائحة الوزارة حكماً خاصاً؛ وتقدم الهيئة العامة لشؤون ذوي الإعاقة بعثة خارجية مستقلة.",
      detailsEn: "The Authority's scholarship has its own conditions, such as a valid disability certificate from the Authority, at least 70% in secondary school, age up to 25, and a personal interview. We did not find companion rules for it. Ask the Authority directly.",
      detailsAr: "لبعثة الهيئة شروطها الخاصة، مثل شهادة إثبات إعاقة سارية من الهيئة، ونسبة لا تقل عن 70% في الثانوية، وألا يزيد العمر عن 25 سنة، واجتياز مقابلة شخصية. ولم نجد أحكاماً بشأن المرافق، لذا يُنصح بمراجعة الهيئة مباشرة.",
      status: "unconfirmed", sourceLabel: "Kuwait Government Online (e.gov.kw), PADA external scholarship service", sourceUrl: "https://e.gov.kw/sites/kgoarabic/Pages/Services/GODP/Scholerships.aspx"
    },
    {
      id: "medical-treatment-abroad", topic: "guardians",
      questionEn: "Who pays for medical treatment abroad?",
      questionAr: "من يتحمل تكاليف العلاج في الخارج؟",
      answerEn: "The Ministry provides health insurance for the student and accompanying family under its student health insurance rules.",
      answerAr: "توفر الوزارة التأمين الصحي للطالب ومرافقيه وفقاً للائحة التأمين الصحي للطلبة في الخارج.",
      detailsEn: "Sick leave of up to one semester, once, keeps the allowance; a second time only for critical cases needing hospital, with Ministry approval and a medical report. In the UK, insurance is run by Healix (students register directly), and emergencies go to NHS hospital A&E.",
      detailsAr: "تجوز إجازة مرضية لفصل واحد ولمرة واحدة مع استمرار المخصصات، ولمرة ثانية فقط في الحالات الحرجة التي تتطلب دخول المستشفى، بموافقة الوزارة وتقرير طبي. وفي بريطانيا تدير شركة Healix التأمين ويسجل الطالب بنفسه، وتُعالج الطوارئ في أقسام الطوارئ بالمستشفيات الحكومية (NHS).",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 23, 25 and 29 (official copy on kcouk.org); Kuwait Cultural Office London FAQ", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "holidays-leaving-country", topic: "guardians",
      questionEn: "Can the student come home during holidays, and what happens to the allowance?",
      questionAr: "هل يمكن للطالب العودة إلى الكويت في العطل، وماذا يحدث للمخصص؟",
      answerEn: "Yes, in official holidays, but the student must tell the cultural office before leaving and have the university's approval.",
      answerAr: "نعم في العطل الرسمية، بشرط إخطار المكتب الثقافي قبل المغادرة وتقديم موافقة الجامعة.",
      detailsEn: "Unexcused absence over 20% of classes, or over 14 days in a row, is deducted from the allowance (up to 25% a month); official holidays don't count. The regulation does not say the allowance stops during holidays. The UK office warns that leaving without approval may cancel the scholarship.",
      detailsAr: "يُخصم من المخصص عند الغياب دون عذر بما يزيد عن 20% أو أكثر من 14 يوماً متصلة (بنسبة لا تزيد عن 25% شهرياً)، وتُستثنى العطل الرسمية. ولا تنص اللائحة على وقف المخصص في العطل. ويحذر مكتب لندن من أن المغادرة دون موافقة قد تؤدي إلى إلغاء البعثة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 4(11) and 25 (item 11 of part two) (official copy on kcouk.org); Kuwait Cultural Office London FAQ", sourceUrl: "https://www.kcouk.org/faqs/"
    },
    {
      id: "discipline-and-appeals", topic: "guardians",
      questionEn: "What if the student breaks the law or university rules?",
      questionAr: "ماذا لو خالف الطالب القانون أو أنظمة الجامعة؟",
      answerEn: "Penalties range from a disciplinary warning to stopping the allowance, freezing, or dismissal; any criminal conviction means dismissal.",
      answerAr: "تتدرج العقوبات من الإنذار التأديبي إلى وقف المخصصات أو تجميد البعثة أو الفصل، والإدانة بأي جريمة تؤدي إلى الفصل.",
      detailsEn: "Two disciplinary warnings also mean dismissal. The student is questioned in writing; not attending counts as admitting the violation. The student may appeal to the Ministry's Undersecretary within one month of being told of the decision.",
      detailsAr: "ويُفصل الطالب أيضاً عند حصوله على إنذارين تأديبيين. ويُحقق معه كتابياً، وإذا لم يحضر في الموعد يُعتبر مقراً بالمخالفة. ويحق له التظلم إلى وكيل الوزارة خلال شهر من إبلاغه بالقرار.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 12 and 24 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "work-obligation-after-graduation", topic: "guardians",
      questionEn: "Must the graduate work in Kuwait or for the government afterwards?",
      questionAr: "هل يلتزم الخريج بالعمل في الكويت أو لدى الحكومة بعد التخرج؟",
      answerEn: "We found no such requirement in the 2025 regulation or on the Ministry's plan page.",
      answerAr: "لم نجد هذا الشرط في لائحة 2025 ولا في صفحة خطة الوزارة.",
      detailsEn: "The regulation only says scholarships are planned around the needs of state bodies and the job market. It does not set a duty to work after graduation. Ask the Ministry to confirm, as other rules may apply.",
      detailsAr: "تذكر اللائحة فقط أن خطة البعثات توضع وفق حاجة مؤسسات الدولة وسوق العمل، ولا تنص على التزام بالعمل بعد التخرج. يُنصح بالتأكد من الوزارة، فقد توجد أحكام أخرى.",
      status: "unconfirmed", sourceLabel: "Decree 197/2025, Article 1 (definition of the scholarship plan) (official copy on kcouk.org); no explicit rule found", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "emergency-contact-cultural-office", topic: "guardians",
      questionEn: "Who should we contact in an emergency abroad?",
      questionAr: "بمن نتصل في حالة طارئة في الخارج؟",
      answerEn: "The Kuwait cultural office in the study country; it oversees students' studies, money and living conditions.",
      answerAr: "المكتب الثقافي الكويتي في بلد الدراسة، فهو المسؤول عن متابعة أوضاع الطلبة الأكاديمية والمالية والمعيشية.",
      detailsEn: "For life-threatening emergencies, call local emergency services first. Cultural office websites list after-hours embassy emergency numbers (for example Australia and Ireland). The student must keep in touch with the office and keep contact details updated.",
      detailsAr: "في الحالات التي تهدد الحياة اتصل أولاً بخدمات الطوارئ المحلية. وتنشر مواقع المكاتب الثقافية أرقام طوارئ السفارة خارج أوقات الدوام (مثل أستراليا وإيرلندا). وعلى الطالب التواصل المستمر مع المكتب وتحديث بيانات التواصل.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 1 and 4(10), (18) (official copy on kcouk.org); Kuwait Cultural Office London FAQ; Kuwait Cultural Office Australia", sourceUrl: "https://www.kcouk.org/faqs/"
    },
    // ---------------- Studying on the scholarship (researched 2026-11-15) ----------------
    {
      id: "academic-warning-low-gpa", topic: "after-acceptance",
      questionEn: "What happens if the student's GPA drops?",
      questionAr: "ماذا يحدث إذا انخفض معدل الطالب؟",
      answerEn: "A term GPA below 2.00 (or below 50% in the British system) brings an academic warning, a formal notice to improve.",
      answerAr: "إذا انخفض المعدل الفصلي عن 2.00 (أو 50% في النظام البريطاني) يُوجَّه للطالب إنذار أكاديمي.",
      detailsEn: "Three warnings in a row, or four in total, mean dismissal. Each warning also brings a one-time allowance cut. The Ministry may lift up to two warnings for circumstances beyond the student's control, and a third so the student can finish graduation. The student must explain the reasons to the cultural office within one month.",
      detailsAr: "يُفصل الطالب عند حصوله على ثلاثة إنذارات متتالية أو أربعة متفرقة، ويصاحب كل إنذار خصم لمرة واحدة من المخصص. ويجوز رفع إنذارين كحد أقصى للظروف القاهرة بموافقة الوزارة، وإنذار ثالث لإنهاء متطلبات التخرج. وعلى الطالب تزويد المكتب الثقافي بأسباب ضعف أدائه خلال شهر.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 4(16), 5(3), 12(8) and 25 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "credits-per-year-summer", topic: "after-acceptance",
      questionEn: "How many credits must the student pass each year, and what if they fall short?",
      questionAr: "كم وحدة دراسية يجب أن يجتازها الطالب سنوياً، وماذا لو لم يكملها؟",
      answerEn: "27 credits a year in a two-semester system, or 42 in a quarter system, from the approved study plan.",
      answerAr: "27 وحدة سنوياً بنظام الفصلين، أو 42 وحدة بنظام الفصول الثلاثة، من ضمن الخطة الدراسية.",
      detailsEn: "Missing credits must be made up in summer. If the student neither finishes them nor registers in summer, the whole summer allowance is taken back, at 25% of the monthly allowance from the next year. The same applies to annual-system students who fail the year.",
      detailsAr: "على الطالب استكمال الوحدات الناقصة في فصل الصيف. وإذا لم يكملها ولم يسجل في الصيف، تُسترد منه مخصصات أشهر الصيف كاملة بخصم 25% شهرياً من العام التالي. ويطبق ذلك أيضاً على طالب النظام السنوي الذي لم ينجح في سنته.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 5(2) and 25 (items 8 and 9 of part two) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "repeat-failed-year", topic: "after-acceptance",
      questionEn: "Can the student repeat a failed year?",
      questionAr: "هل يمكن للطالب إعادة سنة رسب فيها؟",
      answerEn: "Yes. An academic year can be repeated up to twice, and repeated years count within the program's normal length.",
      answerAr: "نعم، تجوز إعادة السنة الأكاديمية مرتين كحد أقصى، وتُحتسب ضمن مدة البرنامج.",
      detailsEn: "The foundation (preparatory) year can be repeated once, in the same major, if attendance was at least 65%. Using up the repeats freezes the scholarship. Failing two years ends the scholarship in programs of up to four years; in longer programs, two years in a row or three in total.",
      detailsAr: "تجوز إعادة السنة التمهيدية مرة واحدة فقط بذات التخصص إذا لم تقل نسبة الحضور عن 65%. وعند استنفاد حد الإعادة تُجمَّد البعثة. ويُفصل الطالب إذا رسب سنتين في التخصصات التي مدتها أربع سنوات كحد أقصى، وفي الأطول إذا رسب سنتين متتاليتين أو ثلاثاً متفرقة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 6 and 12(6-7) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "max-study-period-extension", topic: "after-acceptance",
      questionEn: "How long can the scholarship last, and can it be extended?",
      questionAr: "ما المدة القصوى للبعثة، وهل يمكن تمديدها؟",
      answerEn: "The student must finish within the program's approved length; extensions can add up to two academic years in total.",
      answerAr: "يلتزم الطالب بمدة البرنامج المعتمدة، ويجوز التمديد بحد أقصى عامين دراسيين طوال الخطة.",
      detailsEn: "Extensions need Ministry approval and are refused if the student has not passed half of the study plan. After that, the scholarship can be frozen until graduation for one more academic year at most; not graduating then means dismissal. Freeze periods do not count toward the original length.",
      detailsAr: "يحتاج التمديد إلى موافقة الوزارة، ولا يُمنح إذا لم يجتز الطالب منتصف الخطة الدراسية. وبعد استنفاد التمديد تُجمَّد البعثة حتى التخرج بحد أقصى عام دراسي، ويُفصل الطالب إن لم يتخرج خلاله. ولا تُحتسب فترة التجميد من المدة الأصلية.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 5(1), 10, 11 and 12(4) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "freeze-during-studies", topic: "after-acceptance",
      questionEn: "Can the scholarship be paused (frozen) during studies?",
      questionAr: "هل يمكن تجميد البعثة أثناء الدراسة؟",
      answerEn: "Yes, with Ministry approval, for up to two academic years in total, for set reasons such as an emergency.",
      answerAr: "نعم، بموافقة الوزارة، لمدة لا تتجاوز عامين دراسيين طوال الخطة، في حالات محددة مثل الظروف القاهرة.",
      detailsEn: "Other cases: no admission for reasons beyond the student's control, university refuses a repeat year, suspension for low grades, changing major or university without approval, or no proof of enrolment. If the freeze is due to a visa delay or other reasons beyond the student's control, the allowance is paid for at most 3 months. Frozen students get no ticket home.",
      detailsAr: "من الحالات الأخرى: عدم الحصول على قبول لأسباب خارجة عن الإرادة، رفض الجامعة إعادة السنة، الإيقاف لانخفاض المعدل، تغيير التخصص أو الجامعة دون موافقة، عدم إثبات التسجيل. وإذا كان التجميد بسبب تأخر التأشيرة أو أسباب خارجة عن إرادته يُصرف المخصص ثلاثة أشهر كحد أقصى، ولا تُصرف تذكرة عودة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 10, 25(1)(3) and 27(1)(7) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "change-university", topic: "after-acceptance",
      questionEn: "Can the student transfer to another university in the same country?",
      questionAr: "هل يمكن للطالب التحويل إلى جامعة أخرى في نفس الدولة؟",
      answerEn: "Yes, up to twice, after the foundation year, with Ministry approval before joining the new university.",
      answerAr: "نعم، مرتين كحد أقصى بعد السنة التمهيدية، بشرط موافقة الوزارة قبل الالتحاق بالجامعة الجديدة.",
      detailsEn: "The new university must be recommended by Kuwait's accreditation bureau and in the Ministry's plan; at least two semesters (or one year) must remain. A third change is allowed for an excellence program, leaving a banned university, or a top-up year. Grant (منحة) students cannot change university.",
      detailsAr: "يشترط أن تكون الجامعة موصى بها من الجهاز الوطني للاعتماد الأكاديمي ومدرجة بخطة البعثات، وألا تقل المدة المتبقية عن فصلين أو عام. ويُسمح بتغيير ثالث للالتحاق ببرنامج متميز، أو الانتقال من جامعة محظورة، أو سنة (Top-up). ولا يحق لطالب المنحة تغيير الجامعة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 8 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "change-major-during-studies", topic: "after-acceptance",
      questionEn: "Can the student change major after starting university abroad?",
      questionAr: "هل يمكن للطالب تغيير التخصص بعد بدء الدراسة في الخارج؟",
      answerEn: "Yes, once, after the foundation year, into a plan major in the same country, with Ministry approval.",
      answerAr: "نعم، مرة واحدة بعد السنة التمهيدية، إلى تخصص مدرج بالخطة في نفس الدولة، بموافقة الوزارة.",
      detailsEn: "The student needs at least 12 passed credits with a GPA of 2.00 (or a passed first year in annual systems). No change is allowed after passing the middle of the study plan. Up to two changes are allowed when moving into an excellence program or university.",
      detailsAr: "يشترط اجتياز 12 وحدة على الأقل بمعدل لا يقل عن 2.00 (أو اجتياز السنة الأولى في النظام السنوي). ولا يُسمح بالتغيير بعد اجتياز منتصف الخطة الدراسية. ويُسمح بتغييرين كحد أقصى عند الانتقال إلى برنامج أو جامعة متميزة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 9 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "annual-flight-ticket", topic: "after-acceptance",
      questionEn: "Does the student get a yearly flight ticket?",
      questionAr: "هل يحصل الطالب على تذكرة سفر سنوية؟",
      answerEn: "Yes. A continuing student gets an annual ticket allowance after meeting the pass requirements of their study system.",
      answerAr: "نعم، يستحق الطالب المستمر بدل تذكرة سفر سنوية عند اجتياز شروط النجاح في نظامه الدراسي.",
      detailsEn: "Claim it within one year or the right is lost. New students get an economy ticket allowance before studies start, and graduates get a final return ticket. Dismissed or frozen students get no ticket home. A ticket is also paid if a parent or child dies.",
      detailsAr: "يسقط الحق في المطالبة بعد سنة من الاستحقاق. ويستحق الطالب المستجد بدل تذكرة بالدرجة السياحية قبل بدء الدراسة، والخريج بدل تذكرة عودة نهائية. ولا يستحق المفصول أو من جُمّدت بعثته تذكرة عودة. وتُصرف تذكرة أيضاً عند وفاة أحد الأقارب من الدرجة الأولى.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 27 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "married-student-family-allowances", topic: "after-acceptance",
      questionEn: "If the student marries, are there allowances for a spouse and children?",
      questionAr: "إذا تزوج الطالب، فهل توجد مخصصات للزوج أو الزوجة والأبناء؟",
      answerEn: "Yes: a social allowance for a spouse living with the student abroad, and an allowance per child for up to three children.",
      answerAr: "نعم: علاوة اجتماعية عن الزوج أو الزوجة المرافق في بلد الإيفاد، وعلاوة عن كل ابن بحد أقصى ثلاثة أبناء.",
      detailsEn: "The spouse must not have a scholarship or a job; the allowance stops if the spouse leaves the country for over two months in a year. The Ministry also pays tuition for the spouse (up to a first bachelor's) and children from age 4, plus health insurance. The regulation does not say whether permission is needed to marry.",
      detailsAr: "يشترط ألا يكون الزوج أو الزوجة مبتعثاً أو موظفاً، وتسقط العلاوة إذا غادر بلد الإيفاد أكثر من شهرين خلال العام. وتتحمل الوزارة رسوم تعليم الزوج أو الزوجة حتى البكالوريوس، والأبناء من عمر أربع سنوات، والتأمين الصحي. ولا تذكر اللائحة اشتراط موافقة على الزواج.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 26, 28 and 29 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "maternity-leave", topic: "after-acceptance",
      questionEn: "What if a female student has a baby during her studies?",
      questionAr: "ماذا لو أنجبت الطالبة أثناء دراستها؟",
      answerEn: "She may take one semester of maternity leave, once, and her allowance continues for three months.",
      answerAr: "يحق لها إجازة وضع لفصل دراسي واحد ولمرة واحدة، ويستمر صرف مخصصاتها لمدة ثلاثة أشهر.",
      detailsEn: "This leave can be used only once during the whole academic stage. If a male student's wife takes maternity leave during his studies, her family allowance also continues for up to three months, once.",
      detailsAr: "تُمنح هذه الإجازة مرة واحدة فقط خلال المرحلة الأكاديمية كاملة. وإذا طلبت زوجة الطالب إجازة وضع خلال دراسته، يستمر صرف المخصصات المقررة عنها لمدة لا تزيد عن ثلاثة أشهر ولمرة واحدة.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 23, 25 and 26(3) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "working-and-training", topic: "after-acceptance",
      questionEn: "Can the student work while on scholarship?",
      questionAr: "هل يمكن للطالب العمل أثناء البعثة؟",
      answerEn: "No. The student must study full-time, but the Ministry may allow training linked to the major if studies don't suffer.",
      answerAr: "لا، يجب التفرغ التام للدراسة، ويجوز للوزارة السماح بتدريب مرتبط بالتخصص إذا لم يؤثر على الدراسة.",
      detailsEn: "For compulsory training outside the study country, the Ministry pays an economy ticket, 50 KD a day for two weeks and the training fees. Training inside Kuwait earns only the monthly allowance (plus family allowance). Optional training or a semester elsewhere needs approval, with no extra costs paid.",
      detailsAr: "للتدريب الإجباري خارج بلد الإيفاد يُصرف بدل تذكرة بالدرجة السياحية، و50 ديناراً يومياً لمدة أسبوعين، ورسوم البرنامج. أما التدريب داخل الكويت فيُصرف عنه المخصص الشهري فقط مع العلاوة الاجتماعية إن وجدت. والتدريب أو الفصل الاختياري يحتاج موافقة دون تكاليف إضافية.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 4(17), 5(7-8) and 25(1)(8-9) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "summer-courses-credit-transfer", topic: "after-acceptance",
      questionEn: "Can the student take summer courses in Kuwait or transfer credits from elsewhere?",
      questionAr: "هل يمكن للطالب دراسة مقررات صيفية في الكويت أو معادلة مقررات من جهة أخرى؟",
      answerEn: "Yes, up to two summer courses in total, with the home university's approval and a grade of C or better.",
      answerAr: "نعم، مقرران صيفيان كحد أقصى طوال الدراسة، بموافقة الجامعة وبتقدير لا يقل عن (C).",
      detailsEn: "Summer courses can be at accredited institutions in Kuwait or recommended ones elsewhere. Also allowed: two community-college courses (max 8 credits) and up to 6 non-traditional (e.g. online) courses with prior Ministry approval. No correspondence study, and no retaking courses already passed with C or better.",
      detailsAr: "تكون الدراسة الصيفية في مؤسسة معتمدة داخل الكويت أو مؤسسة موصى بها خارج بلد الإيفاد. ويُسمح أيضاً بمقررين في كلية مجتمع (8 وحدات كحد أقصى)، و6 مقررات بنظام التعليم غير التقليدي بموافقة مسبقة. ولا يُسمح بالمراسلة أو الانتساب، ولا بإعادة مقرر اجتازه بتقدير جيد فما فوق.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Article 5(5), (9), (11), (13), (14) (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    {
      id: "graduation-benefits", topic: "after-acceptance",
      questionEn: "What does the student receive at graduation?",
      questionAr: "ماذا يستحق الطالب عند التخرج؟",
      answerEn: "Two months' allowance (without extra allowances) and a final return ticket allowance.",
      answerAr: "مخصص شهرين دون أي علاوات أو بدلات، وبدل تذكرة عودة نهائية.",
      detailsEn: "Graduating at least one semester early, with no rule violations, earns a bonus of one month's allowance. Before leaving, the graduate must settle all housing, financial and legal matters in the study country. Top graduates may also qualify for a year of practical training (OPT) or a master's scholarship.",
      detailsAr: "ويُصرف مخصص شهر واحد مكافأةً لمن يتخرج قبل موعده بفصل دراسي على الأقل دون مخالفات. وعلى الخريج إنهاء جميع التزاماته الشخصية والمالية والقانونية والسكنية في بلد الإيفاد. وقد يحق للمتفوقين التدريب الميداني الاختياري لمدة عام أو بعثة الماجستير.",
      status: "confirmed", sourceLabel: "Decree 197/2025, Articles 4(19), 20, 21, 25 and 27 (official copy on kcouk.org)", sourceUrl: "https://www.kcouk.org/wp-content/uploads/2025/07/MOHE-Rules-Regulations-17-7-2025.pdf"
    },
    // ---------------- Living abroad (researched 2026-11-15) ----------------
    {
      id: "au-housing", topic: "living", country: "Australia",
      questionEn: "Where do first-year international students live in Australia?",
      questionAr: "أين يسكن الطلاب الدوليون في سنتهم الأولى في أستراليا؟",
      answerEn: "Common choices are university rooms on or near campus, purpose-built student housing, homestay, or shared rentals.",
      answerAr: "من الخيارات الشائعة: غرف الجامعة داخل الحرم أو قربه، أو سكن طلابي مخصص، أو السكن مع عائلة (Homestay)، أو استئجار سكن مشترك.",
      detailsEn: "Study Australia says university places may be limited and a study offer does not guarantee a room, so contact your university early to check what is available and how to apply. Students under 18 must have their housing approved by their education provider before booking.",
      detailsAr: "يوضح موقع Study Australia أن أماكن السكن الجامعي قد تكون محدودة وأن القبول الدراسي لا يضمن غرفة، لذا تواصل مع جامعتك مبكرًا لمعرفة المتاح وطريقة التقديم. ويجب على الطلاب دون 18 سنة الحصول على موافقة المؤسسة التعليمية على السكن قبل الحجز.",
      status: "confirmed", sourceLabel: "Study Australia (Australian Government)", sourceUrl: "https://www.studyaustralia.gov.au/en/life-in-australia/accommodation"
    },
    {
      id: "au-living-cost", topic: "living", country: "Australia",
      questionEn: "How much money does the Australian student visa require for living costs?",
      questionAr: "ما المبلغ المطلوب لتكاليف المعيشة في تأشيرة الطالب الأسترالية؟",
      answerEn: "The student visa uses a living-cost figure of AUD 29,710 for 12 months for the student.",
      answerAr: "تعتمد تأشيرة الطالب مبلغ 29,710 دولارًا أستراليًا لتكاليف المعيشة لمدة 12 شهرًا للطالب.",
      detailsEn: "Home Affairs says this is the minimum for the visa, and real living costs may be much higher depending on the city. Course fees and travel are counted separately. Figure as shown on the Home Affairs Student visa (subclass 500) page, checked November 2026.",
      detailsAr: "تقول وزارة الشؤون الداخلية الأسترالية إن هذا هو الحد الأدنى المطلوب للتأشيرة، وقد تكون تكاليف المعيشة الفعلية أعلى بكثير حسب المدينة. وتُحسب الرسوم الدراسية وتكاليف السفر بشكل منفصل. الرقم كما ورد في صفحة تأشيرة الطالب (500) عند المراجعة في نوفمبر 2026.",
      status: "confirmed", sourceLabel: "Department of Home Affairs - Student visa (500)", sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
    },
    {
      id: "au-population", topic: "living", country: "Australia",
      questionEn: "What is the population of Australia?",
      questionAr: "كم عدد سكان أستراليا؟",
      answerEn: "Australia's population was 27,921,150 people at 31 March 2026.",
      answerAr: "بلغ عدد سكان أستراليا 27,921,150 نسمة في 31 مارس 2026.",
      detailsEn: "This is the estimated resident population from the Australian Bureau of Statistics (ABS), released 17 September 2026.",
      detailsAr: "هذا هو التقدير الرسمي لعدد السكان المقيمين الصادر عن مكتب الإحصاء الأسترالي (ABS) بتاريخ 17 سبتمبر 2026.",
      status: "confirmed", sourceLabel: "Australian Bureau of Statistics (ABS)", sourceUrl: "https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/latest-release"
    },
    {
      id: "au-muslim-community", topic: "living", country: "Australia",
      questionEn: "How big is the Muslim community in Australia?",
      questionAr: "ما حجم الجالية المسلمة في أستراليا؟",
      answerEn: "In the 2021 Census, 813,392 people (3.2% of the population) reported Islam as their religion.",
      answerAr: "في تعداد 2021، أفاد 813,392 شخصًا (3.2% من السكان) بأن ديانتهم الإسلام.",
      detailsEn: "The 2021 Census is the latest national census; the ABS reported that Islam had grown since the previous census.",
      detailsAr: "تعداد 2021 هو أحدث تعداد وطني، وقد أفاد مكتب الإحصاء الأسترالي بأن عدد المسلمين ازداد مقارنة بالتعداد السابق.",
      status: "confirmed", sourceLabel: "ABS - 2021 Census media release", sourceUrl: "https://www.abs.gov.au/media-centre/media-releases/2021-census-shows-changes-australias-religious-diversity"
    },
    {
      id: "au-mosques", topic: "living", country: "Australia",
      questionEn: "Are there mosques and Muslim student groups in Australia?",
      questionAr: "هل توجد مساجد وجمعيات طلابية إسلامية في أستراليا؟",
      answerEn: "Yes. Study Australia notes that several mosques regularly host iftar and suhoor meals during Ramadan.",
      answerAr: "نعم. يذكر موقع Study Australia أن عددًا من المساجد تقيم بانتظام وجبات الإفطار والسحور في رمضان.",
      detailsEn: "It also suggests joining local Muslim student groups. Halal food availability varies by campus and city, so check with your university.",
      detailsAr: "ويقترح الموقع أيضًا الانضمام إلى الجمعيات الطلابية الإسلامية المحلية. يختلف توفر الطعام الحلال حسب الحرم الجامعي والمدينة، لذا استفسر من جامعتك.",
      status: "confirmed", sourceLabel: "Study Australia - Ramadan away from home", sourceUrl: "https://www.studyaustralia.gov.au/en/tools-and-resources/tips-and-advice-for-students/seven-ways-to-celebrate-ramadan-away-from-home"
    },
    {
      id: "au-climate", topic: "living", country: "Australia",
      questionEn: "What is the weather like in Australia?",
      questionAr: "كيف هو الطقس في أستراليا؟",
      answerEn: "Australia has tropical weather in the north, subtropical across much of the centre, and temperate in the south.",
      answerAr: "مناخ أستراليا استوائي في الشمال، وشبه استوائي في معظم الوسط، ومعتدل في الجنوب.",
      detailsEn: "Seasons are the opposite of Kuwait: the Bureau of Meteorology defines summer as December to February and winter as June to August. Cities like Melbourne and Hobart have clear seasons; Brisbane has hot summers and mild winters.",
      detailsAr: "الفصول عكس الكويت: يحدد مكتب الأرصاد الجوية الصيف من ديسمبر إلى فبراير والشتاء من يونيو إلى أغسطس. مدن مثل ملبورن وهوبارت فصولها واضحة، أما بريزبن فصيفها حار وشتاؤها معتدل.",
      status: "confirmed", sourceLabel: "Bureau of Meteorology (BOM)", sourceUrl: "https://www.bom.gov.au/resources/learn-and-explore/climate-knowledge-centre/australian-climate-zones"
    },
    {
      id: "au-work", topic: "living", country: "Australia",
      questionEn: "Can I work while studying in Australia?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في أستراليا؟",
      answerEn: "The student visa allows up to 48 hours per fortnight (two weeks) while your course is in session.",
      answerAr: "تسمح تأشيرة الطالب بالعمل حتى 48 ساعة كل أسبوعين أثناء فترة الدراسة.",
      detailsEn: "When your course is not in session (official breaks), student visa holders can work unlimited hours. Home Affairs advises students not to rely on work to support themselves. Your scholarship rules may also apply.",
      detailsAr: "أما خلال العطل الرسمية للدراسة فيمكن لحاملي تأشيرة الطالب العمل دون حد للساعات. وتنصح وزارة الشؤون الداخلية بعدم الاعتماد على العمل لتغطية المعيشة. وقد تنطبق عليك أيضًا شروط البعثة.",
      status: "confirmed", sourceLabel: "Department of Home Affairs - Student visa (500)", sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
    },
    {
      id: "au-health-insurance", topic: "living", country: "Australia",
      questionEn: "Do I need health insurance in Australia?",
      questionAr: "هل أحتاج إلى تأمين صحي في أستراليا؟",
      answerEn: "Yes. Student visa holders must have Overseas Student Health Cover (OSHC), a health insurance for international students.",
      answerAr: "نعم. يجب على حاملي تأشيرة الطالب امتلاك تأمين OSHC، وهو تأمين صحي خاص بالطلاب الدوليين.",
      detailsEn: "OSHC must come from an approved Australian insurer and cover your whole stay. If you apply from outside Australia, the cover must start on the day you arrive, not the day your course starts.",
      detailsAr: "يجب أن يكون التأمين من شركة أسترالية معتمدة وأن يغطي كامل مدة إقامتك. وإذا قدّمت من خارج أستراليا فيجب أن يبدأ التأمين من يوم وصولك، لا من يوم بدء الدراسة.",
      status: "confirmed", sourceLabel: "Department of Home Affairs - Student visa (500)", sourceUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
    },
    {
      id: "au-emergency", topic: "living", country: "Australia",
      questionEn: "What is the emergency number in Australia?",
      questionAr: "ما رقم الطوارئ في أستراليا؟",
      answerEn: "Call Triple Zero (000) for police, fire or ambulance; the call is free from any phone.",
      answerAr: "اتصل بالرقم 000 للشرطة أو الإطفاء أو الإسعاف، والاتصال مجاني من أي هاتف.",
      detailsEn: "Do not dial 911; that is a US number. For non-urgent police help, the South Australian Government lists 131 444.",
      detailsAr: "لا تتصل بالرقم 911 فهو رقم أمريكي. ولطلب مساعدة الشرطة في الحالات غير العاجلة، تذكر حكومة جنوب أستراليا الرقم 131 444.",
      status: "confirmed", sourceLabel: "South Australian Government (sa.gov.au)", sourceUrl: "https://www.sa.gov.au/topics/emergencies-and-safety/emergency-phone-numbers"
    },
    {
      id: "au-kuwait-embassy-emergency", topic: "living", country: "Australia",
      questionEn: "Who do Kuwaiti students call in an emergency outside office hours in Australia?",
      questionAr: "بمن يتصل الطالب الكويتي في حالة طارئة خارج أوقات الدوام في أستراليا؟",
      answerEn: "The Kuwait Embassy in Australia emergency line is (+61) 04 5555-9099, for emergencies only.",
      answerAr: "رقم طوارئ سفارة دولة الكويت في أستراليا هو 9099-5555 04 (61+)، للحالات الطارئة فقط.",
      detailsEn: "It is for use outside official hours, on public holidays and weekends, and not for academic matters. The Kuwait Cultural Office in Canberra is on (+61) 02 62861166, 9 am to 3 pm.",
      detailsAr: "يُستخدم خارج أوقات الدوام الرسمي وفي العطل الرسمية وعطلة نهاية الأسبوع، وليس للأمور الأكاديمية. أما المكتب الثقافي الكويتي في كانبرا فرقمه 62861166 02 (61+)، من 9 صباحًا حتى 3 عصرًا.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office in Australia", sourceUrl: "https://www.kuwaitculture.org.au/"
    },
    {
      id: "au-under-18", topic: "living", country: "Australia",
      questionEn: "What if the student is under 18 when arriving in Australia?",
      questionAr: "ماذا لو كان عمر الطالب أقل من 18 سنة عند الوصول إلى أستراليا؟",
      answerEn: "Students under 18 must have approved welfare arrangements, either travelling with a family companion or living in family housing (homestay).",
      answerAr: "يجب أن يكون لدى الطلاب دون 18 سنة ترتيبات رعاية معتمدة، إما بالسفر مع مرافق من العائلة أو بالسكن لدى عائلة (Homestay).",
      detailsEn: "The Kuwait Cultural Office says a companion can be a father, mother, brother or sister aged at least 21. Family-housing start dates are usually two weeks before classes, and the student cannot arrive before that date.",
      detailsAr: "يوضح المكتب الثقافي الكويتي أن المرافق يمكن أن يكون الأب أو الأم أو الأخ أو الأخت بعمر لا يقل عن 21 سنة. ويبدأ السكن العائلي عادة قبل أسبوعين من بدء الدراسة، ولا يمكن للطالب الوصول قبل ذلك التاريخ.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office in Australia; Home Affairs", sourceUrl: "https://www.kuwaitculture.org.au/"
    },
    {
      id: "nz-housing", topic: "living", country: "New Zealand",
      questionEn: "Where do first-year international students live in New Zealand?",
      questionAr: "أين يسكن الطلاب الدوليون في سنتهم الأولى في نيوزيلندا؟",
      answerEn: "Many first-year students live in halls of residence; other options are homestay or renting a flat with others.",
      answerAr: "يسكن كثير من طلاب السنة الأولى في السكن الجامعي (Halls of residence)، ومن الخيارات الأخرى السكن مع عائلة أو استئجار شقة مشتركة.",
      detailsEn: "Halls are arranged through your education provider and must be organised before you arrive. You usually have your own bedroom and share bathrooms and kitchens; some halls include meals.",
      detailsAr: "يتم ترتيب السكن الجامعي عن طريق مؤسستك التعليمية ويجب ترتيبه قبل وصولك. عادة تكون لك غرفة نوم خاصة مع مشاركة الحمامات والمطبخ، وبعض أماكن السكن تشمل الوجبات.",
      status: "confirmed", sourceLabel: "NauMai NZ (Study with New Zealand)", sourceUrl: "https://www.naumainz.studywithnewzealand.govt.nz/studying-in-nz/before-your-arrival/accommodation-types"
    },
    {
      id: "nz-living-funds", topic: "living", country: "New Zealand",
      questionEn: "How much money does New Zealand require for living costs?",
      questionAr: "ما المبلغ المطلوب لتكاليف المعيشة في نيوزيلندا؟",
      answerEn: "Self-funded tertiary students must show NZD 20,000 for each year of study.",
      answerAr: "يجب على طلاب التعليم العالي الذين يموّلون أنفسهم إثبات 20,000 دولار نيوزيلندي عن كل سنة دراسية.",
      detailsEn: "For study shorter than one year, it is NZD 1,667 per month (Fee Paying Student Visa). Students on a foreign government scholarship can use a separate visa where their government confirms it pays tuition and living costs.",
      detailsAr: "وللدراسة الأقصر من سنة يكون المبلغ 1,667 دولارًا نيوزيلنديًا شهريًا (تأشيرة الطالب على نفقته). أما طلاب البعثات الحكومية الأجنبية فيمكنهم استخدام تأشيرة مختلفة تؤكد فيها حكومتهم أنها تدفع الرسوم وتكاليف المعيشة.",
      status: "confirmed", sourceLabel: "Immigration New Zealand - Fee Paying Student Visa", sourceUrl: "https://www.immigration.govt.nz/visas/fee-paying-student-visa/"
    },
    {
      id: "nz-government-scholarship-visa", topic: "living", country: "New Zealand",
      questionEn: "Is there a special New Zealand visa for government-sponsored students?",
      questionAr: "هل توجد تأشيرة نيوزيلندية خاصة بطلاب البعثات الحكومية؟",
      answerEn: "Yes. The Foreign Government Supported Student Visa is for students with a foreign government scholarship.",
      answerAr: "نعم. تأشيرة الطالب المدعوم من حكومة أجنبية مخصصة للطلاب الحاصلين على بعثة حكومية.",
      detailsEn: "Your government's letter must agree to pay tuition fees and living expenses, and your country must have an education agreement with New Zealand. Immigration NZ asks Kuwaiti citizens to supply a citizenship certificate screenshot from the Sahel app, with its QR code.",
      detailsAr: "يجب أن يتضمن خطاب حكومتك الالتزام بدفع الرسوم الدراسية وتكاليف المعيشة، وأن يكون لبلدك اتفاقية تعليمية مع نيوزيلندا. وتطلب الهجرة النيوزيلندية من المواطنين الكويتيين تقديم صورة شاشة لشهادة الجنسية من تطبيق سهل تتضمن رمز QR.",
      status: "confirmed", sourceLabel: "Immigration New Zealand - Foreign Government Supported Student Visa", sourceUrl: "https://www.immigration.govt.nz/visas/foreign-government-supported-student-visa/"
    },
    {
      id: "nz-population", topic: "living", country: "New Zealand",
      questionEn: "What is the population of New Zealand?",
      questionAr: "كم عدد سكان نيوزيلندا؟",
      answerEn: "New Zealand's estimated population was 5,357,300 at 30 June 2026 (provisional).",
      answerAr: "بلغ العدد التقديري لسكان نيوزيلندا 5,357,300 نسمة في 30 يونيو 2026 (رقم أولي).",
      detailsEn: "This Stats NZ estimate was released on 18 August 2026. The population grew by 36,400 (0.7%) in the year to June 2026.",
      detailsAr: "صدر هذا التقدير عن هيئة الإحصاء النيوزيلندية في 18 أغسطس 2026، وقد زاد عدد السكان بمقدار 36,400 (0.7%) خلال السنة المنتهية في يونيو 2026.",
      status: "confirmed", sourceLabel: "Stats NZ - National population estimates", sourceUrl: "https://www.stats.govt.nz/information-releases/national-population-estimates-at-30-june-2026/"
    },
    {
      id: "nz-muslim-community", topic: "living", country: "New Zealand",
      questionEn: "How big is the Muslim community in New Zealand?",
      questionAr: "ما حجم الجالية المسلمة في نيوزيلندا؟",
      answerEn: "In the 2023 Census, 75,138 people (1.5% of the population) reported Islam as their religion.",
      answerAr: "في تعداد 2023، أفاد 75,138 شخصًا (1.5% من السكان) بأن ديانتهم الإسلام.",
      detailsEn: "This was up from 1.3% in the 2018 Census. The 2023 Census is the latest New Zealand census.",
      detailsAr: "وارتفعت النسبة من 1.3% في تعداد 2018. ويُعد تعداد 2023 أحدث تعداد في نيوزيلندا.",
      status: "confirmed", sourceLabel: "Stats NZ - 2023 Census highlights", sourceUrl: "https://www.stats.govt.nz/information-releases/2023-census-population-dwelling-and-housing-highlights/"
    },
    {
      id: "nz-halal-religion", topic: "living", country: "New Zealand",
      questionEn: "Can I practise my religion and get halal food in New Zealand?",
      questionAr: "هل يمكنني ممارسة ديني والحصول على طعام حلال في نيوزيلندا؟",
      answerEn: "Yes. New Zealand protects freedom of religion, and discriminating against someone because of their religion is against the law.",
      answerAr: "نعم. تحمي نيوزيلندا حرية الدين، والتمييز ضد أي شخص بسبب دينه مخالف للقانون.",
      detailsEn: "The official student guide advises telling your hall of residence, hostel or host family about halal food needs ahead of time, and checking whether your university has prayer spaces or religious student groups.",
      detailsAr: "ينصح الدليل الرسمي للطلاب بإبلاغ السكن الجامعي أو العائلة المضيفة مسبقًا بحاجتك إلى طعام حلال، والتأكد من وجود أماكن للصلاة أو جمعيات طلابية دينية في جامعتك.",
      status: "confirmed", sourceLabel: "NauMai NZ - Religious freedom", sourceUrl: "https://www.naumainz.studywithnewzealand.govt.nz/discover-new-zealand/life-and-culture-in-nz/religious-freedom"
    },
    {
      id: "nz-climate", topic: "living", country: "New Zealand",
      questionEn: "What is the weather like in New Zealand?",
      questionAr: "كيف هو الطقس في نيوزيلندا؟",
      answerEn: "The climate ranges from warm subtropical in the far north to cool temperate in the far south.",
      answerAr: "يتراوح المناخ بين شبه استوائي دافئ في أقصى الشمال ومعتدل بارد في أقصى الجنوب.",
      detailsEn: "Mean annual temperatures range from 10°C in the south to 16°C in the north. The coldest month is usually July and the warmest is January or February. Summer UV levels are often very high.",
      detailsAr: "يتراوح متوسط درجات الحرارة السنوية بين 10 درجات مئوية في الجنوب و16 درجة في الشمال. أبرد شهر عادة يوليو وأدفأ شهر يناير أو فبراير. ومستويات الأشعة فوق البنفسجية في الصيف مرتفعة جدًا غالبًا.",
      status: "confirmed", sourceLabel: "NIWA / Earth Sciences New Zealand", sourceUrl: "https://niwa.co.nz/climate-and-weather/overview-new-zealands-climate"
    },
    {
      id: "nz-cold-houses", topic: "living", country: "New Zealand",
      questionEn: "Are houses warm in New Zealand?",
      questionAr: "هل البيوت دافئة في نيوزيلندا؟",
      answerEn: "Houses in New Zealand can be cold, and most do not have central heating.",
      answerAr: "قد تكون البيوت في نيوزيلندا باردة، ومعظمها بلا تدفئة مركزية.",
      detailsEn: "The official student guide says you may need to buy a heater for your room. It advises using heaters and electric blankets only to warm up, not leaving them on all night, for safety and lower bills.",
      detailsAr: "يذكر الدليل الرسمي للطلاب أنك قد تحتاج إلى شراء مدفأة لغرفتك، وينصح باستخدام المدافئ والبطانيات الكهربائية للتدفئة فقط وعدم تركها تعمل طوال الليل حفاظًا على السلامة وتقليل الفواتير.",
      status: "confirmed", sourceLabel: "NauMai NZ (Study with New Zealand)", sourceUrl: "https://www.naumainz.studywithnewzealand.govt.nz/studying-in-nz/before-your-arrival/accommodation-types"
    },
    {
      id: "nz-work", topic: "living", country: "New Zealand",
      questionEn: "Can I work while studying in New Zealand?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في نيوزيلندا؟",
      answerEn: "Eligible students can work up to 25 hours a week during study, and full-time in scheduled holidays.",
      answerAr: "يمكن للطلاب المؤهلين العمل حتى 25 ساعة أسبوعيًا أثناء الدراسة، وبدوام كامل في العطل الرسمية المجدولة.",
      detailsEn: "The limit rose from 20 to 25 hours on 3 November 2025 for new student visas. Your exact work rights are shown in your visa conditions. Your scholarship rules may also apply.",
      detailsAr: "ارتفع الحد من 20 إلى 25 ساعة اعتبارًا من 3 نوفمبر 2025 للتأشيرات الجديدة. وتظهر حقوق العمل الخاصة بك في شروط تأشيرتك، وقد تنطبق عليك أيضًا شروط البعثة.",
      status: "confirmed", sourceLabel: "Immigration New Zealand - Work rights change", sourceUrl: "https://www.immigration.govt.nz/about-us/news-centre/upcoming-changes-to-student-visa-work-rights/"
    },
    {
      id: "nz-health-insurance", topic: "living", country: "New Zealand",
      questionEn: "Do I need health insurance in New Zealand?",
      questionAr: "هل أحتاج إلى تأمين صحي في نيوزيلندا؟",
      answerEn: "Yes. Holding medical insurance for your whole stay is a condition of the student visa.",
      answerAr: "نعم. الاحتفاظ بتأمين طبي طوال مدة إقامتك شرط من شروط تأشيرة الطالب.",
      detailsEn: "When you apply, you declare that you will arrange and keep medical insurance while in New Zealand. The government-scholarship visa asks for full medical and travel insurance.",
      detailsAr: "عند التقديم تتعهد بترتيب تأمين طبي والاحتفاظ به أثناء وجودك في نيوزيلندا. وتطلب تأشيرة طلاب البعثات الحكومية تأمينًا طبيًا وتأمين سفر شاملين.",
      status: "confirmed", sourceLabel: "Immigration New Zealand - Foreign Government Supported Student Visa", sourceUrl: "https://www.immigration.govt.nz/visas/foreign-government-supported-student-visa/"
    },
    {
      id: "nz-emergency", topic: "living", country: "New Zealand",
      questionEn: "What is the emergency number in New Zealand?",
      questionAr: "ما رقم الطوارئ في نيوزيلندا؟",
      answerEn: "Call 111 for police, fire or ambulance in an emergency.",
      answerAr: "اتصل بالرقم 111 للشرطة أو الإطفاء أو الإسعاف في حالات الطوارئ.",
      detailsEn: "Call 111 when someone is hurt or in danger, or a crime is happening. If you are unsure, call 111 and ask the operator. For non-emergencies, Police use the 105 service.",
      detailsAr: "اتصل بالرقم 111 إذا أصيب شخص أو كان في خطر، أو عند وقوع جريمة. وإذا لم تكن متأكدًا فاتصل بالرقم 111 واسأل الموظف. وللحالات غير الطارئة تستخدم الشرطة خدمة 105.",
      status: "confirmed", sourceLabel: "New Zealand Police", sourceUrl: "https://www.police.govt.nz/contact-us/111-police-emergency"
    },
    {
      id: "nz-kuwait-embassy-emergency", topic: "living", country: "New Zealand",
      questionEn: "Who do Kuwaiti students call in an emergency outside office hours in New Zealand?",
      questionAr: "بمن يتصل الطالب الكويتي في حالة طارئة خارج أوقات الدوام في نيوزيلندا؟",
      answerEn: "The Kuwait Embassy in New Zealand emergency line is (+64) 21 468 683, for emergencies only.",
      answerAr: "رقم طوارئ سفارة دولة الكويت في نيوزيلندا هو 683 468 21 (64+)، للحالات الطارئة فقط.",
      detailsEn: "It is for use outside official hours, on public holidays and weekends, and not for academic matters. Students in New Zealand are served by the Kuwait Cultural Office in Australia.",
      detailsAr: "يُستخدم خارج أوقات الدوام الرسمي وفي العطل الرسمية وعطلة نهاية الأسبوع، وليس للأمور الأكاديمية. ويتابع المكتب الثقافي الكويتي في أستراليا شؤون الطلاب في نيوزيلندا.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office in Australia", sourceUrl: "https://www.kuwaitculture.org.au/"
    },
    {
      id: "nz-driving", topic: "living", country: "New Zealand",
      questionEn: "Can I drive in New Zealand with my Kuwaiti licence?",
      questionAr: "هل يمكنني القيادة في نيوزيلندا برخصتي الكويتية؟",
      answerEn: "If you arrived on or after 1 November 2026, you can drive on a valid overseas car licence for 12 months.",
      answerAr: "إذا وصلت في 1 نوفمبر 2026 أو بعده، يمكنك القيادة برخصة أجنبية سارية لمدة 12 شهرًا.",
      detailsEn: "If the licence is not in English, you also need an accurate English translation or an international driving permit. After the period ends, you must convert to a New Zealand licence or stop driving. Leaving and re-entering restarts the time limit.",
      detailsAr: "إذا لم تكن الرخصة باللغة الإنجليزية فتحتاج أيضًا إلى ترجمة إنجليزية دقيقة أو رخصة قيادة دولية. وبعد انتهاء المدة يجب تحويلها إلى رخصة نيوزيلندية أو التوقف عن القيادة. والخروج من البلد ثم العودة يعيد احتساب المدة من جديد.",
      status: "confirmed", sourceLabel: "NZ Transport Agency Waka Kotahi", sourceUrl: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads/time-limit-extended-for-driving-on-an-overseas-licence"
    },
    {
      id: "mt-housing", topic: "living", country: "Malta",
      questionEn: "Where do international students live in Malta?",
      questionAr: "أين يسكن الطلاب الدوليون في مالطا؟",
      answerEn: "The University of Malta encourages students to book Campus Hub, a residence next to the main campus in Msida.",
      answerAr: "تشجع جامعة مالطا الطلاب على الحجز في Campus Hub، وهو سكن بجوار الحرم الرئيسي في منطقة مسيدا.",
      detailsEn: "Campus Hub is run by a third party and is booked online through the university's accommodation page. Demand is high, so book as soon as you get your acceptance letter. Private flats need extra paperwork (registered lease, Housing Authority forms) that can delay the residence permit.",
      detailsAr: "يُدار Campus Hub من جهة خارجية ويُحجز إلكترونيًا عبر صفحة السكن في موقع الجامعة. الطلب مرتفع، لذا احجز فور حصولك على خطاب القبول. أما الشقق الخاصة فتحتاج إلى أوراق إضافية (عقد إيجار مسجل ونماذج هيئة الإسكان) قد تؤخر تصريح الإقامة.",
      status: "confirmed", sourceLabel: "University of Malta - Accommodation", sourceUrl: "https://www.um.edu.mt/international/students/accommodation/"
    },
    {
      id: "mt-living-funds", topic: "living", country: "Malta",
      questionEn: "How much money does Malta require non-EU students to show?",
      questionAr: "ما المبلغ الذي تطلبه مالطا من الطلاب من خارج الاتحاد الأوروبي؟",
      answerEn: "For the student visa, funds must equal at least 75% of Malta's national minimum wage for every month of study.",
      answerAr: "لتأشيرة الطالب، يجب ألا تقل الأموال عن 75% من الحد الأدنى الوطني للأجور في مالطا عن كل شهر دراسة.",
      detailsEn: "You show this with 3 months of bank statements and a recent bank certificate; sponsored students add sponsor documents. For 2026 the national minimum wage is EUR 229.44 per week (DIER). The later residence permit stage uses its own threshold, so check Identità.",
      detailsAr: "يُثبت ذلك بكشوف حساب بنكية لآخر 3 أشهر وشهادة بنكية حديثة، ويضيف الطلاب المكفولون مستندات الكفيل. والحد الأدنى للأجور لعام 2026 هو 229.44 يورو أسبوعيًا (إدارة علاقات العمل DIER). ولمرحلة تصريح الإقامة لاحقًا حد مالي خاص، لذا راجع موقع Identità.",
      status: "confirmed", sourceLabel: "Identità - Student National Visa checklist", sourceUrl: "https://identita.gov.mt/wp-content/uploads/2025/08/03a.-List-of-Required-Documents-Student_National_Visa.pdf"
    },
    {
      id: "mt-population", topic: "living", country: "Malta",
      questionEn: "What is the population of Malta?",
      questionAr: "كم عدد سكان مالطا؟",
      answerEn: "Malta and Gozo had an estimated 588,254 people at the end of 2025.",
      answerAr: "بلغ العدد التقديري لسكان مالطا وغوزو 588,254 نسمة في نهاية عام 2025.",
      detailsEn: "This is up 2.4% from the previous year, according to the National Statistics Office (NSO) release of 9 July 2026.",
      detailsAr: "ويمثل ذلك زيادة بنسبة 2.4% عن العام السابق، وفقًا لبيان المكتب الوطني للإحصاء (NSO) الصادر في 9 يوليو 2026.",
      status: "confirmed", sourceLabel: "NSO Malta - World Population Day 2026", sourceUrl: "https://nso.gov.mt/world-population-day-11-july-2026/"
    },
    {
      id: "mt-muslim-community", topic: "living", country: "Malta",
      questionEn: "How big is the Muslim community in Malta?",
      questionAr: "ما حجم الجالية المسلمة في مالطا؟",
      answerEn: "In the 2021 Census, 17,454 residents aged 15 and over said they belong to Islam.",
      answerAr: "في تعداد 2021، أفاد 17,454 من المقيمين بعمر 15 سنة فأكثر بأنهم ينتمون إلى الإسلام.",
      detailsEn: "This is about 3.9% of residents aged 15 and over; most residents (82.6%) identified as Roman Catholic. The religion question was asked only of people aged 15 and over.",
      detailsAr: "ويمثل ذلك نحو 3.9% من المقيمين بعمر 15 سنة فأكثر، بينما عرّف معظم السكان (82.6%) أنفسهم بأنهم كاثوليك. وقد طُرح سؤال الدين على من بلغوا 15 سنة فأكثر فقط.",
      status: "unconfirmed", sourceLabel: "NSO Malta - Census 2021 Final Report Vol. 1", sourceUrl: "https://nso.gov.mt/themes_publications/census-of-population-and-housing-2021-final-report-population-migration-and-other-social-characteristics-volume-1/"
    },
    {
      id: "mt-climate", topic: "living", country: "Malta",
      questionEn: "What is the weather like in Malta?",
      questionAr: "كيف هو الطقس في مالطا؟",
      answerEn: "Malta has a semi-arid Mediterranean climate with long, dry, hot summers and mild, wet winters.",
      answerAr: "مناخ مالطا متوسطي شبه جاف، صيفه طويل حار وجاف، وشتاؤه معتدل وممطر.",
      detailsEn: "Rain usually falls between September and April, and the months in between are dry. Annual rainfall averages about 500 mm.",
      detailsAr: "تهطل الأمطار عادة بين سبتمبر وأبريل، وتكون بقية الأشهر جافة. ويبلغ متوسط الأمطار السنوية نحو 500 ملم.",
      status: "confirmed", sourceLabel: "Energy and Water Agency - 3rd River Basin Management Plan", sourceUrl: "https://energywateragency.gov.mt/wp-content/uploads/2023/09/Chapter-1-Introduction-Final.pdf"
    },
    {
      id: "mt-work", topic: "living", country: "Malta",
      questionEn: "Can I work while studying in Malta?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في مالطا؟",
      answerEn: "After your first 90 days, you may work up to 20 hours a week on a course at MQF Level 5 or above.",
      answerAr: "بعد أول 90 يومًا يمكنك العمل حتى 20 ساعة أسبوعيًا إذا كان برنامجك بالمستوى 5 أو أعلى في إطار المؤهلات المالطي (MQF).",
      detailsEn: "Your employer must first get an employment licence for you from Jobsplus, the national employment agency. Full-time work is not allowed during term, and the 20 hours count across all jobs. Your scholarship rules may also apply.",
      detailsAr: "يجب أن يحصل صاحب العمل أولًا على ترخيص عمل لك من Jobsplus (هيئة التوظيف الوطنية). ولا يُسمح بالعمل بدوام كامل أثناء الفصل الدراسي، وتُحسب الـ20 ساعة على جميع الوظائف معًا. وقد تنطبق عليك أيضًا شروط البعثة.",
      status: "confirmed", sourceLabel: "Identità - Study FAQs", sourceUrl: "https://identita.gov.mt/frequently-asked-questions/expatriates/non-eu-non-employment/study/"
    },
    {
      id: "mt-health-insurance", topic: "living", country: "Malta",
      questionEn: "Do I need health insurance in Malta?",
      questionAr: "هل أحتاج إلى تأمين صحي في مالطا؟",
      answerEn: "Yes, unless you study at the University of Malta, MCAST or ITS, whose students can use public healthcare free.",
      answerAr: "نعم، إلا إذا كنت تدرس في جامعة مالطا أو كلية MCAST أو معهد ITS، إذ يمكن لطلابها استخدام الرعاية الصحية العامة مجانًا.",
      detailsEn: "For the residence permit, Identità asks other students for private insurance with at least EUR 100,000 cover for your whole study period. For the visa itself, you need medical and travel insurance valid for Schengen with at least 30,000 cover.",
      detailsAr: "لتصريح الإقامة، تطلب هيئة Identità من بقية الطلاب تأمينًا خاصًا بتغطية لا تقل عن 100,000 يورو طوال مدة الدراسة. أما للتأشيرة نفسها فتحتاج إلى تأمين طبي وتأمين سفر صالح لمنطقة شنغن بتغطية لا تقل عن 30,000.",
      status: "confirmed", sourceLabel: "Identità - Study FAQs and visa checklist", sourceUrl: "https://identita.gov.mt/frequently-asked-questions/expatriates/non-eu-non-employment/study/"
    },
    {
      id: "mt-health-screening", topic: "living", country: "Malta",
      questionEn: "Is there a health check after arriving in Malta?",
      questionAr: "هل يوجد فحص صحي بعد الوصول إلى مالطا؟",
      answerEn: "Yes. Students on courses longer than 3 months must do a health screening after arriving.",
      answerAr: "نعم. يجب على الطلاب في البرامج التي تزيد مدتها عن 3 أشهر إجراء فحص صحي بعد الوصول.",
      detailsEn: "The screening, run under the Infectious Disease Prevention and Control Unit, may include a chest X-ray and blood tests. You then include the health screening approval in your residence permit application.",
      detailsAr: "قد يشمل الفحص، الذي يتم تحت إشراف وحدة الوقاية من الأمراض المعدية ومكافحتها، صورة أشعة للصدر وتحاليل دم. ثم تُرفق موافقة الفحص الصحي مع طلب تصريح الإقامة.",
      status: "confirmed", sourceLabel: "Identità - Study FAQs", sourceUrl: "https://identita.gov.mt/frequently-asked-questions/expatriates/non-eu-non-employment/study/"
    },
    {
      id: "mt-emergency", topic: "living", country: "Malta",
      questionEn: "What is the emergency number in Malta?",
      questionAr: "ما رقم الطوارئ في مالطا؟",
      answerEn: "Call 112 for police, medical help or fire; it is free from any phone, even without a SIM card.",
      answerAr: "اتصل بالرقم 112 للشرطة أو المساعدة الطبية أو الإطفاء، وهو مجاني من أي هاتف حتى بدون شريحة.",
      detailsEn: "The 112 service works 24 hours a day, 7 days a week. People with a hearing or speech impairment can use the police textphone service on 79770112.",
      detailsAr: "تعمل خدمة 112 على مدار الساعة طوال أيام الأسبوع. ويمكن لذوي الإعاقة السمعية أو النطقية استخدام خدمة الرسائل النصية للشرطة على الرقم 79770112.",
      status: "confirmed", sourceLabel: "Malta Police Force", sourceUrl: "https://pulizija.gov.mt/en/emergency-services-112/"
    },
    {
      id: "mt-driving", topic: "living", country: "Malta",
      questionEn: "Can I drive in Malta with my Kuwaiti licence?",
      questionAr: "هل يمكنني القيادة في مالطا برخصتي الكويتية؟",
      answerEn: "A licence issued outside Malta and the EU can be used in Malta for up to 12 months from your last entry.",
      answerAr: "يمكن استخدام رخصة صادرة من خارج مالطا والاتحاد الأوروبي في مالطا لمدة أقصاها 12 شهرًا من تاريخ آخر دخول.",
      detailsEn: "Direct exchange for a Maltese licence is only listed for EU/EEA countries, Switzerland, Australia, the UAE and the UK; Kuwait is not on that list. Transport Malta notes that an international driving permit is not the same as a licence.",
      detailsAr: "التبديل المباشر برخصة مالطية متاح فقط لدول الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية وسويسرا وأستراليا والإمارات والمملكة المتحدة، والكويت ليست ضمن هذه القائمة. وتنبه هيئة النقل المالطية إلى أن رخصة القيادة الدولية ليست بديلًا عن الرخصة.",
      status: "confirmed", sourceLabel: "Transport Malta", sourceUrl: "https://www.transport.gov.mt/land/driving/driving-licence/exchange-your-foreign-driving-licence-4541"
    },
    {
      id: "mt-transport", topic: "living", country: "Malta",
      questionEn: "How do students get around in Malta?",
      questionAr: "كيف يتنقل الطلاب في مالطا؟",
      answerEn: "With a personalised tallinja card, you can ride Malta's day and night bus routes for free.",
      answerAr: "باستخدام بطاقة tallinja الشخصية يمكنك ركوب حافلات مالطا النهارية والليلية مجانًا.",
      detailsEn: "The card also covers the Valletta ferry and the Barrakka Lift. A Student card is for those aged 17-59 in an approved full-time course longer than 3 months; registration costs EUR 25 plus postage.",
      detailsAr: "تشمل البطاقة أيضًا عبّارة فاليتا ومصعد باراكا. وبطاقة الطالب مخصصة لمن تتراوح أعمارهم بين 17 و59 سنة في برنامج دوام كامل معتمد تزيد مدته عن 3 أشهر، ورسوم التسجيل 25 يورو إضافة إلى رسوم البريد.",
      status: "confirmed", sourceLabel: "Malta Public Transport (national bus operator)", sourceUrl: "https://www.publictransport.com.mt/personalised-tallinja-card/"
    },
    {
      id: "mt-first-accommodation", topic: "living", country: "Malta",
      questionEn: "What accommodation proof does the Malta student visa need?",
      questionAr: "ما إثبات السكن المطلوب لتأشيرة الطالب في مالطا؟",
      answerEn: "You must show accommodation in your name for at least your first 14 nights in Malta.",
      answerAr: "يجب إثبات سكن باسمك لأول 14 ليلة على الأقل في مالطا.",
      detailsEn: "Accepted proof includes a signed letter from your school if it provides housing, a registered lease, a notarised host declaration, or a hotel booking of at least 14 nights in a row.",
      detailsAr: "من الإثباتات المقبولة: خطاب موقّع من المؤسسة التعليمية إذا كانت توفر السكن، أو عقد إيجار مسجل، أو إقرار من المضيف مصدّق من محامٍ أو كاتب عدل، أو حجز فندقي لا يقل عن 14 ليلة متتالية.",
      status: "confirmed", sourceLabel: "Identità - Student National Visa checklist", sourceUrl: "https://identita.gov.mt/wp-content/uploads/2025/08/03a.-List-of-Required-Documents-Student_National_Visa.pdf"
    },
    {
      id: "uk-housing", topic: "living", country: "United Kingdom",
      questionEn: "Where do first-year students usually live in the UK?",
      questionAr: "أين يسكن طلاب السنة الأولى عادةً في المملكة المتحدة؟",
      answerEn: "Most UK universities offer first-year students a room in university halls (student residences run by the university).",
      answerAr: "تقدّم معظم الجامعات البريطانية لطلاب السنة الأولى غرفة في السكن الجامعي (مساكن طلابية تديرها الجامعة).",
      detailsEn: "Other options are a private rented flat or a homestay (renting a room from a local family), which is easier to find outside London. The Kuwait Cultural Office does not arrange housing, so contact your university's accommodation office directly.",
      detailsAr: "من الخيارات الأخرى استئجار شقة خاصة أو السكن مع عائلة محلية (استئجار غرفة لدى عائلة)، ويسهل إيجاد ذلك خارج لندن. المكتب الثقافي الكويتي لا يرتّب السكن، لذا تواصل مباشرة مع مكتب السكن في جامعتك.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office London – Where to live", sourceUrl: "https://www.kcouk.org/Kco-uk/accommodation/"
    },
    {
      id: "uk-housing-apply", topic: "living", country: "United Kingdom",
      questionEn: "How do I apply for university halls in the UK, and is a room guaranteed?",
      questionAr: "كيف أقدّم على السكن الجامعي في المملكة المتحدة، وهل الغرفة مضمونة؟",
      answerEn: "You apply directly to your university, usually after you accept your offer of a place.",
      answerAr: "تقدّم الطلب مباشرة إلى جامعتك، وعادةً بعد قبولك لعرض القبول الدراسي.",
      detailsEn: "Each university has its own process and deadline, often in the summer for courses starting in September. Many universities say a room is guaranteed only if you apply by their deadline, so check your university's rules and apply early.",
      detailsAr: "لكل جامعة طريقتها وموعدها النهائي الخاص، وغالبًا ما يكون في الصيف للدراسة التي تبدأ في سبتمبر. كثير من الجامعات تضمن الغرفة فقط لمن يقدّم قبل الموعد النهائي، لذا راجع شروط جامعتك وقدّم مبكرًا.",
      status: "confirmed", sourceLabel: "UCAS – How to apply for student accommodation", sourceUrl: "https://www.ucas.com/money-and-student-life/student-life/accommodation-advice/how-to-apply-for-student-accommodation"
    },
    {
      id: "uk-private-rent-guarantor", topic: "living", country: "United Kingdom",
      questionEn: "Do I need a guarantor to rent a private flat in the UK?",
      questionAr: "هل أحتاج إلى كفيل لاستئجار شقة خاصة في المملكة المتحدة؟",
      answerEn: "Most private landlords ask for a UK-based guarantor: a person who agrees to pay the rent if you cannot.",
      answerAr: "يطلب معظم المؤجّرين في السكن الخاص كفيلًا مقيمًا في المملكة المتحدة، وهو شخص يتعهد بدفع الإيجار إن لم تستطع أنت.",
      detailsEn: "Some companies offer a guarantor service. Without a guarantor, you may be asked to pay rent for a longer period in advance.",
      detailsAr: "بعض الشركات تقدّم خدمة الكفالة. وإن لم يكن لديك كفيل فقد يُطلب منك دفع إيجار فترة أطول مقدّمًا.",
      status: "confirmed", sourceLabel: "UCAS – Accommodation for international students", sourceUrl: "https://www.ucas.com/international/international-students/studying-uk/accommodation-international-students"
    },
    {
      id: "uk-living-costs", topic: "living", country: "United Kingdom",
      questionEn: "How much money does the UK Student visa require for living costs?",
      questionAr: "ما مبلغ تكاليف المعيشة الذي تشترطه تأشيرة الطالب البريطانية؟",
      answerEn: "£1,529 per month for courses in London, or £1,171 per month elsewhere, for up to 9 months.",
      answerAr: "1,529 جنيهًا إسترلينيًا شهريًا للدراسة في لندن، أو 1,171 جنيهًا شهريًا خارجها، لمدة أقصاها 9 أشهر.",
      detailsEn: "This is the 'maintenance funds' amount: money you must show you have, held for at least 28 days in a row. If a sponsor (such as a government scholarship) pays your costs, you give evidence from the sponsor instead.",
      detailsAr: "هذا هو مبلغ \"نفقات المعيشة\" الذي يجب أن تثبت امتلاكه، على أن يبقى في حسابك 28 يومًا متتالية على الأقل. وإذا كانت جهة راعية (مثل بعثة حكومية) تتحمّل تكاليفك، فتقدّم إثباتًا من تلك الجهة.",
      status: "confirmed", sourceLabel: "GOV.UK – Student visa: Money", sourceUrl: "https://www.gov.uk/student-visa/money"
    },
    {
      id: "uk-health-surcharge", topic: "living", country: "United Kingdom",
      questionEn: "Do students pay for healthcare in the UK?",
      questionAr: "هل يدفع الطلاب مقابل الرعاية الصحية في المملكة المتحدة؟",
      answerEn: "Yes. Student visa applicants pay the Immigration Health Surcharge of £776 for each year of the visa.",
      answerAr: "نعم. يدفع المتقدّمون لتأشيرة الطالب رسوم الصحة للهجرة بقيمة 776 جنيهًا إسترلينيًا عن كل سنة من مدة التأشيرة.",
      detailsEn: "It is paid as part of the visa application, and the total depends on how long your visa lasts. It gives you access to the NHS (the UK's public health service).",
      detailsAr: "تُدفع هذه الرسوم ضمن طلب التأشيرة، ويعتمد المبلغ الإجمالي على مدة التأشيرة. وهي تتيح لك استخدام هيئة الخدمات الصحية الوطنية (NHS)، وهي نظام الصحة العام في بريطانيا.",
      status: "confirmed", sourceLabel: "GOV.UK – Healthcare surcharge: how much you pay", sourceUrl: "https://www.gov.uk/healthcare-immigration-application/how-much-pay"
    },
    {
      id: "uk-kco-health-insurance", topic: "living", country: "United Kingdom",
      questionEn: "Do Kuwaiti scholarship students in the UK have extra health insurance?",
      questionAr: "هل لدى طلاب البعثات الكويتية في المملكة المتحدة تأمين صحي إضافي؟",
      answerEn: "Yes. For 2026/2027 the Kuwait Cultural Office provides medical and dental insurance managed by the company Healix.",
      answerAr: "نعم. للعام الدراسي 2026/2027 يوفّر المكتب الثقافي الكويتي تأمينًا طبيًا وتأمينًا للأسنان تديره شركة Healix.",
      detailsEn: "Students register directly with Healix and use the 'My Healix' app. In an emergency, go to the A&E (Accident and Emergency) department of an NHS public hospital, because private hospitals do not offer 24-hour emergency care.",
      detailsAr: "يسجّل الطالب مباشرة لدى Healix ويستخدم تطبيق \"My Healix\". وفي الحالات الطارئة توجّه إلى قسم الحوادث والطوارئ (A&E) في مستشفى حكومي تابع لـ NHS، لأن المستشفيات الخاصة لا تقدّم خدمة طوارئ على مدار 24 ساعة.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office London – Healix health insurance", sourceUrl: "https://www.kcouk.org/healix-health-insurance-management/"
    },
    {
      id: "uk-work", topic: "living", country: "United Kingdom",
      questionEn: "Can I work while studying in the UK?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في المملكة المتحدة؟",
      answerEn: "Degree-level students on a Student visa can work up to 20 hours a week in term time and full time in holidays.",
      answerAr: "يمكن لطلاب المرحلة الجامعية بتأشيرة الطالب العمل حتى 20 ساعة أسبوعيًا خلال الفصل الدراسي، وبدوام كامل في العطلات.",
      detailsEn: "Your university may set a lower limit, so check its rules. Student visa holders cannot be self-employed or work in some jobs, such as professional sportsperson or sports coach.",
      detailsAr: "قد تضع جامعتك حدًا أقل، لذا راجع أنظمتها. ولا يجوز لحامل تأشيرة الطالب العمل لحسابه الخاص أو في بعض الوظائف مثل الرياضي المحترف أو المدرب الرياضي.",
      status: "confirmed", sourceLabel: "UKCISA – Working during your studies", sourceUrl: "https://www.ukcisa.org.uk/student-advice/working/student-work/"
    },
    {
      id: "uk-population", topic: "living", country: "United Kingdom",
      questionEn: "What is the population of the UK?",
      questionAr: "كم عدد سكان المملكة المتحدة؟",
      answerEn: "About 69.5 million people (69,483,900) in mid-2025, according to the Office for National Statistics.",
      answerAr: "نحو 69.5 مليون نسمة (69,483,900) في منتصف عام 2025، بحسب مكتب الإحصاءات الوطنية.",
      detailsEn: "This estimate was published on 1 October 2026. The UK is made up of England, Scotland, Wales and Northern Ireland.",
      detailsAr: "نُشر هذا التقدير في 1 أكتوبر 2026. وتتكوّن المملكة المتحدة من إنجلترا واسكتلندا وويلز وأيرلندا الشمالية.",
      status: "confirmed", sourceLabel: "ONS – Population estimates, mid-2025", sourceUrl: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/annualmidyearpopulationestimates/mid2025"
    },
    {
      id: "uk-muslim-community", topic: "living", country: "United Kingdom",
      questionEn: "How big is the Muslim community in the UK?",
      questionAr: "ما حجم الجالية المسلمة في المملكة المتحدة؟",
      answerEn: "In the 2021 Census, about 3.9 million people (6.5%) in England and Wales described their religion as Muslim.",
      answerAr: "في تعداد 2021، ذكر نحو 3.9 مليون شخص (6.5%) في إنجلترا وويلز أن دينهم الإسلام.",
      detailsEn: "In London the share was 15.0%, and in some areas it was much higher, such as Tower Hamlets in London (39.9%). These figures cover England and Wales only.",
      detailsAr: "بلغت النسبة في لندن 15.0%، وكانت أعلى بكثير في بعض المناطق مثل حي تاور هاملتس في لندن (39.9%). هذه الأرقام تخص إنجلترا وويلز فقط.",
      status: "confirmed", sourceLabel: "ONS – Religion, England and Wales: Census 2021", sourceUrl: "https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021"
    },
    {
      id: "uk-climate", topic: "living", country: "United Kingdom",
      questionEn: "What is the weather like in the UK?",
      questionAr: "كيف هو الطقس في المملكة المتحدة؟",
      answerEn: "The UK has a temperate climate with no dry season and warm (not hot) summers.",
      answerAr: "مناخ المملكة المتحدة معتدل، بلا موسم جاف، وصيفه دافئ وليس حارًا.",
      detailsEn: "The Met Office (the UK weather service) classes much of the UK as 'Cfb', meaning rain can fall in any season. Students from Kuwait should expect much cooler and wetter weather than at home.",
      detailsAr: "يصنّف مكتب الأرصاد الجوية البريطاني معظم المملكة المتحدة ضمن فئة \"Cfb\"، أي أن الأمطار قد تهطل في أي فصل. وعلى الطلاب القادمين من الكويت توقّع طقس أبرد وأكثر مطرًا بكثير.",
      status: "confirmed", sourceLabel: "Met Office – Climate zones", sourceUrl: "https://weather.metoffice.gov.uk/climate/climate-explained/climate-zones"
    },
    {
      id: "uk-emergency", topic: "living", country: "United Kingdom",
      questionEn: "What is the emergency phone number in the UK?",
      questionAr: "ما رقم الطوارئ في المملكة المتحدة؟",
      answerEn: "Call 999 in a life-threatening emergency.",
      answerAr: "اتصل بالرقم 999 في حالات الطوارئ التي تهدد الحياة.",
      detailsEn: "For urgent medical advice that is not life-threatening, or if you are unsure, use NHS 111 by phone or online; it can check your symptoms and tell you what to do.",
      detailsAr: "للحصول على استشارة طبية عاجلة في حالة لا تهدد الحياة، أو إن لم تكن متأكدًا، استخدم خدمة NHS 111 عبر الهاتف أو الإنترنت، إذ تقيّم أعراضك وترشدك إلى ما يجب فعله.",
      status: "confirmed", sourceLabel: "NHS – When to call 999", sourceUrl: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/"
    },
    {
      id: "uk-driving", topic: "living", country: "United Kingdom",
      questionEn: "Can I drive in the UK with my Kuwaiti driving licence?",
      questionAr: "هل يمكنني القيادة في المملكة المتحدة برخصة القيادة الكويتية؟",
      answerEn: "If you live in the UK, you can drive on a non-EU licence for a maximum of 12 months from becoming resident.",
      answerAr: "إذا كنت مقيمًا في المملكة المتحدة، يمكنك القيادة برخصة صادرة من خارج الاتحاد الأوروبي لمدة أقصاها 12 شهرًا من تاريخ إقامتك.",
      detailsEn: "After that you need a UK licence. Use the GOV.UK 'driving in Great Britain with a non-GB licence' checker to see what applies to your licence.",
      detailsAr: "بعد ذلك تحتاج إلى رخصة بريطانية. استخدم أداة الفحص على موقع GOV.UK الخاصة بالقيادة برخصة غير بريطانية لمعرفة ما ينطبق على رخصتك.",
      status: "confirmed", sourceLabel: "GOV.UK – The Highway Code, Annex 3", sourceUrl: "https://www.gov.uk/guidance/the-highway-code/annex-3-motor-vehicle-documentation-and-learner-driver-requirements"
    },
    {
      id: "uk-time-difference", topic: "living", country: "United Kingdom",
      questionEn: "What is the time difference between the UK and Kuwait?",
      questionAr: "ما فرق التوقيت بين المملكة المتحدة والكويت؟",
      answerEn: "The UK is 3 hours behind Kuwait in winter and 2 hours behind in summer.",
      answerAr: "تتأخر المملكة المتحدة عن الكويت 3 ساعات في الشتاء وساعتين في الصيف.",
      detailsEn: "UK clocks go forward one hour (British Summer Time) on 29 March 2026 and back on 25 October 2026; in 2027 the dates are 28 March and 31 October. Kuwait does not change its clocks (it stays at GMT+3).",
      detailsAr: "تُقدَّم الساعة في بريطانيا ساعة واحدة (التوقيت الصيفي) في 29 مارس 2026 وتُؤخَّر في 25 أكتوبر 2026، وفي 2027 يكون ذلك في 28 مارس و31 أكتوبر. أما الكويت فلا تغيّر توقيتها (تبقى على غرينتش +3).",
      status: "confirmed", sourceLabel: "GOV.UK – When do the clocks change?", sourceUrl: "https://www.gov.uk/when-do-the-clocks-change"
    },
    {
      id: "uk-kco-contact", topic: "living", country: "United Kingdom",
      questionEn: "How do I contact the Kuwait Cultural Office in the UK?",
      questionAr: "كيف أتواصل مع المكتب الثقافي الكويتي في المملكة المتحدة؟",
      answerEn: "Call the switchboard on +44 (0)20 7761 8500 or 8550; the office is at 60A Knightsbridge, London SW1X 7JX.",
      answerAr: "اتصل بالمقسم على الرقم ‎+44 (0)20 7761 8500 أو 8550، وعنوان المكتب: 60A Knightsbridge, London SW1X 7JX.",
      detailsEn: "The office handles scholarship matters such as monthly allowances and the student health insurance. For housing, contact your university directly.",
      detailsAr: "يتولى المكتب شؤون البعثة مثل المخصصات الشهرية والتأمين الصحي للطلاب. أما السكن فتواصل بشأنه مع جامعتك مباشرة.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office London", sourceUrl: "https://www.kcouk.org/"
    },
    {
      id: "ie-housing", topic: "living", country: "Ireland",
      questionEn: "Where do international students live in Ireland?",
      questionAr: "أين يسكن الطلاب الدوليون في أيرلندا؟",
      answerEn: "The main options are on-campus residences, private rented housing, or living with a host family.",
      answerAr: "الخيارات الرئيسية هي السكن داخل الحرم الجامعي، أو السكن الخاص المستأجر، أو السكن مع عائلة مضيفة.",
      detailsEn: "On-campus residences are usually shared apartments for 4 to 8 students, each with a private bedroom. They are often in high demand and hard to get, so contact your university's Accommodation Office early. Official sources do not say first-years are guaranteed a room.",
      detailsAr: "السكن الجامعي غالبًا شقق مشتركة تضم من 4 إلى 8 طلاب، لكل منهم غرفة نوم خاصة. ويكثر الطلب عليه ويصعب الحصول عليه، لذا تواصل مبكرًا مع مكتب السكن في جامعتك. ولا تذكر المصادر الرسمية أن الغرفة مضمونة لطلاب السنة الأولى.",
      status: "confirmed", sourceLabel: "Education in Ireland – Student accommodation", sourceUrl: "https://www.educationinireland.com/en/plan-your-study-abroad/student-accommodation"
    },
    {
      id: "ie-renting", topic: "living", country: "Ireland",
      questionEn: "How does renting a private room or flat work in Ireland?",
      questionAr: "كيف يتم استئجار غرفة أو شقة خاصة في أيرلندا؟",
      answerEn: "Rent is paid monthly in advance, and leases usually last 9 to 12 months.",
      answerAr: "يُدفع الإيجار شهريًا مقدّمًا، وتستمر عقود الإيجار عادةً من 9 إلى 12 شهرًا.",
      detailsEn: "A deposit of one month's rent is required, and you generally must give at least one month's notice before moving out. On-campus housing is usually paid in two instalments, in September and February.",
      detailsAr: "يُطلب تأمين يعادل إيجار شهر واحد، وعادةً يجب الإبلاغ قبل شهر على الأقل من الإخلاء. أما السكن الجامعي فيُدفع غالبًا على قسطين في سبتمبر وفبراير.",
      status: "confirmed", sourceLabel: "Education in Ireland – Student accommodation", sourceUrl: "https://www.educationinireland.com/en/plan-your-study-abroad/student-accommodation"
    },
    {
      id: "ie-living-costs", topic: "living", country: "Ireland",
      questionEn: "How much money must students show for living costs in Ireland?",
      questionAr: "ما المبلغ الذي يجب على الطالب إثباته لتكاليف المعيشة في أيرلندا؟",
      answerEn: "Students must show access to €10,000 for each year of study.",
      answerAr: "يجب على الطالب إثبات توفّر 10,000 يورو عن كل سنة دراسية.",
      detailsEn: "Irish immigration describes this as the estimated cost of living for a student for one academic year. Since 30 June 2025 the same amount applies to all non-EEA students; stays of 6 to 8 months need €833 per month.",
      detailsAr: "تصف سلطات الهجرة الأيرلندية هذا المبلغ بأنه التكلفة التقديرية لمعيشة الطالب لسنة دراسية واحدة. ومنذ 30 يونيو 2025 أصبح المبلغ نفسه مطلوبًا من جميع الطلاب من خارج المنطقة الاقتصادية الأوروبية، أما الإقامات من 6 إلى 8 أشهر فتتطلب 833 يورو شهريًا.",
      status: "confirmed", sourceLabel: "Irish Immigration Service – Student finance requirements", sourceUrl: "https://www.irishimmigration.ie/reminder-on-student-finance-requirements-from-30-june-2025/"
    },
    {
      id: "ie-registration", topic: "living", country: "Ireland",
      questionEn: "Do I need to register with immigration after arriving in Ireland?",
      questionAr: "هل يجب أن أسجّل لدى دائرة الهجرة بعد وصولي إلى أيرلندا؟",
      answerEn: "Yes. All non-EEA students staying over 90 days must register, and the registration fee is €300.",
      answerAr: "نعم. يجب على جميع الطلاب من خارج المنطقة الاقتصادية الأوروبية الذين يقيمون أكثر من 90 يومًا التسجيل، ورسوم التسجيل 300 يورو.",
      detailsEn: "You book a first-time appointment in advance through the immigration Customer Portal. When you register, you must show proof of private medical insurance.",
      detailsAr: "تحجز موعد التسجيل الأول مسبقًا عبر بوابة خدمة العملاء التابعة لدائرة الهجرة. وعند التسجيل يجب أن تقدّم إثباتًا على وجود تأمين طبي خاص.",
      status: "confirmed", sourceLabel: "Irish Immigration Service – FAQs for students", sourceUrl: "https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/"
    },
    {
      id: "ie-work", topic: "living", country: "Ireland",
      questionEn: "Can I work while studying in Ireland?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في أيرلندا؟",
      answerEn: "Yes. Students can work up to 20 hours a week in term time.",
      answerAr: "نعم. يمكن للطالب العمل حتى 20 ساعة أسبوعيًا خلال الفصل الدراسي.",
      detailsEn: "During June, July, August and September, and from 15 December to 15 January, students can work up to 40 hours a week.",
      detailsAr: "خلال أشهر يونيو ويوليو وأغسطس وسبتمبر، ومن 15 ديسمبر إلى 15 يناير، يمكن للطالب العمل حتى 40 ساعة أسبوعيًا.",
      status: "confirmed", sourceLabel: "Irish Immigration Service – FAQs for students", sourceUrl: "https://www.irishimmigration.ie/coming-to-study-in-ireland/frequently-asked-questions-for-students/"
    },
    {
      id: "ie-health-insurance", topic: "living", country: "Ireland",
      questionEn: "Do I need health insurance to study in Ireland?",
      questionAr: "هل أحتاج إلى تأمين صحي للدراسة في أيرلندا؟",
      answerEn: "Yes. All non-EEA students coming to Ireland must have private medical insurance.",
      answerAr: "نعم. يجب أن يكون لدى جميع الطلاب القادمين إلى أيرلندا من خارج المنطقة الاقتصادية الأوروبية تأمين طبي خاص.",
      detailsEn: "For Kuwaiti scholarship students, the Kuwait Cultural Office says to download the Vhi app and get your membership certificate from its Documents section. Keep it, because you need it for your residence permit application.",
      detailsAr: "بالنسبة لطلاب البعثات الكويتية، يطلب المكتب الثقافي الكويتي تنزيل تطبيق Vhi واستخراج شهادة العضوية من قسم المستندات فيه. احتفظ بها لأنك ستحتاجها عند طلب تصريح الإقامة.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office Ireland – New student", sourceUrl: "https://office.kuwaitcultural.ie/FreshmanStudent_en.aspx"
    },
    {
      id: "ie-bank-account", topic: "living", country: "Ireland",
      questionEn: "Which bank account should I open in Ireland?",
      questionAr: "أي حساب مصرفي يجب أن أفتحه في أيرلندا؟",
      answerEn: "The Kuwait Cultural Office advises opening an account with AIB or Bank of Ireland.",
      answerAr: "ينصح المكتب الثقافي الكويتي بفتح حساب لدى بنك AIB أو Bank of Ireland.",
      detailsEn: "You will need a letter from your university and your sponsorship letter from the Cultural Office. Send the office your bank details once the account is active; it must be active before any payment is made.",
      detailsAr: "ستحتاج إلى خطاب من جامعتك وخطاب الكفالة من المكتب الثقافي. أرسل بيانات حسابك إلى المكتب بعد تفعيله، إذ يجب أن يكون الحساب مفعّلًا قبل تحويل أي مبلغ.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office Ireland – New student", sourceUrl: "https://office.kuwaitcultural.ie/FreshmanStudent_en.aspx"
    },
    {
      id: "ie-attendance", topic: "living", country: "Ireland",
      questionEn: "Does attendance affect my scholarship allowance in Ireland?",
      questionAr: "هل يؤثر الحضور على مخصصات البعثة في أيرلندا؟",
      answerEn: "Yes. Attendance is compulsory and must be at least 85%.",
      answerAr: "نعم. الحضور إلزامي ويجب ألا يقل عن 85%.",
      detailsEn: "If your attendance falls below 85%, the Kuwait Cultural Office deducts the days you missed from your monthly allowance.",
      detailsAr: "إذا انخفضت نسبة حضورك عن 85%، يخصم المكتب الثقافي الكويتي أيام الغياب من مخصصاتك الشهرية.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office Ireland – New student", sourceUrl: "https://office.kuwaitcultural.ie/FreshmanStudent_en.aspx"
    },
    {
      id: "ie-population", topic: "living", country: "Ireland",
      questionEn: "What is the population of Ireland?",
      questionAr: "كم عدد سكان أيرلندا؟",
      answerEn: "About 5.53 million people (5,525,600) in April 2026, according to the Central Statistics Office.",
      answerAr: "نحو 5.53 مليون نسمة (5,525,600) في أبريل 2026، بحسب المكتب المركزي للإحصاء.",
      detailsEn: "The population grew by 66,900 people in the 12 months to April 2026.",
      detailsAr: "زاد عدد السكان بمقدار 66,900 نسمة خلال الاثني عشر شهرًا المنتهية في أبريل 2026.",
      status: "confirmed", sourceLabel: "CSO – Population and Migration Estimates, April 2026", sourceUrl: "https://www.cso.ie/en/releasesandpublications/ep/p-pme/populationandmigrationestimatesapril2026/keyfindings/"
    },
    {
      id: "ie-muslim-community", topic: "living", country: "Ireland",
      questionEn: "How big is the Muslim community in Ireland?",
      questionAr: "ما حجم الجالية المسلمة في أيرلندا؟",
      answerEn: "In the 2022 Census, 81,930 people said their religion was Islam, about 1.6% of the population.",
      answerAr: "في تعداد 2022، ذكر 81,930 شخصًا أن دينهم الإسلام، أي نحو 1.6% من السكان.",
      detailsEn: "This was 32% more than in the 2016 Census, although the CSO notes the religion question changed between the two censuses.",
      detailsAr: "يمثل ذلك زيادة بنسبة 32% عن تعداد 2016، مع أن المكتب المركزي للإحصاء يشير إلى أن سؤال الدين تغيّر بين التعدادين.",
      status: "confirmed", sourceLabel: "CSO – Census 2022 Profile 5 press statement", sourceUrl: "https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligion/"
    },
    {
      id: "ie-climate", topic: "living", country: "Ireland",
      questionEn: "What is the weather like in Ireland?",
      questionAr: "كيف هو الطقس في أيرلندا؟",
      answerEn: "Ireland's weather is shaped by the Atlantic Ocean: winters are cool and windy, and summers are mostly mild.",
      answerAr: "يتأثر طقس أيرلندا بالمحيط الأطلسي: الشتاء بارد وعاصف، والصيف معتدل في الغالب.",
      detailsEn: "Met Éireann (the Irish weather service) says Ireland does not have the extreme temperatures of many other countries at a similar latitude, and the weather is variable.",
      detailsAr: "تذكر هيئة الأرصاد الجوية الأيرلندية (Met Éireann) أن أيرلندا لا تشهد درجات الحرارة المتطرفة التي تعرفها دول كثيرة على خط العرض نفسه، وأن الطقس فيها متقلّب.",
      status: "confirmed", sourceLabel: "Met Éireann – Climate of Ireland", sourceUrl: "https://www.met.ie/climate/climate-of-ireland"
    },
    {
      id: "ie-emergency", topic: "living", country: "Ireland",
      questionEn: "What is the emergency phone number in Ireland?",
      questionAr: "ما رقم الطوارئ في أيرلندا؟",
      answerEn: "Call 112 or 999; both are free from any mobile or landline.",
      answerAr: "اتصل بالرقم 112 أو 999، وكلاهما مجاني من أي هاتف محمول أو أرضي.",
      detailsEn: "The operator connects you to an ambulance, the Gardaí (Irish police), the fire brigade or the coast guard. If you cannot make a voice call, you can text 112.",
      detailsAr: "يحوّلك موظف الطوارئ إلى الإسعاف أو الشرطة الأيرلندية (الغاردا) أو الإطفاء أو خفر السواحل. وإن لم تستطع إجراء مكالمة صوتية يمكنك إرسال رسالة نصية إلى 112.",
      status: "confirmed", sourceLabel: "gov.ie – How to contact emergency services", sourceUrl: "https://www.gov.ie/en/department-of-the-taoiseach/services/how-to-contact-emergency-services-in-ireland/"
    },
    {
      id: "ie-driving", topic: "living", country: "Ireland",
      questionEn: "Can I drive in Ireland with my Kuwaiti driving licence?",
      questionAr: "هل يمكنني القيادة في أيرلندا برخصة القيادة الكويتية؟",
      answerEn: "Visitors can drive on a valid non-EU licence for up to one year, but residents cannot keep using it.",
      answerAr: "يمكن للزائر القيادة برخصة سارية من خارج الاتحاد الأوروبي لمدة تصل إلى سنة، أما المقيم فلا يمكنه الاستمرار في استخدامها.",
      detailsEn: "You count as 'normally resident' if you usually live in Ireland at least 185 days a year. Residents must exchange their licence (only possible for countries with an agreement) or pass a theory test, get a learner permit, take lessons and pass a driving test.",
      detailsAr: "تُعدّ \"مقيمًا عادةً\" إذا كنت تعيش في أيرلندا 185 يومًا على الأقل في السنة. وعلى المقيم استبدال رخصته (وهذا متاح فقط لدول بينها وبين أيرلندا اتفاقية) أو اجتياز اختبار نظري والحصول على تصريح تعلّم وأخذ دروس ثم اجتياز اختبار القيادة.",
      status: "confirmed", sourceLabel: "NDLS – Exchange a foreign driving licence", sourceUrl: "https://www.ndls.ie/licensed-driver/exchange-my-foreign-driving-licence.html"
    },
    {
      id: "ie-kco-contact", topic: "living", country: "Ireland",
      questionEn: "How do I contact the Kuwait Cultural Office in Ireland?",
      questionAr: "كيف أتواصل مع المكتب الثقافي الكويتي في أيرلندا؟",
      answerEn: "Call 01-5310090 or email info@kuwaitcultural.ie, Monday to Friday, 9:00 to 16:00.",
      answerAr: "اتصل بالرقم 01-5310090 أو راسل info@kuwaitcultural.ie، من الاثنين إلى الجمعة، من 9:00 حتى 16:00.",
      detailsEn: "During Ramadan the hours are 10:00 to 14:00. To visit in person, book an appointment in advance. Each student is also assigned an academic advisor.",
      detailsAr: "في شهر رمضان يكون الدوام من 10:00 حتى 14:00. ولزيارة المكتب يجب حجز موعد مسبقًا. كما يُخصَّص لكل طالب مرشد أكاديمي.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office Ireland", sourceUrl: "https://www.kuwaitcultural.ie/"
    },
    {
      id: "us-housing", topic: "living", country: "United States",
      questionEn: "Where do international students live in the US?",
      questionAr: "أين يسكن الطلاب الدوليون في الولايات المتحدة؟",
      answerEn: "Most options are on-campus residence halls (dorms), off-campus apartments, or living with a host family.",
      answerAr: "الخيارات الرئيسية هي السكن الجامعي داخل الحرم (Dorms)، أو الشقق خارج الحرم، أو السكن مع عائلة مضيفة.",
      detailsEn: "Dorm rooms come with basic furniture and are usually shared. Some universities have first-year-only dorms. Apply for on-campus housing early, as places can fill up quickly; host families are not offered at every university.",
      detailsAr: "غرف السكن الجامعي مؤثثة بالأساسيات وغالبًا ما تكون مشتركة، ولدى بعض الجامعات مساكن مخصصة لطلاب السنة الأولى. قدّم على السكن الجامعي مبكرًا لأن الأماكن قد تمتلئ بسرعة، وليست كل الجامعات توفّر السكن مع عائلة مضيفة.",
      status: "unconfirmed", sourceLabel: "EducationUSA – Living on campus", sourceUrl: "https://educationusa.state.gov/experience-studying-usa/living-campus-united-states"
    },
    {
      id: "us-living-costs", topic: "living", country: "United States",
      questionEn: "How much money must I show for living costs in the US?",
      questionAr: "ما المبلغ الذي يجب أن أثبته لتكاليف المعيشة في الولايات المتحدة؟",
      answerEn: "There is no single national amount; each university sets its own estimate on your Form I-20.",
      answerAr: "لا يوجد مبلغ موحّد على مستوى الدولة، فكل جامعة تضع تقديرها الخاص في نموذج I-20 الخاص بك.",
      detailsEn: "The Form I-20 (the document your university issues for your student visa) lists estimated tuition and living expenses for up to 12 months. Your total funding, such as a scholarship, must meet or exceed these costs before the university can issue it.",
      detailsAr: "نموذج I-20 (الوثيقة التي تصدرها جامعتك لتأشيرة الطالب) يذكر الرسوم الدراسية وتكاليف المعيشة المقدّرة لمدة تصل إلى 12 شهرًا. ويجب أن يساوي مجموع تمويلك، مثل البعثة، هذه التكاليف أو يزيد عليها قبل أن تصدره الجامعة.",
      status: "confirmed", sourceLabel: "Study in the States (DHS) – Create initial Form I-20", sourceUrl: "https://studyinthestates.dhs.gov/sevis-help-hub/student-records/certificates-of-eligibility/create-initial-coe-form-i-20"
    },
    {
      id: "us-work", topic: "living", country: "United States",
      questionEn: "Can I work while studying in the US?",
      questionAr: "هل يمكنني العمل أثناء الدراسة في الولايات المتحدة؟",
      answerEn: "F-1 students may work on campus up to 20 hours a week during term, and full time during breaks.",
      answerAr: "يُسمح لطلاب تأشيرة F-1 بالعمل داخل الحرم الجامعي حتى 20 ساعة أسبوعيًا خلال الدراسة، وبدوام كامل في العطلات.",
      detailsEn: "The 20-hour limit covers all on-campus jobs together. Off-campus work needs special permission, which US immigration (USCIS) gives only in limited cases, such as severe economic hardship.",
      detailsAr: "حد العشرين ساعة يشمل جميع الوظائف داخل الحرم مجتمعة. أما العمل خارج الحرم فيحتاج إلى إذن خاص لا تمنحه دائرة الهجرة الأمريكية (USCIS) إلا في حالات محدودة، مثل الضائقة المالية الشديدة.",
      status: "confirmed", sourceLabel: "ICE SEVP – Employment", sourceUrl: "https://www.ice.gov/sevis/employment"
    },
    {
      id: "us-health-insurance", topic: "living", country: "United States",
      questionEn: "Do I need health insurance in the US?",
      questionAr: "هل أحتاج إلى تأمين صحي في الولايات المتحدة؟",
      answerEn: "F-1 students are responsible for buying health insurance for themselves while they study in the US.",
      answerAr: "طلاب تأشيرة F-1 مسؤولون عن شراء تأمين صحي لأنفسهم طوال فترة دراستهم في الولايات المتحدة.",
      detailsEn: "Health insurance requirements and fees differ from school to school. Ask your university's international student adviser (DSO) what is required and what it costs.",
      detailsAr: "تختلف متطلبات التأمين الصحي ورسومه من جامعة إلى أخرى. اسأل مستشار الطلاب الدوليين في جامعتك (DSO) عن المطلوب وتكلفته.",
      status: "confirmed", sourceLabel: "Study in the States (DHS) – FAQs", sourceUrl: "https://studyinthestates.dhs.gov/tools-menu/frequently-asked-questions"
    },
    {
      id: "us-population", topic: "living", country: "United States",
      questionEn: "What is the population of the United States?",
      questionAr: "كم عدد سكان الولايات المتحدة؟",
      answerEn: "About 341.8 million people on 1 July 2025, according to the US Census Bureau.",
      answerAr: "نحو 341.8 مليون نسمة في 1 يوليو 2025، بحسب مكتب الإحصاء الأمريكي.",
      detailsEn: "This estimate was released in January 2026. The population grew by 1.8 million (0.5%) between July 2024 and July 2025.",
      detailsAr: "صدر هذا التقدير في يناير 2026. وزاد عدد السكان بمقدار 1.8 مليون (0.5%) بين يوليو 2024 ويوليو 2025.",
      status: "confirmed", sourceLabel: "US Census Bureau – Vintage 2025 estimates", sourceUrl: "https://www.census.gov/newsroom/press-releases/2026/population-growth-slows.html"
    },
    {
      id: "us-muslim-community", topic: "living", country: "United States",
      questionEn: "How big is the Muslim community in the US?",
      questionAr: "ما حجم الجالية المسلمة في الولايات المتحدة؟",
      answerEn: "There is no official count, because the US census does not ask about religion.",
      answerAr: "لا يوجد إحصاء رسمي، لأن التعداد السكاني الأمريكي لا يسأل عن الدين.",
      detailsEn: "A 2023-24 survey by the Pew Research Center, an independent research organisation, found that about 1.2% of US adults are Muslim.",
      detailsAr: "وجد استطلاع أجراه مركز بيو للأبحاث (مؤسسة بحثية مستقلة) في 2023-2024 أن نحو 1.2% من البالغين في الولايات المتحدة مسلمون.",
      status: "unconfirmed", sourceLabel: "Pew Research Center – 2023-24 Religious Landscape Study", sourceUrl: "https://www.pewresearch.org/religion/2025/02/26/decline-of-christianity-in-the-us-has-slowed-may-have-leveled-off/"
    },
    {
      id: "us-climate", topic: "living", country: "United States",
      questionEn: "What is the weather like in the US?",
      questionAr: "كيف هو الطقس في الولايات المتحدة؟",
      answerEn: "The weather varies widely because the US is so large; it depends on which state you live in.",
      answerAr: "يختلف الطقس كثيرًا لأن الولايات المتحدة شاسعة، ويعتمد على الولاية التي تسكن فيها.",
      detailsEn: "The southern tips of Florida, Texas, California and Arizona average at least 21°C (70°F) a year. Yearly rain ranges from about 250 mm (10 inches) or less in the Southwest to over 1,270 mm (50 inches) in Florida.",
      detailsAr: "يبلغ متوسط الحرارة السنوي في الأطراف الجنوبية لولايات فلوريدا وتكساس وكاليفورنيا وأريزونا 21 درجة مئوية (70 فهرنهايت) على الأقل. ويتراوح المطر السنوي بين نحو 250 ملم (10 بوصات) أو أقل في الجنوب الغربي وأكثر من 1,270 ملم (50 بوصة) في فلوريدا.",
      status: "confirmed", sourceLabel: "NOAA Climate.gov – US climate normals maps", sourceUrl: "https://www.climate.gov/news-features/featured-images/new-maps-annual-average-temperature-and-precipitation-us-climate"
    },
    {
      id: "us-emergency", topic: "living", country: "United States",
      questionEn: "What is the emergency phone number in the US?",
      questionAr: "ما رقم الطوارئ في الولايات المتحدة؟",
      answerEn: "Call 911 for police, fire or ambulance; it is the universal emergency number for all phone services.",
      answerAr: "اتصل بالرقم 911 للشرطة أو الإطفاء أو الإسعاف، وهو رقم الطوارئ الموحّد لجميع خدمات الهاتف.",
      detailsEn: "A US law (the 911 Act of 1999) directs the Federal Communications Commission (FCC) to make 911 the universal emergency number. Save your university's campus security number too.",
      detailsAr: "يُلزم قانون أمريكي (قانون 911 لعام 1999) هيئة الاتصالات الفيدرالية (FCC) بجعل 911 رقم الطوارئ الموحّد. احفظ أيضًا رقم أمن الحرم في جامعتك.",
      status: "confirmed", sourceLabel: "FCC – 911 and E911 services", sourceUrl: "https://www.fcc.gov/general/9-1-1-and-e9-1-1-services"
    },
    {
      id: "us-driving", topic: "living", country: "United States",
      questionEn: "Can I drive in the US as an international student?",
      questionAr: "هل يمكنني القيادة في الولايات المتحدة كطالب دولي؟",
      answerEn: "F-1 students may be able to drive, but you must apply for and receive a licence from your state.",
      answerAr: "قد يُسمح لطلاب تأشيرة F-1 بالقيادة، لكن يجب التقدّم للحصول على رخصة من الولاية التي تسكن فيها.",
      detailsEn: "Apply at the local Department of Motor Vehicles (DMV), which may have a different name in some states. Rules differ from state to state, so check your state's DMV website.",
      detailsAr: "تقدّم بالطلب في إدارة المركبات المحلية (DMV)، وقد يختلف اسمها في بعض الولايات. وتختلف الأنظمة من ولاية إلى أخرى، لذا راجع موقع إدارة المركبات في ولايتك.",
      status: "confirmed", sourceLabel: "Study in the States (DHS) – FAQs", sourceUrl: "https://studyinthestates.dhs.gov/tools-menu/frequently-asked-questions"
    },
    {
      id: "us-social-security-number", topic: "living", country: "United States",
      questionEn: "Do I need a Social Security number in the US?",
      questionAr: "هل أحتاج إلى رقم الضمان الاجتماعي في الولايات المتحدة؟",
      answerEn: "You get a Social Security number (a US ID number used for work and tax) only if you are allowed to work.",
      answerAr: "تحصل على رقم الضمان الاجتماعي (رقم تعريف أمريكي يُستخدم للعمل والضرائب) فقط إذا كان مسموحًا لك بالعمل.",
      detailsEn: "Talk to your international student adviser (DSO) first. Wait about 10 days after arriving, and make sure your SEVIS record (the student visa database) has been active for at least two days, then apply in person at a Social Security office.",
      detailsAr: "تحدّث أولًا مع مستشار الطلاب الدوليين (DSO). انتظر نحو 10 أيام بعد وصولك، وتأكد أن سجلّك في نظام SEVIS (قاعدة بيانات تأشيرات الطلاب) نشط منذ يومين على الأقل، ثم قدّم طلبك شخصيًا في أحد مكاتب الضمان الاجتماعي.",
      status: "confirmed", sourceLabel: "Study in the States (DHS) – Obtaining a Social Security number", sourceUrl: "https://studyinthestates.dhs.gov/students/work/obtaining-a-social-security-number"
    },
    {
      id: "us-kco-contact", topic: "living", country: "United States",
      questionEn: "How do I contact the Kuwait Cultural Office in the US?",
      questionAr: "كيف أتواصل مع المكتب الثقافي الكويتي في الولايات المتحدة؟",
      answerEn: "The Kuwait Cultural Office in Washington, DC can be reached by phone on 202-364-2100.",
      answerAr: "يمكن التواصل مع المكتب الثقافي الكويتي في واشنطن العاصمة على الهاتف 202-364-2100.",
      detailsEn: "When this was checked in November 2026, the office website was down for maintenance and listed this number for enquiries.",
      detailsAr: "عند التحقق في نوفمبر 2026 كان موقع المكتب متوقفًا للصيانة، وقد ذكر هذا الرقم للاستفسارات.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office Washington DC", sourceUrl: "https://www.kuwaitculturedc.org/"
    },
    // ---------------- Living abroad (researched 2026-11-15) ----------------
    {
      id: "bh-entry", topic: "living", country: "Bahrain",
      questionEn: "Can a Kuwaiti student enter Bahrain without a visa?",
      questionAr: "هل يستطيع الطالب الكويتي دخول البحرين دون تأشيرة؟",
      answerEn: "Yes. Citizens of GCC countries can enter Bahrain using only their national ID card, with no visa.",
      answerAr: "نعم، يمكن لمواطني دول مجلس التعاون دخول البحرين ببطاقة الهوية الوطنية فقط، دون تأشيرة.",
      detailsEn: "The Bahrain National Portal says GCC nationals benefit from streamlined entry using their national ID cards. The page does not describe a separate residence permit for GCC citizens.",
      detailsAr: "تذكر البوابة الوطنية لمملكة البحرين أن مواطني دول مجلس التعاون يستفيدون من دخول مُيسّر باستخدام بطاقات الهوية الوطنية. ولا تذكر الصفحة تصريح إقامة خاصاً بمواطني دول المجلس.",
      status: "confirmed", sourceLabel: "Bahrain National Portal (bahrain.bh)", sourceUrl: "https://bahrain.bh/wps/portal/en/BNP/HereInBahrain/NationalIdentificationAndVisas"
    },
    {
      id: "bh-housing", topic: "living", country: "Bahrain",
      questionEn: "Do universities in Bahrain offer student housing?",
      questionAr: "هل توفّر الجامعات في البحرين سكناً للطلبة؟",
      answerEn: "Some do. Arabian Gulf University students can use university housing in Sakhir, run by the University of Bahrain.",
      answerAr: "بعضها يوفّر ذلك؛ إذ يمكن لطلبة جامعة الخليج العربي السكن في السكن الجامعي بالصخير التابع لجامعة البحرين.",
      detailsEn: "The Kuwait Cultural Office says this housing costs a nominal fee, and students may also rent privately (with a rental contract in their name on official Bahraini paper). RCSI Bahrain offers university housing for one year only.",
      detailsAr: "يذكر المكتب الثقافي الكويتي أن هذا السكن برسوم رمزية، ويمكن للطالب السكن الخاص على أن يقدّم عقد إيجار باسمه على الورق الرسمي لمملكة البحرين. وتوفّر الكلية الملكية للجراحين في إيرلندا (البحرين) سكناً جامعياً لمدة عام واحد فقط.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office in Bahrain – FAQ", sourceUrl: "https://kcobh.org/%d8%a7%d9%84%d8%a3%d8%b3%d8%a6%d9%84%d8%a9_%d8%a7%d9%84%d8%b4%d8%a7%d8%a6%d8%b9%d8%a9/"
    },
    {
      id: "bh-population", topic: "living", country: "Bahrain",
      questionEn: "What is the population of Bahrain?",
      questionAr: "كم يبلغ عدد سكان البحرين؟",
      answerEn: "Bahrain had 1,603,260 people in mid-2025.",
      answerAr: "بلغ عدد سكان البحرين 1,603,260 نسمة في منتصف عام 2025.",
      detailsEn: "Of these, 746,097 were Bahraini and 857,163 were non-Bahraini (June 2025 estimate published by the Information & eGovernment Authority).",
      detailsAr: "منهم 746,097 بحرينياً و857,163 غير بحريني، وفق تقدير يونيو 2025 الصادر عن هيئة المعلومات والحكومة الإلكترونية.",
      status: "confirmed", sourceLabel: "Bahrain Open Data Portal (Information & eGovernment Authority)", sourceUrl: "https://www.data.gov.bh/explore/dataset/01-population-by-nationality-sex-agegroups/"
    },
    {
      id: "bh-climate", topic: "living", country: "Bahrain",
      questionEn: "What is the weather like in Bahrain?",
      questionAr: "كيف هو الطقس في البحرين؟",
      answerEn: "Bahrain is warm most of the year, with an average temperature of 28.5°C.",
      answerAr: "البحرين دافئة معظم أيام السنة، ويبلغ متوسط درجة الحرارة فيها 28.5 درجة مئوية.",
      detailsEn: "Citing the Meteorological Directorate, the national portal also lists average relative humidity of 55%, about 10.4 hours of sunshine a day and precipitation of 13.4 mm.",
      detailsAr: "ونقلاً عن إدارة الأرصاد الجوية، تذكر البوابة الوطنية أيضاً أن متوسط الرطوبة النسبية 55%، ومتوسط سطوع الشمس نحو 10.4 ساعات يومياً، وكمية الأمطار 13.4 ملم.",
      status: "confirmed", sourceLabel: "Bahrain National Portal – About Bahrain", sourceUrl: "https://www.bahrain.bh/wps/portal/en/BNP/BahrainAtAGlance/AboutBahrain"
    },
    {
      id: "bh-health-insurance", topic: "living", country: "Bahrain",
      questionEn: "Do Kuwaiti students in Bahrain get health insurance?",
      questionAr: "هل يحصل الطلبة الكويتيون في البحرين على تأمين صحي؟",
      answerEn: "Yes. The Kuwait Cultural Office in Bahrain provides health insurance for Kuwaiti students studying there.",
      answerAr: "نعم، يوفّر المكتب الثقافي الكويتي في البحرين تأميناً صحياً للطلبة الكويتيين الدارسين هناك.",
      detailsEn: "The office signed its current health insurance contract with the Bahraini Kuwaiti insurance company on 20 September 2026. The coverage limits are explained in a brochure on the office's health insurance page.",
      detailsAr: "وقّع المكتب عقد التأمين الصحي الحالي مع الشركة البحرينية الكويتية بتاريخ 20 سبتمبر 2026، وتوضّح كراسة منشورة في صفحة التأمين الصحي بموقع المكتب حدود التغطية.",
      status: "confirmed", sourceLabel: "Kuwait Cultural Office in Bahrain – Health insurance", sourceUrl: "https://kcobh.org/%d8%a7%d9%84%d8%aa%d8%a3%d9%85%d9%8a%d9%86-%d8%a7%d9%84%d8%b5%d8%ad%d9%8a/"
    },
    {
      id: "bh-public-hospitals", topic: "living", country: "Bahrain",
      questionEn: "Do Kuwaitis use Bahrain's government hospitals?",
      questionAr: "هل يستفيد الكويتيون من المستشفيات الحكومية في البحرين؟",
      answerEn: "Yes. In 2025, 1,392 Kuwaiti citizens used health services in Bahrain's government hospitals.",
      answerAr: "نعم، استفاد 1,392 مواطناً كويتياً من الخدمات الصحية في المستشفيات الحكومية بالبحرين في عام 2025.",
      detailsEn: "This Ministry of Health dataset counts GCC citizens who benefited from government hospital services each year; the 2025 total for all GCC nationalities was 10,369. It does not say whether the treatment was free.",
      detailsAr: "تحصي بيانات وزارة الصحة هذه عدد مواطني دول مجلس التعاون المستفيدين من خدمات المستشفيات الحكومية سنوياً، وبلغ مجموعهم 10,369 في عام 2025. ولا توضّح البيانات ما إذا كان العلاج مجانياً.",
      status: "confirmed", sourceLabel: "Bahrain Open Data Portal (Ministry of Health)", sourceUrl: "https://www.data.gov.bh/explore/dataset/01-number-of-gcc-citizens-health-services-in-government-hospitals/"
    },
    {
      id: "bh-emergency", topic: "living", country: "Bahrain",
      questionEn: "What is the emergency phone number in Bahrain?",
      questionAr: "ما رقم الطوارئ في البحرين؟",
      answerEn: "Dial 999 for police, fire and ambulance in Bahrain.",
      answerAr: "اتصل بالرقم 999 للشرطة والإطفاء والإسعاف في البحرين.",
      detailsEn: "The national portal says 999 covers all emergency services and that all 999 calls are free.",
      detailsAr: "تذكر البوابة الوطنية أن الرقم 999 يغطي جميع خدمات الطوارئ، وأن جميع المكالمات إليه مجانية.",
      status: "confirmed", sourceLabel: "Bahrain National Portal – Emergency Call Centre", sourceUrl: "https://bahrain.bh/wps/portal/en/!ut/p/z0/fYy7EoIwEEV_JQ31Rh2B1keBjqOWsA0T4oqrcQMhOvL30tlZ3nPOXEAoAcW8uTWRvRg37QrTerZb6iLfaF0cz1udnoo8m2frhT4sYA_4P5ge-N73uAK0XiJ9IpSNdDVJokf_CsrxlRSLaswtGJ4oPSm0JJZpSHQgZyJdVPQd2-EnR2WNc8qSxEDQPbD6AuuFmrw!"
    },
    {
      id: "bh-currency", topic: "living", country: "Bahrain",
      questionEn: "What currency is used in Bahrain?",
      questionAr: "ما العملة المستخدمة في البحرين؟",
      answerEn: "The Bahraini dinar (BHD), pegged at 0.376 dinars to one US dollar.",
      answerAr: "الدينار البحريني، وسعر صرفه مثبّت عند 0.376 دينار للدولار الأمريكي الواحد.",
      detailsEn: "The Central Bank of Bahrain states that the Bahraini dinar is pegged to the US dollar at this fixed rate.",
      detailsAr: "يذكر مصرف البحرين المركزي أن الدينار البحريني مربوط بالدولار الأمريكي عند هذا السعر الثابت.",
      status: "confirmed", sourceLabel: "Central Bank of Bahrain – Monetary Policy", sourceUrl: "https://www.cbb.gov.bh/monetary-policy/"
    },
    {
      id: "bh-time-weekend", topic: "living", country: "Bahrain",
      questionEn: "What is the time difference with Kuwait, and which days are the weekend in Bahrain?",
      questionAr: "ما فرق التوقيت مع الكويت، وما أيام العطلة الأسبوعية في البحرين؟",
      answerEn: "Bahrain is GMT+3, the same time as Kuwait, and the weekend is Friday and Saturday.",
      answerAr: "توقيت البحرين هو غرينتش +3، أي نفس توقيت الكويت، والعطلة الأسبوعية يوما الجمعة والسبت.",
      detailsEn: "The national portal lists the time zone as 3 hours ahead of GMT and the weekly holidays as Friday and Saturday.",
      detailsAr: "تذكر البوابة الوطنية أن التوقيت متقدم 3 ساعات على توقيت غرينتش، وأن العطلة الأسبوعية يوما الجمعة والسبت.",
      status: "confirmed", sourceLabel: "Bahrain National Portal – About Bahrain", sourceUrl: "https://www.bahrain.bh/wps/portal/en/BNP/BahrainAtAGlance/AboutBahrain"
    },
    {
      id: "bh-road-travel", topic: "living", country: "Bahrain",
      questionEn: "Can I travel from Kuwait to Bahrain by road?",
      questionAr: "هل يمكنني السفر من الكويت إلى البحرين براً؟",
      answerEn: "Yes, through Saudi Arabia: the 25 km King Fahd Causeway links Saudi Arabia with Bahrain.",
      answerAr: "نعم، عبر المملكة العربية السعودية؛ إذ يربط جسر الملك فهد بطول 25 كم بين السعودية والبحرين.",
      detailsEn: "The Bahrain portal says the causeway is 25 km long and 23.3 m wide, and that vehicle insurance for crossing it can be bought online. Passport and customs authorities of both countries work on the causeway.",
      detailsAr: "تذكر البوابة البحرينية أن طول الجسر 25 كم وعرضه 23.3 متراً، وأنه يمكن شراء تأمين المركبات العابرة له إلكترونياً. وتعمل على الجسر جهات الجوازات والجمارك في البلدين.",
      status: "confirmed", sourceLabel: "Bahrain National Portal – King Fahd Causeway", sourceUrl: "https://www.bahrain.bh/wps/portal/en/!ut/p/z0/fcy7DoIwFIDhV-nCfCpGYPUyVGPEEbqQA61QwbaUg5e3F1_A8U--_CChAGnxaVok4ywOS5cyqVbHDRfZnnNxuR54kossjdPdOj_HcAL5HywHcx9HuQXZOEv6TVDU1lcYIo61m4lRp1lvbKvcI-K1C0qHiaFVzLtAU8SDHpC0YuS8aZb-WXbDTrEG50m_8AO-l-UXOpuDjg!!"
    },
    {
      id: "bh-kuwaiti-students", topic: "living", country: "Bahrain",
      questionEn: "How many Kuwaiti students study at universities in Bahrain?",
      questionAr: "كم عدد الطلبة الكويتيين في جامعات البحرين؟",
      answerEn: "In 2025/2026, 1,144 Kuwaiti students were enrolled in Bahrain's higher education institutions.",
      answerAr: "في العام الدراسي 2025/2026 كان 1,144 طالباً كويتياً مسجّلين في مؤسسات التعليم العالي بالبحرين.",
      detailsEn: "Higher Education Council data show 902 Kuwaiti students in public institutions and 242 in private institutions that year.",
      detailsAr: "تُظهر بيانات مجلس التعليم العالي وجود 902 طالب كويتي في المؤسسات الحكومية و242 في المؤسسات الخاصة في ذلك العام.",
      status: "confirmed", sourceLabel: "Bahrain Open Data Portal (Higher Education Council)", sourceUrl: "https://www.data.gov.bh/explore/dataset/01a-students-in-gov-hec-by-nationality-1a-gcc/"
    },
    {
      id: "bh-driving", topic: "living", country: "Bahrain",
      questionEn: "Can I drive in Bahrain with my Kuwaiti driving licence?",
      questionAr: "هل يمكنني القيادة في البحرين برخصة القيادة الكويتية؟",
      answerEn: "Reportedly yes for short trips: a GCC licence is valid for brief visits across the GCC.",
      answerAr: "حسب ما نُشر، نعم في الزيارات القصيرة؛ إذ تُعدّ رخصة دول المجلس صالحة للزيارات القصيرة في دول المجلس.",
      detailsEn: "A September 2026 news report on remarks by the GCC Secretary-General says citizens who move to live in another GCC state can usually exchange their licence for a local one. We could not confirm this on an official Bahraini page.",
      detailsAr: "ذكر تقرير إخباري في سبتمبر 2026 عن تصريحات الأمين العام لمجلس التعاون أن المواطن الذي ينتقل للإقامة في دولة خليجية أخرى يمكنه غالباً استبدال رخصته برخصة محلية. ولم نتمكن من تأكيد ذلك من صفحة بحرينية رسمية.",
      status: "unconfirmed", sourceLabel: "Khaleej Times (news report, 9 Sep 2026)", sourceUrl: "https://www.khaleejtimes.com/gcc-travel-citizens-easier-driving-licence-recognition-edicated-lanes-security-linking"
    },
    {
      id: "sa-entry", topic: "living", country: "Saudi Arabia",
      questionEn: "Can a Kuwaiti student enter Saudi Arabia with the Kuwaiti civil ID?",
      questionAr: "هل يستطيع الطالب الكويتي دخول السعودية بالبطاقة المدنية الكويتية؟",
      answerEn: "Reportedly yes: Saudi Passports restored the national ID card as a valid travel document for GCC citizens in 2022.",
      answerAr: "حسب ما نُشر، نعم؛ فقد أعادت الجوازات السعودية في 2022 اعتماد بطاقة الهوية الوطنية وثيقة سفر لمواطني دول المجلس.",
      detailsEn: "On 29 April 2022 the General Directorate of Passports (Jawazat) lifted the COVID-19 suspension on using national ID cards for GCC citizens travelling to and from the Kingdom. We could not open an official Saudi page confirming the current rule.",
      detailsAr: "في 29 أبريل 2022 رفعت المديرية العامة للجوازات تعليق استخدام بطاقة الهوية الوطنية لمواطني دول المجلس في السفر من المملكة وإليها، وهو تعليق فُرض بسبب كوفيد-19. ولم نتمكن من الاطلاع على صفحة سعودية رسمية تؤكد القاعدة الحالية.",
      status: "unconfirmed", sourceLabel: "Argaam (news report, Apr 2022)", sourceUrl: "https://www.argaam.com/en/article/articledetail/id/1556437"
    },
    {
      id: "sa-housing", topic: "living", country: "Saudi Arabia",
      questionEn: "Do universities in Saudi Arabia offer student housing?",
      questionAr: "هل توفّر الجامعات في السعودية سكناً للطلبة؟",
      answerEn: "Yes for scholarship students: King Abdulaziz University gives housing to GCC students on its external scholarships.",
      answerAr: "نعم لطلبة المنح؛ إذ توفّر جامعة الملك عبدالعزيز السكن لطلبة دول الخليج الحاصلين على منحها الخارجية.",
      detailsEn: "KAU's cultural exchange scholarships are open to GCC states and Yemen. External scholarship holders get housing, a monthly stipend, healthcare and a yearly return air ticket; internal scholarship holders (already in the Kingdom) get a study seat and a monthly stipend.",
      detailsAr: "منح التبادل الثقافي في جامعة الملك عبدالعزيز متاحة لدول الخليج واليمن. يحصل أصحاب المنح الخارجية على السكن ومكافأة شهرية ورعاية صحية وتذكرة سفر سنوية ذهاباً وإياباً، ويحصل أصحاب المنح الداخلية (المقيمون في المملكة) على مقعد دراسي ومكافأة شهرية.",
      status: "confirmed", sourceLabel: "King Abdulaziz University – Cultural Exchange Scholarships", sourceUrl: "https://kau.edu.sa/en/page-legacy/cultural-exchange-scholarship-programs-arab-countries-gcc"
    },
    {
      id: "sa-health", topic: "living", country: "Saudi Arabia",
      questionEn: "Do scholarship students in Saudi Arabia get healthcare?",
      questionAr: "هل يحصل طلبة المنح في السعودية على رعاية صحية؟",
      answerEn: "Yes. King Abdulaziz University's external scholarships for GCC students include healthcare services.",
      answerAr: "نعم، تشمل المنح الخارجية لجامعة الملك عبدالعزيز لطلبة دول الخليج خدمات الرعاية الصحية.",
      detailsEn: "The same scholarship also includes housing, a monthly stipend and a yearly return air ticket during the regular study period.",
      detailsAr: "وتشمل المنحة نفسها أيضاً السكن ومكافأة شهرية وتذكرة سفر سنوية ذهاباً وإياباً خلال مدة الدراسة النظامية.",
      status: "confirmed", sourceLabel: "King Abdulaziz University – Cultural Exchange Scholarships", sourceUrl: "https://kau.edu.sa/en/page-legacy/cultural-exchange-scholarship-programs-arab-countries-gcc"
    },
    {
      id: "sa-population", topic: "living", country: "Saudi Arabia",
      questionEn: "What is the population of Saudi Arabia?",
      questionAr: "كم يبلغ عدد سكان السعودية؟",
      answerEn: "Saudi Arabia had about 35.3 million people in mid-2024.",
      answerAr: "بلغ عدد سكان السعودية نحو 35.3 مليون نسمة في منتصف عام 2024.",
      detailsEn: "Saudi citizens were over 19.6 million (55.6%) and non-Saudis about 15.7 million (44.4%), according to the General Authority for Statistics.",
      detailsAr: "تجاوز عدد المواطنين السعوديين 19.6 مليوناً (55.6%)، وبلغ عدد غير السعوديين نحو 15.7 مليوناً (44.4%)، وفق الهيئة العامة للإحصاء.",
      status: "confirmed", sourceLabel: "GASTAT – Population Estimates Publication 2024", sourceUrl: "https://www.stats.gov.sa/documents/20117/2435273/Population+Estimates+Statistics+2024+EN.pdf/9b71e303-5fd9-19cb-9913-850a9d521639"
    },
    {
      id: "sa-climate", topic: "living", country: "Saudi Arabia",
      questionEn: "What is the weather like in Saudi Arabia?",
      questionAr: "كيف هو الطقس في السعودية؟",
      answerEn: "Saudi Arabia has four seasons, from chilly winter breezes in January to peak desert heat in August.",
      answerAr: "تمرّ السعودية بأربعة فصول، من نسمات الشتاء الباردة في يناير إلى ذروة الحرّ الصحراوي في أغسطس.",
      detailsEn: "Visit Saudi notes that the climate varies between regions.",
      detailsAr: "ويذكر موقع روح السعودية أن المناخ يختلف من منطقة إلى أخرى.",
      status: "confirmed", sourceLabel: "Visit Saudi (Saudi Tourism Authority)", sourceUrl: "https://www.visitsaudi.com/en/stories/climate-and-seasons"
    },
    {
      id: "sa-emergency", topic: "living", country: "Saudi Arabia",
      questionEn: "What is the emergency phone number in Saudi Arabia?",
      questionAr: "ما رقم الطوارئ في السعودية؟",
      answerEn: "Call 911 for police in Riyadh, Makkah and the Eastern Province, and 999 in all other provinces.",
      answerAr: "اتصل بالرقم 911 للشرطة في الرياض ومكة المكرمة والمنطقة الشرقية، وبالرقم 999 في بقية المناطق.",
      detailsEn: "Visit Saudi also lists 997 as an emergency number.",
      detailsAr: "ويذكر موقع روح السعودية أيضاً الرقم 997 رقماً للطوارئ.",
      status: "confirmed", sourceLabel: "Visit Saudi – Saudi Travel Guide", sourceUrl: "https://www.visitsaudi.com/en/plan-your-trip/travel-guide"
    },
    {
      id: "sa-currency", topic: "living", country: "Saudi Arabia",
      questionEn: "What currency is used in Saudi Arabia?",
      questionAr: "ما العملة المستخدمة في السعودية؟",
      answerEn: "The Saudi riyal (SAR), kept at an official rate of 3.75 riyals to one US dollar.",
      answerAr: "الريال السعودي، ويُحافَظ على سعر صرفه الرسمي عند 3.75 ريال للدولار الأمريكي الواحد.",
      detailsEn: "The Saudi Central Bank (SAMA) has stated it remains committed to keeping the exchange rate at the official rate of 3.75 riyals per dollar.",
      detailsAr: "أكد البنك المركزي السعودي (ساما) التزامه بالمحافظة على سعر الصرف الرسمي عند 3.75 ريال للدولار.",
      status: "confirmed", sourceLabel: "Saudi Central Bank (SAMA)", sourceUrl: "https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx"
    },
    {
      id: "sa-weekend-time", topic: "living", country: "Saudi Arabia",
      questionEn: "Which days are the weekend in Saudi Arabia, and is there a time difference with Kuwait?",
      questionAr: "ما أيام العطلة الأسبوعية في السعودية، وهل يوجد فرق توقيت مع الكويت؟",
      answerEn: "The official weekend is Friday and Saturday, and Saudi Arabia uses GMT+3, the same time as Kuwait.",
      answerAr: "العطلة الأسبوعية الرسمية يوما الجمعة والسبت، وتعتمد السعودية توقيت غرينتش +3، أي نفس توقيت الكويت.",
      detailsEn: "A royal order in June 2013 moved the weekend of government bodies and universities from Thursday-Friday to Friday-Saturday. We could not confirm the weekend or time zone on a current official Saudi page.",
      detailsAr: "نقل أمر ملكي في يونيو 2013 العطلة الأسبوعية للجهات الحكومية والجامعات من الخميس والجمعة إلى الجمعة والسبت. ولم نتمكن من تأكيد العطلة أو التوقيت من صفحة سعودية رسمية حالية.",
      status: "unconfirmed", sourceLabel: "Arab News (news report, Jun 2013)", sourceUrl: "https://www.arabnews.com/news/455923"
    },
    {
      id: "sa-driving", topic: "living", country: "Saudi Arabia",
      questionEn: "Can I drive in Saudi Arabia with my Kuwaiti driving licence?",
      questionAr: "هل يمكنني القيادة في السعودية برخصة القيادة الكويتية؟",
      answerEn: "Reportedly yes for short trips: a GCC licence is valid for brief visits across the GCC.",
      answerAr: "حسب ما نُشر، نعم في الزيارات القصيرة؛ إذ تُعدّ رخصة دول المجلس صالحة للزيارات القصيرة في دول المجلس.",
      detailsEn: "A September 2026 news report on remarks by the GCC Secretary-General says citizens who move to live in another GCC state can usually exchange their licence for a local one. We could not confirm this on an official Saudi page.",
      detailsAr: "ذكر تقرير إخباري في سبتمبر 2026 عن تصريحات الأمين العام لمجلس التعاون أن المواطن الذي ينتقل للإقامة في دولة خليجية أخرى يمكنه غالباً استبدال رخصته برخصة محلية. ولم نتمكن من تأكيد ذلك من صفحة سعودية رسمية.",
      status: "unconfirmed", sourceLabel: "Khaleej Times (news report, 9 Sep 2026)", sourceUrl: "https://www.khaleejtimes.com/gcc-travel-citizens-easier-driving-licence-recognition-edicated-lanes-security-linking"
    },
    {
      id: "ae-entry", topic: "living", country: "United Arab Emirates",
      questionEn: "Does a Kuwaiti student need a visa to enter the UAE?",
      questionAr: "هل يحتاج الطالب الكويتي إلى تأشيرة لدخول الإمارات؟",
      answerEn: "No. GCC citizens do not need a visa to enter the UAE.",
      answerAr: "لا، لا يحتاج مواطنو دول مجلس التعاون إلى تأشيرة لدخول الإمارات.",
      detailsEn: "The official UAE government portal states this on its visa page (updated 13 July 2026). The page does not describe a residence permit for GCC citizens.",
      detailsAr: "تذكر البوابة الرسمية لحكومة الإمارات ذلك في صفحة التأشيرات (المحدّثة في 13 يوليو 2026)، ولا تذكر الصفحة تصريح إقامة لمواطني دول المجلس.",
      status: "confirmed", sourceLabel: "UAE Government Portal (u.ae)", sourceUrl: "https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae"
    },
    {
      id: "ae-entry-id", topic: "living", country: "United Arab Emirates",
      questionEn: "Can I enter the UAE with my Kuwaiti civil ID instead of a passport?",
      questionAr: "هل يمكنني دخول الإمارات بالبطاقة المدنية الكويتية بدلاً من جواز السفر؟",
      answerEn: "Reportedly yes: since 29 April 2022, GCC citizens can enter the UAE using their ID cards only.",
      answerAr: "حسب ما نُشر، نعم؛ فمنذ 29 أبريل 2022 يمكن لمواطني دول المجلس دخول الإمارات ببطاقات الهوية فقط.",
      detailsEn: "This was announced in a joint statement by NCEMA and the Federal Authority for Identity, Citizenship, Customs and Port Security. The current u.ae visa page confirms visa-free entry but does not mention ID cards.",
      detailsAr: "أُعلن ذلك في بيان مشترك للهيئة الوطنية لإدارة الطوارئ والأزمات والكوارث والهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ. وتؤكد صفحة التأشيرات الحالية في البوابة الرسمية الدخول دون تأشيرة لكنها لا تذكر بطاقة الهوية.",
      status: "unconfirmed", sourceLabel: "Gulf News (news report, Apr 2022)", sourceUrl: "https://gulfnews.com/uae/government/emiratis-gcc-nationals-can-now-enter-uae-using-their-id-cards-only-1.87531805"
    },
    {
      id: "ae-housing-aus", topic: "living", country: "United Arab Emirates",
      questionEn: "Does the American University of Sharjah offer student housing?",
      questionAr: "هل توفّر الجامعة الأمريكية في الشارقة سكناً للطلبة؟",
      answerEn: "Yes. Over 1,400 students live in separate men's and women's residential halls on campus.",
      answerAr: "نعم، يسكن أكثر من 1,400 طالب وطالبة في سكن جامعي داخل الحرم، مع مبانٍ منفصلة للطلاب والطالبات.",
      detailsEn: "Housing is for full-time registered students only. New students apply online after receiving the admission letter and pay a refundable AED 1,000 maintenance deposit and an AED 5,000 seat reservation. Rooms are given first come, first served.",
      detailsAr: "السكن مخصص للطلبة المسجّلين بدوام كامل فقط. يتقدم الطالب الجديد إلكترونياً بعد استلام خطاب القبول، ويدفع تأميناً قابلاً للاسترداد قدره 1,000 درهم ورسوم حجز قدرها 5,000 درهم، وتُوزَّع الغرف حسب أسبقية التقديم.",
      status: "confirmed", sourceLabel: "American University of Sharjah – Residential Halls", sourceUrl: "https://www.aus.edu/life-at-aus/residential-halls"
    },
    {
      id: "ae-housing-sharjah", topic: "living", country: "United Arab Emirates",
      questionEn: "Does the University of Sharjah offer student housing?",
      questionAr: "هل توفّر جامعة الشارقة سكناً للطلبة؟",
      answerEn: "Yes. The University of Sharjah runs student dormitories, including for students from outside the UAE.",
      answerAr: "نعم، تدير جامعة الشارقة سكناً للطلبة يشمل الطلبة القادمين من خارج الإمارات.",
      detailsEn: "The women's dormitory has 13 residential buildings at two sites (the women's campus and near the medical colleges), with single, double and triple room options.",
      detailsAr: "يضم سكن الطالبات 13 مبنى سكنياً في موقعين (حرم الطالبات وقرب الكليات الطبية)، مع غرف فردية وثنائية وثلاثية.",
      status: "confirmed", sourceLabel: "University of Sharjah – Female Student Dormitory Section", sourceUrl: "https://www.sharjah.ac.ae/Services/Departments/Deanship-of-Student-Affairs-Women/Female-Student-Dormitory-Section"
    },
    {
      id: "ae-population", topic: "living", country: "United Arab Emirates",
      questionEn: "What is the population of the UAE?",
      questionAr: "كم يبلغ عدد سكان الإمارات؟",
      answerEn: "The UAE's population was 12.06 million in 2025.",
      answerAr: "بلغ عدد سكان الإمارات 12.06 مليون نسمة في عام 2025.",
      detailsEn: "This figure is from the Federal Competitiveness and Statistics Centre. The UAE government portal notes that expatriate residents outnumber UAE nationals.",
      detailsAr: "هذا الرقم صادر عن المركز الاتحادي للتنافسية والإحصاء. وتذكر البوابة الرسمية لحكومة الإمارات أن عدد المقيمين الوافدين يفوق عدد المواطنين.",
      status: "confirmed", sourceLabel: "Federal Competitiveness and Statistics Centre (FCSC)", sourceUrl: "https://fcsc.gov.ae/"
    },
    {
      id: "ae-climate", topic: "living", country: "United Arab Emirates",
      questionEn: "What is the weather like in the UAE?",
      questionAr: "كيف هو الطقس في الإمارات؟",
      answerEn: "The UAE has a desert climate: warm and sunny in winter, hot and humid in summer.",
      answerAr: "مناخ الإمارات صحراوي: دافئ ومشمس شتاءً، وحار ورطب صيفاً.",
      detailsEn: "The UAE government portal adds that it is generally cooler in the eastern mountains.",
      detailsAr: "وتضيف البوابة الرسمية لحكومة الإمارات أن الجو يكون عادةً أبرد في الجبال الشرقية.",
      status: "confirmed", sourceLabel: "UAE Government Portal – Fact sheet", sourceUrl: "https://u.ae/en/about-the-uae/fact-sheet"
    },
    {
      id: "ae-health", topic: "living", country: "United Arab Emirates",
      questionEn: "Do GCC rules give Kuwaitis equal treatment in health services in the UAE?",
      questionAr: "هل تمنح أنظمة مجلس التعاون الكويتيين معاملة متساوية في الخدمات الصحية بالإمارات؟",
      answerEn: "The GCC Economic Agreement says GCC citizens get the same treatment as local citizens in health services.",
      answerAr: "تنص الاتفاقية الاقتصادية لدول مجلس التعاون على معاملة مواطني دول المجلس معاملة المواطنين في الخدمات الصحية.",
      detailsEn: "Article 3 of the 2001 agreement lists education, health and social services among the areas of equal treatment. The UAE portal's health insurance page describes government schemes for UAE nationals (such as Abu Dhabi's Thiqa) and does not mention GCC citizens.",
      detailsAr: "تذكر المادة الثالثة من اتفاقية عام 2001 التعليم والصحة والخدمات الاجتماعية ضمن مجالات المساواة في المعاملة. وتصف صفحة التأمين الصحي في البوابة الرسمية للإمارات برامج حكومية للمواطنين الإماراتيين (مثل برنامج ثقة في أبوظبي) ولا تذكر مواطني دول المجلس.",
      status: "confirmed", sourceLabel: "GCC Economic Agreement 2001 (WTO RTA database copy)", sourceUrl: "https://rtais.wto.org/rtadocs/17/TOA/English/The%20Economic%20Agreement%20Between%20the%20GCC%20States.doc"
    },
    {
      id: "ae-emergency", topic: "living", country: "United Arab Emirates",
      questionEn: "What are the emergency phone numbers in the UAE?",
      questionAr: "ما أرقام الطوارئ في الإمارات؟",
      answerEn: "Call 999 for police, 998 for ambulance and 997 for fire (Civil Defence).",
      answerAr: "اتصل بالرقم 999 للشرطة، و998 للإسعاف، و997 للإطفاء (الدفاع المدني).",
      detailsEn: "These numbers work anywhere in the UAE. The portal also lists 996 for the coastguard, 995 for search and rescue and 991 for electricity failure.",
      detailsAr: "تعمل هذه الأرقام في جميع أنحاء الإمارات. وتذكر البوابة أيضاً الرقم 996 لخفر السواحل، و995 للبحث والإنقاذ، و991 لانقطاع الكهرباء.",
      status: "confirmed", sourceLabel: "UAE Government Portal – Handling emergencies", sourceUrl: "https://u.ae/en/information-and-services/justice-safety-and-the-law/Safety/handling-emergencies"
    },
    {
      id: "ae-currency", topic: "living", country: "United Arab Emirates",
      questionEn: "What currency is used in the UAE?",
      questionAr: "ما العملة المستخدمة في الإمارات؟",
      answerEn: "The UAE dirham (AED), pegged to the US dollar at 1 USD = AED 3.6725.",
      answerAr: "الدرهم الإماراتي، وهو مربوط بالدولار الأمريكي بسعر 3.6725 درهم للدولار الواحد.",
      detailsEn: "One dirham is divided into 100 fils. Coins come in AED 1, 50 fils and 25 fils.",
      detailsAr: "ينقسم الدرهم إلى 100 فلس، والعملات المعدنية من فئات درهم واحد و50 فلساً و25 فلساً.",
      status: "confirmed", sourceLabel: "UAE Government Portal – Fact sheet", sourceUrl: "https://u.ae/en/about-the-uae/fact-sheet"
    },
    {
      id: "ae-time-weekend", topic: "living", country: "United Arab Emirates",
      questionEn: "What is the time difference with Kuwait, and which days are the weekend in the UAE?",
      questionAr: "ما فرق التوقيت مع الكويت، وما أيام العطلة الأسبوعية في الإمارات؟",
      answerEn: "The UAE is GMT+4, one hour ahead of Kuwait, and the work week runs Monday to Friday.",
      answerAr: "توقيت الإمارات هو غرينتش +4، أي متقدم ساعة واحدة على الكويت، وأسبوع العمل من الاثنين إلى الجمعة.",
      detailsEn: "The UAE government fact sheet says the UAE is 4 hours ahead of GMT, and that embassies open Monday to Friday (the UAE work week) and close on Saturdays and Sundays.",
      detailsAr: "تذكر صفحة الحقائق في البوابة الرسمية للإمارات أن توقيت الإمارات متقدم 4 ساعات على غرينتش، وأن السفارات تعمل من الاثنين إلى الجمعة (أسبوع العمل في الإمارات) وتُغلق يومي السبت والأحد.",
      status: "confirmed", sourceLabel: "UAE Government Portal – Fact sheet", sourceUrl: "https://u.ae/en/about-the-uae/fact-sheet"
    },
    {
      id: "ae-driving", topic: "living", country: "United Arab Emirates",
      questionEn: "Can I drive in the UAE with my Kuwaiti driving licence?",
      questionAr: "هل يمكنني القيادة في الإمارات برخصة القيادة الكويتية؟",
      answerEn: "Reportedly yes for short trips: a GCC licence is valid for brief visits across the GCC.",
      answerAr: "حسب ما نُشر، نعم في الزيارات القصيرة؛ إذ تُعدّ رخصة دول المجلس صالحة للزيارات القصيرة في دول المجلس.",
      detailsEn: "A September 2026 news report on remarks by the GCC Secretary-General says citizens who move to live in another GCC state can usually exchange their licence for a local one. We could not confirm this on an official UAE page.",
      detailsAr: "ذكر تقرير إخباري في سبتمبر 2026 عن تصريحات الأمين العام لمجلس التعاون أن المواطن الذي ينتقل للإقامة في دولة خليجية أخرى يمكنه غالباً استبدال رخصته برخصة محلية. ولم نتمكن من تأكيد ذلك من صفحة إماراتية رسمية.",
      status: "unconfirmed", sourceLabel: "Khaleej Times (news report, 9 Sep 2026)", sourceUrl: "https://www.khaleejtimes.com/gcc-travel-citizens-easier-driving-licence-recognition-edicated-lanes-security-linking"
    },
    // ---------------- Aviation (researched and re-checked 2026-11-16) ----------------
    {
      id: "aviation-overview", topic: "aviation",
      questionEn: "How can I study aviation or become a pilot?",
      questionAr: "كيف أدرس الطيران أو أصبح طياراً؟",
      answerEn: "Not through the 2026/2027 scholarship plan abroad, which has no aviation majors; the routes are airline cadet programmes, colleges in Kuwait and the military.",
      answerAr: "ليس عن طريق خطة البعثات الخارجية 2026/2027، فلا توجد فيها تخصصات طيران؛ والطرق هي برامج الطيارين المتدربين في شركات الطيران، والكليات في الكويت، والجهات العسكرية.",
      detailsEn: "Pilots: Jazeera Airways trains cadet pilots with BAA Training in Spain. Aircraft maintenance, air traffic control and airport operations: Australian University and the College of Technology and Aviation through PUC internal scholarships, and PAAET's navigation institute. Military pilots: the Ministry of Defence (Ali Al-Sabah Military College). Any flight school must be on the civil aviation authority's approved list.",
      detailsAr: "الطيارون: تدرّب طيران الجزيرة طيارين متدربين مع BAA Training في إسبانيا. صيانة الطائرات والمراقبة الجوية وتشغيل المطارات: الجامعة الأسترالية وكلية التكنولوجيا والطيران عبر البعثات الداخلية لمجلس الجامعات الخاصة، ومعهد الاتصالات والملاحة في الهيئة العامة للتعليم التطبيقي. الطيارون العسكريون: وزارة الدفاع (كلية علي الصباح العسكرية). ويجب أن تكون أي مدرسة طيران ضمن قائمة الطيران المدني المعتمدة.",
      status: "confirmed", sourceLabel: "Ministry majors list 2026/2027 (no aviation majors); details and sources in each aviation question", sourceUrl: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485330.pdf"
    },
    {
      id: "kac-mohe-pilot-scholarship-protocol", topic: "aviation",
      questionEn: "Is there a government scholarship to train as a Kuwait Airways commercial pilot?",
      questionAr: "هل توجد بعثة حكومية لدراسة الطيران التجاري مع الخطوط الجوية الكويتية؟",
      answerEn: "Yes: in October 2023 the Ministry of Higher Education agreed to fund 24-month pilot scholarships for students Kuwait Airways nominates.",
      answerAr: "نعم، في أكتوبر 2023 وافقت وزارة التعليم العالي على تمويل بعثات لمدة 24 شهرًا لدراسة الطيران للطلبة الذين ترشحهم الخطوط الجوية الكويتية.",
      detailsEn: "Kuwait Airways chooses the students using its own academic requirements and tests, agreed with the Ministry. The Ministry pays within its budget and according to the airline's yearly needs, for three years. This is a 2023 source; we could not confirm whether an intake is open for 2026/2027.",
      detailsAr: "تختار الخطوط الكويتية الطلبة وفق اشتراطاتها الأكاديمية واختباراتها بالتوافق مع الوزارة، وتتحمل الوزارة النفقات في حدود الميزانية وحسب حاجة الشركة السنوية ولمدة ثلاث سنوات. المصدر من عام 2023، ولم نتمكن من التأكد من وجود دفعة مفتوحة للعام 2026/2027.",
      status: "unconfirmed", sourceLabel: "KUNA, 18 Oct 2023 (older than 2024, may be out of date)", sourceUrl: "https://www.kuna.net.kw/ArticleDetails.aspx?id=3119095"
    },
    {
      id: "kac-two-scholarship-plans-2024", topic: "aviation",
      questionEn: "Where do Kuwait Airways scholarship pilots study?",
      questionAr: "أين يدرس المبتعثون لدراسة الطيران مع الخطوط الكويتية؟",
      answerEn: "At flight colleges approved by Kuwait's civil aviation authority (DGCA), under the Ministry of Higher Education's supervision.",
      answerAr: "في كليات طيران معتمدة من الإدارة العامة للطيران المدني، وتحت إشراف وزارة التعليم العالي.",
      detailsEn: "In February 2024 Kuwait Airways said it had two scholarship plans for students wanting to study flying, the first soon and the second the following summer. It did not publish requirements in this statement. Check the DGCA list of approved training organisations before enrolling anywhere.",
      detailsAr: "في فبراير 2024 أعلنت الخطوط الكويتية وجود خطتين لابتعاث الراغبين في دراسة الطيران، الأولى قريبًا والثانية في الصيف التالي، ولم يتضمن التصريح شروط القبول. راجع قائمة منظمات التدريب المعتمدة لدى الطيران المدني قبل التسجيل في أي مكان.",
      status: "unconfirmed", sourceLabel: "KUNA, 27 Feb 2024", sourceUrl: "https://www.kuna.net.kw/ArticleDetails.aspx?id=3139696&language=ar"
    },
    {
      id: "kac-mpl-scholarship-status", topic: "aviation",
      questionEn: "Is the Kuwait Airways pilot scholarship open right now?",
      questionAr: "هل باب التقديم على بعثة الطيران في الخطوط الكويتية مفتوح الآن؟",
      answerEn: "Not as far as we can see: its MPL pilot-scholarship posting is no longer available (checked 16 November 2026).",
      answerAr: "لا يبدو ذلك: إعلان بعثة دراسة الطيران (MPL) لم يعد متاحًا (تم التحقق في 16 نوفمبر 2026).",
      detailsEn: "MPL means Multi-crew Pilot Licence (a licence designed for flying airliners as part of a crew). Kuwait Airways posts openings on careers.kuwaitairways.com, which listed no openings when checked. Its official age, percentage, English-test and bond (service commitment) rules were not published on any page we could read.",
      detailsAr: "MPL تعني رخصة طيار الطاقم المتعدد (رخصة مصممة لقيادة طائرات الركاب ضمن طاقم). تنشر الخطوط الكويتية فرصها على موقع careers.kuwaitairways.com، ولم يكن فيه أي إعلان عند التحقق. ولم نجد في أي صفحة رسمية شروط العمر أو النسبة أو اختبار اللغة الإنجليزية أو الالتزام بالخدمة بعد التخرج.",
      status: "confirmed", sourceLabel: "Kuwait Airways careers site, checked 16 Nov 2026", sourceUrl: "https://careers.kuwaitairways.com/jobs/Careers/691536000014644187/MPL--%D8%A8%D8%B9%D8%AB%D8%A9-%D9%84%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D9%8A%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A"
    },
    {
      id: "jazeera-cadet-programme-baa", topic: "aviation",
      questionEn: "Does Jazeera Airways train cadet pilots?",
      questionAr: "هل تدرّب طيران الجزيرة طيارين متدربين؟",
      answerEn: "Yes: Jazeera sends cadet pilots (trainees the airline trains) on an 18-month course with BAA Training in Spain.",
      answerAr: "نعم، ترسل طيران الجزيرة طيارين متدربين (تتولى الشركة تدريبهم) إلى دورة مدتها 18 شهرًا لدى BAA Training في إسبانيا.",
      detailsEn: "The course leads to an ATPL (Airline Transport Pilot Licence, the licence airline captains need) and includes multi-crew training. Two groups were planned; the first started in August 2026 in Lleida-Alguaire, Spain. Jazeera has not published entry requirements, and its pilot jobs page showed no vacancies on 16 November 2026.",
      detailsAr: "تؤهل الدورة لرخصة طيار النقل الجوي ATPL (الرخصة التي يحتاجها قادة طائرات الركاب) وتشمل التدريب على العمل ضمن طاقم. خُطط لدفعتين، بدأت الأولى في أغسطس 2026 في ليدا-ألغوايري بإسبانيا. لم تنشر الجزيرة شروط القبول، ولم تكن في صفحة وظائف الطيارين أي شواغر في 16 نوفمبر 2026.",
      status: "confirmed", sourceLabel: "Jazeera Airways press release, 21 Oct 2026; Jazeera careers (Pilots), checked 16 Nov 2026", sourceUrl: "https://www.jazeeraairways.com/en-kw/media/latest-news/jazeera-airways-baa-training-partnership-pilot-talent"
    },
    {
      id: "jazeera-second-cohort-kuwaiti-woman", topic: "aviation",
      questionEn: "Are Kuwaitis, including women, in Jazeera's cadet pilot programme?",
      questionAr: "هل يضم برنامج الطيارين المتدربين في الجزيرة كويتيين وكويتيات؟",
      answerEn: "Reportedly yes: Jazeera's second group of 11 cadets includes its first Kuwaiti woman trainee pilot.",
      answerAr: "وفق ما نُشر، نعم: تضم الدفعة الثانية من 11 طيارًا متدربًا أول طيارة كويتية متدربة في الجزيرة.",
      detailsEn: "Newspaper report from November 2026, not an official Jazeera page. The report also says Jazeera is building its own approved training centre (ATO) with a full flight simulator in Kuwait, so some pilot training may move to Kuwait later.",
      detailsAr: "خبر صحفي من نوفمبر 2026 وليس صفحة رسمية للجزيرة. ويذكر الخبر أيضًا أن الجزيرة تطور منشأة تدريب معتمدة (ATO) في الكويت تضم جهاز محاكاة طيران كاملًا، ما قد ينقل جزءًا من التدريب إلى الكويت لاحقًا.",
      status: "unconfirmed", sourceLabel: "Al-Rai newspaper, 4 Nov 2026", sourceUrl: "https://www.alraimedia.com/article/1784995"
    },
    {
      id: "jazeera-introduction-to-aviation-course", topic: "aviation",
      questionEn: "Is there a short course in Kuwait to try out being a pilot?",
      questionAr: "هل توجد دورة قصيرة في الكويت لتجربة مجال الطيران قبل اتخاذ القرار؟",
      answerEn: "Yes: Jazeera Airways runs an Introduction to Aviation course for people aged 17 and over.",
      answerAr: "نعم، تقدم طيران الجزيرة دورة «مقدمة في الطيران» لمن هم في سن 17 عامًا فأكثر.",
      detailsEn: "It is open to citizens and residents of Kuwait with good English; seats are limited, first come, first served. Modules include aviation English, principles of flight, a pilot medical check, a simulator session and an aptitude (psychometric) test. It is a taster course, not a pilot licence. Fees and dates are not on the page.",
      detailsAr: "متاحة للمواطنين والمقيمين في الكويت ممن يجيدون الإنجليزية، والمقاعد محدودة بأولوية التسجيل. تشمل الوحدات: الإنجليزية للطيران، ومبادئ الطيران، وفحصًا طبيًا للطيارين، وجلسة على جهاز المحاكاة، واختبار قدرات نفسي. هي دورة تعريفية وليست رخصة طيران، ولا تذكر الصفحة الرسوم أو المواعيد.",
      status: "confirmed", sourceLabel: "Jazeera Airways, Aviation Course page (undated, checked 16 Nov 2026)", sourceUrl: "https://www.jazeeraairways.com/en-kw/aviation-course"
    },
    {
      id: "jazeera-graduate-development-program", topic: "aviation",
      questionEn: "Can a high-school graduate join an airline training programme in Kuwait without a degree?",
      questionAr: "هل يمكن لخريج الثانوية الالتحاق ببرنامج تدريب في شركة طيران بالكويت دون شهادة جامعية؟",
      answerEn: "Yes: Jazeera's Graduate Development Program accepts young Kuwaitis aged 21 or over with at least a high-school diploma.",
      answerAr: "نعم، يقبل برنامج تطوير الخريجين في طيران الجزيرة الشباب الكويتيين من عمر 21 عامًا فأكثر بشهادة الثانوية كحد أدنى.",
      detailsEn: "You also need a medical clearance certificate, a police clearance certificate, and strong English and Arabic. Training areas include aircraft maintenance engineering, flight operations and ground operations. It is not a pilot-licence course. Note: most students finish school before 21, so this route usually comes a few years later.",
      detailsAr: "يُشترط أيضًا شهادة لياقة طبية وشهادة حسن سير وسلوك (خلو سوابق) وإجادة الإنجليزية والعربية. تشمل مجالات التدريب هندسة صيانة الطائرات وعمليات الطيران والعمليات الأرضية، وهو ليس برنامجًا للحصول على رخصة طيار. ملاحظة: معظم الطلبة ينهون الثانوية قبل سن 21، لذا يأتي هذا المسار عادة بعد سنوات.",
      status: "confirmed", sourceLabel: "Jazeera Airways, Graduate Development Program page (undated, checked 16 Nov 2026)", sourceUrl: "https://www.jazeeraairways.com/en-kw/graduate-development-program"
    },
    {
      id: "au-school-of-aviation-programmes", topic: "aviation",
      questionEn: "Which private university in Kuwait teaches aviation?",
      questionAr: "ما الجامعة الخاصة في الكويت التي تدرّس تخصصات الطيران؟",
      answerEn: "Australian University (AU) in Mishref has a School of Aviation with six diploma and bachelor's programmes.",
      answerAr: "الجامعة الأسترالية (AU) في مشرف لديها مدرسة للطيران تقدم ستة برامج دبلوم وبكالوريوس.",
      detailsEn: "Diplomas: Aircraft Maintenance Engineering (Mechanical B1.1 and Avionics B2), Air Traffic Control, and Logistics and Supply Chain Management. Bachelor's: Aircraft Maintenance Engineering (for diploma graduates) and Aviation and Airport Operations. AU does not list a pilot (flying) programme.",
      detailsAr: "الدبلوم: هندسة صيانة الطائرات (ميكانيكا B1.1 وإلكترونيات الطيران B2)، والمراقبة الجوية، والخدمات اللوجستية وسلاسل الإمداد. البكالوريوس: هندسة صيانة الطائرات (لخريجي الدبلوم)، وتشغيل الطيران والمطارات. ولا تذكر الجامعة برنامجًا لتعليم قيادة الطائرات.",
      status: "confirmed", sourceLabel: "Australian University, Our Programs page, 2026", sourceUrl: "https://www.au.edu.kw/our-programs/"
    },
    {
      id: "au-aircraft-maintenance-diploma", topic: "aviation",
      questionEn: "What do I need for AU's Aircraft Maintenance Engineering diploma?",
      questionAr: "ما شروط دبلوم هندسة صيانة الطائرات في الجامعة الأسترالية؟",
      answerEn: "A scientific-stream high-school certificate with at least 65%, for AU's own admission.",
      answerAr: "شهادة ثانوية من القسم العلمي بنسبة 65% على الأقل، وذلك لقبول الجامعة نفسها.",
      detailsEn: "The diploma takes about 2.5 years (87 credit hours), is approved by DGCA (Kuwait's civil aviation authority), EASA and GCAA, and includes 300 hours of practical training at Kuwait Airways. A PUC scholarship needs a higher mark (80%, see the PUC question). Graduates can continue to AU's 2+2 bachelor's in the same field.",
      detailsAr: "مدة الدبلوم نحو سنتين ونصف (87 ساعة معتمدة)، وهو معتمد من الطيران المدني الكويتي ووكالة سلامة الطيران الأوروبية (EASA) وجهة GCAA، ويتضمن 300 ساعة تدريب عملي في الخطوط الكويتية. البعثة الداخلية تتطلب نسبة أعلى (80%، انظر سؤال مجلس الجامعات الخاصة). ويمكن للخريج إكمال بكالوريوس 2+2 في التخصص نفسه.",
      status: "confirmed", sourceLabel: "AU Admissions Policy (approved Oct 2023, file published Aug 2026) and AU programme page, 2026", sourceUrl: "https://www.au.edu.kw/wp-content/uploads/2026/08/AU-Admissions-Policy.pdf"
    },
    {
      id: "au-air-traffic-control-diploma", topic: "aviation",
      questionEn: "Can I study air traffic control in Kuwait at a private university?",
      questionAr: "هل يمكنني دراسة المراقبة الجوية في جامعة خاصة بالكويت؟",
      answerEn: "Yes: AU offers a 2-year Diploma of Air Traffic Control; minimum 65% from the scientific or literary stream.",
      answerAr: "نعم، تقدم الجامعة الأسترالية دبلوم المراقبة الجوية لمدة سنتين، بحد أدنى 65% من القسم العلمي أو الأدبي.",
      detailsEn: "Air traffic controllers guide planes safely on the ground and in the air. The diploma has 20 courses (60 credit hours) over four semesters. DGCA lists AU as an approved air-traffic-control training organisation (valid to 2 December 2027). Literary-stream students are also accepted.",
      detailsAr: "المراقب الجوي يوجّه الطائرات بأمان على الأرض وفي الجو. يتكون الدبلوم من 20 مقررًا (60 ساعة معتمدة) على أربعة فصول دراسية. وتدرج الإدارة العامة للطيران المدني الجامعة الأسترالية منظمةَ تدريب معتمدة للمراقبة الجوية (سارية حتى 2 ديسمبر 2027). ويُقبل طلبة القسم الأدبي أيضًا.",
      status: "confirmed", sourceLabel: "AU Admissions Policy and ATC programme page, 2026; DGCA ATO list, checked 16 Nov 2026", sourceUrl: "https://www.au.edu.kw/academics/school-of-aviation/diploma-of-air-traffic-control/"
    },
    {
      id: "au-aviation-airport-operations-bachelor", topic: "aviation",
      questionEn: "Is there a bachelor's degree in aviation management in Kuwait?",
      questionAr: "هل توجد درجة بكالوريوس في إدارة الطيران في الكويت؟",
      answerEn: "Yes: AU's Bachelor of Aviation and Airport Operations is a 4-year degree; AU's minimum is 65% (scientific or literary).",
      answerAr: "نعم، بكالوريوس تشغيل الطيران والمطارات في الجامعة الأسترالية مدته 4 سنوات، والحد الأدنى للجامعة 65% (علمي أو أدبي).",
      detailsEn: "It prepares students to manage airline and airport operations (120 credit hours over 8 semesters). It is a management degree, not pilot training. It is in the PUC 2026/2027 scholarship plan, where the general bachelor's minimum applies (78% scientific, 80% literary).",
      detailsAr: "يؤهل الطلبة لإدارة عمليات شركات الطيران والمطارات (120 ساعة معتمدة على 8 فصول دراسية). وهو تخصص إداري وليس تدريبًا على قيادة الطائرات. والبرنامج مدرج في خطة البعثات الداخلية 2026/2027، وينطبق عليه الحد الأدنى العام للبكالوريوس (78% علمي و80% أدبي).",
      status: "confirmed", sourceLabel: "AU programme page and Admissions Policy, 2026; PUC internal scholarship plan 2026/2027", sourceUrl: "https://www.au.edu.kw/academics/school-of-aviation/baao/"
    },
    {
      id: "au-english-requirement-diploma", topic: "aviation",
      questionEn: "Do I need IELTS or TOEFL for AU's aviation diplomas?",
      questionAr: "هل أحتاج إلى IELTS أو TOEFL لدبلومات الطيران في الجامعة الأسترالية؟",
      answerEn: "No, you can take AU's own English placement test (KD 25 fee) instead of submitting IELTS or TOEFL.",
      answerAr: "لا، يمكنك أداء اختبار تحديد المستوى في اللغة الإنجليزية الخاص بالجامعة (رسومه 25 دينارًا) بدلًا من تقديم IELTS أو TOEFL.",
      detailsEn: "AU's diploma page also accepts TOEFL iBT with at least 71, or an IELTS certificate (confirm the IELTS score with AU admissions). All AU programmes are taught in English; students who are not ready may start in AU's Intensive English Program.",
      detailsAr: "وتقبل صفحة الدبلوم أيضاً TOEFL iBT بدرجة 71 على الأقل، أو شهادة IELTS (تأكد من الدرجة المطلوبة من قسم القبول في الجامعة). وتُدرّس جميع البرامج بالإنجليزية، وقد يبدأ الطالب غير الجاهز ببرنامج اللغة الإنجليزية المكثف.",
      status: "confirmed", sourceLabel: "AU, 2-Year Diploma Applicants page, 2026; AU Admissions Policy", sourceUrl: "https://www.au.edu.kw/admissions/diploma-applicant/"
    },
    {
      id: "puc-scholarship-aviation-programmes-2026", topic: "aviation",
      questionEn: "Which aviation programmes are in the PUC internal scholarship plan for 2026/2027?",
      questionAr: "ما تخصصات الطيران المشمولة في خطة البعثات الداخلية لمجلس الجامعات الخاصة 2026/2027؟",
      answerEn: "Aircraft maintenance, air traffic control, engines and airframes engineering, and aviation and airport operations.",
      answerAr: "صيانة الطائرات، والمراقبة الجوية، وهندسة المحركات والهياكل، وتشغيل الطيران والمطارات.",
      detailsEn: "PUC (Private Universities Council) runs the internal scholarship plan for study at private colleges in Kuwait. Diplomas: Australian University (aircraft maintenance engineering, scientific only; air navigation control) and College of Technology and Aviation (engines and airframes engineering; electrical and electronics engineering, both scientific only). Bachelor's: Australian University (aviation and airport operations).",
      detailsAr: "تدير الأمانة العامة لمجلس الجامعات الخاصة خطة البعثات الداخلية للدراسة في الجامعات والكليات الخاصة بالكويت. الدبلوم: الجامعة الأسترالية (هندسة صيانة الطائرات للعلمي فقط، ومراقبة الملاحة الجوية)، وكلية التكنولوجيا والطيران (هندسة المحركات والهياكل، وهندسة الكهرباء والإلكترونيات، للعلمي فقط). البكالوريوس: الجامعة الأسترالية (تشغيل الطيران والمطارات).",
      status: "confirmed", sourceLabel: "PUC internal scholarship plan, first semester 2026/2027", sourceUrl: "https://www.puc.edu.kw/pdf/PUC%202026.pdf"
    },
    {
      id: "puc-minimum-percentages-aviation-2026", topic: "aviation",
      questionEn: "What percentage do I need for a PUC scholarship in aircraft maintenance?",
      questionAr: "ما النسبة المطلوبة لبعثة مجلس الجامعات الخاصة في صيانة الطائرات؟",
      answerEn: "At least 80% in the scientific stream for the aircraft maintenance and engines-and-airframes diplomas (2026/2027).",
      answerAr: "80% على الأقل من القسم العلمي لدبلوم هندسة صيانة الطائرات ودبلوم هندسة المحركات والهياكل (2026/2027).",
      detailsEn: "Engineering diplomas, such as electrical and electronics engineering, need 77% (science stream); other PUC diplomas, including air navigation control, need 70% (science or arts). Bachelor's minimums are 78% science and 80% arts. PUC notes that applying, or holding a university acceptance letter, does not guarantee a scholarship.",
      detailsAr: "تحتاج دبلومات الهندسة، مثل هندسة الكهرباء والإلكترونيات، إلى 77% (علمي)، وبقية الدبلومات ومنها مراقبة الملاحة الجوية 70% (علمي أو أدبي). والحد الأدنى للبكالوريوس 78% علمي و80% أدبي. ويذكر المجلس أن قبول طلب التقديم أو الحصول على ورقة قبول من الجامعة لا يعني القبول في البعثة.",
      status: "confirmed", sourceLabel: "PUC internal scholarship plan, first semester 2026/2027", sourceUrl: "https://www.puc.edu.kw/pdf/PUC%202026.pdf"
    },
    {
      id: "dgca-approved-training-organisations", topic: "aviation",
      questionEn: "Can I train as a pilot at any flight school abroad?",
      questionAr: "هل يمكنني التدرب على الطيران في أي مدرسة طيران بالخارج؟",
      answerEn: "No: Kuwait's civil aviation authority only recognises training from organisations on its approved list.",
      answerAr: "لا، الطيران المدني في الكويت لا يعترف إلا بالتدريب في المنظمات المدرجة في قائمته المعتمدة.",
      detailsEn: "Flying schools marked valid include Gulf Aviation Academy (Bahrain), Flight Training Europe (Jerez, Spain), BAA Training (Spain), Jazeera's J9 ATO and the Kuwait Airways Training Organization. Some expiry dates shown have already passed although marked valid, so confirm with the DGCA (safety@dgca.gov.kw) before paying or enrolling.",
      detailsAr: "من مدارس الطيران المصنفة «سارية»: أكاديمية الخليج للطيران (البحرين)، وFlight Training Europe (خيريز، إسبانيا)، وBAA Training (إسبانيا)، ومنظمة التدريب J9 التابعة للجزيرة، ومنظمة التدريب في الخطوط الكويتية. بعض تواريخ الانتهاء المذكورة مضت رغم تصنيفها «سارية»، لذا تأكد من الطيران المدني (safety@dgca.gov.kw) قبل الدفع أو التسجيل.",
      status: "confirmed", sourceLabel: "DGCA Aviation Safety Dept, Approved Training Organizations list, checked 16 Nov 2026", sourceUrl: "https://kcasr.dgca.gov.kw/en/approved-training-organizations-ato/"
    },
    {
      id: "dgca-approved-maintenance-training", topic: "aviation",
      questionEn: "Where in Kuwait can I train as an aircraft maintenance engineer with DGCA approval?",
      questionAr: "أين يمكنني التدرب في الكويت على هندسة صيانة الطائرات بتدريب معتمد من الطيران المدني؟",
      answerEn: "DGCA lists three approved maintenance training organisations in Kuwait: Kuwait Airways, Australian University and College of Aviation Technology.",
      answerAr: "تدرج الإدارة العامة للطيران المدني ثلاث منظمات معتمدة لتدريب الصيانة في الكويت: الخطوط الكويتية، والجامعة الأسترالية، وكلية تكنولوجيا الطيران.",
      detailsEn: "These are Part-147 organisations (schools approved to teach for aircraft maintenance licences). The College of Aviation Technology is in Abu Halifa. The expiry dates listed for Kuwait Airways (17 Jan 2026), AU (16 May 2026) and the college (12 Oct 2026) have passed though still marked valid, so check the current status with the DGCA.",
      detailsAr: "هذه منظمات Part-147 (مدارس معتمدة للتدريب على رخص صيانة الطائرات). وتقع كلية تكنولوجيا الطيران في أبو حليفة. تواريخ الانتهاء المذكورة للخطوط الكويتية (17 يناير 2026) والجامعة الأسترالية (16 مايو 2026) والكلية (12 أكتوبر 2026) مضت رغم تصنيفها «سارية»، لذا تحقق من الوضع الحالي لدى الطيران المدني.",
      status: "confirmed", sourceLabel: "DGCA Aviation Safety Dept, Approved Training Organizations list, checked 16 Nov 2026", sourceUrl: "https://kcasr.dgca.gov.kw/en/approved-training-organizations-ato/"
    },
    {
      id: "dgca-pilot-licensing", topic: "aviation",
      questionEn: "Who issues pilot and aviation licences in Kuwait?",
      questionAr: "من يصدر رخص الطيارين ورخص الطيران في الكويت؟",
      answerEn: "Kuwait's civil aviation authority (DGCA), which sets personnel licensing rules for pilots, air traffic controllers and maintenance engineers.",
      answerAr: "الإدارة العامة للطيران المدني، وهي التي تضع قواعد ترخيص الطيارين والمراقبين الجويين ومهندسي الصيانة.",
      detailsEn: "The rules are the Kuwait Civil Aviation Safety Regulations (KCASR 1, Personnel Licensing): Part-FCL for flight crew, Part-ATCO for air traffic controllers, Part-66 for maintenance engineers and Part-MED for medical fitness. The authority's website now uses the name General Authority of Civil Aviation.",
      detailsAr: "القواعد هي لوائح سلامة الطيران المدني الكويتية (KCASR 1 – ترخيص الأفراد): Part-FCL لطاقم القيادة، وPart-ATCO للمراقبين الجويين، وPart-66 لمهندسي الصيانة، وPart-MED للياقة الطبية. ويستخدم موقع الجهة حاليًا اسم «الهيئة العامة للطيران المدني».",
      status: "confirmed", sourceLabel: "DGCA Responsibilities page and KCASR page, 2026", sourceUrl: "https://kcasr.dgca.gov.kw/en/kuwait-civil-aviation-safety-regulations-kcasr/"
    },
    {
      id: "dgca-aviation-medical-examiners", topic: "aviation",
      questionEn: "Where can I get an aviation medical exam in Kuwait?",
      questionAr: "أين يمكنني إجراء الفحص الطبي للطيران في الكويت؟",
      answerEn: "DGCA-approved aviation medical examiners are at the Aero-Medical Centre of Kuwait Airways.",
      answerAr: "الأطباء المعتمدون من الطيران المدني لفحوص الطيران موجودون في المركز الطبي للطيران التابع للخطوط الكويتية.",
      detailsEn: "The listed examiners can issue Class 1, Class 2 and Class 3 medical certificates, plus cabin-crew certificates. Ask your airline or flight school which medical class it requires before you pay any fees.",
      detailsAr: "يمكن للأطباء المدرجين إصدار شهادات طبية من الفئة الأولى والثانية والثالثة، وشهادات طاقم الضيافة. اسأل شركة الطيران أو مدرسة الطيران عن الفئة الطبية المطلوبة قبل دفع أي رسوم.",
      status: "confirmed", sourceLabel: "DGCA Approved Aero-Medical Examiners page, checked 16 Nov 2026", sourceUrl: "https://kcasr.dgca.gov.kw/en/dgca-approved-aero-medical-examiners/"
    },
    {
      id: "paaet-hitn-aviation-programmes", topic: "aviation",
      questionEn: "Does PAAET offer any aviation programmes?",
      questionAr: "هل تقدم الهيئة العامة للتعليم التطبيقي والتدريب برامج في مجال الطيران؟",
      answerEn: "Yes: PAAET's Higher Institute for Telecommunication and Navigation trains air traffic controllers and other airport specialists.",
      answerAr: "نعم، يدرّب المعهد العالي للاتصالات والملاحة التابع للهيئة مراقبين جويين وتخصصات مطارات أخرى.",
      detailsEn: "Its Navigation Department lists Air Traffic Control (with ICAO academic accreditation), Aeronautical Information, Airport Facilitation, Security and Safety of Airports, and Meteorology. Graduates work in places such as the civil aviation authority. Admission percentages were not on this page. DGCA's training list shows the institute's air-traffic-control approval as cancelled (expired 29 Oct 2023).",
      detailsAr: "يذكر قسم الملاحة برامج: المراقبة الجوية (باعتماد أكاديمي من منظمة الطيران المدني الدولي ICAO)، والمعلومات الملاحية الجوية، وتسهيلات المطار، وأمن وسلامة المطارات، والأرصاد الجوية. يعمل الخريجون في جهات منها الطيران المدني. لم تُذكر نسب القبول في الصفحة. وتُظهر قائمة الطيران المدني أن اعتماد المعهد لتدريب المراقبة الجوية «ملغى» (انتهى في 29 أكتوبر 2023).",
      status: "confirmed", sourceLabel: "PAAET, Navigation Department page (site footer 2024); DGCA ATO list, checked 16 Nov 2026", sourceUrl: "https://www.paaet.edu.kw/en/higher-institute-for-communications-and-navigation/training-departments/navigation-department/"
    },
    {
      id: "paaet-kac-ground-services-diploma", topic: "aviation",
      questionEn: "Is there a PAAET diploma linked to jobs at Kuwait Airways?",
      questionAr: "هل يوجد دبلوم في التطبيقي مرتبط بالعمل في الخطوط الكويتية؟",
      answerEn: "Reportedly yes: an Air Transport Ground Services diploma at PAAET's telecommunication and navigation institute, created with Kuwait Airways.",
      answerAr: "وفق ما نُشر، نعم: دبلوم «الخدمات الأرضية للنقل الجوي» في المعهد العالي للاتصالات والملاحة، أُنشئ بالتعاون مع الخطوط الكويتية.",
      detailsEn: "In September 2025 Kuwait Airways accepted the second group of students. Training covers airline operations such as traffic, cargo, sales and security, to prepare students to join the airline. Newspaper report only; PAAET's own page did not list this programme, and current admission rules were not found.",
      detailsAr: "في سبتمبر 2025 قبلت الخطوط الكويتية الدفعة الثانية من الطلبة. يشمل التدريب قطاعات تشغيلية مثل الحركة والشحن والمبيعات والأمن، تمهيدًا لانضمامهم إلى الشركة. هذا خبر صحفي فقط، ولم تذكر صفحة الهيئة هذا البرنامج، ولم نجد شروط القبول الحالية.",
      status: "unconfirmed", sourceLabel: "Al-Rai newspaper, 18 Sep 2025", sourceUrl: "https://www.alraimedia.com/article/1740464"
    },
    {
      id: "military-ali-al-sabah-college-admission", topic: "aviation",
      questionEn: "How does a high-school graduate apply to Ali Al-Sabah Military College?",
      questionAr: "كيف يتقدم خريج الثانوية للالتحاق بكلية علي الصباح العسكرية؟",
      answerEn: "In person at the college, as a cadet officer on a 3-year bachelor's in military science.",
      answerAr: "بالحضور إلى مقر الكلية، للالتحاق كطالب ضابط في برنامج بكالوريوس العلوم العسكرية لمدة ثلاث سنوات.",
      detailsEn: "General conditions: Kuwaiti nationality, good conduct, no relevant criminal record, medical fitness for field service, a recognised school certificate, and passing the interview and admission tests. This official page does not describe a pilot track or give dates; watch Ministry of Defence announcements.",
      detailsAr: "الشروط العامة: الجنسية الكويتية، وحسن السيرة والسلوك، وعدم وجود أحكام مخلة، واللياقة الصحية للخدمة الميدانية، وشهادة معترف بها، واجتياز المقابلة الشخصية واختبارات القبول. لا تذكر هذه الصفحة الرسمية مسارًا للطيارين ولا مواعيد، لذا تابع إعلانات وزارة الدفاع.",
      status: "confirmed", sourceLabel: "Kuwait Government Portal (e.gov.kw), Ministry of Defence service page (undated, checked 16 Nov 2026)", sourceUrl: "https://e.gov.kw/sites/kgoArabic/Pages/Services/MOD/RequestedAttendCollegeMilitaryCampaignGeneralCertificateSecondaryEducation.aspx"
    },
    {
      id: "military-air-force-pilot-graduation-2025", topic: "aviation",
      questionEn: "Does the Kuwait Air Force train its own pilots?",
      questionAr: "هل تدرّب القوة الجوية الكويتية طياريها؟",
      answerEn: "Yes: in May 2025 the Ministry of Defence graduated a new batch of 28 Kuwaiti Air Force pilots.",
      answerAr: "نعم، في مايو 2025 خرّجت وزارة الدفاع دفعة جديدة من 28 طيارًا في القوة الجوية الكويتية.",
      detailsEn: "Training facilities at Salem Al-Sabah and Ali Al-Salem air bases include a flight simulation wing. The report does not explain how to apply; military pilot entry is through the Ministry of Defence, so follow its official announcements.",
      detailsAr: "تشمل مرافق التدريب في قاعدتي سالم الصباح وعلي السالم الجويتين جناحًا للمحاكاة. لا يوضح الخبر طريقة التقديم، فالالتحاق كطيار عسكري يتم عبر وزارة الدفاع، لذا تابع إعلاناتها الرسمية.",
      status: "confirmed", sourceLabel: "KUNA, 5 May 2025", sourceUrl: "https://www.kuna.net.kw/ArticleDetails.aspx?id=3229010&Language=en"
    },
    // ---------------- Universities abroad (NBAQ) ----------------
    {
      id: "university-not-listed", topic: "universities",
      questionEn: "My university is not on the NBAQ list. Can I appeal or ask for it to be added?",
      questionAr: "جامعتي غير موجودة في قائمة الجهاز الوطني للاعتماد، هل يمكنني التظلم أو طلب إضافتها؟",
      answerEn: "Yes, but not directly. NBAQ only studies a request to add a university or programme when it comes from an official body. It then checks it against its criteria, its committees decide, and a ministerial decision adds it. Ask the Ministry or your cultural office to send the request for you {{unconfirmed}}. You can also send a complaint or suggestion to NBAQ at info@nbaq.edu.kw or call +965 22906386 (Sunday to Thursday, 8:00 am to 1:00 pm). Until it is added, Ministry scholarships cannot send you there.",
      answerAr: "نعم، لكن ليس مباشرة. لا يدرس الجهاز الوطني للاعتماد طلب إضافة جامعة أو برنامج إلا إذا ورد من جهة رسمية، ثم يطبّق عليه معاييره وتصدر لجانه التوصية ويُضاف بقرار وزاري. اطلب من الوزارة أو المكتب الثقافي رفع الطلب عنك {{unconfirmed}}. ويمكنك أيضاً إرسال شكوى أو اقتراح إلى الجهاز على info@nbaq.edu.kw أو الاتصال على 22906386 965+ (من الأحد إلى الخميس، 8 صباحاً حتى 1 ظهراً). وإلى أن تُضاف، لا يمكن الابتعاث إليها.",
      status: "confirmed", sourceLabel: NBAQ_FAQ.label, sourceUrl: NBAQ_FAQ.url
    },
    {
      id: "nbaq-how-chosen", topic: "universities",
      questionEn: "How does NBAQ decide which universities are recommended?",
      questionAr: "كيف يحدد الجهاز الوطني للاعتماد الجامعات الموصى بها؟",
      answerEn: "The university must be accredited in its own country, and its programmes accredited by bodies NBAQ accepts. The programme must rank well on the rankings NBAQ uses. The university needs a published admission and transfer policy and in-person weekly attendance. NBAQ also uses visit reports and cultural office reports.",
      answerAr: "أن تكون الجامعة معتمدة مؤسسياً في بلدها، وبرامجها معتمدة من هيئات اعتماد برامجي يقبلها الجهاز، وأن يكون مستوى التخصص متميزاً في التصنيفات العالمية التي يعتمدها الجهاز، وأن تكون لها سياسة قبول وتحويل معلنة ونظام حضور منتظم خلال الأسبوع، إضافة إلى تقارير الزيارات الميدانية وتقارير المكاتب الثقافية.",
      status: "confirmed", sourceLabel: NBAQ_FAQ.label, sourceUrl: NBAQ_FAQ.url
    },
    {
      id: "nbaq-check-university", topic: "universities",
      questionEn: "How do I check if a university or programme is recommended?",
      questionAr: "كيف أتأكد أن الجامعة أو البرنامج موصى به؟",
      answerEn: "Use NBAQ's search (nbaq.edu.kw/search). Check that your exact programme and degree level are listed, not only the university's name. For the UK, the Scholarships page on this site lists NBAQ's approved universities for each major.",
      answerAr: "استخدم محرك بحث الجهاز الوطني للاعتماد (nbaq.edu.kw/search)، وتأكد من وجود برنامجك ودرجتك العلمية تحديداً وليس اسم الجامعة فقط. وللمملكة المتحدة تجد في صفحة البعثات بهذا الموقع الجامعات المعتمدة لكل تخصص.",
      status: "confirmed", sourceLabel: NBAQ_FAQ.label, sourceUrl: NBAQ_FAQ.url
    },

    // ---------------- Grants ----------------
    {
      id: "grant-vs-scholarship", topic: "grants",
      questionEn: "What is the difference between a grant and a scholarship?",
      questionAr: "ما الفرق بين المنحة الدراسية والبعثة الدراسية؟",
      answerEn: "A grant (منحة) is a seat another country offers to Kuwaiti high school graduates; your certificate must be no more than two years old. A scholarship (بعثة) is a seat the Ministry announces at a recommended university outside Kuwait.",
      answerAr: "المنحة مقعد تقدمه دولة شقيقة أو صديقة للطالب الكويتي الحاصل على الثانوية، بشرط ألا يتجاوز عمر الشهادة عامين. أما البعثة فمقعد تعلن عنه وزارة التعليم العالي في إحدى الجامعات الموصى بها خارج الكويت.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "grant-countries", topic: "grants",
      questionEn: "Which countries offer study grants to Kuwaiti students?",
      questionAr: "ما الدول التي تقدم منحاً دراسية للطلبة الكويتيين؟",
      answerEn: "The UAE, Saudi Arabia, Bahrain, Qatar, Oman, Jordan and Egypt. For postgraduate study, only Saudi Arabia offers grants, in Islamic studies.",
      answerAr: "الإمارات والسعودية والبحرين وقطر وعُمان والأردن ومصر. وللدراسات العليا تقدم السعودية وحدها منحاً في التخصصات الإسلامية.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },

    // ---------------- Certificates ----------------
    {
      id: "foreign-highschool-equivalency", topic: "equivalency",
      questionEn: "Does the Ministry of Higher Education make the equivalency for my international-school certificate?",
      questionAr: "هل وزارة التعليم العالي هي من يعادل شهادة الثانوية الأجنبية؟",
      answerEn: "No. The Private Education Department at the Ministry of Education does it. You upload its letter when you register for the scholarship. The Ministry of Higher Education's equivalency service is for university degrees.",
      answerAr: "لا. تتم المعادلة في إدارة التعليم الخاص بوزارة التربية، وترفع كتابها عند التسجيل في البعثة. أما معادلة وزارة التعليم العالي فهي للشهادات الجامعية.",
      status: "confirmed", sourceLabel: PLAN_PAGE.label, sourceUrl: PLAN_PAGE.url
    },
    {
      id: "equivalency-speed", topic: "equivalency",
      questionEn: "Can I speed up the equivalency of my university degree?",
      questionAr: "هل يمكنني استعجال معادلة شهادتي الجامعية؟",
      answerEn: "No. The Ministry finishes it within 4 to 6 weeks after the official body replies (for example the cultural office or the Ministry of Foreign Affairs). When it is done, the follow-up section of your request shows that it was accepted.",
      answerAr: "لا. تنهي الوزارة المعادلة خلال 4 إلى 6 أسابيع من رد الجهة المختصة (مثل المكتب الثقافي أو وزارة الخارجية)، وتظهر عبارة القبول في خانة متابعة الطلب عند الانتهاء.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "equivalency-how-apply", topic: "equivalency",
      questionEn: "How do I apply for the equivalency of my university degree?",
      questionAr: "كيف أقدّم طلب معادلة شهادتي الجامعية؟",
      answerEn: "Create an account on the Dirah platform (certificate equivalency system) and upload the required documents. Then book an appointment on the Mata platform to sign the equivalency form at the Ministry. When it is done, your request's follow-up section shows \"accepted\".",
      answerAr: "أنشئ حساباً في منظومة الديرة (نظام معادلة الشهادات) وأرفق المستندات المطلوبة، ثم احجز موعداً عبر منصة متى للتوقيع على استمارة المعادلة في الوزارة. وعند الانتهاء تظهر عبارة \"مقبولة\" في خانة المتابعات.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "equivalency-rejected", topic: "equivalency",
      questionEn: "My equivalency was rejected or has a mistake. What can I do?",
      questionAr: "رُفضت معادلتي أو فيها خطأ، ماذا أفعل؟",
      answerEn: "To appeal a rejection, submit a letter at the Ministry of Higher Education, Mezzanine 3, counter 32 (citizen service). To fix a mistake in the equivalency document, go to the reception on Mezzanine 3.",
      answerAr: "للتظلم من الرفض قدّم كتاباً في وزارة التعليم العالي، ميزانين 3، كاونتر 32 (خدمة المواطن). ولتصحيح خطأ في وثيقة المعادلة راجع موظف الاستقبال في ميزانين 3.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    },
    {
      id: "equivalency-from-abroad", topic: "equivalency",
      questionEn: "I am outside Kuwait. Can someone sign or collect my equivalency for me?",
      questionAr: "أنا خارج الكويت، هل يمكن لأحد التوقيع أو استلام المعادلة عني؟",
      answerEn: "Yes, with an official special power of attorney issued by the Ministry of Justice.",
      answerAr: "نعم، بشرط تقديم توكيل رسمي (خاص) صادر من وزارة العدل.",
      status: "confirmed", sourceLabel: MOHE_FAQ.label, sourceUrl: MOHE_FAQ.url
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CLARIFICATIONS = CLARIFICATIONS;
}
