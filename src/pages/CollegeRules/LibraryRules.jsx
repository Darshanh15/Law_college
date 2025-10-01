import React from "react";
import "./CollegeRules.scss";
import ruleIcon from "../../assets/law.jpg"; // optional small icon
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const rules = [
"Students must carry their College ID / Library Card to use library facilities.",
"Silence should be maintained in the library. Mobile phones must be on silent mode.",
"No food, drinks, or personal belongings (bags, tiffin, etc.) inside the reading hall.",
"Books can be borrowed only through proper issue entry with a library card.",
"A book can be borrowed for a maximum of 15 days.",
"After 15 days, the book must be returned or renewed",
"If not returned/renewed, a fine of ₹2 per day will be charged until the book is returned.",
"Reference books, journals, bare acts, law reports, and periodicals are not issued; they can be used only inside the library.",
"Borrowers are responsible for the safe custody of books. Damaged/lost books must be replaced with the latest edition or paid for (as decided by the librarian).",
"Any marking, writing, or tearing of pages in library books is strictly prohibited.",
"Books must be returned immediately if recalled by the Librarian.",
"Library timings must be strictly followed for issue/return/reading.",
"Library users should maintain discipline and respect the rights of others.",
"Misuse of library resources or violation of rules may lead to suspension of library membership.",
"",
"",
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
