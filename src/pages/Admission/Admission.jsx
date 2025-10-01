import React from "react";
import SectionTitle2 from "../../components/SectionTitle/SectionTitle2";
import "./Admission.scss";
import CheckList from "../hiring/CheckList";

const Admission = () => {
  return (
<>


<SectionTitle2 title="Admissions" />


    <div className="admission-page">
      {/* Section Title with Fixed Logo */}
        {/* <SectionTitle2 title="Admissions" /> */}

      {/* Hero Banner */}
      <div className="admission-hero">
        <h1>Join Bangalore Law College</h1>
        <p>
          Shape your future in law with world-class faculty, modern facilities, 
          and career-driven programs. Admissions are now open!
        </p>
        <a href="#apply" className="apply-btn">Apply Now</a>
      </div>

    <CheckList />


      {/* Why Choose Us */}
      <div className="admission-highlights">
        <div className="highlight">
          <h3>🎓 Expert Faculty</h3>
          <p>Learn from highly experienced professors and legal practitioners.</p>
        </div>
        <div className="highlight">
          <h3>📚 Modern Curriculum</h3>
          <p>Industry-focused syllabus with real-world case studies.</p>
        </div>
        <div className="highlight">
          <h3>🏛️ Campus Facilities</h3>
          <p>State-of-the-art classrooms, moot courts, and digital library.</p>
        </div>
        <div className="highlight">
          <h3>🌐 Placement Support</h3>
          <p>Strong connections with top law firms and corporate houses.</p>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" className="admission-form">
        <h2>Apply for Admission</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <select required>
            <option value="">Select Program</option>
            <option value="llb">LLB (3 Years)</option>
            <option value="ba-llb">BA LLB (5 Years)</option>
            <option value="llm">LLM (2 Years)</option>
          </select>
          <textarea placeholder="Why do you want to join us?" rows="4"></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>

</>
  );
};

export default Admission;
