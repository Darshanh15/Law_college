import React, { useState } from "react";

import "./PrincipalSection.scss";
import principalImg from '../../assets/collage_img/principal.jpeg'

const boardMembers = [
  {
    name: "Dr. Devika S Ajila",
    role: "BSc, LLM, Ph.D",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    description: "Dr. Devika S. Ajila, born in Kabatar, Mangaluru, is an accomplished academician, legal professional, and administrator with an extensive background in law and education.",
    p1: "She completed her B.Sc. at Vijaya College, Mulki under Mangaluru University, followed by her LL.B. from the University of Law, Bengaluru University. Pursuing her passion for legal studies, she went on to obtain her LL.M. with specialization in Environmental Law from the same institution. She later earned her Ph.D. in Law from Venkateshwara University, Gajraula, further strengthening her expertise in the field.",
    p2: "Dr. Devika. S. Ajila began her professional journey as a High Court Advocate, practicing for five years before transitioning into academia. In 2012, she commenced her teaching career as an Assistant Professor and has since contributed her services at several esteemed institutions including the University of Law, Bengaluru University, Dr. Ambedkar Engineering College, and Bengaluru Law College.",
    p3: "Her leadership skills were recognized when she was appointed as the Principal of Bengaluru Law College in 2017, a role in which she continues to serve with distinction. Beyond administration, she has played key roles in academic governance. Additionally, she contributed as an Internal Senior Supervisor for KSLU Examinations in 2017. In 2022, she was appointed as a Board of Examiners (BOE) member of Karnataka State Law University (KSLU) for LL.B. and PG Diploma courses and as a LIC member of Karnataka State Law University (KSLU). She has also served as an External Evaluator for Bengaluru Law University for two years, as Deputy Custodian in 2022, and from 2023, as Custodian.",
    p4: "Dr. Ajila has made significant academic contributions through presentations, seminars, and lectures. Notably, she delivered a presentation on “Constitutional Provisions with Reference to Women’s Rights” at Maharani Ammani College for Women, served as a Resource Person on “Indian Constitutional Values” at SJR College for Women, and presented on “Guidelines on Guardianship and Will in Mohammedan Law”, among many other academic engagements.",
    p5: "Her dedication and excellence have earned her several prestigious honors, including the Educational Excellence Award, the Akshardasohi Award, and the Shrishakthi Award.With her rich blend of legal practice, academic teaching, research, and leadership, Dr. Devika S. Ajila continues to inspire students, contribute to legal scholarship, and advance the cause of quality legal education.",
    img: principalImg,
  },
];

const PrincipalSection = () => {
    const [activeMember, setActiveMember] = useState(null);
  
  return (
    <section className="principal">
      <div className="principal-container">
        {/* Left: Image */}
        <div className="principal-img">
          <img 
            src={principalImg}
            alt="Principal" 
          />
           <a
              href="/#"
              className="read-more"
              onClick={(e) => {
                e.preventDefault();
                setActiveMember(boardMembers[0]);
              }}
            >
              Bio
            </a>
        </div>

        {/* Right: Text */}
        <div className="principal-text">
          <h2>Message from the Principal</h2>
          <p className="quote">
            "Education is not just about acquiring knowledge but about developing
            wisdom, integrity, and the ability to stand for justice. At 
            <strong> Bengaluru Law College</strong>, we nurture future legal
            professionals with values, dedication, and commitment to society."
          </p>
          <h4>Dr. Devika S Ajila</h4>
          <p className="designation">Principal,Bengaluru Law College</p>
         
        </div>
      </div>

            {/* Modal */}
      {activeMember && (
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setActiveMember(null)}>
             ✕
            </button>
            <img src={activeMember.img} alt={activeMember.name} />
            <h2>{activeMember.name}</h2>
            <h4>{activeMember.role}</h4>
            <div className="scrolbar">
            {/* <p className="quote">“{activeMember.quote}”</p> */}
            <p>{activeMember.description}</p>
            <p>{activeMember.p1}</p>
            <p>{activeMember.p2}</p>
            <p>{activeMember.p3}</p>
            <p>{activeMember.p4}</p>
            <p>{activeMember.p5}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PrincipalSection;
