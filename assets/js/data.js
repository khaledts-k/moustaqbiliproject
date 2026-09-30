/**
 * moustaqbili | مستقبلي
 * The Official Digital Gateway for Kuwait Ministry of Higher Education (MoHE) Scholarships
 * بوابة البعثات والاعتماد الأكاديمي الموحدة بدولة الكويت
 *
 * Sourced directly from:
 * 1. Ministerial Decree No. 16/2025 (قرار وزاري رقم 16/2025 - قوائم مؤسسات التعليم العالي المتميزة بالمملكة المتحدة)
 * 2. Official Annual Foreign Scholarship Plan 2025/2026 (خطة بعثات وزارة التعليم العالي للعام الجامعي 2025/2026)
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
    monthlySalary: {
      standardAmount: "London: £2,150 / mo | Outside: £1,850 / mo",
      meritAmount: "London: £3,225 / mo | Outside: £2,775 / mo (+50% Merit Bonus)",
      kwdEquivalent: "~1,290 KWD / mo (London Merit) | ~860 KWD (Standard)",
      allowancesSummary: [
        "Monthly Living Allowance: £3,225 (London Merit) or £2,775 (Outside London)",
        "Statutory +50% Monthly Allowance per Article 12 of MoHE Bylaws & Decree 16/2025",
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
      otherExams: "UCAT (اختبار القدرات الطبية البريطاني): Mandatory score not less than 2,250 points."
    },

    deadlines: {
      earlyAction: "N/A",
      earlyDecision: "N/A",
      regularDecision: "October 15, 6:00 PM UK Time (Strict UCAS Medical Deadline)",
      mohePortalWindow: "Pre-registration opens in June; clinical allocations finalized in July/August.",
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
        standardizedRequirement: "UCAT (2250+) + UKVI IELTS 7.0 mandatory."
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
      explanation: "Per MoHE 2025/2026 Plan: Passing Foundation Year on first attempt is mandatory. UK government & GMC/GDC regulations strictly prohibit repeating the medical foundation year."
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
    description: "Official clinical medicine track under Ministerial Decree 16/2025 and 2025/2026 Foreign Scholarship Plan. Covers 100% NHS hospital surcharges, GMC licensing, and +50% monthly living allowance.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Page 3) & Ministerial Decree No. 16/2025 (Pages 12-14)."
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

    monthlySalary: {
      standardAmount: "€2,200 / month",
      meritAmount: "€3,300 / month (+50% Merit Bonus)",
      kwdEquivalent: "~1,110 KWD / mo (Merit) | ~740 KWD (Standard)",
      allowancesSummary: [
        "Monthly Living Allowance: €3,300 (Merit Tier)",
        "Statutory +50% Monthly Allowance per Article 12 of MoHE Bylaws",
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
      mohePortalWindow: "June 1 (Annual Irish Medical Committee Allocation)",
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
    description: "Official medicine track under 2025/2026 Foreign Scholarship Plan (Page 9). Requires min 97.0% (GPA 3.85) in Thanawiya, personal essay, CV, and 2 academic recommendations.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Page 9) & Dublin Cultural Office Guidelines."
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

    monthlySalary: {
      standardAmount: "$2,550 / month",
      meritAmount: "$3,825 / month (+50% Merit Bonus)",
      kwdEquivalent: "~1,180 KWD / mo (Merit) | ~785 KWD (Standard)",
      allowancesSummary: [
        "Monthly Living Allowance: $3,825 (Merit Tier)",
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
      mohePortalWindow: "Open Year-Round for Direct Merit Acceptance",
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
    description: "Official Cybersecurity & Computer Engineering track under 2025/2026 Foreign Scholarship Plan (Page 1). Requires min 90.0% (GPA 3.50) for Engineering and 85.0% (GPA 3.25) for CS.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Page 1) & Washington Cultural Division Regulations."
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

    monthlySalary: {
      standardAmount: "AUD $2,600 / month",
      meritAmount: "AUD $3,900 / month (+50% Merit Bonus)",
      kwdEquivalent: "~810 KWD / mo (Merit) | ~540 KWD (Standard)",
      allowancesSummary: [
        "Monthly Living Allowance: AUD $3,900 (Merit Tier)",
        "Statutory +50% Monthly Allowance per Article 12 of MoHE Bylaws",
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
      mohePortalWindow: "July Allocation Window",
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
      explanation: "Per MoHE 2025/2026 Plan (Pages 25-26): Students enter an intensive 1-year medical foundation pathway, achieving required benchmark (e.g. 9.35/10 at Western Sydney or 90% at Monash) to transition into clinical MBBS/MD."
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
    description: "Official Australian medical tracks under 2025/2026 Foreign Scholarship Plan (Pages 25-26). Details exact progression benchmarks for Monash, Western Sydney, Flinders, and Curtin universities.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Pages 25-26) & Canberra Cultural Office Directives."
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

    monthlySalary: {
      standardAmount: "BHD 650 / month",
      meritAmount: "N/A (GCC Quota Track)",
      kwdEquivalent: "~530 KWD / month",
      allowancesSummary: [
        "Monthly Living Allowance: BHD 650 / month",
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
      mohePortalWindow: "Summer Cycle: June 15 – July 10",
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
    description: "Official GCC direct medical seats under 2025/2026 Foreign Scholarship Plan (Page 37). Requires min 97.0% (GPA 3.85), 90%+ in sciences, and IELTS 5.5 - 6.5.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Page 37) & GCC Manama Cultural Attaché."
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

    monthlySalary: {
      standardAmount: "€2,200 / month",
      meritAmount: "N/A",
      kwdEquivalent: "~740 KWD / month",
      allowancesSummary: [
        "Monthly Living Allowance: €2,200 / month",
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
      mohePortalWindow: "Summer Cycle: June 15 – July 10",
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
    description: "Official Malta medical track under 2025/2026 Foreign Scholarship Plan (Page 36). Requires min 95.0% (GPA 3.75), student must be at least 18 years old, and passing the online interview.",
    sourceNote: "Kuwait MoHE Plan 2025/2026 (Page 36) & University of Malta Directives."
  }
];

// Kuwait MoHE Filter Configuration
const MOUSTAQBILI_FILTERS = {
  countries: [
    { value: "United States", label: "United States", flagCode: "US" },
    { value: "United Kingdom", label: "United Kingdom", flagCode: "GB" },
    { value: "Ireland", label: "Republic of Ireland", flagCode: "IE" },
    { value: "Australia", label: "Australia", flagCode: "AU" },
    { value: "Bahrain", label: "Bahrain", flagCode: "BH" },
    { value: "Malta", label: "Malta", flagCode: "MT" },
    { value: "Canada", label: "Canada", flagCode: "CA" },
    { value: "New Zealand", label: "New Zealand", flagCode: "NZ" }
  ],
  percentageRanges: [
    { value: "97.0+", label: "97.0% - 100%", minPct: 97.0, minGpa: 3.85 },
    { value: "95.0-96.9", label: "95.0% - 96.9%", minPct: 95.0, minGpa: 3.75 },
    { value: "90.0-94.9", label: "90.0% - 94.9%", minPct: 90.0, minGpa: 3.50 },
    { value: "85.0-89.9", label: "85.0% - 89.9%", minPct: 85.0, minGpa: 3.25 },
    { value: "80.0-84.9", label: "80.0% - 84.9%", minPct: 80.0, minGpa: 3.00 }
  ],
  majors: [
    { value: "Medicine & Surgery (MBChB)", label: "Human Medicine & Surgery", category: "Medical & Health" },
    { value: "Dentistry (BDS)", label: "Dentistry & Oral Surgery", category: "Medical & Health" },
    { value: "Pharmacy (MPharm)", label: "Pharmacy & Biopharmaceuticals", category: "Medical & Health" },
    { value: "Computer Science", label: "Computer Science, AI & Cyber Security", category: "Engineering & Computing" },
    { value: "Cyber Security Engineering", label: "Cyber Security Engineering", category: "Engineering & Computing" },
    { value: "Biomedical Engineering", label: "Biomedical Engineering", category: "Engineering & Computing" }
  ]
};

const KUWAIT_LOCAL_UNIVERSITIES = [
  {
    id: "kuwait-university",
    type: "Public University / جامعة حكومية",
    typeEn: "Public University",
    typeAr: "جامعة حكومية",
    name: "Kuwait University (KU)",
    nameAr: "جامعة الكويت",
    campusLocation: "Shadadiya Campus, Sabah Al-Salem University City",
    campusLocationAr: "مدينة صباح السالم الجامعية - الشدادية",
    scholarshipFunding: "100% Free Government Tuition + 200 KWD Monthly Social Allowance",
    scholarshipFundingAr: "تعليم حكومي مجاني 100% + مكافأة اجتماعية شهرياً 200 د.ك",
    admissionSystem: "Unified Kuwait University Admissions Portal (portal.ku.edu.kw)",
    admissionSystemAr: "البوابة المركزية لقبول جامعة الكويت (portal.ku.edu.kw)",
    aptitudeExams: "Mandatory KU Aptitude Exams (English, Math, Chemistry, Physics)",
    aptitudeExamsAr: "اختبارات القدرات الأكاديمية الإجبارية (إنجليزي، رياضيات، كيمياء، فيزياء)",
    equivalentFormula: "Equivalent Score = (Thanawiya % × 0.70) + (Aptitude Score × 0.30)",
    equivalentFormulaAr: "المعدل المكافئ = (نسبة الثانوية × 0.70) + (درجة القدرات × 0.30)",
    colleges: [
      { collegeName: "College of Medicine (كلية الطب)", minThanawiya: "85.0% Scientific", equivalentFloor: "Equated Min: 85.0%", equivalentFloorAr: "المعدل المكافئ: 85.0%", seatsNotes: "Direct entrance requires top competitive equivalent rank" },
      { collegeName: "College of Dentistry (كلية طب الأسنان)", minThanawiya: "85.0% Scientific", equivalentFloor: "Equated Min: 85.0%", equivalentFloorAr: "المعدل المكافئ: 85.0%", seatsNotes: "High competitive seats" },
      { collegeName: "College of Engineering & Petroleum (كلية الهندسة والبترول)", minThanawiya: "80.0% Scientific", equivalentFloor: "Equated Min: 78.0%", equivalentFloorAr: "المعدل المكافئ: 78.0%", seatsNotes: "Requires Math & Physics Aptitude" },
      { collegeName: "College of Allied Health Sciences (العلوم الطبية المساعدة)", minThanawiya: "80.0% Scientific", equivalentFloor: "Equated Min: 75.0%", equivalentFloorAr: "المعدل المكافئ: 75.0%", seatsNotes: "Radiography, PT, MLT" },
      { collegeName: "College of Science (كلية العلوم)", minThanawiya: "70.0% Scientific", equivalentFloor: "Min: 70.0%", equivalentFloorAr: "الحد أدنى: 70.0%", seatsNotes: "CS, Chemistry, Physics, Biology" }
    ]
  },
  {
    id: "aasu",
    type: "Public University / جامعة حكومية",
    typeEn: "Public University",
    typeAr: "جامعة حكومية",
    name: "Abdullah Al-Salem University (AASU)",
    nameAr: "جامعة عبد الله السالم",
    campusLocation: "Khaldiya / Adailiya Campuses",
    campusLocationAr: "حرم الخالدية والعديلية",
    scholarshipFunding: "100% Free Government Tuition + 200 KWD Monthly Social Allowance",
    scholarshipFundingAr: "تعليم حكومي مجاني 100% + مكافأة اجتماعية شهرياً 200 د.ك",
    admissionSystem: "AASU Direct Admission System (aasu.edu.kw)",
    admissionSystemAr: "نظام القبول المباشر بجامعة عبد الله السالم (aasu.edu.kw)",
    aptitudeExams: "Standardized Aptitude & English Proficiency Benchmarks",
    aptitudeExamsAr: "اختبارات التقييم والقدرات واللغة الإنجليزية",
    equivalentFormula: "Weighted Composite Admission Score",
    equivalentFormulaAr: "معادلة المعدل المركب التنافسي",
    colleges: [
      { collegeName: "College of Computing & Cybernetics (كلية الحوسبة والأمن السيبراني)", minThanawiya: "80.0% Scientific", equivalentFloor: "Equated Min: 80.0%", equivalentFloorAr: "المعدل المكافئ: 80.0%", seatsNotes: "AI, Cyber Security, Software Engineering" },
      { collegeName: "College of Engineering & Applied Sciences (كلية الهندسة والعلوم التطبيقية)", minThanawiya: "80.0% Scientific", equivalentFloor: "Equated Min: 78.0%", equivalentFloorAr: "المعدل المكافئ: 78.0%", seatsNotes: "Energy, Systems & Environmental Engineering" },
      { collegeName: "College of Business & Entrepreneurship (كلية الإدارة وريادة الأعمال)", minThanawiya: "75.0% Scientific/Literary", equivalentFloor: "Min: 75.0%", equivalentFloorAr: "الحد أدنى: 75.0%", seatsNotes: "FinTech, Supply Chain, Business Analytics" }
    ]
  },
  {
    id: "aum-gust-puc",
    type: "Private PUC Internal Scholarship / بعثات داخلية",
    typeEn: "PUC Scholarship",
    typeAr: "بعثة داخلية",
    name: "Private Universities Council (PUC Internal Scholarships)",
    nameAr: "مجلس الجامعات الخاصة (البعثات الداخلية)",
    campusLocation: "AUM (Egaila), GUST (Mishref), AUK (Salmiya), KCST (Doha)",
    campusLocationAr: "جامعة AUM (العقيلة)، GUST (مشرف)، AUK (السالمية)، KCST (الدوحة)",
    scholarshipFunding: "100% Government Tuition Sponsorship + 200 KWD Monthly Allowance",
    scholarshipFundingAr: "تغطية الرسوم الدراسية 100% من الحكومة + 200 د.ك مكافأة شهرية",
    admissionSystem: "PUC Central Internal Scholarship Portal (puc.edu.kw)",
    admissionSystemAr: "بوابة البعثات الداخلية بمجلس الجامعات الخاصة (puc.edu.kw)",
    aptitudeExams: "University Placement Test (Accuplacer / Math & English Placement)",
    aptitudeExamsAr: "اختبار تحديد المستوى الجامعي (اللغة الإنجليزية والرياضيات)",
    equivalentFormula: "Direct Thanawiya % Floor (Competitive Allocation)",
    equivalentFormulaAr: "النسبة الأدنى للتقديم التنافسي",
    colleges: [
      { collegeName: "Engineering & Technology (الهندسة والتكنولوجيا - AUM / KCST / ACK)", minThanawiya: "70.0% Scientific", equivalentFloor: "Floor: 70.0%", equivalentFloorAr: "الحد أدنى: 70.0%", seatsNotes: "Mechanical, Civil, Computer, Electrical Engineering" },
      { collegeName: "Business Administration & Finance (إدارة الأعمال والتمويل - GUST / AUK / AUM)", minThanawiya: "60.0% Scientific / 70% Literary", equivalentFloor: "Floor: 60-70%", equivalentFloorAr: "الحد أدنى: 60-70%", seatsNotes: "Accounting, Finance, Management, Marketing" },
      { collegeName: "Arts & Mass Communication (الآداب والإعلام - AUK / GUST)", minThanawiya: "65.0% Literary", equivalentFloor: "Floor: 65.0%", equivalentFloorAr: "الحد أدنى: 65.0%", seatsNotes: "Graphic Design, Media, International Relations" }
    ]
  }
];

// Global assignments for moustaqbili
if (typeof window !== 'undefined') {
  window.MOUSTAQBILI_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOUSTAQBILI_FILTERS = MOUSTAQBILI_FILTERS;
  window.KUWAIT_LOCAL_UNIVERSITIES = KUWAIT_LOCAL_UNIVERSITIES;
  // Aliases for backwards compatibility
  window.MOHE_KUWAIT_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOHE_KUWAIT_FILTERS = MOUSTAQBILI_FILTERS;
  window.MOHE_PROGRAMS = MOUSTAQBILI_PROGRAMS;
  window.MOHE_FILTERS = MOUSTAQBILI_FILTERS;
}

