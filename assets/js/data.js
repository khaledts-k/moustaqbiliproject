/**
 * moustaqbili | مستقبلي
 * Scholarship programs, monthly allowances, filters and reference data.
 * Text is written in plain language. Arabic text for each program is in data-ar.js.
 *
 * Sources:
 * 1. Foreign Scholarship Plan 2026/2027 (خطة البعثات الخارجية 2026/2027): https://www.mohe.edu.kw/site/assets/images/Uploads/20251119135614.pdf
 * 2. Monthly allowance tables (regular + merit), mohe.edu.kw e-services, checked 2026-10-13
 * 3. Scholarships regulation, Ministerial Decree 197/2025 (merit +50%: Art. 25)
 * 4. Merit university lists (NBAQ): UK Decree 16/2025, US Decree 15/2025, Ireland Decree 22/2025, Australia Decision 60/2025
 * 5. University and government pages (UCAS, UCAT, GOV.UK, Irish Immigration, US State Dept / ICE,
 *    Monash, Western Sydney, Curtin, RCSI Dublin and Bahrain, AGU, University of Malta), checked 2026-10-13
 *
 * verifiedFields lists the details checked against those sources on 2026-10-13. Every other
 * detail shown in the "What you need" window carries a "Not checked yet" label.
 * Field keys: minScore, stream, publicNotes, usDiploma, ukSystem, floors, english, ukvi, otherExams,
 * sat, platform, wordCount, supplemental, mohe, ea, ed, rd, pathway, visaType, visaDocs, universities.
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
    levels: ["bachelor", "medical", "foundation"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "United Kingdom",
    countryAr: "المملكة المتحدة",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBChB)", "Clinical Medicine", "Anatomy & Physiology"],
    planMajors: ["medicine"],
    verifiedFields: ["minScore", "stream", "english", "ukvi", "otherExams", "platform", "wordCount", "mohe", "rd", "visaType", "visaDocs", "universities"],

    verifiedAllowances: 3,
    stipend: { currency: "GBP", variants: [{ key: "all", standard: 2850, merit: 4275 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: £2,850 (merit students: £4,275).",
        MERIT_LINE_EN,
        "Extra allowances in the Ministry's 2026/2027 table: books £690, equipment £1,285, clothing £495, clinical training £750.",
        "Hospital training fees are paid by the Ministry.",
        "A return flight to Kuwait each year.",
        "The UK health surcharge (IHS) is paid back by the cultural office."
      ]
    },

    necessaryExams: {
      satActStatus: null,
      englishProficiency: "Foundation year: IELTS 7.0 overall, at least 6.5 in each part (the Ministry's rule). Starting the degree directly: set by each university.",
      ukviIeltsRequired: true,
      ukviIeltsNote: "The Ministry requires the UKVI version of IELTS for the UK. UK law also requires an approved English test (such as UKVI IELTS) for a foundation year.",
      otherExams: "UCAT (the UK medical admissions test): a total of at least 1,650 out of 2,700 (the Ministry's rule). In 2026 the average score was 1,918."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "UCAS deadline for medicine: 15 October 2026, 6:00 pm UK time (now passed). Most other UK courses: 13 January 2027, 6:00 pm.",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "UCAS (the UK application website)",
      wordCount: "Three questions answered in separate boxes: up to 4,000 characters in total (spaces included), at least 350 characters per answer.",
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
      visaType: "UK Student visa (fee from outside the UK: £558)",
      keyDocuments: [
        "CAS number from your UK university (it confirms your place)",
        "Financial guarantee letter from the Ministry (your sponsor's consent)",
        "UKVI IELTS result (needed for a foundation year)",
        "Written consent from both parents if you are under 18",
        "The UK now gives you a digital visa (eVisa) instead of a residence card. Kuwaitis do not need a TB test."
      ]
    },

    // UK merit universities for medicine (Clinical & Health list), Ministerial Decree 16/2025
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
  // 2. Ireland - Medicine (not on Ireland's merit list: Decree 22/2025)
  // =========================================================================
  {
    id: "ire-medicine-2025",
    title: "Medicine (MB BCh BAO)",
    titleAr: "الطب البشري والجراحة - أيرلندا",
    isMerit: false,
    levels: ["bachelor", "medical", "foundation"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "Ireland",
    countryAr: "أيرلندا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MB BCh BAO)", "Clinical Medicine"],
    planMajors: ["medicine"],
    verifiedFields: ["minScore", "stream", "usDiploma", "ukSystem", "english", "ukvi", "otherExams", "mohe", "rd", "visaType", "visaDocs"],

    verifiedAllowances: 2,
    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: null }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: €3,450. Ireland's merit list (Decree 22/2025) does not include medicine, so the merit amount does not apply.",
        "Extra allowances in the Ministry's 2026/2027 table: books €690, equipment €1,285, clothing €495, clinical training €900.",
        "Hospital training is paid by the Ministry.",
        "A return flight to Kuwait each year.",
        "Private health insurance in Ireland."
      ]
    },

    necessaryExams: {
      satActStatus: null,
      englishProficiency: "RCSI: IELTS 6.5 overall, no part below 6.0, in one sitting. Other universities set their own score.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS Academic is accepted for Ireland.",
      otherExams: "RCSI: privately funded non-EU applicants sit the Casper test (next sitting 17 January 2027). It is not clear whether Ministry-sponsored students must. {{unconfirmed}}"
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "RCSI (non-EU applicants): 1 November 2026 - 15 January 2027. Through CAO (the Irish application system): 1 February 2027, 5:00 pm.",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "Each university's own website (RCSI, Trinity, UCD) or CAO",
      wordCount: "Depends on the university.",
      supplementalEssays: "Some universities interview applicants; RCSI's page does not mention one."
    },

    schoolGradSplit: {
      publicSchool: {
        minScore: "97% (GPA 3.85)",
        stream: "Science stream only",
        notes: "At least 90% in science subjects. Places are competitive and depend on passing the foundation year."
      },
      usDiploma: {
        minScore: "RCSI: GPA 3.5 out of 4.0",
        coursePrereqs: "RCSI 6-year course: GPA 3.5, with 3.0 in biology, chemistry, and physics or math. 5-year course: AP Chemistry, AP Biology and a third AP, with scores of 5, 5 and 4."
      },
      ukSystem: {
        minScore: "RCSI: AAB at A-Level",
        aLevelSubjects: "Chemistry, plus biology or physics, plus one of biology, physics, math or psychology. Also 6 GCSEs/IGCSEs with English and math at grade 4 (C)."
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
      visaType: "Irish long-stay study visa (D visa), applied for through the Irish visa office in Abu Dhabi",
      keyDocuments: [
        "Acceptance letter from the university (full-time course, with the fees stated)",
        "Proof you can access at least €10,000 (for example the Ministry's financial guarantee letter)",
        "Passport valid for at least 12 months",
        "A letter explaining why you want to study in Ireland",
        "Private medical insurance (needed when you register)"
      ]
    },

    // Not on the merit list for medicine; check each university's approval on the NBAQ search
    accreditedUniversities: [
      "Royal College of Surgeons in Ireland (RCSI), Dublin",
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University College Cork (UCC)",
      "University of Galway"
    ]
  },

  // =========================================================================
  // 3. United States - Cyber Security, Computer Engineering & Computer Science
  // =========================================================================
  {
    id: "us-engineering-cs-2025",
    title: "Cyber Security, Computer Engineering & Computer Science",
    titleAr: "الأمن السيبراني وهندسة الحاسوب وعلوم الحاسوب",
    isMerit: true,
    levels: ["bachelor"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "United States",
    countryAr: "الولايات المتحدة",
    category: "Engineering & Computing",
    majors: ["Cyber Security Engineering", "Computer Engineering", "Computer Science"],
    planMajors: ["computer-engineering", "cyber-security-engineering", "computer-science"],
    verifiedFields: ["minScore", "stream", "mohe", "platform", "visaType", "visaDocs", "universities", "pathway"],

    verifiedAllowances: 3,
    stipend: { currency: "USD", variants: [{ key: "all", standard: 3900, merit: 5850 }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: $3,900 (merit students: $5,850).",
        MERIT_LINE_EN,
        "Extra allowances in the Ministry's 2026/2027 table: books $1,815, equipment $1,285, clothing $1,030, clinical training $950.",
        "A return flight to Kuwait each year.",
        "Tuition is paid directly by the cultural office."
      ]
    },

    necessaryExams: {
      satActStatus: "Not required by every university, but top universities expect SAT 1400+ or ACT 31+.",
      englishProficiency: "TOEFL iBT 90+ (at least 22 in each part) or IELTS Academic 7.0+. Each university sets its own score.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS or TOEFL is accepted for the US.",
      otherExams: "AP Computer Science and AP Calculus help your application."
    },

    deadlines: {
      earlyAction: "Usually 1 or 15 November (you can still choose another university). Each university sets its own date.",
      earlyDecision: "Usually 1 November (if accepted, you must go). Each university sets its own date.",
      regularDecision: "Usually 1 - 15 January. Each university sets its own date.",
      mohePortalWindow: PLAN_WINDOW_EN
    },

    personalStatementReqs: {
      platform: "Common App (the 2026-27 essay prompts are the same 7 as last year) and university websites",
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
        "SEVIS I-901 fee receipt ($350)",
        "DS-160 online form confirmation",
        "Interview at the US Embassy in Kuwait",
        "All your social media accounts set to public (required since June 2025)"
      ]
    },

    // Merit universities at bachelor's level, Ministerial Decree 15/2025
    accreditedUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "Georgia Institute of Technology",
      "University of Illinois Urbana-Champaign",
      "University of Michigan - Ann Arbor",
      "Purdue University (also cyber security)",
      "University of Texas at Austin (computer engineering)",
      "Stanford University (computer science)",
      "Princeton University (computer science)",
      "Cornell University (computer science)",
      "California Institute of Technology (computer science)"
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
    levels: ["bachelor", "medical", "foundation"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "Australia",
    countryAr: "أستراليا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MBBS / BMedSci / MD)", "Dentistry (BDS)"],
    planMajors: ["medicine", "dentistry"],
    verifiedFields: ["minScore", "stream", "publicNotes", "english", "ukvi", "otherExams", "mohe", "rd", "visaType", "visaDocs", "universities"],

    verifiedAllowances: 3,
    stipend: { currency: "AUD", variants: [{ key: "all", standard: 5850, merit: null }], meritNoteKey: "stipend_merit_unconfirmed" },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: A$5,850. The merit amount for Australia is not clear in the Ministry's table.",
        MERIT_LINE_EN,
        "Extra allowances in the Ministry's 2026/2027 table: books A$1,715, equipment A$2,805, clothing A$1,070, clinical training A$1,400.",
        "Clinical and lab fees are covered.",
        "Student health insurance (OSHC).",
        "A return flight to Kuwait each year."
      ]
    },

    necessaryExams: {
      satActStatus: "Not used for medicine in Australia.",
      englishProficiency: "Monash: IELTS 7.0 with no part below 6.5, TOEFL iBT 94, or PTE 65. Curtin: IELTS 7.0 in every part.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS, TOEFL or PTE Academic is accepted for Australia.",
      otherExams: "Monash: ISAT score of at least 170, and 165 in each section (the 2027 interview cut-off was 178). Western Sydney: ISAT. Curtin: UCAT ANZ and Casper."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "Monash 2027 entry: applications closed 30 June 2026 (ISAT by 8 May 2026); foundation and VTAC rounds closed 28 September 2026. Western Sydney accepts applications all year.",
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
        notes: "Monash foundation year (MUFY): 92%, with 75% in English and 75% in chemistry, to move on to medicine. Other universities set their own grades."
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
      { subject: "English", minGrade: "IELTS 7.0 (no part below 6.5 at Monash)" }
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
        "Genuine Student questions, answered in the visa application form"
      ]
    },

    // Australia merit list (Medical & Health), Decision 60/2025
    accreditedUniversities: [
      "Monash University (merit)",
      "University of Sydney (merit)",
      "University of Queensland (merit)",
      "UNSW Sydney (merit)",
      "University of Melbourne (merit; medicine is for graduates only)",
      "Western Sydney University (not on the merit list)",
      "Flinders University (not on the merit list)",
      "Curtin University (not on the merit list)"
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
    levels: ["bachelor", "medical"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "Bahrain",
    countryAr: "البحرين",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medicine & Surgery (MB BCh BAO)"],
    planMajors: ["medicine"],
    verifiedFields: ["minScore", "stream", "publicNotes", "usDiploma", "ukSystem", "english", "ukvi", "otherExams", "sat", "mohe"],

    verifiedAllowances: 2,
    stipend: { currency: "BHD", variants: [{ key: "all", standard: 1219, merit: null }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: BD 1,219.",
        "Extra allowances in the Ministry's 2026/2027 table: books BD 495, equipment BD 594, clothing BD 247, clinical training BD 350.",
        "Tuition is paid directly to the university.",
        "Health cover in Bahrain and Kuwait.",
        "Money for travel.",
        "Hospital training in Kuwait and Bahrain."
      ]
    },

    necessaryExams: {
      satActStatus: "Not needed: Kuwaiti students send their Kuwait University Qudrat results instead of the SAT (RCSI Bahrain).",
      englishProficiency: "AGU: IELTS 5.5 (TOEFL 475 or 500; AGU's own pages differ). RCSI Bahrain: IELTS 6.5, no part below 6.0.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS is accepted for Bahrain.",
      otherExams: "Kuwait University Qudrat tests and an interview. Kuwaiti students must be nominated by the Ministry, and AGU also runs its own admission tests."
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
        notes: "The Ministry's plan asks for 97%. AGU's own minimum is 95%, with at least 90% in biology, chemistry, physics and math. The course takes 6 - 7 years."
      },
      usDiploma: {
        minScore: "RCSI Bahrain: GPA 3.60 (92%)",
        coursePrereqs: "Chemistry, biology, and math or physics. Kuwaiti students send Qudrat results instead of the SAT."
      },
      ukSystem: {
        minScore: "RCSI Bahrain: ABB or AAC (5-year course), BCC (6-year course)",
        aLevelSubjects: "AGU sets its own A-Level requirements."
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
    levels: ["bachelor", "medical", "foundation"], // level-of-education filter (MOUSTAQBILI_FILTERS.levels)
    country: "Malta",
    countryAr: "مالطا",
    category: "Medical & Health",
    majors: ["Medicine & Surgery (MD)", "Medical Foundation Program (MFP)"],
    planMajors: ["medicine"],
    verifiedFields: ["minScore", "stream", "english", "otherExams", "mohe", "rd", "pathway", "visaType", "visaDocs"],

    verifiedAllowances: 2,
    stipend: { currency: "EUR", variants: [{ key: "all", standard: 3450, merit: null }] },
    monthlySalary: {
      allowancesSummary: [
        "Monthly allowance: €3,450.",
        "Extra allowances in the Ministry's 2026/2027 table: books €690, equipment €1,360, clothing €495, clinical training €900.",
        "Tuition is paid by the Ministry.",
        "Health insurance (Malta requires at least €100,000 cover for the residence permit).",
        "A return flight to Kuwait each year."
      ]
    },

    necessaryExams: {
      satActStatus: "Not needed.",
      englishProficiency: "University of Malta: IELTS 6.0 overall, with 6.0 in writing and at least 5.5 in the other parts, or TOEFL iBT 80 with 20 in writing.",
      ukviIeltsRequired: false,
      ukviIeltsNote: "A normal IELTS Academic is accepted for Malta.",
      otherExams: "An interview and/or a written test, if the university's admissions board asks for one."
    },

    deadlines: {
      earlyAction: null,
      earlyDecision: null,
      regularDecision: "1 July (the 2026 deadline for students who need a visa; the 2027 date is not posted yet)",
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
      { subject: "English", minGrade: "IELTS 6.0 (writing 6.0), or TOEFL iBT 80" }
    ],

    pathway: {
      entryType: "One-year Certificate in Foundation Studies in Medical and Dental Sciences, then the 5-year medical degree",
      foundationNeeded: true,
      explanation: "The foundation year runs under the University of Malta's agreement with Kuwait. Passing it guarantees a place in Medicine and Surgery. You also need Medical Maltese (a short language course or certificate)."
    },

    visaRequirements: {
      visaType: "National long-stay study visa (D visa), then a residence permit (Identità e-Residence) in Malta",
      keyDocuments: [
        "Acceptance letter from the University of Malta",
        "Financial guarantee letter from the Ministry (proof of funds)",
        "Health insurance with at least €100,000 cover",
        "Proof of accommodation (rental agreement)",
        "Valid Kuwaiti passport"
      ]
    },

    accreditedUniversities: [
      "University of Malta (Msida campus)"
    ]
  }
];

// Search filters: the 9 countries in Plan 2026/2027 (Canada is not included).
const MOUSTAQBILI_FILTERS = {
  countries: [
    { value: "United States", label: "United States", labelAr: "الولايات المتحدة" },
    { value: "United Kingdom", label: "United Kingdom", labelAr: "المملكة المتحدة" },
    { value: "Ireland", label: "Ireland", labelAr: "أيرلندا" },
    { value: "Australia", label: "Australia", labelAr: "أستراليا" },
    { value: "New Zealand", label: "New Zealand", labelAr: "نيوزيلندا" },
    { value: "Malta", label: "Malta", labelAr: "مالطا" },
    { value: "Bahrain", label: "Bahrain", labelAr: "البحرين" },
    { value: "Saudi Arabia", label: "Saudi Arabia", labelAr: "السعودية" },
    { value: "United Arab Emirates", label: "United Arab Emirates", labelAr: "الإمارات" }
  ],
  // minPct/maxPct: a program is shown when its public-school floor is <= maxPct
  percentageRanges: [
    { value: "97.0+", label: "97% - 100%", minPct: 97.0, maxPct: 100 },
    { value: "95.0-96.9", label: "95% - 96.9%", minPct: 95.0, maxPct: 96.9 },
    { value: "90.0-94.9", label: "90% - 94.9%", minPct: 90.0, maxPct: 94.9 },
    { value: "85.0-89.9", label: "85% - 89.9%", minPct: 85.0, maxPct: 89.9 },
    { value: "80.0-84.9", label: "80% - 84.9%", minPct: 80.0, maxPct: 84.9 }
  ],

  // Level of education. The 2026/2027 plan is for high-school graduates only, so every
  // program is bachelor's level; master's and doctorate are listed as "not offered".
  // planMajors: which plan majors (plan-majors-data.js) count for that level (none = all).
  // The plan doesn't say which majors start with a foundation year, so "foundation"
  // only filters the detailed programs (each program lists its levels in `levels`).
  levels: [
    { value: "bachelor", label: "Bachelor's degree", labelAr: "بكالوريوس", offered: true },
    { value: "medical", label: "Medical or dental degree (MBChB, MBBS, MD, BDS)", labelAr: "شهادة الطب أو طب الأسنان (MBChB، MBBS، MD، BDS)", offered: true, planMajors: ["medicine", "dentistry"] },
    { value: "foundation", label: "Starts with a foundation year", labelAr: "تبدأ بسنة تأسيسية", offered: true },
    { value: "master", label: "Master's (not offered)", labelAr: "ماجستير (غير متاح)", offered: false },
    { value: "doctorate", label: "Doctorate / PhD (not offered)", labelAr: "دكتوراه (غير متاح)", offered: false }
  ]
  // Majors come from plan-majors-data.js (every major in the 2026/2027 plan)
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
// USD, GBP, EUR, SAR, AED, BHD: Central Bank of Kuwait, updated 2026-10-12.
// AUD, NZD, CAD, JOD, EGP: open.er-api.com, 2026-10-12 (CBK does not publish them).
const MOUSTAQBILI_FX_FALLBACK = {
  date: "2026-10-12",
  rates: {
    KWD: 1,
    USD: 3.2452, GBP: 2.4496, EUR: 2.8946, SAR: 12.1694, AED: 11.9195, BHD: 1.2204,
    AUD: 4.6252, NZD: 5.7471, CAD: 4.5982, JOD: 2.2796, EGP: 169.4706
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
    "Merit (excellence) programme: 95% for medicine, dentistry and pharmacy; for other majors the plan PDF says at least 90%, but the Ministry's merit page only says \"the plan minimum\" {{unconfirmed}}. Merit students receive an extra 50% monthly allowance after the preparatory stage (Decree 197/2025, Art. 25). Merit status is lost if the GPA falls below 2.67 (below 60% in the UK system)."
  ],
  rulesAr: [
    "العمر من 16 إلى 23 سنة، وشهادة ثانوية من العام 2024/2025 أو 2025/2026.",
    "اللغة الإنجليزية: IELTS أكاديمي (وليس العام) 5.5 كمعدل عام وفي كل قسم، أو TOEFL بدرجة 47، يُجرى داخل الكويت. ويُمنح المقبول سنة ميلادية واحدة لتحقيق الدرجة المطلوبة من الجامعة.",
    "يجب على المتقدمين لتخصصات الطب وطب الأسنان والطب البيطري والصيدلة والهندسة أداء اختبارات القدرات بجامعة الكويت، ويُعتمد المعدل المكافئ.",
    "المملكة المتحدة: يُشترط UKVI IELTS. في الطب وطب الأسنان يؤدي عدم اجتياز السنة التأسيسية أو المقابلة إلى إنهاء الإيفاد، ولا تجوز إعادة السنة التأسيسية. ويجوز لغيرهم إعادتها مرة واحدة.",
    "الطب في المملكة المتحدة: UCAT بدرجة 1,650 فأكثر، وIELTS 7.0 (ولا يقل أي قسم عن 6.5) للسنة التأسيسية.",
    "برنامج التميز: 95% للطب وطب الأسنان والصيدلة؛ ولبقية التخصصات تذكر خطة الوزارة (PDF) 90% على الأقل، بينما تذكر صفحة التميز \"الحد الأدنى للخطة\" فقط {{unconfirmed}}. يحصل طلبة التميز على زيادة 50% في المخصص الشهري بعد المرحلة التمهيدية (القرار 197/2025، المادة 25). وتسقط صفة التميز إذا قل المعدل عن 2.67 (أو عن 60% في النظام البريطاني)."
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
    admissionSystem: "Apply on aasu.edu.kw (admissions email: admissions@aasu.edu.kw). 1,146 students were admitted for 2026/2027.",
    admissionSystemAr: "التقديم عبر aasu.edu.kw (بريد القبول: admissions@aasu.edu.kw). قُبل 1,146 طالباً وطالبة للعام 2026/2027.",
    aptitudeExams: "Applicants are ranked by high school % plus Kuwait University's English and Math aptitude tests (Qudrat). The weights differ by college.",
    aptitudeExamsAr: "يُرتب المتقدمون حسب نسبة الثانوية مع اختباري الإنجليزي والرياضيات في القدرات بجامعة الكويت، وتختلف الأوزان حسب الكلية.",
    floorLabelEn: "Minimum to apply, 2026/27",
    floorLabelAr: "الحد الأدنى للتقديم 2026/2027",
    // Official AASU undergraduate admissions page, AY 2026/2027 (checked 2026-10-13).
    // weights: AASU's own ranking formula (hs = high school, eng/math = Qudrat tests)
    colleges: [
      {
        collegeName: "Medicine & Health Sciences (MD)", collegeNameAr: "الطب والعلوم الصحية (دكتور في الطب)", minThanawiya: "90% science", minThanawiyaAr: "90% علمي",
        weights: { hs: 0.75, eng: 0.15, math: 0.10 },
        conditionEn: "Equivalent average 90% or more; IELTS 6.5 in every band; MMI interview (final rank: equivalent average 80% + interview 20%); Fall intake only, Kuwaiti students only",
        conditionAr: "معدل مكافئ 90% فأكثر؛ IELTS 6.5 في كل قسم؛ مقابلة MMI (الترتيب النهائي: المعدل المكافئ 80% + المقابلة 20%)؛ القبول في فصل الخريف فقط وللطلبة الكويتيين فقط"
      },
      {
        collegeName: "Computer Systems & Engineering", collegeNameAr: "هندسة وأنظمة الحاسوب", minThanawiya: "80% science", minThanawiyaAr: "80% علمي",
        weights: { hs: 0.65, eng: 0.15, math: 0.20 },
        majors: [
          { en: "Computer Systems Engineering", ar: "هندسة أنظمة الحاسوب" },
          { en: "Software Engineering", ar: "هندسة البرمجيات" },
          { en: "Cybersecurity Engineering", ar: "هندسة الأمن السيبراني" },
          { en: "Data Science & AI", ar: "علم البيانات والذكاء الاصطناعي" }
        ]
      },
      {
        collegeName: "Engineering & Energy", collegeNameAr: "الهندسة والطاقة", minThanawiya: "80% science", minThanawiyaAr: "80% علمي",
        weights: { hs: 0.65, eng: 0.15, math: 0.20 },
        majors: [
          { en: "Agricultural & Bioresources Engineering", ar: "الهندسة الزراعية والموارد الحيوية" },
          { en: "Biomedical & Instrumentation Engineering", ar: "الهندسة الطبية الحيوية والأجهزة" },
          { en: "Energy Systems Engineering", ar: "هندسة أنظمة الطاقة" },
          { en: "Environmental & Sustainability Engineering", ar: "الهندسة البيئية والاستدامة" },
          { en: "Materials Science & Engineering", ar: "علوم وهندسة المواد" },
          { en: "Robotics & Mechatronics Engineering", ar: "هندسة الروبوتات والميكاترونكس" }
        ]
      },
      {
        collegeName: "Business & Entrepreneurship", collegeNameAr: "الأعمال وريادة الأعمال", minThanawiya: "80% science / 85% arts", minThanawiyaAr: "80% علمي / 85% أدبي",
        weights: { hs: 0.70, eng: 0.15, math: 0.15 },
        conditionEn: "Arts stream accepted only for Entrepreneurship & Innovation and Digital Marketing",
        conditionAr: "يُقبل القسم الأدبي فقط في تخصصي ريادة الأعمال والابتكار والتسويق الرقمي",
        majors: [
          { en: "Entrepreneurship & Innovation", ar: "ريادة الأعمال والابتكار" },
          { en: "Digital Marketing", ar: "التسويق الرقمي" },
          { en: "Supply Chain & Logistics Management", ar: "إدارة سلاسل الإمداد والخدمات اللوجستية" }
        ]
      }
    ],
    sourceNote: "Source: Abdullah Al-Salem University undergraduate admissions, AY 2026/2027 (checked 13 October 2026). These are minimums to apply, not the lowest grades admitted.",
    sourceNoteAr: "المصدر: صفحة القبول للبكالوريوس بجامعة عبد الله السالم للعام 2026/2027 (آخر مراجعة 13 أكتوبر 2026). هذه حدود دنيا للتقديم، وليست أدنى معدلات مقبولة."
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
    admissionSystem: "registration.puc.edu.kw. Registration for 2026/2027 ran 3 - 13 August 2026, and 7,989 students were accepted.",
    admissionSystemAr: "registration.puc.edu.kw. أُقيم التسجيل للعام 2026/2027 من 3 إلى 13 أغسطس 2026، وقُبل 7,989 طالباً وطالبة.",
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
