import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./AdmissionPage.scss";
import teachingImg from "../../assets/Gallery/2021.jpg"; // replace with actual image
import nonTeachingImg from "../../assets/Gallery/2021.jpg"; // replace with actual image
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";

const AdmissionPage = () => {
      const currentYear = new Date().getFullYear();
    
        const [isModalOpen, setIsModalOpen] = useState(false);
      const navigate = useNavigate();
    
  return (

    <>
     <SectionTitle2 title="Admission Portal" />
   
    <div className="admission-page">
      {/* <h1>Admission Portal</h1> */}

      <div className="admission-cards">
        {/* Teaching Staff Admission */}
        <div className="admission-card">
          <img src={teachingImg} alt="Teaching Admission" />
          <h2>Teaching Staff Admission</h2>
          <p>
            Apply for teaching positions. Upload your documents and fill out
            the form online.
          </p>
          {/* <a href="/teaching-admission-form" className="apply-btn">
            Apply Now
          </a> */}
          <button
        className="apply-btn"
        onClick={() => navigate("/Intrship")}
      >
        Apply Now
      </button>
        </div>

        {/* Non-Teaching Staff Admission */}
        <div className="admission-card">
          <img src={nonTeachingImg} alt="Non-Teaching Admission" />
          <h2>Non-Teaching Staff Admission</h2>
          <p>
            Apply for administrative and support roles. Fill out the required
            information online.
          </p>
          <a href="/non-teaching-admission-form" className="apply-btn">
            Apply Now
          </a>
        </div>
      </div>
    </div>
     </>
  );
};

export default AdmissionPage;
