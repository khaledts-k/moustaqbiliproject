/**
 * moustaqbili | مستقبلي
 * The Official Digital Gateway for Kuwait Ministry of Higher Education (MoHE) Scholarships
 * بوابة البعثات والاعتماد الأكاديمي الموحدة بدولة الكويت
 *
 * Sourced directly from:
 * 1. Ministerial Decree No. 16/2025 (قوائم مؤسسات التعليم العالي المتميزة بالمملكة المتحدة)
 * 2. Official Annual Foreign Scholarship Plan 2025/2026 (خطة بعثات وزارة التعليم العالي للعام الجامعي 2025/2026)
 * 3. Kuwait Central Bank (CBK) standard foreign exchange pegs
 */

// Official CBK Reference Conversion Rates from 1 KWD
const KWD_CONVERSION_RATES = {
  KWD: { rate: 1.0, symbol: "KWD", name: "Kuwaiti Dinar (د.ك)" },
  USD: { rate: 3.25, symbol: "$", name: "US Dollar ($)" },
  GBP: { rate: 2.50, symbol: "£", name: "British Pound (£)" },
  EUR: { rate: 2.98, symbol: "€", name: "Euro (€)" },
  AUD: { rate: 4.80, symbol: "A$", name: "Australian Dollar (A$)" },
  CAD: { rate: 4.40, symbol: "C$", name: "Canadian Dollar (C$)" },
  BHD: { rate: 1.22, symbol: "BD", name: "Bahraini Dinar (د.ب)" }
};

const MOUSTAQBILI_PROGRAMS = [
  // =========================================================================
  // 1. UNITED KINGDOM - HUMAN MEDICINE (MBChB / MBBS)
  // =========================================================================
  {
    id: "uk-medicine",
    title: "Human Medicine & Surgery (MBChB / MBBS)",
    titleAr: "الطب البشري والجراحة العامة",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Decree 16/2025 - Clinical & Health Merit (جامعات التميز)",
    country: "United Kingdom",
    countryAr: "المملكة المتحدة",
    flagCode: "GB",
    hostCurrency: "GBP",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBChB)", "Clinical Medicine", "Anatomy & Physiology"],

    // Direct UI Projected Salary in KWD
    salary: {
      standardKwd: 860,
      meritKwd: 1290,
      hostCurrency: "GBP",
      standardDisplayKwd: "860 KWD / month",
      meritDisplayKwd: "1,290 KWD / month",
      allowancesSummary: [
        "Monthly living allowance deposited on the 25th of every month directly to student account",
        "Statutory +50% merit monthly allowance per Article 12 of MoHE Bylaws & Decree 16/2025",
        "Full Clinical NHS Hospital Placement Fees paid directly by MoHE",
        "Annual medical equipment & stethoscope subsidy",
        "Annual round-trip flight tickets (Kuwait / London / Kuwait)",
        "Full UK NHS Healthcare Surcharge (IHS) reimbursed by Cultural Office"
      ]
    },

    // Organized Requirements
    requirements: {
      ielts: {
        minOverall: 7.0,
        subsections: {
          listening: 6.5,
          reading: 6.5,
          writing: 6.5,
          speaking: 6.5
        },
        ukviRequired: true,
        note: "UKVI Academic IELTS is legally mandatory for UK Foundation Year visa issuance. Standard IELTS will lead to visa refusal for foundation level."
      },
      qudrat: {
        applies: false,
        optimalScore: "Not Applicable for UK Direct Scholarships",
        note: "UK medical faculties evaluate candidates based on Thanawiya % (95.0%+), UCAT score (2,250+), and UKVI IELTS. National Aptitude (Qudrat) is not used."
      },
      gpa: {
        thanawiya: "95.0% Minimum (Scientific Stream)",
        usGpa: "3.75 Cumulative GPA on 4.0 Scale",
        ukSystem: "A*AA or AAA in Chemistry, Biology, and Mathematics"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Chemistry (كيمياء)", minGrade: "Grade 'A' (Minimum 90% in Thanawiya / Grade 'A' in A-Level)" },
          { subject: "Biology (أحياء)", minGrade: "Grade 'A' (Minimum 90% in Thanawiya / Grade 'A' in A-Level)" },
          { subject: "Mathematics (رياضيات)", minGrade: "Grade 'B' (Minimum 90% in Thanawiya / Grade 'B' in A-Level)" }
        ],
        foundationRule: "Foundation Year: 1 year mandatory for Thanawiya graduates. Passing on the first attempt is required per GMC and MoHE regulations.",
        additionalNotes: "Strict UCAS medical deadline: October 15. Requires UCAT test and panel/MMI interviews."
      }
    },

    // Merit Scholarship Changes
    meritChanges: {
      tierName: "UK Clinical Merit (Decree 16/2025)",
      stipendDiff: "+50% Monthly Allowance bonus (from 860 KWD to 1,290 KWD / month)",
      benefitsDiff: [
        "Increases monthly allowance from 860 KWD to 1,290 KWD (+50%)",
        "Priority clinical placement allocations in London teaching hospitals",
        "Dedicated advisory fast-track at Kuwait Cultural Attaché in London",
        "Exemption from standard quota caps for approved top UK institutions"
      ]
    },

    duration: "5-6 Years",
    culturalOffice: "Kuwait Cultural Attaché - London",
    accreditedUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
      "King's College London",
      "University of Edinburgh",
      "University of Manchester",
      "University of Glasgow"
    ],
    deadline: "October 15 (Annual Strict UCAS / MoHE Clinical Deadline)"
  },

  // =========================================================================
  // 2. REPUBLIC OF IRELAND - MEDICINE & SURGERY (MB BCh BAO)
  // =========================================================================
  {
    id: "ire-medicine",
    title: "Medicine & Surgery (MB BCh BAO)",
    titleAr: "الطب البشري والجراحة العامة - أيرلندا",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Specialized Clinical Accreditation (الجامعات المتميزة بأيرلندا)",
    country: "Ireland",
    countryAr: "جمهورية أيرلندا",
    flagCode: "IE",
    hostCurrency: "EUR",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MB BCh BAO)", "Clinical Medicine"],

    salary: {
      standardKwd: 740,
      meritKwd: 1110,
      hostCurrency: "EUR",
      standardDisplayKwd: "740 KWD / month",
      meritDisplayKwd: "1,110 KWD / month",
      allowancesSummary: [
        "Monthly living allowance deposited on the 25th of each month",
        "Statutory +50% monthly allowance for Merit Universities (RCSI, Trinity, UCD)",
        "Pre-registration clinical rotations covered 100% by MoHE",
        "Annual flight tickets to Kuwait",
        "Comprehensive private Irish student health insurance"
      ]
    },

    requirements: {
      ielts: {
        minOverall: 6.5,
        subsections: {
          listening: 6.5,
          reading: 6.5,
          writing: 6.5,
          speaking: 6.5
        },
        ukviRequired: false,
        note: "Standard Academic IELTS is accepted for Irish Study Visas. Minimum 6.5 in all 4 subsections."
      },
      qudrat: {
        applies: false,
        optimalScore: "Not Applicable for Ireland",
        note: "Admission is governed by Thanawiya percentage (97.0%+), IELTS, personal interview, and 2 academic recommendation letters."
      },
      gpa: {
        thanawiya: "97.0% Minimum (GPA 3.85)",
        usGpa: "3.85 Cumulative GPA on 4.0 Scale",
        ukSystem: "A-Level / AS-Level: Minimum (ABB) in Chemistry, Biology, and Math/Physics"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'A' in AS-Level" },
          { subject: "Biology / Physics (أحياء / فيزياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
          { subject: "Mathematics (رياضيات)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" }
        ],
        foundationRule: "Foundation Year: 1 year preparatory pathway at RCSI or direct entry with qualifying A-Levels (ABB).",
        additionalNotes: "Direct international applications close in February; MoHE Irish Medical Committee allocation occurs in June."
      }
    },

    meritChanges: {
      tierName: "Ireland Clinical Merit Tier",
      stipendDiff: "+50% Monthly Allowance bonus (from 740 KWD to 1,110 KWD / month)",
      benefitsDiff: [
        "Monthly allowance increased from 740 KWD to 1,110 KWD (+50%)",
        "Guaranteed hospital elective rotation sponsorships",
        "Full coverage of RCSI institutional and licensing examination charges"
      ]
    },

    duration: "5-6 Years",
    culturalOffice: "Kuwait Cultural Office - Dublin",
    accreditedUniversities: [
      "Royal College of Surgeons in Ireland (RCSI) - Dublin",
      "Trinity College Dublin (TCD)",
      "University College Dublin (UCD)",
      "University College Cork (UCC)",
      "University of Galway"
    ],
    deadline: "February 1 (Direct International) / June 1 (MoHE Allocation)"
  },

  // =========================================================================
  // 3. UNITED STATES - CYBER SECURITY, COMPUTER ENGINEERING & AI
  // =========================================================================
  {
    id: "us-engineering-cs",
    title: "Cyber Security, Computer Engineering & AI",
    titleAr: "هندسة الأمن السيبراني وهندسة الكمبيوتر والذكاء الاصطناعي",
    track: "Merit Scholarship Track (بعثات التميز)",
    isMerit: true,
    meritTier: "Tier 1 - Top 20 Global NBAQ Merit",
    country: "United States",
    countryAr: "الولايات المتحدة الأمريكية",
    flagCode: "US",
    hostCurrency: "USD",
    category: "Engineering & Computing",
    majors: ["Cyber Security Engineering", "Computer Engineering", "Computer Science", "Artificial Intelligence"],

    salary: {
      standardKwd: 785,
      meritKwd: 1180,
      hostCurrency: "USD",
      standardDisplayKwd: "785 KWD / month",
      meritDisplayKwd: "1,180 KWD / month",
      allowancesSummary: [
        "Monthly living allowance deposited on the 25th of each month",
        "Annual Book & Equipment Allowance: $2,000 / year",
        "Annual Technology Subsidy: $1,200 (One-time)",
        "Annual flight tickets to Kuwait",
        "100% University Direct Tuition Paid by Cultural Bureau in Washington D.C."
      ]
    },

    requirements: {
      ielts: {
        minOverall: 7.0,
        subsections: {
          listening: 6.5,
          reading: 6.5,
          writing: 6.5,
          speaking: 6.5
        },
        ukviRequired: false,
        note: "Standard Academic IELTS 7.0+ or TOEFL iBT 90+ (sub-scores 22+) accepted for US F-1 student visas."
      },
      qudrat: {
        applies: false,
        optimalScore: "Not Applicable (SAT Target: 1400+)",
        note: "US universities do not utilize Kuwait Qudrat exams. Merit status requires high SAT score (1400-1550, Math 750+) or ACT (31+)."
      },
      gpa: {
        thanawiya: "90.0% (Engineering) | 85.0% (Computer Science)",
        usGpa: "3.50 Cumulative GPA for Engineering | 3.25 for CS",
        ukSystem: "3 A-Levels with grades A*AA or AAA including Math"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Advanced Mathematics / Calculus", minGrade: "Grade 'A' (Minimum 88% in Thanawiya)" },
          { subject: "Physics / Computing", minGrade: "Grade 'B+' (Minimum 85% in Thanawiya)" },
          { subject: "English Language", minGrade: "Grade 'B' (TOEFL 90 / IELTS 7.0)" }
        ],
        foundationRule: "Direct 4-Year Undergraduate Degree. No Foundation year required for US universities.",
        additionalNotes: "Admission is strictly for the Fall semester. Merit applications are accepted year-round via Washington Cultural Office."
      }
    },

    meritChanges: {
      tierName: "US NBAQ Top 20 Merit Tier",
      stipendDiff: "+50% Monthly Allowance bonus (from 785 KWD to 1,180 KWD / month)",
      benefitsDiff: [
        "Increases monthly living allowance from 785 KWD to 1,180 KWD (+50%)",
        "Year-round rolling scholarship registration at MoHE portal",
        "Guaranteed approval for Ivy League and Top 20 Global engineering faculties"
      ]
    },

    duration: "4 Years",
    culturalOffice: "Kuwait Cultural Division - Washington D.C. & Los Angeles",
    accreditedUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "Georgia Institute of Technology",
      "Purdue University",
      "University of Washington",
      "University of Michigan - Ann Arbor"
    ],
    deadline: "November 1 (Early Action) / January 15 (Regular Decision)"
  },

  // =========================================================================
  // 4. AUSTRALIA - MEDICINE & DENTISTRY (MBBS / BMedSci / MD)
  // =========================================================================
  {
    id: "aus-medicine",
    title: "Medicine & Dentistry (Monash / Western Sydney / Flinders / Curtin)",
    titleAr: "الطب البشري وطب وجراحة الأسنان - أستراليا",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Group of Eight (Go8) & Clinical Accreditation",
    country: "Australia",
    countryAr: "أستراليا",
    flagCode: "AU",
    hostCurrency: "AUD",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBBS / BMedSci / MD)", "Dentistry (BDS)"],

    salary: {
      standardKwd: 540,
      meritKwd: 810,
      hostCurrency: "AUD",
      standardDisplayKwd: "540 KWD / month",
      meritDisplayKwd: "810 KWD / month",
      allowancesSummary: [
        "Monthly living allowance deposited on the 25th of each month",
        "Statutory +50% Monthly Allowance per Article 12 of MoHE Bylaws",
        "Full Clinical Equipment and Lab Placement Surcharges covered",
        "Overseas Student Health Cover (OSHC) comprehensive policy",
        "Annual flight tickets to Kuwait"
      ]
    },

    requirements: {
      ielts: {
        minOverall: 7.0,
        subsections: {
          listening: 7.0,
          reading: 7.0,
          writing: 7.0,
          speaking: 7.0
        },
        ukviRequired: false,
        note: "Foundation entry requires IELTS 5.5 (5.5 min). Clinical entry requires IELTS 7.0 with no band below 7.0 or PTE Academic 65+."
      },
      qudrat: {
        applies: false,
        optimalScore: "Not Applicable (ISAT Score: 165+)",
        note: "Replaced by ISAT (International Student Admissions Test) score of 165+ for Monash University, or Casper exam for Murdoch / Western Sydney."
      },
      gpa: {
        thanawiya: "95.0% Minimum (GPA 3.75)",
        usGpa: "3.75 Cumulative GPA on 4.0 Scale",
        ukSystem: "3 A-Levels with grades AAA or A*AA"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Chemistry (كيمياء)", minGrade: "Grade 'A' (Minimum 95.0% in Thanawiya / 75% in Monash Foundation)" },
          { subject: "Biology (أحياء)", minGrade: "Grade 'A' (Minimum 95.0% in Thanawiya)" },
          { subject: "English Language", minGrade: "IELTS 7.0 (no band below 7.0) / TOEFL 100" }
        ],
        foundationRule: "Foundation Year: 1 year intensive medical foundation pathway followed by 5-6 year clinical MBBS/MD.",
        additionalNotes: "Australian academic calendar commences in February (Semester 1). Deadlines close August 31."
      }
    },

    meritChanges: {
      tierName: "Australia Go8 Clinical Merit",
      stipendDiff: "+50% Monthly Allowance bonus (from 540 KWD to 810 KWD / month)",
      benefitsDiff: [
        "Monthly living allowance increased from 540 KWD to 810 KWD (+50%)",
        "Placement priority at Group of Eight (Go8) premier research medical centres",
        "Full reimbursement of clinical uniform and diagnostic instrument costs"
      ]
    },

    duration: "6-8 Years (Foundation + Clinical Degree)",
    culturalOffice: "Kuwait Cultural Office - Canberra",
    accreditedUniversities: [
      "Monash University (Clayton)",
      "Western Sydney University",
      "Flinders University (Adelaide)",
      "Curtin University (Perth)",
      "University of Melbourne",
      "University of Sydney"
    ],
    deadline: "August 31 (Annual Allocation Cycle)"
  },

  // =========================================================================
  // 5. KINGDOM OF BAHRAIN - MEDICINE (AGU & RCSI Bahrain)
  // =========================================================================
  {
    id: "bh-medicine",
    title: "Medicine & Surgery - Arabian Gulf University (AGU) & RCSI Bahrain",
    titleAr: "الطب البشري - جامعة الخليج العربي والكلية الملكية للجراحين (البحرين)",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: false,
    meritTier: "GCC Ministerial Direct Allocation (مقاعد مجلس التعاون)",
    country: "Bahrain",
    countryAr: "مملكة البحرين",
    flagCode: "BH",
    hostCurrency: "BHD",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medicine & Surgery (MB BCh BAO)"],

    salary: {
      standardKwd: 530,
      meritKwd: 530,
      hostCurrency: "BHD",
      standardDisplayKwd: "530 KWD / month",
      meritDisplayKwd: "530 KWD / month (GCC Quota)",
      allowancesSummary: [
        "Monthly living allowance: 530 KWD / month (BHD 650)",
        "100% Direct Tuition Fees paid to GCC University",
        "Comprehensive Regional Health Coverage in Bahrain & Kuwait",
        "Travel Allowance & Study Books Surcharge",
        "Direct Hospital Rotations in Kuwait and Bahrain"
      ]
    },

    requirements: {
      ielts: {
        minOverall: 5.5,
        subsections: {
          listening: 5.0,
          reading: 5.0,
          writing: 5.0,
          speaking: 5.0
        },
        ukviRequired: false,
        note: "AGU accepts IELTS 5.5 or TOEFL 475. RCSI Bahrain requires IELTS 6.5 (no band below 6.0)."
      },
      qudrat: {
        applies: true,
        optimalScore: "75%+ in Chemistry & Mathematics Aptitude",
        note: "MANDATORY: Passing Kuwait University Aptitude Tests in Chemistry & Math is required for Arabian Gulf University GCC medical quotas."
      },
      gpa: {
        thanawiya: "97.0% Minimum (GPA 3.85)",
        usGpa: "3.85 Cumulative GPA on 4.0 Scale",
        ukSystem: "AS-Level: Minimum (ABB) in 3 subjects | RCSI Bahrain: (BBB)"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in A-Level" },
          { subject: "Biology (أحياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in A-Level" },
          { subject: "Mathematics / Physics", minGrade: "Minimum 90.0% in Thanawiya" }
        ],
        foundationRule: "Direct 6-7 Year Medical Program including Preparatory Year.",
        additionalNotes: "Candidates must sit for a personal interview at the Ministry of Higher Education in Kuwait."
      }
    },

    meritChanges: {
      tierName: "GCC Direct Seat Track",
      stipendDiff: "Standard GCC ministerial stipend applies (530 KWD / month)",
      benefitsDiff: [
        "Direct government agreement between GCC member states",
        "Direct residency rotation opportunities in Kuwait Ministry of Health hospitals",
        "Full local healthcare access under the GCC Unified System"
      ]
    },

    duration: "6-7 Years",
    culturalOffice: "Kuwait Cultural Office - Manama",
    accreditedUniversities: [
      "Arabian Gulf University (AGU) - Manama",
      "RCSI Bahrain (Medical University of Bahrain)"
    ],
    deadline: "June 25 (Annual GCC Quota Allocation)"
  },

  // =========================================================================
  // 6. REPUBLIC OF MALTA - MEDICINE (Medical Foundation Program MFP)
  // =========================================================================
  {
    id: "malta-medicine",
    title: "Medicine & Surgery - University of Malta (MFP Foundation)",
    titleAr: "الطب البشري - جمهورية مالطا (برنامج التأسيس الطبي)",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: false,
    meritTier: "Specialized European Clinical Track",
    country: "Malta",
    countryAr: "جمهورية مالطا",
    flagCode: "MT",
    hostCurrency: "EUR",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medical Foundation Program (MFP)"],

    salary: {
      standardKwd: 740,
      meritKwd: 740,
      hostCurrency: "EUR",
      standardDisplayKwd: "740 KWD / month",
      meritDisplayKwd: "740 KWD / month",
      allowancesSummary: [
        "Monthly living allowance: 740 KWD / month (€2,200)",
        "100% Tuition Fees paid by Kuwait Ministry of Higher Education",
        "European Health Insurance Card (EHIC) Coverage",
        "Annual flight tickets (Kuwait / Malta / Kuwait)"
      ]
    },

    requirements: {
      ielts: {
        minOverall: 5.5,
        subsections: {
          listening: 5.5,
          reading: 5.5,
          writing: 5.5,
          speaking: 5.5
        },
        ukviRequired: false,
        note: "IELTS Academic 5.5 (no band below 5.5) or TOEFL iBT 61 (minimum 17 in writing)."
      },
      qudrat: {
        applies: false,
        optimalScore: "Not Applicable for Malta",
        note: "Admission is determined by Thanawiya high school grades (95%+), IELTS 5.5, and passing an online interview with the medical faculty."
      },
      gpa: {
        thanawiya: "95.0% Minimum (GPA 3.75)",
        usGpa: "3.75 Cumulative GPA on 4.0 Scale",
        ukSystem: "2 Science subjects at AS-Level (Biology & Chemistry) with min Grade 'B'"
      },
      ministryUpdated: {
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        courseFloors: [
          { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
          { subject: "Biology (أحياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
          { subject: "English Language", minGrade: "IELTS 5.5 (no band below 5.5) / TOEFL 61" }
        ],
        foundationRule: "1-Year Medical Foundation Program (MFP) followed by 5-Year MD Program.",
        additionalNotes: "Student must be at least 18 years old upon enrollment and pass the online personal interview."
      }
    },

    meritChanges: {
      tierName: "European Specialized Track",
      stipendDiff: "Standard MoHE European stipend applies (740 KWD / month)",
      benefitsDiff: [
        "100% tuition coverage for both MFP foundation year and 5-year MD",
        "Direct recognition by the European Union and Kuwait Medical Licensing Board",
        "Clinical rotations in Mater Dei Hospital (Msida)"
      ]
    },

    duration: "1 Year Foundation + 5 Years MD",
    culturalOffice: "Kuwait Cultural Office - Paris (covers Malta) & Embassy in Valletta",
    accreditedUniversities: [
      "University of Malta (Msida Campus)",
      "Medical Foundation Programme (MFP) Centre"
    ],
    deadline: "July 1 (Maltese Medical Intake)"
  }
];

// =========================================================================
// KUWAIT LOCAL UNIVERSITIES DIRECTORY (KU, AASU, & PRIVATE PUC SCHOLARSHIPS)
// =========================================================================
const KUWAIT_LOCAL_UNIVERSITIES = [
  {
    type: "Public Government University (جامعة حكومية)",
    name: "Kuwait University (KU)",
    nameAr: "جامعة الكويت",
    campusLocation: "Shadadiya University City, Sabah Al-Salem Campus (مدينة صباح السالم الجامعية - الشدادية)",
    scholarshipFunding: "100% Free Government Tuition + 200 KWD Monthly Student Allowance (المكافأة الطلابية)",
    admissionSystem: "Central Admission Portal (portal.ku.edu.kw) via Kuwait Sahel App",
    aptitudeExams: "Mandatory Kuwait University Aptitude Tests (English, Math, Chemistry, Arabic)",
    equivalentFormula: "Weighted Composite: (High School % x 70%) + (Aptitude Tests x 30%)",
    colleges: [
      { collegeName: "College of Medicine (كلية الطب البشري)", seatsNotes: "Scientific only; requires Math & Chem Aptitude", minThanawiya: "85.0% Scientific Floor", equivalentFloor: "Cutoff ~91.5% Composite" },
      { collegeName: "College of Dentistry (كلية طب الأسنان)", seatsNotes: "Scientific only; requires Math & Chem Aptitude", minThanawiya: "85.0% Scientific Floor", equivalentFloor: "Cutoff ~90.0% Composite" },
      { collegeName: "College of Engineering & Petroleum (الهندسة والبترول)", seatsNotes: "Scientific only; requires Math & English Aptitude", minThanawiya: "80.0% Scientific Floor", equivalentFloor: "Cutoff ~82.0% Composite" },
      { collegeName: "College of Pharmacy (كلية الصيدلة)", seatsNotes: "Scientific only; requires Math & Chem Aptitude", minThanawiya: "80.0% Scientific Floor", equivalentFloor: "Cutoff ~85.0% Composite" },
      { collegeName: "College of Business Administration (العلوم الإدارية)", seatsNotes: "Scientific & Literary; requires Math & English Aptitude", minThanawiya: "75.0% Floor", equivalentFloor: "Cutoff ~78.0% Composite" }
    ]
  },
  {
    type: "Public Government University (جامعة حكومية جديدة)",
    name: "Abdullah Al-Salem University (AASU)",
    nameAr: "جامعة عبد الله السالم",
    campusLocation: "Khaldiya, Adailiya, and Shuwaikh Campuses (الخالدية والعديلية والشويخ)",
    scholarshipFunding: "100% Free Government Tuition + 200 KWD Monthly Student Allowance",
    admissionSystem: "Direct AASU Digital Portal (aasu.edu.kw)",
    aptitudeExams: "Kuwait University Aptitude Tests or Standardized SAT/ACT/IELTS Equivalencies",
    equivalentFormula: "High School % (60-70%) + Math/English Aptitude or SAT (30-40%)",
    colleges: [
      { collegeName: "College of Computing & Cyber Systems (كلية الحوسبة والنظم)", seatsNotes: "Cyber Security, AI, Software Engineering, Data Science", minThanawiya: "80.0% Scientific Floor", equivalentFloor: "Cutoff ~82.5% Composite" },
      { collegeName: "College of Engineering & Energy (كلية الهندسة والطاقة)", seatsNotes: "Renewable Energy, Robotics, Sustainable Infrastructure", minThanawiya: "80.0% Scientific Floor", equivalentFloor: "Cutoff ~83.0% Composite" },
      { collegeName: "College of Business & Digital Innovation (كلية إدارة وتطوير الأعمال)", seatsNotes: "Financial Technology, Supply Chain, Business Analytics", minThanawiya: "75.0% Floor", equivalentFloor: "Cutoff ~78.0% Composite" }
    ]
  },
  {
    type: "Private University (PUC Scholarship - بعثة داخلية)",
    name: "American University of the Middle East (AUM)",
    nameAr: "جامعة الشرق الأوسط الأمريكية",
    campusLocation: "Egaila Campus, Ahmadi Governorate (العقيلة)",
    scholarshipFunding: "100% Full Tuition Funded by Private Universities Council (PUC) + 200 KWD Allowance",
    admissionSystem: "PUC Scholarship Portal (puc.edu.kw) & Direct AUM Application",
    aptitudeExams: "AUM Internal English & Math Placement Tests or direct IELTS/TOEFL waiver",
    equivalentFormula: "Based on High School % alone (Scientific / Literary stream quotas)",
    colleges: [
      { collegeName: "College of Engineering & Technology (الهندسة والتكنولوجيا)", seatsNotes: "Mechanical, Industrial, Computer, Electrical, Civil, Chemical", minThanawiya: "70.0% Scientific Floor", equivalentFloor: "PUC Merit Allocation" },
      { collegeName: "College of Business Administration (كلية إدارة الأعمال)", seatsNotes: "Finance, Accounting, HRM, Marketing, MIS", minThanawiya: "60.0% Floor", equivalentFloor: "PUC Internal Scholarship" }
    ]
  },
  {
    type: "Private University (PUC Scholarship - بعثة داخلية)",
    name: "Gulf University for Science and Technology (GUST)",
    nameAr: "جامعة الخليج للعلوم والتكنولوجيا",
    campusLocation: "West Mishref Campus (غرب مشرف)",
    scholarshipFunding: "100% Full Tuition Funded by PUC + 200 KWD Monthly Allowance",
    admissionSystem: "PUC Scholarship Portal & GUST Direct Admissions",
    aptitudeExams: "GUST Placement Tests (Accuplacer) or IELTS 6.0+ waiver",
    equivalentFormula: "High School Percentage Floor set by PUC regulations",
    colleges: [
      { collegeName: "College of Arts & Sciences (Computer Science)", seatsNotes: "Computer Science, Cyber Security, English Literature, Mass Comm", minThanawiya: "70.0% Scientific (CS) | 60% Arts", equivalentFloor: "PUC Internal Scholarship" },
      { collegeName: "College of Business Administration (كلية إدارة الأعمال)", seatsNotes: "AACSB-Accredited Business Programs", minThanawiya: "60.0% Floor", equivalentFloor: "PUC Internal Scholarship" }
    ]
  }
];

// Kuwait MoHE Filter Configuration
const MOUSTAQBILI_FILTERS = {
  countries: [
    { value: "United States", label: "United States (أمريكا)", flagCode: "US" },
    { value: "United Kingdom", label: "United Kingdom (بريطانيا)", flagCode: "GB" },
    { value: "Ireland", label: "Republic of Ireland (أيرلندا)", flagCode: "IE" },
    { value: "Australia", label: "Australia (أستراليا)", flagCode: "AU" },
    { value: "Bahrain", label: "Bahrain / GCC (مملكة البحرين - AGU)", flagCode: "BH" },
    { value: "Malta", label: "Malta (جمهورية مالطا)", flagCode: "MT" }
  ],
  percentageRanges: [
    { value: "97.0+", label: "97.0% - 100% (Ireland & Bahrain Medicine Floor)", minPct: 97.0, minGpa: 3.85 },
    { value: "95.0-96.9", label: "95.0% - 96.9% (UK, Australia, US & Malta Medicine Floor)", minPct: 95.0, minGpa: 3.75 },
    { value: "90.0-94.9", label: "90.0% - 94.9% (US Engineering & CS Floor)", minPct: 90.0, minGpa: 3.50 },
    { value: "85.0-89.9", label: "85.0% - 89.9% (Computing, Data Science, AI)", minPct: 85.0, minGpa: 3.25 },
    { value: "80.0-84.9", label: "80.0% - 84.9% (Basic Sciences, Engineering Technology)", minPct: 80.0, minGpa: 3.00 }
  ],
  majors: [
    { value: "Medicine & Surgery (MBChB)", label: "Human Medicine & Surgery (الطب البشري والجراحة)", category: "Medical & Health" },
    { value: "Dentistry (BDS)", label: "Dentistry & Oral Surgery (طب وجراحة الأسنان)", category: "Medical & Health" },
    { value: "Cyber Security Engineering", label: "Cyber Security & AI (الأمن السيبراني والذكاء الاصطناعي)", category: "Engineering & Computing" },
    { value: "Computer Engineering", label: "Computer Engineering (هندسة الكمبيوتر)", category: "Engineering & Computing" }
  ]
};

// Global assignments
if (typeof window !== 'undefined') {
  window.KWD_CONVERSION_RATES = KWD_CONVERSION_RATES;
  window.MOUSTAQBILI_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOUSTAQBILI_FILTERS = MOUSTAQBILI_FILTERS;
  window.KUWAIT_LOCAL_UNIVERSITIES = KUWAIT_LOCAL_UNIVERSITIES;
  // Aliases for backwards compatibility
  window.MOHE_KUWAIT_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOHE_KUWAIT_FILTERS = MOUSTAQBILI_FILTERS;
}
