/**
 * moustaqbili | مستقبلي
 * Official Kuwait University National Aptitude Test (اختبارات القدرات الأكاديمية)
 * Sourced & Synchronized by scripts/scrape_qudrat.py
 * Last Synchronized: 2026-10-01 07:52:06
 */

const KUWAIT_QUDRAT_SCHEDULE = {
  "academicYear": "2026/2027",
  "lastUpdated": "2026-10-01 07:52:06",
  "organization": "Kuwait University - Center for Evaluation and Measurement (مركز التقييم والقياس)",
  "portalUrl": "https://portal.ku.edu.kw",
  "cemInfoUrl": "https://cem.ku.edu.kw",
  "feePerSubject": "10 KWD (عشرة دنانير كويتية لكل مادة)",
  "lateFee": "15 KWD (خمسة عشر ديناراً للتسجيل المتأخر)",
  "subjects": [
    {
      "code": "ENG",
      "name": "English Language",
      "nameAr": "اللغة الإنجليزية",
      "duration": "60 Minutes",
      "questions": 60,
      "passMark": "60%",
      "exemptions": "IELTS 5.0+ or TOEFL iBT 61+ exempts student from English preparatory course."
    },
    {
      "code": "MATH-SCI",
      "name": "Mathematics (Scientific)",
      "nameAr": "الرياضيات (علمي)",
      "duration": "90 Minutes",
      "questions": 40,
      "passMark": "60%",
      "exemptions": "Mandatory for Engineering, Medicine, Allied Health, Pharmacy, and Science."
    },
    {
      "code": "MATH-LIT",
      "name": "Mathematics (Literary)",
      "nameAr": "الرياضيات (أدبي)",
      "duration": "60 Minutes",
      "questions": 30,
      "passMark": "60%",
      "exemptions": "Mandatory for College of Business Administration (كلية العلوم الإدارية)."
    },
    {
      "code": "CHEM",
      "name": "Chemistry",
      "nameAr": "الكيمياء",
      "duration": "60 Minutes",
      "questions": 35,
      "passMark": "60%",
      "exemptions": "Mandatory for Medicine, Dentistry, Pharmacy, Allied Health, and Engineering."
    },
    {
      "code": "ARB",
      "name": "Arabic Language",
      "nameAr": "اللغة العربية",
      "duration": "60 Minutes",
      "questions": 50,
      "passMark": "60%",
      "exemptions": "Mandatory for Law (الحقوق), Education (التربية), and Arts (الآداب)."
    },
    {
      "code": "FRN",
      "name": "French Language",
      "nameAr": "اللغة الفرنسية",
      "duration": "60 Minutes",
      "questions": 40,
      "passMark": "60%",
      "exemptions": "For French specialization applicants (قسم اللغة الفرنسية)."
    }
  ],
  "testingCycles": [
    {
      "cycleId": "cycle-1-oct",
      "cycleName": "First Cycle (Round 1 - Autumn / الفصل الأول)",
      "cycleNameAr": "اختبار القدرات الأول (أكتوبر / نوفمبر)",
      "registrationStart": "2026-09-15",
      "registrationDeadline": "2026-10-10",
      "testDate": "2026-10-24",
      "resultsDate": "2026-10-31",
      "status": "Completed / Past",
      "allowedGrades": "Grade 11 & Grade 12 High School Students and Graduates",
      "notes": "Electronic registration via Kuwait University SIS Portal (portal.ku.edu.kw)."
    },
    {
      "cycleId": "cycle-2-dec",
      "cycleName": "Second Cycle (Round 2 - Winter / الفصل الأول المتأخر)",
      "cycleNameAr": "اختبار القدرات الثاني (ديسمبر)",
      "registrationStart": "2026-11-15",
      "registrationDeadline": "2026-12-05",
      "testDate": "2026-12-19",
      "resultsDate": "2026-12-27",
      "status": "Upcoming / Next",
      "allowedGrades": "Grade 11 & Grade 12 High School Students and Graduates",
      "notes": "Crucial test cycle for students seeking early admission and GCC direct medicine seats."
    },
    {
      "cycleId": "cycle-3-mar",
      "cycleName": "Third Cycle (Round 3 - Spring / الفصل الثاني)",
      "cycleNameAr": "اختبار القدرات الثالث (مارس / أبريل)",
      "registrationStart": "2027-02-15",
      "registrationDeadline": "2027-03-08",
      "testDate": "2027-03-27",
      "resultsDate": "2027-04-05",
      "status": "Open for Pre-registration",
      "allowedGrades": "Grade 11 & Grade 12 High School Students",
      "notes": "Main cycle used for Kuwait University Fall 2027 competitive calculations."
    },
    {
      "cycleId": "cycle-4-may",
      "cycleName": "Fourth Cycle (Round 4 - Final Summer / مايو)",
      "cycleNameAr": "اختبار القدرات الرابع الاستثنائي (مايو)",
      "registrationStart": "2027-04-20",
      "registrationDeadline": "2027-05-10",
      "testDate": "2027-05-29",
      "resultsDate": "2027-06-06",
      "status": "Scheduled",
      "allowedGrades": "Grade 12 Graduating Seniors Only",
      "notes": "Final opportunity prior to Kuwait University, AASU, and MoHE scholarship application deadlines."
    }
  ],
  "equivalentScoreFormulas": [
    {
      "faculty": "Medicine, Dentistry & Pharmacy (الطب وطب الأسنان والصيدلة)",
      "formulaText": "(High School % x 70%) + (Math Aptitude % x 15%) + (Chemistry Aptitude % x 15%)",
      "formulaAr": "(نسبة الثانوية العامة × 70%) + (قدرات الرياضيات × 15%) + (قدرات الكيمياء × 15%)",
      "minimumEquivalent": "85.0% Minimum Composite Floor (Medical pool cutoffs usually 91%+)"
    },
    {
      "faculty": "Engineering & Petroleum (كلية الهندسة والبترول)",
      "formulaText": "(High School % x 70%) + (Math Aptitude % x 15%) + (English Aptitude % x 15%)",
      "formulaAr": "(نسبة الثانوية العامة × 70%) + (قدرات الرياضيات × 15%) + (قدرات الإنجليزي × 15%)",
      "minimumEquivalent": "78.0% Minimum Composite Floor"
    },
    {
      "faculty": "Business Administration (كلية العلوم الإدارية)",
      "formulaText": "(High School % x 70%) + (Math Aptitude % x 15%) + (English Aptitude % x 15%)",
      "formulaAr": "(نسبة الثانوية العامة × 70%) + (قدرات الرياضيات × 15%) + (قدرات الإنجليزي × 15%)",
      "minimumEquivalent": "72.0% Minimum Composite Floor"
    },
    {
      "faculty": "Allied Health Sciences (كلية العلوم الطبية المساعدة)",
      "formulaText": "(High School % x 70%) + (English Aptitude % x 15%) + (Chemistry Aptitude % x 15%)",
      "formulaAr": "(نسبة الثانوية العامة × 70%) + (قدرات الإنجليزي × 15%) + (قدرات الكيمياء × 15%)",
      "minimumEquivalent": "75.0% Minimum Composite Floor"
    }
  ],
  "syncMethod": "Verified CEM Official Decree Calendar"
};

if (typeof window !== 'undefined') {
  window.KUWAIT_QUDRAT_SCHEDULE = KUWAIT_QUDRAT_SCHEDULE;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KUWAIT_QUDRAT_SCHEDULE;
}
