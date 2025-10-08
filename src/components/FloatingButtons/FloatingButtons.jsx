// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";
// import "./FloatingButtons.scss";

// const FloatingButtons = () => {
//   return (
//     <div className="floating-buttons">
//       {/* Enquiry (Graduation Cap) */}
//       <a href="/enquiry" className="floating-btn" title="Enquiry">
//         <FaGraduationCap />
//       </a>

//       {/* Call */}
//       <a href="tel:+919876543210" className="floating-btn" title="Call Us">
//         <FaPhoneAlt />
//       </a>

//       {/* Email */}
//       <a href="mailto:info@bangalorelawcollege.com" className="floating-btn" title="Email Us">
//         <FaEnvelope />
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;


// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";
// import "./FloatingButtons.scss";

// const FloatingButtons = () => {
//   return (
//     <div className="floating-buttons">
//       {/* Enquiry */}
//       <a href="/enquiry" className="floating-btn">
//         <FaGraduationCap />
//         <span className="btn-label">ENQUIRY</span>
//       </a>

//       {/* Call */}
//       <a href="tel:+919876543210" className="floating-btn">
//         <FaPhoneAlt />
//         <span className="btn-label">CALL US NOW</span>
//       </a>

//       {/* Email */}
//       <a href="mailto:info@bangalorelawcollege.com" className="floating-btn">
//         <FaEnvelope />
//         <span className="btn-label">EMAIL US</span>
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;


import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import "./FloatingButtons.scss";

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      {/* Admission Enquiry */}
      <a href="/enquiry" className="floating-btn">
        <div className="icon-box">
          <FaGraduationCap className="icon" />
        </div>
        <span className="btn-label">ADMISSION ENQUIRY</span>
      </a>

      {/* Call */}
      <a href="tel:+918618235882" className="floating-btn">
        <div className="icon-box">
          <FaPhoneAlt className="icon" />
        </div>
        <span className="btn-label">CALL US NOW</span>
      </a>

      {/* Email */}
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bangalorelawcollege6@gmail.com" className="floating-btn">
        <div className="icon-box">
          <FaEnvelope className="icon" />
        </div>
        <span className="btn-label">EMAIL US</span>
      </a>

      {/* Whatsup */}
      <a href="https://wa.me/918618235882" className="floating-btn">
        <div className="icon-box">
          <FaWhatsapp className="icon" />
        </div>
        <span className="btn-label">Whats app</span>
      </a>
    </div>
  );
};

export default FloatingButtons;






// import React, { useEffect, useState } from "react";
// import { FaPhoneAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";
// import "./FloatingButtons.scss";

// export default function FloatingButtons() {
//   const [openId, setOpenId] = useState(null);
//   const isTouch =
//     typeof window !== "undefined" &&
//     window.matchMedia &&
//     window.matchMedia("(hover: none)").matches;

//   const handleTouchToggle = (id) => (e) => {
//     if (!isTouch) return;                 // desktop uses hover CSS
//     if (openId !== id) {                  // 1st tap: open label, don't navigate
//       e.preventDefault();
//       setOpenId(id);
//     } else {
//       setOpenId(null);                    // 2nd tap: allow navigation
//     }
//   };

//   // tap outside closes any open label
//   useEffect(() => {
//     if (!isTouch) return;
//     const close = (ev) => {
//       const root = document.querySelector(".floating-buttons");
//       if (root && !root.contains(ev.target)) setOpenId(null);
//     };
//     document.addEventListener("touchstart", close);
//     document.addEventListener("click", close);
//     return () => {
//       document.removeEventListener("touchstart", close);
//       document.removeEventListener("click", close);
//     };
//   }, [isTouch]);

//   return (
//     <div className="floating-buttons">
//       <a
//         href="/enquiry"
//         className={`floating-btn ${openId === "enquiry" ? "open" : ""}`}
//         onClick={handleTouchToggle("enquiry")}
//       >
//         <div className="icon-box"><FaGraduationCap /></div>
//         <span className="btn-label">ADMISSION ENQUIRY</span>
//       </a>

//       <a
//         href="tel:+919876543210"
//         className={`floating-btn ${openId === "call" ? "open" : ""}`}
//         onClick={handleTouchToggle("call")}
//       >
//         <div className="icon-box"><FaPhoneAlt /></div>
//         <span className="btn-label">CALL US NOW</span>
//       </a>

//       <a
//         href="mailto:info@bangalorelawcollege.com"
//         className={`floating-btn ${openId === "mail" ? "open" : ""}`}
//         onClick={handleTouchToggle("mail")}
//       >
//         <div className="icon-box"><FaEnvelope /></div>
//         <span className="btn-label">EMAIL US</span>
//       </a>
//     </div>
//   );
// }
