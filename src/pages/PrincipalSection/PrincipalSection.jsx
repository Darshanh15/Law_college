import React from "react";
import "./PrincipalSection.scss";
import img from '../../assets/law.jpg'

const PrincipalSection = () => {
  return (
    <section className="principal">
      <div className="principal-container">
        {/* Left: Image */}
        <div className="principal-img">
          <img 
            src={img}
            alt="Principal" 
          />
        </div>

        {/* Right: Text */}
        <div className="principal-text">
          <h2>Message from the Principal</h2>
          <p className="quote">
            "Education is not just about acquiring knowledge but about developing
            wisdom, integrity, and the ability to stand for justice. At 
            <strong> Bangalore Law College</strong>, we nurture future legal
            professionals with values, dedication, and commitment to society."
          </p>
          <h4>Dr. Devika S Ajila</h4>
          <p className="designation">Principal, Bangalore Law College</p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
