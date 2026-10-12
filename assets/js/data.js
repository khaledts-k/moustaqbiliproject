/
 * moustaqbili | مستقبلي
 * Scholarship programs, monthly allowances, filters and reference data.
 * Text is written in plain language. Arabic text for each program is in data-ar.js.
 *
 * Sources:
 * 1. Foreign Scholarship Plan 2026/2027 (خطة البعثات الخارجية 2026/2027): https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf
 * 2. Monthly allowance tables (regular + merit), mohe.edu.kw e-services, checked 2026-10-11
 * 3. Scholarships regulation, Ministerial Decree 197/2025 (merit +50%: Art. 25)
 * 4. UK merit universities: Ministerial Decree 16/2025
 *
 * Only the minimum %, the stream and the allowance amounts are checked against the
 * 2026/2027 sources. Exam, deadline and visa details are carried over from the
 * previous edition and are labelled "Not checked yet" on the site.
 * Use null for anything that does not apply; the site then hides that line.
 */

const PLAN_WINDOW_EN = "2026/2027: registration was 14 June - 7 July 2026 (now closed). Merit applications are open until 24 February 2027.";
const MERIT_LINE_EN = "Merit students get 50% more each month after the foundation stage (Decree 197/2025, Article 25).";

const MOUSTAQBILI_PROGRAMS = [
  // =========================================================================
  // 1. United Kingdom - Medicine
  // =========================================================================
  {
    id: "uk-medicine-2025",
    title: "Medicine (MBChB / MBBS)",
    titleAr: "الطب البشري والجراحة",
    isMerit: true,
    country: "United Kingdom",
    countryAr: "المملكة المتحدة",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBChB)", "Clinical Medicine", "Anatomy & Physiology"],

    verifiedAllowances: 2, // first two lines are checked against the 2026/2027 tables
    stipend: { currency: "GBP", variants: [{ key: "all", standard: 2850, merit: 4275 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: £2,850 (merit students: £4,275).",
        MERIT_LINE_EN,
        "Hospital training fees are paid by the Ministry.",
        "Yearly money for medical equipment (about £850).",
        "A return flight to Kuwait each year.",
        "The UK health surcharge (IHS) is paid back by the cultural office."
      ]
    },

    necessaryExams: {
      satActStatus: null,
      englishProficiency: "Foundation year: IELTS 7.0 overall, at least 6.5 in each part. Starting the degree directly: IELTS 7.0 in every part.",
      ukviIeltsRequired: true,
      ukviIeltsNote: "You must take the UKVI version of IELTS for the UK. A normal IELTS may not be accepted for the foundation-year visa.",
      otherExams: "UCAT (the UK medical admissions test): a total score of at least 1,650."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "UCAS deadline for medicine: 15 October, 6:00 pm UK time.",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "UCAS (the UK application website)",
      wordCount: "Up to 4,000 characters.",
      supplementalEssays: "Interviews, often several short ones (called MMI), about ethics and why you want medicine."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "95% (GPA 3.75)",
        stream: "Science stream only",
        notes: "At least 90% in chemistry, biology, physics and math. You must attend at least 90% of the foundation year."
      },
      usDiploma: {
        minScore: "GPA 3.75 out of 4.0",
        coursePrereqs: "Biology, chemistry and math in grade 11 or 12, with A- or higher."
      },
      ukSystem: {
        minScore: "A*AA or AAA at A-Level",
        aLevelSubjects: "Biology and chemistry at A, and math at B or higher (AS or A-Level). Also 8 IGCSEs with A in sciences and math."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry", minGrade: "90% in Thanawiya, A at AS/A-Level, or A- in the US system" },
      { subject: "Biology", minGrade: "90% in Thanawiya, A at AS/A-Level, or A- in the US system" },
      { subject: "Math", minGrade: "90% in Thanawiya, B at AS/A-Level, or A- in the US system" }
    ],

    pathway: {
      entryType: "Kuwaiti public-school students do a foundation year first. A-Level students can start the degree directly.",
      foundationNeeded: true,
      explanation: "You must pass the foundation year the first time. The plan does not allow repeating it for medicine."
    },

    visaRequirements: {
      visaType: "UK Student visa",
      keyDocuments: [
        "CAS number from your UK university (it confirms your place)",
        "Financial guarantee letter from the Ministry",
        "TB (tuberculosis) test certificate from a UK-approved clinic in Kuwait",
        "UKVI IELTS result",
        "The UK now gives you a digital visa (eVisa) instead of a residence card"
      ]
    },

    // UK merit universities for medicine, from Ministerial Decree 16/2025
    accreditedUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
      "King's College London",
      "University of Edinburgh",
      "University of Manchester",
      "University of Glasgow",
      "University of Bristol",
      "Queen Mary University of London",
      "University of Birmingham",
      "University of Nottingham",
      "Newcastle University"
    ]
  },

  // =========================================================================
  // 2. Ireland - Medicine
  // =========================================================================
  {
    id: "ire-medicine-2025",
    title: "Medicine (MB BCh BAO)",
    titleAr: "الطب البشري والجراحة - أيرلندا",
    isMerit: true,
    country: "Ireland",
    countryAr: "أيرلندا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MB BCh BAO)", "Clinical Medicine"],

    verifiedAllowances: 2,
    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: 5175 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: €3,450 (merit students: €5,175).",
        MERIT_LINE_EN,
        "Hospital training is paid by the Ministry.",
        "A return flight to Kuwait each year.",
        "Private health insurance in Ireland."
      ]
    },

    necessaryExams: {
      satActStatus: null,
      englishProficiency: "IELTS Academic 6.5, with at least 6.5 in each part.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS Academic is accepted for Ireland.",
      otherExams: "An interview, a personal statement, a CV and 2 letters of recommendation from teachers."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "1 February (direct applications or through the CAO website).",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "Each university's own website (RCSI, Trinity, UCD)",
      wordCount: "A personal statement on why you chose medicine, plus a CV.",
      supplementalEssays: "An interview about ethics and how you deal with patients."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "97% (GPA 3.85)",
        stream: "Science stream only",
        notes: "At least 90% in science subjects. Places are competitive and depend on passing the foundation year."
      },
      usDiploma: {
        minScore: "GPA 3.85 out of 4.0",
        coursePrereqs: "Chemistry, biology, and physics or math, with honours."
      },
      ukSystem: {
        minScore: "ABB in 3 AS-Levels (RCSI: ABB at A-Level)",
        aLevelSubjects: "Chemistry, plus two of biology, physics and math. Also 8 IGCSEs with A in sciences."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry", minGrade: "90% in Thanawiya, or A at AS-Level" },
      { subject: "Biology or physics", minGrade: "90% in Thanawiya, or B at AS-Level" },
      { subject: "Math", minGrade: "90% in Thanawiya, or B at AS-Level" }
    ],

    pathway: {
      entryType: "Kuwaiti public-school students do a foundation year first. Good A-Level students may start directly (RCSI).",
      foundationNeeded: true,
      explanation: "Places in medicine are given by competition after the foundation year."
    },

    visaRequirements: {
      visaType: "Irish study visa",
      keyDocuments: [
        "Unconditional offer letter from the university",
        "Financial guarantee letter from the Ministry",
        "Police clearance and a medical check",
        "Proof of private health insurance"
      ]
    },

    accreditedUniversities: [
      "Royal College of Surgeons in Ireland (RCSI), Dublin",
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University College Cork (UCC)",
      "University of Galway"
    ]
  },

  // =========================================================================
  // 3. United States - Cyber Security, Computer Engineering & AI
  // =========================================================================
  {
    id: "us-engineering-cs-2025",
    title: "Cyber Security, Computer Engineering & AI",
    titleAr: "الأمن السيبراني وهندسة الكمبيوتر والذكاء الاصطناعي",
    isMerit: true,
    country: "United States",
    countryAr: "الولايات المتحدة",
    category: "Engineering & Computing",
    majors: ["Cyber Security Engineering", "Computer Engineering", "Computer Science", "Artificial Intelligence"],

    stipend: { currency: "USD", variants: [{ key: "all", standard: 3900, merit: 5850 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: $3,900 (merit students: $5,850).",
        "Yearly book and equipment money (about $2,000).",
        "A one-time technology allowance (about $1,200).",
        "A return flight to Kuwait each year.",
        "Tuition is paid directly by the cultural office."
      ]
    },

    necessaryExams: {
      satActStatus: "Not required by every university, but top universities expect SAT 1400+ or ACT 31+.",
      englishProficiency: "TOEFL iBT 90+ (at least 22 in each part) or IELTS Academic 7.0+.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS or TOEFL is accepted for the US.",
      otherExams: "AP Computer Science and AP Calculus help your application."
    },

    deadlines: {
      earlyAction: "1 or 15 November (you can still choose another university)",
      earlyDecision: "1 November (if accepted, you must go)",
      regularDecision: "1 - 15 January",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "Common App and university websites",
      wordCount: "Main essay: 250 - 650 words, plus short essays of 150 - 250 words.",
      supplementalEssays: "Short essays about your goals and interests."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "90% (GPA 3.50) for engineering, 85% (GPA 3.25) for computer science",
        stream: "Science stream only",
        notes: "US universities take new students in the autumn (fall) term only."
      },
      usDiploma: {
        minScore: "GPA 3.50 out of 4.0",
        coursePrereqs: "4 years of math (including pre-calculus or calculus) and 3 years of lab science."
      },
      ukSystem: {
        minScore: "A*AA or AAA at A-Level",
        aLevelSubjects: "Math is required, plus physics or computer science. Also 8 IGCSEs with A or B in math, physics and English."
      }
    },

    courseSubjectFloors: [
      { subject: "Advanced math / calculus", minGrade: "A, or 88% in Thanawiya" },
      { subject: "Physics or computing", minGrade: "B+, or 85% in Thanawiya" },
      { subject: "English", minGrade: "TOEFL 90 or IELTS 7.0" }
    ],

    pathway: {
      entryType: "Direct entry into a 4-year degree",
      foundationNeeded: false,
      explanation: "No foundation year. You start the degree in the autumn (fall) term."
    },

    visaRequirements: {
      visaType: "US student visa (F-1)",
      keyDocuments: [
        "Form I-20 from your US university",
        "Financial guarantee letter from the Ministry",
        "SEVIS I-901 fee receipt",
        "DS-160 online form confirmation",
        "Interview at the US Embassy in Kuwait"
      ]
    },

    accreditedUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "Georgia Institute of Technology",
      "Purdue University",
      "University of Washington",
      "University of Michigan - Ann Arbor"
    ]
  },

  // =========================================================================
  // 4. Australia - Medicine & Dentistry
  // =========================================================================
  {
    id: "aus-medicine-2025",
    title: "Medicine (Monash, Western Sydney, Flinders, Curtin)",
    titleAr: "الطب البشري وطب الأسنان - أستراليا",
    isMerit: true,
    country: "Australia",
    countryAr: "أستراليا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBBS / BMedSci / MD)", "Dentistry (BDS)"],

    verifiedAllowances: 2,
    stipend: { currency: "AUD", variants: [{ key: "all", standard: 5850, merit: null }], meritNoteKey: "stipend_merit_unconfirmed" },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: A$5,850. The merit amount for Australia is not clear in the Ministry's table.",
        MERIT_LINE_EN,
        "Clinical and lab fees are covered.",
        "Student health insurance (OSHC).",
        "A return flight to Kuwait each year."
      ]
    },

    necessaryExams: {
      satActStatus: "Not used for medicine in Australia.",
      englishProficiency: "Foundation year: IELTS 5.5 in each part. Medicine: IELTS 7.0 in every part, or TOEFL 100.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS, or PTE Academic 65+, is accepted for Australia.",
      otherExams: "Monash: ISAT test score of 165 or more. Western Sydney and Murdoch: the Casper test."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "31 August - 30 September (for the February start)",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "University websites and state admission centres",
      wordCount: "Statement of purpose: about 500 words.",
      supplementalEssays: "Interviews (MMI), online or in person."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "95% (GPA 3.75)",
        stream: "Science stream only",
        notes: "Grade needed in the foundation year to move on: Western Sydney 9.35/10 and IELTS 7.0; Monash 90% (75% in English and chemistry) and ISAT 165; Flinders 88%; Curtin 75% (50% in English and chemistry)."
      },
      usDiploma: {
        minScore: "GPA 3.75 out of 4.0",
        coursePrereqs: "AP Chemistry and AP Biology with a score of 4 or 5."
      },
      ukSystem: {
        minScore: "AAA or A*AA at A-Level",
        aLevelSubjects: "Chemistry and biology are required, plus math or physics. Also 8 IGCSEs with A in chemistry, biology and math."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry", minGrade: "A, or 95% in Thanawiya (75% in the Monash foundation year)" },
      { subject: "Biology", minGrade: "A, or 95% in Thanawiya" },
      { subject: "English", minGrade: "IELTS 7.0 in every part, or TOEFL 100" }
    ],

    pathway: {
      entryType: "One foundation year, then 5 - 6 years of medicine",
      foundationNeeded: true,
      explanation: "You must reach the required grade in the foundation year to move on to medicine."
    },

    visaRequirements: {
      visaType: "Australian student visa (subclass 500)",
      keyDocuments: [
        "Electronic Confirmation of Enrolment (CoE) from the university",
        "Financial guarantee letter from the Ministry",
        "Student health insurance (OSHC)",
        "A Genuine Student (GS) statement"
      ]
    },

    accreditedUniversities: [
      "Monash University",
      "Western Sydney University",
      "Flinders University",
      "Curtin University",
      "University of Melbourne",
      "University of Sydney"
    ]
  },

  // =========================================================================
  // 5. Bahrain - Medicine (AGU & RCSI Bahrain)
  // =========================================================================
  {
    id: "bh-medicine-2025",
    title: "Medicine - Arabian Gulf University & RCSI Bahrain",
    titleAr: "الطب البشري - جامعة الخليج العربي والكلية الملكية للجراحين في البحرين",
    isMerit: false,
    country: "Bahrain",
    countryAr: "البحرين",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medicine & Surgery (MB BCh BAO)"],

    stipend: { currency: "BHD", variants: [{ key: "all", standard: 1219, merit: null }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: BD 1,219.",
        "Tuition is paid directly to the university.",
        "Health cover in Bahrain and Kuwait.",
        "Money for travel and books.",
        "Hospital training in Kuwait and Bahrain."
      ]
    },

    necessaryExams: {
      satActStatus: "Not needed for AGU. US-diploma students send their SAT scores.",
      englishProficiency: "AGU: IELTS 5.5 or TOEFL 475. RCSI Bahrain: IELTS 6.5, at least 6.0 in each part.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS is accepted for Bahrain.",
      otherExams: "Kuwait University Qudrat tests (required for medicine) and a personal interview."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "25 June (yearly allocation of Gulf university seats)",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "The Ministry's portal and the university's forms",
      wordCount: "A short statement on why you want medicine.",
      supplementalEssays: "A personal interview at the Ministry or the university."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "97% (GPA 3.85)",
        stream: "Science stream only",
        notes: "At least 90% in science subjects. The course takes 6 - 7 years."
      },
      usDiploma: {
        minScore: "GPA 3.85 out of 4.0",
        coursePrereqs: "Chemistry, biology, and math or physics."
      },
      ukSystem: {
        minScore: "AGU: ABB in 3 AS-Levels. RCSI Bahrain: BCC, BBB or ACC at A-Level",
        aLevelSubjects: "Chemistry and biology, plus physics, math or psychology. Also IGCSE grade C in math and English."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry", minGrade: "90% in Thanawiya, or B at A-Level" },
      { subject: "Biology", minGrade: "90% in Thanawiya, or B at A-Level" },
      { subject: "Math or physics", minGrade: "90% in Thanawiya" }
    ],

    pathway: {
      entryType: "Direct entry (6 - 7 years, including a preparation year)",
      foundationNeeded: false,
      explanation: "You join the medical degree directly."
    },

    visaRequirements: {
      visaType: "Student residence permit (Bahrain)",
      keyDocuments: [
        "Civil ID and nationality certificate",
        "Acceptance letter from the Ministry",
        "Medical fitness report",
        "Valid Kuwaiti passport"
      ]
    },

    accreditedUniversities: [
      "Arabian Gulf University (AGU), Manama",
      "RCSI Bahrain (Royal College of Surgeons in Ireland - Bahrain)"
    ]
  },

  // =========================================================================
  // 6. Malta - Medicine (with foundation year)
  // =========================================================================
  {
    id: "malta-medicine-2025",
    title: "Medicine - University of Malta (with foundation year)",
    titleAr: "الطب البشري - جامعة مالطا (مع سنة تأسيسية)",
    isMerit: false,
    country: "Malta",
    countryAr: "مالطا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medical Foundation Program (MFP)"],

    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: null }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: €3,450.",
        "Tuition is paid by the Ministry.",
        "European health insurance card (EHIC).",
        "A return flight to Kuwait each year."
      ]
    },

    necessaryExams: {
      satActStatus: "Not needed.",
      englishProficiency: "IELTS Academic 5.5 in each part, or TOEFL iBT 61 (at least 17 in writing).",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS Academic is accepted for Malta.",
      otherExams: "An online interview."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "1 July",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "University of Malta international office",
      wordCount: "Statement of purpose: about 500 words.",
      supplementalEssays: "An online video interview."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "95% (GPA 3.75)",
        stream: "Science stream only",
        notes: "You must be at least 18 when you start. At least 90% in biology and chemistry."
      },
      usDiploma: {
        minScore: "GPA 3.75 out of 4.0",
        coursePrereqs: "Biology and chemistry with B or higher."
      },
      ukSystem: {
        minScore: "Biology and chemistry at AS-Level, grade B or higher",
        aLevelSubjects: "Also 8 IGCSEs with A or B in sciences and math."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry", minGrade: "90% in Thanawiya, or B at AS-Level" },
      { subject: "Biology", minGrade: "90% in Thanawiya, or B at AS-Level" },
      { subject: "English", minGrade: "IELTS 5.5 in each part, or TOEFL 61" }
    ],

    pathway: {
      entryType: "One foundation year, then a 5-year medical degree",
      foundationNeeded: true,
      explanation: "You first do the Medical Foundation Programme, then the 5-year medical degree."
    },

    visaRequirements: {
      visaType: "Schengen student visa (Malta)",
      keyDocuments: [
        "Acceptance letter from the University of Malta",
        "Financial guarantee letter from the Ministry",
        "Medical check",
        "Valid Kuwaiti passport"
      ]
    },

    accreditedUniversities: [
      "University of Malta (Msida campus)",
      "Medical Foundation Programme (MFP) centre"
    ]
  }
];

// Search filters. Only countries that have programs listed above (Canada is not in Plan 2026/2027).
const MOUSTAQBILI_FILTERS = {
  countries: [
    { value: "United States", label: "United States", labelAr: "الولايات المتحدة" },
    { value: "United Kingdom", label: "United Kingdom", labelAr: "المملكة المتحدة" },
    { value: "Ireland", label: "Ireland", labelAr: "أيرلندا" },
    { value: "Australia", label: "Australia", labelAr: "أستراليا" },
    { value: "Bahrain", label: "Bahrain", labelAr: "البحرين" },
    { value: "Malta", label: "Malta", labelAr: "مالطا" }
  ],
  // minPct/maxPct: a program is shown when its public-school floor is <= maxPct
  percentageRanges: [
    { value: "97.0+", label: "97% - 100%", minPct: 97.0, maxPct: 100 },
    { value: "95.0-96.9", label: "95% - 96.9%", minPct: 95.0, maxPct: 96.9 },
    { value: "90.0-94.9", label: "90% - 94.9%", minPct: 90.0, maxPct: 94.9 },
    { value: "85.0-89.9", label: "85% - 89.9%", minPct: 85.0, maxPct: 89.9 },
    { value: "80.0-84.9", label: "80% - 84.9%", minPct: 80.0, maxPct: 84.9 }
  ],
  majors: [
    { value: "Medicine & Surgery", label: "Medicine & Surgery", labelAr: "الطب والجراحة", category: "Medical & Health", categoryAr: "التخصصات الطبية والصحية" },
    { value: "Dentistry (BDS)", label: "Dentistry", labelAr: "طب الأسنان", category: "Medical & Health", categoryAr: "التخصصات الطبية والصحية" },
    { value: "Computer Science", label: "Computer Science", labelAr: "علوم الكمبيوتر", category: "Engineering & Computing", categoryAr: "الهندسة والحوسبة" },
    { value: "Computer Engineering", label: "Computer Engineering", labelAr: "هندسة الكمبيوتر", category: "Engineering & Computing", categoryAr: "الهندسة والحوسبة" },
    { value: "Cyber Security Engineering", label: "Cyber Security", labelAr: "الأمن السيبراني", category: "Engineering & Computing", categoryAr: "الهندسة والحوسبة" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence", labelAr: "الذكاء الاصطناعي", category: "Engineering & Computing", categoryAr: "الهندسة والحوسبة" }
  ]
};

// Currencies offered in the calculators
const MOUSTAQBILI_CURRENCIES = {
  KWD: { nameEn: "Kuwaiti Dinar", nameAr: "دينار كويتي" },
  USD: { nameEn: "US Dollar", nameAr: "دولار أمريكي" },
  GBP: { nameEn: "British Pound", nameAr: "جنيه إسترليني" },
  EUR: { nameEn: "Euro", nameAr: "يورو" },
  AUD: { nameEn: "Australian Dollar", nameAr: "دولار أسترالي" },
  NZD: { nameEn: "New Zealand Dollar", nameAr: "دولار نيوزيلندي" },
  CAD: { nameEn: "Canadian Dollar", nameAr: "دولار كندي" },
  BHD: { nameEn: "Bahraini Dinar", nameAr: "دينار بحريني" },
  SAR: { nameEn: "Saudi Riyal", nameAr: "ريال سعودي" },
  AED: { nameEn: "UAE Dirham", nameAr: "درهم إماراتي" },
  JOD: { nameEn: "Jordanian Dinar", nameAr: "دينار أردني" },
  EGP: { nameEn: "Egyptian Pound", nameAr: "جنيه مصري" }
};

// Offline fallback: units per 1 KWD. Live rates (open.er-api.com) replace these when reachable.
// USD, GBP, EUR, SAR, AED, BHD: Central Bank of Kuwait, 2026-10-11.
// AUD, NZD, CAD, JOD, EGP: open.er-api.com, 2026-10-11 (CBK does not publish them).
const MOUSTAQBILI_FX_FALLBACK = {
  date: "2026-10-11",
  rates: {
    KWD: 1,
    USD: 3.2452, GBP: 2.4524, EUR: 2.8970, SAR: 12.1694, AED: 11.9195, BHD: 1.2204,
    AUD: 4.6329, NZD: 5.7397, CAD: 4.6053, JOD: 2.2835, EGP: 168.904
  }
};

// Key rules of the Foreign Scholarship Plan 2026/2027 (shown on more-info.html)
const MOHE_PLAN_2026 = {
  planUrl: "https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf",
  allowancesUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/1?PageID=3",
  meritAllowancesUrl: "https://www.mohe.edu.kw/site/AR/eServices/ServiceDetails/6?PageID=3",
  registrationUrl: "https://reg2.mohe.edu.kw/Account/Login",
  statusEn: "General registration for 2026/2027 ran 14 June - 7 July 2026 and is closed. 2,704 high-school graduates were accepted. Merit programme applications stay open until 24 February 2027.",
  statusAr: "أُقيم التسجيل العام للعام 2026/2027 من 14 يونيو إلى 7 يوليو 2026 وقد أُغلق، وقُبل 2,704 من خريجي الثانوية. يبقى التقديم لبرنامج التميز مفتوحاً حتى 24 فبراير 2027.",
  countriesEn: "United States, United Kingdom, Ireland, Australia, New Zealand, Malta, Bahrain, Saudi Arabia, United Arab Emirates",
  countriesAr: "الولايات المتحدة، المملكة المتحدة، أيرلندا، أستراليا، نيوزيلندا، مالطا، البحرين، السعودية، الإمارات",
  rulesEn: [
    "Age 16 - 23, with a secondary certificate from 2024/2025 or 2025/2026.",
    "English: IELTS Academic (not General) 5.5 overall and in every band, or TOEFL 47, taken in Kuwait. Accepted students then have one calendar year to reach their university's required score.",
    "Medicine, dentistry, veterinary, pharmacy and engineering applicants must sit the Kuwait University aptitude tests (Qudrat); an equivalent average is used.",
    "United Kingdom: UKVI IELTS is required. For medicine and dentistry, failing the foundation year or the interview ends the placement, and the foundation year cannot be repeated. Other students may repeat it once.",
    "UK medicine: UCAT 1,650 or more, and IELTS 7.0 (no band below 6.5) for the foundation year.",
    "Merit (excellence) programme: at least 90% for all majors and 95% for medicine, dentistry and pharmacy. Merit students receive an extra 50% monthly allowance after the preparatory stage (Decree 197/2025, Art. 25). Merit status is lost if the GPA falls below 2.67 (below 60% in the UK system)."
  ],
  rulesAr: [
    "العمر من 16 إلى 23 سنة، وشهادة ثانوية من العام 2024/2025 أو 2025/2026.",
    "اللغة الإنجليزية: IELTS أكاديمي (وليس العام) 5.5 كمعدل عام وفي كل قسم، أو TOEFL بدرجة 47، يُجرى داخل الكويت. ويُمنح المقبول سنة ميلادية واحدة لتحقيق الدرجة المطلوبة من الجامعة.",
    "يجب على المتقدمين لتخصصات الطب وطب الأسنان والطب البيطري والصيدلة والهندسة أداء اختبارات القدرات بجامعة الكويت، ويُعتمد المعدل المكافئ.",
    "المملكة المتحدة: يُشترط UKVI IELTS. في الطب وطب الأسنان يؤدي عدم اجتياز السنة التأسيسية أو المقابلة إلى إنهاء الإيفاد، ولا تجوز إعادة السنة التأسيسية. ويجوز لغيرهم إعادتها مرة واحدة.",
    "الطب في المملكة المتحدة: UCAT بدرجة 1,650 فأكثر، وIELTS 7.0 (ولا يقل أي قسم عن 6.5) للسنة التأسيسية.",
    "برنامج التميز: 90% على الأقل لجميع التخصصات و95% للطب وطب الأسنان والصيدلة. يحصل طلبة التميز على زيادة 50% في المخصص الشهري بعد المرحلة التمهيدية (القرار 197/2025، المادة 25). وتسقط صفة التميز إذا قل المعدل عن 2.67 (أو عن 60% في النظام البريطاني)."
  ],
  // Minimum high-school % by country and major (Plan 2026/2027)
  floors: [
    { countryEn: "United Kingdom", countryAr: "المملكة المتحدة", medicine: "95", pharmacy: "-", engineering: "-", otherEn: "Radiography 90, most others 85", otherAr: "الأشعة 90، ومعظم التخصصات الأخرى 85" },
    { countryEn: "Ireland", countryAr: "أيرلندا", medicine: "97 (Dentistry 96)", medicineAr: "97 (طب الأسنان 96)", pharmacy: "96", engineering: "-", otherEn: "Nursing and allied health 90 - 92, others 85", otherAr: "التمريض والعلوم الصحية 90 - 92، والأخرى 85" },
    { countryEn: "Australia", countryAr: "أستراليا", medicine: "95", pharmacy: "92", engineering: "90", otherEn: "Physiotherapy and veterinary 95, others 85", otherAr: "العلاج الطبيعي والطب البيطري 95، والأخرى 85" },
    { countryEn: "New Zealand", countryAr: "نيوزيلندا", medicine: "95", pharmacy: "92", engineering: "-", otherEn: "-", otherAr: "-" },
    { countryEn: "Malta", countryAr: "مالطا", medicine: "95", pharmacy: "-", engineering: "-", otherEn: "Nursing and podiatry 90", otherAr: "التمريض وعلاج القدم 90" },
    { countryEn: "Bahrain", countryAr: "البحرين", medicine: "97", pharmacy: "92", engineering: "-", otherEn: "Nursing and allied health 90", otherAr: "التمريض والعلوم الصحية 90" },
    { countryEn: "Saudi Arabia", countryAr: "السعودية", medicine: "95", pharmacy: "92 (Pharm D)", engineering: "-", otherEn: "Health majors 90", otherAr: "التخصصات الصحية 90" },
    { countryEn: "United States", countryAr: "الولايات المتحدة", medicine: "-", pharmacy: "-", engineering: "90", otherEn: "No medicine offered; others 85", otherAr: "لا يُطرح الطب؛ والأخرى 85" }
  ]
};

const KUWAIT_LOCAL_UNIVERSITIES = [
  {
    id: "kuwait-university",
    typeEn: "Public University",
    typeAr: "جامعة حكومية",
    name: "Kuwait University (KU)",
    nameAr: "جامعة الكويت",
    campusLocation: "Sabah Al-Salem University City, Shadadiya",
    campusLocationAr: "مدينة صباح السالم الجامعية - الشدادية",
    scholarshipFunding: "Free tuition for Kuwaiti students",
    scholarshipFundingAr: "دراسة مجانية للطلبة الكويتيين",
    admissionSystem: "Kuwait University admission portal (portal.ku.edu.kw). General minimum: 70% science stream, 78% arts stream.",
    admissionSystemAr: "بوابة القبول بجامعة الكويت (portal.ku.edu.kw). الحد الأدنى العام: 70% للقسم العلمي و78% للقسم الأدبي.",
    aptitudeExams: "Aptitude tests (Qudrat) in English, Math and Arabic, weighted by college.",
    aptitudeExamsAr: "اختبارات القدرات في الإنجليزي والرياضيات والعربي، بأوزان تختلف حسب الكلية.",
    floorLabelEn: "Lowest admitted, Fall 2026/27",
    floorLabelAr: "أدنى معدل مقبول، الفصل الأول 2026/2027",
    // qudrat: the college's name in KUWAIT_QUDRAT.formulas (qudrat-data.js), used to show how the score is counted
    // scoring: "hs-only" (high-school % only) or "no-qudrat" when the college does not use Qudrat weights
    // majors: majors with their own lowest admitted grade, Fall 2026/27
    colleges: [
      { collegeName: "Medicine", collegeNameAr: "الطب", minThanawiya: "94.73%", qudrat: "Medicine" },
      { collegeName: "Dentistry", collegeNameAr: "طب الأسنان", minThanawiya: "94.42%", qudrat: "Dentistry" },
      { collegeName: "Pharmacy", collegeNameAr: "الصيدلة", minThanawiya: "92.56%", qudrat: "Pharmacy" },
      {
        collegeName: "Allied Health Sciences", collegeNameAr: "العلوم الطبية المساعدة", minThanawiya: "86.77 - 91.31%", qudrat: "Allied Health Sciences",
        majors: [
          { en: "Physiotherapy", ar: "العلاج الطبيعي", grade: "91.31%" },
          { en: "Occupational Therapy", ar: "العلاج الوظيفي", grade: "90.6%" },
          { en: "Medical Laboratory", ar: "المختبرات الطبية", grade: "88.71%" },
          { en: "Nursing", ar: "التمريض", grade: "88.49%" }
        ]
      },
      { collegeName: "Public Health", collegeNameAr: "الصحة العامة", minThanawiya: "83.68%", qudrat: "Public Health" },
      {
        collegeName: "Engineering & Petroleum", collegeNameAr: "الهندسة والبترول", minThanawiya: "65.38 - 76.56%", qudrat: "Engineering & Petroleum",
        majors: [
          { en: "Computer Engineering", ar: "هندسة الكمبيوتر", grade: "76.56%" },
          { en: "Petroleum Engineering", ar: "هندسة البترول", grade: "73.26%" },
          { en: "Civil Engineering", ar: "الهندسة المدنية", grade: "71.93%" },
          { en: "Electrical Engineering", ar: "الهندسة الكهربائية", grade: "71.19%" },
          { en: "Industrial Engineering", ar: "الهندسة الصناعية", grade: "65.38%" }
        ]
      },
      {
        collegeName: "Science", collegeNameAr: "العلوم", minThanawiya: "70 - 95.6%", scoring: "hs-only",
        majors: [
          { en: "Microbiology", ar: "الأحياء الدقيقة", grade: "95.6%" },
          { en: "Cybersecurity", ar: "الأمن السيبراني", grade: "90.65%" },
          { en: "Computer Science", ar: "علوم الكمبيوتر", grade: "83.06%" }
        ]
      },
      { collegeName: "Law", collegeNameAr: "الحقوق", minThanawiya: "85.76%", scoring: "no-qudrat" },
      { collegeName: "Life Sciences", collegeNameAr: "علوم الحياة", minThanawiya: "62.78 - 84.12%", qudrat: "Life Sciences" },
      {
        collegeName: "Business Administration", collegeNameAr: "العلوم الإدارية", minThanawiya: "56.91 - 73.35%", qudrat: "Business Administration",
        majors: [
          { en: "Accounting (science stream)", ar: "المحاسبة (علمي)", grade: "73.35%" },
          { en: "Accounting (arts stream)", ar: "المحاسبة (أدبي)", grade: "69%" }
        ]
      }
    ],
    sourceNote: "Source: Kuwait University, minimum averages for Kuwaiti students, Fall 2026/2027 (published 30 July 2026).",
    sourceNoteAr: "المصدر: جامعة الكويت، الحدود الدنيا للطلبة الكويتيين، الفصل الأول 2026/2027 (نُشر في 30 يوليو 2026)."
  },
  {
    id: "aasu",
    typeEn: "Public University",
    typeAr: "جامعة حكومية",
    name: "Abdullah Al-Salem University (AASU)",
    nameAr: "جامعة عبد الله السالم",
    campusLocation: "Al-Firdous Street, Block 3, Khaldiya",
    campusLocationAr: "شارع الفردوس، قطعة 3، الخالدية",
    scholarshipFunding: "Free tuition for Kuwaiti students",
    scholarshipFundingAr: "دراسة مجانية للطلبة الكويتيين",
    admissionSystem: "AASU admission system (aasu.edu.kw). 1,146 students were admitted for 2026/2027.",
    admissionSystemAr: "نظام القبول بجامعة عبد الله السالم (aasu.edu.kw). قُبل 1,146 طالباً وطالبة للعام 2026/2027.",
    aptitudeExams: "Kuwait University aptitude tests (Qudrat) are used for AASU applications.",
    aptitudeExamsAr: "تُعتمد اختبارات القدرات بجامعة الكويت للتقديم في جامعة عبد الله السالم.",
    floorLabelEn: "Minimum",
    floorLabelAr: "الحد الأدنى",
    // Majors come from the previous edition of this site and have not been re-checked (majorsFlag)
    colleges: [
      {
        collegeName: "Computing & Systems", collegeNameAr: "الحوسبة والنظم", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", majorsFlag: "unverified",
        majors: [
          { en: "Artificial Intelligence", ar: "الذكاء الاصطناعي" },
          { en: "Cyber Security", ar: "الأمن السيبراني" },
          { en: "Software Engineering", ar: "هندسة البرمجيات" }
        ]
      },
      {
        collegeName: "Engineering & Energy", collegeNameAr: "الهندسة والطاقة", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", majorsFlag: "unverified",
        majors: [
          { en: "Energy Engineering", ar: "هندسة الطاقة" },
          { en: "Systems Engineering", ar: "هندسة النظم" },
          { en: "Environmental Engineering", ar: "الهندسة البيئية" }
        ]
      },
      {
        collegeName: "Business & Entrepreneurship", collegeNameAr: "الأعمال وريادة الأعمال", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", majorsFlag: "unverified",
        majors: [
          { en: "FinTech", ar: "التكنولوجيا المالية" },
          { en: "Supply Chain", ar: "سلاسل الإمداد" },
          { en: "Business Analytics", ar: "تحليلات الأعمال" }
        ]
      }
    ],
    sourceNote: "AASU has not published per-college cutoffs for 2026/2027. Check aasu.edu.kw.",
    sourceNoteAr: "لم تنشر الجامعة الحدود الدنيا لكل كلية للعام 2026/2027. راجع aasu.edu.kw."
  },
  {
    id: "puc",
    typeEn: "Internal Scholarship (PUC)",
    typeAr: "بعثة داخلية (مجلس الجامعات الخاصة)",
    name: "Private Universities Council - Internal Scholarships",
    nameAr: "مجلس الجامعات الخاصة - البعثات الداخلية",
    campusLocation: "AUM, GUST, AUK, KCST, ACK, AU and other approved private universities",
    campusLocationAr: "AUM، GUST، AUK، KCST، ACK، AU وغيرها من الجامعات الخاصة المعتمدة",
    scholarshipFunding: "Tuition paid by the government",
    scholarshipFundingAr: "الرسوم الدراسية على نفقة الحكومة",
    admissionSystem: "registration.puc.edu.kw. Registration for 2026/2027 ran 3 - 13 August 2026.",
    admissionSystemAr: "registration.puc.edu.kw. أُقيم التسجيل للعام 2026/2027 من 3 إلى 13 أغسطس 2026.",
    aptitudeExams: "Engineering selection: high school 65% + Math test 20% + English test 15%.",
    aptitudeExamsAr: "المفاضلة للهندسة: الثانوية 65% + اختبار الرياضيات 20% + اختبار الإنجليزي 15%.",
    floorLabelEn: "Minimum",
    floorLabelAr: "الحد الأدنى",
    // weights: PUC's own selection formula (not Kuwait University Qudrat); reported by Al-Jarida, 30 June 2026
    colleges: [
      {
        collegeName: "Engineering", collegeNameAr: "الهندسة", minThanawiya: "90%",
        weights: { hs: 0.65, math: 0.20, eng: 0.15 },
        majors: [ { en: "Systems and Computer Engineering", ar: "هندسة النظم والكمبيوتر", grade: "85%" } ]
      },
      { collegeName: "Law", collegeNameAr: "الحقوق", minThanawiya: "90%" },
      {
        collegeName: "Other bachelor's programmes", collegeNameAr: "برامج البكالوريوس الأخرى", minThanawiya: "78% science / 80% arts", minThanawiyaAr: "78% علمي / 80% أدبي",
        majors: [
          { en: "Business", ar: "إدارة الأعمال" },
          { en: "Information Technology", ar: "تقنية المعلومات" },
          { en: "Media", ar: "الإعلام" },
          { en: "Design", ar: "التصميم" }
        ]
      },
      { collegeName: "Diploma", collegeNameAr: "الدبلوم", minThanawiya: "70%" }
    ],
    sourceNote: "Source: PUC announcement for 2026/2027 (Al-Jarida, 30 June 2026).",
    sourceNoteAr: "المصدر: إعلان مجلس الجامعات الخاصة للعام 2026/2027 (الجريدة، 30 يونيو 2026)."
  }
];

if (typeof window !== 'undefined') {
  window.MOUSTAQBILI_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOUSTAQBILI_FILTERS = MOUSTAQBILI_FILTERS;
  window.MOUSTAQBILI_CURRENCIES = MOUSTAQBILI_CURRENCIES;
  window.MOUSTAQBILI_FX_FALLBACK = MOUSTAQBILI_FX_FALLBACK;
  window.MOHE_PLAN_2026 = MOHE_PLAN_2026;
  window.KUWAIT_LOCAL_UNIVERSITIES = KUWAIT_LOCAL_UNIVERSITIES;
}
