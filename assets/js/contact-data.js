/**
 * moustaqbili | مستقبلي
 * Ministry of Higher Education & Scientific Research - official contact channels
 *
 * Collected 2026-10-11 from mohe.edu.kw (Cultural Offices, E-Services, Technical
 * Support and Departments pages), puc.edu.kw, ku.edu.kw and aasu.edu.kw.
 * MoHE does not publish a public phone number or street address on its site
 * (it is moving to a new building in Kaifan), so none is listed here.
 *
 * Item types: "phone" | "email" | "url" | "text"
 */

const MOHE = "https://www.mohe.edu.kw/site/AR";

const MOHE_CONTACTS = {
  lastVerified: "2026-10-11",

  groups: [
    {
      id: "ministry",
      titleEn: "Ministry of Higher Education",
      titleAr: "وزارة التعليم العالي",
      descEn: "The Ministry handles enquiries online and by appointment. It does not publish a public phone line.",
      descAr: "تستقبل الوزارة الاستفسارات إلكترونياً وبالمواعيد المسبقة، ولا تنشر رقم هاتف عاماً.",
      entries: [
        {
          nameEn: "Visit or talk to an employee",
          nameAr: "زيارة الوزارة أو التحدث مع موظف",
          descEn: "Book before visiting. The ministry is moving in stages to a new building in Kaifan.",
          descAr: "يجب حجز موعد قبل الزيارة. تنتقل الوزارة على مراحل إلى مبنى جديد في منطقة كيفان.",
          items: [
            { type: "text", labelEn: "Public phone number", labelAr: "رقم الهاتف العام", valueEn: "Not published by the Ministry", valueAr: "لا تنشره الوزارة", flag: "unconfirmed" },
            { type: "text", labelEn: "Address", labelAr: "العنوان", valueEn: "Moving to a new building in Kaifan; final address not published", valueAr: "الانتقال إلى مبنى جديد في كيفان؛ لم يُنشر العنوان النهائي بعد", flag: "unconfirmed" },
            { type: "url", labelEn: "Book an appointment (also in the Sahel app)", labelAr: "حجز موعد (متاح أيضاً في تطبيق سهل)", value: "https://metaprodapp.azurewebsites.net/" },
            { type: "text", labelEn: "Video-call service (Skiplino app)", labelAr: "خدمة الاتصال المرئي (تطبيق Skiplino)", valueEn: "Sunday - Thursday, 8:30 am - 12:30 pm", valueAr: "الأحد - الخميس، 8:30 صباحاً - 12:30 ظهراً" },
            { type: "url", labelEn: "Technical support page", labelAr: "صفحة الدعم الفني", value: `${MOHE}/TechnicalSupport?PageID=15` },
            { type: "text", labelEn: "Departments by floor", labelAr: "الإدارات حسب الدور", valueEn: "Citizen service & complaints: 3rd floor · Foreign scholarships: 4th · Arab scholarships: 5th · Equivalency: 6th", valueAr: "الاستقبال وخدمة المواطن والشكاوى: الدور 3 · البعثات الخارجية: الدور 4 · البعثات العربية: الدور 5 · المعادلات: الدور 6" }
          ]
        },
        {
          nameEn: "Online channels",
          nameAr: "القنوات الإلكترونية",
          items: [
            { type: "url", labelEn: "Website", labelAr: "الموقع الرسمي", value: "https://www.mohe.edu.kw/site/" },
            { type: "url", labelEn: "E-services", labelAr: "الخدمات الإلكترونية", value: `${MOHE}/EServices?PageID=3` },
            { type: "url", labelEn: "Frequently asked questions", labelAr: "الأسئلة الشائعة", value: `${MOHE}/FAQ?PageID=8` },
            { type: "url", labelEn: "X (Twitter) @mohe_kw", labelAr: "إكس (تويتر) @mohe_kw", value: "https://twitter.com/mohe_kw" },
            { type: "url", labelEn: "Instagram @mohe_kw", labelAr: "إنستغرام @mohe_kw", value: "https://www.instagram.com/mohe_kw/" },
            { type: "url", labelEn: "YouTube", labelAr: "يوتيوب", value: "https://www.youtube.com/@moheadmin" }
          ]
        }
      ]
    },

    {
      id: "emails",
      titleEn: "Email the right department",
      titleAr: "راسل الإدارة المختصة",
      descEn: "Official e-service mailboxes listed by the Ministry. Include your full name and Civil ID number in the email.",
      descAr: "صناديق البريد الرسمية للخدمات الإلكترونية كما نشرتها الوزارة. اذكر اسمك الكامل ورقمك المدني في الرسالة.",
      entries: [
        {
          nameEn: "Scholarships",
          nameAr: "البعثات",
          items: [
            { type: "email", labelEn: "New applicants: scholarship guidance", labelAr: "المتقدمون الجدد: الإرشاد في البعثات", value: "scholarship_guidance_eservice@mohe.edu.kw" },
            { type: "email", labelEn: "Scholarships to foreign countries", labelAr: "البعثات إلى الدول الأجنبية", value: "Foreign_scholarship_eservice@mohe.edu.kw" },
            { type: "email", labelEn: "Scholarships to Arab countries", labelAr: "البعثات إلى الدول العربية", value: "arabic_scholarship_eservice@mohe.edu.kw" },
            { type: "email", labelEn: "Student allowances (finance)", labelAr: "مخصصات الطلبة (الشؤون المالية)", value: "finance_eservice@mohe.edu.kw" }
          ]
        },
        {
          nameEn: "Equivalency & other services",
          nameAr: "المعادلات والخدمات الأخرى",
          items: [
            { type: "email", labelEn: "Equivalency of foreign certificates", labelAr: "معادلة الشهادات الأجنبية", value: "foreign_equiv_eservice@mohe.edu.kw" },
            { type: "email", labelEn: "Equivalency of Arab certificates", labelAr: "معادلة الشهادات العربية", value: "arabic_equiv_eservice@mohe.edu.kw" },
            { type: "email", labelEn: "Social allowance for self-funded students", labelAr: "المكافأة الاجتماعية للدارسين على حسابهم الخاص", value: "Sa2@mohe.edu.kw" },
            { type: "email", labelEn: "Technical support / account unlocking", labelAr: "الدعم الفني وفك حظر الحسابات", value: "LiveChat@mohe.edu.kw" },
            { type: "url", labelEn: "Verify an equivalency certificate", labelAr: "التحقق من شهادة معادلة", value: "https://mohe.edu.kw/Verify/" }
          ]
        }
      ]
    },

    {
      id: "related",
      titleEn: "Related bodies in Kuwait",
      titleAr: "جهات ذات صلة في الكويت",
      entries: [
        {
          nameEn: "Private Universities Council (PUC)",
          nameAr: "مجلس الجامعات الخاصة",
          descEn: "Internal scholarships at private universities in Kuwait. Sharq, Al-Sanabel Tower, floors 34, 35 and M2. Sunday - Thursday, 8:00 am - 1:00 pm.",
          descAr: "البعثات الداخلية في الجامعات الخاصة. شرق - برج السنابل، الأدوار 34 و35 وM2. الأحد - الخميس، 8:00 صباحاً - 1:00 ظهراً.",
          items: [
            { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "22924401" },
            { type: "email", labelEn: "Internal scholarships", labelAr: "البعثات الداخلية", value: "puc.scholarship@puc.edu.kw" },
            { type: "email", labelEn: "Student affairs", labelAr: "شؤون الطلبة", value: "sa.affairs@puc.edu.kw" },
            { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://puc.edu.kw" }
          ]
        },
        {
          nameEn: "National Bureau for Academic Accreditation (NBAQ)",
          nameAr: "الجهاز الوطني للاعتماد الأكاديمي وضمان جودة التعليم",
          descEn: "Check whether a university abroad is accredited before you apply.",
          descAr: "تحقق من اعتماد الجامعة في الخارج قبل التقديم.",
          items: [
            { type: "text", labelEn: "Phone and email", labelAr: "الهاتف والبريد", valueEn: "Not available from an official source", valueAr: "غير متوفر من مصدر رسمي", flag: "unconfirmed" },
            { type: "url", labelEn: "Accredited universities search", labelAr: "البحث في الجامعات المعتمدة", value: "https://nbaq.edu.kw/search/" },
            { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://nbaq.edu.kw/website/" }
          ]
        },
        {
          nameEn: "Kuwait University - Admission",
          nameAr: "جامعة الكويت - القبول",
          descEn: "Sabah Al-Salem University City. Sunday - Thursday, 7:00 am - 3:00 pm.",
          descAr: "مدينة صباح السالم الجامعية. الأحد - الخميس، 7:00 صباحاً - 3:00 عصراً.",
          items: [
            { type: "phone", labelEn: "Main switchboard", labelAr: "البدالة الرئيسية", value: "+965 2498 8888" },
            { type: "phone", labelEn: "Admission & Registration", labelAr: "عمادة القبول والتسجيل", value: "24983069" },
            { type: "email", labelEn: "Undergraduate admission", labelAr: "القبول للمرحلة الجامعية", value: "admission@ku.edu.kw" },
            { type: "url", labelEn: "Qudrat tests (this site)", labelAr: "اختبارات القدرات (في هذا الموقع)", value: "qudrat.html" }
          ]
        },
        {
          nameEn: "Abdullah Al-Salem University (AASU)",
          nameAr: "جامعة عبد الله السالم",
          descEn: "Al-Firdous Street, Block 3, Khaldiya.",
          descAr: "شارع الفردوس، قطعة 3، الخالدية.",
          items: [
            { type: "text", labelEn: "Phone", labelAr: "الهاتف", valueEn: "Not published", valueAr: "غير منشور", flag: "unconfirmed" },
            { type: "email", labelEn: "Admissions", labelAr: "القبول", value: "admissions@aasu.edu.kw" },
            { type: "email", labelEn: "General enquiries", labelAr: "الاستفسارات العامة", value: "info@aasu.edu.kw" },
            { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.aasu.edu.kw" }
          ]
        }
      ]
    },

    {
      id: "offices",
      titleEn: "Kuwait cultural offices abroad",
      titleAr: "المكاتب الثقافية الكويتية في الخارج",
      descEn: "For students already on a scholarship: allowances, financial guarantee letters and university issues are handled by the office for your country.",
      descAr: "للطلبة المبتعثين: تتولى المكاتب الثقافية في بلد الدراسة المخصصات والكتب المالية وشؤون الجامعة.",
      entries: [
        { nameEn: "United States - Washington D.C.", nameAr: "الولايات المتحدة - واشنطن", descEn: "2111 Wilson Blvd, Suite 500, Arlington, VA 22201", descAr: "2111 Wilson Blvd, Suite 500, Arlington, VA 22201", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+1 202 364 2100" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "info@kuwaitculture.com" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitculturedc.org" } ] },
        { nameEn: "United States - Los Angeles", nameAr: "الولايات المتحدة - لوس أنجلوس", descEn: "801 S Figueroa St, Suite 1900, Los Angeles", descAr: "801 S Figueroa St, Suite 1900, Los Angeles", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+1 310 746 4789" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitculturela.org" } ] },
        { nameEn: "United Kingdom - London", nameAr: "المملكة المتحدة - لندن", descEn: "60A Knightsbridge, London SW1X 7JX", descAr: "60A Knightsbridge, London SW1X 7JX", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+44 20 7761 8500" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Info@Kcouk.org" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kcouk.org" } ] },
        { nameEn: "Ireland - Dublin", nameAr: "أيرلندا - دبلن", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+353 1 531 0090" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "info@kuwaitcultural.ie" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitcultural.ie" } ] },
        { nameEn: "Canada - Ottawa", nameAr: "كندا - أوتاوا", descEn: "47 Clarence St #204, Ottawa K1N 9K1", descAr: "47 Clarence St #204, Ottawa K1N 9K1", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+1 613 241 8444" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "info@kuwaitcultural.ca" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitcultural.ca" } ] },
        { nameEn: "Australia - Canberra", nameAr: "أستراليا - كانبرا", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+61 2 6286 1166" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "info@kuwaitculture.org.au" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitculture.org.au" } ] },
        { nameEn: "France - Paris", nameAr: "فرنسا - باريس", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+33 1 47 20 75 70" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "paris_g2g@mohe.edu.kw" } ] },
        { nameEn: "Bahrain - Manama", nameAr: "البحرين - المنامة", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+973 1772 5354" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "kco@kcobh.org" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kcobh.org" } ] },
        { nameEn: "Saudi Arabia - Riyadh", nameAr: "السعودية - الرياض", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+966 11 482 4730" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Kwtksaoffice@mohe.edu.kw" } ] },
        { nameEn: "United Arab Emirates - Dubai", nameAr: "الإمارات - دبي", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+971 4 397 9768" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Info@Kuwaitculture.ae" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kuwaitculture.ae" } ] },
        { nameEn: "Jordan - Amman", nameAr: "الأردن - عمّان", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+962 6 562 6638" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Jordan_g2g@mohe.edu.kw" } ] },
        { nameEn: "Egypt - Cairo", nameAr: "مصر - القاهرة", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+20 2 3760 3990" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Info@kwcultureg.com" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kwcultureg.com" } ] },
        { nameEn: "Egypt - Alexandria", nameAr: "مصر - الإسكندرية", items: [
          { type: "phone", labelEn: "Phone", labelAr: "الهاتف", value: "+20 3 392 5566" },
          { type: "email", labelEn: "Email", labelAr: "البريد", value: "Info@KWalexculture.org" },
          { type: "url", labelEn: "Website", labelAr: "الموقع", value: "https://www.kwalexculture.org" } ] },
        { nameEn: "Full list on the Ministry website", nameAr: "القائمة الكاملة على موقع الوزارة", items: [
          { type: "url", labelEn: "Cultural offices", labelAr: "المكاتب الثقافية", value: `${MOHE}/CulturalOffices?PageID=18` } ] }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.MOHE_CONTACTS = MOHE_CONTACTS;
}
