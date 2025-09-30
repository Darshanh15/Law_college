import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Arrive on time for every class and be prepared with all necessary materials.",
  "Maintain silence and avoid disturbing classmates during lectures.",
  "Raise your hand before speaking or asking questions.",
  "Respect your teachers and peers at all times.",
  "Follow classroom instructions promptly and accurately.",
  "Keep your desk and surrounding area clean and organized.",
  "No eating or drinking in the classroom.",
  "Use mobile phones only when permitted for educational purposes.",
  "Complete assignments and submit them on time.",
  "Participate actively and positively in group activities."
];

const ClassRules = () => {
  return (
    <>
    <SectionTitle2 title="Class Rules" />

    <div className="college-rules-page">
      {/* <h1 className="page-title">College Rules</h1> */}
      <div className="rules-grid">
        {rules.map((rule, idx) => (
          <div className="rule-card" key={idx}>
            <div className="rule-number">{idx + 1}</div>
            <div className="rule-text">{rule}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ClassRules;
