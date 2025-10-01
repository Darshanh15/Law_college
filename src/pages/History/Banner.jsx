import React from "react";
import "./Banner.scss";

const textData = [
  {
    text: "To uphold the legacy of excellence in legal education by fostering a dynamic academic environment that blends knowledge, ethics, and professionalism. The vision is to empower students to become responsible advocates and leaders who uphold the rule of law, champion justice, and contribute meaningfully to society at national and global levels."
  },
  {
    text: "To support and strengthen academic programs that combine theoretical knowledge with practical skills in law. To promote discipline, ethical conduct, and a sense of responsibility among students."
  },
  {
    text: "To encourage innovation, research, and participation in moot courts, internships, and community legal services. To create a culture of inclusiveness, mentorship, and leadership for holistic student development."
  },
];

const Banner = () => {
  return (
    <section className="banner-section">
      <h2 className="section-title">Our Vision & Mission</h2>
      <div className="banner-grid">
        {textData.map((item, index) => (
          <div className="banner" key={index}>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="banner-body">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
