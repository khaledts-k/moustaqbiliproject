/**
 * moustaqbili | مستقبلي
 * Questions page: common misconceptions, answered in plain language.
 *
 * Questions are ones students and parents actually raise (official FAQs of the
 * Ministry, Kuwait University and the Kuwait Cultural Office in London, news
 * reports). Answers come from official sources, checked 2026-10-12.
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

const CLARIFICATIONS = {
  lastVerified: "2026-10-29",

  topics: [
    { id: "scholarships", labelEn: "Applying", labelAr: "التقديم" },
    { id: "english", labelEn: "English tests", labelAr: "اختبارات اللغة" },
    { id: "qudrat", labelEn: "Qudrat", labelAr: "القدرات" },
    { id: "merit", labelEn: "Merit programme", labelAr: "برنامج التميز" },
    { id: "allowance", labelEn: "Money", labelAr: "المخصصات" },
    { id: "after-acceptance", labelEn: "After you are accepted", labelAr: "بعد القبول" },
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
    }
  ]
};

if (typeof window !== 'undefined') {
  window.CLARIFICATIONS = CLARIFICATIONS;
}
