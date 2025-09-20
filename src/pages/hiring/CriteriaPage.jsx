import React from "react";
import "./CriteriaPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const criteriaData = [
  {
    title: "Teaching Staff",
    points: [
      "Must have relevant degree and certifications.",
      "Minimum 2 years of teaching experience.",
      "Good communication and interpersonal skills.",
      "Pass the interview conducted by the college."
    ],
  },
  {
    title: "Non-Teaching Staff",
    points: [
      "Minimum qualification: High School or Diploma depending on role.",
      "Experience preferred but freshers can apply.",
      "Good organizational and teamwork skills.",
      "Pass the interview and written test if applicable."
    ],
  },
];

const CriteriaPage = () => {
  return (
<>
    <SectionTitle2 title="Admission Criteria" />
    <div className="criteria-page">
      {/* <h1>Admission Criteria</h1> */}

      <div className="criteria-cards">
        {criteriaData.map((criteria, index) => (
          <div className="criteria-card" key={index}>
            <h2>{criteria.title}</h2>
            <ul>
              {criteria.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CriteriaPage;
