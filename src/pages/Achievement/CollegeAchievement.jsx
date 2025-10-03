
// import React from "react";
// import "./CollegeAchievements.scss";


// export default function CollegeAchievement() {
//   return (
   
//         <>
//     {/* <section className="achievement-section">
//       <div className="achievement-container">
//         <h2>🌟 Student Achievement</h2>
//         <p className="achievement-text">
//           Our students consistently excel in academics, competitions, and
//           community service, making us proud with every milestone they achieve.
//         </p>
//       </div>
//     </section> */}

//     <section className="achievements-section">
//       <div className="achievements-container">
//         <h2 className="achievements-title">College Achievements</h2>

//         <div className="achievements-card">
//           <p>
//             The past year stands as a testimony to the academic growth, resilience, 
//             and dedication of <strong>Bengaluru Law College</strong>. 
//             We take immense pride in the collective achievements of our students, 
//             faculty, and staff who uphold the values and vision of the institution.
//           </p>
//           <p>
//             The curricular, co-curricular, and extracurricular initiatives highlight 
//             our commitment to holistic education, innovation, and excellence.
//           </p>
//           <p>
//             We express our gratitude to the management, faculty members, 
//             non-teaching staff, parents, alumni, and well-wishers for their constant support.
//           </p>
//           <p>
//             As we step into the new academic year, we look forward to greater milestones, 
//             stronger collaborations, and continued dedication to shaping skilled, compassionate, 
//             and responsible individuals.
//           </p>
//           <p>
//             With renewed optimism, we pledge to carry forward the legacy of 
//             <strong> Bengaluru Law College </strong> and strive for excellence in every sphere of education.
//           </p>
//         </div>
//       </div>
//     </section>
//     </>
    
//   );
// }

// import React from "react";
// import "./CollegeAchievements.scss";

// const achievements = [
//   {
//     year: "2024",
//     text: "A testimony to academic growth, resilience, and dedication of Bengaluru Law College."
//   },
//   {
//     year: "2023",
//     text: "Pride in collective achievements of students, faculty, and staff who uphold values and vision."
//   },
//   {
//     year: "2022",
//     text: "Commitment to holistic education through curricular, co-curricular, and extracurricular initiatives."
//   },
//   {
//     year: "2021",
//     text: "Gratitude to management, staff, parents, alumni, and well-wishers for their constant support."
//   },
//   {
//     year: "Future",
//     text: "Looking forward to greater milestones, stronger collaborations, and shaping responsible individuals."
//   }
// ];

// const CollegeAchievement = () => {
//   return (
//     <section className="achievements-section">
//       <h2 className="achievements-title">College Achievements</h2>
//       <div className="timeline">
//         {achievements.map((item, index) => (
//           <div key={index} className="timeline-item">
//             <div className="timeline-content">
//               <span className="timeline-year">{item.year}</span>
//               <p>{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CollegeAchievement;



import React from "react";
import "./CollegeAchievements.scss";

const CollegeAchievement = () => {
  return (
    <section className="achievements">
      <h2 className="section-title">College Achievements</h2>

      {/* Alumni Section */}
      <div className="achievement-category">
        <h3>Distinguished Alumni</h3>
        <div className="cards">
          <div className="card">
            <h4>Prakrthi Y R (2015 Batch)</h4>
            <p>Civil Judge, JMFC</p>
          </div>
          <div className="card">
            <h4>Shri Devadas H (2015 Batch)</h4>
            <p>Additional Civil Judge, Honnalli</p>
          </div>
          <div className="card">
            <h4>N. Narasimha Murthy</h4>
            <p>Additional Civil Judge, JMFC</p>
          </div>
        </div>
      </div>

      {/* NSS & Social Responsibility */}
      <div className="achievement-category">
        <h3>Social Responsibility & NSS Initiatives</h3>
        <ul>
          <li>Blood donation drives collecting 54 units, recognized as the highest donors in constituency.</li>
          <li>Eye & dental checkup camps with Agarwals.</li>
          <li>Adopted Soladevanahalli & Avalakuppe villages – NSS camps, legal awareness, medical camps, street plays.</li>
          <li>Free education for 2 meritorious students from adopted villages (5 years BA LLB course).</li>
          <li>Programs on child marriage, child labour awareness.</li>
        </ul>
      </div>

      {/* Awareness & Legal Programs */}
      <div className="achievement-category">
        <h3>Legal Awareness & Community Engagement</h3>
        <ul>
          <li>Cyber security workshop, road safety with Vijaynagar Police.</li>
          <li>Students participated in National Lok Adalat, received appreciation from DLSA.</li>
          <li>Observed World Environment Day, No Tobacco Day, International Yoga Day, Women’s Day.</li>
          <li>Human Rights Workshop with SHRC & KSLSA dignitaries.</li>
          <li>NDPS Act awareness by Dr. Raviprakash, assisted police in traffic management, won 4th place.</li>
        </ul>
      </div>

      {/* Competitions & Fests */}
      <div className="achievement-category">
        <h3>Festivals, Competitions & Culture</h3>
        <ul>
          <li>Anti-Ragging Week with poster making, essay writing, skits.</li>
          <li>Faculty Development Program inaugurated by Prof. Dr. C. Basavaraj, VC of KSLU.</li>
          <li>Prizes in Skit & Sketch at KSLU Youth Festival Zonal Competition.</li>
          <li>Annual Fest “Tarang” – Rangoli, Mehendi, Dance, Singing, Face Painting judged by renowned actors.</li>
          <li>Inter-class Sports Fest “Khel” with track, field & team games. Guests: Pallavi Chandra (Basketball), V R Beedu (Coach).</li>
        </ul>
      </div>

      {/* Library */}
      <div className="achievement-category">
        <h3>Library & Academic Resources</h3>
        <p>
          Our library hosts <strong>10,775+ books</strong>, journals, Service Law Reports, Bare Acts, and online platforms like CDJ Law Journal.
          It supports research with instant access to Supreme Court & High Court judgments.
        </p>
      </div>

      {/* Recognition */}
      <div className="achievement-category">
        <h3>Recognition & Academic Excellence</h3>
        <ul>
          <li>Awarded “Best Legal Services Clinic” at Kanoonu Santhe by KSLU (2022).</li>
          <li>Graduation Day celebrated with Hon’ble Justice Ashok G Nijagannanavar.</li>
          <li>National Seminar on Probity in Governance & Contemporary Issues.</li>
          <li>National-level essay competition on 75th Independence anniversary.</li>
          <li>Affiliation from KSLU & Bar Council of India for 3-Year LL.B with 2 extra sections.</li>
        </ul>
      </div>

      {/* Closing */}
      <div className="closing-note">
        <p>
          The past year stands as a testimony to the <strong>growth, resilience, and dedication</strong> of
          Bengaluru Law College. With the support of faculty, staff, alumni, and parents, we
          continue our legacy of excellence, nurturing <strong>responsible, skilled, and compassionate</strong> professionals.
        </p>
      </div>
    </section>
  );
};

export default CollegeAchievement;
