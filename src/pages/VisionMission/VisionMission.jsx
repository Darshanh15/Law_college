import React from "react";
import "./VisionMission.scss";

const VisionMission = () => {
  return (
    <div className="vision-mission-page">
      <div className="header-section">
        <h1>Vision & Mission</h1>
        <p>
          At Bengaluru Law College, we are committed to nurturing legal
          professionals with values, skills, and a strong sense of justice.
        </p>
      </div>

      <div className="vm-container">
        <div className="vm-card vision">
          <h2>Our Vision</h2>
          <p>
            Our Vision is to empower aspiring legal professionals with knowledge, skills, and values that promote justice, social welfare, and positive change in society.
          </p>
        </div>

        <div className="vm-card mission">
          <h2>Our Mission</h2>
          <p>
            Our Mission is to achieve excellence by empowering aspiring lawyers with a well-structured curriculum and practical skills to serve society, the judiciary, and the nation. We aim to equip our students with strong core competencies to thrive in the legal profession.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
