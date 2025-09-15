import React from "react";
import "./History.scss";


import img from "../../assets/law.jpg";
import img1 from "../../assets/law.jpg";
import img2 from "../../assets/law.jpg";
const historyData = [
  {
    year: "1995",
    title: "Foundation Laid",
    description:
      "Our institution was founded with a vision to provide quality education and shape future leaders.",
    image: img,
  },
  {
    year: "2005",
    title: "First Major Milestone",
    description:
      "We expanded with new departments and modern infrastructure, setting new standards in education.",
    image: img1,
  },
  {
    year: "2015",
    title: "Global Recognition",
    description:
      "Our institution earned international recognition for academic excellence and research.",
    image: img2,
  },
  {
    year: "2022",
    title: "A Modern Campus",
    description:
      "With smart classrooms, digital learning, and global collaborations, we step into the future.",
    image: img,
  },
];

const History = () => {
  return (
    <div className="history-page">
      {/* Hero Section */}
      <div className="history-hero">
        <div className="overlay">
          <h1>Our History</h1>
          <p>A journey of excellence, growth, and innovation.</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        {historyData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
