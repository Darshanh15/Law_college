import React, { useState } from "react";
import "./LawLibrary.scss";
import SectionTitle2 from "../../../components/SectionTitle/SectionTitle2";

export default function LawLibrary() {
  const [open, setOpen] = useState({
    resources: true,
    services: false,
    rules: false,
  });

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <section className="lawlib">
      {/* HERO */}
    <SectionTitle2 title="Library & Knowledge Center" />

      <header className="lawlib__hero">
        {/* <div className="lawlib__badge">Bengaluru Law College</div> */}
        {/* <h1 className="lawlib__title">Library & Knowledge Center</h1> */}
        <p className="lawlib__lead">
          The Library of Bengaluru Law College serves as the intellectual hub and
          knowledge center of the institution. It supports teaching, learning, and
          research by providing access to a wide range of legal and academic resources,
          fostering a culture of reading, research, and self-learning.
        </p>

        <div className="lawlib__stats">
          <div className="stat">
            <div className="stat__num">9:00–5:00</div>
            <div className="stat__label">Mon–Sat</div>
          </div>
          <div className="stat">
            <div className="stat__num">OPAC</div>
            <div className="stat__label">Online Catalogue</div>
          </div>
          <div className="stat">
            <div className="stat__num">Wi-Fi</div>
            <div className="stat__label">Digital Access</div>
          </div>
          <div className="stat">
            <div className="stat__num">e-Resources</div>
            <div className="stat__label">Databases & Repos</div>
          </div>
        </div>
      </header>

      {/* VISION & MISSION */}
      <div className="lawlib__grid">
        <article className="card highlight">
          {/* <div className="card__icon" aria-hidden>🎯</div> */}
          <h2 className="card__title">Vision</h2>
          <p className="card__text">
            To develop the library as a center of excellence in legal knowledge and
            information services, fostering academic growth, research culture, and
            intellectual development among students and faculty.
          </p>
        </article>

        <article className="card">
          {/* <div className="card__icon" aria-hidden>🚀</div> */}
          <h2 className="card__title">Mission</h2>
          <ul className="card__list">
            <li>Provide comprehensive legal and academic resources.</li>
            <li>Facilitate easy access via print and digital media.</li>
            <li>Support curriculum learning, research, and professional growth.</li>
            <li>Promote ethical use of information and lifelong learning.</li>
          </ul>
        </article>
      </div>

      {/* ACCORDIONS */}
      <div className="accordion">
        <section className={`acc ${open.resources ? "is-open" : ""}`}>
          <button className="acc__head" onClick={() => toggle("resources")}>
            <span>Library Resources</span>
            <span className="acc__chev" aria-hidden>▾</span>
          </button>
          <div className="acc__body">
            <ul className="ticklist">
              <li>Textbooks & Reference books on law and allied subjects</li>
              <li>Bare Acts with Rules and Amendments</li>
              <li>Law Reports & Journals: SCC, AIR, Criminal Law Journal, All India Reporter</li>
              <li>Magazines & Newspapers for current legal awareness</li>
              <li>Previous years’ question papers & study materials</li>
              <li>Digital resources: online databases, e-journals, open-access repositories</li>
            </ul>
          </div>
        </section>

        <section className={`acc ${open.services ? "is-open" : ""}`}>
          <button className="acc__head" onClick={() => toggle("services")}>
            <span>Library Services</span>
            <span className="acc__chev" aria-hidden>▾</span>
          </button>
          <div className="acc__body">
            <div className="pillgrid">
              <span className="pill">Computerized Issue & Return</span>
              <span className="pill">Reference & Research Help</span>
              <span className="pill">Reading Room Facility</span>
              <span className="pill">OPAC (Online Catalogue)</span>
              <span className="pill">Access to Legal Databases*</span>
              <span className="pill">Newspaper Clippings & Legal Updates</span>
              <span className="pill">Internet & Printing (Academic)</span>
            </div>
            <p className="note">*Access depends on active subscriptions.</p>
          </div>
        </section>

        <section className={`acc ${open.rules ? "is-open" : ""}`}>
          <button className="acc__head" onClick={() => toggle("rules")}>
            <span>Rules & Regulations</span>
            <span className="acc__chev" aria-hidden>▾</span>
          </button>
          <div className="acc__body">
            <ol className="numlist">
              <li>Open to all students, faculty, and staff of Bengaluru Law College.</li>
              <li>Maintain silence and discipline inside the library.</li>
              <li>Identity card is mandatory for borrowing books.</li>
              <li>Return books within the due date to avoid fines.</li>
              <li>Reference books, journals, and newspapers are not issued.</li>
              <li>Handle issued materials with care; damage may incur penalties.</li>
              <li>Misuse or misbehavior may lead to disciplinary action.</li>
            </ol>
          </div>
        </section>
      </div>

      {/* TIMINGS & STAFF */}
      
      {/* FACILITIES */}
      <div className="lawlib__grid">
        <article className="card">
          {/* <div className="card__icon" aria-hidden>🏛️</div> */}
          <h2 className="card__title">Facilities</h2>
          <ul className="ticklist">
            <li>Spacious reading hall with comfortable seating</li>
            <li>Wi-Fi-enabled digital access area for online legal research</li>
            <li>Display board for new arrivals, legal notices & case law updates</li>
            <li>Separate section for reference materials and project reports</li>
          </ul>
        </article>

        <article className="card gradient">
          {/* <div className="card__icon" aria-hidden>💡</div> */}
          <h2 className="card__title">Our Commitment</h2>
          <p className="card__text">
            We ensure equal access to academic and legal knowledge for every student
            and faculty member, continuously modernizing with digital tools, e-resources,
            and updated collections to meet evolving academic needs.
          </p>
          <a className="cta" href="#opac" onClick={(e)=>e.preventDefault()}>
            Explore OPAC
          </a>
        </article>
      </div>

    <SectionTitle2 title="Question Papers" />

    <div className="qp-links">
  <a href="/QuestionPapers" className="qp-card">Law Question Papers</a>
  <a href="/QuestionPapernonlaw" className="qp-card">Non-Law Question Papers</a>
</div>



    </section>
  );
}
