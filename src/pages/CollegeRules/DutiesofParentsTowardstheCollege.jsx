import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Support for Academic Discipline Encourage your ward to attend classes regularly and maintain the required attendance percentage.",
  "Ensure timely submission of assignments, projects, and participation in examinations.",
  "Respect for Institutional Rules Familiarize yourself with the college’s rules, regulations, and policies, and guide your ward to follow them.",
  "Cooperate with the college in maintaining discipline, decorum, and professional behavior.",
  "Regular Communication Maintain healthy communication with the faculty/mentors regarding your ward’s academic progress and conduct.",
  "Attend parent–teacher meetings and respond promptly to notices or calls from the college.",
  "Encouragement & Guidance Motivate your ward to actively participate in academic, cultural, and co-curricular activities of the college.",
  "Guide them to maintain honesty, respect, and dignity towards teachers and peers",
  "Financial Responsibility Ensure timely payment of fees and dues as prescribed by the college.",
  "Support your ward with necessary academic resources such as books, uniforms (if applicable), and study materials.",
  "Role in Character Building Help instill values of discipline, punctuality, and professional ethics that are expected in the legal profession.",
  "Discourage any form of misconduct such as ragging, malpractice, or disrespectful behavior.",
  "Cooperation with College Activities Extend cooperation for seminars, workshops, moot courts, internships, and other academic initiatives",
  "Support the college in organizing and participating in community service and legal awareness programs.",
  "Feedback and Suggestions Provide constructive feedback and suggestions to help the institution improve.",
  "Approach the Principal or designated authorities respectfully for grievance redressal, rather than direct confrontation.",
];

const DutiesofParentsTowardstheCollege = () => {
  return (
    <>
    <SectionTitle2 title="Duties of Parents Towards the College" />

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

export default DutiesofParentsTowardstheCollege;
