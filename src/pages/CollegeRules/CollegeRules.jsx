import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Students must wear proper college uniforms on campus.",
  "Attendance of at least 75% is mandatory to appear for exams.",
  "Maintain discipline in classrooms, corridors, and campus premises.",
  "Use of mobile phones is restricted in classrooms and labs.",
  "No ragging or harassment of fellow students will be tolerated.",
  "Follow library and lab rules strictly; keep facilities clean.",
  "Observe all safety protocols in labs and workshops.",
  "Participate in co-curricular and extra-curricular activities.",
  "Follow instructions given by faculty and administration at all times.",
  "Respect college property and maintain a clean environment."
];

const CollegeRules = () => {
  return (
    <>
    <SectionTitle2 title="College Rules" />

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

export default CollegeRules;
