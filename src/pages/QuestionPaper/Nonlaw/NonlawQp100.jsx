import React from "react";
import './Nonlaw.scss'

import SectionTitle2 from "../../../components/SectionTitle/SectionTitle2";

import file1 from "../../../assets/Pdf/Law/80/Fam I _Aug2024_80marks.pdf";


function NonlawQp100() {
  // Example PDF data (you can replace with real file URLs later)
const papers = {
    2021: [
      { name: "Paper 1", file: file1},
      { name: "Paper 2", file: file1 },
    ],
    2022: [
      { name: "Paper 1", file: file1 },
      { name: "Paper 2", file: file1 },
    ],
    2023: [
      { name: "Paper 1", file: file1 },
      { name: "Paper 2", file: file1 },
    ],
    2024: [
      { name: "Paper 1", file: file1 },
      { name: "Paper 2", file: file1 },
    ],
    2025: [
      { name: "Paper 1", file: file1 },
      { name: "Paper 2", file: file1 },
    ],
  };

  return (
    <>

    <SectionTitle2 title="Question Papers – 100 Series" />
        <div className="qp100-container">
      {/* <h1 className="title">Question Papers – 100 Series</h1> */}


        {Object.keys(papers).map((year) => (
  <div key={year} className="year-section">
    <h2>{year}</h2>
    <div className="pdf-grid">
      {papers[year].map((paper, index) => (
        <a
          key={index}
          href={paper.file}
          download={paper.name}   // ✅ forces download
          className="pdf-card"
        >
          📥 {paper.name}
        </a>
      ))}
    </div>
  </div>
))}

     </div>
    </>
  );
}

export default NonlawQp100;
