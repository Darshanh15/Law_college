// import React from "react";
// import "./ScrollingText.scss";

// const ScrollingText = () => {
//       const currentYear = new Date().getFullYear();
//   const nextYear = currentYear + 1;
//   return (
//     <div className="scroll-container">
//       <p className="scroll-text">
//         Welcome to bangalore Law College | Admissions open for (3 Years LLB & 5 Years BA LLB) {currentYear}-{nextYear}
//       </p>
//     </div>
//   );
// };

// export default ScrollingText;


// import React from "react";
// import "./ScrollingText.scss";

// const ScrollingText = () => {
//   const currentYear = new Date().getFullYear();
//   const nextYear = currentYear + 1;

//   return (
//     <div className="scroll-container">
//       <div className="scroll-text">
//         🚀 Welcome to Bangalore Law College | Admissions open for (3 Years LLB & 5 Years BA LLB) {currentYear}-{nextYear}
//         <div className="scroll-buttons">
//           <button className="btn white">Admission</button>
//           <button className="btn yellow">Online Payment</button>
//           <button className="btn green">Brochure</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollingText;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./ScrollingText.scss";


const ScrollingText = () => {
  const currentYear = new Date().getFullYear();

    const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="scroll-wrapper">
      <div className="scroll-container">
        <p className="scroll-text">
          🚀 Welcome to Bangalore Law College | Admissions open for (3 Years LLB & 5 Years BA LLB){" "}
          {currentYear}-{currentYear + 1}
        </p>
      </div>
      <div className="">
        {/* <Link to="/admissions" onClick={handleCloseMenu}>Admission Process</Link> */}
        {/* <button className="scroll-btn">Apply Now</button> */}
        {/* /admissions */}
      {/* <button className="scroll-btn">Admission</button> */}
      {/* PopupModal */}
      {/* <button className="scroll-btn">Apply Now</button> */}
      {/* Apply Now button → opens modal */}
      {/* <button
        className="scroll-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Apply Now
      </button> */}

      {/* Admission button → navigates to /admissions */}
      <button
        className="scroll-btn"
        onClick={() => navigate("/admissions")}
      >
        Apply Now
      </button>

      <button
        className="scroll-btn"
        onClick={() => navigate("/intrship")}
      >
        Admission
      </button>

      {/* <button
        className="scroll-btn"
        onClick={() => navigate("/PopupModal")}
      >
        Admission
      </button> */}

            {/* <button className="scroll-btn" onClick={() => setIsModalOpen(true)}>
        Apply Now
      </button> */}

      {/* Modal */}
      {/* <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
      </div>
    </div>
  );
};

export default ScrollingText;

