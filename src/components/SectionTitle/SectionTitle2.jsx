import React from "react";
import "./SectionTitle2.scss";
import logo from '../../assets/logo2.png'; // adjust path only once

const SectionTitle2 = ({ title }) => {
  return (
    <div className="section-title">
      {/* Fixed background logo */}
      <img src={logo} alt="section logo" className="section-title__logo" />

      {/* Main title */}
      <h3 className="section-title__main">{title}</h3>
    </div>
  );
};

export default SectionTitle2;
