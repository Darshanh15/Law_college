import React from "react";
import "./SectionTitle1.scss";

const SectionTitle1 = ({ logo, title }) => {
  return (
    <div className="section-title">
      {/* Background logo */}
      <img src={logo} alt="section logo" className="section-title__logo" />

      {/* Main title */}
      <h3 className="section-title__main">{title}</h3>
    </div>
  );
};

export default SectionTitle1;
