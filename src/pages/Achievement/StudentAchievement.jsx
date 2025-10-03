import React from "react";
import "./StudentAchievement.scss";


export default function StudentAchievement() {
  return (
 <>
    <section className="achievement-section">
      <div className="achievement-container">
        <h2>🌟 Student Achievement</h2>
        {/* <p className="achievement-text">
          Our students consistently excel in academics, competitions, and
          community service, making us proud with every milestone they achieve.
        </p> */}
      </div>
    </section>

    <section className="achievement-section">
      {/* <h1>Student Achievements</h1> */}

      <p>
        It is with great pride and enthusiasm that I,{" "}
        <span className="highlight">Dr. Devika S Ajila, Principal</span>, present the
        College Report of <span className="highlight">Bengaluru Law College</span>,
        highlighting our academic achievements, service initiatives, and
        institutional progress over the past years.
      </p>

      <p>
        Since its establishment as <strong>R.K. Law College (2009)</strong> and its
        transformation into <strong>Bengaluru Law College (2015)</strong> under the
        Law Wings Educational Trust, our institution has consistently upheld a
        tradition of academic excellence and community service.
      </p>

      <h2>Rank Holders</h2>
      <p>
        Our students have demonstrated outstanding performance in Karnataka State
        Law University (KSLU) examinations:
      </p>
      <ul className="list">
        <li>🎓 <strong>Ravi C.S.</strong> – 3rd Rank (Kannada Medium, 2017 Batch)</li>
        <li>🎓 <strong>Laxmi Devi</strong> – 6th Rank (2018 Batch)</li>
        <li>🎓 <strong>Chaya Devi</strong> – 7th Rank (Kannada Medium, 2019 Batch)</li>
        <li>🎓 <strong>Swathi N.</strong> – 2nd Rank (2020 Batch)</li>
        <li>🎓 <strong>Divyashree</strong> – 5th Rank (English Medium, 2020 Batch)</li>
      </ul>

      <p>
        In recognition of our commitment, Bengaluru Law College has been honored to
        host the <strong>Karnataka State Law University (KSLU) Valuation Center</strong>{" "}
        for the 8th consecutive time since 2022, and recently as a{" "}
        <strong>Revaluation Center</strong>.
      </p>

      <h2>Distinguished Alumni in Judiciary</h2>
      <ul className="list">
        <li>⚖️ <strong>Prakrthi Y R (2015 Batch)</strong> – Civil Judge, JMFC</li>
        <li>⚖️ <strong>Shri Devadas H (2015 Batch)</strong> – Additional Civil Judge, Honnalli</li>
        <li>⚖️ <strong>N. Narasimha Murthy</strong> – Additional Civil Judge, JMFC</li>
      </ul>

      <p>
        Their achievements inspire our current students, reinforcing our commitment
        to nurturing future leaders in the legal field.
      </p>

      <h2>Beyond Academics</h2>
      <p>
        Our college is dedicated to fostering legal awareness, social responsibility,
        and holistic development. We actively engage in{" "}
        <strong>
          community service initiatives, legal aid programs, and professional
          development opportunities
        </strong>
        , ensuring our students are well-prepared for their careers.
      </p>
    </section>
    </>
  );
}
