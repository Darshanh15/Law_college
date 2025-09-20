import React from "react";
import "./Syllabus.scss";

const syllabus = [
  {
    semester: "I Semester",
    subjects: [
      "General English",
      "Major-1: Political Science",
      "Minor-1-1: Sociology",
      "Minor-II-1: Economics",
      "Legal Methods"
    ]
  },
  {
    semester: "II Semester",
    subjects: [
      "Kaanoonu Kannada / Kannada Kali",
      "Major-1-2: Political Science",
      "Minor-1-2: Sociology",
      "Minor-II-2: Economics",
      "Law of Torts"
    ]
  },
  {
    semester: "III Semester",
    subjects: [
      "Major-1-3: Political Science",
      "Major-1-4: Political Science",
      "Minor-1-3: Sociology",
      "Minor-II-3: Economics",
      "Constitutional Law-I"
    ]
  },
  {
    semester: "IV Semester",
    subjects: [
      "Major-1-5: Political Science",
      "Major-1-6: Political Science",
      "Constitutional Law-II",
      "Bhratiya Nyaya Sanhita 2023",
      "Contract-I"
    ]
  },
  {
    semester: "V Semester",
    subjects: [
      "Labour Law-I",
      "Jurisprudence",
      "Family Law-I: Hindu Law",
      "Contract-II",
      "Administrative Law"
    ]
  },
  {
    semester: "VI Semester",
    subjects: [
      "Labour Law-II",
      "Company Law",
      "Property Law",
      "Family Law-II: Mohammedan Law"
    ]
  },
  {
    semester: "VII Semester",
    subjects: [
      "Public International Law",
      "Law of Taxation",
      "Criminal Law-II (Cr.P.C), Bharatiya Nagarik Suraksha Sanhita",
      "Clinical Course-1: Professional Ethics"
    ]
  },
 {
    semester: "VIII Semester",
    subjects: [
      "Bharatiya Saakshya Adhiniyama",
      "Optional-1: Human Rights Law and Practice",
      "Optional-II: Banking Law",
      "Clinical Course-II: Alternative Dispute Resolution Systems"
    ]
  },
  {
    semester: "IX Semester",
    subjects: [
      "Civil Procedure Code and Limitation Act",
      "Optional-III: Penology and Victimology",
      "Optional-IV: Interpretation of Statutes",
      "Clinical Course-III: Drafting, Pleading and Conveyance"
    ]
  },
  {
    semester: "X Semester",
    subjects: [
      "Environmental Law",
      "Clinical Course-V: White Collar Crimes",
      "Optional-VI: Land Laws",
      "Clinical Course-IV: Moot Court Exercise and Internship"
    ]
  }

];

const Syllabus5y = () => {
  return (
    <div className="syllabus-container">
      <h2 className="title">BENGALURU LAW COLLEGE</h2>
      <h3 className="subtitle">LIST OF SUBJECTS FOR 5 YEARS LLB COURSE</h3>

      <div className="syllabus-grid">
        {syllabus.map((sem, index) => (
          <div className="semester-card" key={index}>
            <h4 className="semester-title">{sem.semester}</h4>
            
            <ul>
              {sem.subjects.map((subject, i) => (
                <li key={i}>{i+1}. {subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus5y;
