import React from "react";
import "./CompliancePage.scss";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import Antirag from "./Antirag";

const CompliancePage = () => {
  return (
    <>
    <SectionTitle2 title="Compliance" />
    
    <div className="compliance-page">
      <div className="circular-header">
        <h2>KARNATAKA STATE LAW UNIVERSITY</h2>
        <h3>CIRCULAR – 23</h3>
        <p><strong>Sub:</strong> Prevention of Caste Based Discrimination in Higher Educational Institutions.</p>
        <p><strong>Ref:</strong> F.No.F.1-7/2011(SCT) February 2021</p>
      </div>

      <div className="circular-content">
        <p>
          The Joint Secretary, University Grants Commission, New Delhi, through
          his letter cited above has instructed all the Higher Educational
          Institutions to take the following action in order to prevent caste-based
          discrimination in higher educational Institutions:
        </p>

        <ul>
          <li>
            The Official/faculty members should desist from any act of
            discrimination against SC/ST students on grounds of their social origin.
          </li>
          <li>
            The University/Institute/College must develop a page on their website
            for lodging such complaints of caste discrimination by SC/ST students
            and also place a complaint register in the Registrar/Principal Office.
          </li>
          <li>
            Authorities must take strict and prompt action against erring officials
            if any such incident comes to notice.
          </li>
          <li>
            All officials/faculty members should be sensitive and ensure no
            discrimination of any kind against any community or category of students.
          </li>
        </ul>

        <p>
          Despite repeated circulars, it has been observed that many colleges have
          not implemented these directives. Therefore, all affiliated colleges are
          hereby instructed to initiate the following actions without delay:
        </p>

        <ol>
          <li>
            Develop a dedicated complaint page on the college website for SC/ST
            students.
          </li>
          <li>
            Maintain a complaint register in the Principal’s Office for the same
            purpose.
          </li>
          <li>
            Take immediate disciplinary action against any official/faculty member
            found indulging in caste-based discrimination and report the same to the
            University.
          </li>
        </ol>

        <p>
          Action Taken Report (ATR) regarding the above initiatives must be sent
          within <strong>10 days</strong> from the date of this circular to the
          University, which in turn will forward it to the University Grants
          Commission.
        </p>

        <p>
          Reports may be emailed to:{" "}
          <a href="mailto:ksluscstcell@gmail.com" className="email-link">
            ksluscstcell@gmail.com
          </a>
        </p>
      </div>
    </div>
    <Antirag />
    
    
    </>
  );
};

export default CompliancePage;
