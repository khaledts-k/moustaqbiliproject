/**
 * moustaqbili | مستقبلي
 * "More info" page content, in plain language (English / Arabic).
 *
 * Each section has blocks rendered by renderMoreInfoPage() in app.js:
 *   text | list | terms | steps | cards | links | allowances | plan
 * Add `flag: "unconfirmed" | "unverified"` to anything not backed by an
 * official 2026/2027 source.
 */

const MORE_INFO = {
  lastVerified: "2026-11-08",

  sections: [
    // ---------------------------------------------------------------------
    {
      id: "words",
      titleEn: "Words you will see",
      titleAr: "كلمات ستمر عليك",
      introEn: "Short meanings for the words used on this site and on the Ministry's website.",
      introAr: "معانٍ مختصرة للكلمات المستخدمة في هذا الموقع وفي موقع الوزارة.",
      blocks: [
        {
          type: "terms",
          items: [
            { termEn: "Scholarship plan", termAr: "خطة البعثات", defEn: "The Ministry's yearly list of countries, majors and minimum grades it will pay for.", defAr: "قائمة سنوية من الوزارة بالدول والتخصصات والنسب الدنيا التي تتكفل بها." },
            { termEn: "High school % (Thanawiya)", termAr: "نسبة الثانوية", defEn: "Your final percentage in grade 12. Most rules on this site use it.", defAr: "نسبتك النهائية في الصف الثاني عشر، وتعتمد عليها معظم الشروط في هذا الموقع." },
            { termEn: "Science / Arts stream", termAr: "القسم العلمي / الأدبي", defEn: "Your track in high school. Medicine, engineering and most health majors need the science stream.", defAr: "مسارك في الثانوية. الطب والهندسة ومعظم التخصصات الصحية تتطلب القسم العلمي." },
            { termEn: "Monthly allowance", termAr: "المخصص الشهري", defEn: "Money the Ministry pays you every month to live on while you study abroad. Tuition is paid separately.", defAr: "مبلغ تدفعه الوزارة لك كل شهر للمعيشة أثناء دراستك في الخارج. الرسوم الدراسية تُدفع بشكل منفصل." },
            { termEn: "Merit programme", termAr: "برنامج التميز", defEn: "A special track for high achievers who get into top universities on the Ministry's list. It pays 50% more each month.", defAr: "مسار خاص للمتفوقين المقبولين في جامعات متميزة من قائمة الوزارة، ويزيد المخصص الشهري بنسبة 50%." },
            { termEn: "Merit universities", termAr: "جامعات التميز", defEn: "The universities on the Ministry's merit list. The list is kept by the National Bureau for Academic Accreditation.", defAr: "الجامعات المدرجة في قائمة التميز لدى الوزارة، ويحتفظ بها الجهاز الوطني للاعتماد الأكاديمي." },
            { termEn: "Qudrat", termAr: "القدرات", defEn: "Kuwait University's aptitude tests in English, Math and Arabic. Also used for medicine and engineering scholarships abroad.", defAr: "اختبارات القدرات بجامعة الكويت في الإنجليزي والرياضيات والعربي، وتُستخدم أيضاً لبعثات الطب والهندسة في الخارج." },
            { termEn: "Equivalent percentage", termAr: "المعدل المكافئ", defEn: "A mix of your high school % and your Qudrat scores. Kuwait University ranks applicants by it.", defAr: "مزيج من نسبة الثانوية ودرجات القدرات، وترتب جامعة الكويت المتقدمين على أساسه." },
            { termEn: "Foundation year", termAr: "السنة التأسيسية", defEn: "A one-year course before the degree starts. Common in the UK and Australia for students from Kuwaiti public schools.", defAr: "سنة دراسية واحدة قبل بداية الدراسة الجامعية، وهي شائعة في بريطانيا وأستراليا لخريجي المدارس الحكومية الكويتية." },
            { termEn: "Direct entry", termAr: "القبول المباشر", defEn: "Starting the degree straight away, without a foundation year.", defAr: "البدء في الدراسة الجامعية مباشرة دون سنة تأسيسية." },
            { termEn: "UKVI IELTS", termAr: "UKVI IELTS", defEn: "A version of the IELTS English test approved for UK visas. The plan requires it for the UK.", defAr: "نسخة من اختبار IELTS معتمدة لتأشيرات بريطانيا، وتشترطها الخطة للدراسة في المملكة المتحدة." },
            { termEn: "Cultural office", termAr: "المكتب الثقافي", defEn: "The Ministry's office in your country of study. It pays your allowance and handles your university matters.", defAr: "مكتب الوزارة في بلد دراستك، يصرف مخصصك ويتابع شؤونك الجامعية." },
            { termEn: "Financial guarantee letter", termAr: "الكتاب المالي", defEn: "A letter from the cultural office saying the government pays your fees and allowance. Universities and embassies ask for it.", defAr: "كتاب من المكتب الثقافي يؤكد أن الحكومة تتكفل برسومك ومخصصك، وتطلبه الجامعات والسفارات." },
            { termEn: "Certificate equivalency", termAr: "معادلة الشهادة", defEn: "Official approval that a certificate from another system or country counts as its Kuwaiti equal.", defAr: "اعتماد رسمي بأن الشهادة من نظام أو بلد آخر تعادل الشهادة الكويتية." },
            { termEn: "Accreditation", termAr: "الاعتماد الأكاديمي", defEn: "Approval of a university or programme by Kuwait. Study only at approved places so your degree is recognised.", defAr: "اعتماد الكويت للجامعة أو البرنامج. ادرس في جهة معتمدة فقط حتى يُعترف بشهادتك." },
            { termEn: "PUC internal scholarship", termAr: "البعثة الداخلية", defEn: "A government scholarship to study at an approved private university inside Kuwait.", defAr: "بعثة حكومية للدراسة في جامعة خاصة معتمدة داخل الكويت." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "timeline",
      titleEn: "Your scholarship year, step by step",
      titleAr: "عام البعثة خطوة بخطوة",
      introEn: "The usual order of things for a grade 12 student. Exact dates change every year.",
      introAr: "الترتيب المعتاد لطالب الصف الثاني عشر. تتغير المواعيد الدقيقة كل عام.",
      blocks: [
        {
          type: "steps",
          items: [
            { whenEn: "October - December", whenAr: "أكتوبر - ديسمبر", whatEn: "Take the Qudrat tests (first round) if you want medicine, dentistry, pharmacy, engineering, Kuwait University or AASU.", whatAr: "أدِّ اختبارات القدرات (الفرصة الأولى) إذا كنت تريد الطب أو طب الأسنان أو الصيدلة أو الهندسة أو جامعة الكويت أو جامعة عبد الله السالم." },
            { whenEn: "Autumn - winter", whenAr: "الخريف - الشتاء", whatEn: "Take IELTS or TOEFL in Kuwait. Apply to universities abroad if you want (UK medicine closes on 15 October; most UK courses in mid-January).", whatAr: "أدِّ اختبار IELTS أو TOEFL داخل الكويت. وقدّم على الجامعات في الخارج إن رغبت (الطب في بريطانيا يُغلق في 15 أكتوبر، ومعظم التخصصات الأخرى منتصف يناير).", flag: "unverified" },
            { whenEn: "January - April", whenAr: "يناير - أبريل", whatEn: "Second Qudrat round, if you need a better score. Not announced yet for 2027.", whatAr: "الفرصة الثانية لاختبارات القدرات إن احتجت درجة أفضل. لم يُعلن عنها بعد لعام 2027.", flag: "unconfirmed" },
            { whenEn: "June - July", whenAr: "يونيو - يوليو", whatEn: "Register for a scholarship on the Ministry's portal after your results. In 2026 this ran from 14 June to 7 July.", whatAr: "سجّل في البعثة على بوابة الوزارة بعد ظهور نتيجتك. في 2026 كان التسجيل من 14 يونيو إلى 7 يوليو." },
            { whenEn: "July - August", whenAr: "يوليو - أغسطس", whatEn: "The Ministry announces who is accepted. Then you get a university offer, the financial guarantee letter and your visa.", whatAr: "تعلن الوزارة أسماء المقبولين، ثم تحصل على قبول الجامعة والكتاب المالي والتأشيرة." },
            { whenEn: "Until 24 February 2027", whenAr: "حتى 24 فبراير 2027", whatEn: "You can still apply for the merit programme if you get into a merit university.", whatAr: "يمكنك التقديم على برنامج التميز إذا حصلت على قبول في إحدى جامعات التميز." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "plan",
      titleEn: "The 2026/2027 scholarship rules",
      titleAr: "شروط البعثات 2026/2027",
      introEn: "The main rules from the Ministry's plan, and the lowest high school % accepted in each country.",
      introAr: "أهم الشروط من خطة الوزارة، وأقل نسبة ثانوية مقبولة في كل دولة.",
      blocks: [{ type: "plan" }]
    },

    // ---------------------------------------------------------------------
    {
      id: "money",
      titleEn: "Money: what the Ministry pays",
      titleAr: "المال: ما تدفعه الوزارة",
      introEn: "The Ministry pays your tuition directly to the university. On top of that you get a monthly allowance to live on.",
      introAr: "تدفع الوزارة رسومك الدراسية للجامعة مباشرة، وفوق ذلك تحصل على مخصص شهري للمعيشة.",
      blocks: [
        { type: "allowances" },
        {
          type: "reveal",
          items: [
            {
              questionEn: "How much more do merit students get?", questionAr: "كم يزيد مخصص طلبة التميز؟",
              answerEn: "+50%", answerAr: "+50%",
              subEn: "each month, after the foundation year", subAr: "شهرياً، بعد السنة التأسيسية",
              factEn: "It starts only after the foundation (preparatory) stage.",
              factAr: "تبدأ الزيادة بعد انتهاء المرحلة التمهيدية (التأسيسية) فقط.", source: "mohe_merit"
            },
            {
              questionEn: "Is anything else paid?", questionAr: "هل تُدفع مبالغ أخرى؟",
              answerEn: "Yes", answerAr: "نعم",
              subEn: "books, equipment, clothing and more", subAr: "الكتب والأجهزة والملابس وغيرها",
              factEn: "Books, equipment, clothing and clinical training are paid on top; the amounts depend on the country and major.",
              factAr: "تُصرف مبالغ للكتب والأجهزة والملابس والتدريب السريري، وتختلف حسب الدولة والتخصص.", source: "mohe_allowances"
            },
            {
              questionEn: "When does the allowance start?", questionAr: "متى يبدأ صرف المخصص؟",
              answerEn: "When you arrive", answerAr: "عند وصولك",
              subEn: "in your study country", subAr: "إلى بلد الدراسة",
              factEn: "It starts when you arrive in your study country, at most two weeks before classes.",
              factAr: "يبدأ عند وصولك إلى بلد الدراسة، وبحد أقصى أسبوعين قبل بدء الدراسة.", source: "decree197"
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "merit",
      titleEn: "The merit programme",
      titleAr: "برنامج التميز",
      introEn: "For top students who get into a university on the Ministry's merit list.",
      introAr: "للطلبة المتفوقين المقبولين في جامعة من قائمة التميز لدى الوزارة.",
      blocks: [
        {
          type: "list",
          en: [
            "Who can apply: 95% in high school for medicine, dentistry and pharmacy. For other majors the Ministry's merit registration guide says 90%, while the Ministry's merit page says \"the plan minimum\". {{unconfirmed}}",
            "What you get: 50% more monthly allowance after the preparatory stage.",
            "Deadline for 2026/2027: 24 February 2027.",
            "The list of merit universities is kept by the National Bureau for Academic Accreditation. It was last changed in November 2025, when New Zealand and Australia lists were added.",
            "For the UK, the list comes from Ministerial Decree 16/2025. We found no newer decree."
          ],
          ar: [
            "من يحق له التقديم: 95% في الثانوية للطب وطب الأسنان والصيدلة. ولبقية التخصصات يذكر دليل التسجيل في برنامج التميز 90%، بينما تذكر صفحة التميز \"الحد الأدنى للخطة\". {{unconfirmed}}",
            "ما تحصل عليه: زيادة 50% في المخصص الشهري بعد المرحلة التمهيدية.",
            "آخر موعد للعام 2026/2027: 24 فبراير 2027.",
            "يحتفظ الجهاز الوطني للاعتماد الأكاديمي بقائمة جامعات التميز، وآخر تعديل عليها كان في نوفمبر 2025 بإضافة قوائم نيوزيلندا وأستراليا.",
            "قائمة بريطانيا صادرة بالقرار الوزاري 16/2025، ولم نجد قراراً أحدث."
          ]
        },
        { type: "links", items: [{ labelEn: "Merit university lists (NBAQ)", labelAr: "قوائم جامعات التميز (الجهاز الوطني للاعتماد)", url: "https://nbaq.edu.kw/website/merits" }] }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "english",
      titleEn: "English tests",
      titleAr: "اختبارات اللغة الإنجليزية",
      introEn: "What the plan asks for, and what UKVI IELTS means.",
      introAr: "ما تطلبه الخطة، وما المقصود بـ UKVI IELTS.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "To register for the scholarship", titleAr: "للتسجيل في البعثة", bodyEn: "IELTS Academic (not General) 5.5 overall and in every part, or TOEFL 47. The test must be taken in Kuwait. Since January 2026 TOEFL also shows a new 1-6 score; the plan's 47 is on the usual 0-120 scale, which TOEFL still reports.", bodyAr: "IELTS أكاديمي (وليس العام) 5.5 كمعدل عام وفي كل قسم، أو TOEFL بدرجة 47، ويجب أداء الاختبار داخل الكويت. منذ يناير 2026 يعرض TOEFL أيضاً درجة جديدة من 1 إلى 6، أما درجة 47 في الخطة فهي على مقياس 0-120 المعتاد الذي ما زال TOEFL يصدره." },
            { titleEn: "After you are accepted", titleAr: "بعد القبول", bodyEn: "You have one calendar year to reach the score your university asks for. That is usually higher (often 6.5 or 7.0).", bodyAr: "لديك سنة ميلادية واحدة لتحقيق الدرجة التي تطلبها جامعتك، وهي عادة أعلى (غالباً 6.5 أو 7.0)." },
            { titleEn: "Studying in the UK", titleAr: "الدراسة في بريطانيا", bodyEn: "The plan requires UKVI IELTS for the UK. It is the same test, booked as the UKVI version. A normal IELTS may not be accepted for a UK student visa, so book the UKVI one.", bodyAr: "تشترط الخطة UKVI IELTS للدراسة في بريطانيا، وهو الاختبار نفسه لكن يُحجز بنسخة UKVI. قد لا يُقبل IELTS العادي لتأشيرة الطالب البريطانية، لذا احجز نسخة UKVI." }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "entry",
      titleEn: "Foundation year or direct entry?",
      titleAr: "سنة تأسيسية أم قبول مباشر؟",
      introEn: "Whether you start with a foundation year depends on the country and your school system.",
      introAr: "يعتمد البدء بسنة تأسيسية على الدولة ونظامك المدرسي.",
      flag: "unverified",
      blocks: [
        { type: "text", en: "In the UK, graduates of Kuwaiti public schools usually start with a 1-year foundation year. In medicine, dentistry and pharmacy, failing it or the interview means the Ministry cannot give you a place.", ar: "في بريطانيا يبدأ خريجو المدارس الحكومية الكويتية عادةً بسنة تأسيسية واحدة. وفي الطب وطب الأسنان والصيدلة يتعذر على الوزارة توفير قبول عند عدم اجتيازها أو عدم اجتياز المقابلة." },
        { type: "links", items: [{ labelEn: "Official source: Ministry plan registration guide (PDF, page 39)", labelAr: "المصدر الرسمي: إرشادات التسجيل في خطة البعثات (PDF، صفحة 39)", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485248.pdf" }] }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "visa",
      titleEn: "Student visas",
      titleAr: "تأشيرات الدراسة",
      introEn: "Your university and the cultural office give you the papers you need. These are the main ones per country.",
      introAr: "تعطيك الجامعة والمكتب الثقافي الأوراق التي تحتاجها. هذه أهمها حسب الدولة.",
      blocks: [
        {
          type: "cards",
          items: [
            { titleEn: "United States (F-1 visa)", titleAr: "الولايات المتحدة (تأشيرة F-1)", bodyEn: "Form I-20 from the university, the DS-160 online form, the SEVIS fee receipt ($350), the financial guarantee letter, and an interview at the US Embassy. Since June 2025 you must set all your social media accounts to public.", bodyAr: "نموذج I-20 من الجامعة، ونموذج DS-160 الإلكتروني، وإيصال رسوم SEVIS (350 دولاراً)، والكتاب المالي، ومقابلة في السفارة الأمريكية. ومنذ يونيو 2025 يجب أن تجعل كل حساباتك في وسائل التواصل الاجتماعي عامة." },
            { titleEn: "United Kingdom (Student visa)", titleAr: "المملكة المتحدة (تأشيرة طالب)", bodyEn: "A CAS number from the university, the financial guarantee letter, UKVI IELTS (for a foundation year), and written consent from both parents if you are under 18. The fee is £558. The UK now gives you a digital visa (eVisa) instead of a residence card. Kuwaitis do not need a TB test.", bodyAr: "رقم CAS من الجامعة، والكتاب المالي، وUKVI IELTS (للسنة التأسيسية)، وموافقة مكتوبة من الوالدين إذا كان عمرك أقل من 18 سنة. الرسوم 558 جنيهاً. وتمنحك بريطانيا الآن تأشيرة إلكترونية (eVisa) بدلاً من بطاقة الإقامة. ولا يحتاج الكويتيون إلى فحص السل." },
            { titleEn: "Ireland (D study visa)", titleAr: "أيرلندا (تأشيرة دراسة D)", bodyEn: "Applied for through the Irish visa office in Abu Dhabi. You need the university acceptance letter, proof you can access at least €10,000 (the financial guarantee letter), a passport valid for 12 months, and private medical insurance.", bodyAr: "يُقدَّم عليها عبر مكتب التأشيرات الأيرلندي في أبوظبي. تحتاج خطاب القبول من الجامعة، وإثبات أنك تملك 10,000 يورو على الأقل (الكتاب المالي)، وجواز سفر صالح لمدة 12 شهراً، وتأميناً طبياً خاصاً." },
            { titleEn: "Australia (Subclass 500)", titleAr: "أستراليا (فئة 500)", bodyEn: "The electronic Confirmation of Enrolment (CoE), student health cover (OSHC) and the financial guarantee letter. The Genuine Student questions are answered inside the visa application form.", bodyAr: "تأكيد التسجيل الإلكتروني (CoE)، والتأمين الصحي للطلبة (OSHC)، والكتاب المالي. وتُجيب عن أسئلة الطالب الحقيقي (Genuine Student) داخل نموذج طلب التأشيرة." },
            { titleEn: "Malta (D visa, then residence permit)", titleAr: "مالطا (تأشيرة D ثم تصريح إقامة)", bodyEn: "A national long-stay visa, then a residence permit from Identità in Malta. You need the acceptance letter, the financial guarantee letter, health insurance with at least €100,000 cover (unless your university makes you exempt), and proof of accommodation.", bodyAr: "تأشيرة وطنية طويلة المدة، ثم تصريح إقامة من Identità في مالطا. تحتاج خطاب القبول، والكتاب المالي، وتأميناً صحياً بتغطية لا تقل عن 100,000 يورو (إلا إذا كانت جامعتك تعفيك منه)، وإثبات السكن." }
          ]
        },
        { type: "text", en: "The financial guarantee letter replaces a personal bank statement: it shows the embassy that the government pays for your studies.", ar: "يُغني الكتاب المالي عن كشف الحساب البنكي الشخصي، إذ يثبت للسفارة أن الحكومة تتكفل بدراستك." }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "certificates",
      titleEn: "Certificates and approval",
      titleAr: "الشهادات والاعتماد",
      introEn: "Two checks that protect your degree.",
      introAr: "خطوتان تحميان شهادتك.",
      blocks: [
        { type: "text", en: "Before you apply, check on the NBAQ website that the university and programme are approved, or your degree may not be recognised in Kuwait.", ar: "قبل التقديم، تأكد من موقع الجهاز الوطني للاعتماد الأكاديمي أن الجامعة والبرنامج معتمدان، وإلا قد لا يُعترف بشهادتك في الكويت." },
        { type: "links", items: [
          { labelEn: "Official source: search approved universities (NBAQ)", labelAr: "المصدر الرسمي: البحث في الجامعات المعتمدة", url: "https://nbaq.edu.kw/search/" },
          { labelEn: "Verify an equivalency certificate (Ministry)", labelAr: "التحقق من شهادة معادلة (الوزارة)", url: "https://mohe.edu.kw/Verify/" }
        ] }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "after",
      titleEn: "After you are accepted",
      titleAr: "بعد القبول",
      introEn: "Rules that apply once you have a scholarship (Decree 197/2025 and the 2026/2027 plan).",
      introAr: "قواعد تنطبق بعد حصولك على البعثة (القرار 197/2025 وخطة 2026/2027).",
      blocks: [
        {
          type: "list",
          en: [
            "Within 60 days of the results, take your original school certificate to the Ministry to be matched, or the scholarship is cancelled. Your guardian approves the financial and academic pledge in the Sahel app.",
            "You have one full calendar year from your acceptance to reach the English score your university asks for, before you travel.",
            "Your monthly allowance starts when you arrive in your study country (at most two weeks before classes).",
            "You can change your major only once, and only after you start studying.",
            "You can move to another country only once, and only for set reasons (for example a refused visa).",
            "You can delay the start by one year at most, and only for set reasons (no visa, health, or an exceptional reason).",
            "Failing a year, missing classes or getting academic warnings reduces your allowance."
          ],
          ar: [
            "خلال 60 يوماً من إعلان النتائج، راجع الوزارة لمطابقة شهادة الثانوية الأصلية، وإلا تُلغى البعثة. ويصادق ولي الأمر على التعهد المالي والأكاديمي عبر تطبيق سهل.",
            "لديك عام ميلادي كامل من تاريخ قبولك لتحقيق درجة اللغة الإنجليزية التي تطلبها جامعتك، قبل سفرك إلى مقر البعثة.",
            "يبدأ المخصص الشهري عند وصولك إلى بلد الدراسة (وبحد أقصى أسبوعين قبل بدء الدراسة).",
            "يمكنك تغيير التخصص مرة واحدة فقط، وبعد بدء الدراسة.",
            "يمكنك نقل البعثة إلى دولة أخرى مرة واحدة فقط، ولأسباب محددة (مثل رفض التأشيرة).",
            "يمكنك تأجيل البدء سنة واحدة كحد أقصى، ولأسباب محددة (عدم صدور التأشيرة، أو سبب صحي، أو سبب استثنائي).",
            "الرسوب أو الغياب أو الإنذارات الأكاديمية تخفض مخصصك."
          ]
        },
        { type: "text", en: "The Questions page explains each of these in more detail.", ar: "تشرح صفحة الأسئلة كل نقطة من هذه بتفصيل أكثر." }
      ]
    },

    // ---------------------------------------------------------------------
    {
      id: "links",
      titleEn: "Official links",
      titleAr: "روابط رسمية",
      introEn: "Go straight to the source.",
      introAr: "اذهب مباشرة إلى المصدر.",
      blocks: [
        {
          type: "links",
          items: [
            { labelEn: "Ministry of Higher Education", labelAr: "وزارة التعليم العالي", url: "https://www.mohe.edu.kw/site/" },
            { labelEn: "Scholarship plan 2026/2027 (PDF)", labelAr: "خطة البعثات 2026/2027 (PDF)", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485330.pdf" },
            { labelEn: "Monthly allowance tables", labelAr: "جداول المخصصات الشهرية", url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3" },
            { labelEn: "Merit allowance tables", labelAr: "جداول مخصصات التميز", url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/6?PageID=3" },
            { labelEn: "Scholarship registration portal", labelAr: "بوابة التسجيل في البعثات", url: "https://reg2.mohe.edu.kw/Account/Login" },
            { labelEn: "Kuwait University Qudrat registration", labelAr: "التسجيل في اختبارات القدرات", url: "https://portal.ku.edu.kw/placement" },
            { labelEn: "Private Universities Council", labelAr: "مجلس الجامعات الخاصة", url: "https://puc.edu.kw" },
            { labelEn: "Sahel government app", labelAr: "تطبيق سهل الحكومي", url: "https://sahel.paci.gov.kw" }
          ]
        }
      ]
    }
  ],

  // Monthly allowance by country, Plan 2026/2027 (Ministry tables). merit: null = no merit uplift listed.
  allowances: [
    { countryEn: "United States", countryAr: "الولايات المتحدة", currency: "USD", standard: 3900, merit: 5850 },
    { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", currency: "GBP", standard: 2850, merit: 4275 },
    { countryEn: "Ireland", countryAr: "أيرلندا", currency: "EUR", standard: 3450, merit: 5175 },
    { countryEn: "Malta", countryAr: "مالطا", currency: "EUR", standard: 3450, merit: null },
    { countryEn: "Australia", countryAr: "أستراليا", currency: "AUD", standard: 5850, merit: null, meritFlag: "unconfirmed" },
    { countryEn: "New Zealand", countryAr: "نيوزيلندا", currency: "NZD", standard: 7410, merit: null, meritFlag: "unconfirmed" },
    { countryEn: "Bahrain", countryAr: "البحرين", currency: "BHD", standard: 1219, merit: null },
    { countryEn: "Saudi Arabia", countryAr: "السعودية", currency: "SAR", standard: 12187, merit: null },
    { countryEn: "United Arab Emirates", countryAr: "الإمارات", currency: "AED", standard: 11944, merit: null }
  ]
};

if (typeof window !== 'undefined') {
  window.MORE_INFO = MORE_INFO;
}
