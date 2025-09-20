import React, { useState } from "react";
import "./Principal.scss";
import principalImg from "../../assets/collage_img/principal.jpeg"; // replace with your image

const boardMembers = [
  {
    name: "Dr. Devika S Ajila",
    role: "BSc, LLM, Ph.D",
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    description:
      "The institution’s essence lies in imparting knowledge to millions of aspirants who want to make a remarkable growth in the field of legal education and profession.",
    p1: "You know, you teach. You do not know, you learn is what we believe in. Every human is born to learn and will continue to do so over the years to come. Our Institution has attempted the first step in this endeavour.",
    p2: "We vow to gift a crew of proficient Advocates to the society. Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.",
    p3: "Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.Bangalore Law College is dedicated to nurturing future legal professionals with excellence in education and ethics. We empower students with knowledge, discipline, and practical skills to excel in the field of law.",
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
            <p className="quote">“{activeMember.quote}”</p>
            <p>{activeMember.description}</p>
            <p>{activeMember.p1}</p>
            <p>{activeMember.p2}</p>
            <p>{activeMember.p3}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Principal;
