import React from "react";
import "./Syllabus.scss";

const syllabus = [
  {
    semester: "I Semester",
    subjects: [
      "Constitutional Law - I",
      "Contract - I",
      "Law of Torts",
      "Family Law - I: Hindu Law",
      "Bharatiya Nyaya Sanhita 2023",
      "English (For those who write exam in Kannada)",
    ],
  },
  {
    semester: "II Semester",
    subjects: [
      "Constitutional Law - II",
      "Contract - II",
      "Labour Law - I",
      "Property Law",
      "Family Law - II: Mohammedan Law & Indian Succession Act",
      "Kanoonu Kannada / Kannada Kali (for non-Kannadiga students)",
    ],
  },
  {
    semester: "III Semester",
    subjects: [
      "Jurisprudence",
      "Labour Law - II",
      "Law of Taxation",
      "Criminal Law - II (Cr.P.C), Bharatiya Nagarik Suraksha Sanhita",
      "Administrative Law",
    ],
  },
  {
    semester: "IV Semester",
    subjects: [
      "Public International Law",
      "Optional - I: Human Rights Law and Practice",
      "Optional - II: Banking Law",
      "Clinical Course - I: Professional Ethics",
      "Clinical Course - II: Alternative Dispute Resolution Systems",
    ],
  },
  {
    semester: "V Semester",
    subjects: [
      "Company Law",
      "Civil Procedure Code and Limitation Act",
      "Optional - III: Penology and Victimology",
      "Optional - IV: Interpretation of Statutes",
      "Clinical Course - III: Drafting, Pleading and Conveyance",
    ],
  },
  {
    semester: "VI Semester",
    subjects: [
      "Bharatiya Saakshya Adhiniyama",
      "Environmental Law",
      "Optional - V: White Collar Crimes",
      "Optional - VI: Land Laws",   
      "Clinical Course - IV: Moot Court Exercise and Internship",
    ],
  },
];

const Syllabus3y = () => {
  return (
    <div className="syllabus-container">
      <h2 className="title">BENGALURU LAW COLLEGE</h2>
      <h3 className="subtitle">LIST OF SUBJECTS FOR 3 YEARS LLB COURSE</h3>

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

export default Syllabus3y;
