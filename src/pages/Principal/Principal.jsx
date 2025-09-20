import React, { useState } from "react";
import "./Principal.scss";
import principalImg from "../../assets/collage_img/principal.jpeg"; // replace with your image

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

const Principal = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="principal-section">
      <div className="principal-container">
        <div className="principal-image">
          <img src={principalImg} alt="Principal" />
          <div className="principal-sign">
            <h4>{boardMembers[0].name}</h4>
            <span>{boardMembers[0].role}</span>
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
        </div>

        <div className="principal-content">
          <h2 className="heading">Principal’s Message</h2>
          <p>
            It is my privilege to introduce to you all our college under the
            accomplished management of <strong>Law Wings Educational Trust</strong>.
            Here in <strong>Bengaluru Law College</strong> we ensure total focus
            on the subject at hand.
          </p>
          <p>
            I believe that an accessible legal education can be a powerful force
            for positive change. We foster a supportive culture where students
            recognize the value of working together and professors are committed
            to supporting their students.
          </p>
          <p>
            We offer a legal education that blends case law theory with relevant
            experience and professional opportunities. It goes without saying
            that we not only prepare students to shine scholastically but also
            equip them to be humble human beings.
          </p>
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

export default Principal;
