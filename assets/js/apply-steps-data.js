/**
 * moustaqbili | مستقبلي
 * "Apply for a Ministry scholarship, step by step" checklist (How to Apply page).
 *
 * Sources: Foreign Scholarship Plan 2026/2027 conditions (mohe.edu.kw),
 * Decree 197/2025 (scholarship regulation), Ministry statements reported by
 * Al-Jarida (June/July 2026). Checked 2026-10-12.
 *
 * Each step: titleEn/Ar, summaryEn/Ar (shown when closed), points (list),
 * links. Add flag: "unconfirmed" | "unverified" to a point that needs it.
 */

const APPLY_STEPS = {
  lastVerified: "2026-11-08",

  steps: [
    {
      id: "eligible",
      titleEn: "Check that you can apply",
      titleAr: "تأكد أنه يحق لك التقديم",
      summaryEn: "Age, certificate year, job and minimum %.",
      summaryAr: "العمر وسنة الشهادة والوظيفة والنسبة الدنيا.",
      points: [
        { en: "You are 16 to 23 years old.", ar: "عمرك من 16 إلى 23 سنة." },
        { en: "Your high school certificate is from 2024/2025 or 2025/2026.", ar: "شهادتك الثانوية من العام 2024/2025 أو 2025/2026." },
        { en: "You do not work for a government body.", ar: "لا تعمل في أي جهة حكومية." },
        { en: "Your high school % meets the minimum for the major and country you want.", ar: "نسبتك في الثانوية تحقق الحد الأدنى للتخصص والدولة التي تريدها." }
      ],
      links: [
        { labelEn: "Lowest % by country", labelAr: "أقل نسبة حسب الدولة", url: "more-info.html#plan" },
        { labelEn: "Search scholarships", labelAr: "ابحث في البعثات", url: "results.html" }
      ]
    },
    {
      id: "prepare",
      titleEn: "Prepare your tests and papers",
      titleAr: "جهّز اختباراتك وأوراقك",
      summaryEn: "English test, Qudrat if needed, and an equivalency letter for private schools.",
      summaryAr: "اختبار اللغة، والقدرات عند الحاجة، وكتاب المعادلة لطلبة المدارس الخاصة.",
      points: [
        { en: "Take IELTS Academic (not General) with 5.5 in every part, or TOEFL with 47. The test must be taken in Kuwait.", ar: "أدِّ اختبار IELTS الأكاديمي (وليس العام) بدرجة 5.5 في كل قسم، أو TOEFL بدرجة 47، ويجب أداؤه داخل الكويت." },
        { en: "Take the Qudrat tests if you want medicine, dentistry, veterinary medicine, pharmacy or engineering.", ar: "أدِّ اختبارات القدرات إذا كنت تريد الطب أو طب الأسنان أو الطب البيطري أو الصيدلة أو الهندسة." },
        { en: "Studied at a private, international or foreign school? Get an equivalency letter from the Private Education Department at the Ministry of Education.", ar: "درست في مدرسة خاصة أو دولية أو أجنبية؟ احصل على كتاب المعادلة من إدارة التعليم الخاص بوزارة التربية." },
        { en: "Make sure you can log in with Kuwait Mobile ID (Hawyti).", ar: "تأكد أنك تستطيع تسجيل الدخول عبر تطبيق هويتي." }
      ],
      links: [
        { labelEn: "Qudrat dates", labelAr: "مواعيد القدرات", url: "qudrat.html" },
        { labelEn: "Book IELTS", labelAr: "احجز IELTS", url: "https://takeielts.britishcouncil.org" }
      ]
    },
    {
      id: "register",
      titleEn: "Register on the Ministry's portal",
      titleAr: "سجّل في بوابة الوزارة",
      summaryEn: "Only during the registration window (in 2026: 14 June - 7 July).",
      summaryAr: "خلال فترة التسجيل فقط (في 2026: من 14 يونيو إلى 7 يوليو).",
      points: [
        { en: "Log in to the registration portal with Hawyti.", ar: "سجّل الدخول إلى بوابة التسجيل عبر هويتي." },
        { en: "Enter your details and upload: your final school transcript (all secondary years), an equivalency letter from Private Education (foreign schools only), your Qudrat and Tahsili certificates (Saudi certificate only), your and your guardian's civil IDs, your passport data page, and your original IELTS or TOEFL result if you have one.", ar: "أدخل بياناتك وارفع: كشف درجات الثانوية النهائي لجميع صفوف المرحلة الثانوية، وإفادة المعادلة من إدارة التعليم الخاص (للثانويات الأجنبية)، وشهادتي القدرات والتحصيلي (للثانوية السعودية)، والبطاقة المدنية لك ولولي الأمر، وصفحة البيانات في جواز السفر، ونتيجة IELTS أو TOEFL الأصلية إن وجدت." },
        { en: "Registering on the first day gives no advantage. What counts is meeting the conditions, correct details and complete documents.", ar: "التسجيل في أول يوم لا يعطيك أفضلية، فالمهم استيفاء الشروط وصحة البيانات واكتمال المستندات." },
        { en: "The next registration window has not been announced yet. It usually opens in June.", ar: "لم يُعلن عن فترة التسجيل القادمة بعد، وعادة تبدأ في يونيو.", flag: "unconfirmed" }
      ],
      links: [
        { labelEn: "Registration portal", labelAr: "بوابة التسجيل", url: "https://reg2.mohe.edu.kw/Account/Login" },
        { labelEn: "Plan 2026/2027 conditions", labelAr: "شروط خطة 2026/2027", url: "https://www.mohe.edu.kw/site/ar/eServices/ServiceDetails/1?PageID=3" }
      ]
    },
    {
      id: "results",
      titleEn: "Wait for the results",
      titleAr: "انتظر النتائج",
      summaryEn: "Places are given by ranking, not by who registers first.",
      summaryAr: "تُوزع المقاعد حسب الترتيب، وليس حسب أسبقية التسجيل.",
      points: [
        { en: "Medicine and engineering: students are ranked by the equivalent average (high school % plus Qudrat).", ar: "الطب والهندسة: يُرتب الطلبة حسب المعدل المكافئ (نسبة الثانوية مع القدرات)." },
        { en: "Other majors: students are ranked by their high school %.", ar: "التخصصات الأخرى: يُرتب الطلبة حسب نسبة الثانوية." },
        { en: "In 2026, results came out in July and 2,704 high school graduates were accepted, plus 33 with English secondary or IB certificates in August.", ar: "في 2026 ظهرت النتائج في يوليو، وقُبل 2,704 من خريجي الثانوية، ثم 33 من حملة الشهادة الإنجليزية أو IB في أغسطس." }
      ],
      links: []
    },
    {
      id: "paperwork",
      titleEn: "Finish your paperwork within 60 days",
      titleAr: "أكمل أوراقك خلال 60 يوماً",
      summaryEn: "Match your original certificate at the Ministry, or the scholarship is cancelled.",
      summaryAr: "طابق شهادتك الأصلية في الوزارة، وإلا تُلغى البعثة.",
      points: [
        { en: "Take your original high school certificate to the Ministry to be matched.", ar: "راجع الوزارة لمطابقة شهادة الثانوية الأصلية." },
        { en: "Your guardian approves the financial and academic pledge (a written promise about your studies) and your medical form in the Sahel app. No visit is needed for these.", ar: "يصادق ولي الأمر على التعهد المالي والأكاديمي (التزام مكتوب بشأن دراستك) ونموذج الفحص الطبي عبر تطبيق سهل، دون الحاجة لمراجعة الوزارة." },
        { en: "If you miss the 60 days, the scholarship is cancelled.", ar: "إذا فاتتك مهلة الـ60 يوماً تُلغى البعثة." }
      ],
      links: [
        { labelEn: "Sahel app", labelAr: "تطبيق سهل", url: "https://sahel.paci.gov.kw" }
      ]
    },
    {
      id: "travel",
      titleEn: "Get ready to travel",
      titleAr: "استعد للسفر",
      summaryEn: "University offer, financial guarantee letter and visa.",
      summaryAr: "قبول الجامعة والكتاب المالي والتأشيرة.",
      points: [
        { en: "Get your offer from the university (see \"Apply to the university\" below).", ar: "احصل على قبول الجامعة (انظر \"التقديم على الجامعة\" في الأسفل)." },
        { en: "The cultural office gives you the financial guarantee letter for your visa.", ar: "يعطيك المكتب الثقافي الكتاب المالي لاستخدامه في التأشيرة." },
        { en: "Apply for your student visa.", ar: "قدّم على تأشيرة الدراسة." },
        { en: "Your monthly allowance starts when you arrive in your country of study.", ar: "يبدأ مخصصك الشهري عند وصولك إلى بلد الدراسة." },
        { en: "You have one full calendar year from your acceptance to reach the English score your university asks for, before you travel.", ar: "لديك عام ميلادي كامل من تاريخ قبولك لتحقيق درجة اللغة الإنجليزية التي تطلبها جامعتك، قبل سفرك إلى مقر البعثة." }
      ],
      links: [
        { labelEn: "Student visas", labelAr: "تأشيرات الدراسة", url: "more-info.html#visa" },
        { labelEn: "Cultural offices", labelAr: "المكاتب الثقافية", url: "contact.html#offices" }
      ]
    }
  ],

  meritNoteEn: "Merit programme: you can still apply until 24 February 2027 if you get an offer from a university on the merit list. You need 95% for medicine, dentistry and pharmacy; for other majors the Ministry's merit registration guide says 90% but the Ministry's merit page says \"the plan minimum\", so check with the Ministry.",
  meritNoteAr: "برنامج التميز: يمكنك التقديم حتى 24 فبراير 2027 إذا حصلت على قبول في جامعة من قائمة التميز. تحتاج 95% للطب وطب الأسنان والصيدلة؛ ولبقية التخصصات يذكر دليل التسجيل في برنامج التميز 90% بينما تذكر صفحة التميز \"الحد الأدنى للخطة\"، فتأكد من الوزارة."
};

if (typeof window !== 'undefined') {
  window.APPLY_STEPS = APPLY_STEPS;
}
