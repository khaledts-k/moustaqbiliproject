/**
 * moustaqbili | مستقبلي
 * Every major in the Foreign Scholarship Plan 2026/2027, with the lowest high school %
 * the plan accepts in each country.
 *
 * Source: the Ministry's plan PDF (44 pages; 10 scanned pages read from the images):
 * https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf - checked 2026-10-12.
 * The plan has no Law, Education or Social Science majors; Malta lists 3 majors, the UAE 6.
 *
 * Row format: [id, English, Arabic, discipline id, stream, { country: min % }, [countries whose % is "unconfirmed"]]
 *   stream: "science" (science-stream graduates) or "both" (science or arts stream)
 *   The last list marks percentages read from a table cell shared by several majors,
 *   shown on the site with a "Not confirmed" label.
 */

const PLAN_MAJORS_SOURCE = {
  url: "https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf",
  lastVerified: "2026-10-12"
};

const PLAN_DISCIPLINES = [
  { id: "health", en: "Medicine & Health", ar: "الطب والعلوم الصحية" },
  { id: "engineering", en: "Engineering & Architecture", ar: "الهندسة والعمارة" },
  { id: "computing", en: "Computing & IT", ar: "الحوسبة وتقنية المعلومات" },
  { id: "science", en: "Sciences", ar: "العلوم" },
  { id: "agriculture", en: "Agriculture & Food", ar: "الزراعة والغذاء" },
  { id: "business", en: "Business & Economics", ar: "الأعمال والاقتصاد" },
  { id: "arts", en: "Arts, Humanities & Design", ar: "الآداب والعلوم الإنسانية والتصميم" }
];

const PLAN_COUNTRIES = {
  "United States": "الولايات المتحدة",
  "United Kingdom": "المملكة المتحدة",
  "Ireland": "أيرلندا",
  "Australia": "أستراليا",
  "New Zealand": "نيوزيلندا",
  "Malta": "مالطا",
  "Bahrain": "البحرين",
  "Saudi Arabia": "السعودية",
  "United Arab Emirates": "الإمارات"
};

// Country names are kept private to this block so they cannot clash with other scripts
const PLAN_MAJORS = (() => {
const US = "United States", UK = "United Kingdom", IE = "Ireland", AU = "Australia", NZ = "New Zealand",
      MT = "Malta", BH = "Bahrain", SA = "Saudi Arabia", AE = "United Arab Emirates";

const rows = [
  // ---------------- Medicine & Health ----------------
  ["medicine", "Medicine", "الطب البشري", "health", "science", { [UK]: 95, [IE]: 97, [AU]: 95, [NZ]: 95, [MT]: 95, [BH]: 97, [SA]: 95 }],
  ["dentistry", "Dentistry", "طب الأسنان", "health", "science", { [UK]: 95, [IE]: 96, [AU]: 95, [NZ]: 95 }, [AU, NZ]],
  ["pharmacy", "Pharmacy", "الصيدلة", "health", "science", { [IE]: 96, [AU]: 92, [NZ]: 92, [BH]: 92, [SA]: 92 }],
  ["veterinary-medicine", "Veterinary Medicine", "الطب البيطري", "health", "science", { [AU]: 95 }],
  ["nursing", "Nursing", "التمريض", "health", "science", { [UK]: 85, [IE]: 90, [AU]: 85, [NZ]: 85, [MT]: 90, [BH]: 90, [SA]: 90, [AE]: 85 }],
  ["childrens-nursing", "Children's Nursing", "تمريض الأطفال", "health", "science", { [IE]: 90 }],
  ["mental-health-nursing", "Mental Health Nursing", "تمريض الصحة العقلية", "health", "science", { [IE]: 90 }],
  ["intellectual-disability-nursing", "Intellectual Disability Nursing", "تمريض الإعاقة الفكرية", "health", "science", { [IE]: 90 }],
  ["physiotherapy", "Physiotherapy", "العلاج الطبيعي", "health", "science", { [UK]: 85, [IE]: 92, [AU]: 95, [NZ]: 90, [SA]: 90, [AE]: 90 }, [NZ]],
  ["occupational-therapy", "Occupational Therapy", "العلاج الوظيفي", "health", "science", { [IE]: 90, [AU]: 85 }],
  ["podiatry", "Podiatry", "علاج أمراض القدم", "health", "science", { [IE]: 90, [AU]: 85, [NZ]: 85, [MT]: 90 }],
  ["speech-pathology", "Speech Pathology", "علاج النطق", "health", "science", { [AU]: 85 }],
  ["speech-hearing", "Treatment of Speech & Hearing Disorders", "علاج علل النطق والسمع", "health", "science", { [SA]: 90 }],
  ["radiography", "Radiography", "التصوير الإشعاعي", "health", "science", { [US]: 85, [UK]: 90, [IE]: 90 }],
  ["diagnostic-radiography", "Diagnostic Radiography", "الأشعة التشخيصية", "health", "science", { [AU]: 85, [BH]: 90 }, [BH]],
  ["medical-diagnostic-imaging", "Medical Diagnostic Imaging", "التصوير التشخيصي الطبي", "health", "science", { [AE]: 90 }],
  ["radiology-sciences", "Radiology Sciences", "علوم الأشعة", "health", "science", { [SA]: 90 }],
  ["radiation-therapy", "Radiation Therapy", "العلاج الإشعاعي", "health", "science", { [IE]: 90 }],
  ["medical-laboratory-science", "Medical Laboratory Science", "علم المختبرات الطبية", "health", "science", { [US]: 85, [AU]: 85, [NZ]: 90, [BH]: 90, [AE]: 85 }, [BH]],
  ["clinical-laboratory-sciences", "Clinical Laboratory Sciences", "علوم المختبرات الإكلينيكية", "health", "science", { [SA]: 90 }],
  ["biomedical-sciences", "Biomedical Sciences", "علوم الطب الحيوي", "health", "science", { [AU]: 85, [NZ]: 85 }],
  ["biomedical-health-life-sciences", "Biomedical Health & Life Sciences", "الطب الحيوي وعلوم الحياة", "health", "science", { [IE]: 90 }],
  ["biomedical-technology", "Biomedical Technology", "التكنولوجيا الطبية الحيوية", "health", "science", { [SA]: 90 }],
  ["advanced-therapeutic-technologies", "Advanced Therapeutic Technologies", "التقنيات العلاجية المتقدمة", "health", "science", { [IE]: 92 }],
  ["human-health-diseases", "Human Health & Diseases", "صحة الإنسان والأمراض", "health", "science", { [IE]: 90 }],
  ["immunology-pathology", "Immunology & Pathology", "علم المناعة وعلم الأمراض", "health", "science", { [AU]: 85 }],
  ["pharmacology", "Pharmacology", "علم الأدوية", "health", "science", { [UK]: 85, [AU]: 85 }],
  ["health-performance-science", "Health & Performance Science", "علوم الصحة والأداء", "health", "science", { [IE]: 90 }],
  ["sport-science-health", "Sport Science & Health", "علوم الرياضة والصحة", "health", "science", { [IE]: 90 }],
  ["kinesiology", "Kinesiology", "علم الحركة", "health", "science", { [US]: 85 }],
  ["nutrition", "Nutrition", "التغذية", "health", "science", { [UK]: 85 }],
  ["human-nutrition", "Human Nutrition", "التغذية البشرية", "health", "science", { [IE]: 90 }],
  ["food-human-nutrition", "Food & Human Nutrition", "علوم التغذية", "health", "science", { [AU]: 85 }],
  ["clinical-nutrition", "Clinical Nutrition", "التغذية السريرية", "health", "science", { [SA]: 90 }],
  ["clinical-nutrition-dietetics", "Clinical Nutrition & Dietetics", "التغذية العلاجية والحميات", "health", "science", { [AE]: 90 }],
  ["oral-health", "Oral Health", "صحة الفم", "health", "science", { [AU]: 90, [NZ]: 85 }],
  ["dental-technology", "Dental Technology", "تقنية الأسنان", "health", "science", { [NZ]: 85 }],
  ["dental-care", "Dental Care", "رعاية الأسنان", "health", "science", { [SA]: 90 }],
  ["paramedic-practice", "Paramedic Practice", "الطوارئ الطبية", "health", "science", { [AU]: 85, [NZ]: 85 }],
  ["emergency-medical-services", "Emergency Medical Services", "الخدمات الطبية الطارئة", "health", "science", { [SA]: 90 }],
  ["optometry", "Optometry", "البصريات", "health", "science", { [NZ]: 85, [SA]: 90 }],
  ["respiratory-therapy", "Respiratory Therapy", "العلاج التنفسي", "health", "science", { [SA]: 90 }],
  ["community-health", "Community Health Sciences / Health Education", "علوم صحة المجتمع / التعليم الصحي", "health", "science", { [SA]: 90 }],

  // ---------------- Engineering & Architecture ----------------
  ["architectural-engineering", "Architectural Engineering", "الهندسة المعمارية", "engineering", "science", { [US]: 90 }],
  ["biomedical-engineering", "Biomedical Engineering", "الهندسة الطبية الحيوية", "engineering", "science", { [US]: 90, [IE]: 90, [AU]: 90 }],
  ["computer-engineering", "Computer Engineering", "هندسة الحاسوب", "engineering", "science", { [US]: 90, [AE]: 90 }],
  ["computer-network-engineering", "Computer & Network Engineering", "هندسة الحاسوب والشبكات", "engineering", "science", { [AU]: 90 }],
  ["cyber-security-engineering", "Cyber Security Engineering", "هندسة الأمن السيبراني", "engineering", "science", { [US]: 90 }],
  ["electrical-renewable-energy-engineering", "Electrical & Renewable Energy Engineering", "هندسة الطاقة المتجددة والكهربائية", "engineering", "science", { [AU]: 90 }],
  ["environmental-engineering", "Environmental Engineering", "الهندسة البيئية", "engineering", "science", { [US]: 90 }],
  ["food-processing-engineering", "Food Processing Engineering", "هندسة التصنيع الغذائي", "engineering", "science", { [NZ]: 90 }],
  ["materials-engineering", "Materials Engineering", "هندسة المواد", "engineering", "science", { [AU]: 90 }],
  ["mechatronics-engineering", "Mechatronics Engineering", "هندسة الميكاترونكس", "engineering", "science", { [AU]: 90 }],
  ["software-engineering", "Software Engineering", "هندسة البرمجيات", "engineering", "science", { [AU]: 90, [NZ]: 90 }, [NZ]],
  ["surveying-engineering", "Surveying Engineering", "هندسة المساحة", "engineering", "science", { [AU]: 90 }],
  ["architecture", "Architecture", "العمارة", "engineering", "science", { [US]: 85 }],
  ["architectural-science", "Architectural Science", "علم العمارة", "engineering", "science", { [IE]: 85 }],
  ["landscape-architecture", "Landscape Architecture", "عمارة المناظر الطبيعية", "engineering", "science", { [US]: 85 }],
  ["urban-planning", "Urban / City Planning", "دراسة وتخطيط المدن", "engineering", "science", { [US]: 85 }],
  ["construction-management", "Construction Management", "إدارة الإنشاءات", "engineering", "both", { [AU]: 85 }],

  // ---------------- Computing & IT ----------------
  ["computer-science", "Computer Science", "علوم الحاسوب", "computing", "science", { [US]: 85, [UK]: 85, [IE]: 85, [AU]: 85 }],
  ["computer-science-cyber-security", "Computer Science / Cyber Security", "علوم الحاسوب / الأمن السيبراني", "computing", "science", { [UK]: 85 }],
  ["computer-science-ai", "Computer Science / Artificial Intelligence", "علوم الحاسوب / الذكاء الاصطناعي", "computing", "science", { [UK]: 85 }],
  ["artificial-intelligence", "Artificial Intelligence", "الذكاء الاصطناعي", "computing", "science", { [AU]: 85, [NZ]: 85 }],
  ["cyber-security", "Cyber Security", "الأمن السيبراني", "computing", "science", { [AU]: 85, [NZ]: 85 }],
  ["cyber-security-it-forensics", "Cyber Security & IT Forensics", "الأمن السيبراني والتحاليل الجنائية لتقنية المعلومات", "computing", "science", { [IE]: 85 }],
  ["data-science", "Data Science", "علم البيانات", "computing", "science", { [UK]: 85, [IE]: 85, [AU]: 85, [NZ]: 85 }, [NZ]],
  ["computer-game-development", "Computer Game Development", "تطوير ألعاب الكمبيوتر", "computing", "science", { [IE]: 85 }],
  ["multimedia", "Multimedia", "الوسائط المتعددة", "computing", "science", { [IE]: 85 }],

  // ---------------- Sciences ----------------
  ["mathematics", "Mathematics", "الرياضيات", "science", "science", { [US]: 85 }],
  ["statistics", "Statistics", "الإحصاء", "science", "science", { [US]: 85, [AU]: 85 }],
  ["physics", "Physics", "الفيزياء", "science", "science", { [US]: 85 }],
  ["chemistry", "Chemistry", "الكيمياء", "science", "science", { [US]: 85 }],
  ["biology", "Biology", "الأحياء", "science", "science", { [US]: 85 }],
  ["biochemistry", "Biochemistry", "الكيمياء الحيوية", "science", "science", { [US]: 85 }],
  ["biochemistry-molecular-biology", "Biochemistry & Molecular Biology", "الكيمياء الحيوية والبيولوجيا الجزيئية", "science", "science", { [IE]: 85 }],
  ["cell-molecular-biology", "Cell & Molecular Biology", "علم الخلية والبيولوجيا الجزيئية", "science", "science", { [IE]: 85 }],
  ["microbiology", "Microbiology", "علم الأحياء الدقيقة", "science", "science", { [IE]: 85 }],
  ["marine-science", "Marine Biology (Coastal & Marine Science)", "العلوم البحرية", "science", "science", { [AU]: 85 }],

  // ---------------- Agriculture & Food ----------------
  ["agricultural-sciences", "Agricultural Sciences", "علوم الزراعة", "agriculture", "science", { [IE]: 85, [AU]: 85, [NZ]: 85 }],
  ["food-science", "Food Science", "علوم الأطعمة", "agriculture", "science", { [UK]: 85 }],

  // ---------------- Business & Economics ----------------
  ["actuarial-science", "Actuarial Science", "العلوم الاكتوارية", "business", "science", { [UK]: 85 }],
  ["actuarial-financial-studies", "Actuarial & Financial Studies", "الدراسات الاكتوارية والمالية", "business", "science", { [IE]: 85 }],
  ["technology-management", "Technology Management", "إدارة التكنولوجيا", "business", "science", { [IE]: 85 }],
  ["entrepreneurship", "Entrepreneurship", "المشاريع الصغيرة", "business", "both", { [US]: 85 }],
  ["supply-chain-management", "Supply Chain Management", "إدارة سلسلة التوريد", "business", "both", { [US]: 85 }],
  ["tourism-hospitality", "Tourism & Hospitality Management", "الإدارة السياحية والضيافة", "business", "both", { [AU]: 85, [NZ]: 85 }],

  // ---------------- Arts, Humanities & Design ----------------
  ["english-literature", "English Literature", "اللغة الإنجليزية وآدابها", "arts", "both", { [US]: 85, [AU]: 85 }],
  ["graphic-design", "Graphic Design", "التصميم الجرافيكي", "arts", "both", { [US]: 85 }],
  ["product-design", "Product Design", "تصميم المنتجات", "arts", "both", { [AU]: 85 }]
];

return rows.map(([id, en, ar, discipline, stream, minPct, unconfirmed = []]) =>
  ({ id, en, ar, discipline, stream, minPct, unconfirmed }));
})();

if (typeof window !== 'undefined') {
  window.PLAN_MAJORS = PLAN_MAJORS;
  window.PLAN_DISCIPLINES = PLAN_DISCIPLINES;
  window.PLAN_COUNTRIES = PLAN_COUNTRIES;
  window.PLAN_MAJORS_SOURCE = PLAN_MAJORS_SOURCE;
}
