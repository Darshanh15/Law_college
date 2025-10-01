import React from "react";
import "./CriteriaPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const criteriaData = [
  {
    title: "Assistant Professor (Law)",
    points: [
      "Master’s Degree (LL.M) with at least 55% marks (50% for SC/ST/PwD).",
      "Must have cleared UGC-NET / SLET / SET in Law.",
      "Ph.D. in Law as per UGC norms can exempt from NET/SLET/SET.",
      "Preference for candidates with teaching / research experience or publications.",
      "Must fulfill UGC and Bar Council of India (BCI) regulations in force"
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
    <SectionTitle2 title="Job vacatins" />
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
