// import React from "react";
// import "./CriteriaPage.scss";
// import { Link } from "react-router-dom";

// import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
// import PopupModal from "../../components/PopupModal/PopupModal";

// const criteriaData = [
//   {
//     title: "Assistant Professor (Law)",
//     points: [
//       "Master’s Degree (LL.M) with at least 55% marks (50% for SC/ST/PwD).",
//       "Must have cleared UGC-NET / SLET / SET in Law.",
//       "Ph.D. in Law as per UGC norms can exempt from NET/SLET/SET.",
//       "Preference for candidates with teaching / research experience or publications.",
//       "Must fulfill UGC and Bar Council of India (BCI) regulations in force"
//     ],
//   },
//     {
//     title: "Assistant Professor (Kannada / English)",
//     points: [
//       "Master’s Degree (MA) in English or Kannada – with at least 55% marks.",
//       "UGC NET / KSET / SLET qualified – usually required (unless exempted with PhD).",
//       "PhD – not compulsory but preferred",
//       "Good academic record – strong marks in BA & MA",
//       "Teaching experience – many colleges ask for 2–3 years minimum.",
//       "Fluency in language – for Kannada, fluency in reading/writing/speaking is essential.",
//       "Research/Publications – add value, especially in reputed colleges.",
//       "Soft skills – good communication, ability to guide students, involvement in activities."
//     ],
//   },
//   {
//     title: "Librarian ",
//     points: [
//       "Master’s Degree in Library Science (M.Lib.Sc / MLIS) with 55% marks.",
//       "Must meet UGC eligibility norms.",
//       "Experience in college/university libraries is preferred",
//       "Knowledge of library automation, e-resources, digital databases.",
//       "Familiar with law books, journals, bare acts, case reporters, legal databases",
//       "Good academic record and communication skills.",
//       "Research work or publications in Library Science are an added advantage.",
//     ],
//   },
//   {
//     title: "Non-Teaching Staff / Clerical Staff",
//     points: [
//       "Education – Minimum PUC / 12th pass, many colleges prefer a graduate degree.",
//       "Computer skills – Basic knowledge of MS Office, email, typing.",
//       "Communication – Good in English + Kannada (spoken & written).",
//       "Experience – 1–3 years in office / clerical / front desk work preferred, but freshers may also be hired for junior roles.",
//       "Soft skills – Polite, disciplined, well-presented, able to interact with students, staff, and visitors.",
//       "Work duties – Answer phone calls, maintain records, guide visitors, manage files, help with admissions and student services.",
//       "Other – Trustworthy, punctual, and able to multitask."
//     ],
//   },
// ];

// const CriteriaPage = () => {
//   return (
// <>
//     <SectionTitle2 title="job vacancy" />
//     <div className="criteria-page">
//       {/* <h1>Admission Criteria</h1> */}

//       <div className="criteria-cards">
//         {criteriaData.map((criteria, index) => (
//           <div className="criteria-card" key={index}>
//             <h2>{criteria.title}</h2>
//             <ul>
//               {criteria.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//            {/* <Link to={<PopupModal />} className="apply-btn">
//   Apply
// </Link> */}

// <button
//                 className="apply-btn"
//                 onClick={() => handleApplyClick(criteria.title)}
//               >
//                 Apply
//               </button>
//           </div>

          
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default CriteriaPage;


import React, { useState } from "react";
import "./CriteriaPage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import PopupModal from "../../components/PopupModal/PopupModal";

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
    title: "Assistant Professor (Kannada / English)",
    points: [
      "Master’s Degree (MA) in English or Kannada – with at least 55% marks.",
      "UGC NET / KSET / SLET qualified – usually required (unless exempted with PhD).",
      "PhD – not compulsory but preferred",
      "Good academic record – strong marks in BA & MA",
      "Teaching experience – many colleges ask for 2–3 years minimum.",
      "Fluency in language – for Kannada, fluency in reading/writing/speaking is essential.",
      "Research/Publications – add value, especially in reputed colleges.",
      "Soft skills – good communication, ability to guide students, involvement in activities."
    ],
  },
  {
    title: "Librarian ",
    points: [
      "Master’s Degree in Library Science (M.Lib.Sc / MLIS) with 55% marks.",
      "Must meet UGC eligibility norms.",
      "Experience in college/university libraries is preferred",
      "Knowledge of library automation, e-resources, digital databases.",
      "Familiar with law books, journals, bare acts, case reporters, legal databases",
      "Good academic record and communication skills.",
      "Research work or publications in Library Science are an added advantage.",
    ],
  },
  {
    title: "Non-Teaching Staff / Clerical Staff",
    points: [
      "Education – Minimum PUC / 12th pass, many colleges prefer a graduate degree.",
      "Computer skills – Basic knowledge of MS Office, email, typing.",
      "Communication – Good in English + Kannada (spoken & written).",
      "Experience – 1–3 years in office / clerical / front desk work preferred, but freshers may also be hired for junior roles.",
      "Soft skills – Polite, disciplined, well-presented, able to interact with students, staff, and visitors.",
      "Work duties – Answer phone calls, maintain records, guide visitors, manage files, help with admissions and student services.",
      "Other – Trustworthy, punctual, and able to multitask."
    ],
  },
];

const CriteriaPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
  };

  return (
    <>
      <SectionTitle2 title="Job Vacancy" />
      <div className="criteria-page">
        <div className="criteria-cards">
          {criteriaData.map((criteria, index) => (
            <div className="criteria-card" key={index}>
              <h2>{criteria.title}</h2>
              <ul>
                {criteria.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button
                className="apply-btn"
                onClick={() => handleApplyClick(criteria.title)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <PopupModal
          title={`Apply for ${selectedJob}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default CriteriaPage;
