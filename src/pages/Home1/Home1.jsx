import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home1.scss";

import img from '../../assets/law.jpg'
import PrincipalSection from "../PrincipalSection/PrincipalSection";
import Testimonials from "../Testimonials/Testimonials";
import VisionMission from "../VisionMission/VisionMission";

const Home1 = () => {
  const navigate = useNavigate();

  return (
    <>
    <VisionMission />
    <div className="home">
        <section class="trust-section">
  <div class="overlay">
    <h1>Law Wings Educational Trust <sup>®</sup></h1>
    <p>
      Law Wings Educational Trust started with the aspiration to provide able
      citizens to the society. Legal Profession is meant to be a devout
      profession which requires passionate and compassionate professionals.
      With Bengaluru Law College we aspire to accomplish the above motto.
    </p>
  </div>
</section>
      

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight-card">
          <h3>🎓 3-Year LLB</h3>
          <p>Build your legal career with our comprehensive 3-year law program.</p>
        </div>
        <div className="highlight-card">
          <h3>📚 5-Year LLB</h3>
          <p>Integrated law course designed for students after 12th standard.</p>
        </div>
        <div className="highlight-card">
          <h3>🏛 Events</h3>
          <p>Workshops, seminars, and moot court competitions throughout the year.</p>
        </div>
      </section>

      <PrincipalSection />
      {/* <Testimonials /> */}

      {/* Quick Navigation Cards */}
      <section className="quick-links">
        <div className="link-card" onClick={() => navigate("/faculty")}>
          <h3>👨‍🏫 Faculty</h3>
          <p>Meet our highly qualified teaching staff.</p>
        </div>
        <div className="link-card" onClick={() => navigate("/governingcouncil")}>
          <h3>🏛 Governing Council</h3>
          <p>Leadership and guidance for the institution.</p>
        </div>
        <div className="link-card" onClick={() => navigate("/HistorySection")}>
          <h3>📖 Milestone of the college</h3>
          <p>Learn about our legacy and achievements.</p>
        </div>
        <div className="link-card" onClick={() => navigate("/contact")}>
          <h3>📞 Contact</h3>
          <p>Get in touch with us for more details.</p>
        </div>
      </section>

    

    </div>
    </>
  );
};

export default Home1;
