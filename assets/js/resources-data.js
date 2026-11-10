/**
 * moustaqbili | مستقبلي
 * Resources page (resources.html): the official websites, portals and files students need,
 * in one place. Every link here is one the rest of the site already uses and was checked
 * against the source (Ministry, Kuwait University, NBAQ, AASU, PUC, test providers).
 *
 * Each item: labelEn/Ar, descEn/Ar, url (urlAr when the Arabic version is a different link).
 * Items are also in the site search (buildSearchIndex in app.js).
 */

const RESOURCES = {
  lastVerified: "2026-11-10",

  groups: [
    {
      id: "ministry", titleEn: "Ministry of Higher Education", titleAr: "وزارة التعليم العالي",
      keywords: "ministry mohe وزارة التعليم العالي",
      items: [
        { labelEn: "Ministry website", labelAr: "موقع الوزارة", descEn: "News, e-services and announcements.", descAr: "الأخبار والخدمات الإلكترونية والإعلانات.", url: "https://www.mohe.edu.kw/site/" },
        { labelEn: "Scholarship registration portal", labelAr: "بوابة التسجيل في البعثات", descEn: "Where you register for the scholarship plan, when registration is open.", descAr: "مكان التسجيل في خطة البعثات عند فتح التسجيل.", url: "https://reg2.mohe.edu.kw/Account/Login" },
        { labelEn: "Plan 2026/2027: conditions and allowances", labelAr: "خطة 2026/2027: الشروط والمخصصات", descEn: "The plan's conditions, the allowance table and the plan files.", descAr: "شروط الخطة وجدول المخصصات وملفات الخطة.", url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3" },
        { labelEn: "Plan registration guide (PDF)", labelAr: "إرشادات التسجيل في الخطة (PDF)", descEn: "The registration rules, pages 35-39.", descAr: "ضوابط التسجيل، الصفحات 35-39.", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485248.pdf" },
        { labelEn: "Majors and minimum percentages (PDF)", labelAr: "التخصصات والحدود الدنيا للنسب (PDF)", descEn: "Every major in the 2026/2027 plan and the lowest % accepted in each country.", descAr: "كل تخصصات خطة 2026/2027 وأقل نسبة مقبولة في كل دولة.", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/202661485330.pdf" },
        { labelEn: "Merit programme", labelAr: "برنامج البعثات المتميزة", descEn: "Registration for the merit programme (50% more allowance).", descAr: "التسجيل في برنامج التميز (زيادة 50% في المخصص).", url: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/6?PageID=3" },
        { labelEn: "Merit registration guide (PDF)", labelAr: "إرشادات التسجيل في برنامج التميز (PDF)", descEn: "The merit programme's rules and steps.", descAr: "ضوابط برنامج التميز وخطواته.", url: "https://www.mohe.edu.kw/site/assets/images/Uploads/20266149415.pdf" },
        { labelEn: "Ministry FAQ", labelAr: "الأسئلة الشائعة للوزارة", descEn: "Scholarships, grants and degree equivalency.", descAr: "البعثات والمنح ومعادلة الشهادات.", url: "https://www.mohe.edu.kw/site/AR/FAQ?PageID=8" },
        { labelEn: "Verify an equivalency certificate", labelAr: "التحقق من شهادة معادلة", descEn: "Check that a degree equivalency is genuine.", descAr: "تحقق من صحة شهادة المعادلة.", url: "https://mohe.edu.kw/Verify/" },
        { labelEn: "Cultural offices abroad", labelAr: "المكاتب الثقافية في الخارج", descEn: "The Ministry's full list. Phone numbers and emails are on this site's Contact page.", descAr: "القائمة الكاملة في موقع الوزارة، وأرقام الهواتف والبريد في صفحة التواصل بهذا الموقع.", url: "https://www.mohe.edu.kw/site/AR/CulturalOffices?PageID=18" },
        { labelEn: "Scholarship regulation (Decree 197/2025)", labelAr: "لائحة البعثات (القرار 197/2025)", descEn: "There is no official copy online; this is a legal publisher's copy.", descAr: "لا توجد نسخة رسمية على الإنترنت، وهذه نسخة من موقع قانوني.", url: "https://mesferlaw.com/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A-%D9%82%D8%B1%D8%A7%D8%B1-%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A/" }
      ]
    },
    {
      id: "qudrat", titleEn: "Qudrat (Kuwait University aptitude tests)", titleAr: "القدرات (اختبارات جامعة الكويت)",
      keywords: "qudrat aptitude test exam القدرات اختبار",
      items: [
        { labelEn: "Test dates", labelAr: "مواعيد الاختبارات", descEn: "Test days and the last day to register for each.", descAr: "أيام الاختبارات وآخر موعد للتسجيل لكل اختبار.", url: "https://cem.ku.edu.kw/ar/at" },
        { labelEn: "Registration portal", labelAr: "بوابة التسجيل", descEn: "Log in with your Civil ID number to register, pay and print your ticket.", descAr: "ادخل بالرقم المدني للتسجيل والدفع وطباعة بطاقة الدخول.", url: "https://portal.ku.edu.kw/kuplcmnt/faces/login.jspx" },
        { labelEn: "Test results", labelAr: "نتائج الاختبارات", descEn: "Your scores, about two weeks after the test. Also in the Sahel app.", descAr: "درجاتك بعد الاختبار بأسبوعين تقريباً، وأيضاً في تطبيق سهل.", url: "https://portal.ku.edu.kw/kuplcmnt/faces/loginplr.jspx" },
        { labelEn: "Sample tests", labelAr: "نماذج اختبارات", descEn: "Topics and past samples for Math, English and Arabic.", descAr: "موضوعات ونماذج سابقة للرياضيات والإنجليزي والعربي.", url: "https://cem.ku.edu.kw/ar/node/34867" },
        { labelEn: "Student guide (PDF)", labelAr: "دليل الطالب (PDF)", descEn: "Fees, scoring, the equivalent average and test-day rules.", descAr: "الرسوم والتصحيح والمعدل المكافئ وتعليمات يوم الاختبار.", url: "https://www.ku.edu.kw/sites/default/files/2026-09/2026APTE.pdf", urlAr: "https://www.ku.edu.kw/sites/default/files/2026-09/2026APTA.pdf" },
        { labelEn: "Qudrat FAQ", labelAr: "الأسئلة الشائعة للقدرات", descEn: "Kuwait University's official answers. Also on this site's Questions page.", descAr: "إجابات جامعة الكويت الرسمية، وهي أيضاً في صفحة الأسئلة بهذا الموقع.", url: "https://cem.ku.edu.kw/faqs", urlAr: "https://cem.ku.edu.kw/ar/faqs" },
        { labelEn: "\"Help Me\" service", labelAr: "خدمة ساعدني", descEn: "Report a problem with registration or your details. Email: cem.meas@ku.edu.kw", descAr: "للإبلاغ عن مشكلة في التسجيل أو البيانات. البريد: cem.meas@ku.edu.kw", url: "https://cemapp.ku.edu.kw/helpme" },
        { labelEn: "Instagram @cemvpaa", labelAr: "انستقرام @cemvpaa", descEn: "Where Kuwait University announces Qudrat dates.", descAr: "حيث تعلن جامعة الكويت مواعيد القدرات.", url: "https://www.instagram.com/cemvpaa/" },
        { labelEn: "IELTS instead of the English test (PDF)", labelAr: "IELTS بدلاً من اختبار الإنجليزي (PDF)", descEn: "How Kuwait University converts IELTS scores.", descAr: "كيف تعادل جامعة الكويت درجات IELTS.", url: "https://www.ku.edu.kw/sites/default/files/2025-06/english-ielts.pdf" },
        { labelEn: "Prep courses announcement", labelAr: "إعلان دورات التقوية", descEn: "Kuwait University's paid Qudrat prep rounds.", descAr: "دورات التقوية لاختبارات القدرات في جامعة الكويت (برسوم).", url: "https://www.ku.edu.kw/ar/media-center/announcements/jamt-alkwyt-tln-n-qd-dwrat-altqwyt-lakhtbarat-alqdrat-alfrst-alawly" }
      ]
    },
    {
      id: "kuwait", titleEn: "Universities in Kuwait", titleAr: "الجامعات في الكويت",
      keywords: "kuwait university ku aasu puc private جامعة الكويت عبدالله السالم الخاصة",
      items: [
        { labelEn: "Kuwait University admissions", labelAr: "القبول والتسجيل بجامعة الكويت", descEn: "The Deanship of Admission and Registration.", descAr: "عمادة القبول والتسجيل.", url: "https://do.ku.edu.kw/" },
        { labelEn: "Kuwait University: second semester 2026/2027 admission", labelAr: "جامعة الكويت: القبول للفصل الثاني 2026/2027", descEn: "Dates to apply for the second semester.", descAr: "مواعيد التقديم للفصل الدراسي الثاني.", url: "https://www.ku.edu.kw/ar/media-center/news/jamt-alkwyt-tln-mwayd-tqdym-tlbat-alalthaq-llfsl-aldrasy-althany-2026-2027" },
        { labelEn: "Kuwait University college admission rules (PDF)", labelAr: "شروط القبول في كليات جامعة الكويت (PDF)", descEn: "What each college needs, and its Qudrat weights.", descAr: "متطلبات كل كلية وأوزان القدرات فيها.", url: "https://www.ku.edu.kw/sites/default/files/2026-06/ku_colleges_rules%20%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A.pdf" },
        { labelEn: "Abdullah Al-Salem University admissions", labelAr: "القبول بجامعة عبدالله السالم", descEn: "Majors, minimums and how to apply.", descAr: "التخصصات والحدود الدنيا وطريقة التقديم.", url: "https://aasu.edu.kw/pages/undergraduate-admissions" },
        { labelEn: "Private Universities Council", labelAr: "مجلس الجامعات الخاصة", descEn: "Internal scholarships at private universities in Kuwait.", descAr: "البعثات الداخلية في الجامعات الخاصة بالكويت.", url: "https://puc.edu.kw" }
      ]
    },
    {
      id: "nbaq", titleEn: "Approved universities (NBAQ)", titleAr: "الجامعات المعتمدة (الجهاز الوطني للاعتماد)",
      keywords: "nbaq accreditation approved recommended universities الجهاز الوطني للاعتماد الجامعات الموصى بها",
      items: [
        { labelEn: "University search", labelAr: "البحث عن الجامعات", descEn: "Check if a university and your programme are recommended.", descAr: "تأكد أن الجامعة وبرنامجك موصى بهما.", url: "https://nbaq.edu.kw/search/" },
        { labelEn: "Merit university lists", labelAr: "قوائم جامعات التميز", descEn: "Universities that count for the merit programme.", descAr: "الجامعات المعتمدة لبرنامج التميز.", url: "https://nbaq.edu.kw/website/merits" },
        { labelEn: "NBAQ decisions", labelAr: "قرارات الجهاز", descEn: "Universities and programmes added or stopped.", descAr: "الجامعات والبرامج المضافة أو الموقوفة.", url: "https://search.nbaq.edu.kw/nbaq/search/decisions" },
        { labelEn: "NBAQ FAQ", labelAr: "الأسئلة الشائعة للجهاز", descEn: "How universities are chosen and added.", descAr: "كيف تُختار الجامعات وتُضاف.", url: "https://nbaq.edu.kw/website/%d8%a7%d8%aa%d8%b5%d9%84-%d8%a8%d9%86%d8%a7" },
        { labelEn: "NBAQ complaints and suggestions", labelAr: "شكاوى واقتراحات الجهاز", descEn: "Email info@nbaq.edu.kw or call +965 22906386 (Sunday to Thursday, 8:00 am to 1:00 pm).", descAr: "راسل info@nbaq.edu.kw أو اتصل على 22906386 965+ (من الأحد إلى الخميس، 8 صباحاً حتى 1 ظهراً).", url: "https://nbaq.edu.kw/website/%d9%84%d9%84%d8%b4%d9%83%d8%a7%d9%88%d9%8a-%d9%88%d8%a7%d9%84%d8%a5%d9%82%d8%aa%d8%b1%d8%a7%d8%ad%d8%a7%d8%aa" }
      ]
    },
    {
      id: "abroad", titleEn: "Tests and applications abroad", titleAr: "الاختبارات والتقديم في الخارج",
      keywords: "ielts sat ucat lnat ucas common app tests applications اختبارات تقديم",
      items: [
        { labelEn: "IELTS (British Council)", labelAr: "IELTS (المجلس الثقافي البريطاني)", descEn: "Book IELTS Academic or UKVI IELTS in Kuwait. The Ministry only accepts tests taken in Kuwait.", descAr: "احجز IELTS الأكاديمي أو UKVI IELTS في الكويت. لا تقبل الوزارة إلا الاختبارات التي تُؤدى داخل الكويت.", url: "https://takeielts.britishcouncil.org" },
        { labelEn: "UCAS (UK applications)", labelAr: "UCAS (التقديم في بريطانيا)", descEn: "Apply to UK universities.", descAr: "التقديم على الجامعات البريطانية.", url: "https://www.ucas.com" },
        { labelEn: "Common App (US applications)", labelAr: "Common App (التقديم في أمريكا)", descEn: "Apply to many US universities with one form.", descAr: "التقديم على جامعات أمريكية كثيرة بطلب واحد.", url: "https://www.commonapp.org" },
        { labelEn: "College Board (SAT)", labelAr: "College Board (SAT)", descEn: "Book the SAT and send your scores to universities.", descAr: "احجز اختبار SAT وأرسل درجاتك إلى الجامعات.", url: "https://www.collegeboard.org" },
        { labelEn: "Pearson VUE (UCAT, LNAT)", labelAr: "Pearson VUE (UCAT وLNAT)", descEn: "Book the UCAT (for UK medicine) and the LNAT (for UK law).", descAr: "احجز UCAT (للطب في بريطانيا) وLNAT (للحقوق في بريطانيا).", url: "https://www.pearsonvue.com" }
      ]
    },
    {
      id: "apps", titleEn: "Government apps", titleAr: "التطبيقات الحكومية",
      keywords: "sahel app تطبيق سهل",
      items: [
        { labelEn: "Sahel app", labelAr: "تطبيق سهل", descEn: "Government services, including your Qudrat results.", descAr: "الخدمات الحكومية، ومنها نتائج القدرات.", url: "https://sahel.paci.gov.kw" }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.RESOURCES = RESOURCES;
}
