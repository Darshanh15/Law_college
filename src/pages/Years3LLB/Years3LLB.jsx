import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Years3LLB.scss";
import Syllabus3y from "../Syllabus/Syllabus3y";
import QuestionPaperArchives from "../QuestionPapers/QuestionPaperArchives/QuestionPaperArchives";

const Years3LLB = () => {
  return (
    <>
    <div className="years-llb">
      {/* Hero Section */}
      <section className="llb-hero">
        <div className="hero-overlay">
          <h1>3 Years LLB Program</h1>
          <p>Admissions Open for 2025 – 2026</p>
          <a href="/enquiry" className="cta-btn">Apply Now</a>
        </div>
      </section>

      {/* About Section */}
      <section className="llb-about container">
        <h2>About the Course</h2>
        <p>
          Our 3-Year LLB program is designed for graduates who aspire to build a career in law. 
          The course emphasizes a strong foundation in legal studies, professional ethics, 
          and practical exposure through moot courts, internships, and workshops.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="llb-highlights container">
        <h2>Why Choose Our LLB?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Experienced Faculty</h3>
            <p>Learn from highly qualified professors and legal experts.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Practical Exposure</h3>
            <p>Moot courts, case studies, and real-world projects.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Modern Campus</h3>
            <p>Smart classrooms, digital library, and top-class facilities.</p>
          </div>
          <div className="highlight-card">
            <FaCheckCircle className="icon" />
            <h3>Placement Support</h3>
            <p>Strong ties with law firms, NGOs, and corporate houses.</p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="llb-process container">
        <h2>Admission Process</h2>
        <ol>
          <li>Fill out the online application form.</li>
          <li>Submit required documents.</li>
          <li>Attend counseling / interview.</li>
          <li>Confirm admission by paying fees.</li>
        </ol>
        <a href="/enquiry" className="cta-btn">Start Application</a>
      </section>

      {/* Contact CTA */}
      {/* <section className="llb-contact">
        <h2>Have Questions?</h2>
        <p>Contact our admission team for guidance and details.</p>
        <div className="contact-btns">
          <a href="tel:+919876543210" className="cta-btn">📞 Call Us</a>
          <a href="mailto:info@bangalorelawcollege.com" className="cta-btn">✉️ Email Us</a>
        </div>
      </section> */}
    </div>
    <Syllabus3y />
    <QuestionPaperArchives />
    </>
  );
};

export default Years3LLB;
