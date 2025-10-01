import React from "react";
import "./ThreeYearLLB.scss";

const FiveYearLLB = () => {
  return (
    <div className="llb-container">
      <h2 className="section-title">5-Year LL.B. Program</h2>
      <p className="intro">
        The 5-Year Bachelor of Laws (LL.B.) program at <b>Bengaluru Law College</b> 
        is designed for graduates who aspire to pursue a career in law. This professional program 
        builds a strong foundation in <b>legal principles, practical skills, and ethical values</b>, 
        preparing students to become competent advocates, advisors, academicians, and judicial officers.
      </p>

      {/* Eligibility & Duration */}
      <div className="info-grid">
        <div className="info-card">
          <h4>Eligibility</h4>
          <ul>
            <li>Bachelor’s Degree in any discipline from a recognized university.</li>
            <li>Admission based on merit as per BCI & KSLU norms.</li>
          </ul>
        </div>
        <div className="info-card">
          <h4>Duration</h4>
          <ul>
            <li>3 Academic Years (6 Semesters)</li>
            <li>Each semester blends law subjects with practical training.</li>
          </ul>
        </div>
      </div>

      {/* Curriculum */}
      <div className="curriculum">
        <h3>Curriculum Highlights</h3>
        <div className="curriculum-grid">
          <ul>
            <li>Constitutional Law</li>
            <li>Law of Crimes (IPC & CrPC)</li>
            <li>Contract & Company Law</li>
            <li>Property & Labour Laws</li>
            <li>Family Law</li>
          </ul>
          <ul>
            <li>Public International Law & Human Rights</li>
            <li>Administrative & Environmental Law</li>
            <li>Civil Procedure Code & Law of Evidence</li>
            <li>Moot Court Exercises</li>
            <li>Drafting, Pleading & Conveyancing</li>
          </ul>
        </div>
        <p className="note">Includes internships, professional ethics, and Bar-Bench relations.</p>
      </div>

      {/* Unique Features */}
      <div className="features">
        <h3>Unique Features at Bengaluru Law College</h3>
        <ul>
          <li>Guidance by experienced faculty and legal practitioners.</li>
          <li>Seminars, workshops & guest lectures by judges, lawyers, and academicians.</li>
          <li>Opportunities for legal aid camps, court visits, and internships.</li>
          <li>Student participation in <b>Tarang</b> (cultural) & <b>Khel</b> (sports) events.</li>
          <li>Focus on discipline, ethics, and holistic growth.</li>
        </ul>
      </div>

      {/* Careers */}
      <div className="careers">
        <h3>Career Opportunities</h3>
        <div className="career-cards">
          <div className="career-card">Advocates in courts</div>
          <div className="career-card">Legal Advisors in corporate firms</div>
          <div className="career-card">Judicial Officers (via exams)</div>
          <div className="career-card">Academicians & Researchers</div>
          <div className="career-card">Government Services & NGOs</div>
        </div>
      </div>

      {/* Job Opportunities */}
      <section className="llb-section">
        <h2 className="section-title">Job Opportunities after 5-Year LL.B.</h2>
        <p>
          A 5-Year LL.B. degree opens diverse and rewarding career paths in both
          public and private sectors. Graduates are equipped with legal knowledge,
          advocacy skills, and ethics to pursue roles such as:
        </p>

        <h3>1. Litigation and Practice</h3>
        <p>
          Enroll as an Advocate with the State Bar Council and practice in District,
          High Courts, and Supreme Court. Specialize in Criminal Law, Civil Law,
          Corporate Law, Family Law, Taxation, or Constitutional Law.
        </p>

        <h3>2. Judiciary</h3>
        <p>
          Appear for Judicial Service Examinations to become Judicial Magistrates,
          District Judges, or Civil Judges.
        </p>

        <h3>3. Corporate & Business Sector</h3>
        <p>
          Work as Legal Advisors, Corporate Lawyers, or Compliance Officers in MNCs,
          banks, insurance firms, and startups.
        </p>

        <h3>4. Government & Public Sector</h3>
        <p>
          Opportunities in Public Prosecutor’s Office, Government Legal Cells, PSUs,
          Defence Services (JAG), and Banks.
        </p>

        <h3>5. Academics & Research</h3>
        <p>
          Pursue LL.M. and Ph.D. for teaching, research, and academic leadership.
        </p>

        <h3>6. Alternative Careers</h3>
        <p>
          Work with NGOs, International Organizations, Human Rights Bodies,
          Build a career in Legal Journalism, Policy Making, or Legal Process Outsourcing (LPOs)
          , or Join Civil Services (IAS, IPS, IFS, KAS, etc.) with law as a strong foundation.
        </p>
      </section>
    </div>
  );
};

export default FiveYearLLB;


// import React from "react";
// import "./ThreeYearLLB.scss";

// const ThreeYearLLB = () => {
//   return (
//     <div className="llb-container">
//       {/* Program Details */}
//       <section className="llb-section">
//         <h2>3-Year LL.B. Program</h2>
//         <p>
//           The 3-Year Bachelor of Laws (LL.B.) program at <b>Bengaluru Law College</b> is
//           designed for graduates who aspire to pursue a career in the field of law.
//           This professional program offers a strong foundation in legal principles,
//           practical skills, and ethical values, preparing students to become competent
//           advocates, legal advisors, academicians, or judicial officers.
//         </p>

//         <h3>Eligibility</h3>
//         <ul>
//           <li>Bachelor’s Degree in any discipline from a recognized university.</li>
//           <li>Admission based on merit as per BCI & KSLU norms.</li>
//         </ul>

//         <h3>Duration</h3>
//         <p>3 Academic Years divided into 6 Semesters.</p>
//         <p>Each semester blends core law subjects with skill-based and practical training.</p>

//         <h3>Curriculum Highlights</h3>
//         <ul>
//           <li>Constitutional Law</li>
//           <li>Law of Crimes (IPC & CrPC)</li>
//           <li>Contract and Company Law</li>
//           <li>Property and Labour Laws</li>
//           <li>Family Law</li>
//           <li>Public International Law & Human Rights</li>
//           <li>Administrative and Environmental Law</li>
//           <li>Civil Procedure Code & Law of Evidence</li>
//         </ul>

//         <h4>Practical Components</h4>
//         <ul>
//           <li>Moot Court Exercises</li>
//           <li>Drafting, Pleading, and Conveyancing</li>
//           <li>Professional Ethics and Bar-Bench Relations</li>
//           <li>Internships with advocates, law firms, NGOs, and corporates</li>
//         </ul>

//         <h3>Unique Features</h3>
//         <ul>
//           <li>Experienced faculty and legal practitioners</li>
//           <li>Seminars, workshops, and guest lectures</li>
//           <li>Legal aid camps, court visits, and internships</li>
//           <li>Student engagement in <b>Tarang</b> (cultural) & <b>Khel</b> (sports)</li>
//           <li>Focus on discipline, ethics, and values</li>
//         </ul>
//       </section>

//       {/* Job Opportunities */}
//       <section className="llb-section">
//         <h2>Job Opportunities after 3-Year LL.B.</h2>
//         <p>
//           A 3-Year LL.B. degree opens diverse and rewarding career paths in both
//           public and private sectors. Graduates are equipped with legal knowledge,
//           advocacy skills, and ethics to pursue roles such as:
//         </p>

//         <h3>1. Litigation and Practice</h3>
//         <p>
//           Enroll as an Advocate with the State Bar Council and practice in District,
//           High Courts, and Supreme Court. Specialize in Criminal Law, Civil Law,
//           Corporate Law, Family Law, Taxation, or Constitutional Law.
//         </p>

//         <h3>2. Judiciary</h3>
//         <p>
//           Appear for Judicial Service Examinations to become Judicial Magistrates,
//           District Judges, or Civil Judges.
//         </p>

//         <h3>3. Corporate & Business Sector</h3>
//         <p>
//           Work as Legal Advisors, Corporate Lawyers, or Compliance Officers in MNCs,
//           banks, insurance firms, and startups.
//         </p>

//         <h3>4. Government & Public Sector</h3>
//         <p>
//           Opportunities in Public Prosecutor’s Office, Government Legal Cells, PSUs,
//           Defence Services (JAG), and Banks.
//         </p>

//         <h3>5. Academics & Research</h3>
//         <p>
//           Pursue LL.M. and Ph.D. for teaching, research, and academic leadership.
//         </p>

//         <h3>6. Alternative Careers</h3>
//         <p>
//           Work with NGOs, International Organizations, Human Rights Bodies,
//           Build a career in Legal Journalism, Policy Making, or Legal Process Outsourcing (LPOs)
//           , or Join Civil Services (IAS, IPS, IFS, KAS, etc.) with law as a strong foundation.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ThreeYearLLB;
