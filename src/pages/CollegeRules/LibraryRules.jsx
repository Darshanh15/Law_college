import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
  "Maintain silence in the library at all times.",
  "Students must carry their ID cards to access library facilities.",
  "Books must be returned on or before the due date to avoid fines.",
  "Do not damage or mark library books, journals, or magazines.",
  "Electronic devices should be used responsibly and quietly.",
  "No food or beverages are allowed inside the library.",
  "Use library resources for academic purposes only.",
  "Follow instructions given by library staff promptly.",
  "Participate in library events and workshops for better learning.",
  "Handle library equipment and digital resources with care."

];

const LibraryRules = () => {
  return (
    <>
    <SectionTitle2 title="Library Rules" />

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

export default LibraryRules;
