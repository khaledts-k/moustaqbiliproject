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
  label: "Decree 197/2025 (scholarship regulation, copy on mesferlaw.com)",
  url: "https://mesferlaw.com/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A-%D9%82%D8%B1%D8%A7%D8%B1-%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A/"
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
  lastVerified: "2026-11-10",

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
    { id: "universities", labelEn: "Universities abroad", labelAr: "الجامعات في الخارج" },
    { id: "grants", labelEn: "Grants", labelAr: "المنح الدراسية" },
    { id: "equivalency", labelEn: "Certificates", labelAr: "الشهادات" }
  ],

  items: [
    // ---------------- Applying ----------------
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
