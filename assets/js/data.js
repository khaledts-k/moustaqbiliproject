/**
 * moustaqbili | مستقبلي
 * The Official Digital Gateway for Kuwait Ministry of Higher Education (MoHE) Scholarships
 * بوابة البعثات والاعتماد الأكاديمي الموحدة بدولة الكويت
 *
 * Sourced directly from:
 * 1. Ministerial Decree No. 16/2025 (قرار وزاري رقم 16/2025 - قوائم مؤسسات التعليم العالي المتميزة بالمملكة المتحدة)
 * 2. Foreign Scholarship Plan 2026/2027 (خطة البعثات الخارجية 2026/2027): https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf
 * 3. Monthly allowance tables (regular + merit), mohe.edu.kw e-services, checked 2026-10-11
 * 4. Scholarships regulation, Ministerial Decree 197/2025 (merit +50%: Art. 25)
 */

const MOUSTAQBILI_PROGRAMS = [
  // =========================================================================
  // 1. UNITED KINGDOM - HUMAN MEDICINE (MBChB / MBBS) [Merit & Major 2025]
  // =========================================================================
  {
    id: "uk-medicine-2025",
    title: "Human Medicine & Surgery (MBChB / MBBS)",
    titleAr: "الطب البشري والجراحة العامة",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Decree 16/2025 - Clinical & Health Merit (جامعات التميز - قرار وزاري 16/2025)",
    country: "United Kingdom",
    countryAr: "المملكة المتحدة",
    flagCode: "GB",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBChB)", "Clinical Medicine", "Anatomy & Physiology"],
    
    // Financial Stipend
    verifiedAllowances: 2, // monthly amount + merit uplift lines are checked against the 2026/2027 tables
    stipend: { currency: "GBP", variants: [{ key: "all", standard: 2850, merit: 4275 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: £2,850 (merit students: £4,275)",
        "Merit students receive an extra 50% each month after the preparatory stage (Decree 197/2025, Art. 25)",
        "Full Clinical NHS Hospital Placement Fees Paid Directly by MoHE",
        "Annual Medical Equipment & Stethoscope Subsidy: £850 / year",
        "Annual Round-trip Flight Tickets to Kuwait",
        "Full UK NHS Healthcare Surcharge (IHS) Reimbursed by Cultural Office"
      ]
    },

    // Strict 2025 MoHE Requirements from PDF
    necessaryExams: {
      satActStatus: "Not Applicable for UK medical faculties.",
      satTargetScore: "N/A",
      actTargetScore: "N/A",
      englishProficiency: "Foundation: IELTS Academic overall 7.0 (no band below 6.5) | Degree entry: IELTS 7.0 (no band below 7.0).",
      ukviIeltsRequired: true,
      ukviIeltsNote: "MANDATORY OFFICIAL RULE: 'على الطلبة الحصول على UKVI ايلتز أكاديمي لجميع التخصصات في المملكة المتحدة'. Standard IELTS is NOT accepted for Foundation year visa issuance.",
      otherExams: "UCAT: total score of at least 1,650 (Plan 2026/2027)."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "October 15, 6:00 PM UK Time (Strict UCAS Medical Deadline)",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "Annual Strict UCAS Quota Cycle (October 15 submission)"
    },

    personalStatementReqs: {
      platform: "UCAS Hub",
      wordCount: "4,000 characters / 47 lines max",
      supplementalEssays: "Multiple Mini Interviews (MMI) or Panel Interviews assessing NHS values and ethics.",
      moheLetter: "Ministry Medical Board pledge and undertaking."
    },

    // 2025 PDF Exact Rules for School Types
    schoolGradSplit: {
      publicSchool: {
        minScore: "95.0% Minimum (GPA 3.75)",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Must achieve 90.0%+ in all science subjects (Chemistry, Biology, Physics, Math). Attendance in Foundation year must be at least 90%."
      },
      usDiploma: {
        minScore: "3.75 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "Must complete science courses (Biology, Chemistry, Mathematics) in Grade 11 or Grade 12 with grade not less than 'A-'.",
        standardizedRequirement: "UCAT 1,650+ and UKVI IELTS 7.0 (no band below 6.5) mandatory."
      },
      ukSystem: {
        minScore: "3 Science subjects at AS-Level or A-Level",
        igcseReqs: "Minimum 8 IGCSEs with grade 'A' in Sciences and Math.",
        aLevelSubjects: "AS-Level: Biology, Chemistry, Math with not less than 'A' in Biology and Chemistry, and not less than 'B' in Mathematics. A-Level: A*AA or AAA."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry (كيمياء)", minGrade: "Grade 'A' (Minimum 90% in Thanawiya / A in AS/A-Level / A- in US)" },
      { subject: "Biology (أحياء)", minGrade: "Grade 'A' (Minimum 90% in Thanawiya / A in AS/A-Level / A- in US)" },
      { subject: "Mathematics (رياضيات)", minGrade: "Grade 'B' (Minimum 90% in Thanawiya / B in AS/A-Level / A- in US)" }
    ],

    pathway: {
      entryType: "Direct Entry for A-Level grads | Medical Foundation Year required for Thanawiya",
      foundationNeeded: true,
      explanation: "Per the MoHE plan: Passing Foundation Year on first attempt is mandatory. UK government & GMC/GDC regulations strictly prohibit repeating the medical foundation year."
    },

    visaRequirements: {
      visaType: "UK Student Visa (Subclass Tier 4)",
      keyDocuments: [
        "Confirmation of Acceptance for Studies (CAS) from UK university",
        "Kuwait MoHE Financial Guarantee Letter covering 100% fees and stipend",
        "Tuberculosis (TB) Screening Certificate from UKVI-approved clinic in Kuwait",
        "UKVI Academic IELTS Score Certificate",
        "Biometric Residence Permit (BRP) appointment confirmation"
      ]
    },

    duration: "5-6 Years",
    culturalOffice: "Kuwait Cultural Attaché - London",
    // Verified UK Merit Clinical & Health Universities from Ministerial Decree 16/2025
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
    ],
    deadline: "October 15 (Annual Strict UCAS / MoHE Clinical Deadline)",
    description: "Official clinical medicine track under Ministerial Decree 16/2025 and 2026/2027 Foreign Scholarship Plan. Covers 100% NHS hospital surcharges, GMC licensing, and +50% monthly living allowance.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
  },

  // =========================================================================
  // 2. REPUBLIC OF IRELAND - MEDICINE & SURGERY (RCSI, TCD, UCD, UCC, Galway)
  // =========================================================================
  {
    id: "ire-medicine-2025",
    title: "Medicine & Surgery (MB BCh BAO)",
    titleAr: "الطب البشري والجراحة العامة - جمهورية أيرلندا",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Specialized Clinical Accreditation (الجامعات المتميزة بأيرلندا)",
    country: "Ireland",
    countryAr: "جمهورية أيرلندا",
    flagCode: "IE",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MB BCh BAO)", "Clinical Medicine"],

    verifiedAllowances: 2, // monthly amount + merit uplift lines are checked against the 2026/2027 tables
    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: 5175 }] },

    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: €3,450 (merit students: €5,175)",
        "Merit students receive an extra 50% each month after the preparatory stage (Decree 197/2025, Art. 25)",
        "Pre-registration Clinical Rotations Covered by MoHE",
        "Annual Flight Tickets to Kuwait",
        "Private Irish Medical Insurance Full Policy"
      ]
    },

    necessaryExams: {
      satActStatus: "Not required for Irish medical schools.",
      satTargetScore: "N/A",
      actTargetScore: "N/A",
      englishProficiency: "IELTS Academic 6.5 with no band below 6.5.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "Standard Academic IELTS is fully accepted for Irish Student Visas.",
      otherExams: "Interview + Personal Statement detailing reasons for selecting medicine + Curriculum Vitae (CV) + 2 Academic Letters of Recommendation (كتب تزكية أكاديمية عدد 2)."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "February 1 (Direct International / CAO deadline)",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "Summer Cycle: June 15 – July 10"
    },

    personalStatementReqs: {
      platform: "Direct Institutional Portals (RCSI / Trinity / UCD)",
      wordCount: "Personal Statement detailing reasons for selecting medicine + CV",
      supplementalEssays: "Interview with Irish selection board assessing bedside manner and ethics.",
      moheLetter: "Ministry health undertaking."
    },

    // 2025 PDF Exact Rules (Page 9)
    schoolGradSplit: {
      publicSchool: {
        minScore: "97.0% Minimum (GPA 3.85)",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Must achieve 90.0%+ in all science subjects in Thanawiya. Accepted on competitive basis after passing Foundation Year."
      },
      usDiploma: {
        minScore: "3.85 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "Must pass 3 Science subjects (Chemistry, Biology, Physics/Math) with honors.",
        standardizedRequirement: "IELTS 6.5 + Personal Essay + 2 Recommendation Letters."
      },
      ukSystem: {
        minScore: "AS-Level: Minimum (ABB) in 3 subjects | RCSI A-Level: Minimum (ABB)",
        igcseReqs: "8 IGCSEs with grade 'A' in Sciences.",
        aLevelSubjects: "Must include Chemistry, plus two from (Biology, Physics, Mathematics)."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'A' in AS-Level" },
      { subject: "Biology / Physics (أحياء / فيزياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
      { subject: "Mathematics (رياضيات)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" }
    ],

    pathway: {
      entryType: "Direct Entry for qualifying A-Levels | Foundation Year for Thanawiya",
      foundationNeeded: true,
      explanation: "Students are accepted on competitive basis after passing the Foundation Year. RCSI accepts direct entry with A-Levels (ABB)."
    },

    visaRequirements: {
      visaType: "Irish Study Visa (Non-EEA Student Visa)",
      keyDocuments: [
        "Unconditional Offer Letter from accredited Irish medical faculty",
        "Kuwait MoHE Financial Guarantee Letter",
        "Police clearance and medical check",
        "Proof of private health insurance"
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
    deadline: "June 1 (Irish Medical Allocation)",
    description: "Official medicine track under 2026/2027 Foreign Scholarship Plan. Requires min 97.0% (GPA 3.85) in Thanawiya, personal essay, CV, and 2 academic recommendations.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
  },

  // =========================================================================
  // 3. UNITED STATES - CYBERSECURITY & COMPUTER ENGINEERING (2025 Plan)
  // =========================================================================
  {
    id: "us-engineering-cs-2025",
    title: "Cyber Security, Computer Engineering & AI",
    titleAr: "هندسة الأمن السيبراني وهندسة الكمبيوتر والذكاء الاصطناعي",
    track: "Merit Scholarship Track (بعثات التميز)",
    isMerit: true,
    meritTier: "Tier 1 - Top 20 Global NBAQ Merit",
    country: "United States",
    countryAr: "الولايات المتحدة الأمريكية",
    flagCode: "US",
    category: "Engineering & Computing",
    majors: ["Cyber Security Engineering", "Computer Engineering", "Computer Science", "Artificial Intelligence"],

    stipend: { currency: "USD", variants: [{ key: "all", standard: 3900, merit: 5850 }] },

    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: $3,900 (merit students: $5,850)",
        "Annual Book & Equipment Allowance: $2,000 / year",
        "Annual Technology Subsidy: $1,200 (One-time)",
        "Annual Flights Home to Kuwait",
        "100% University Direct Tuition Paid by Cultural Bureau"
      ]
    },

    necessaryExams: {
      satActStatus: "Recommended / Target SAT 1400+ or ACT 31+ for Merit Top 20 universities.",
      satTargetScore: "1400 - 1550 (Math 750+)",
      actTargetScore: "31 - 35",
      englishProficiency: "TOEFL iBT 90+ (sub-scores 22+) or IELTS Academic 7.0+.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "Standard Academic IELTS or TOEFL iBT accepted for US F-1 student visas.",
      otherExams: "AP Computer Science / AP Calculus recommended."
    },

    deadlines: {
      earlyAction: "November 1 / November 15 (Non-binding early decision)",
      earlyDecision: "November 1 (Binding commitment)",
      regularDecision: "January 1 – January 15",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "Summer Cycle: June 15 – July 10"
    },

    personalStatementReqs: {
      platform: "Common Application & Institutional Portals",
      wordCount: "Common App Essay: 250 - 650 Words + Supplemental Essays (150-250 words)",
      supplementalEssays: "Short essays on academic motivation, diversity, and impact.",
      moheLetter: "Ministry student registration form."
    },

    // 2025 PDF Exact Rules (Page 1)
    schoolGradSplit: {
      publicSchool: {
        minScore: "90.0% Minimum (GPA 3.50) for Engineering | 85.0% (GPA 3.25) for CS",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Admission in US universities is strictly for the First Semester (Fall) of each academic year."
      },
      usDiploma: {
        minScore: "3.50 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "4 years Mathematics (Pre-Calculus/Calculus) and 3 years Laboratory Sciences.",
        standardizedRequirement: "SAT 1350+ recommended for Merit status."
      },
      ukSystem: {
        minScore: "3 A-Levels with grades A*AA or AAA",
        igcseReqs: "8 IGCSEs with grade 'A' or 'B' in Math, Physics, and English.",
        aLevelSubjects: "A-Level Mathematics (Mandatory), Physics or Computer Science."
      }
    },

    courseSubjectFloors: [
      { subject: "Advanced Mathematics / Calculus", minGrade: "Grade 'A' (Minimum 88% in Thanawiya)" },
      { subject: "Physics / Computing", minGrade: "Grade 'B+' (Minimum 85% in Thanawiya)" },
      { subject: "English Language", minGrade: "Grade 'B' (TOEFL 90 / IELTS 7.0)" }
    ],

    pathway: {
      entryType: "Direct Entry (Year 1 Undergraduate)",
      foundationNeeded: false,
      explanation: "Direct 4-year Bachelor of Science degree. Admission is for the Fall semester only."
    },

    visaRequirements: {
      visaType: "U.S. F-1 Academic Student Visa",
      keyDocuments: [
        "Form I-20 issued by accredited US university",
        "Kuwait MoHE Financial Guarantee Letter",
        "SEVIS I-901 Receipt ($350)",
        "Form DS-160 Confirmation",
        "U.S. Embassy Kuwait Interview Appointment"
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
    deadline: "Open Year-Round for Direct Merit Acceptance",
    description: "Official Cybersecurity & Computer Engineering track under 2026/2027 Foreign Scholarship Plan. Requires min 90.0% (GPA 3.50) for Engineering and 85.0% (GPA 3.25) for CS.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
  },

  // =========================================================================
  // 4. AUSTRALIA - MEDICINE & DENTISTRY (Monash, Western Sydney, Flinders, Curtin)
  // =========================================================================
  {
    id: "aus-medicine-2025",
    title: "Medicine & Surgery (Monash / Western Sydney / Flinders / Curtin)",
    titleAr: "الطب البشري وطب وجراحة الأسنان - أستراليا",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: true,
    meritTier: "Group of Eight (Go8) & Clinical Accreditation",
    country: "Australia",
    countryAr: "أستراليا",
    flagCode: "AU",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBBS / BMedSci / MD)", "Dentistry (BDS)"],

    verifiedAllowances: 2, // monthly amount + merit uplift lines are checked against the 2026/2027 tables
    stipend: { currency: "AUD", variants: [{ key: "all", standard: 5850, merit: null }], meritNoteKey: "stipend_merit_unconfirmed" },

    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: A$5,850",
        "Merit students receive an extra 50% each month after the preparatory stage (Decree 197/2025, Art. 25)",
        "Full Clinical Equipment and Lab Placement Surcharges Covered",
        "Overseas Student Health Cover (OSHC) Full Policy",
        "Annual Flight Tickets to Kuwait"
      ]
    },

    necessaryExams: {
      satActStatus: "Not accepted for direct clinical medicine in Australia.",
      satTargetScore: "N/A",
      actTargetScore: "N/A",
      englishProficiency: "Foundation: IELTS 5.5 (no band below 5.5) | Clinical Entry: IELTS 7.0 (no band below 7.0 in all components) or TOEFL 100.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "Standard Academic IELTS or PTE Academic 65+ accepted for Australian Student Visa (Subclass 500).",
      otherExams: "ISAT (International Student Admissions Test) score of 165+ for Monash University, or Casper exam for Murdoch / Western Sydney."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "August 31 – September 30 (For February Semester 1 Intake)",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "August Cycle"
    },

    personalStatementReqs: {
      platform: "Direct Institutional Portals & State Admission Centers",
      wordCount: "Statement of Purpose: 500 Words",
      supplementalEssays: "Multiple Mini Interviews (MMI) via Zoom / in-person.",
      moheLetter: "Ministry health undertaking."
    },

    // 2025 PDF Exact Rules (Pages 25-26)
    schoolGradSplit: {
      publicSchool: {
        minScore: "95.0% Minimum (GPA 3.75)",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Western Sydney: Foundation grade 9.35/10 + IELTS 7.0 | Monash: Foundation grade 90%+ with 75%+ in English & Chem, ISAT 165+ | Flinders: Foundation grade 88%+ | Curtin: Foundation grade 75%+ with 50%+ in English & Chem."
      },
      usDiploma: {
        minScore: "3.75 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "AP Chemistry and AP Biology with scores of 4 or 5.",
        standardizedRequirement: "ISAT or Casper exam + IELTS 7.0."
      },
      ukSystem: {
        minScore: "3 A-Levels with grades AAA or A*AA",
        igcseReqs: "8 IGCSEs with grade 'A' in Chemistry, Biology, Math.",
        aLevelSubjects: "A-Level Chemistry (Mandatory), Biology (Mandatory), plus Math/Physics."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry (كيمياء)", minGrade: "Grade 'A' (Minimum 95.0% in Thanawiya / 75% in Monash Foundation)" },
      { subject: "Biology (أحياء)", minGrade: "Grade 'A' (Minimum 95.0% in Thanawiya)" },
      { subject: "English Language", minGrade: "IELTS 7.0 (no band below 7.0) / TOEFL 100" }
    ],

    pathway: {
      entryType: "Foundation Year (1 Year) followed by 5-6 Year Clinical Bachelor / MD",
      foundationNeeded: true,
      explanation: "Per the MoHE plan: Students enter an intensive 1-year medical foundation pathway, achieving required benchmark (e.g. 9.35/10 at Western Sydney or 90% at Monash) to transition into clinical MBBS/MD."
    },

    visaRequirements: {
      visaType: "Australian Student Visa (Subclass 500)",
      keyDocuments: [
        "Electronic Confirmation of Enrolment (eCoE) from Australian medical faculty",
        "Kuwait MoHE Financial Guarantee Letter",
        "Overseas Student Health Cover (OSHC) policy confirmation",
        "Genuine Student (GS) assessment statement"
      ]
    },

    duration: "6-8 Years (Foundation + Clinical Degree / MD)",
    culturalOffice: "Kuwait Cultural Office - Canberra",
    accreditedUniversities: [
      "Monash University (Clayton)",
      "Western Sydney University",
      "Flinders University (Adelaide)",
      "Curtin University (Perth)",
      "University of Melbourne",
      "University of Sydney"
    ],
    deadline: "August 31 (Annual Allocation Cycle)",
    description: "Official Australian medical tracks under 2026/2027 Foreign Scholarship Plan. Details exact progression benchmarks for Monash, Western Sydney, Flinders, and Curtin universities.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
  },

  // =========================================================================
  // 5. KINGDOM OF BAHRAIN - MEDICINE & SURGERY (AGU & RCSI Bahrain)
  // =========================================================================
  {
    id: "bh-medicine-2025",
    title: "Medicine & Surgery - Arabian Gulf University (AGU) & RCSI Bahrain",
    titleAr: "الطب البشري - جامعة الخليج العربي والكلية الملكية للجراحين (مملكة البحرين)",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: false,
    meritTier: "GCC Ministerial Direct Allocation (مقاعد مجلس التعاون)",
    country: "Bahrain",
    countryAr: "مملكة البحرين",
    flagCode: "BH",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medicine & Surgery (MB BCh BAO)"],

    stipend: { currency: "BHD", variants: [{ key: "all", standard: 1219, merit: null }] },

    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: BD 1,219",
        "100% Direct Tuition Fees Paid to GCC University",
        "Comprehensive Regional Health Coverage in Bahrain & Kuwait",
        "Travel Allowance & Study Books Surcharge",
        "Direct Hospital Rotations in Kuwait and Bahrain"
      ]
    },

    necessaryExams: {
      satActStatus: "Not required for AGU; SAT 1 accepted for US diploma grads.",
      satTargetScore: "N/A",
      actTargetScore: "N/A",
      englishProficiency: "AGU: IELTS 5.5 or TOEFL 475 | RCSI Bahrain: IELTS 6.5 (no band below 6.0).",
      ukviIeltsRequired: false,
      ukviIeltsNote: "Standard IELTS is accepted for Bahrain.",
      otherExams: "Kuwait University Chemistry & Biology Aptitude Mandatory + Personal Interview."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "June 25 (Annual GCC Quota Allocation)",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "Summer Allocation"
    },

    personalStatementReqs: {
      platform: "MoHE Kuwait GCC Portal & University Direct Forms",
      wordCount: "Personal Statement of Motivation",
      supplementalEssays: "Formal personal interview at MoHE or university.",
      moheLetter: "GCC scholarship undertaking."
    },

    // 2025 PDF Exact Rules (Page 37)
    schoolGradSplit: {
      publicSchool: {
        minScore: "97.0% Minimum (GPA 3.85)",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Must achieve 90.0%+ in all science subjects in Thanawiya. Duration of study is 6 to 7 years."
      },
      usDiploma: {
        minScore: "3.85 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "Must pass 3 Science subjects (Chemistry, Biology, Math/Physics).",
        standardizedRequirement: "SAT or ACT score report."
      },
      ukSystem: {
        minScore: "AGU AS-Level: Minimum (ABB) in 3 subjects | RCSI Bahrain A-Level: (BCC) or (BBB) or (ACC)",
        igcseReqs: "IGCSE grade 'C' in Math and English.",
        aLevelSubjects: "Must include Chemistry, Biology, and Physics/Math/Psychology."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in A-Level" },
      { subject: "Biology (أحياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in A-Level" },
      { subject: "Mathematics / Physics", minGrade: "Minimum 90.0% in Thanawiya" }
    ],

    pathway: {
      entryType: "Direct Entry (6-7 Years including Preparatory Year)",
      foundationNeeded: false,
      explanation: "Direct admission into the 6-year integrated medical doctor (MD) curriculum or 6-year MB BCh BAO at RCSI Bahrain."
    },

    visaRequirements: {
      visaType: "GCC Student Residence Visa (Bahrain)",
      keyDocuments: [
        "Kuwait Civil ID and Nationality Certificate",
        "Official Allocation Letter from Kuwait MoHE",
        "Medical Fitness Examination Report",
        "Valid Kuwaiti Passport"
      ]
    },

    duration: "6-7 Years",
    culturalOffice: "Kuwait Cultural Office - Manama",
    accreditedUniversities: [
      "Arabian Gulf University (AGU) - Manama",
      "RCSI Bahrain (Royal College of Surgeons in Ireland - Medical University of Bahrain)"
    ],
    deadline: "June 25 (Annual GCC Quota Allocation)",
    description: "Official GCC direct medical seats under 2026/2027 Foreign Scholarship Plan. Requires min 97.0% (GPA 3.85), 90%+ in sciences, and IELTS 5.5 - 6.5.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
  },

  // =========================================================================
  // 6. REPUBLIC OF MALTA - MEDICINE (Medical Foundation Program MFP)
  // =========================================================================
  {
    id: "malta-medicine-2025",
    title: "Medicine & Surgery - University of Malta (MFP Foundation)",
    titleAr: "الطب البشري - جمهورية مالطا (برنامج التأسيس الطبي)",
    track: "Medical Specializations Track (التخصصات الطبية)",
    isMerit: false,
    meritTier: "Specialized European Clinical Track",
    country: "Malta",
    countryAr: "جمهورية مالطا",
    flagCode: "MT",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medical Foundation Program (MFP)"],

    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: null }] },

    monthlySalary: {
      allowancesSummary: [
        "Monthly living allowance: €3,450",
        "100% Tuition Fees Paid by Kuwait Ministry of Higher Education",
        "European Health Insurance Card (EHIC) Coverage",
        "Annual Flight Tickets (Kuwait/Malta)"
      ]
    },

    necessaryExams: {
      satActStatus: "Not required.",
      satTargetScore: "N/A",
      actTargetScore: "N/A",
      englishProficiency: "IELTS Academic 5.5 (no band below 5.5) or TOEFL iBT 61 (minimum 17 in writing).",
      ukviIeltsRequired: false,
      ukviIeltsNote: "Standard Academic IELTS is accepted for Maltese student visa.",
      otherExams: "Passing the Online Personal Interview successfully (اجتياز المقابلة الشخصية عن بعد)."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "July 1 (Maltese Medical Committee Window)",
      mohePortalWindow: "Plan 2026/2027: general registration ran 14 June - 7 July 2026 (closed). Merit programme applications are open until 24 February 2027.",
      moheRegularIntake: "Summer Allocation"
    },

    personalStatementReqs: {
      platform: "University of Malta International Office",
      wordCount: "Statement of Purpose: 500 Words",
      supplementalEssays: "Online video interview with University of Malta medical faculty.",
      moheLetter: "Standard ministerial health pledge."
    },

    // 2025 PDF Exact Rules (Page 36)
    schoolGradSplit: {
      publicSchool: {
        minScore: "95.0% Minimum (GPA 3.75)",
        stream: "Scientific Stream Only (القسم العلمي فقط)",
        notes: "Must be at least 18 years old upon enrollment. Minimum 90.0% in both Biology and Chemistry."
      },
      usDiploma: {
        minScore: "3.75 Cumulative GPA on 4.0 Scale",
        coursePrereqs: "Must complete Biology and Chemistry courses with minimum grade 'B'.",
        standardizedRequirement: "IELTS 5.5 + Online Interview."
      },
      ukSystem: {
        minScore: "2 Science subjects at AS-Level (Biology & Chemistry) with not less than grade 'B'",
        igcseReqs: "8 IGCSEs with grade 'A' or 'B' in Sciences and Math.",
        aLevelSubjects: "AS-Level Biology and Chemistry."
      }
    },

    courseSubjectFloors: [
      { subject: "Chemistry (كيمياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
      { subject: "Biology (أحياء)", minGrade: "Minimum 90.0% in Thanawiya / Grade 'B' in AS-Level" },
      { subject: "English Language", minGrade: "IELTS 5.5 (no band below 5.5) / TOEFL 61" }
    ],

    pathway: {
      entryType: "1-Year Medical Foundation (MFP) + 5-Year MD Program",
      foundationNeeded: true,
      explanation: "Students enroll in the Medical Foundation Program (MFP) or Pre-Medical Commencement Program before entering the 5-year MD."
    },

    visaRequirements: {
      visaType: "Schengen Student Visa (Malta)",
      keyDocuments: [
        "Official Acceptance Letter into University of Malta MFP",
        "Kuwait MoHE Financial Guarantee Letter",
        "Medical Examination Clearance",
        "Valid Kuwaiti Passport"
      ]
    },

    duration: "1 Year Foundation + 5 Years MD",
    culturalOffice: "Kuwait Cultural Office - Paris (covers Malta) & Embassy in Valletta",
    accreditedUniversities: [
      "University of Malta (Msida Campus)",
      "Medical Foundation Programme (MFP) Centre"
    ],
    deadline: "July 1 (Maltese Medical Intake)",
    description: "Official Malta medical track under 2026/2027 Foreign Scholarship Plan. Requires min 95.0% (GPA 3.75), student must be at least 18 years old, and passing the online interview.",
    sourceNote: "MoHE Foreign Scholarship Plan 2026/2027 and allowance tables (mohe.edu.kw), checked 2026-10-11."
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

// Key rules of the Foreign Scholarship Plan 2026/2027 (shown on guidelines.html)
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
    "English: IELTS Academic 5.5 overall and in every band, or TOEFL 47, taken in Kuwait. Accepted students then have one calendar year to reach their university's required score.",
    "Medicine, dentistry, veterinary, pharmacy and engineering applicants must sit the Kuwait University aptitude tests (Qudrat); an equivalent average is used.",
    "United Kingdom: UKVI IELTS is required. Failing the foundation year or the interview ends a medicine, dentistry or pharmacy placement, and the foundation year cannot be repeated.",
    "UK medicine: UCAT 1,650 or more, and IELTS 7.0 (no band below 6.5) for the foundation year.",
    "Merit (excellence) programme: at least 90% for all majors and 95% for medicine, dentistry and pharmacy. Merit students receive an extra 50% monthly allowance after the preparatory stage (Decree 197/2025, Art. 25). Merit status is lost if the GPA falls below 2.67 (below 60% in the UK system)."
  ],
  rulesAr: [
    "العمر من 16 إلى 23 سنة، وشهادة ثانوية من العام 2024/2025 أو 2025/2026.",
    "اللغة الإنجليزية: IELTS أكاديمي 5.5 كمعدل عام وفي كل قسم، أو TOEFL بدرجة 47، يُجرى داخل الكويت. ويُمنح المقبول سنة ميلادية واحدة لتحقيق الدرجة المطلوبة من الجامعة.",
    "يجب على المتقدمين لتخصصات الطب وطب الأسنان والطب البيطري والصيدلة والهندسة أداء اختبارات القدرات بجامعة الكويت، ويُعتمد المعدل المكافئ.",
    "المملكة المتحدة: يُشترط UKVI IELTS. وعدم اجتياز السنة التأسيسية أو المقابلة يُنهي الإيفاد لتخصصات الطب وطب الأسنان والصيدلة، ولا يجوز إعادة السنة التأسيسية.",
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
    colleges: [
      { collegeName: "Medicine", collegeNameAr: "الطب", minThanawiya: "94.73%", seatsNotes: "Equivalent average (high school 75% + Qudrat 25%)", seatsNotesAr: "المعدل المكافئ (الثانوية 75% + القدرات 25%)" },
      { collegeName: "Dentistry", collegeNameAr: "طب الأسنان", minThanawiya: "94.42%", seatsNotes: "Equivalent average", seatsNotesAr: "المعدل المكافئ" },
      { collegeName: "Pharmacy", collegeNameAr: "الصيدلة", minThanawiya: "92.56%", seatsNotes: "Equivalent average", seatsNotesAr: "المعدل المكافئ" },
      { collegeName: "Allied Health Sciences", collegeNameAr: "العلوم الطبية المساعدة", minThanawiya: "86.77 - 91.31%", seatsNotes: "Physiotherapy 91.31, Occupational Therapy 90.6, Medical Lab 88.71, Nursing 88.49", seatsNotesAr: "العلاج الطبيعي 91.31، العلاج الوظيفي 90.6، المختبرات الطبية 88.71، التمريض 88.49" },
      { collegeName: "Public Health", collegeNameAr: "الصحة العامة", minThanawiya: "83.68%", seatsNotes: "Equivalent average", seatsNotesAr: "المعدل المكافئ" },
      { collegeName: "Engineering & Petroleum", collegeNameAr: "الهندسة والبترول", minThanawiya: "65.38 - 76.56%", seatsNotes: "Computer 76.56, Petroleum 73.26, Civil 71.93, Electrical 71.19, Industrial 65.38", seatsNotesAr: "الكمبيوتر 76.56، البترول 73.26، المدنية 71.93، الكهربائية 71.19، الصناعية 65.38" },
      { collegeName: "Science", collegeNameAr: "العلوم", minThanawiya: "70 - 95.6%", seatsNotes: "High-school %: Microbiology 95.6, Cybersecurity 90.65, Computer Science 83.06", seatsNotesAr: "نسبة الثانوية: الأحياء الدقيقة 95.6، الأمن السيبراني 90.65، علوم الكمبيوتر 83.06" },
      { collegeName: "Law", collegeNameAr: "الحقوق", minThanawiya: "85.76%", seatsNotes: "No aptitude test required", seatsNotesAr: "لا تشترط اختبارات القدرات" },
      { collegeName: "Life Sciences", collegeNameAr: "علوم الحياة", minThanawiya: "62.78 - 84.12%", seatsNotes: "Equivalent average", seatsNotesAr: "المعدل المكافئ" },
      { collegeName: "Business Administration", collegeNameAr: "العلوم الإدارية", minThanawiya: "56.91 - 73.35%", seatsNotes: "Accounting 73.35 (science) / 69 (arts)", seatsNotesAr: "المحاسبة 73.35 (علمي) / 69 (أدبي)" }
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
    colleges: [
      { collegeName: "Computing & Systems", collegeNameAr: "الحوسبة والنظم", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", seatsNotes: "AI, cyber security, software engineering", seatsNotesAr: "الذكاء الاصطناعي، الأمن السيبراني، هندسة البرمجيات" },
      { collegeName: "Engineering & Energy", collegeNameAr: "الهندسة والطاقة", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", seatsNotes: "Energy, systems and environmental engineering", seatsNotesAr: "هندسة الطاقة والنظم والبيئة" },
      { collegeName: "Business & Entrepreneurship", collegeNameAr: "الأعمال وريادة الأعمال", minThanawiya: "Not published", minThanawiyaAr: "غير منشور", flag: "unconfirmed", seatsNotes: "FinTech, supply chain, business analytics", seatsNotesAr: "التكنولوجيا المالية، سلاسل الإمداد، تحليلات الأعمال" }
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
    colleges: [
      { collegeName: "Engineering", collegeNameAr: "الهندسة", minThanawiya: "90%", seatsNotes: "Systems and computer engineering: 85%", seatsNotesAr: "هندسة النظم والكمبيوتر: 85%" },
      { collegeName: "Law", collegeNameAr: "الحقوق", minThanawiya: "90%", seatsNotes: "", seatsNotesAr: "" },
      { collegeName: "Other bachelor's programmes", collegeNameAr: "برامج البكالوريوس الأخرى", minThanawiya: "78% science / 80% arts", minThanawiyaAr: "78% علمي / 80% أدبي", seatsNotes: "Business, IT, media, design and more", seatsNotesAr: "إدارة الأعمال، تقنية المعلومات، الإعلام، التصميم وغيرها" },
      { collegeName: "Diploma", collegeNameAr: "الدبلوم", minThanawiya: "70%", seatsNotes: "", seatsNotesAr: "" }
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
