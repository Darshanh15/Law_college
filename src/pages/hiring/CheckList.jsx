import React from "react";
import "./CheckList.scss";
import { CheckCircle } from "lucide-react"; // using lucide-react icons

const CheckList = () => {
  const documents = [
    "SSLC/SSC/X CLASS Certificate/Marks Card containing Date of Birth.",
    "PUC 2nd year/HSC.",
    "Degree Qualification Examination Marks Card [Degree Certificate, Provisional degree certificate].",
    "Previous year's both semester Marks Card of subsequent year (Transfer Students).",
    "Caste (OBC, SC/ST) and income Certificate.",
    "Eligibility certificate (Non Karnataka), if needed.",
    "Migration certificate (Non Karnataka), if needed.",
    "Study permission letter (NOC) from employer, if employed in Govt. and Public Sector.",
    "Reservation Certificate from the concerned department in case 371(J) students.",
    "Disability Certificate in the case of candidates belonging to PH.",
    "1 to 10 std. Kannada Medium Study Certificate in case of reservation claimed under Gadinaadu/Horanaadu Kannadiga quota.",
    "Aadhaar Card Xerox & 10 Passport size photos."
  ];

  return (
    <div className="checklist-container">
      <h2>📑 Required Documents Checklist</h2>
      <div className="checklist-card">
        <h3>Original Certificates</h3>
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              <CheckCircle className="icon" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
