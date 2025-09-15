import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Years5LLB.scss";

const Years5LLB = () => {
  return (
    <div className="years-llb">
      {/* Hero Section */}
      <section className="llb-hero">
        <div className="hero-overlay">
          <h1>5 Years BA LLB Program</h1>
          <p>Admissions Open for 2025 – 2026</p>
          <a href="/enquiry" className="cta-btn">Apply Now</a>
        </div>
      </section>

      {/* About Section */}
      <section className="llb-about container">
        <h2>About the Course</h2>
        <p>
          The 5-Year Integrated BA LLB program combines arts and law, giving
          students a strong foundation in humanities along with in-depth
          knowledge of legal studies. This integrated approach nurtures
          analytical skills, critical thinking, and professional ethics.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="llb-highlights container">
        <h2>Why Choose BA LLB?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Integrated Learning</h3>
            <p>Combination of social sciences & law for holistic knowledge.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Industry Exposure</h3>
            <p>Internships with law firms, NGOs, and corporate houses.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Modern Campus</h3>
            <p>Smart classrooms, moot courts, and digital resources.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Career Opportunities</h3>
            <p>Opens doors to judiciary, advocacy, corporate law, and more.</p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="llb-process container">
        <h2>Admission Process</h2>
        <ol>
          <li>Apply online through the admission portal.</li>
          <li>Submit required academic documents.</li>
          <li>Attend entrance test / interview (if applicable).</li>
          <li>Confirm admission after selection.</li>
        </ol>
        <a href="/enquiry" className="cta-btn">Start Application</a>
      </section>

      {/* Career Opportunities */}
      <section className="llb-career container">
        <h2>Career Pathways</h2>
        <p>
          After completing the BA LLB program, graduates can pursue careers as:
        </p>
        <ul>
          <li>Advocate / Legal Practitioner</li>
          <li>Judicial Services</li>
          <li>Corporate Lawyer</li>
          <li>NGO / Human Rights Professional</li>
          <li>Legal Consultant</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="llb-contact">
        <h2>Have Questions?</h2>
        <p>Reach out to our admission office for guidance and information.</p>
        <div className="contact-btns">
          <a href="tel:+919876543210" className="cta-btn">📞 Call Us</a>
          <a href="mailto:info@bangalorelawcollege.com" className="cta-btn">✉️ Email Us</a>
        </div>
      </section>
    </div>
  );
};

export default Years5LLB;
