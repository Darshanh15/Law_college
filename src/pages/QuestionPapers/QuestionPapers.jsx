import React from "react";
import "./QuestionPapers.scss";
import QuestionPaperArchives from "./QuestionPaperArchives/QuestionPaperArchives";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const subjects = [
  {
    name: "Family Law",
    link: "https://drive.google.com/drive/folders/1uUv-Bz42nSXezVsq8vIXSFQewGsYsfYK",
  },
  {
    name: "Penology & Victimology",
    link: "https://drive.google.com/drive/folders/1SZKGlzM8djmJ4CgELa5rsoDgpzk3oFex",
  },
  {
    name: "Interpretation of Statute",
    link: "https://drive.google.com/drive/folders/1VQQ8SrllnJ2yNdG_QW5IJJdp0NGTVnnT",
  },
  {
    name: "Legal method",
    link: "https://drive.google.com/drive/folders/16hQ73A5Ce1gr15y0CWULNMFHCp54u9ej",
  },
  {
    name: "Labour law",
    link: "https://drive.google.com/drive/folders/1wXIWE6tvN5lX9CWbHtTEXgZoYRjfsaJb",
  },
  {
    name: "Contract",
    link:"https://drive.google.com/drive/folders/1Upt84dAsE-PmSrdh-Lowc2at1I0JfPug"
  },
  {
    name: "Jurisprudence",
    link: "https://drive.google.com/drive/folders/1ShwdV6xbxu0iZMWb4Oqiod6Tk9ejQgbS"
  }
];

const QuestionPapers = () => {
  return (
    <>
    <SectionTitle2 title="Question Papers" />
    <div className="question-papers">
      {/* <h2 className="qp-heading">📚 Question Paper Archives</h2> */}
      <div className="folder-container">
        {subjects.map((s, i) => (
          <div key={i} className="flip-entry-info">
            <a href={s.link} target="_blank" rel="noreferrer">
              <div className="flip-entry-visual">
                <div className="flip-entry-visual-card">
                  <div className="flip-entry-icon">📁</div>
                </div>
              </div>
              <div className="flip-entry-title">{s.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
    <QuestionPaperArchives />
    </>
  );
};

export default QuestionPapers;
