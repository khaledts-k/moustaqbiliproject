/**
 * moustaqbili | مستقبلي
 * "Navigate Moustaqbili" page: how the site works, in plain language (English / Arabic).
 * Same section/block format as more-info-data.js (rendered by renderSectionPage in app.js).
 * Cards may have a `url` to make the whole card a link.
 */

const NAVIGATE_GUIDE = {
  lastVerified: "2026-10-12",

  sections: [
    // ---------------------------------------------------------------------
    {
      id: "why",
      titleEn: "Why Moustaqbili exists",
      titleAr: "لماذا يوجد مستقبلي",
      introEn: "The problem, and what we do about it.",
      introAr: "المشكلة، وما نقدمه لحلها.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "The problem", titleAr: "المشكلة", bodyEn: "Scholarship information is spread across a long Ministry PDF, separate cultural office websites, university pages and news reports. Much of it is hard to read, out of date, or only in one language.", bodyAr: "معلومات البعثات موزعة بين ملف PDF طويل من الوزارة، ومواقع المكاتب الثقافية، وصفحات الجامعات، والأخبار. وكثير منها صعب القراءة أو قديم أو بلغة واحدة فقط." },
            { titleEn: "What we do", titleAr: "ما نقدمه", bodyEn: "We collect the important parts in one place, write them in simple English and Arabic, add calculators, and clearly mark anything we could not confirm. Moustaqbili is free and independent: it is not the Ministry's website.", bodyAr: "نجمع الأمور المهمة في مكان واحد، ونكتبها بالعربية والإنجليزية بكلمات بسيطة، ونضيف حاسبات، ونوضح أي معلومة لم نتمكن من تأكيدها. مستقبلي مجاني ومستقل، وليس موقع الوزارة." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "pages",
      titleEn: "What each page is for",
      titleAr: "الغرض من كل صفحة",
      introEn: "Start wherever your question is. Tap a box to open that page.",
      introAr: "ابدأ من حيث يكون سؤالك. اضغط على المربع لفتح الصفحة.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "Home", titleAr: "الرئيسية", url: "index.html", bodyEn: "Search scholarships by country, high school % and major. Convert an American GPA into a %.", bodyAr: "ابحث في البعثات حسب الدولة ونسبة الثانوية والتخصص، وحوّل المعدل الأمريكي إلى نسبة." },
            { titleEn: "Scholarships", titleAr: "البعثات", url: "results.html", bodyEn: "Your search results: each program's lowest % accepted, monthly money, requirements and a currency calculator.", bodyAr: "نتائج بحثك: أقل نسبة مقبولة لكل برنامج، والمبلغ الشهري، والشروط، وحاسبة العملات." },
            { titleEn: "Qudrat Tests", titleAr: "اختبارات القدرات", url: "qudrat.html", bodyEn: "Kuwait University test dates, how to register, and a calculator for your equivalent %.", bodyAr: "مواعيد اختبارات جامعة الكويت، وطريقة التسجيل، وحاسبة المعدل المكافئ." },
            { titleEn: "Study in Kuwait", titleAr: "الدراسة في الكويت", url: "local-universities.html", bodyEn: "Kuwait University, Abdullah Al-Salem University and private-university scholarships: lowest grades accepted and how scores are counted.", bodyAr: "جامعة الكويت وجامعة عبد الله السالم وبعثات الجامعات الخاصة: أقل النسب المقبولة وطريقة احتساب الدرجات." },
            { titleEn: "How to Apply", titleAr: "طريقة التقديم", url: "suggestions.html", bodyEn: "A step-by-step checklist for the Ministry scholarship, plus the websites for applying to universities.", bodyAr: "قائمة خطوات للتقديم على بعثة الوزارة، ومواقع التقديم على الجامعات." },
            { titleEn: "Questions", titleAr: "الأسئلة", url: "clarifications.html", bodyEn: "Common mix-ups, answered with official sources.", bodyAr: "أخطاء شائعة مع إجابات من مصادر رسمية." },
            { titleEn: "More Info", titleAr: "معلومات أكثر", url: "more-info.html", bodyEn: "Key words, the 2026/2027 rules, money by country, visas and what happens after you are accepted.", bodyAr: "الكلمات المهمة، وشروط 2026/2027، والمخصصات حسب الدولة، والتأشيرات، وما بعد القبول." },
            { titleEn: "Contact and Ask Us", titleAr: "التواصل واسألنا", url: "contact.html", bodyEn: "The Ministry's official emails and offices abroad, and a form to send us your own question.", bodyAr: "البريد الرسمي للوزارة ومكاتبها في الخارج، ونموذج لإرسال سؤالك إلينا." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "results",
      titleEn: "Understanding your search results",
      titleAr: "فهم نتائج البحث",
      introEn: "What each part of a result card means.",
      introAr: "معنى كل جزء في بطاقة النتيجة.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "One card = one program", titleAr: "كل بطاقة = برنامج واحد", bodyEn: "A card is one major (or group of majors) in one country, for example medicine in the UK.", bodyAr: "البطاقة تمثل تخصصاً واحداً (أو مجموعة تخصصات) في دولة واحدة، مثل الطب في بريطانيا." },
            { titleEn: "Lowest % accepted", titleAr: "أقل نسبة مقبولة", bodyEn: "The minimum high school % in the Ministry's plan for Kuwaiti public-school students. Reaching it lets you apply; it does not guarantee a place, because places are given by ranking.", bodyAr: "الحد الأدنى لنسبة الثانوية في خطة الوزارة لطلبة المدارس الحكومية. تحقيقه يسمح لك بالتقديم، لكنه لا يضمن المقعد، لأن المقاعد تُوزع حسب الترتيب." },
            { titleEn: "Money you get each month", titleAr: "المبلغ الشهري", bodyEn: "The Ministry's monthly allowance. The official amount is in the local currency (for example GBP). We also show it in Kuwaiti Dinar using today's exchange rate, so the KWD figure moves a little each day.", bodyAr: "المخصص الشهري من الوزارة. المبلغ الرسمي بعملة بلد الدراسة (مثل الجنيه الإسترليني)، ونعرضه أيضاً بالدينار حسب سعر الصرف اليوم، لذلك يتغير الرقم بالدينار قليلاً كل يوم." },
            { titleEn: "The Merit badge", titleAr: "علامة التميز", bodyEn: "The program includes universities on the Ministry's merit list. The higher merit amount applies only if you study at one of them, and only after the foundation stage.", bodyAr: "البرنامج يشمل جامعات من قائمة التميز لدى الوزارة. ومبلغ التميز الأعلى يُصرف فقط إذا درست في إحداها، وبعد المرحلة التأسيسية." },
            { titleEn: "The two buttons", titleAr: "الزران", bodyEn: "\"What you need\" shows grades, tests, dates and visa papers. \"Money & calculator\" shows the full allowance and converts it into other currencies.", bodyAr: "\"ما تحتاجه\" يعرض الدرجات والاختبارات والمواعيد وأوراق التأشيرة. و\"المبلغ والحاسبة\" يعرض المخصص كاملاً ويحوّله إلى عملات أخرى." },
            { titleEn: "How the level filter works", titleAr: "كيف يعمل فلتر المرحلة الدراسية", bodyEn: "All scholarships in the 2026/2027 plan are bachelor's level, for high-school graduates. \"Medical or dental degree\" shows medicine and dentistry (MBChB, MBBS, MD, BDS). \"Starts with a foundation year\" shows programs where you study a foundation year first. Master's and doctorate are greyed out because the plan doesn't offer them.", bodyAr: "كل البعثات في خطة 2026/2027 لمرحلة البكالوريوس، لخريجي الثانوية العامة. \"شهادة الطب أو طب الأسنان\" تعرض الطب وطب الأسنان (MBChB، MBBS، MD، BDS). و\"تبدأ بسنة تأسيسية\" تعرض البرامج التي تدرس فيها سنة تأسيسية أولاً. الماجستير والدكتوراه باللون الرمادي لأن الخطة لا تشملهما." },
            { titleEn: "How the % filter works", titleAr: "كيف يعمل فلتر النسبة", bodyEn: "Choosing \"90% - 94.9%\" shows every program whose lowest % accepted is 94.9% or lower, so you see everything you can reach.", bodyAr: "اختيار \"90% - 94.9%\" يعرض كل برنامج أقل نسبة مقبولة فيه 94.9% أو أقل، فترى كل ما يمكنك الوصول إليه." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "missing",
      titleEn: "Why you might not see your major or university",
      titleAr: "لماذا قد لا تجد تخصصك أو جامعتك",
      introEn: "The most common reasons, and what to do.",
      introAr: "أكثر الأسباب شيوعاً، وما يمكنك فعله.",
      blocks: [
        {
          type: "list",
          en: [
            "Detailed cards cover a few programs so far. For every other major in the 2026/2027 plan, the search shows a short entry with the countries and minimum %, and links to the Ministry's plan.",
            "Your % is below the program's minimum. Try the next bracket down, or remove the % from your search.",
            "\"Only merit universities\" is switched on. It hides every program without merit universities.",
            "The country is not in the 2026/2027 plan. For example, Canada is not included this year.",
            "The universities listed on a card are examples from the Ministry's merit list, not every approved university. Search the National Bureau for Academic Accreditation to check any university.",
            "Universities inside Kuwait are on the Study in Kuwait page, not in the scholarship results."
          ],
          ar: [
            "البطاقات التفصيلية تغطي عدداً قليلاً من البرامج حتى الآن. ولكل تخصص آخر في خطة 2026/2027 يعرض البحث بطاقة مختصرة بالدول والنسبة الدنيا، مع رابط لخطة الوزارة.",
            "نسبتك أقل من الحد الأدنى للبرنامج. جرّب الفئة الأقل، أو احذف النسبة من بحثك.",
            "خيار \"جامعات التميز فقط\" مفعّل، وهو يخفي كل برنامج لا يشمل جامعات تميز.",
            "الدولة غير موجودة في خطة 2026/2027، فمثلاً كندا غير مدرجة هذا العام.",
            "الجامعات في البطاقة أمثلة من قائمة التميز لدى الوزارة، وليست كل الجامعات المعتمدة. ابحث في موقع الجهاز الوطني للاعتماد الأكاديمي للتحقق من أي جامعة.",
            "الجامعات داخل الكويت موجودة في صفحة الدراسة في الكويت، وليست ضمن نتائج البعثات."
          ]
        },
        { type: "links", items: [
          { labelEn: "Ministry plan 2026/2027 (PDF)", labelAr: "خطة الوزارة 2026/2027 (PDF)", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf" },
          { labelEn: "Search approved universities (NBAQ)", labelAr: "البحث في الجامعات المعتمدة", url: "https://nbaq.edu.kw/search/" }
        ] }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "data",
      titleEn: "Where our information comes from",
      titleAr: "من أين نحصل على المعلومات",
      introEn: "We read official sources ourselves and write down when we last checked them.",
      introAr: "نقرأ المصادر الرسمية بأنفسنا ونسجل تاريخ آخر مراجعة.",
      blocks: [
        {
          type: "list",
          en: [
            "Scholarship rules, majors and minimum %: the Ministry's Foreign Scholarship Plan 2026/2027.",
            "Monthly allowances: the Ministry's 2026/2027 allowance tables (normal and merit).",
            "Rules after acceptance: the scholarship regulation, Ministerial Decree 197/2025.",
            "Qudrat dates, weights and Kuwait University cutoffs: Kuwait University and its Center for Evaluation and Measurement.",
            "Private-university scholarships: the Private Universities Council.",
            "Exchange rates: live rates from Exchange Rate API, with the Central Bank of Kuwait's rates saved as a backup.",
            "When an official source is missing we may use a news report quoting officials, and we say so."
          ],
          ar: [
            "شروط البعثات والتخصصات والنسب الدنيا: خطة البعثات الخارجية 2026/2027 لدى الوزارة.",
            "المخصصات الشهرية: جداول المخصصات 2026/2027 لدى الوزارة (العادية والتميز).",
            "قواعد ما بعد القبول: لائحة البعثات، القرار الوزاري 197/2025.",
            "مواعيد القدرات وأوزانها والحدود الدنيا في جامعة الكويت: جامعة الكويت ومركز القياس والتقويم.",
            "بعثات الجامعات الخاصة: مجلس الجامعات الخاصة.",
            "أسعار الصرف: أسعار مباشرة من Exchange Rate API، مع أسعار بنك الكويت المركزي كنسخة احتياطية.",
            "عند غياب المصدر الرسمي قد نعتمد على خبر صحفي ينقل تصريحاً رسمياً، ونذكر ذلك."
          ]
        },
        { type: "text", en: "Look for two small labels: \"Not confirmed\" means no official source shows it, and \"Not checked yet\" means it comes from an older version of this site. Found a mistake? Tell us on the Ask Us page.", ar: "انتبه لعلامتين صغيرتين: \"غير مؤكد\" تعني أنه لا يوجد مصدر رسمي يذكر المعلومة، و\"لم نراجعه بعد\" تعني أنها من نسخة سابقة من الموقع. وجدت خطأ؟ أخبرنا في صفحة اسألنا." }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "degrees",
      titleEn: "Degree names explained",
      titleAr: "شرح أسماء الشهادات",
      introEn: "The letters you see next to program names on the Scholarships page.",
      introAr: "الحروف التي تراها بجانب أسماء البرامج في صفحة البعثات.",
      blocks: [
        {
          type: "terms",
          items: [
            { termEn: "MBChB / MBBS", termAr: "MBChB / MBBS", defEn: "Bachelor of Medicine and Bachelor of Surgery (UK and Australia). Your first degree in medicine; after it you train as a doctor.", defAr: "بكالوريوس الطب والجراحة (بريطانيا وأستراليا). أول شهادة في الطب، وبعدها تتدرب لتصبح طبيباً." },
            { termEn: "MB BCh BAO", termAr: "MB BCh BAO", defEn: "Ireland's first degree in medicine: medicine, surgery and obstetrics (childbirth). It does the same job as an MBChB.", defAr: "أول شهادة في الطب في أيرلندا: الطب والجراحة والتوليد، وهي تعادل MBChB." },
            { termEn: "MD", termAr: "MD", defEn: "Doctor of Medicine. In Bahrain, Malta and parts of Australia it is the first degree in medicine. In the United States it is a postgraduate degree, which is why the plan offers no medicine there.", defAr: "دكتور في الطب. في البحرين ومالطا وبعض جامعات أستراليا هي أول شهادة في الطب. أما في الولايات المتحدة فهي دراسة عليا، ولذلك لا تطرح الخطة الطب هناك." },
            { termEn: "BMedSci", termAr: "BMedSci", defEn: "Bachelor of Medical Science. A science degree that, in some Australian programs, comes before the medical degree.", defAr: "بكالوريوس العلوم الطبية. شهادة علمية تأتي قبل شهادة الطب في بعض البرامج الأسترالية." },
            { termEn: "BDS", termAr: "BDS", defEn: "Bachelor of Dental Surgery: the first degree in dentistry.", defAr: "بكالوريوس جراحة الأسنان: أول شهادة في طب الأسنان." },
            { termEn: "MPharm / PharmD", termAr: "MPharm / PharmD", defEn: "Pharmacy degrees. MPharm is the UK's pharmacy degree; PharmD (Doctor of Pharmacy) is used in Saudi Arabia, the US and elsewhere.", defAr: "شهادات الصيدلة. MPharm شهادة الصيدلة في بريطانيا، وPharmD (دكتور صيدلة) تُستخدم في السعودية وأمريكا وغيرها." },
            { termEn: "BSc / BEng / BA", termAr: "BSc / BEng / BA", defEn: "Bachelor degrees: Bachelor of Science, Bachelor of Engineering, and Bachelor of Arts (humanities and social sciences).", defAr: "شهادات البكالوريوس: بكالوريوس العلوم، وبكالوريوس الهندسة، وبكالوريوس الآداب (العلوم الإنسانية والاجتماعية)." },
            { termEn: "Foundation year / MFP", termAr: "السنة التأسيسية / MFP", defEn: "A one-year course before the degree. MFP is the Medical Foundation Programme at the University of Malta.", defAr: "سنة دراسية قبل الشهادة الجامعية. وMFP هو برنامج التأسيس الطبي في جامعة مالطا." },
            { termEn: "IGCSE / AS-Level / A-Level", termAr: "IGCSE / AS-Level / A-Level", defEn: "Exams in the British school system. IGCSEs are taken around grade 10; AS-Levels and A-Levels in the last two years of school.", defAr: "اختبارات النظام البريطاني. تُؤدى IGCSE تقريباً في الصف العاشر، وAS-Level وA-Level في آخر سنتين من المدرسة." },
            { termEn: "GPA", termAr: "المعدل (GPA)", defEn: "Grade Point Average, used by American-system schools (out of 4.0). Use the converter on the home page to see it as a %.", defAr: "المعدل التراكمي في مدارس النظام الأمريكي (من 4.0). استخدم المحوّل في الصفحة الرئيسية لتحويله إلى نسبة." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "tools",
      titleEn: "Built-in tools",
      titleAr: "الأدوات المتوفرة",
      introEn: "Calculators and helpers you can use anywhere on the site.",
      introAr: "حاسبات وأدوات مساعدة يمكنك استخدامها في الموقع.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "GPA to % converter", titleAr: "محوّل المعدل إلى نسبة", url: "index.html", bodyEn: "On the home page. A rough guide only; the official conversion is done by the Ministry of Education.", bodyAr: "في الصفحة الرئيسية. تقدير تقريبي فقط، والمعادلة الرسمية تقوم بها وزارة التربية." },
            { titleEn: "Currency calculator", titleAr: "حاسبة العملات", url: "results.html", bodyEn: "In every program's \"Money & calculator\" window. Converts between 12 currencies with today's rates.", bodyAr: "في نافذة \"المبلغ والحاسبة\" لكل برنامج. تحوّل بين 12 عملة بأسعار اليوم." },
            { titleEn: "Kuwait University score calculator", titleAr: "حاسبة درجة جامعة الكويت", url: "qudrat.html#equivalent", bodyEn: "On the Qudrat page. Uses each college's official 2026/2027 weights.", bodyAr: "في صفحة القدرات، وتستخدم الأوزان الرسمية لكل كلية للعام 2026/2027." },
            { titleEn: "Scholarship checklist", titleAr: "قائمة خطوات البعثة", url: "suggestions.html#scholarship-steps", bodyEn: "On the How to Apply page. Tick off each step as you finish it.", bodyAr: "في صفحة طريقة التقديم. ضع علامة على كل خطوة عند إنجازها." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "privacy",
      titleEn: "What we save",
      titleAr: "ما الذي نحفظه",
      introEn: "There are no accounts and we do not collect your personal data.",
      introAr: "لا توجد حسابات، ولا نجمع بياناتك الشخصية.",
      blocks: [
        {
          type: "list",
          en: [
            "Your language choice, your checklist ticks and the latest exchange rates (for 12 hours) are saved only in your own browser, on your device.",
            "The Ask Us form opens your own email app. Nothing is sent until you press send there.",
            "Clearing your browser data removes everything we saved."
          ],
          ar: [
            "اختيار اللغة وعلامات قائمة الخطوات وآخر أسعار الصرف (لمدة 12 ساعة) تُحفظ فقط في متصفحك على جهازك.",
            "نموذج اسألنا يفتح تطبيق البريد لديك، ولا يُرسل أي شيء حتى تضغط إرسال هناك.",
            "مسح بيانات المتصفح يحذف كل ما حفظناه."
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "contact",
      titleEn: "Get in touch",
      titleAr: "تواصل معنا",
      introEn: "Email us about this website. For an official answer about your own scholarship, email the Ministry.",
      introAr: "راسلنا بخصوص هذا الموقع. وللحصول على إجابة رسمية عن بعثتك، راسل الوزارة.",
      blocks: [
        {
          type: "contacts",
          items: [
            { type: "email", labelEn: "Moustaqbili: questions about this site, or a mistake to report", labelAr: "مستقبلي: أسئلة عن الموقع أو الإبلاغ عن خطأ", value: "meshoabul@gmail.com" },
            { type: "email", labelEn: "Ministry of Higher Education: scholarship guidance for new applicants", labelAr: "وزارة التعليم العالي: الإرشاد في البعثات للمتقدمين الجدد", value: "scholarship_guidance_eservice@mohe.edu.kw" }
          ]
        },
        { type: "links", items: [
          { labelEn: "All Ministry department emails", labelAr: "بريد جميع إدارات الوزارة", url: "contact.html#emails" }
        ] }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.NAVIGATE_GUIDE = NAVIGATE_GUIDE;
}
