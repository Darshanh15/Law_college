import React from "react";
import "./Principal.scss";
import principalImg from "../../assets/collage_img/principal.jpeg"; // replace with your image

const Principal = () => {
  return (
    <section className="principal-section">
      <div className="principal-container">
        <div className="principal-image">
          <img src={principalImg} alt="Principal" />
          <div className="principal-sign">
            <h4>Dr. Devika S Ajila</h4>
            <span>BSc, LLM, Ph.D</span>
          </div>
        </div>
        <div className="principal-content">
          <h2 className="heading">Principal’s Message</h2>
          <p>
            It is my privilege to introduce to you all our college under the
            accomplished management of <strong>Law Wings Educational Trust</strong>. 
            Here in <strong>Bengaluru Law College</strong> we ensure total focus on 
            the subject at hand.
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
    </section>
  );
};

export default Principal;
